import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BookOpen, FileText, Home, Info, Mail, Moon, Sun } from 'lucide-react'

const navItems = [
  { href: '#home', icon: Home, label: 'Home' },
  { href: '#course-expectations', icon: BookOpen, label: 'Course' },
  { href: '#about', icon: Info, label: 'About' },
  { href: '#outputs', icon: FileText, label: 'Outputs' },
  { href: '#contact', icon: Mail, label: 'Contact' },
]

function SiteLayout() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('theme') !== 'light'
    } catch {
      return true
    }
  })
  const [activeSection, setActiveSection] = useState('')
  const year = new Date().getFullYear()

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', darkMode)
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }, [darkMode])

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')]
    let frame = null
    const updateSection = () => {
      const threshold = Math.min(window.innerHeight * 0.35, 200)
      const current = sections.filter((section) => section.getBoundingClientRect().top <= threshold).at(-1)
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      setActiveSection(atBottom ? sections.at(-1)?.id : current?.id || 'home')
      frame = null
    }
    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateSection)
    }
    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="site-shell min-h-screen bg-ambient text-[var(--page-text)] antialiased flex flex-col transition-colors">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2.5 focus:text-[var(--accent-contrast)] focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setDarkMode((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--card-border)] bg-nav backdrop-blur-xl text-[var(--muted)] transition hover:text-[var(--page-text)]"
          title={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          aria-label="Dark mode"
          aria-pressed={darkMode}
        >
          {darkMode ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>

      <main id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-[var(--card-border)] px-6 py-8 text-center">
        <p className="text-xs text-[var(--muted)]">&copy; {year} John Klien Villanueva</p>
      </footer>

      <nav className="mobile-navigation fixed bottom-0 right-0 left-0 z-40 border-t border-[var(--card-border)] bg-nav backdrop-blur-2xl sm:hidden" aria-label="Primary navigation">
        <div className="flex items-center justify-around px-2 py-1.5">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.slice(1) || (!activeSection && item.href === '#home')
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`flex min-h-11 min-w-11 flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1.5 text-[11px] font-medium transition ${
                  isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)]'
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                {item.label}
              </a>
            )
          })}
        </div>
      </nav>

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden sm:block" aria-label="Primary navigation">
        <div className="flex items-center gap-1 rounded-full border border-[var(--card-border)] bg-nav px-2 py-1.5 backdrop-blur-2xl shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1) || (!activeSection && item.href === '#home')
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-[var(--accent-subtle)] text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--page-text)]'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default SiteLayout
