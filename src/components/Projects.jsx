import { useState, useEffect } from 'react'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

// ── Icons ──
const GhIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
)
const ExtIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
)
const BlogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
)

// ── Project Modal ──
function ProjectModal({ project, onClose }) {
  // Close on ESC
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', fn)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const hasContent = project.preview?.content?.length > 0
  const hasHighlights = project.highlights?.length > 0

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-glass" onClick={e => e.stopPropagation()}>

        {/* ── Fixed top info ── */}
        <div className="modal-top">
          <div className="modal-header">
            <div className="modal-title-group">
              <span className="modal-badge">{project.type}</span>
              <h2 className="modal-title">{project.title}</h2>
              <span className="modal-subtitle">{project.subtitle}</span>
            </div>
            <button className="modal-close" onClick={onClose}>✕</button>
          </div>

          <p className="modal-excerpt">{project.excerpt}</p>

          <div className="modal-meta">
            <div className="modal-links">
              {project.links.github && (
                <a className="modal-link primary" href={project.links.github} target="_blank" rel="noopener">
                  <GhIcon /> Source
                </a>
              )}
              {project.links.live && (
                <a className="modal-link secondary" href={project.links.live} target="_blank" rel="noopener">
                  <ExtIcon /> Live
                </a>
              )}
              {project.links.playstore && (
                <a className="modal-link secondary" href={project.links.playstore} target="_blank" rel="noopener">
                  <ExtIcon /> Play Store
                </a>
              )}
              {project.links.blog && (
                <a className="modal-link secondary" href={project.links.blog} target="_blank" rel="noopener">
                  <BlogIcon /> Blog Post
                </a>
              )}
            </div>
            <div className="modal-stack">
              {project.stack.map(s => (
                <span key={s} className="modal-stack-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        {(hasHighlights || hasContent) && (
          <div className="modal-body">
            {hasHighlights && (
              <>
                <div className="modal-section-label">Highlights</div>
                <ul className="modal-highlights">
                  {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </>
            )}

            {hasHighlights && hasContent && <div className="modal-divider" />}

            {hasContent && (
              <>
                <div className="modal-section-label">Details</div>
                {project.preview.content.map((item, i) => (
                  <div key={i} className="modal-content-item">
                    {item.type === 'text' && (
                      <p className="modal-content-text">{item.value}</p>
                    )}
                    {item.type === 'image' && (
                      <div>
                        <img
                          className="modal-content-image"
                          src={item.src}
                          alt={item.caption || ''}
                        />
                        {item.caption && (
                          <p className="modal-content-caption">{item.caption}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        )}

      </div>
    </div>
  )
}

// ── Project Card ──
function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-img" style={{ background: project.gradient }}>
        {project.logo && <img src={project.logo} alt={project.title} />}
        <span className="project-img-label">{project.type}</span>
      </div>
      <div className="project-body">
        <div className="project-title">{project.title}</div>
        <p className="project-desc">{project.excerpt}</p>
        <div className="project-click-hint">
          <span>click to explore</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

// ── Main Projects Section ──
export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const hRef = useScrollReveal()

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Projects</div>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-desc">Click any card to explore the project.</p>
        </div>

        <div className="projects-grid">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => setActiveProject(p)} />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}