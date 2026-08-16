import { useRef, useEffect } from 'react'

export function useRevealItem(index) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.15 }
    )
    el.style.transitionDelay = `${index * 0.12}s`
    obs.observe(el)
    return () => obs.disconnect()
  }, [index])
  return ref
}
