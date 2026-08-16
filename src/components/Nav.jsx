import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/nav'
import { themes } from '../data/themes'
import { useTheme } from '../hooks/useTheme'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const { themeKey, setThemeKey, isDark, setIsDark, lightModeAllowed } = useTheme()
  const location = useLocation()

  // Close theme dropdown on outside click
  useEffect(() => {
    const close = (e) => { if (!e.target.closest('.theme-switcher')) setDropOpen(false) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const handleLogoClick = () => {
    setMenuOpen(false)
    if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav>
        <NavLink to="/" end className="nav-logo" onClick={handleLogoClick}>
          masum-osman
        </NavLink>

        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >{link.label}</NavLink>
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
          <NavLink key={link.href} to={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </>
  )
}
