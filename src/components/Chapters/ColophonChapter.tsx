import React, { useState } from 'react'
import { PROFILE } from '../../data/profile'
import { LotusGeo, OrnamentalRule, OmSymbol, SriYantra } from './Sacred'

export function ColophonL() {
  return (
    <div className="page-content">
      <SriYantra size={150} opacity={0.04} style={{ bottom: 20, right: -20 }} />
      <div className="running-head"><span>Colophon</span><span>25</span></div>

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontFamily: 'var(--f-display)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--saffron)', marginBottom: 6 }}>⁂ Colophon</div>
        <div style={{ fontFamily: 'var(--f-display)', fontSize: '1.8rem', fontStyle: 'italic', color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Let's build<br />something<br />remarkable.
        </div>
        <div style={{ width: 36, height: 1.5, background: 'var(--saffron)', borderRadius: 1, marginTop: 14 }} />
      </div>

      <div className="body-text" style={{ marginBottom: 16 }}>
        <p>
          Open for VP Engineering, CTO, Principal Architect, and specialized
          0-to-1 builds. If you have a mission that demands a founder-mindset
          engineer, let's talk.
        </p>
      </div>

      <div className="sec-label">How I Engage</div>

      {[
        { n: '01', t: 'Discovery Call', d: 'You share the vision. I ask the hard questions.', time: '30 min' },
        { n: '02', t: 'Architecture Blueprint', d: 'Stack, models, cost, timeline. No black boxes.', time: '2–3 days' },
        { n: '03', t: 'Aligned Build', d: 'Regular check-ins. Transparent progress.', time: 'Ongoing' },
        { n: '04', t: 'Delivery & Handoff', d: "Production-ready. I don't ghost after delivery.", time: 'Final' },
      ].map(step => (
        <div key={step.n} style={{ marginBottom: 10, display: 'flex', gap: 10 }}>
          <div style={{ fontFamily: 'var(--f-caps)', fontSize: '0.58rem', color: 'var(--saffron)', flexShrink: 0, paddingTop: 2 }}>{step.n}</div>
          <div>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--ink)' }}>
              {step.t}
              <span style={{ fontFamily: 'var(--f-caps)', fontSize: '0.52rem', letterSpacing: '0.1em', color: 'var(--ink-4)', marginLeft: 8 }}>
                {step.time}
              </span>
            </div>
            <div style={{ fontFamily: 'var(--f-body)', fontSize: '0.74rem', color: 'var(--ink-3)', lineHeight: 1.4, marginTop: 1 }}>{step.d}</div>
          </div>
        </div>
      ))}

      <div className="page-num">25</div>
    </div>
  )
}

export function ColophonR() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)

  const links = [
    { icon: '✉', label: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: '☎', label: PROFILE.phone, href: `tel:${PROFILE.phone}` },
    { icon: 'in', label: 'linkedin.com/in/devamitch', href: PROFILE.linkedin },
    { icon: '⌥', label: 'github.com/devamitch', href: PROFILE.github },
    { icon: '𝕏', label: '@devamitch', href: PROFILE.twitter },
    { icon: 'M', label: 'devamitch.medium.com', href: PROFILE.medium },
    { icon: '🌐', label: 'devamit.co.in', href: PROFILE.website },
  ]

  const send = () => {
    const mail = `mailto:${PROFILE.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.msg}`)}`
    window.location.href = mail
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="page-content">
      <OmSymbol size={100} opacity={0.035} style={{ bottom: 50, right: 0 }} />
      <div className="running-head"><span>Contact</span><span>26</span></div>

      <div className="sec-label">Connect Directly</div>

      {links.map(l => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="contact-row">
          <span className="contact-icon">{l.icon}</span>
          {l.label}
        </a>
      ))}

      <OrnamentalRule />

      <div className="sec-label">Quick Message</div>

      <input
        className="book-input" type="text" placeholder="Your name"
        value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
      />
      <input
        className="book-input" type="email" placeholder="Your email"
        value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
      />
      <textarea
        className="book-input" placeholder="Your message..."
        value={form.msg} onChange={e => setForm(p => ({ ...p, msg: e.target.value }))}
      />
      <button className="book-btn" onClick={send}>
        {sent ? '✓ Opening Mail Client...' : 'ॐ Send Message →'}
      </button>

      {/* Seal */}
      <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: 10 }}>
        <div className="seal">AC</div>
        <div style={{ fontFamily: 'var(--f-caps)', fontSize: '0.5rem', letterSpacing: '0.18em', color: 'var(--ink-4)', textTransform: 'uppercase' }}>
          {PROFILE.location} · {new Date().getFullYear()}
        </div>
      </div>

      <div className="page-num">26</div>
    </div>
  )
}
