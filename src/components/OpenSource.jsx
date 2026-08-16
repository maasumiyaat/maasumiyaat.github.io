import { contributions } from '../data/opensource'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ContributionCard({ item, index }) {
  const ref = useScrollReveal()
  return (
    <a
      className="contribution-card reveal"
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
      <p className="blog-excerpt">{item.description}</p>
      <span className="blog-readmore">View PR →</span>
    </a>
  )
}

export default function OpenSource() {
  const hRef = useScrollReveal()
  return (
    <section id="open-source">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Open Source</div>
          <h2 className="section-title">Contributions</h2>
          <p className="section-desc">Pull requests and fixes I've sent to projects I don't own.</p>
        </div>
        <div className="blog-grid">
          {contributions.map((item, i) => <ContributionCard key={item.id} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}
