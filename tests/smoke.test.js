/* Regression check of the existing features: reader pages, search, service pages, Academy, and the main Admin flows. */
const fs = require('fs');
const { BASE, ok, sleep, newContext, overrideData, adminLogin, nav, run } = require('./helpers');

run(async browser => {
  const errors = [];
  let ctx = await newContext(browser, { errors }); let p = await ctx.newPage();
  const go = async url => { await p.goto('about:blank'); await p.goto(BASE + url); await sleep(450) };
  const txt = s => p.locator(s).first().innerText();

  console.log('1. Knowledge Centre');
  await go('index.html');
  ok(await p.locator('.recent .item').count() === 6 && /Recently updated/.test(await txt('#main')), 'home: Recently updated shows 6 items');
  ok(await p.locator('.recent .item .kmviews').count() === 6, 'every card shows its view count');
  ok(await p.locator('#tree .dr-row').count() === 4 && await p.locator('#tree details').count() === 0, 'taxonomy: the box starts with the four towers (drill-down list)');
  ok(!/Find SOPs, desktop procedures|Each bar counts L2 services|Look up the acronyms/.test(await p.locator('body').innerText()), 'the removed intro texts are gone');
  ok(await p.evaluate(() => KM.itemTypes.some(t => t.name === 'SOP') && !KM.itemTypes.some(t => /DTP/.test(t.name)) && !KM.glossary.some(g => g.term === 'DTP')), 'category is called SOP; DTP term removed');
  await p.fill('#q', 'letter of credit'); await sleep(400);
  ok(await p.locator('#suggest .sg').count() > 0, 'search suggestions appear while typing');
  await p.press('#q', 'Enter'); await sleep(500);
  ok(/Results for/.test(await txt('#main')) && await p.locator('#main .item, #main .resrow').count() > 0, 'search results page');
  await go('index.html'); await p.fill('#q', '3.1.1'); await p.press('#q', 'Enter'); await sleep(500);
  ok(await p.locator('#main .resrow').count() > 0, 'a service code finds the service');
  await go('glossary.html'); ok(/65 terms/.test(await txt('#glcount')), 'glossary: 65 terms');
  await p.click('[data-tower="3"]'); await sleep(200); ok(!/65 terms/.test(await txt('#glcount')), 'glossary tower filter narrows the list');

  console.log('2. Service pages');
  await go('index.html#l2-3.1.1');
  const order = await p.evaluate(() => [...document.querySelectorAll('#main > *')].map(e => e.id === 'l3dd' ? 'L3' : e.classList.contains('kmfaq') ? 'FAQ' : (e.querySelector('h2,h3,.feedback span') || e).textContent.trim().slice(0, 24)));
  ok(/Business process map/.test(order[2]) && order.indexOf('L3') === order.findIndex(x => /helpful/.test(x)) - 1 && order[order.length - 1] === 'FAQ', 'order: top box, process map, knowledge, Functions (L3), feedback, common questions: ' + order.join(' | '));
  ok(await p.locator('.node').count() === 7 && await p.locator('#l3dd').evaluate(e => !e.open), '7 process steps; Functions (L3) is closed');
  ok(/Page owner/i.test(await txt('#main')) && /Ask the expert/i.test(await txt('#main')), 'page owner and expert shown');
  await go('index.html#l2-1.1.1'); ok(/Content not started/.test(await txt('#main')) && await p.locator('text=Request this content').count() === 1, 'an empty service says “Content not started” with the request button');
  await go('index.html#l2-1.1.4'); ok(await p.locator('#main .asset h4').count() === 7 || await p.locator('#main .asset h4').count() > 0, '1.1.4 shows category boxes');
  await go('index.html#l2-3.1.1'); await p.locator('.item').first().click(); await sleep(300);
  ok(await p.locator('.drawer').count() === 1, 'an item opens in the detail panel');
  const v1 = (await p.locator('.drawer .kmviews').innerText()).trim(); await p.keyboard.press('Escape'); await sleep(150); await p.locator('.item').first().click(); await sleep(250);
  ok(v1 === (await p.locator('.drawer .kmviews').innerText()).trim(), 'reopening the same item the same day does not add a view (' + v1 + ')');
  await ctx.close();

  ctx = await newContext(browser, { data: D => { Object.assign(D.settings.servicePage, { hideFields: { owner: true, lastReviewed: true }, hideTypesAll: ['Video'], hideTypes: { '3.1.1': ['SOP'] } }) } }); p = await ctx.newPage();
  await go('index.html#l2-3.1.1'); const t = await txt('#main');
  ok(!/Page owner/i.test(t) && !/Last reviewed/i.test(t) && /Ask the expert/i.test(t), 'Settings: hidden page details are hidden, others stay');
  await p.locator('.node').nth(4).click(); await sleep(250); const boxes = await p.locator('#main .asset h4').allInnerTexts();
  ok(!boxes.some(b => /^Video/.test(b)) && !boxes.some(b => /^SOP/.test(b)) && await p.locator('.node').count() === 7, 'Settings: hidden categories lose their box, process steps always show');
  await ctx.close();

  console.log('3. New Joiner Academy');
  ctx = await newContext(browser, { errors }); p = await ctx.newPage();
  await go('new-joiner-academy.html'); ok(await p.locator('#pickList .tcard').count() === 4, 'four tower cards');
  await p.click('.tcard[data-tower="Procurement"]'); await sleep(250);
  ok((await p.locator('#pickList .tcard').count()) === 2 && /Choose your area in Procurement/.test(await txt('#pickH')), 'Procurement asks for an area (2)');
  await p.click('#pickList .tcard >> nth=1'); await sleep(300);
  ok(/Commercial Operations/.test(await txt('#jH')) && await p.locator('#svcList a').count() === 2, 'area path with “Services in this area”');
  ok(await p.locator('a.wkbtn, button.wkbtn').count() === 12, '12 weeks on the path');
  await go('new-joiner-academy.html'); await p.click('.tcard[data-tower="Human Resources"]'); await sleep(250); ok(/Human Resources/.test(await txt('#jH')) && !/›/.test(await txt('#jH')), 'a tower with one area goes straight to its path');
  await go('academy-week.html?week=3&tower=human-resources'); ok(/locked/i.test(await txt('#page')), 'a locked week says so');
  await go('academy-test.html?test=cp1&tower=human-resources'); ok(/locked/i.test(await txt('#box')), 'a locked test says so');
  await ctx.close();

  console.log('4. Phone width');
  ctx = await newContext(browser, { width: 390, height: 844, errors }); p = await ctx.newPage();
  for (const u of ['index.html', 'index.html#l2-3.1.1', 'new-joiner-academy.html', 'glossary.html']) { await go(u); ok(await p.evaluate(() => document.documentElement.scrollWidth <= 390), 'no sideways scroll on ' + u) }
  await ctx.close();

  console.log('5. Admin: login, accounts, lock');
  ctx = await newContext(browser, { errors }); p = await ctx.newPage();
  await p.goto(BASE + 'admin.html'); await p.fill('#lu', 'adminpe'); await p.fill('#lp', 'PE2026'); await p.click('#loginBtn'); await sleep(250);
  ok(/not correct/.test(await txt('#loginErr')), 'username is case-sensitive');
  await adminLogin(p); ok(await p.locator('#view').count() === 1 && /Process Excellence/.test(await txt('.top')), 'AdminPE logs in');
  await nav(p, 'set'); await p.click('[data-act=accAdd]'); await sleep(150);
  ok(!/3 to 30 letters/.test(await txt('.sidepanel')), 'no hint under Username');
  const uerr = async u => { await p.fill('#f_username', u); await p.locator('#f_username').blur(); await p.evaluate(() => LAYERS[LAYERS.length - 1].check(true)); await sleep(80); return p.locator('.sidepanel [data-f=username] .err').innerText() };
  ok(/Use 3 to 30/.test(await uerr('bad name!')) && (await uerr('Ok_name-1.x')) === '' && /different capitals/.test(await uerr('adminpe')), 'username rules: symbols refused, . _ - allowed, capitals-only duplicates refused');
  await p.keyboard.press('Escape'); await sleep(80); if (await p.locator('.modal [data-x=o]').count()) await p.click('.modal [data-x=o]');
  await p.evaluate(() => { const q = DR.people.find(x => !acctOfPerson(x.id)); ACC.accounts.push({ id: 'acc-lk', name: q.name, username: 'Lock.Test', personId: q.id, type: 'editor', towers: ['1'], roles: [], passwordHash: pwHash('Lock.Test', 'Correct-Horse-9'), mustChange: false, active: true }); saveAccounts() });
  await p.click('[data-act=logout]'); await sleep(200);
  const tryLogin = async (u, pw) => { await p.fill('#lu', u); await p.fill('#lp', pw); await p.click('#loginBtn'); await sleep(220); return (await p.locator('#loginErr').count()) ? txt('#loginErr') : '' };
  await tryLogin('Lock.Test', 'w1'); await tryLogin('Lock.Test', 'w2'); const lk = await tryLogin('Lock.Test', 'w3');
  ok(/locked/i.test(lk), '3 wrong passwords lock the account: ' + lk);
  ok(/locked/i.test(await tryLogin('Lock.Test', 'Correct-Horse-9')), 'the right password is refused while locked');
  await tryLogin('AdminPE', 'PE2026'); await sleep(200);
  ok(/Locked accounts/.test(await p.locator('.modal').last().innerText().catch(() => '')), 'Super admin gets the lock notice at login');
  await p.locator('.modal [data-lk=unlock]').click(); await sleep(150);
  ok(await p.evaluate(() => !acct('acc-lk').locked && !!acct('acc-lk').unlockedAt), 'Super admin can unlock it');
  await p.keyboard.press('Escape');

  console.log('6. Admin: items, versions, sync to the Knowledge Centre');
  await nav(p, 'items'); ok(await p.locator('[data-row]').count() === 15 || await p.locator('[data-row]').count() > 10, 'items list');
  await p.click('[data-act=itemEdit][data-id="rtp-qrd"]'); await sleep(200);
  await p.fill('#f_title', 'Zebrafish purchase checklist'); if (await p.locator('[name=kind][value=small]').count()) await p.check('[name=kind][value=small]');
  await p.click('.pmodal [data-x=save], .sidepanel [data-x=save]'); await sleep(300); for (let i = 0; i < 3; i++) if (await p.locator('.modal').count()) { await p.keyboard.press('Escape'); await sleep(80) }
  ok(await p.evaluate(() => byId(DR.items, 'rtp-qrd').title === 'Zebrafish purchase checklist' && byId(DR.items, 'rtp-qrd').versions.length >= 2), 'edit saved with a new version entry');
  await p.click('[data-act=itemEdit][data-id="rtp-qrd"]'); await sleep(200); await p.click('.pmodal [data-ptab=v]'); await sleep(150);
  ok(await p.locator('#verList table.vtable thead th').count() >= 7 && await p.locator('#verList tbody tr[data-vrow]').count() >= 2, 'Versions tab is a table with one row per version');
  await p.keyboard.press('Escape'); await sleep(80); if (await p.locator('.modal [data-x=o]').count()) await p.click('.modal [data-x=o]');
  const site = await ctx.newPage(); await site.goto(BASE + 'index.html'); await sleep(450); await site.fill('#q', 'zebrafish'); await sleep(400);
  ok(/Zebrafish purchase checklist/.test(await site.locator('#suggest').innerText()), 'the edit is found by the search bar in the Knowledge Centre (same browser)');
  await site.close();

  console.log('7. Admin: other sections');
  for (const [k, re] of [['dash', /Dashboard/], ['l2', /Service pages/], ['people', /People directory/], ['gloss', /Glossary/], ['acad', /Academy/], ['views', /Views/], ['log', /Change log/], ['help', /How to use/], ['set', /Settings/]]) { await nav(p, k); ok(re.test(await txt('#view h1')), 'section opens: ' + k) }
  await nav(p, 'views'); await p.click('[data-act=viewsSample]'); await sleep(250); ok(await p.locator('.vchart .bar').count() >= 10, 'Views: chart with sample numbers');
  await nav(p, 'set'); ok(await p.locator('#svcpage tbody tr').count() === 51, 'Settings: service page table (50 services + the all-pages row)');
  await nav(p, 'acad'); await p.click('[data-act=acWeek][data-n="3"]'); await sleep(250); ok(await p.locator('#tlinks [data-tw]').count() === 11, 'Academy: week editor has 11 learning-path tabs'); await p.keyboard.press('Escape'); await sleep(80); if (await p.locator('.modal [data-x=o]').count()) await p.click('.modal [data-x=o]');
  console.log('8. Publishing');
  await p.click('#strip [data-act=publish]'); await sleep(350);
  const [dl] = await Promise.all([p.waitForEvent('download'), p.click('.modal [data-x=zip]')]); const zp = await dl.path(); const hdr = fs.readFileSync(zp).subarray(0, 2).toString();
  ok(/\.zip$/.test(dl.suggestedFilename()) && hdr === 'PK', 'Download .zip produces a zip file (' + dl.suggestedFilename() + ')');
  const zt = fs.readFileSync(zp).toString('latin1'); ok(zt.includes('km-data.js') && /Zebrafish purchase checklist/.test(zt), 'the zip contains km-data.js with the edits, including the new settings');
  ok(/"welcome"/.test(zt) && /"guides"/.test(zt) && /"faqs"/.test(zt), 'km-data.js carries the welcome, guide and common question settings');
  ok(errors.length === 0, 'no page errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
  await ctx.close();
});
