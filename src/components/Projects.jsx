import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ProjectCard({ project, index }) {
  const ref = useScrollReveal()
  return (
    <div className="project-entry reveal" ref={ref} style={{ transitionDelay: `${index * 0.08}s` }}>
      <div className="project-entry-date">{project.duration}</div>
      <div className="project-entry-title">{project.title}</div>
      {project.associatedWith && <div className="project-entry-assoc">{project.associatedWith}</div>}
      {project.description && <p className="project-entry-desc">{project.description}</p>}
      {project.technologies?.length > 0 && (
        <div className="project-entry-tech">
          <span className="project-entry-tech-label">Tech:</span> {project.technologies.join(', ')}
        </div>
      )}
      {project.skills?.length > 0 && (
        <div className="skill-cloud" style={{ marginTop: '0.6rem' }}>
          {project.skills.map(s => <span key={s} className="tech-tag">{s}</span>)}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const hRef = useScrollReveal()
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Projects</div>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-desc">A chronological look at projects, big and small.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
