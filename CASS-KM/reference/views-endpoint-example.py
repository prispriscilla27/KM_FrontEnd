"""Example view-counting service for the CASS Knowledge Centre (for IT).

The Knowledge Centre pages send one small POST per view:
    body (text/plain): {"item": "<entry id>", "month": "YYYY-MM"}
Nothing about the person is sent. The page already counts each entry once per day per browser and leaves admins out.

This service keeps a running count per entry per month in views.json and offers the counts for admins as CSV:
    GET /views.csv  ->  item,month,views
Admins download that CSV and use Admin > Views > Import view counts, then publish.

This is a reference only (Python 3 standard library, no extra packages). Your web team can build the same two
endpoints in whatever the intranet already runs (IIS/.NET, Node, a SharePoint list, ...). Put it behind the intranet's
normal sign-in and HTTPS, and limit /views.csv to admins if you like.

Run:  python views-endpoint-example.py 8080
Then in Admin > Views set the view-counting address to  https://<your host>/view   and publish.
"""
import json, re, sys, threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

DATA = Path(__file__).with_name("views.json")
LOCK = threading.Lock()
ID_RE = re.compile(r"^[A-Za-z0-9._-]{1,80}$")
MONTH_RE = re.compile(r"^\d{4}-(0[1-9]|1[0-2])$")


def load():
    try:
        return json.loads(DATA.read_text("utf-8"))
    except (FileNotFoundError, ValueError):
        return {}


class Handler(BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")

    def do_POST(self):
        if self.path.rstrip("/") != "/view":
            return self.send_error(404)
        try:
            body = json.loads(self.rfile.read(min(int(self.headers.get("Content-Length", 0)), 512)) or b"{}")
            item, month = str(body.get("item", "")), str(body.get("month", ""))
        except (ValueError, AttributeError):
            return self.send_error(400)
        if not ID_RE.match(item) or not MONTH_RE.match(month):
            return self.send_error(400)
        with LOCK:
            counts = load()
            counts.setdefault(month, {})[item] = counts.get(month, {}).get(item, 0) + 1
            DATA.write_text(json.dumps(counts, indent=1), "utf-8")
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        if self.path.rstrip("/") != "/views.csv":
            return self.send_error(404)
        with LOCK:
            counts = load()
        rows = ["item,month,views"] + [f"{i},{m},{n}" for m in sorted(counts) for i, n in sorted(counts[m].items())]
        out = ("\r\n".join(rows) + "\r\n").encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/csv; charset=utf-8")
        self.send_header("Content-Disposition", 'attachment; filename="cass-km-views.csv"')
        self._cors()
        self.end_headers()
        self.wfile.write(out)


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    print(f"Counting views on http://localhost:{port}/view  (CSV: /views.csv)")
    ThreadingHTTPServer(("", port), Handler).serve_forever()
