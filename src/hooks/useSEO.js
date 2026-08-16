import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://maasumiyaat.github.io'

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Sets per-route <title>, meta description, Open Graph / Twitter tags,
// and a canonical link — since this is a client-rendered SPA with a
// single static index.html, every route otherwise shares one <title>.
export function useSEO({ title, description }) {
  const { pathname } = useLocation()
  useEffect(() => {
    if (title) document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', `${SITE_URL}${pathname}`)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setCanonical(`${SITE_URL}${pathname}`)
  }, [title, description, pathname])
}
