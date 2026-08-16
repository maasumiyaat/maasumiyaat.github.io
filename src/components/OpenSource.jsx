import { openSourceGroups } from '../data/opensource'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ContributionCard({ item, index, highlighted, ctaLabel }) {
  const ref = useScrollReveal()
  return (
    <a
      className={`contribution-card reveal ${highlighted ? 'highlighted' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="blog-meta">
        <span className="blog-category">{item.repo}</span>
        {item.type && <><span>·</span><span>{item.type}</span></>}
        {item.date && <><span>·</span><span>{item.date}</span></>}
        {item.status && <span className={`contribution-status ${item.status}`}>{item.status}</span>}
      </div>
      <h3 className="blog-title">{item.title}</h3>
      {item.description && <p className="blog-excerpt">{item.description}</p>}
      <span className="blog-readmore">{ctaLabel} →</span>
    </a>
  )
}

function OpenSourceGroup({ group }) {
  const hRef = useScrollReveal()
  return (
    <div style={{ marginTop: '3rem' }}>
      <div className="credential-heading reveal" ref={hRef}>{group.label}</div>
      <div className="blog-grid">
        {group.items.map((item, i) => (
          <ContributionCard
            key={item.id}
            item={item}
            index={i}
            highlighted={group.highlighted}
            ctaLabel={group.ctaLabel}
          />
        ))}
      </div>
    </div>
  )
}

export default function OpenSource() {
  const hRef = useScrollReveal()
  return (
    <section id="open-source">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Open Source</div>
          <h1 className="section-title">Open Source</h1>
          <p className="section-desc">Things I read, things I've built, and fixes I've sent to projects I don't own.</p>
        </div>
        {openSourceGroups.map(group => <OpenSourceGroup key={group.id} group={group} />)}
      </div>
    </section>
  )
}
