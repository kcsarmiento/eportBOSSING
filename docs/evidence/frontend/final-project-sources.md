# Final project content sources

This records the earlier final-project update. The subsequently supplied WW-M2 Extension resolves the previously unidentified fourth Midterm entry; current counts are 5/4/5. See [the updated proposal record](updated-proposal-source.md) for current source/build/verification evidence.

Read on 2026-11-14 for the portfolio update. The notebook was inspected as JSON; its code and machine-learning experiment were not executed in this workspace.

| Source | Identity | SHA-256 of downloaded source |
| --- | --- | --- |
| [IEEE paper](https://docs.google.com/document/d/1CZgYWjfyn_X7K59HuX4jTlOQTPUyG7Zl/edit) | `HandaBot_PF1_IEEE_Report.docx`, read via Google Docs text export | `FB3EF21612FECDE368D517A860C463417CC856065B1037BF1A996DF6435FD227` |
| [Notebook](https://drive.google.com/file/d/1_p0hAwNRmGqQ1z7I0AU450LgboltWSKT/view?usp=sharing) | HandaBot Final Project (P-F1), 40 notebook cells | `1E9E2F9578B6E23FEA6FA5E94953590BAAE245B1AE3717C8806F2298B8AF4E43` |

## Source mapping

- Paper title/author block and notebook cells 0–1: HandaBot, NDRRMP 2020–2030; Carl Angelo Patano, Jonas Joaquin Sibug, John Klien Villanueva.
- Paper Author Contributions and notebook cells 1, 6–7, 30–31, 34–39: John's stage logging, checkpoints, comparison/selection, exports, experiment workbook, notebook interface, and report writing. The reflection does not attribute Carl's pipeline implementation or Jonas's manual scoring to John.
- Notebook cell 11 recorded output: 136 source pages, 134 with text, 300,021 extracted characters.
- Notebook cells 5 and 31: five configurations; recorded winner E, chunk size 800, overlap 100, top-k 5, recall 0.625, automatic correct-behaviour rate 0.667. Reference B has recall 0.542 and automatic rate 0.667.
- Notebook cell 33: 15 final questions (12 answerable, 3 unanswerable), 479 final chunks, 3/3 correct declines, one false refusal, mean response time 5.25 seconds in the recorded run.
- Paper Tables III–IV and Limitations: manual final score 19/30, 7 fully correct / 5 partly correct / 3 incorrect, 10 faithful answers, 2/8 points on difficult questions, one scorer, one Colab session. Manual scores are reported by the paper; the notebook's raw export leaves manual-scoring columns for later completion.
- The paper rounds recall to 0.62 in one table and 0.63 in its prose; the portfolio uses the notebook's recorded 0.625.

The two personal reflection texts are newly drafted from this evidence at the user's request. Goals and proposed improvements are presented as future work. No submission date, submission status, public deployment, or additional notebook files were inferred.

## Sequence

The reference specifies this Finals order: learning reflection post, group final project, combined WW1 & WW2 lab, PT-F2, PT-F1. Both existing lab descriptions, skill lists, and reflections are preserved inside the combined card, with one shared report preview and notebook link. Prelim and Midterm are reversed into their latest-coursework-first order while retaining exam scores 12/30 and 13/30.

The resulting period counts are **5 Prelim / 3 Midterm / 5 Finals**. The reference's fourth Midterm activity is not identified in the supplied text, so no replacement activity was invented.

## Validation

| Check | Result | Scope |
| --- | --- | --- |
| `npm run lint` | PASS | Final source, exit 0. |
| `npm run build` | PASS | `index-oxj7ZEjJ.js`, 416.03 kB (134.05 kB gzip); `index-B9ImHUAb.css`, 16.66 kB. |
| `git diff --check` | PASS | No whitespace errors; Windows line-ending notices only. |
| Design detector | PASS | `detect --json src/pages/HomePage.jsx` returns `[]` with the existing intentional Inter exception. |
| Period sequence and counts | PASS | Exact 5/3/5 record order checked; Prelim and Midterm exam scores remain 12/30 and 13/30. |
| Keyboard tabs | PASS | ArrowRight selects Midterm; End selects Finals. |
| Final project resources | PASS | Paper and notebook URLs match the supplied document IDs; IEEE preview visually loads. |
| Existing proposal resources | PASS | All three direct links use `/edit`, including the slide decks. |
| Reflection post | PASS | Enter opens the post; all four sections render. |
| Combined lab | PASS | Both part headings and both original reflection disclosures are retained; Part A expands. |
| Layout | PASS | Chromium: dark at 320×568, 375×812, 1440×1000; light at 375×812. No document or inspected-element overflow; inspected output buttons/summaries meet 44 px targets. |
| Runtime | PASS | No page-level JavaScript errors reported at completion. |

The first verification attempt exposed a whitespace-normalization error in the QA helper; the rendered exam scores were correct. The helper was corrected and the full pass then completed successfully against the final build at `http://127.0.0.1:4173`.

See [browser helper](verify-final-project.ps1), [verification log](final-project-verification.txt), [Finals desktop](finals-sequence-desktop.png), [reflection mobile](final-reflection-mobile.png), and [project mobile](final-project-mobile.png). These are local Chromium checks. Google permissions may change; the underlying notebook experiment and paper's manual scores were not independently rerun. No public chatbot endpoint was supplied or claimed.
