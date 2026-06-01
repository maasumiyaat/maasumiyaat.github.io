import { useState, useEffect, useContext, createContext, createElement } from 'react'
import { themes, defaultTheme } from '../data/themes'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(
    () => localStorage.getItem('theme') || defaultTheme
  )
  const [isDark, setIsDark] = useState(
    () => (localStorage.getItem('mode') || 'dark') === 'dark'
  )

  useEffect(() => {
    const theme = themes[themeKey] || themes[defaultTheme]
    Object.entries(theme.vars).forEach(([k, v]) =>
      document.documentElement.style.setProperty(k, v)
    )
    localStorage.setItem('theme', themeKey)
    if (!theme.allowLightMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [themeKey])

useEffect(() => {
  const theme = themes[themeKey] || themes[defaultTheme]
  if (!theme.allowLightMode) return
  
  if (!isDark) {
    // Remove inline styles so [data-theme="light"] CSS takes over
    Object.keys(theme.vars).forEach(k =>
      document.documentElement.style.removeProperty(k)
    )
  } else {
    // Re-apply inline styles for dark
    Object.entries(theme.vars).forEach(([k, v]) =>
      document.documentElement.style.setProperty(k, v)
    )
  }
  
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  localStorage.setItem('mode', isDark ? 'dark' : 'light')
}, [isDark, themeKey])

  const currentTheme = themes[themeKey] || themes[defaultTheme]
  const value = {
    themeKey, setThemeKey, themes,
    isDark, setIsDark,
    lightModeAllowed: currentTheme.allowLightMode,
  }

  return createElement(ThemeContext.Provider, { value }, children)
}

export function useTheme() {
  return useContext(ThemeContext)
}