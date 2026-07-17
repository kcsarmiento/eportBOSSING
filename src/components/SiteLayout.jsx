import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ArrowUp, Moon, Sun } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#course-expectations', label: 'Expectations' },
  { href: '#about', label: 'About' },
  { href: '#c508', label: 'C508' },
  { href: '#outputs', label: 'Outputs' },
  { href: '#contact', label: 'Contact' },
]

function SiteLayout() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : false
  })
  const [activeSection, setActiveSection] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)
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

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-ambient text-[var(--page-text)] antialiased flex flex-col transition-colors">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2.5 focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 right-0 left-0 z-40 border-b border-[var(--header-border)] bg-[var(--header-bg)] backdrop-blur-xl transition-colors">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5" aria-label="Main navigation">
          <a href="#home" className="font-heading text-lg font-bold gradient-text">
            JKV
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition ${
                  activeSection === item.href.slice(1)
                    ? 'bg-[var(--accent-subtle)] text-[var(--accent)]'
                    : 'text-[var(--muted)] hover:text-[var(--page-text)]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] p-2 text-[var(--muted)] transition hover:text-[var(--page-text)]"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1} className="flex-1 pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-[var(--card-border)] px-6 py-10 text-center">
        <p className="text-sm text-[var(--muted)]">&copy; {year} John Klien Villanueva &middot; Jose Rizal University</p>
      </footer>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-3 text-[var(--accent)] shadow-lg backdrop-blur-xl transition hover:bg-[var(--accent-subtle)]"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export default SiteLayout
