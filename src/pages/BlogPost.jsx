import { useParams, Link, useNavigate } from 'react-router-dom'
import { blogPosts, getPostBySlug } from '../data/blog'
import Layout from '../components/Layout'
import '../styles/blog.css'

// Renders a single content block
function ContentBlock({ block }) {
  switch (block.type) {
    case 'h2': return <h2>{block.value}</h2>
    case 'h3': return <h3>{block.value}</h3>
    case 'p':  return <p>{block.value}</p>
    case 'pre': return <pre><code>{block.value}</code></pre>
    case 'blockquote': return <blockquote><p>{block.value}</p></blockquote>
    case 'hr': return <hr />
    case 'ul': return (
      <ul>{block.value.map((item, i) => <li key={i}>{item}</li>)}</ul>
    )
    case 'ol': return (
      <ol>{block.value.map((item, i) => <li key={i}>{item}</li>)}</ol>
    )
    default: return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <Layout>
        <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}>Post not found.</p>
          <Link to="/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)' }}>← Back to blog</Link>
        </div>
      </Layout>
    )
  }

  // Prev / Next
  // const idx = blogPosts.findIndex(p => p.slug === slug)
  // const prev = idx > 0 ? blogPosts[idx - 1] : null
  // const next = idx < blogPosts.length - 1 ? blogPosts[idx + 1] : null

  return (
    <Layout>
      {/* Post hero */}
      <div className="post-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">home</Link>
            <span>/</span>
            <Link to="/blog">blog</Link>
            <span>/</span>
            <span>{post.slug}</span>
          </div>
          <div className="post-meta-row">
            <span className="post-category">{post.category}</span>
            {post.date && <span className="post-meta-item">{post.date}</span>}
            {post.date && post.readTime && <span className="post-meta-item">·</span>}
            {post.readTime && <span className="post-meta-item">{post.readTime} read</span>}
          </div>
          <h1 className="post-title">{post.title}</h1>
          {post.subtitle && <p className="post-subtitle">{post.subtitle}</p>}
        </div>
      </div>

      {/* Post body */}
      <div className="post-layout">
        <div className="container">
          <article className="post-content">

            {/* External banner */}
            {post.externalLinks?.length > 0 && (
              <div className="external-banner">
                <p>📖 This post is also published externally.</p>
                {post.externalLinks.map(link => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener">
                    {link.label}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                ))}
              </div>
            )}

            {/* Content blocks */}
            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}

            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="post-tags">
                {post.tags.map(tag => <span key={tag} className="post-tag">{tag}</span>)}
              </div>
            )}

            {/* Author card */}
            <div className="author-card">
              <div className="author-avatar">
                <img
                  src="/assets/avatar.png"
                  alt="Osman Gani Khan Masum"
                  onError={e => { e.target.style.display = 'none'; e.target.parentElement.textContent = 'M' }}
                />
              </div>
              <div className="author-info">
                <h4>Osman Gani Khan Masum</h4>
                <p>Backend Engineer · Distributed Systems &amp; Microservices. Writing about things I build and learn.</p>
                <div className="author-links">
                  <a className="author-link" href="https://github.com/maasumiyaat" target="_blank" rel="noopener">GitHub</a>
                  <a className="author-link" href="https://medium.com/@masum26" target="_blank" rel="noopener">Medium</a>
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            {/* {(prev || next) && (
              <nav className="post-nav">
                {prev ? (
                  <Link className="post-nav-link prev" to={`/blog/${prev.slug}`}>
                    <span className="post-nav-direction">← Previous</span>
                    <span className="post-nav-title">{prev.title}</span>
                  </Link>
                ) : <div />}
                {next && (
                  <Link className="post-nav-link next" to={`/blog/${next.slug}`}>
                    <span className="post-nav-direction">Next →</span>
                    <span className="post-nav-title">{next.title}</span>
                  </Link>
                )}
              </nav>
            )} */}

          </article>
        </div>
      </div>
    </Layout>
  )
}