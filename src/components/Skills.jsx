import { skillGroups } from '../data/skills'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Skills() {
  const hRef = useScrollReveal()
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Skills</div>
          <h2 className="section-title">What I work with</h2>
          <p className="section-desc">Languages, frameworks, and tools I use to ship software.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map(group => (
            <div key={group.group} className="skill-group">
              <div className="skill-group-label">{group.group}</div>
              <div className="skill-cloud">
                {group.skills.map(s => (
                  <span key={s.name} className="tech-tag">
                    <i className={s.icon} />{s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
