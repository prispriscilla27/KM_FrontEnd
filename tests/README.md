# Browser tests

`bash tests/run-all.sh` runs every test against the site in `CASS-KM/`.

Needs Node, Python 3 and the `playwright` npm package (global or in `NODE_PATH`; Chromium must be installed for it).
The tests start a local web server on port 8790 (`KM_PORT` changes it) and do not modify any site file.

- `popups.test.js`: welcome pop-up, page guides (once per page, 12 hours, close, “?”), common questions (max 3), card styling, and the Super admin settings that control them.
- `smoke.test.js`: reader pages, search, service pages, Academy, phone width, Admin login and lock, items and versions, other Admin sections, publishing.
- `helpers.js`: shared code. By default the pop-ups are marked as seen so they do not cover the pages under test.
