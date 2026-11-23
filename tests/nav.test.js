/* Top tab bar (with Admin login), the separate Glossary page, and the drill-down Service Taxonomy list. */
const { BASE, ok, sleep, newContext, run } = require('./helpers');
run(async browser => {
  const errors = []; let ctx = await newContext(browser, { errors }); let p = await ctx.newPage();
  const go = async url => { await p.goto('about:blank'); await p.goto(BASE + url); await sleep(500) };
  const txt = sel => p.locator(sel).first().innerText();

  console.log('1. Top tab bar');
  const pages = { 'index.html': 'Knowledge Centre', 'glossary.html': 'Glossary', 'new-joiner-academy.html': 'New Joiner Academy', 'academy-week.html?week=1&tower=human-resources': 'New Joiner Academy', 'academy-test.html?test=cp1&tower=human-resources': 'New Joiner Academy', 'document.html?item=lc-flow': 'Knowledge Centre', 'people.html': 'People directory' };
  for (const [u, on] of Object.entries(pages)) {
    await go(u);
    const r = await p.evaluate(() => ({ tabs: [...document.querySelectorAll('.tabbar .nav a')].map(a => a.textContent), on: [...document.querySelectorAll('.tabbar .nav a.on')].map(a => a.textContent), adm: (document.querySelector('.tabbar .adm') || {}).textContent, href: (document.querySelector('.tabbar .adm') || {}).getAttribute && document.querySelector('.tabbar .adm').getAttribute('href'), oldNav: document.querySelectorAll('header .nav').length, bg: getComputedStyle(document.querySelector('.tabbar')).backgroundColor, logo: !!document.querySelector('header.top .brand img') }));
    ok(r.tabs.join('|') === 'Knowledge Centre|Glossary|New Joiner Academy|People directory' && r.on.join() === on, u.split('?')[0] + ': four tabs, “' + on + '” underlined');
    ok(r.adm === 'Admin login' && r.href === 'admin.html' && r.oldNav === 0 && r.bg === 'rgb(255, 255, 255)' && r.logo, u.split('?')[0] + ': Admin login on the same white bar, logo bar above');
  }
  await go('index.html'); ok(await p.locator('.tabbar .kmhelp').count() === 1, 'the “?” help button sits in the tab bar');
  const rect = await p.evaluate(() => { const a = document.querySelector('.tabbar .adm').getBoundingClientRect(), n = document.querySelector('.tabbar .nav a.on').getBoundingClientRect(), t = document.querySelector('.tabbar').getBoundingClientRect(); return { adminRight: a.right > innerWidth * .8, sameBar: a.top >= t.top && a.bottom <= t.bottom && n.top >= t.top && n.bottom <= t.bottom } });
  ok(rect.adminRight && rect.sameBar, 'Admin login is at the right end of the same bar as the tabs');
  await ctx.close();
  ctx = await newContext(browser, { width: 390, height: 844, errors }); p = await ctx.newPage();
  for (const u of ['index.html', 'glossary.html', 'people.html', 'new-joiner-academy.html']) {
    await go(u); const ph = await p.evaluate(() => { const a = document.querySelector('.tabbar .adm').getBoundingClientRect(); return { page: document.documentElement.scrollWidth, admin: a.left >= 0 && a.right <= innerWidth && a.width > 40 } });
    ok(ph.page <= 390 && ph.admin, 'phone: ' + u + ' does not scroll sideways and Admin login stays in view');
  }
  await go('people.html'); ok(await p.evaluate(() => { const n = document.querySelector('.tabbar .nav'); return n.scrollWidth > n.clientWidth }) , 'phone: the tabs scroll sideways inside their own area');
  await ctx.close();

  console.log('2. Glossary on its own page');
  ctx = await newContext(browser, { errors }); p = await ctx.newPage();
  await go('glossary.html');
  ok(/65 terms/.test(await txt('#glcount')) && await p.locator('.gl-row').count() === 65, 'glossary.html lists all 65 terms');
  ok(await p.evaluate(() => KM.glossary.length === 65), 'the terms come from the same data as before');
  await p.click('[data-tower="3"]'); await sleep(200); ok(!/65 terms/.test(await txt('#glcount')), 'tower filter narrows the list');
  await p.click('[data-tower="all"]'); await p.fill('#gq', 'guarantee'); await sleep(200); ok(await p.locator('.gl-row').count() > 0 && await p.locator('.gl-row mark').count() > 0, 'search finds terms and highlights the word');
  await p.fill('#gq', 'zzzzzz'); await sleep(150); ok(/No terms match/.test(await txt('#gllist')), 'nothing found: friendly message');
  await p.fill('#gq', ''); await sleep(100); ok(await p.locator('#glaz .azb:not([disabled])').count() > 5, 'A to Z jump buttons');
  await go('glossary.html?term=LC'); ok(await p.locator('#gt-LC.gl-row').count() === 1, 'glossary.html?term=LC highlights the term LC');
  ok(await p.locator('.pill.tw').first().evaluate(e => getComputedStyle(e).backgroundColor) === 'rgb(227, 237, 251)', 'tower tags use the calm light-blue colour');
  await go('index.html#glossary'); ok(/glossary\.html$/.test(p.url()), 'an old index.html#glossary link jumps to the glossary page');
  await go('index.html');
  ok(!/Open the glossary/.test(await txt('#main')) && await p.locator('#gllist, [data-view="glossary"], [data-gtower]').count() === 0, 'the Knowledge Centre home has no glossary box any more');
  await go('index.html#l2-3.1.1'); ok(await p.locator('#gllist, #gq').count() === 0 && !/Glossary/i.test(await txt('#main')), 'service pages have no glossary part');
  await go('index.html'); await p.fill('#q', 'guarantee'); await p.press('#q', 'Enter'); await sleep(500);
  const gres = p.locator('#main .resrow:has(.ic)').filter({ hasText: 'guarantee' }); ok(await p.locator('#main .resrow').count() > 0, 'search still finds glossary terms');
  const gb = p.locator('#main [data-act*="glossary"]').first(); if (await gb.count()) { await gb.click(); await sleep(600); ok(/glossary\.html\?term=/.test(p.url()), 'a glossary search hit opens the glossary page at that term') } else ok(false, 'a glossary search hit exists');
  await ctx.close();

  console.log('3. Service Taxonomy: drill-down list');
  ctx = await newContext(browser, { errors }); p = await ctx.newPage(); await go('index.html');
  const names = await p.locator('#tree .dr-row .nm').evaluateAll(e => e.map(x => x.childNodes[0].textContent));
  ok(names.join('|') === 'Customer Operations|Procurement|Finance & Accounting|Human Resources' && await p.locator('#tree details, #tree summary').count() === 0, 'start: only the four towers, no open-and-close tree');
  ok(/9 services/.test(await txt('#tree .dr-row')), 'each tower says how many services it has');
  await p.click('#tree [data-nav="l0:3"]'); await sleep(100);
  ok(/Finance & Accounting/.test(await txt('#tree .dr-title')) && await p.locator('#tree .dr-row').count() === 7, 'a tower opens its 7 areas, one level only');
  ok(await p.evaluate(() => document.activeElement.classList.contains('dr-back')), 'the focus moves to “Back” (keyboard friendly)');
  await p.click('#tree [data-nav="l1:3.1"]'); await sleep(100);
  ok(/3\.1 Order to Cash/.test(await txt('#tree .dr-title')) && await p.locator('#tree .leaf').count() === 3, 'an area opens its services');
  ok(await p.locator('#tree .leaf .dot').count() === 3, 'the coverage dots are shown');
  await p.click('#tree .leaf[data-l2="3.1.1"]'); await sleep(400);
  ok(/#l2-3\.1\.1/.test(p.url()) && await p.locator('#tree .leaf.on').count() === 1 && await p.locator('#tree .leaf').count() === 3 && /Credit Management/.test(await txt('#main h2')), 'choosing a service opens its page; the list stays on that area with it highlighted');
  await p.click('#tree [data-nav="back"]'); await sleep(100);
  ok(await p.locator('#tree .dr-row').count() === 7 && await p.evaluate(() => document.activeElement.dataset.nav === 'l1:3.1'), 'Back goes up one level and the focus returns to where you were');
  await p.click('#tree [data-nav="back"]'); await sleep(100); ok(await p.locator('#tree .dr-row').count() === 4, 'Back again: the four towers');
  await p.fill('#tf', 'tax'); await sleep(150);
  ok(await p.locator('#tree .leaf').count() > 0 && await p.locator('#tree .leaf small').first().evaluate(e => /›/.test(e.textContent)) && await p.locator('#tree .dr-row').count() === 0, 'the filter lists matching services with where they sit');
  await p.fill('#tf', '3.2'); await sleep(150); ok(await p.locator('#tree .leaf').count() === 4, 'the filter understands codes (3.2 gives its 4 services)');
  await p.fill('#tf', ''); await sleep(150); ok(await p.locator('#tree .dr-row').count() > 0, 'clearing the filter returns to the list');
  await go('index.html#l2-4.1.1'); ok(/4\.1 /.test(await txt('#tree .dr-title')) && await p.locator('#tree .leaf.on').count() === 1, 'a shared link to a service opens the list at the right area, service highlighted');
  await go('index.html#l2-1.1.1'); ok(await p.locator('#tree .leaf.on[data-l2="1.1.1"]').count() === 1, 'also for Customer Operations');
  await ctx.close();
  ctx = await newContext(browser, { width: 390, height: 844, errors }); p = await ctx.newPage(); await go('index.html');
  ok(await p.evaluate(() => document.documentElement.scrollWidth <= 390), 'phone: no sideways scroll with the new list');
  await p.click('#tree [data-nav="l0:3"]'); await p.click('#tree [data-nav="l1:3.1"]'); await sleep(100); ok(await p.locator('#tree .leaf').count() === 3, 'phone: the list works the same');
  await ctx.close();
  ok(errors.length === 0, 'no page errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
});
