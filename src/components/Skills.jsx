import { skillGroups } from '../data/skills'
import { toolsAndTech } from '../data/toolsAndTech'
import { useScrollReveal } from '../hooks/useScrollReveal'

function SkillGroupList({ groups }) {
  return (
    <div className="skill-groups">
      {groups.map(group => (
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
  )
}

export default function Skills() {
  const hRef = useScrollReveal()
  const tRef = useScrollReveal()
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Skills</div>
          <h1 className="section-title">What I work with</h1>
          <p className="section-desc">Languages, frameworks, and tools I use to ship software.</p>
        </div>
        <SkillGroupList groups={skillGroups} />

        <div className="section-header reveal" ref={tRef} style={{ marginTop: '3.5rem' }}>
          <div className="section-tag">Tools &amp; Technologies</div>
          <h2 className="section-title">Everything I've used</h2>
          <p className="section-desc">The broader toolkit — languages, IDEs, and the tools I collaborate in.</p>
        </div>
        <SkillGroupList groups={toolsAndTech} />
      </div>
    </section>
  )
}
