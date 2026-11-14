param([switch] $FinishOnly)

$ErrorActionPreference = 'Stop'

function Browser {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]] $BrowserArguments)
  & npx.cmd --yes agent-browser --session eport-audit @BrowserArguments
  if ($LASTEXITCODE -ne 0) { throw "Browser command failed: $($BrowserArguments[0])" }
}

function Evaluate([string] $Code) {
  Browser -BrowserArguments @('eval', '-b', [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($Code)))
}

$measure = @'
(() => {
  const root = document.documentElement;
  const overflow = [...document.querySelectorAll('main h1, main h2, main h3, main article, main input, main textarea, nav, nav a')]
    .filter(el => { const r = el.getBoundingClientRect(); return r.width && (r.right > innerWidth + 1 || r.left < -1); })
    .map(el => ({ tag: el.tagName, text: el.textContent.slice(0, 60) }));
  const smallTargets = [...document.querySelectorAll('button, [role=tab], nav a, input, summary')]
    .filter(el => { const r = el.getBoundingClientRect(); return r.width && (r.width < 44 || r.height < 44); })
    .map(el => ({ tag: el.tagName, text: el.textContent.slice(0, 40), height: el.getBoundingClientRect().height }));
  const color = value => {
    value = value.trim();
    if (value.startsWith('#')) {
      let hex = value.slice(1);
      if (hex.length === 3) hex = [...hex].map(v => v + v).join('');
      return hex.match(/.{2}/g).map(v => parseInt(v, 16));
    }
    return value.match(/[\d.]+/g).map(Number);
  };
  const style = getComputedStyle(root);
  const token = name => color(style.getPropertyValue(name));
  const luminance = rgb => rgb.slice(0, 3).map(n => n / 255).map(n => n <= .04045 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4).reduce((s, n, i) => s + n * [.2126, .7152, .0722][i], 0);
  const ratio = (a, b) => { const x = luminance(a), y = luminance(b); return +((Math.max(x, y) + .05) / (Math.min(x, y) + .05)).toFixed(2); };
  const contrasts = ['--page-bg', '--card-bg', '--section-b'].flatMap(bg => ['--page-text', '--muted', '--accent'].map(fg => ({ fg, bg, ratio: ratio(token(fg), token(bg)) })));
  contrasts.push({ fg: '--accent-contrast', bg: '--accent', ratio: ratio(token('--accent-contrast'), token('--accent')) });
  const result = { viewport: [innerWidth, innerHeight], theme: root.className, documentWidth: root.scrollWidth, overflow, smallTargets, contrasts, reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches, scrollBehavior: style.scrollBehavior };
  if (root.scrollWidth > innerWidth || overflow.length || smallTargets.length || contrasts.some(c => c.ratio < 4.5)) throw new Error(JSON.stringify(result));
  return result;
})()
'@

if (-not $FinishOnly) {
Browser open http://127.0.0.1:4173
Evaluate "localStorage.setItem('theme', 'dark')"
Browser set media dark reduced-motion
Browser reload
Browser press Tab
Evaluate "(() => { const e = document.activeElement; if (e.textContent.trim() !== 'Skip to main content') throw Error('Skip link is not first'); return { firstFocus: e.textContent, outline: getComputedStyle(e).outlineStyle }; })()"
Browser press Enter
Evaluate "(() => { if (document.activeElement.id !== 'main-content') throw Error('Skip link did not focus main'); return { skipLink: 'PASS' }; })()"

foreach ($size in @(@(320,568), @(375,812), @(640,900), @(768,1024), @(1024,768), @(1440,1000))) {
  Browser set viewport $size[0] $size[1]
  Evaluate $measure
}

Browser click '#outputs-tab-prelim'
Browser press ArrowRight
Evaluate "(() => { const t = document.activeElement; const count = document.querySelectorAll('#outputs-panel article').length; if (t.id !== 'outputs-tab-midterm' || t.getAttribute('aria-selected') !== 'true' || !count) throw Error('Midterm keyboard selection failed'); return { tab: 'midterm', articleCount: count }; })()"
Browser press End
Evaluate "(() => { const t = document.activeElement; const frames = document.querySelectorAll('#outputs-panel iframe'); const links = [...document.querySelectorAll('#outputs-panel a')].filter(a => a.textContent.includes('Open document')); if (t.id !== 'outputs-tab-finals' || frames.length !== links.length) throw Error('Finals tab or document fallbacks failed'); return { tab: 'finals', articleCount: document.querySelectorAll('#outputs-panel article').length, previews: frames.length, fallbackLinks: links.length }; })()"
Browser press Home
Browser click '#output-ww-p1 summary'
Evaluate "(() => { if (!document.querySelector('#output-ww-p1 details').open) throw Error('Reflection did not expand'); return { reflection: 'PASS' }; })()"
Browser click 'button[type=submit]'
Evaluate "(() => { const errors = document.querySelectorAll('[aria-invalid=true]'); if (errors.length !== 3 || document.activeElement.id !== 'name') throw Error('Invalid form validation failed'); return { invalidFields: errors.length, focusedField: document.activeElement.id }; })()"
}

Browser set viewport 1440 1000
Evaluate "localStorage.setItem('theme', 'dark')"
Browser reload
Browser click 'button[aria-pressed]'
Browser reload
Evaluate "(() => { if (document.documentElement.classList.contains('dark') || localStorage.getItem('theme') !== 'light') throw Error('Theme persistence failed'); return { themePersistence: 'PASS' }; })()"
Evaluate $measure
Browser screenshot 'D:\kxxF\Projects\Elective 4\eportBOSSING\docs\evidence\frontend\after-desktop-light.png'
Browser set viewport 375 812
Browser click 'nav.mobile-navigation a:nth-child(4)'
Evaluate "(() => { const s = document.querySelector('#outputs'); if (getComputedStyle(s).opacity !== '1') throw Error('Outputs hidden'); return { outputVisibility: 'PASS' }; })()"
Browser screenshot 'D:\kxxF\Projects\Elective 4\eportBOSSING\docs\evidence\frontend\after-mobile-outputs.png'
Evaluate $measure
Browser click 'nav.mobile-navigation a:nth-child(5)'
Browser wait --fn "document.querySelector('nav a[aria-current=location]')?.getAttribute('href') === '#contact'"
Browser screenshot 'D:\kxxF\Projects\Elective 4\eportBOSSING\docs\evidence\frontend\after-mobile-contact.png'
Browser errors
