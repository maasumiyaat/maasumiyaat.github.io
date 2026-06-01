import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks } from '../data/nav'
import { themes } from '../data/themes'
import { useTheme } from '../hooks/useTheme'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [activeSection, setActive] = useState('hero')
  const { themeKey, setThemeKey, isDark, setIsDark, lightModeAllowed } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Close theme dropdown on outside click
  useEffect(() => {
    const close = (e) => { if (!e.target.closest('.theme-switcher')) setDropOpen(false) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  // Active section tracking — only on home
  useEffect(() => {
    if (!isHome) return
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [isHome])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)

    // Route link (e.g. /blog)
    if (href.startsWith('/')) {
      navigate(href)
      return
    }

    // Anchor link (e.g. #about)
    const id = href.replace('#', '')
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate home first, then scroll
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  const handleLogo = (e) => {
    e.preventDefault()
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <nav>
        <a href="/" className="nav-logo" onClick={handleLogo}>
          omarfaruk-k
        </a>

        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={isHome && activeSection === link.href.replace('#', '') ? 'active' : ''}
                onClick={e => handleNavClick(e, link.href)}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="daynight-btn"
            onClick={() => {
              if (!lightModeAllowed) return
              const next = !isDark
              setIsDark(next)
              document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
            }}
            aria-label="Toggle mode"
            title={!lightModeAllowed ? 'This theme has no light mode' : isDark ? 'Switch to light' : 'Switch to dark'}
            style={{ opacity: lightModeAllowed ? 1 : 0.35, cursor: lightModeAllowed ? 'pointer' : 'not-allowed' }}
          >
            {isDark ? '☀︎' : '⏾'}
          </button>

          <div className="theme-switcher">
            <button
              className="theme-btn"
              onClick={e => { e.stopPropagation(); setDropOpen(o => !o) }}
              aria-label="Switch theme"
            >
              {themeKey === 'default' ? 'change the vibe' : themes[themeKey]?.label}
            </button>
            {dropOpen && (
              <div className="theme-dropdown">
                {Object.entries(themes).map(([key, theme]) => (
                  <button
                    key={key}
                    className={`theme-option ${themeKey === key ? 'active' : ''}`}
                    onClick={() => { setThemeKey(key); setDropOpen(false) }}
                  >
                    <span>{theme.icon}</span><span>{theme.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={e => handleNavClick(e, link.href)}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}