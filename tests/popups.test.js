/* Welcome pop-up, page guides, common questions and card styling (ideas 1, 2, 4 and 5), reader side and Admin side. */
const { BASE, ok, sleep, newContext, overrideData, adminLogin, nav, run } = require('./helpers');
const H = 3600e3;

run(async browser => {
  const errors = [];

  console.log('1. Welcome pop-up');
  let ctx = await newContext(browser, { popups: true, errors }); let p = await ctx.newPage();
  await p.goto(BASE + 'index.html'); await sleep(500);
  ok(await p.locator('.kmw').count() === 1, 'first visit: the welcome pop-up shows');
  ok(await p.locator('#startBox').count() === 0, 'the “Start here” box is gone from the sidebar');
  const logo = await p.evaluate(() => { const i = document.querySelector('.kmw .kmlogo img'), b = document.querySelector('.kmw .kmlogo'), cs = getComputedStyle(b); return { loaded: i.complete && i.naturalWidth > 0, src: i.getAttribute('src'), alt: i.alt, ratio: b.offsetWidth / b.offsetHeight, bg: cs.backgroundImage } });
  ok(logo.loaded && /cass-logo\.png$/.test(logo.src) && /Chandra Asri Sentral Solusi/.test(logo.alt), 'the CASS logo is shown (' + logo.src + ')');
  ok(logo.ratio > 2.4 && /gradient/.test(logo.bg), 'dark badge follows the wide logo shape (ratio ' + logo.ratio.toFixed(2) + ') with our header navy gradient');
  const wt = await p.locator('.kmw').innerText();
  ok(/Welcome to the CASS Knowledge Centre/.test(wt) && /Search/.test(wt) && /Browse/.test(wt) && /Open a process step/.test(wt) && (await p.locator('.kmw ol li').count()) === 3, 'title, introduction and the three steps');
  ok(await p.evaluate(() => document.activeElement.classList.contains('kmw-go')), 'keyboard focus starts on the button');
  await p.keyboard.press('Tab'); ok(await p.evaluate(() => document.activeElement.classList.contains('kmw-x')), 'Tab moves inside the pop-up (focus trap)');
  await p.click('.kmw-go'); await sleep(150);
  ok(await p.locator('.kmw').count() === 0, 'the button closes it');
  await p.reload(); await sleep(400);
  ok(await p.locator('.kmw').count() === 0, 'it does not show again after a reload');
  ok(await p.locator('.kmhelp').isVisible(), 'the “?” button is in the top bar');
  await p.click('.kmhelp'); await sleep(150); ok(await p.locator('.kmw').count() === 1, '“?” opens the welcome again');
  await p.keyboard.press('Escape'); await sleep(100); ok(await p.locator('.kmw').count() === 0, 'Esc closes it');
  await p.click('.kmhelp'); await sleep(100); await p.click('.kmw-x'); await sleep(100); ok(await p.locator('.kmw').count() === 0, 'the × closes it');
  await p.click('.kmhelp'); await sleep(100); await p.mouse.click(8, 8); await sleep(100); ok(await p.locator('.kmw').count() === 0, 'clicking outside closes it');
  await p.goto('about:blank'); await p.goto(BASE + 'index.html#l2-3.1.1'); await sleep(500);
  ok(await p.locator('.kmw').count() === 0, 'a deep link to a service page does not open the welcome');
  await ctx.close();

  ctx = await newContext(browser, { popups: true, data: D => { D.settings.welcome.on = false } }); p = await ctx.newPage();
  await p.goto(BASE + 'index.html'); await sleep(500);
  ok(await p.locator('.kmw').count() === 0 && await p.locator('.kmhelp').isHidden(), 'switched off in Settings: no welcome and no “?” on the home page');
  await ctx.close();

  console.log('2. Page guides');
  ctx = await newContext(browser, { popups: true, errors }); p = await ctx.newPage();
  await p.goto(BASE + 'index.html'); await sleep(400); await p.click('.kmw-go');
  await p.goto('about:blank'); await p.goto(BASE + 'index.html#l2-3.1.1'); await sleep(600);
  ok(await p.locator('.kmg').count() === 1 && /Select a step on the process map/.test(await p.locator('.kmg').innerText()), 'service page: the guide pops up with its text');
  ok(await p.locator('.kmg .kmlogo img').evaluate(i => i.complete && i.naturalWidth > 0), 'the guide carries the CASS logo');
  ok(await p.locator('.kmg-x').isVisible() && await p.locator('.kmg-x').getAttribute('aria-label') === 'Close this guide', 'it has a close × (top right)');
  const pos = await p.evaluate(() => { const g = document.querySelector('.kmg').getBoundingClientRect(), x = document.querySelector('.kmg-x').getBoundingClientRect(); return { right: x.right <= g.right + 1 && g.right - x.right < 30, top: x.top - g.top < 30 } });
  ok(pos.right && pos.top, 'the × sits in the top right corner of the guide');
  await p.click('.kmg-x'); await sleep(100); ok(await p.locator('.kmg').count() === 0, '× closes it');
  await p.evaluate(() => { location.hash = '#l2-3.1.2' }); await sleep(400);
  ok(await p.locator('.kmg').count() === 0, 'another service page: not shown again (already seen)');
  await p.reload(); await sleep(400); ok(await p.locator('.kmg').count() === 0, 'a reload does not show it again');
  await p.goto(BASE + 'glossary.html'); await sleep(500);
  ok(/Look up an abbreviation/.test(await p.locator('.kmg').innerText().catch(() => '')), 'glossary has its own guide, shown on first visit');
  await p.keyboard.press('Escape'); await sleep(100); ok(await p.locator('.kmg').count() === 0, 'Esc closes a guide');
  await p.goto(BASE + 'index.html'); await sleep(400);
  await p.fill('#q', 'letter of credit'); await p.press('#q', 'Enter'); await sleep(500);
  ok(/Results are grouped by type/.test(await p.locator('.kmg').innerText().catch(() => '')), 'search results have their own guide');
  await p.goto('about:blank'); await p.goto(BASE + 'index.html#l2-3.1.1'); await sleep(400);
  await p.click('.kmhelp'); await sleep(150); ok(await p.locator('.kmg').count() === 1, '“?” shows the guide of this page again');
  await p.goto('about:blank'); await p.goto(BASE + 'index.html?guide=show#l2-3.1.2'); await sleep(500);
  ok(await p.locator('.kmg').count() === 1, '?guide=show (Admin preview links) shows it even though it was seen');
  const seen = await p.evaluate(() => JSON.parse(localStorage.getItem('cassKM.guideSeen')));
  ok(Object.keys(seen).sort().join() === 'glossary,search,service', 'what the visitor has seen is remembered per page: ' + Object.keys(seen).sort().join());
  /* 12 hours without activity */
  const idle = async h => { await p.goto(BASE + 'robots.txt'); await p.evaluate(h => localStorage.setItem('cassKM.lastActive', String(Date.now() - h)), h); await p.goto(BASE + 'index.html#l2-3.1.1'); await sleep(500) };   /* a page of the same site without our script, so leaving it does not refresh the time */
  await idle(11 * H);
  ok(await p.locator('.kmg').count() === 0, '11 hours without activity: still not shown');
  await idle(13 * H);
  ok(await p.locator('.kmg').count() === 1, '13 hours without activity: the guide can show again');
  await p.click('.kmg-x'); await p.goto('about:blank'); await p.goto(BASE + 'index.html#l2-3.1.1'); await sleep(400);
  ok(await p.locator('.kmg').count() === 0, 'and after that it is remembered again');
  const last = await p.evaluate(() => +localStorage.getItem('cassKM.lastActive')); ok(Date.now() - last < 60e3, 'activity is recorded (last activity just now)');
  await ctx.close();

  ctx = await newContext(browser, { popups: true, data: D => { D.settings.guides.service.on = false; D.settings.guides.glossary.text = '' } }); p = await ctx.newPage();
  await p.goto(BASE + 'index.html'); await sleep(300); await p.click('.kmw-go');
  await p.goto('about:blank'); await p.goto(BASE + 'index.html#l2-3.1.1'); await sleep(500);
  ok(await p.locator('.kmg').count() === 0 && await p.locator('.kmhelp').isHidden(), 'a guide switched off in Settings does not show and has no “?”');
  await p.goto(BASE + 'glossary.html'); await sleep(500);
  ok(await p.locator('.kmg').count() === 0, 'a guide with empty text does not show');
  await ctx.close();

  console.log('2b. Guides on the Academy and document pages');
  ctx = await newContext(browser, { popups: true, errors }); p = await ctx.newPage();
  await p.goto(BASE + 'new-joiner-academy.html'); await sleep(500);
  ok(/Choose your tower first/.test(await p.locator('.kmg').innerText().catch(() => '')) && await p.locator('.kmw').count() === 0, 'Academy: guide for choosing tower and area');
  await p.click('.kmg-x'); await p.click('.tcard[data-tower="Human Resources"]'); await sleep(400);
  ok(/one week at a time/.test(await p.locator('.kmg').innerText().catch(() => '')), 'Academy learning path: its own guide');
  await p.click('.kmg-x'); await p.goto(BASE + 'academy-week.html?week=1&tower=human-resources'); await sleep(500);
  ok(/mark it as finished/.test(await p.locator('.kmg').innerText().catch(() => '')), 'Academy week: guide');
  await p.goto(BASE + 'academy-test.html?test=cp1&tower=human-resources'); await sleep(500);
  ok(/Answer every question/.test(await p.locator('.kmg').innerText().catch(() => '')), 'Academy test: guide');
  await p.goto(BASE + 'document.html?item=lc-flow'); await sleep(500);
  ok(/Read the document on this page/.test(await p.locator('.kmg').innerText().catch(() => '')), 'document page: guide');
  await ctx.close();

  console.log('3. Common questions');
  ctx = await newContext(browser, { errors }); p = await ctx.newPage();
  const faq = async url => { await p.goto('about:blank'); await p.goto(BASE + url); await sleep(500); return p.locator('.kmfaq-i summary').allInnerTexts() };
  let q = await faq('index.html'); ok(q.length === 3 && /SOP and a Quick Reference Guide/.test(q[0]), 'home: 3 questions');
  q = await faq('index.html#l2-3.1.1'); ok(q.length === 3 && /Covered, Partial and Not started/.test(q[0]), 'service page: 3 questions about service pages');
  q = await faq('index.html#search-letter'); ok(q.length === 3, 'search results: 3 questions');
  q = await faq('glossary.html'); ok(q.length === 2, 'glossary: 2 questions');
  q = await faq('new-joiner-academy.html'); ok(q.length === 3 && /Which tower or area/.test(q[0]), 'Academy: 3 questions');
  await p.click('.tcard[data-tower="Human Resources"]'); await sleep(300); ok(await p.locator('.kmfaq-i').count() === 3, 'Academy learning path still shows them');
  await p.goto(BASE + 'index.html'); await sleep(400);
  await p.click('.kmfaq-i summary'); ok(await p.locator('.kmfaq-i[open] div').first().isVisible(), 'a question opens to show its answer');
  ok((await p.locator('.kmfaq-h').innerText()) === 'Common questions', 'headed “Common questions”');
  await ctx.close();
  ctx = await newContext(browser, { data: D => {
    const f = D.settings.faqs; f.home.items = [1, 2, 3, 4, 5].map(i => ({ q: 'Question ' + i + ' <b>x</b>', a: 'Answer ' + i + ' <i>y</i>' })); f.service.on = false; f.search.items[0].a = '';
    f.glossary.items = [{ q: 'Only a question', a: '' }]
  } }); p = await ctx.newPage();
  await p.goto(BASE + 'index.html'); await sleep(500);
  ok(await p.locator('.kmfaq-i').count() === 3, 'never more than 3 questions, even if the data holds 5');
  ok(await p.locator('.kmfaq-i summary b, .kmfaq-i div i').count() === 0 && /Question 1 <b>x<\/b>/.test(await p.locator('.kmfaq-i summary').first().innerText()), 'question text is shown as plain text (no HTML)');
  await p.goto('about:blank'); await p.goto(BASE + 'index.html#l2-3.1.1'); await sleep(500); ok(await p.locator('.kmfaq').count() === 0, 'switched off for a page: none shown');
  await p.goto('about:blank'); await p.goto(BASE + 'index.html#search-letter'); await sleep(500); ok(await p.locator('.kmfaq-i').count() === 2, 'a question without an answer is not shown');
  await p.goto('about:blank'); await p.goto(BASE + 'glossary.html'); await sleep(500); ok(await p.locator('.kmfaq').count() === 0, 'a page whose only question is incomplete shows no block');
  await ctx.close();

  console.log('3b. A browser that still holds an old unpublished draft');
  ctx = await newContext(browser, { popups: true, errors }); p = await ctx.newPage();
  await p.goto(BASE + 'index.html'); await sleep(400);
  await p.evaluate(() => { const d = JSON.parse(JSON.stringify(window.KM_PUBLISHED)); delete d.settings.welcome; delete d.settings.guides; delete d.settings.faqs; localStorage.setItem('cassKM.draft', JSON.stringify(d)); localStorage.setItem('cassKM.draftMeta', '{"n":35}'); localStorage.removeItem('cassKM.welcomeSeen') });
  await p.reload(); await sleep(600);
  ok(await p.locator('.kmprev').count() === 1, 'the orange “unpublished changes” bar shows (old draft in use)');
  ok(await p.locator('.kmw').count() === 1 && await p.locator('.kmfaq-i').count() === 3, 'the welcome pop-up and the common questions still show');
  await ctx.close();

  console.log('4. Card styling');
  ctx = await newContext(browser, { errors }); p = await ctx.newPage(); await p.goto(BASE + 'index.html'); await sleep(500);
  const st = await p.evaluate(() => ({ panel: getComputedStyle(document.querySelector('.panel.pad')).borderRadius, item: getComputedStyle(document.querySelector('.item')).borderRadius }));
  ok(st.panel === '16px' && st.item === '12px', `boxes 16 px, item cards 12 px (${st.panel}, ${st.item})`);
  await p.goto(BASE + 'new-joiner-academy.html'); await sleep(400);
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('.panel')).borderRadius) === '16px', 'the Academy pages use the same card style');
  await ctx.close();

  console.log('5. Admin: Super admin settings');
  ctx = await newContext(browser, { errors }); p = await ctx.newPage(); await adminLogin(p); await nav(p, 'set');
  ok(await p.locator('#popups').count() === 1 && /Pop-ups and common questions/.test(await p.locator('#popups h2').innerText()), 'Settings › Pop-ups and common questions is there for Super admin');
  ok(await p.locator('#popups [data-on=gdText]').count() === 9 && await p.locator('#popups .fq').count() === 5 && await p.locator('#popups .fq textarea').count() === 15, '9 page guides and 5 pages × 3 question slots');
  ok(await p.evaluate(() => ['wlOn', 'wlField', 'wlStep', 'gdOn', 'gdText', 'fqOn', 'fqField'].every(k => NEED_ON[k] === 'settings') && NEED.ppRestore === 'settings'), 'every change is guarded by the Super admin-only permission');
  ok(await p.evaluate(() => !can({ type: 'head', towers: ['1'], active: true }, 'settings') && !can({ type: 'editor', towers: ['1'], active: true }, 'settings') && can(ME(), 'settings')), 'tower heads and editors cannot change them');
  await p.fill('#wlt', 'Welcome to CASS KM!'); await p.locator('#wlt').blur(); await sleep(150);
  ok(await p.evaluate(() => DR.settings.welcome.title === 'Welcome to CASS KM!' && DR.changeLog[0].section === 'Settings' && /Welcome pop-up/.test(DR.changeLog[0].summary)), 'welcome title edit is saved and logged');
  await p.fill('#wlt', ''); await p.locator('#wlt').blur(); await sleep(150);
  ok(await p.evaluate(() => DR.settings.welcome.title === 'Welcome to CASS KM!') && await p.locator('#wlt').inputValue() === 'Welcome to CASS KM!', 'an empty title is refused');
  await p.locator('[data-on=wlStep][data-i="1"][data-f=text]').fill('the list of services'); await p.locator('[data-on=wlStep][data-i="1"][data-f=text]').blur(); await sleep(120);
  await p.uncheck('[data-on=wlOn]'); await sleep(120);
  ok(await p.evaluate(() => DR.settings.welcome.on === false && DR.settings.welcome.steps[1].text === 'the list of services'), 'steps and the on/off switch are saved');
  await p.check('[data-on=wlOn]'); await sleep(120);
  const g = p.locator('[data-on=gdText][data-k=service]'); await g.fill('Pick a step to see its knowledge.'); await g.blur(); await sleep(120);
  await p.uncheck('[data-on=gdOn][data-k=glossary]'); await sleep(120);
  ok(await p.evaluate(() => DR.settings.guides.service.text === 'Pick a step to see its knowledge.' && DR.settings.guides.glossary.on === false), 'a guide can be edited and another switched off');
  await p.fill('#fq-home-q0', 'Where do I start?'); await p.fill('#fq-home-a0', 'Search, or browse the service list.'); await p.locator('#fq-home-a0').blur(); await sleep(120);
  await p.fill('#fq-home-a2', ''); await p.fill('#fq-home-q2', 'Only a question'); await p.locator('#fq-home-q2').blur(); await sleep(150);
  ok(await p.evaluate(() => DR.settings.faqs.home.items.length <= 3 && DR.settings.faqs.home.items[0].q === 'Where do I start?') && /will not show/.test(await p.locator('#fqw-home').innerText()), 'questions are saved (3 at most) and an incomplete one is flagged');
  await p.uncheck('[data-on=fqOn][data-k=glossary]'); await sleep(120);
  ok(await p.evaluate(() => DR.settings.faqs.glossary.on === false), 'common questions can be switched off per page');
  ok(await p.evaluate(() => { const t = buildFile(); return /Welcome to CASS KM!/.test(t) && /Pick a step to see its knowledge\./.test(t) && /Where do I start\?/.test(t) }), 'the edits go into km-data.js when published');
  /* the edits show on the site in this browser straight away (draft) */
  const site = await ctx.newPage(); await site.goto(BASE + 'index.html?guide=show#l2-3.1.1'); await sleep(600);
  ok(/Pick a step to see its knowledge\./.test(await site.locator('.kmg').innerText().catch(() => '')), 'the edited guide shows on the Knowledge Centre (orange draft bar) right away');
  await site.goto('about:blank'); await site.goto(BASE + 'index.html'); await sleep(500);
  ok(/Where do I start\?/.test(await site.locator('.kmfaq').innerText().catch(() => '')), 'the edited common question shows on the home page');
  await site.goto('about:blank'); await site.goto(BASE + 'index.html?guide=show'); await sleep(500);
  ok(/Welcome to CASS KM!/.test(await site.locator('.kmw').innerText().catch(() => '')), 'the edited welcome title shows in the welcome pop-up (preview link)');
  /* restore published wording */
  await p.bringToFront(); await nav(p, 'set'); await p.click('[data-act=ppRestore][data-k=welcome]'); await sleep(150); await p.locator('.modal').last().locator('.btn.primary').click(); await sleep(250);
  ok(await p.evaluate(() => DR.settings.welcome.title === PUB.settings.welcome.title), '“Restore published wording” brings the published welcome text back');
  /* a draft saved before these settings existed gets them from the published file */
  await p.evaluate(() => { const d = JSON.parse(localStorage.getItem('cassKM.draft')); delete d.settings.welcome; delete d.settings.guides; delete d.settings.faqs; localStorage.setItem('cassKM.draft', JSON.stringify(d)); localStorage.setItem('cassKM.draftMeta', JSON.stringify({ n: 3 })) });
  await p.goto(BASE + 'admin.html'); await sleep(500); ok(await p.evaluate(() => !!DR.settings.welcome && !!DR.settings.guides.service && !!DR.settings.faqs.home), 'an older draft is upgraded when the admin page loads');
  ok(errors.length === 0, 'no page errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
  await ctx.close();
});
