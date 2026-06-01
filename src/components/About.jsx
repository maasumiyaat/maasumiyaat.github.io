import { skillGroups } from '../data/skills'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()
  return (
    <section id="about">
      <div className="container">
        <div className="about-merged-grid">
          <div className="reveal" ref={r1}>
            <div className="section-tag">About</div>
            <h2 className="section-title">Omar<br /><em>Faruk</em> Khan</h2>
            <p className="about-merged-bio">
              I'm a backend-focused full-stack developer building practical, user-focused applications.
              I've developed web and mobile products from idea to deployment, learning how to structure
              projects clearly as they grow.
            </p>
            <p className="about-merged-bio">
              Currently, I'm working on an AI-based currency recognition system designed to assist
              visually impaired users, applying software to solve real-world problems.
            </p>
          </div>
            <div className="reveal" ref={r2} style={{ transitionDelay: '0.15s' }}>
              <div className="section-tag">Skills</div>
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
        </div>
      </div>
    </section>
  )
}
