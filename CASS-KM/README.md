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
| `document.html` | Shows one uploaded document on the page (`document.html?item=<id>`): PDFs, images, text/CSV, video and audio. Opened from “View document” in the item panel. |
| `admin.html` | The admin page: individual logins, add, edit and delete content, approvals, versions, documents, people and roles, glossary, Academy, then publish. |
| `km-accounts.js` | The admin accounts (names, usernames, account type, towers, roles and password hashes). **Only `admin.html` loads it**; reader pages never do. |
| `documents/` | Uploaded documents, written here when an admin publishes. Created automatically on the first publish with a document. |
| `km-boot.js` | A small shared loader that every reader page loads right after `km-data.js`. It hands the content to the page. It also shows an admin their own unpublished changes: in a browser where changes were saved in `admin.html` and not published yet, every page (search included) uses that draft, with an orange bar on top. **Show published version** on the bar switches back for that tab. Other people's browsers never see the draft. |
| `reference/service-taxonomy.json` | The source of the taxonomy (towers, processes, services) and the L3 functions. `km-data.js` was built from it. |
| `reference/glossary-seed.json` | The starting glossary (66 terms with tower tags). |
| `reference/academy-sample-questions.json` | The 51 sample test questions copied into the Academy. |
| `reference/views-endpoint-example.py` | An example view-counting service for IT (see Admin guide › Views). Not used by the site itself. |
| `reference/mockup/` | The approved clickable mockup that the site is built from. It is reference only and is not needed to run the site. |


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

Only admins change content, people, owners, statuses and labels. They do it in `admin.html` (see the Admin guide below). The admin page produces a new `km-data.js`. To publish, replace the old `km-data.js` in the shared folder with the new one. Readers see the change the next time they open or refresh the page (Ctrl+F5 forces a fresh copy).

Do not edit `km-data.js` by hand unless you know JSON well: one missing comma stops the site from loading. If the file is missing or broken, the page shows a message saying so.

## What is stored in each reader's browser

These are personal and stay in that person's browser only. They are never shared and never change the content for anyone else:

- which items you have opened (this drives the orange **New** badge, which comes back when an admin updates an item),
- your company filter (All, APS, ACE or AMS),
- whether the "Start here" box is open or closed,
- your New Joiner Academy progress and test results,
- which entries you opened today and the views you made (so the same entry is counted once a day, and the eye number updates straight away).

If the browser blocks storage, the site still works; it just will not remember these between visits.

## New Joiner Academy

A guided 12-week onboarding pathway for each **area** (L1) of each tower, for example Procurement › Commercial Operations (S2C). Open `new-joiner-academy.html`.

- **Pick a tower, then an area.** The page always starts with the four tower cards, also after a reload. Towers with several areas (Procurement: 2, Finance & Accounting: 7) then show one card per area (L1); towers with one area (Customer Operations, Human Resources) go straight to their path. "← Back to areas" / "← Back to towers" go back a step. Each path page has a **Services in this area** dropdown that lists that area's L2 services with links to the Knowledge Centre. Links such as `new-joiner-academy.html#tower-procurement/2.2` open an area directly.
- **Weeks and progress circles.** Each week has a circle that fills as its materials are finished ("2/5"). Open a material (a Knowledge Centre page, or a placeholder for now), then mark it as finished. When every material is finished the circle turns green and the next week opens. Materials marked "To be added" are greyed and not counted; a week whose materials are all still to be added has a "Mark week as done" button instead.
- **Checkpoints.** Checkpoint 1 (weeks 1–4), Checkpoint 2 (weeks 5–8) and Checkpoint 3 (weeks 9–12) open after the weeks they cover; the Final checkpoint opens after week 12 and Checkpoint 3. Once a checkpoint is taken, the weeks it covers are locked and can no longer be changed (retakes are allowed). Questions are drawn at random from the question bank; the 51 questions now in place are samples, and the test format is still to be decided.
- **What admins can change** (in `admin.html`): the weeks, goals, materials, each learning path's linked Knowledge Centre pages, area descriptions, the tests, the questions, the pass mark (70%) and the switches `lockWeeksInOrder`, `lockAfterCheckpoint` and `requirePassToUnlockNextWeek`. Checkpoint tests are shared by all areas of a tower. Each area's path started as a copy of its tower's path, with its links pointing to that area's own L2 pages.
- **Saved on this device only.** Progress and test results stay in the joiner's own browser. They do not move to another computer or browser, and clearing the browser data removes them. This is a convenience, not security: anyone can still open any tower's pages from the Knowledge Centre itself, and could clear their browser storage to start again. Real access control comes from the Microsoft Loop and folder permissions. Progress is saved per area. Progress saved before areas existed is kept: the first time someone opens an area of their tower, it starts from their earlier tower progress.
- **Demo reset.** Add `?demo=1` to the address (`new-joiner-academy.html?demo=1`) to show a "Reset my progress" button for demos. It also clears test results, so do not share that link with real joiners.

## Admin guide

`admin.html` is where admins change the site. It has a built-in **How to use this page** guide with step-by-step help for every task below.

### Accounts and what each type can do

Everyone has their own login. There are three account types:

| Type | Who | Can do |
|---|---|---|
| **Super admin** | `AdminPE` (Process Excellence) | Everything in every tower: accounts, approvals, service pages, L3 functions, people, glossary, Academy, settings, publishing. |
| **Tower head** | Head of each tower | Items and service pages of their tower, **approving**, changing item owners, roles of their tower's people, publishing (by default) and merging changes files from their tower. |
| **Tower editor** | Other staff | Items of their own tower(s) only: add, edit, delete, Draft or In review. The owner of a new item is set to them. Everything else is view only. |

- Everyone who is logged in can see every tower's items, the dashboard and the change log. Items of other towers show a lock and open read-only.
- **The Super admin account can be shared:** in Settings › Accounts › Edit, a Super admin links several people under **Linked people** (for example the whole Process Excellence team). They are all equal: there is no main person, so a new item added from this account starts with no owner and the team is suggested first; approvals and edits show the account name (“Approved by Process Excellence”). Each person can be linked to only one account.
- **Locked accounts:** 3 wrong passwords in total lock the account **in that browser** until a Super admin unlocks it. Super admins see lockouts from their own browser in the login pop-up and under the bell, with **Unlock** and **Lock on every computer**. In Settings › Accounts a Super admin can also **Lock** or **Unlock** any other account; this is saved in `km-accounts.js`, so it applies on every computer after publishing (an unlock reaches the person's browser once the new `km-accounts.js` is in the folder and they reload). Super admin accounts are only paused for 15 minutes, so nobody is left without a way in. Lockouts on other people's computers cannot reach you: there is no server.
- **Only AdminPE** creates, edits, disables and deletes accounts and resets passwords (Settings › Accounts). New accounts get a temporary password (shown once) and must set their own at the first login. For a demo, **Create sample accounts** makes four tower heads and four editors from the sample people. Delete the sample accounts before go-live.
- **Approving:** only AdminPE or the tower head of the item's tower can set an item (or a service page) to Approved. The item then shows “Approved by … on …” in the Knowledge Centre once it is published. If an editor later changes the content of an Approved item, it goes back to In review automatically.
- Tower heads (and AdminPE) see a **Waiting for approval** pop-up after logging in, and a bell in the top bar reopens it. Editors see a short note when their items were approved or sent back.
- **Roles** (Page owner, Ask the expert, Approved by, Item owner, Escalate to) are set on the **People directory** with **Edit roles**. They only decide who is suggested first in the people pickers; they never limit what someone can edit. “Approved by” is a label: approving needs a Tower head or Super admin account.

### Change an area's learning path (Academy)

1. Log in as AdminPE and open **Academy (pathway and tests)** in the menu.
2. Under **Weeks**, click **Edit week** on the week you want to change.
3. In **Knowledge Centre pages per learning path**, click the area's tab (for example **2.2 Commercial Operations (S2C)**). The number on a tab is how many pages that path has this week.
4. Add a page with **+ Add page** and **Pick Knowledge Centre link**, change a label, or remove a page. Only that area changes.
5. **Save**, then check it with the area's chip under **Preview as** (for example `2.2`), then publish.
6. Optional: under **Towers**, give an area a short description for its card (otherwise the card lists its services).

### Log in

1. Open `admin.html` from the same folder (or click **Admin login** in the top bar of any page).
2. Enter your username and password. The username is case-sensitive: type it exactly, capitals included (for example `AdminPE`). Usernames use 3 to 30 letters, numbers, dots, underscores or dashes.
3. After 5 wrong attempts in a row, login is blocked for 60 seconds. You are signed out after 30 minutes without activity, or when you click **Log out**. Your draft is kept.

**First login: username `AdminPE`, password `PE2026`.** Change it before go-live (it is easy to guess): **My account** (top bar) › Change password (at least 10 characters), then publish so `km-accounts.js` is updated. Passwords are stored only as salted SHA-256 hashes in `km-accounts.js`. Because that file sits in the shared folder, everyone should use a strong, unique password. **Forgot a password?** AdminPE resets it in Settings › Accounts. If AdminPE itself is locked out, restore `km-accounts.js` from a backup.

### Service pages and L3 functions

Tower heads edit their own tower's service pages (coverage, status, owners, review date, process steps); editors see them read-only. **Only AdminPE** adds, edits and removes **L3 functions** on a service page. If a function is still used by process steps or items, a replacement is chosen first. L0–L2 codes and names still come from the official taxonomy (Settings › Taxonomy import).

### Versions

Every item keeps a version history. When you save an edit you choose **Small update** (0.3 → 0.4), **Major update** (→ 1.0) or **No new version** (typo or label only) and say what changed (filled in for you). Only the changed fields are stored, so the file stays small. The **Versions** tab shows before → after for each change, with added and removed words highlighted, and lets you view, compare and restore an older version (restoring creates a new version). Status and owner changes are recorded without a new version number. Readers only see the current version number.

### Documents

Items can hold an uploaded document as well as (or instead of) a Loop link:

- Accepted: PDF, Word, PowerPoint, Excel, images, text/CSV, video, audio and other office files, up to **25 MB** (a warning shows above 10 MB). Programs and anything that can run in a browser (`.exe .bat .cmd .ps1 .vbs .msi .jar .dll .js .mjs .html .htm .svg .hta`) are blocked.
- PDFs, images, text/CSV, video and audio are shown on `document.html`. **Word, PowerPoint and Excel cannot be shown inside a plain web page** (that would need a converter or an outside service, which this site does not use). Add a **PDF copy for on-page viewing** (in Office: File › Save as › PDF). Without it, readers see “Preview is not available for this file type” and a Download button.
- **Allow download** is on by default; untick it for view-only documents.
- **Require access items cannot hold a document.** Ticking Require access removes the document; readers contact the owner instead.
- While you edit, uploaded files are kept in your browser (IndexedDB) and Preview shows them from there. They reach the folder when you publish.

### Publishing: the files and how they get to the folder

The site has no server, so publishing writes three things into the site folder: **`km-data.js`** (the content), **`km-accounts.js`** (only when accounts changed) and new files in **`documents/`**.

1. **Edit.** Changes go into a working draft in your own browser. The strip at the top shows how many are not published yet.
2. Open the Knowledge Centre in the same browser: as soon as you save, it shows your unpublished changes (and the search bar finds them), with an orange bar. A Knowledge Centre tab that is already open refreshes by itself. **Preview on site** does the same. Other readers never see it until you publish.
3. **Publish…** then either:
   - **Publish to folder…** (Edge and Chrome): choose the site folder once; the page writes the files straight into it and lists any old files you can delete from `documents/`; or
   - **Download .zip**: extract it over the site folder (replace existing files). There are also buttons for km-data.js or km-accounts.js on their own.
4. Keep the previous `km-data.js` as a backup (for example `km-data_backup_YYYY-MM-DD.js`), open `index.html` and press Ctrl+F5 to check.

**Who can publish** (Settings, AdminPE): *AdminPE and tower heads only* (default) or *Every account*. Accounts that may not publish get **Send my changes** instead: a zip (`changes_{tower}_{username}_{date}.zip`) with only their own items, documents and log entries. They send it to their tower head, who uses **Merge changes file…**, reviews the table (changes for another tower or attempts to approve are rejected; items changed on both sides ask which version to keep), applies it and publishes. A tower head can only merge changes for their own tower. With *Every account*, only one person should publish at a time, and the next person imports the newest files first.

- **Import…** loads a published `km-data.js` or `km-accounts.js` as your working copy (for example when you continue after someone else published). Files where a Require access item holds a document are rejected.
- **Discard draft** throws away your unpublished changes.
- The change log keeps the newest 500 entries, records the account and tower of each change, and is shown per item in the Knowledge Centre detail panel.

### What service pages show (Super Admin)

**Admin › Settings › Service pages on the Knowledge Centre** (AdminPE / Super Admin only):

- **Page details:** show or hide Page owner, Approved by, Ask the expert and Last reviewed on every service page. The values stay saved and still show in Admin.
- **Knowledge categories:** a table with one row per service page and one column per category (Quick Reference Guide, SOP / DTP, Video, …). Ticked = shown. The **All service pages** row hides a category everywhere at once; **Hide categories with no entries yet** removes the empty “Not available yet” boxes on every page. Each row has **Show all**, **Hide all** and **Copy to process** (copies the row to every service in the same process). **Show everything** undoes it all.
- Hiding a category removes only its **box** from the service page. Its entries can still be found through search, Recently updated and item links. Process steps always show; a step with nothing left to show says so. Content coverage by tower still counts every entry.
- Like every change, it reaches readers when you publish.

### Views (how often each entry is opened)

Every knowledge entry shows an eye with its number of views (overall) on the Knowledge Centre cards, in the detail panel and on the document page. Entries with no views show 0.

- **What counts as one view:** opening an entry, whether you open the detail panel, the document, or both. The same person opening the same entry again on the same day still counts once.
- **Admins are not counted** while they are logged in to `admin.html` in that browser (and for 30 minutes after their last action if they close the tab without logging out), or while they look at the admin draft.
- **Only numbers are collected:** the entry and the month. Not who, and not the time.

**Admin › Views** shows total views, views in a chosen month (with the change from the month before), how many entries were viewed, a bar chart of the last 12 months (all entries, or one entry with **Monthly chart**), and a table with the chosen month, the month before and the overall total for every entry. Filter by month and tower, search, sort by any column, and **Download CSV**. Click a bar to pick that month.

**How the numbers are collected.** The site has no server, so a browser can only count its own views. To get real totals across everyone:

1. IT sets up a small view-counting address on the company website. Each view arrives as a POST with the body `{"item":"<entry id>","month":"YYYY-MM"}` (sent as text/plain). The service adds 1 to that entry and month, and offers the totals as a CSV with the columns `item,month,views`. `reference/views-endpoint-example.py` is a working example IT can copy or rebuild in the intranet's own technology.
2. AdminPE enters that address in **Admin › Views › View-counting address** and publishes. From then on every reader's views are sent there.
3. Now and then (for example monthly), an admin downloads the CSV from the service and uses **Import view counts…**. Each entry and month in the file replaces the number held. Then **Publish** so readers see the new totals. The eye number readers see = the counts in the last published `km-data.js` + their own views since then.

Until step 2 is done the page is in **demo mode**: each browser only counts its own views, and Admin › Views shows the views made in that browser. **Fill with sample numbers** shows the page with made-up data (demo only; sample numbers are never published and can be cleared).

### Be honest about what this protects

**These permissions and the approval rule are a guardrail inside the admin page, not security.** This is a static site with no server: anyone who can write to the shared folder or edit the page code can bypass them, and uploaded documents are plain files that anyone who can open the site folder (or knows a file's path) can open. Real protection comes from **folder permissions** (only the people who publish should have write access; readers read-only) and from **Loop/SharePoint permissions** for restricted content, which belongs behind Require access, never in `documents/`. The browser also cannot write into a plain shared folder without the admin choosing it (Publish to folder) or extracting the zip; until then only the admin's own browser shows the changes.

## Decisions to revisit

- **How new joiners keep their Academy progress.** Today it stays in each joiner's browser. Decide whether joiners get an account (through Admin) or a separate login page, so progress follows them.
- **Lockout notifications.** Super admins only see lockouts that happened in their own browser. If IT provides a server address (for example the view-counting address), lockouts could be reported there too.

## Notes

- People, contact details and dates in this pilot are fictional samples (the `cass-example.co.id` email domain is deliberately fake). Admins replace them with real staff.
- The glossary tower tags are a first draft for the tower heads to confirm.
