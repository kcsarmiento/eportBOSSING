# Updated proposal entry

Read on 2026-11-14 from the [user-supplied updated proposal](https://docs.google.com/document/d/1N20VT52cM73o-8G9mDfso8nN8K0X-bW1/edit) using its Google Docs text export.

Export SHA-256: `86CA6AEF652DDC4F37AE61F4C14C39744F23FE0DB49C341AAC49FB0AA5EEBDA9`.

## Content mapping

- Title/author block: HandaBot, flood preparedness and response information in Marikina City; Carl Angelo Patano, Jonas Joaquin Sibug, and John Klien Villanueva.
- Sections I–II: SDG 11, Marikina residents, bounded document-based guidance. The prototype excludes live river levels, current evacuation status, safe travel routes, and rescue dispatch.
- Section IV: proposed Marikina Citizen's Charter 2022, NDRRMP 2020–2030, NDRP 2024, and supplementary historical DSWD Carina context. Source editions, local relevance, and inclusion still require verification before the proposed experiment.
- Section V: planned 20 development questions and a separate 60-question test set, including 45 answerable and 15 unanswerable/live-information questions; English, Filipino, and Taglish coverage; controlled RAG/non-RAG comparison and reviewer checks. These are planned procedures, not completed results.
- Section VII: the revision grounds the proposal locally and identifies remaining source, benchmark, and model-feasibility preparation. The new reflection is drafted from these changes and limitations, without attributing undocumented individual implementation work.

No submission date or submission status was inferred. The reference student's Sep 29 date and 15/30 exam grade were not applied to John. His Midterm score remains 13/30.

The new record is `ww-m2-ext`. The existing original proposal and all of its document/deck links remain accessible. Midterm order is now **Exam → WW-M2 Extension → WW-M2 → PT-M1**, with overall counts **5 Prelim / 4 Midterm / 5 Finals**.

## Verification

- `npm run lint`: PASS.
- `npm run build`: PASS after closing the agent-owned review browsers and rerunning serially. The first attempt failed with a native out-of-memory error; no application change was needed to recover.
- Final assets: `index-u_vwD7ln.js` (418.77 kB; 134.96 kB gzip), `index-B9ImHUAb.css` (16.66 kB).
- `git diff --check`: PASS, with Windows line-ending notices only.
- Chromium at `http://127.0.0.1:4173`: exact Midterm order and 5/4/5 counts checked, 13/30 unchanged, document link/preview ID match, no invented submission badge, reflection expands with Enter and includes goals.
- Desktop 1440 px, dark 320 px, and light 375 px: no observed document/inspected-element overflow. The updated paper preview visually loads. No page-level JavaScript errors were recorded at completion.

See [verification log](updated-proposal-verification.txt), [desktop](updated-proposal-desktop.png), and [mobile](updated-proposal-mobile.png). This is a portfolio content/UI check; it does not validate or execute the proposed research.
