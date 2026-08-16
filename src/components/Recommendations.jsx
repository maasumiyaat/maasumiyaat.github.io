import { useState } from 'react'
import { recommendationGroups } from '../data/recommendations'
import { useScrollReveal } from '../hooks/useScrollReveal'

const TRUNCATE_AT = 260

function RecommendationCard({ item, index }) {
  const ref = useScrollReveal()
  const [expanded, setExpanded] = useState(false)
  const paragraphs = item.quote.split('\n\n')
  const firstPara = paragraphs[0]
  const hasMore = paragraphs.length > 1 || firstPara.length > TRUNCATE_AT
  const truncated = firstPara.length > TRUNCATE_AT ? firstPara.slice(0, TRUNCATE_AT).trim() + '…' : firstPara
  const shown = expanded ? paragraphs : [truncated]

  return (
    <div className="recommendation-card reveal" ref={ref} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="recommendation-quote">
        {shown.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      {hasMore && (
        <button className="recommendation-toggle" onClick={() => setExpanded(e => !e)}>
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
      <div className="recommendation-attribution">
        <div className="recommendation-name">{item.name}</div>
        <div className="recommendation-role">
          {item.role}{item.company && ` · ${item.company}`}
        </div>
        {item.date && <div className="recommendation-date">{item.date}</div>}
      </div>
    </div>
  )
}

function RecommendationGroup({ group }) {
  const hRef = useScrollReveal()
  return (
    <div style={{ marginTop: '3rem' }}>
      <div className="credential-heading reveal" ref={hRef}>{group.label}</div>
      <div className="recommendations-grid">
        {group.items.map((item, i) => <RecommendationCard key={item.id} item={item} index={i} />)}
      </div>
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
          <h1 className="section-title">What people say</h1>
          <p className="section-desc">Notes from people I've worked with — grouped by how we worked together.</p>
        </div>
        {recommendationGroups.map(group => <RecommendationGroup key={group.id} group={group} />)}
      </div>
    </section>
  )
}
