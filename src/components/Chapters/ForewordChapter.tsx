import React from 'react'
import { PROFILE, STATS, EDUCATION } from '../../data/profile'
import { OmSymbol, LotusGeo, ChakraWheel, OrnamentalRule, SacredBorder } from './Sacred'

// ─── Spread 1: About opener ───────────────────────────────────────
export function Foreword1L() {
  return (
    <div className="page-content">
      <OmSymbol size={130} opacity={0.04} style={{ bottom: 60, right: 10 }} />
      <SacredBorder />

      <div className="running-head"><span>Foreword</span><span>1</span></div>

      {/* Chapter opening */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="ch-numeral">F</div>
        <div className="ch-label">Foreword</div>
        <div className="ch-title">
          The man who builds<br />systems that outlast<br />the hype.
        </div>
        <div className="ch-rule" />
        <p className="ch-epigraph">
          Eight years in the trenches. Eighteen apps in production.
          Not a single shortcut taken.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-grid" style={{ marginTop: 'auto' }}>
        {STATS.map(s => (
          <div key={s.label} className="stat-box">
            <span className="stat-val">{s.value}</span>
            <span className="stat-lbl">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="page-num">1</div>
    </div>
  )
}

export function Foreword1R() {
  return (
    <div className="page-content">
      <LotusGeo size={100} opacity={0.05} style={{ top: 30, right: 20 }} />

      <div className="running-head"><span>The Author</span><span>2</span></div>

      <div className="sec-label">Professional Summary</div>

      <div className="body-text dropcap" style={{ marginBottom: 14 }}>
        <p>
          Principal Architect with 8+ years engineering 0-to-1 production systems
          across React Native, AI/ML, and Web3. Specialist in taking early-stage
          startups from concept to funded production — including proprietary game
          engines, HIPAA-compliant RAG pipelines, and high-value dApps.
        </p>
      </div>

      <div className="pq">
        I give everything to the craft. Day and night. I build entire technical
        universes from nothing — game engines, AI pipelines, vision systems,
        entire teams.
        <cite>Amit Chakraborty</cite>
      </div>

      <OrnamentalRule />

      {/* Education */}
      <div className="sec-label">Education</div>
      {EDUCATION.map(ed => (
        <div key={ed.degree} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontFamily: 'var(--f-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--ink)' }}>
              {ed.degree}
            </span>
            {ed.gpa && (
              <span style={{ fontFamily: 'var(--f-caps)', fontSize: '0.58rem', color: 'var(--saffron)', letterSpacing: '0.1em' }}>
                {ed.gpa}
              </span>
            )}
          </div>
          <div style={{ fontFamily: 'var(--f-body)', fontSize: '0.8rem', color: 'var(--ink-3)' }}>{ed.school}</div>
          <div style={{ fontFamily: 'var(--f-caps)', fontSize: '0.56rem', letterSpacing: '0.1em', color: 'var(--ink-4)' }}>
            {ed.period}
          </div>
        </div>
      ))}

      <OrnamentalRule style={{ marginTop: 'auto' }} />

      <div style={{ display: 'flex', gap: 12 }}>
        <a href={`mailto:${PROFILE.email}`} style={{ fontFamily: 'var(--f-caps)', fontSize: '0.58rem', color: 'var(--saffron)', letterSpacing: '0.1em', textDecoration: 'none' }}>
          ✉ {PROFILE.email}
        </a>
      </div>

      <div className="page-num">2</div>
    </div>
  )
}

// ─── Spread 2: Story timeline ─────────────────────────────────────
export function Foreword2L() {
  const story = [
    { yr: '2017', title: 'The Origin', text: 'PHP developer. 13 government projects secured, restructured, and shipped. Built GST portals, Android apps, and retailer software from absolute zero.' },
    { yr: '2019', title: 'MCA & The Leap', text: "Master's in Computer Applications. 8.61 CGPA. React, React Native, Web3 foundations — freelance projects running in parallel." },
    { yr: '2021', title: 'Web3 & Blockchain', text: 'Joined NonceBlox. Deep-dived into Solidity, DeFi, NFTs. Built DeFi11 — fully decentralized fantasy sports. 13+ apps over 3 years.' },
  ]

  return (
    <div className="page-content">
      <ChakraWheel size={90} opacity={0.06} style={{ bottom: 50, right: 10 }} />

      <div className="running-head"><span>Foreword</span><span>3</span></div>

      <div className="sec-label">A Life in Code</div>

      {story.map(b => (
        <div key={b.yr} className="story-row">
          <div className="story-yr">{b.yr}</div>
          <div className="story-dot" />
          <div style={{ flex: 1 }}>
            <div className="story-title">{b.title}</div>
            <div className="story-body-text">{b.text}</div>
          </div>
        </div>
      ))}

      <OrnamentalRule />

      <div className="sec-label">The Founder Mindset</div>

      <div className="body-text">
        <p>
          No single company defines me. My dedication, my principles, and how
          I tackle the hardest technical blockers do. I operate as a specialized
          unit — putting my skin in the game for every project.
        </p>
      </div>

      <div className="page-num">3</div>
    </div>
  )
}

export function Foreword2R() {
  const story2 = [
    { yr: '2023', title: 'The Lead Role', text: 'Lead Mobile Developer. Owned architecture for MusicX, Housezy, Vulcan Eleven. 50,000+ real users. Razorpay + Binance Pay. C++ Native Modules.' },
    { yr: '2025', title: 'AI + HealthTech', text: 'Proprietary game engine from scratch. RAG pipelines for HIPAA-compliant medical data. Aura AI. Women\'s health platform at scale. VP-level operations.' },
    { yr: 'Now', title: 'The Next Chapter', text: 'VP Engineering. CTO. Principal Architect. The title matters less than the mission. Building systems that scale and turning technical vision into outcomes.' },
  ]

  const principles = PROFILE.ethos.principles

  return (
    <div className="page-content">
      <OmSymbol size={120} opacity={0.035} style={{ top: 80, left: 0 }} />

      <div className="running-head"><span>The Author</span><span>4</span></div>

      {story2.map(b => (
        <div key={b.yr} className="story-row">
          <div className="story-yr">{b.yr}</div>
          <div className="story-dot" style={{ borderColor: b.yr === 'Now' ? 'var(--saffron)' : undefined, background: b.yr === 'Now' ? 'var(--saffron)' : undefined }} />
          <div style={{ flex: 1 }}>
            <div className="story-title">{b.title}</div>
            <div className="story-body-text">{b.text}</div>
          </div>
        </div>
      ))}

      <OrnamentalRule />

      <div className="sec-label">Principles</div>

      {principles.slice(0, 2).map((p, i) => (
        <div key={p.label} style={{ marginBottom: 10 }}>
          <div style={{ fontFamily: 'var(--f-display)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--saffron-deep)', letterSpacing: '-0.01em' }}>
            {i + 1}. {p.label}
          </div>
          <div style={{ fontFamily: 'var(--f-body)', fontSize: '0.77rem', lineHeight: 1.52, color: 'var(--ink-3)', marginTop: 2 }}>
            {p.detail}
          </div>
        </div>
      ))}

      <div className="page-num">4</div>
    </div>
  )
}
