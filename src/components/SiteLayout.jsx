import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ArrowUp, Menu, Moon, Sun, X } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#course-expectations', label: 'Expectations' },
  { href: '#about', label: 'About' },
  { href: '#c508', label: 'C508' },
  { href: '#outputs', label: 'Outputs' },
  { href: '#contact', label: 'Contact' },
]

function SiteLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
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
    const onScroll = () => setShowBackToTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-ambient text-[var(--page-text)] antialiased flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[#0f172a] focus:font-semibold"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 right-0 left-0 z-40 border-b border-[var(--header-border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Main navigation">
          <a href="#home" className="font-display text-xl font-bold tracking-tight text-[var(--accent)]">
            JKV
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  activeSection === item.href.slice(1)
                    ? 'bg-[var(--accent-subtle)] text-[var(--accent)]'
                    : 'opacity-75 hover:opacity-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-lg border border-[var(--card-border)] p-2.5 opacity-75 transition hover:opacity-100"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="rounded-lg border border-[var(--card-border)] p-2.5 opacity-75 transition hover:opacity-100 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div id="mobile-nav" className="border-t border-[var(--header-border)] px-4 pb-4 pt-3 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-left text-sm font-medium transition opacity-75 hover:opacity-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="main-content" tabIndex={-1} className="flex-1 pt-16 sm:pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-[var(--card-border)] px-6 py-8 text-center text-sm opacity-50">
        &copy; {year} John Klien Villanueva &middot; Jose Rizal University &middot; BSIT 402
      </footer>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-subtle)] p-3 text-[var(--accent)] shadow-lg transition hover:brightness-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}

export default SiteLayout
