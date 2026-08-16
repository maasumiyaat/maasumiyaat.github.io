import { experience } from '../data/experience'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useRevealItem } from '../hooks/useRevealItem'
import { splitRange, monthsBetween, formatDuration } from '../utils/dates'
import { renderBold } from '../utils/richText'

function RoleBody({ bullets, tags }) {
  return (
    <>
      {bullets?.length > 0 && (
        <ul className="timeline-bullets">{bullets.map((b, i) => <li key={i}>{renderBold(b)}</li>)}</ul>
      )}
      {tags?.length > 0 && (
        <div className="timeline-tags">{tags.map(t => <span key={t} className="timeline-tag">{t}</span>)}</div>
      )}
    </>
  )
}

function RoleEntry({ role }) {
  const { start, end } = splitRange(role.date)
  const duration = formatDuration(monthsBetween(start, end))
  return (
    <div className="role-entry">
      <div className="role-dot" />
      <div className="role-header">
        <span className="role-title">{role.role}</span>
        <span className="role-date">{role.date} · {duration}</span>
      </div>
      <RoleBody bullets={role.bullets} tags={role.tags} />
    </div>
  )
}

function CompanyBlock({ item, index }) {
  const ref = useRevealItem(index)

  const overallStart = splitRange(item.roles[item.roles.length - 1].date).start
  const overallEnd = splitRange(item.roles[0].date).end
  const overallDuration = formatDuration(monthsBetween(overallStart, overallEnd))

  return (
    <div className="timeline-item" ref={ref}>
      <div className="timeline-dot" />
      <div className="timeline-date">{overallStart} — {overallEnd} · {overallDuration}</div>
      <div className="timeline-role">{item.company}</div>
      <div className="timeline-company">{item.location}</div>
      {item.tagline && <p className="timeline-desc">{item.tagline}</p>}
      <div className="role-list">
        {item.roles.map(role => <RoleEntry key={role.id} role={role} />)}
      </div>
    </div>
  )
}

export default function Experience() {
  const hRef = useScrollReveal()
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Experience</div>
          <h1 className="section-title">Where I've worked</h1>
          <p className="section-desc">Roles and projects that shaped how I build software.</p>
        </div>
        <div className="timeline">
          {experience.map((item, i) => <CompanyBlock key={item.id} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}
