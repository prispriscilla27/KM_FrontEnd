/* Shared helpers for the browser tests. Run them with: bash tests/run-all.sh
   Needs Node, the "playwright" package (global or in NODE_PATH) and Python 3 (for a tiny local web server). */
const { chromium } = require('playwright');
const cp = require('child_process'), path = require('path');
const SITE = path.resolve(__dirname, '..', 'CASS-KM');
const PORT = +process.env.KM_PORT || 8790;
const BASE = `http://localhost:${PORT}/`;
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; console.log('  PASS', m) } else { fail++; console.log('  FAIL', m) } };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const summary = () => { console.log(`\n${pass} passed, ${fail} failed`); return fail ? 1 : 0 };
function startServer() { const p = cp.spawn('python3', ['-m', 'http.server', String(PORT), '--directory', SITE], { stdio: 'ignore' }); return () => p.kill() }
/* A browser context. By default the welcome pop-up and the page guides are marked as already seen, so they do not cover the pages
   under test. Pass { popups: true } to test them. */
const INIT = `(()=>{try{const l=window.localStorage;if(!l.getItem('cassKM.welcomeSeen'))l.setItem('cassKM.welcomeSeen','1');
 if(!l.getItem('cassKM.guideSeen')){const m={};['service','search','glossary','academy','path','week','test','document'].forEach(k=>m[k]=Date.now());l.setItem('cassKM.guideSeen',JSON.stringify(m))}
 l.setItem('cassKM.lastActive',String(Date.now()))}catch(e){}})()`;
async function newContext(browser, { popups = false, width = 1440, height = 900, errors = null, data = null } = {}) {
  const c = await browser.newContext({ viewport: { width, height }, acceptDownloads: true });
  if (!popups) await c.addInitScript(INIT);
  if (errors) c.on('page', p => { p.on('pageerror', e => errors.push('pageerror ' + p.url() + ': ' + e.message)); p.on('console', m => { if (m.type() === 'error' && !/favicon|404|ERR_FILE_NOT_FOUND/.test(m.text())) errors.push('console ' + p.url() + ': ' + m.text()) }) });
  if (data) await overrideData(c, data);
  return c;
}
/* Change the published km-data.js for this context: fn receives the parsed data object and may modify it. */
async function overrideData(ctx, fn) {
  await ctx.route('**/km-data.js', async route => {
    const res = await route.fetch(); const t = await res.text(); const at = t.indexOf('window.KM_DATA =');
    const D = JSON.parse(t.slice(t.indexOf('{', at), t.lastIndexOf('}') + 1)); fn(D);
    await route.fulfill({ response: res, body: t.slice(0, at) + 'window.KM_DATA = ' + JSON.stringify(D) + ';\n' });
  });
}
async function adminLogin(page, user = 'AdminPE', pw = 'PE2026') {
  await page.goto(BASE + 'admin.html'); await page.fill('#lu', user); await page.fill('#lp', pw); await page.click('#loginBtn'); await sleep(350);
  for (let i = 0; i < 3; i++) if (await page.locator('.modal').count()) { await page.keyboard.press('Escape'); await sleep(100) }
}
const nav = async (page, k) => { await page.evaluate(k => { location.hash = k }, k); await sleep(250) };
const run = async (fn) => { const stop = startServer(); await sleep(900); const browser = await chromium.launch({ channel: 'chromium' }); let code = 2;
  try { await fn(browser) ; code = summary() } catch (e) { console.error(e); code = 2 } finally { await browser.close(); stop() } process.exit(code) };
module.exports = { BASE, ok, sleep, summary, newContext, overrideData, adminLogin, nav, run };
