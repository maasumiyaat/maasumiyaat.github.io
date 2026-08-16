import { education } from '../data/education'
import { certifications } from '../data/certifications'
import { awards } from '../data/awards'
import { publications } from '../data/publications'
import { useScrollReveal } from '../hooks/useScrollReveal'
import TimelineItem from './TimelineItem'

export default function Education() {
  const hRef = useScrollReveal()
  const cRef = useScrollReveal()
  const aRef = useScrollReveal()
  const pRef = useScrollReveal()

  return (
    <section id="education">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Education</div>
          <h2 className="section-title">Academic background</h2>
          <p className="section-desc">Formal education and the credentials built on top of it.</p>
        </div>
        <div className="timeline">
          {education.map((item, i) => <TimelineItem key={item.id} item={item} index={i} />)}
        </div>

        <div className="credential-block reveal" ref={cRef}>
          <h3 className="credential-heading">Certifications &amp; Training</h3>
          <ul className="credential-list">
            {certifications.map(c => (
              <li key={c.id} className="credential-item">
                <span className="credential-name">{c.name}</span>
                <span className="credential-provider">{c.provider}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="credential-block reveal" ref={aRef}>
          <h3 className="credential-heading">Awards</h3>
          <ul className="credential-list">
            {awards.map(a => (
              <li key={a.id} className="credential-item">
                <span className="credential-name">{a.name}</span>
                <span className="credential-provider">{a.date}</span>
                {a.description && <span className="credential-desc">{a.description}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="credential-block reveal" ref={pRef}>
          <h3 className="credential-heading">Publication</h3>
          <ul className="credential-list">
            {publications.map(p => (
              <li key={p.id} className="credential-item">
                <a className="credential-name credential-link" href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
                {p.description && <span className="credential-desc">{p.description}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
