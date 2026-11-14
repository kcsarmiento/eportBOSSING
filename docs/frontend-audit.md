# Frontend audit and repair

Audit date: 2026-11-14. Baseline: `c8fea00`, initially clean working tree. Scope: local React/Vite frontend, source inspection and Chromium desktop/mobile review. Scores below are review judgments, not certification or automated accessibility scores.

Latest content update: the supplied revised Marikina proposal is a separate WW-M2 Extension entry after the Midterm Exam. Counts now match the reference at **5/4/5**, with the 13/30 Midterm score retained. The new summary/reflection distinguish the planned study from completed results. Lint and the final build (`index-u_vwD7ln.js`) pass, together with targeted desktop/mobile, link, order, and keyboard-reflection checks. See [updated proposal source and verification](evidence/frontend/updated-proposal-source.md).

Previous final-project update: HandaBot's final IEEE paper and notebook are linked, with a learning reflection grounded in their contribution statements and recorded results. Finals follows the reference order: reflection, final project, combined WW1 & WW2, PT-F2, PT-F1. Both lab parts retain their descriptions, skills, and reflections. That update had counts 5/3/5 and build `index-oxj7ZEjJ.js`; lint/build and focused desktop/mobile checks passed. See [final project sources and verification](evidence/frontend/final-project-sources.md). The original audit below is retained as historical evidence.

Earlier exam update: the user clarified scores of **12/30 for Prelim** and **13/30 for Midterm**. Each period includes a score-only examination record; no exam dates, submission status, documents, skills, or reflections were inferred. The build for that update was `index-DvdO588h.js`; lint and build passed. Browser verification confirmed 5 Prelim records (4 activity reflections), 3 Midterm records (2 activity reflections), and no mobile overflow at 375 px. See [score checks](evidence/frontend/exam-scores.txt), [Prelim desktop](evidence/frontend/prelim-exam-desktop.png), and [Midterm mobile](evidence/frontend/midterm-exam-mobile.png).

Implementation integrity: the existing portfolio has a coherent Syne/Inter type system, academic content, real output records, reflection disclosures, and functioning period controls. However, its terracotta palette diverged from the supplied teal/cyan guide, and repeated full-size notebook placeholders weakened the output hierarchy.

| Dimension | Baseline / 4 | Evidence |
| --- | --- | --- |
| Accessibility | 2 | No reduced-motion alternative; missing question heading semantics; required form fields not exposed as required. |
| Performance | 3 | Lazy document frames, but 1.37 MB portrait and external font dependency remain. |
| Responsive design | 2 | 38 px theme button and roughly 28 px desktop nav links; wide reading measure; oversized hero. |
| Theming | 3 | Shared tokens exist, but native controls lack color-scheme and persisted light theme flashes dark on load. |
| Implementation integrity | 2 | Palette conflicts with guide; preview-only document access and oversized notebook placeholders. |
| Total | 12 / 20 | Acceptable; significant refinement needed. |

## Findings and implemented repairs

| Severity | Location | Finding / impact | Repair |
| --- | --- | --- | --- |
| P1 | `src/pages/HomePage.jsx`, `src/index.css` | Reveal translations and smooth scrolling ignore reduced motion; the 15% intersection threshold can exceed the visible area of a long section on short screens. | Respect motion preference in variants; disable smooth scrolling and transitions for that preference; reveal sections when any part enters view. |
| P2 | `src/components/SiteLayout.jsx` | Small navigation and theme controls make touch use harder. | Minimum 44 px controls, mobile safe-area support, named desktop nav. 44 px is the chosen usability target, not an assertion that every smaller control failed WCAG AA. |
| P2 | `src/pages/HomePage.jsx` | 112 px desktop name overpowers portrait; full-width course paragraphs impede scanning. | Cap display at 80 px, improve hero proportions, constrain reading width to 72ch, raise course text to 16 px. |
| P2 | `src/pages/HomePage.jsx` | Embedded documents have no direct fallback if Drive blocks the frame. | Add an explicitly named new-tab document link beside every preview. |
| P2 | `src/pages/HomePage.jsx` | Empty notebook previews consume 360–460 px per output. | Replace with compact notebook resource rows. |
| P2 | `src/index.css`, `index.html`, `SiteLayout.jsx` | Native controls do not follow theme; localStorage exceptions can break initialization. | Color-scheme tokens, early theme initialization, guarded storage access. |
| P2 | `src/components/SiteLayout.jsx` | Observer depends on a narrow viewport band and may leave navigation stale at the document bottom. | Frame-throttled section tracking with a bottom-of-page fallback. |
| P2 | `src/pages/HomePage.jsx` | Questions are paragraphs; required fields lack required semantics; Send can imply direct delivery. | Question h3 headings, required/minLength attributes, explicit Open email app action. |
| P3 | `src/index.css`, `HomePage.jsx` | Palette drift, redundant section chips, and missing image dimensions reduce consistency. | Restore teal/cyan tokens; simplify headings; reserve portrait space. |

No P0 task-blocking issue was found. Existing strengths preserved: real content and links, keyboard-operated period tabs, skip link, visible focus treatment, labeled inputs, inline validation, lazy frames, and data-driven output records. Academic claims and external document permissions were not audited.

## Verification

All nine grouped findings above were addressed. A heading overflow introduced during refinement was caught at 320 px and corrected with fluid section typography before completion.

| Check | Result | Evidence / scope |
| --- | --- | --- |
| `npm run lint` | PASS | Final source, ESLint exit 0. |
| `npm run build` | PASS | Final build: `index-DTAcvCtc.js` (407.31 kB; 131.44 kB gzip), `index-Bg2rl31U.css` (16.07 kB). |
| `git diff --check` | PASS | No whitespace errors; Git reports Windows line-ending normalization notices. |
| Responsive layout | PASS | Chromium at 320×568, 375×812, 640×900, 768×1024, 1024×768, 1440×1000: document width equals viewport width; no inspected element overflows. |
| Control sizing | PASS | Inspected buttons, tabs, navigation links, inputs, and reflection summaries meet the chosen 44 px target. Does not include controls inside third-party frames or every inline text link. |
| Skip link | PASS | First Tab exposes visible focus; Enter moves focus to main. |
| Period tabs | PASS | ArrowRight selects/focuses Midterm (2 records); End selects Finals (4 records); Home returns to Prelim. |
| Reflection and form | PASS | Reflection expands; empty form marks all 3 fields invalid and focuses Name. No message was sent. |
| Document recovery | PASS | Finals contains 4 document frames and 4 corresponding direct links. External permissions are outside this check. |
| Theme | PASS | Toggle to light, reload, and verify persisted light theme. Native control color-scheme is set for both themes. |
| Reduced motion | PASS | Browser preference enabled; computed smooth scrolling becomes auto; reveal variants render visibly without translation. |
| Text token contrast | PASS | Foreground, muted, and accent text against page/card/alternate surfaces plus accent-button pair: dark minimum 7.88:1, light minimum 5.24:1. This is a token-pair check, not a complete WCAG audit of every state, border, or embedded document. |
| Mobile navigation | PASS | Outputs is visible after navigation; Contact receives active navigation state. |
| Runtime errors | PASS | `agent-browser errors` reports no page-level exceptions at completion. |
| Design detector | REVIEWED | Two warnings identify the existing Inter font. Retained intentionally with Syne as the incumbent type system. Both are covered by a narrow `overused-font=inter` value exception in `.impeccable/config.json` (the CLI normalizes case); no rule or file exclusions were added. No other detector findings. |

Browser target: local production preview at `http://127.0.0.1:4173`. Results and a repeatable browser helper are in [evidence/frontend/verification.txt](evidence/frontend/verification.txt) and [evidence/frontend/verify.ps1](evidence/frontend/verify.ps1). The helper's `-FinishOnly` option resumes theme/mobile checks; those were resumed after Windows argument/selector handling was corrected. The evidence log contains successful measurements from the main and resumed passes.

Visual evidence: [desktop before](evidence/frontend/before-desktop.png), [mobile before](evidence/frontend/before-mobile.png), [desktop dark](evidence/frontend/after-desktop-dark.png), [desktop light](evidence/frontend/after-desktop-light.png), [mobile dark](evidence/frontend/after-mobile-dark.png), [mobile outputs](evidence/frontend/after-mobile-outputs.png), [mobile contact](evidence/frontend/after-mobile-contact.png).

## Repository initialization review

The existing `AGENTS.md` was read and followed. Verified stack and scripts match the guide. Its dev port was corrected from **5173** to **5174** after explicit user approval, matching `vite.config.js`. The `#c508` alias now exists on the course heading. No test framework or typecheck script exists. The project remains React JSX, Tailwind 3 theme variables without `dark:` utilities, and aliased Framer Motion elements. Changes are local and uncommitted.

## Remaining limits

Third-party Drive embeds depend on the viewer's network and document permissions; the direct links provide a recovery route but cannot override those permissions. The portrait remains a 1.37 MB PNG. This review does not establish Safari, Firefox, physical-device, email delivery, or full screen-reader acceptance.
