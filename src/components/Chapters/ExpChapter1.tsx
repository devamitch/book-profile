import React from 'react'
import { EXPERIENCE } from '../../data/profile'
import { ChapterHeader, LotusGeo, OrnamentalRule, SriYantra } from './Sacred'

const [synapsis, nonceblox, early] = EXPERIENCE

// ─── Spread 1: Chapter I opener + Independent Studio ───────────────────────
export function Exp1L() {
  return (
    <div className="page-content">
      <SriYantra size={160} opacity={0.04} style={{ bottom: 20, right: -20 }} />

      <div className="running-head"><span>Chapter I</span><span>5</span></div>

      <ChapterHeader
        num="I"
        title="Chapter I"
        subtitle={"The Record\n— Eight years in\nproduction."}
        epigraph="From government portals to HealthTech AI. Every role a new frontier. Every project a system that ships."
      />

      <div style={{ marginTop: 'auto' }}>
        <div className="sec-label">At a Glance</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {[
            ['2017–2026', '8+ Years active'],
            ['3 companies', 'Kolkata → Dubai → Canada'],
            ['21 engineers', 'Recruited & led'],
            ['50K+ users', 'Peak daily active'],
            ['18+ apps', 'All in production'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--f-caps)', fontSize: '0.58rem', letterSpacing: '0.1em', color: 'var(--saffron)', flexShrink: 0, width: 70 }}>{k}</span>
              <span style={{ fontFamily: 'var(--f-body)', fontSize: '0.78rem', color: 'var(--ink-2)' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="page-num">5</div>
    </div>
  )
}

export function Exp1R() {
  return (
    <div className="page-content">
      <LotusGeo size={80} opacity={0.05} style={{ top: 24, right: 16 }} />

      <div className="running-head"><span>Independent Studio</span><span>6</span></div>

      <div className="exp-block">
        <div className="exp-header-bar">
          <div className="exp-accent-line" style={{ background: synapsis.color, width: 3, minHeight: 60, alignSelf: 'stretch' }} />
          <div>
            <div className="exp-role-name">{synapsis.role}</div>
            <div className="exp-co" style={{ color: synapsis.color }}>{synapsis.company}</div>
            <div className="exp-meta-row">
              <span className="exp-period">{synapsis.period}</span>
              <span className="exp-type-badge">{synapsis.type}</span>
            </div>
            <div style={{ fontFamily: 'var(--f-caps)', fontSize: '0.56rem', letterSpacing: '0.1em', color: 'var(--ink-4)', marginTop: 2 }}>{synapsis.location}</div>
          </div>
        </div>

        <ul className="exp-bullets">
          {synapsis.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>

        <div className="tech-row" style={{ marginTop: 10 }}>
          {synapsis.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
        </div>
      </div>

      <OrnamentalRule />

      <div className="pq">
        I was not just a developer. I was the architect, the recruiter,
        the mentor, the foundation. The code ships. The systems run.
        That stands.
        <cite>Amit, on Independent Studio</cite>
      </div>

      <div className="page-num">6</div>
    </div>
  )
}

// ─── Spread 2: NonceBlox ─────────────────────────────────────────
export function Exp2L() {
  return (
    <div className="page-content">
      <div className="running-head"><span>Chapter I · Continued</span><span>7</span></div>

      <div style={{ marginBottom: 14 }}>
        <div className="ch-label" style={{ marginBottom: 4 }}>Chapter I Continued</div>
        <div style={{ fontFamily: 'var(--f-display)', fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          3 years. 13+ apps.<br />50,000 real users.
        </div>
      </div>

      <div className="exp-block">
        <div className="exp-header-bar">
          <div className="exp-accent-line" style={{ background: nonceblox.color, width: 3, minHeight: 50, alignSelf: 'stretch' }} />
          <div>
            <div className="exp-role-name">{nonceblox.role}</div>
            <div className="exp-co" style={{ color: nonceblox.color }}>{nonceblox.company}</div>
            <div className="exp-meta-row">
              <span className="exp-period">{nonceblox.period}</span>
              <span className="exp-type-badge">{nonceblox.type}</span>
            </div>
            <div style={{ fontFamily: 'var(--f-caps)', fontSize: '0.56rem', letterSpacing: '0.1em', color: 'var(--ink-4)', marginTop: 2 }}>{nonceblox.location}</div>
          </div>
        </div>

        <ul className="exp-bullets">
          {nonceblox.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>

        <div className="tech-row" style={{ marginTop: 10 }}>
          {nonceblox.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
        </div>
      </div>

      <OrnamentalRule style={{ marginTop: 'auto' }} />

      <div style={{ fontFamily: 'var(--f-caps)', fontSize: '0.56rem', letterSpacing: '0.14em', color: 'var(--ink-4)', textAlign: 'center' }}>
        3 years · Dubai (Remote) · FinTech / Web3 / Gaming
      </div>

      <div className="page-num">7</div>
    </div>
  )
}

export function Exp2R() {
  const liveApps = [
    { name: 'Vulcan Eleven', badge: 'FANTASY SPORTS', link: 'https://apps.apple.com/app/vulcan-eleven/id6462420052', tech: 'React Native · Blockchain · Razorpay · Binance Pay' },
    { name: 'Housezy', badge: 'PROPTECH', link: 'https://apps.apple.com/us/app/housezy/id6471949955', tech: 'Expo Router · GraphQL · Socket.io · PayU · GPay' },
    { name: 'MusicX', badge: 'WEB3 MUSIC', link: 'https://apps.apple.com/us/app/music-x/id6475713772', tech: 'React Native · Native C++ · Spotify API · NFT' },
    { name: 'DeFi11', badge: 'DEFI SPORTS', link: 'https://apps.apple.com/app/defi11-fantasy-sports-app/id1608967244', tech: 'Solidity · Ethereum · Smart Contracts · NFT' },
  ]

  return (
    <div className="page-content">
      <div className="running-head"><span>Live Products</span><span>8</span></div>

      <div className="sec-label">Deployed · App Store Verified</div>

      {liveApps.map(app => (
        <div key={app.name} style={{
          marginBottom: 14, padding: '12px 14px',
          background: 'rgba(232,119,26,0.03)',
          border: '0.5px solid rgba(232,119,26,0.15)', borderRadius: 3,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'var(--f-caps)', fontSize: '0.52rem', letterSpacing: '0.18em', color: 'var(--saffron)', marginBottom: 2 }}>{app.badge}</div>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--ink)' }}>{app.name}</div>
            </div>
            <a href={app.link} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--f-caps)', fontSize: '0.55rem', color: 'var(--saffron)', textDecoration: 'none', letterSpacing: '0.12em' }}>
              App Store ↗
            </a>
          </div>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: '0.62rem', color: 'var(--ink-4)', marginTop: 5, lineHeight: 1.5 }}>{app.tech}</div>
        </div>
      ))}

      <OrnamentalRule />

      <div style={{ fontFamily: 'var(--f-body)', fontStyle: 'italic', fontSize: '0.78rem', color: 'var(--ink-4)', textAlign: 'center' }}>
        All 4 apps verified live on the iOS App Store
      </div>

      <div className="page-num">8</div>
    </div>
  )
}

// ─── Spread 3: Early career ───────────────────────────────────────
export function Exp3L() {
  return (
    <div className="page-content">
      <div className="running-head"><span>Chapter I · Continued</span><span>9</span></div>

      <div style={{ marginBottom: 14 }}>
        <div className="ch-label" style={{ marginBottom: 4 }}>The Foundation Years</div>
        <div style={{ fontFamily: 'var(--f-display)', fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Where the craft<br />was forged.
        </div>
      </div>

      <div className="exp-block">
        <div className="exp-header-bar">
          <div className="exp-accent-line" style={{ background: early.color, width: 3, minHeight: 50, alignSelf: 'stretch' }} />
          <div>
            <div className="exp-role-name">{early.role}</div>
            <div className="exp-co" style={{ color: early.color }}>{early.company}</div>
            <div className="exp-meta-row">
              <span className="exp-period">{early.period}</span>
              <span className="exp-type-badge">GovTech · 4+ Yrs</span>
            </div>
            <div style={{ fontFamily: 'var(--f-caps)', fontSize: '0.56rem', letterSpacing: '0.1em', color: 'var(--ink-4)', marginTop: 2 }}>{early.location}</div>
          </div>
        </div>

        <ul className="exp-bullets">
          {early.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>

        <div className="tech-row" style={{ marginTop: 10 }}>
          {early.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
        </div>
      </div>

      <OrnamentalRule style={{ marginTop: 'auto' }} />

      <div style={{ fontFamily: 'var(--f-body)', fontSize: '0.78rem', color: 'var(--ink-3)', textAlign: 'center', fontStyle: 'italic' }}>
        Where enterprise discipline became second nature.
      </div>

      <div className="page-num">9</div>
    </div>
  )
}

export function Exp3R() {
  return (
    <div className="page-content">
      <LotusGeo size={90} opacity={0.05} style={{ bottom: 50, left: 10 }} />

      <div className="running-head"><span>Achievements</span><span>10</span></div>

      <div className="sec-label">Certifications & Open Source</div>

      {[
        { title: 'Blockchain Development', sub: 'NFT Collection on Solana with DAO & Staking — Udemy' },
        { title: 'DevOps: CI/CD', sub: 'Docker, Kubernetes — LinkedIn Learning' },
        { title: 'Cognizant Hackathon 2021', sub: 'Quarterfinalist — Traffic Management Solutions' },
        { title: 'Open Source', sub: '55+ GitHub repositories — blockchain voting dApps, ML eCommerce, MERN stack' },
      ].map(c => (
        <div key={c.title} style={{ marginBottom: 12, paddingLeft: 12, borderLeft: '1.5px solid rgba(201,168,76,0.35)' }}>
          <div style={{ fontFamily: 'var(--f-display)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)' }}>{c.title}</div>
          <div style={{ fontFamily: 'var(--f-body)', fontSize: '0.76rem', color: 'var(--ink-3)', lineHeight: 1.5, marginTop: 2 }}>{c.sub}</div>
        </div>
      ))}

      <OrnamentalRule />

      <div className="sec-label">Languages</div>

      <div style={{ display: 'flex', gap: 16 }}>
        {[
          { lang: 'English', level: 'Full Professional' },
          { lang: 'Bengali', level: 'Native' },
          { lang: 'Hindi', level: 'Conversational' },
        ].map(l => (
          <div key={l.lang}>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--ink)' }}>{l.lang}</div>
            <div style={{ fontFamily: 'var(--f-caps)', fontSize: '0.52rem', letterSpacing: '0.12em', color: 'var(--saffron)' }}>{l.level}</div>
          </div>
        ))}
      </div>

      <OrnamentalRule />

      <div className="pq" style={{ marginTop: 4 }}>
        The stack is a tool.<br />The architecture is the art.
        <cite>Amit Chakraborty</cite>
      </div>

      <div className="page-num">10</div>
    </div>
  )
}
