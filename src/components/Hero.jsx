import { Link } from 'react-router-dom'
import { socialLinks } from '../data/nav'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SocialIcon from './SocialIcon'

export default function Hero() {
  const ref = useScrollReveal()

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
              src="/assets/avatar.jpg"
              alt="Osman Gani Khan Masum"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
            />
            <div className="hero-avatar-fallback" style={{ display:'none' }}>M</div>
            <div className="hero-wave">👋</div>
          </div>

          {/* Name — accent colored, smaller */}
          <h1 className="hero-name">Osman Gani Khan Masum</h1>
          <p className="hero-bio">Backend Engineer · Systems, Infrastructure &amp; Scale</p>

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

        </div>
      </div>

      <div className="hero-bottom">
        <Link to="/projects" className="btn-hero">
          View My Work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>
    </section>
  )
}
