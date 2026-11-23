/* Academy progress timeline (idea 6, option B): timeline on top, one ring per week, no duplicate progress bar or text. */
const { BASE, ok, sleep, newContext, run } = require('./helpers');
run(async browser => {
  const errors = []; let ctx = await newContext(browser, { errors }); let p = await ctx.newPage();
  const open = async () => { await p.goto('about:blank'); await p.goto(BASE + 'new-joiner-academy.html'); await sleep(450); await p.click('.tcard[data-tower="Customer Operations"]'); await sleep(450) };
  const T = 'Customer Operations';
  await open();
  ok(await p.locator('#timeline li').count() === 16, 'timeline: 12 weeks + Checkpoint 1, 2, 3 + Final = 16 boxes');
  ok(await p.locator('#timeline li.now').count() === 1 && /NOW/.test(await p.locator('#timeline li.now').innerText()) && /Week 1/.test(await p.locator('#timeline li.now').getAttribute('aria-label')), 'a new joiner starts at week 1 (NOW)');
  ok(/You are in week 1 of 12\. 0 weeks are done\./.test(await p.locator('#timeline .sub').innerText()), 'one sentence says where you are');
  ok(await p.locator('#barWrap, #progress, #nextUp').count() === 0, 'the old thin progress bar and its text line are gone');
  ok(!/materials finished/.test(await p.locator('#months').innerText()) && await p.locator('#months .ring').count() === 12, 'the “x of y materials finished” lines are gone; each week keeps its ring');
  ok((await p.locator('#timeline .tl-ml').allInnerTexts()).join('|').toLowerCase() === 'month 1 · understand|month 2 · practice|month 3 · apply', 'grouped under the three months');
  ok((await p.locator('#timeline li.cp small').allInnerTexts()).join() === 'CP 1,CP 2,CP 3,Final', 'checkpoint tests sit at the end of each month, then the final one');
  /* months are dropdowns: only the month you are in is open */
  ok(await p.locator('#months details.month').count() === 3 && await p.locator('#months details.month[open]').count() === 1 && await p.locator('#months details.month').first().getAttribute('open') !== null, 'Month 1, 2 and 3 are dropdowns; a new joiner sees only Month 1 open');
  ok(/Weeks 1–4/.test(await p.locator('#months summary').first().innerText()) && /0 of 4 weeks done/.test(await p.locator('#months summary').first().innerText()), 'each dropdown says its weeks and how many are done');
  ok(await p.locator('#months details.month:not([open]) .week').first().isVisible() === false && await p.locator('#months details.month[open] .week').first().isVisible(), 'weeks of the closed months stay hidden until opened');
  await p.click('#months details.month:nth-child(2) summary'); await sleep(150);
  ok(await p.locator('#months details.month[open]').count() === 2 && await p.locator('#months details.month:nth-child(2) .week').first().isVisible(), 'opening Month 2 shows its weeks and leaves Month 1 open');
  await p.evaluate(() => document.querySelector('.wkbtn, #months .check') && 0); await p.click('#months details.month:nth-child(1) summary'); await sleep(150);
  ok(await p.locator('#months details.month:nth-child(1)[open]').count() === 0, 'a month can be closed again');
  /* progress: week 1 finished, week 2 half done, checkpoint 1 passed */
  await p.evaluate(t => { const P = { fin: [], opn: [], man: [] }; countable(1, t).forEach(m => { P.fin.push(m.id); P.opn.push(m.id) }); countable(2, t).slice(0, 2).forEach(m => { P.fin.push(m.id); P.opn.push(m.id) }); saveProg(t, P) }, T);
  await open();
  ok(await p.locator('#timeline li.done:not(.cp)').count() === 1 && /Week 2/.test(await p.locator('#timeline li.now').getAttribute('aria-label')), 'week 1 done, week 2 is NOW');
  ok(/You are in week 2 of 12\. 1 week is done\./.test(await p.locator('#timeline .sub').innerText()), 'the sentence follows the progress');
  ok(/2\/4/.test(await p.locator('#months .ring').nth(1).evaluate(e => e.textContent)), 'the ring of week 2 shows 2/4');
  /* passing Checkpoint 1 locks weeks 1 to 4 as complete (existing rule), so the timeline moves on */
  await p.evaluate(t => store.set('acadTest-' + t + '-cp1', { score: 100, passed: true, date: 'x' }), T); await open();
  ok(await p.locator('#timeline li.cp.done').count() === 1 && /passed/.test(await p.locator('#timeline li.cp.done').getAttribute('aria-label')) && await p.locator('#timeline li.done:not(.cp)').count() === 4 && /Week 5/.test(await p.locator('#timeline li.now').getAttribute('aria-label')), 'a passed checkpoint test is ticked, weeks 1 to 4 are done and week 5 is NOW');
  ok(await p.locator('#months details.month[open]').count() === 1 && await p.locator('#months details.month:nth-child(2)[open]').count() === 1 && /All done/.test(await p.locator('#months summary').first().innerText()), 'with Month 1 finished, Month 2 opens by itself and Month 1 says “All done”');
  ok(await p.locator('#timeline li').first().getAttribute('title') !== null, 'every box has the full week title as a tooltip');
  /* phone: timeline scrolls inside its own box, NOW is brought into view */
  await ctx.close(); ctx = await newContext(browser, { width: 390, height: 844, errors }); p = await ctx.newPage(); await open();
  await p.evaluate(t => { const P = { fin: [], opn: [], man: [] }; for (let n = 1; n <= 8; n++) { const ms = countable(n, t); if (!ms.length) P.man.push(n); ms.forEach(m => { P.fin.push(m.id); P.opn.push(m.id) }) } saveProg(t, P) }, T);
  await open();
  const ph = await p.evaluate(() => { const sc = document.querySelector('.tl-scroll'), n = document.querySelector('#timeline li.now'), r = n.getBoundingClientRect(), s = sc.getBoundingClientRect(); return { page: document.documentElement.scrollWidth, scrolls: sc.scrollWidth > sc.clientWidth, visible: r.left >= s.left - 1 && r.right <= s.right + 1, moved: sc.scrollLeft > 0 } });
  ok(ph.page <= 390 && ph.scrolls && ph.moved && ph.visible, 'phone: the page does not scroll sideways, the timeline does, and NOW (week 9) is in view');
  await ctx.close();
  ctx = await browser.newContext({ colorScheme: 'dark', viewport: { width: 1440, height: 900 } }); p = await ctx.newPage(); await p.addInitScript(() => { try { localStorage.setItem('cassKM.welcomeSeen', '1'); localStorage.setItem('cassKM.guideSeen', JSON.stringify({ academy: 1, path: 1 })) } catch (e) { } });
  await open(); const dk = await p.evaluate(() => { const n = getComputedStyle(document.querySelector('#timeline li.now')), s = getComputedStyle(document.querySelector('#timeline')); return n.backgroundColor !== s.backgroundColor });
  ok(dk, 'dark mode: the NOW box stands out from the card');
  ok(errors.length === 0, 'no page errors' + (errors.length ? ': ' + errors.join(' | ') : '')); await ctx.close();
});
