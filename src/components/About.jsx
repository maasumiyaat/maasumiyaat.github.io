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
          <h1 className="section-title">Osman Gani<br /><em>Khan</em> Masum</h1>
          <p className="about-merged-bio">
            This is me, I'm a software engineer with 7+ years of professional experience designing and
            building the systems that keep products running. From API design and database engineering to
            the communication protocols, web servers, and message formats underneath them. I care about the
            craft: software that's not just correct today, but reliable, observable, and easy to extend a
            year from now.
          </p>
          <p className="about-merged-bio">
            My work spans logistics, e-commerce, EdTech, audio/video streaming, ride-sharing, event-driven
            systems, IoT, and blockchain. Architecting distributed transactions, billing systems, and
            observability standards for teams running dozens of services in production. I'm drawn to problems
            where the constraints are real: correctness under failure, cost at scale, and systems that have to
            keep working while you change them underneath.
          </p>
          <p className="about-merged-bio">
            Beyond the code itself, I'm a researcher at heart, writing about distributed systems, Go, and
            AI/ML, contributing to open source, and mentoring engineers earlier in their careers. I stay
            proactive and curious, because the best part of this work is still getting better at it.
          </p>
          <p className="about-merged-bio">
            I occasionally take on contract and consultancy work. See below for what I offer, or reach me
            directly at <a href="mailto:osmanmasum.cs@gmail.com" style={{ color: 'var(--accent)' }}>osmanmasum.cs@gmail.com</a>.
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
