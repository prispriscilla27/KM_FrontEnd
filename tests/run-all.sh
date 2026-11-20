#!/bin/bash
# Runs every browser test against the site in CASS-KM. Needs: node, python3 and the "playwright" npm package (global or in NODE_PATH).
cd "$(dirname "$0")/.."
export NODE_PATH="${NODE_PATH:-$(npm root -g)}"
rc=0
for t in tests/popups.test.js tests/smoke.test.js; do echo "== $t"; node "$t" 2>&1 | grep -E "FAIL|passed,|Error" ; [ "${PIPESTATUS[0]}" -ne 0 ] && rc=1; done
exit $rc
