import { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import Layout from '../components/Layout'
import { useSEO } from '../hooks/useSEO'
import '../styles/blog.css'

const FILTERS = ['All', 'Architecture', 'AI/ML', 'Backend', 'Frontend', 'Mobile', 'Flutter', 'DevOps', 'Hardware']

export default function BlogList() {
  useSEO({
    title: 'Blog — Osman Gani Khan Masum',
    description: 'Writing by Osman Gani Khan Masum (Masum Osman) on distributed systems, Go concurrency, networking, and AI/ML — published on Medium and GitBook.',
  })
  const [active, setActive] = useState('All')
  const featured = blogPosts.find(p => p.featured)
  const filtered = blogPosts.filter(p =>
    active === 'All' || p.category.toLowerCase() === active.toLowerCase()
  )

  return (
    <Layout>
      <div className="blog-page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">home</Link>
            <span>/</span>
            <span>blog</span>
          </div>
          <div className="section-tag">Blog</div>
          <h1 className="section-title">Writing &amp; thoughts</h1>
          <p className="section-desc">
            Notes on distributed systems, backend architecture, and AI/ML — published on{' '}
            <a href="https://medium.com/@masum26" target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>Medium</a>.
          </p>
          <div className="blog-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >{f}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="blog-page-body">
        <div className="container">

          {/* Featured */}
          {featured && (active === 'All' || featured.category.toLowerCase() === active.toLowerCase()) && (
            <Link className="blog-featured reveal visible" to={`/blog/${featured.slug}`}>
              <div className="blog-featured-visual">
                🖥️
                <span className="pinned-badge">★ FEATURED</span>
              </div>
              <div className="blog-featured-body">
                <div className="blog-meta">
                  <span className="blog-category">{featured.category}</span>
                  {featured.readTime && <><span>·</span><span>{featured.readTime} read</span></>}
                  {featured.date && <><span>·</span><span>{featured.date}</span></>}
                </div>
                <h2 className="blog-title">{featured.title}</h2>
                {featured.excerpt && <p className="blog-excerpt">{featured.excerpt}</p>}
                <span className="blog-readmore">Read article →</span>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="blog-posts-grid">
            {filtered.map((post, i) => (
              post.local ? (
                <Link
                  key={post.id}
                  className="blog-card reveal visible"
                  to={`/blog/${post.slug}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    {post.readTime && <><span>·</span><span>{post.readTime}</span></>}
                    {post.date && <><span>·</span><span>{post.date}</span></>}
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  {post.excerpt && <p className="blog-excerpt">{post.excerpt}</p>}
                  <span className="blog-readmore">Read →</span>
                </Link>
              ) : (
                <a
                  key={post.id}
                  className="blog-card reveal visible"
                  href={post.externalLinks?.[0]?.href || '#'}
                  target="_blank" rel="noopener noreferrer"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    {post.readTime && <><span>·</span><span>{post.readTime}</span></>}
                    {post.date && <><span>·</span><span>{post.date}</span></>}
                    <span className="external-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      {post.platform}
                    </span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  {post.excerpt && <p className="blog-excerpt">{post.excerpt}</p>}
                  <span className="blog-readmore">Read on {post.platform} →</span>
                </a>
              )
            ))}
          </div>

        </div>
      </div>
    </Layout>
  )
}