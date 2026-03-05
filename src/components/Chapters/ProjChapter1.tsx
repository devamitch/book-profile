import React from 'react'
import { PROJECTS } from '../../data/profile'
import { ChapterHeader, LotusGeo, OrnamentalRule, SriYantra, OmSymbol, ChakraWheel } from './Sacred'

const featured = PROJECTS.filter(p => p.featured)
const rest = PROJECTS.filter(p => !p.featured)

function ProjCard({ p }: { p: typeof PROJECTS[0] }) {
  return (
    <div
      className="proj-card"
      style={{ '--proj-color': p.color } as React.CSSProperties}
      onClick={() => p.link && window.open(p.link, '_blank')}
    >
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: p.color, borderRadius: '2px 0 0 2px' }} />
      <div className="proj-badge" style={{ color: p.color }}>{p.badge}</div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div className="proj-name">{p.name}</div>
        {p.link && <span className="proj-link-badge">↗</span>}
      </div>
      <div className="proj-tagline">{p.tagline}</div>
      <div className="proj-desc">{p.desc}</div>
      <div className="tech-row">
        {p.tech.slice(0, 4).map(t => <span key={t} className="tech-chip">{t}</span>)}
        {p.tech.length > 4 && <span className="tech-chip">+{p.tech.length - 4}</span>}
      </div>
    </div>
  )
}

// ─── Spread 1: Chapter II opener + VitalQuest ────────────────────
export function Proj1L() {
  return (
    <div className="page-content">
      <SriYantra size={150} opacity={0.04} style={{ bottom: 20, right: -20 }} />
      <div className="running-head"><span>Chapter II</span><span>11</span></div>

      <ChapterHeader
        num="II"
        title="Chapter II"
        subtitle={"The Work\n— Shipped. Scaled.\nStill running."}
        epigraph="Not prototypes. Not demos. Real production systems running for real users — across HealthTech, FinTech, Web3, and beyond."
      />

      <div style={{ marginTop: 'auto' }}>
        <div className="sec-label">Portfolio Overview</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            ['18+ apps', 'All in production'],
            ['5 platforms', 'iOS · Android · Web · AI · Desktop'],
            ['10 verticals', 'HealthTech to GovTech'],
            ['4 App Store', 'Live & verified listings'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--f-caps)', fontSize: '0.58rem', letterSpacing: '0.1em', color: 'var(--saffron)', width: 64, flexShrink: 0 }}>{k}</span>
              <span style={{ fontFamily: 'var(--f-body)', fontSize: '0.78rem', color: 'var(--ink-2)' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="page-num">11</div>
    </div>
  )
}

export function Proj1R() {
  return (
    <div className="page-content">
      <LotusGeo size={80} opacity={0.05} style={{ top: 20, right: 14 }} />
      <div className="running-head"><span>Flagship Projects</span><span>12</span></div>

      <div className="sec-label">VitalQuest AI · Principal Architect</div>

      <ProjCard p={PROJECTS[0]} />

      <OrnamentalRule />

      <div className="sec-label">Impact</div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {(PROJECTS[0].impact || []).map((item, i) => (
          <li key={i} style={{ fontFamily: 'var(--f-body)', fontSize: '0.78rem', color: 'var(--ink-3)', lineHeight: 1.5, padding: '3px 0 3px 14px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--saffron)', fontSize: '0.7rem' }}>◈</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="page-num">12</div>
    </div>
  )
}

// ─── Spread 2: Nexus + LunaCare ─────────────────────────────────
export function Proj2L() {
  return (
    <div className="page-content">
      <OmSymbol size={100} opacity={0.035} style={{ bottom: 40, right: 0 }} />
      <div className="running-head"><span>Chapter II · Continued</span><span>13</span></div>
      <div className="sec-label">Nexus Marketing AI</div>
      <ProjCard p={PROJECTS[1]} />
      <OrnamentalRule />
      <div className="sec-label">LunaCare Wellness</div>
      <ProjCard p={PROJECTS[2]} />
      <div className="page-num">13</div>
    </div>
  )
}

export function Proj2R() {
  return (
    <div className="page-content">
      <ChakraWheel size={80} opacity={0.06} style={{ top: 20, right: 14 }} />
      <div className="running-head"><span>Chapter II · Continued</span><span>14</span></div>
      <div className="sec-label">Vulcan Eleven · 50K Users</div>
      <ProjCard p={PROJECTS[3]} />
      <OrnamentalRule />
      <div className="sec-label">Housezy · PropTech</div>
      <ProjCard p={PROJECTS[4]} />
      <div className="page-num">14</div>
    </div>
  )
}

// ─── Spread 3: More projects ─────────────────────────────────────
export function Proj3L() {
  return (
    <div className="page-content">
      <div className="running-head"><span>Chapter II · Portfolio</span><span>15</span></div>
      <div className="sec-label">DeFi11 · Fully On-Chain</div>
      <ProjCard p={PROJECTS[5]} />
      <OrnamentalRule />
      <div className="sec-label">MusicX · Web3 Music</div>
      <ProjCard p={PROJECTS[6]} />
      <div className="page-num">15</div>
    </div>
  )
}

export function Proj3R() {
  return (
    <div className="page-content">
      <LotusGeo size={80} opacity={0.05} style={{ bottom: 50, right: 0 }} />
      <div className="running-head"><span>Chapter II · Portfolio</span><span>16</span></div>
      <div className="sec-label">Be4You · Social Discovery</div>
      <ProjCard p={PROJECTS[7]} />
      <OrnamentalRule />

      {/* Blog teaser */}
      <div className="sec-label" style={{ marginTop: 8 }}>Writing · Medium</div>
      {[
        { title: 'React Native Bridgeless Architecture: What They Don\'t Tell You', cat: 'Mobile', link: 'https://devamitch.medium.com/' },
        { title: 'Building RAG Pipelines for Medical Data: A HIPAA-Safe Approach', cat: 'AI + HealthTech', link: 'https://devamitch.medium.com/' },
        { title: 'Say Goodbye to Git Woes: Become a Git Wizard Today!', cat: 'DevOps', link: 'https://devamitch.medium.com/' },
      ].map(b => (
        <div key={b.title} style={{ marginBottom: 10 }}>
          <span style={{ fontFamily: 'var(--f-caps)', fontSize: '0.52rem', letterSpacing: '0.14em', color: 'var(--saffron)', display: 'block', marginBottom: 2 }}>{b.cat}</span>
          <a href={b.link} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--f-display)', fontSize: '0.84rem', fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1.3, display: 'block', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--saffron)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
          >
            {b.title}
          </a>
        </div>
      ))}

      <div className="page-num">16</div>
    </div>
  )
}
