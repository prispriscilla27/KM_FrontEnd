/* People directory, “Request this content” (goes to the right person), email links, the new palette, and the matching Admin settings. */
const { BASE, ok, sleep, newContext, overrideData, adminLogin, nav, run } = require('./helpers');

run(async browser => {
  const errors = [];
  let ctx = await newContext(browser, { errors }); let p = await ctx.newPage();
  const go = async url => { await p.goto('about:blank'); await p.goto(BASE + url); await sleep(500) };

  console.log('1. People directory');
  await go('people.html');
  ok(await p.locator('.pcard').count() === 10 && /10 people/.test(await p.locator('#count').innerText()), 'lists all 10 people');
  ok(await p.locator('.nav a.on').innerText() === 'People directory', 'it is in the top navigation (and on the other pages)');
  for (const u of ['index.html', 'new-joiner-academy.html', 'document.html?item=lc-flow', 'academy-week.html?week=1&tower=human-resources', 'academy-test.html?test=cp1&tower=human-resources']) { await go(u); ok(await p.locator('.nav a[href="people.html"]').count() === 1, 'nav link “People directory” on ' + u.split('?')[0]) }
  await go('people.html');
  ok(!(await p.locator('#grid').innerText()).includes('@'), 'cards do not show email addresses (only the profile does)');
  await p.click('[data-t="3"]'); await sleep(150); const names = await p.locator('.pcard b').allInnerTexts();
  ok(names.length === 3 && names.includes('Leona Branthwaite') && names.includes('Tasha Verlinden'), 'tower filter: Finance & Accounting has 3 people: ' + names.join(', '));
  await p.click('[data-t="0"]'); await sleep(150); ok(await p.locator('.pcard').count() === 1 && /Jules/.test(await p.locator('.pcard').innerText()), '“Other teams” shows people without a tower');
  await p.click('[data-t="all"]'); await p.fill('#pq', 'credit'); await sleep(200); ok(await p.locator('.pcard').count() >= 1 && /Orin|Tasha|Leona/.test(await p.locator('.pcard').first().innerText()), 'search by role or service word');
  await p.fill('#pq', '3.1.1'); await sleep(200); ok(await p.locator('.pcard').count() === 2, 'search by service code finds its owner and expert');
  await p.fill('#pq', 'zzzz'); await sleep(200); ok(/No one matches/.test(await p.locator('#grid').innerText()), 'nothing found: friendly message');
  await p.fill('#pq', '');

  console.log('2. Profile and email');
  await p.click('.pcard[data-id="leona"]'); await sleep(200);
  ok(await p.locator('.pf').count() === 1 && /Leona Branthwaite/.test(await p.locator('.pf h2').innerText()) && p.url().endsWith('#person-leona'), 'a card opens the profile (and the address can be shared)');
  const mail = await p.locator('#pfMail').getAttribute('href');
  ok(mail === 'mailto:leona.branthwaite@cass-example.co.id' && (await p.locator('#pfMail').innerText()) === 'leona.branthwaite@cass-example.co.id', 'the profile shows the email, and clicking it opens a new email to that address (mailto: ' + mail + ')');
  ok(await p.locator('.pf a[href*="outlook.office.com"]').count() === 0 && !/Outlook on the web/.test(await p.locator('.pf').innerText()), 'no “Open in Outlook on the web” button');
  ok(await p.locator('.pf .acts a.primary').innerText() === 'Email', 'the button just says “Email”');
  ok(/Receives content requests for/i.test(await p.locator('.pf').innerText()) && /3\.7 /.test(await p.locator('.pf').innerText()) && /3\.1 /.test(await p.locator('.pf').innerText()), 'a plain profile lists all the areas whose requests go to this person');
  await p.keyboard.press('Escape'); await sleep(100); ok(await p.locator('.pf').count() === 0 && !p.url().includes('#person'), 'Esc closes it');
  await go('people.html#person-orin'); ok(/Orin Salvatara/.test(await p.locator('.pf h2').innerText().catch(() => '')) && /3\.1\.1 Credit Management/.test(await p.locator('.pf').innerText()), 'a profile link opens straight away and lists the services the person owns');

  console.log('3. Request this content');
  await go('index.html#l2-1.1.1');
  const req = p.locator('a.req'); const rb = await req.boundingBox();
  ok(await req.count() === 1 && await req.isVisible() && rb.height >= 30, 'the “Request this content” button is there and visible');
  ok(await req.evaluate(e => { const c = getComputedStyle(e); return c.opacity === '1' && c.backgroundColor !== 'rgba(0, 0, 0, 0)' && !e.hasAttribute('disabled') }), 'it is a normal, enabled primary button (not greyed out)');
  const es = await p.locator('.empty-state').innerText();
  ok(/No SOPs, guides or videos have been added for this service yet\./.test(es) && !/governance|taxonomy/i.test(es) && !/Mirela|go to/.test(es) && !es.includes('Coming soon'), 'short text above the buttons, no note below them, no “Coming soon” panel');
  ok(await p.locator('.empty-state .note').count() === 0 && await p.locator('.empty-state .btn').count() === 2, 'only the two buttons follow it: Request this content and Back to home');
  await req.click(); await sleep(500);
  ok(/people\.html/.test(p.url()) && /Mirela Tanbury/.test(await p.locator('.pf h2').innerText()), 'it opens the profile of the person for this area');
  const rm = await p.locator('#pfReq').getAttribute('href'); const u = new URL(rm.replace('mailto:', 'http://x/?to=').replace('?subject', '&subject'));
  ok(rm.startsWith('mailto:mirela.tanbury@cass-example.co.id?') && decodeURIComponent(u.searchParams.get('subject')) === 'Content request: 1.1.1 Customer Data Management' && /Hello Mirela,/.test(decodeURIComponent(rm)) && /index\.html#l2-1\.1\.1/.test(decodeURIComponent(rm)), 'the email button opens an email To: Mirela with the subject and message ready');
  ok(await p.locator('.pf a[href*="outlook.office.com"]').count() === 0 && await p.locator('#pfMail').getAttribute('href') === 'mailto:mirela.tanbury@cass-example.co.id', 'no Outlook-on-the-web button; the email address itself is a mail link');
  const rbx = await p.locator('.reqbox').innerText();
  ok(await p.locator('#pfReq').innerText() === 'Email' && /^Request content for 1\.1\.1 Customer Data Management/.test(rbx) && !/looks after|nothing is sent/i.test(rbx), 'the request box has just the title and the buttons “Email” and “Copy the message”');
  await go('people.html?request=3.3.1#person-leona');
  ok(/Request content for 3\.3\.1 /.test(await p.locator('.reqbox').innerText()) && /3\.3 Record to Report/.test(await p.locator('.pf').innerText()) && !/3\.1 Order to Cash|3\.7 /.test(await p.locator('.pf').innerText()), 'Leona looks after 7 areas, but a request from 3.3.1 names only that service and lists only its area');
  await go('people.html?request=3.2.1#person-leona'); ok(/Request content for 3\.2\.1 /.test(await p.locator('.reqbox').innerText()) && /3\.2 Purchase to Pay/.test(await p.locator('.pf').innerText()), 'a request from another service of the same person changes the text accordingly');
  await ctx.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: BASE.replace(/\/$/, '') });
  await go('people.html?request=1.1.1#person-mirela'); await p.click('[data-copy]'); await sleep(250);
  const clip = await p.evaluate(() => navigator.clipboard.readText());
  ok(/^To: mirela\.tanbury@cass-example\.co\.id\nSubject: Content request: 1\.1\.1 Customer Data Management\n\nHello Mirela,\n\nPlease add knowledge content \(SOPs, guides, videos\) for this service in the CASS Knowledge Centre:\n1\.1\.1 Customer Data Management \(Customer Operations › Customer Success\)\nPage: .*index\.html#l2-1\.1\.1\n\nThank you\.$/.test(clip), '“Copy the message” puts the whole email (To, Subject, text) on the clipboard');
  ok(/Message copied/.test(await p.locator('#toast').innerText()), 'and says “Message copied. Paste it into an email.”');
  await go('index.html#l2-2.1.1'); ok(/person-dorian/.test(await p.locator('a.req').getAttribute('href').catch(() => '')), 'another area goes to its own person (Procurement → Dorian)');
  await go('index.html#l2-4.1.1'); const href4 = await p.locator('a.req').getAttribute('href').catch(() => null); ok(href4 === null || /person-calista/.test(href4), 'Human Resources → Calista');
  await go('index.html#l2-3.3.1'); ok(/person-leona/.test(await p.locator('a.req').getAttribute('href').catch(() => '')), 'Finance & Accounting areas → Leona');
  await ctx.close();
  ctx = await newContext(browser, { data: D => { delete D.settings.requestContacts['1.1'] } }); p = await ctx.newPage();
  await go('index.html#l2-1.1.1'); ok(await p.locator('button.req[data-req]').count() === 1, 'no person chosen for an area: the old “copy the request” button is used');
  await ctx.close();
  ctx = await newContext(browser, { data: D => { D.settings.guides.people.on = true }, popups: true, errors }); p = await ctx.newPage();
  await p.goto(BASE + 'index.html'); await sleep(300); await p.click('.kmw-go'); await p.goto(BASE + 'people.html'); await sleep(500);
  ok(/open a person/.test(await p.locator('.kmg').innerText().catch(() => '')), 'the People directory has its own guide pop-up');
  await ctx.close();

  console.log('4. Colours: navy, blue, light blue and white');
  ctx = await newContext(browser, { errors }); p = await ctx.newPage(); await go('index.html');
  const tok = await p.evaluate(() => { const c = getComputedStyle(document.documentElement); return ['--hdr1', '--hdr2', '--brand', '--surface', '--brand-soft'].map(k => c.getPropertyValue(k).trim().toLowerCase()) });
  ok(tok.join() === '#0b1f3a,#1a5dc8,#1a5dc8,#ffffff,#e3edfb', 'colour tokens: navy, blue, blue, white, light blue tint (' + tok.join(' ') + ')');
  ok(await p.evaluate(() => !/#0b6899|#15a9c8|#052944|#0a6fc2/i.test(document.documentElement.outerHTML)), 'no teal left in the page');
  for (const u of ['people.html', 'new-joiner-academy.html', 'academy-week.html?week=1&tower=human-resources', 'document.html?item=lc-flow']) { await go(u); ok(await p.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--hdr1').trim().toLowerCase() === '#0b1f3a'), 'same colours on ' + u.split('?')[0]) }
  await ctx.close();
  ctx = await browser.newContext({ colorScheme: 'dark', viewport: { width: 1440, height: 900 } }); p = await ctx.newPage(); await p.goto(BASE + 'index.html'); await sleep(400);
  ok(await p.evaluate(() => getComputedStyle(document.body).backgroundColor) === 'rgb(9, 23, 43)', 'dark mode uses the navy background');
  await ctx.close();

  console.log('5. Admin');
  ctx = await newContext(browser, { errors }); p = await ctx.newPage(); await adminLogin(p); await nav(p, 'set');
  ok(await p.locator('#reqc').count() === 1 && await p.locator('#reqc tbody tr').count() === 11, 'Settings › Who receives content requests: 11 areas');
  ok((await p.locator('#reqc tbody tr').first().innerText()).includes('Mirela Tanbury'), 'with the current person for each area');
  await p.click('#reqc tbody tr:first-child .pkb'); await p.click('#reqc tbody tr:first-child .pop .opt:has-text("Davin Ashgrove")'); await sleep(250);
  ok(await p.evaluate(() => DR.settings.requestContacts['1.1'] === 'davin' && /Content requests for 1\.1/.test(DR.changeLog[0].summary)), 'choosing another person is saved and logged');
  const site = await ctx.newPage(); await site.goto(BASE + 'index.html#l2-1.1.1'); await sleep(600);
  ok(/person-davin/.test(await site.locator('a.req').getAttribute('href').catch(() => '')), 'the Knowledge Centre uses the new person straight away (draft)');
  await p.bringToFront(); await p.click('#reqc tbody tr:first-child .pkb'); await p.click('#reqc tbody tr:first-child .pop .opt:has-text("To be assigned")'); await sleep(250);
  ok(await p.evaluate(() => !DR.settings.requestContacts['1.1']), 'a person can also be taken away');
  ok(await p.evaluate(() => !can({ type: 'head', towers: ['1'], active: true }, 'settings')), 'only Super admin can change it');
  await nav(p, 'people'); await p.click('[data-act=personEdit][data-id="jules"]').catch(async () => { await p.locator('[data-act=personEdit]').first().click() }); await sleep(250);
  ok(await p.locator('.sidepanel select[name=tower], .pmodal select[name=tower]').count() === 1, 'the person form has a Tower field');
  await p.selectOption('select[name=tower]', '3'); await p.click('.pmodal [data-x=save], .sidepanel [data-x=save]'); await sleep(250);
  ok(await p.evaluate(() => DR.people.some(x => x.tower === '3' && x.id === 'jules') || DR.people.filter(x => x.tower === '3').length >= 4), 'the tower is saved on the person');
  ok(errors.length === 0, 'no page errors' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
  await ctx.close();
});
