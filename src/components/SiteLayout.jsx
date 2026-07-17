import { useEffect, useRef, useState } from 'react'
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
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : false
  })
  const [activeSection, setActiveSection] = useState('')
  const observerRef = useRef(null)
  const year = new Date().getFullYear()

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observerRef.current?.observe(s))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-ambient text-[var(--page-text)] antialiased flex flex-col transition-colors pb-20 sm:pb-0">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2.5 focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setDarkMode((prev) => !prev)}
          className="rounded-full border border-[var(--card-border)] bg-nav backdrop-blur-xl p-2.5 text-[var(--muted)] transition hover:text-[var(--page-text)]"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>

      <main id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-[var(--card-border)] px-6 py-8 text-center hidden sm:block">
        <p className="text-xs text-[var(--muted)]">&copy; {year} John Klien Villanueva</p>
      </footer>

      <nav className="fixed bottom-0 right-0 left-0 z-40 border-t border-[var(--card-border)] bg-nav backdrop-blur-2xl sm:hidden" aria-label="Bottom navigation">
        <div className="flex items-center justify-around px-2 py-1.5">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.slice(1) || (!activeSection && item.href === '#home')
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-[10px] font-medium transition ${
                  isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)]'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </a>
            )
          })}
        </div>
      </nav>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 hidden sm:block">
        <div className="flex items-center gap-1 rounded-full border border-[var(--card-border)] bg-nav px-2 py-1.5 backdrop-blur-2xl shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1) || (!activeSection && item.href === '#home')
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
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
