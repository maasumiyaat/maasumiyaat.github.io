import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import { useScrollReveal } from '../hooks/useScrollReveal'

function BlogCard({ post, index }) {
  const ref = useScrollReveal()
  return post.local ? (
    <Link className="blog-card reveal" ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
      to={`/blog/${post.slug}`}>
      <div className="blog-meta">
        <span className="blog-category">{post.category}</span>
        <span>·</span><span>{post.readTime}</span>
        <span>·</span><span>{post.date}</span>
      </div>
      <h3 className="blog-title">{post.title}</h3>
      <p className="blog-excerpt">{post.excerpt}</p>
      <span className="blog-readmore">Read →</span>
    </Link>
  ) : (
    <a className="blog-card reveal" ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
      href={post.externalLinks?.[0]?.href || '#'}
      target="_blank" rel="noopener noreferrer">
      <div className="blog-meta">
        <span className="blog-category">{post.category}</span>
        <span>·</span><span>{post.readTime}</span>
        <span>·</span><span>{post.date}</span>
        <span style={{ color: 'var(--accent2)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>↗</span>
      </div>
      <h3 className="blog-title">{post.title}</h3>
      <p className="blog-excerpt">{post.excerpt}</p>
      <span className="blog-readmore">Read on Medium →</span>
    </a>
  )
}

export default function Blog() {
  const hRef = useScrollReveal()
  return (
    <section id="blog">
      <div className="container">
        <div className="section-header reveal" ref={hRef}>
          <div className="section-tag">Blog</div>
          <h2 className="section-title">Writing &amp; thoughts</h2>
          <p className="section-desc">I write about web development, mobile engineering, and lessons learned.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, i) => <BlogCard key={post.id} post={post} index={i} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/blog" className="btn btn-primary">
            View all posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}