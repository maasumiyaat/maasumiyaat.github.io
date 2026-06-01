import { useEffect, useRef } from 'react'
import { experience, education } from '../data/experience'
import { useScrollReveal } from '../hooks/useScrollReveal'

function TimelineItem({ item, index }) {
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
  return (
    <div className="timeline-item" ref={ref}>
      <div className="timeline-dot" />
      <div className="timeline-date">{item.date}</div>
      <div className="timeline-role">{item.role}</div>
      <div className="timeline-company">{item.company}</div>
      {item.description && <p className="timeline-desc">{item.description}</p>}
      {item.bullets?.length > 0 && (
        <ul className="timeline-bullets">{item.bullets.map((b,i) => <li key={i}>{b}</li>)}</ul>
      )}
      {item.tags?.length > 0 && (
        <div className="timeline-tags">{item.tags.map(t => <span key={t} className="timeline-tag">{t}</span>)}</div>
      )}
    </div>
  )
}

export default function Experience() {
  const hRef = useScrollReveal()
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Experience &amp; Education</div>
          <h2 className="section-title">My journey so far</h2>
          <p className="section-desc">Academic background and key milestones that shaped how I build software.</p>
        </div>
        <div className="timeline">
          {experience.map((item, i) => <TimelineItem key={item.id} item={item} index={i} />)}
          <div className="timeline-section-label">Education</div>
          {education.map((item, i) => <TimelineItem key={item.id} item={item} index={experience.length + i} />)}
        </div>
      </div>
    </section>
  )
}
