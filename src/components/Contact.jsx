import { useState } from 'react'
import { socialLinks } from '../data/nav'
import SocialIcon from './SocialIcon'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const r1 = useScrollReveal(), r2 = useScrollReveal()

  const handleSubmit = async (e) => {
    e.preventDefault(); setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST', body: new FormData(e.target), headers: { Accept: 'application/json' }
      })
      if (res.ok) { setStatus('success'); e.target.reset() } else throw new Error()
    } catch { setStatus('error') }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrap">
          <div className="reveal" ref={r1}>
            <div className="section-tag">Contact</div>
            <h2 className="section-title">Let's work<br /><em>together</em></h2>
            <p style={{color:'var(--muted)',lineHeight:1.8,marginBottom:'1rem'}}>
              Have a project in mind, want to collaborate, or just want to say hi?
              I'm always open to interesting conversations and opportunities.
            </p>
            <a className="contact-email" href="mailto:osmanmasum.cs@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              osmanmasum.cs@gmail.com
            </a>
            <div className="about-merged-links">
              {socialLinks.filter(l => ['github','linkedin'].includes(l.icon)).map(link => (
                <a key={link.label} className="social-chip-icon" href={link.href} target="_blank" rel="noopener">
                  <SocialIcon name={link.icon} /> {link.label}
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form reveal" ref={r2} style={{transitionDelay:'0.15s'}} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group"><label htmlFor="name">Name</label><input type="text" id="name" name="name" placeholder="Your name" required /></div>
              <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" name="email" placeholder="your@email.com" required /></div>
            </div>
            <div className="form-group"><label htmlFor="subject">Subject</label><input type="text" id="subject" name="subject" placeholder="What's this about?" /></div>
            <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Tell me about your project or just say hi..." required /></div>
            <button type="submit" className="btn btn-primary" disabled={status==='sending'} style={{alignSelf:'flex-start'}}>
              {status==='sending' ? 'Sending...' : 'Send Message'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
            {status==='success' && <p className="form-status success">✓ Message sent! I'll get back to you soon.</p>}
            {status==='error'   && <p className="form-status error">✗ Something went wrong. Please email directly.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
