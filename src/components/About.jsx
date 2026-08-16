import { services } from '../data/services'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()
  return (
    <section id="about">
      <div className="container">
        <div className="about-solo reveal" ref={r1}>
          <div className="section-tag">About</div>
          <h2 className="section-title">Osman Gani<br /><em>Khan</em> Masum</h2>
          <p className="about-merged-bio">
            Experienced Backend Engineer with 5+ years of expertise in engineering robust and scalable
            solutions. Proficient in communication protocols, web servers, database engineering, proxies,
            web framework runtimes, and message formats. Skilled in agile methodologies and cross-functional
            collaboration, delivering high-quality software solutions.
          </p>
          <p className="about-merged-bio">
            You can reach me at <a href="mailto:osmanmasum.cs@gmail.com" style={{ color: 'var(--accent)' }}>osmanmasum.cs@gmail.com</a>,
            or find more at <a href="https://masum-osman.github.io/" target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>masum-osman.github.io</a>.
          </p>
        </div>

        <div className="about-solo reveal" ref={r2} style={{ marginTop: '3rem' }}>
          <div className="section-tag">Services Offered</div>
          <p className="about-merged-bio">
            As a seasoned Senior Software Engineer, I offer a range of professional services tailored
            to software development needs:
          </p>
          <div className="skill-cloud">
            {services.map(s => <span key={s} className="tech-tag">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
