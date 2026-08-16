import { recommendations } from '../data/recommendations'
import { useScrollReveal } from '../hooks/useScrollReveal'

function RecommendationCard({ item, index }) {
  const ref = useScrollReveal()
  return (
    <div className="recommendation-card reveal" ref={ref} style={{ transitionDelay: `${index * 0.1}s` }}>
      <p className="recommendation-quote">&ldquo;{item.quote}&rdquo;</p>
      <div className="recommendation-attribution">
        <div className="recommendation-name">{item.name}</div>
        <div className="recommendation-role">{item.role} · {item.company}</div>
      </div>
      {item.link && (
        <a className="detail-link secondary" href={item.link} target="_blank" rel="noopener noreferrer">
          View source →
        </a>
      )}
    </div>
  )
}

export default function Recommendations() {
  const hRef = useScrollReveal()
  return (
    <section id="recommendations">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Recommendations</div>
          <h2 className="section-title">What people say</h2>
          <p className="section-desc">Notes from people I've worked with.</p>
        </div>
        <div className="recommendations-grid">
          {recommendations.map((item, i) => <RecommendationCard key={item.id} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}
