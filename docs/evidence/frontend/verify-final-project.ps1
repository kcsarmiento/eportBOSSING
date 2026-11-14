$ErrorActionPreference = 'Stop'

function RunBrowser {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]] $BrowserArguments)
  & npx.cmd --yes agent-browser --session eport-audit @BrowserArguments
  if ($LASTEXITCODE -ne 0) { throw "Browser command failed: $($BrowserArguments[0])" }
}

function Evaluate([string] $Code) {
  RunBrowser -BrowserArguments @('eval', '-b', [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($Code)))
}

$periodCheck = @'
(() => {
  const expected = {
    prelim: ['prelim-exam', 'pt-p2', 'pt-p1', 'ww-p2', 'ww-p1'],
    midterm: ['midterm-exam', 'ww-m2-ext', 'ww-m2', 'pt-m1-rag'],
    finals: ['final-project-reflection', 'p-f1-handabot', 'ww-f1-f2', 'pt-f2', 'pt-f1'],
  };
  const tab = document.querySelector('[role=tab][aria-selected=true]');
  const period = tab.id.replace('outputs-tab-', '');
  const cards = [...document.querySelectorAll('#outputs-panel article')];
  const order = cards.map(card => card.id.replace('output-', ''));
  if (JSON.stringify(order) !== JSON.stringify(expected[period])) throw Error('Incorrect order: ' + JSON.stringify(order));
  if (Number(tab.querySelector('span').textContent) !== cards.length) throw Error('Incorrect period count');
  const score = cards[0].querySelector('dd')?.textContent.replace(/\s+/g, '');
  if (period === 'prelim' && score !== '12/30') throw Error('Prelim score changed');
  if (period === 'midterm' && score !== '13/30') throw Error('Midterm score changed');
  if (period === 'finals') {
    const project = document.getElementById('output-p-f1-handabot');
    const links = [...project.querySelectorAll('a')].map(a => a.href);
    if (!links.includes('https://docs.google.com/document/d/1CZgYWjfyn_X7K59HuX4jTlOQTPUyG7Zl/edit')) throw Error('Paper link mismatch');
    if (!links.includes('https://drive.google.com/file/d/1_p0hAwNRmGqQ1z7I0AU450LgboltWSKT/view?usp=sharing')) throw Error('Notebook link mismatch');
    const lab = document.getElementById('output-ww-f1-f2');
    if (lab.querySelectorAll('details').length !== 2 || lab.querySelectorAll('h4').length !== 2) throw Error('Lab parts or reflections missing');
    if (document.querySelectorAll('#outputs-panel iframe').length !== 4) throw Error('Expected four distinct document previews');
  }
  return { period, count: cards.length, order, examScore: score || null, result: 'PASS' };
})()
'@

$layoutCheck = @'
(() => {
  const root = document.documentElement;
  const overflow = [...document.querySelectorAll('#outputs h2, #outputs h3, #outputs h4, #outputs article, #outputs button, #outputs summary')]
    .filter(el => { const r = el.getBoundingClientRect(); return r.width && (r.right > innerWidth + 1 || r.left < -1 || el.scrollWidth > el.clientWidth + 2); })
    .map(el => ({ tag: el.tagName, text: el.textContent.slice(0, 50) }));
  const smallTargets = [...document.querySelectorAll('#outputs button, #outputs summary')]
    .filter(el => { const r = el.getBoundingClientRect(); return r.width && (r.height < 44 || r.width < 44); }).length;
  if (root.scrollWidth > innerWidth || overflow.length || smallTargets) throw Error(JSON.stringify({ width: innerWidth, documentWidth: root.scrollWidth, overflow, smallTargets }));
  return { viewport: [innerWidth, innerHeight], documentWidth: root.scrollWidth, theme: root.className || 'light', overflow, smallTargets, result: 'PASS' };
})()
'@

RunBrowser open http://127.0.0.1:4173
RunBrowser set media dark reduced-motion
Evaluate "localStorage.setItem('theme', 'dark')"
RunBrowser reload
RunBrowser set viewport 1440 1000
RunBrowser click '#outputs-tab-prelim'
Evaluate $periodCheck
RunBrowser focus '#outputs-tab-prelim'
RunBrowser press ArrowRight
Evaluate $periodCheck
Evaluate "(() => { const links = [...document.querySelectorAll('#output-ww-m2 a')].filter(a => a.textContent.includes('Open document')); if (links.length !== 3 || links.some(a => !a.href.endsWith('/edit'))) throw Error('Proposal document links are not editor/viewer URLs'); return { proposalLinks: links.map(a => a.href), result: 'PASS' }; })()"
RunBrowser press End
Evaluate $periodCheck
Evaluate "document.getElementById('output-final-project-reflection').scrollIntoView({block:'start', behavior:'instant'})"
RunBrowser screenshot 'D:\kxxF\Projects\Elective 4\eportBOSSING\docs\evidence\frontend\finals-sequence-desktop.png'
RunBrowser focus '#output-final-project-reflection summary'
RunBrowser press Enter
Evaluate "(() => { const post = document.getElementById('output-final-project-reflection'); if (!post.querySelector('details').open || post.querySelectorAll('h4').length !== 4) throw Error('Full reflection post failed'); return { reflectionSections: 4, keyboardExpansion: 'PASS' }; })()"
foreach ($size in @(@(320,568), @(375,812), @(1440,1000))) {
  RunBrowser set viewport $size[0] $size[1]
  Evaluate $layoutCheck
}
RunBrowser set viewport 375 812
Evaluate "document.getElementById('output-final-project-reflection').scrollIntoView({block:'start', behavior:'instant'})"
RunBrowser screenshot 'D:\kxxF\Projects\Elective 4\eportBOSSING\docs\evidence\frontend\final-reflection-mobile.png'
RunBrowser click '#output-final-project-reflection summary'
RunBrowser click 'button[aria-pressed]'
Evaluate $layoutCheck
RunBrowser click '#output-ww-f1-f2 > div:nth-last-child(2) summary'
Evaluate "(() => { const lab = document.getElementById('output-ww-f1-f2'); if (!lab.querySelector('details').open) throw Error('Lab reflection failed'); return { labReflection: 'PASS' }; })()"
Evaluate "document.getElementById('output-p-f1-handabot').scrollIntoView({block:'start', behavior:'instant'})"
RunBrowser screenshot 'D:\kxxF\Projects\Elective 4\eportBOSSING\docs\evidence\frontend\final-project-mobile.png'
RunBrowser errors
