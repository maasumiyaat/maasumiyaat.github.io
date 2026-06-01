import { socialLinks } from '../data/nav'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SocialIcon from './SocialIcon'

export default function Hero() {
  const ref = useScrollReveal()
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero">
      <div className="bg-orb orb1" />
      <div className="bg-orb orb2" />

      <div className="container">
        <div className="hero-centered reveal" ref={ref}>
          {/* Avatar */}
          <div className="hero-avatar-wrap">
            <div className="hero-avatar-ring" />
            <img
              className="hero-avatar"
              src="/assets/gmmm.png"
              alt="Omar Faruk Khan"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
            />
            <div className="hero-avatar-fallback" style={{ display:'none' }}>O</div>
            <div className="hero-wave">👋</div>
          </div>

          {/* Name — accent colored, smaller */}
          <h1 className="hero-name">Omar Faruk Khan</h1>
          <p className="hero-bio">Software Engineer · Backend Enthusiast</p>

          {/* Social icons */}
          <div className="hero-social-row">
            {socialLinks.map(link => (
              <a
                key={link.label}
                className="hero-social-icon"
                href={link.href}
                title={link.label}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </div>

          {/* CTA — border only, not filled */}
          {/* <a href="#projects" className="btn-hero" onClick={scrollToProjects}>
            View My Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </a> */}
        </div>
      </div>

      {/* Scroll hint pinned to bottom */}
{/* Scroll hint pinned to bottom */}
<div className="hero-bottom">
  <a href="#projects" className="btn-hero" onClick={scrollToProjects}>
    View My Work
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </a>
  <div className="hero-scroll-hint">
    <span>scroll</span>
    <svg width="12" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </div>
</div>
    </section>
  )
}
