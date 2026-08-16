import { experience } from '../data/experience'
import { useScrollReveal } from '../hooks/useScrollReveal'
import TimelineItem from './TimelineItem'

export default function Experience() {
  const hRef = useScrollReveal()
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Experience</div>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-desc">Roles and projects that shaped how I build software.</p>
        </div>
        <div className="timeline">
          {experience.map((item, i) => <TimelineItem key={item.id} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}
