# CASS Knowledge Centre

The CASS Knowledge Centre is an internal website for CASS (Chandra Asri Sentral Solusi). It helps people find knowledge content by service taxonomy, function and process step. The content itself (SOPs, desktop procedures, videos) lives in Microsoft Loop and SharePoint. This site is the map on top of it: you find what you need here, then click through to the Loop page or file.

**Who can change what:** readers can only browse, search, filter and open content. Every label, status and person on the site is set by KM admins in `admin.html`. A reader's browser only remembers personal conveniences: what they opened, their company filter, the "Start here" box and Academy progress.

## What each file does

| File | What it is |
|---|---|
| `index.html` | The Knowledge Centre: taxonomy, service pages, process maps, search and glossary. |
| `km-data.js` | **All the content**: settings, the service taxonomy with its L3 functions, people, service page details, knowledge items, glossary, search synonyms, Academy content and the change log. Every page reads this one file. |
| `new-joiner-academy.html` | The New Joiner Academy: pick a tower, then follow its 12-week pathway with a progress circle per week and checkpoint tests. |
| `academy-week.html` | One week of the Academy (`academy-week.html?week=3&tower=customer-operations`): its goals and materials, which you open and mark as finished. |
| `academy-test.html` | Every Academy test (`academy-test.html?test=cp1&tower=customer-operations`, also `cp2`, `cp3`, `final`). |
| `academy-data.js` | Shared Academy helper used by the three Academy pages: the progress rules, the week and checkpoint locks, and the progress circle. It holds no content. |
| `km-boot.js` | A small shared loader that every reader page loads right after `km-data.js`. It hands the content to the page. It also powers the admin's **Preview on site**: an admin can see unpublished changes on the real pages, with an orange bar on top. Readers never see a preview. |
| `reference/service-taxonomy.json` | The source of the taxonomy (towers, processes, services) and the L3 functions. `km-data.js` was built from it. |
| `reference/glossary-seed.json` | The starting glossary (66 terms with tower tags). |
| `reference/academy-sample-questions.json` | The 51 sample test questions copied into the Academy. |
| `reference/mockup/` | The approved clickable mockup that the site is built from. It is reference only and is not needed to run the site. |

Coming in a later step: `admin.html` (the admin page). The link to it is already in the top bar.

## Open it on your own computer

1. Keep all the files together in one folder (`index.html`, `km-data.js` and `km-boot.js` must sit side by side).
2. Double-click `index.html`. It opens in Microsoft Edge or Chrome.

No installation, no internet connection and no special software are needed.

## Share it with others

Put the **whole folder** somewhere everyone can reach, for example a shared network drive, a SharePoint or Teams folder, or an internal web server.

- Some SharePoint document libraries download `.html` files instead of opening them. If that happens, ask IT for a supported option, for example an internal web server, Azure Static Web Apps or another approved static host. The site works on any of these without changes.
- You can share links that open a specific page. Copy the address bar, or use these patterns:
  - `.../index.html#l2-3.1.1` opens the 3.1.1 Credit Management page.
  - `.../index.html#l2-3.1.1/step-5` also selects process step 5.
  - `.../index.html#l2-3.3.1/fn-3.3.1.4` scrolls to the L3 function 3.3.1.4 and highlights it.
  - `.../index.html#item-lc-dtp` opens the detail panel of one knowledge item.
  - `.../index.html#glossary` opens the glossary.
  - `.../index.html#search-letter%20of%20credit` runs a search.

## Update the content

Only admins change content, people, owners, statuses and labels. They do it in `admin.html` (added in a later step). The admin page produces a new `km-data.js`. To publish, replace the old `km-data.js` in the shared folder with the new one. Readers see the change the next time they open or refresh the page (Ctrl+F5 forces a fresh copy).

Do not edit `km-data.js` by hand unless you know JSON well: one missing comma stops the site from loading. If the file is missing or broken, the page shows a message saying so.

## What is stored in each reader's browser

These are personal and stay in that person's browser only. They are never shared and never change the content for anyone else:

- which items you have opened (this drives the orange **New** badge, which comes back when an admin updates an item),
- your company filter (All, APS, ACE or AMS),
- whether the "Start here" box is open or closed,
- your New Joiner Academy progress and test results.

If the browser blocks storage, the site still works; it just will not remember these between visits.

## New Joiner Academy

A guided 12-week onboarding pathway, one per tower. Open `new-joiner-academy.html`.

- **Pick a tower first.** The page always starts with the four tower cards, also after a reload. Choosing a tower shows only that tower's path; "← Back to towers" returns to the four cards. A link such as `new-joiner-academy.html#tower-customer-operations` opens one tower directly (the other slugs are `finance-and-accounting`, `procurement` and `human-resources`), so you can send a new joiner the right link.
- **Weeks and progress circles.** Each week has a circle that fills as its materials are finished ("2/5"). Open a material (a Knowledge Centre page, or a placeholder for now), then mark it as finished. When every material is finished the circle turns green and the next week opens. Materials marked "To be added" are greyed and not counted; a week whose materials are all still to be added has a "Mark week as done" button instead.
- **Checkpoints.** Checkpoint 1 (weeks 1–4), Checkpoint 2 (weeks 5–8) and Checkpoint 3 (weeks 9–12) open after the weeks they cover; the Final checkpoint opens after week 12 and Checkpoint 3. Once a checkpoint is taken, the weeks it covers are locked and can no longer be changed (retakes are allowed). Questions are drawn at random from the question bank; the 51 questions now in place are samples, and the test format is still to be decided.
- **What admins can change** (in `admin.html`, later step): the weeks, goals, materials, each tower's linked pages, the tests, the questions, the pass mark (70%) and the switches `lockWeeksInOrder`, `lockAfterCheckpoint` and `requirePassToUnlockNextWeek` (off for now: a failed test does not block the next week). A material's `id` must never change once joiners have used it, because finished materials are saved by id.
- **Saved on this device only.** Progress and test results stay in the joiner's own browser. They do not move to another computer or browser, and clearing the browser data removes them. This is a convenience, not security: anyone can still open any tower's pages from the Knowledge Centre itself, and could clear their browser storage to start again. Real access control comes from the Microsoft Loop and folder permissions.
- **Demo reset.** Add `?demo=1` to the address (`new-joiner-academy.html?demo=1`) to show a "Reset my progress" button for demos. It also clears test results, so do not share that link with real joiners.

## Notes

- People, contact details and dates in this pilot are fictional samples (the `cass-example.co.id` email domain is deliberately fake). Admins replace them with real staff.
- The glossary tower tags are a first draft for the tower heads to confirm.
