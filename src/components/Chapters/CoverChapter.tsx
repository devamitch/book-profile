import React from 'react'
import { PROFILE, STATS } from '../../data/profile'
import { useBookStore, SPREAD_META } from '../../store/bookStore'
import { SriYantra, LotusGeo, OrnamentalRule, OmSymbol } from './Sacred'

export function CoverLeft() {
  const { goToSpread } = useBookStore()

  return (
    <div className="cover-wrap">
      <div className="cover-texture-layer" />
      <div className="cover-border-outer" />
      <div className="cover-border-inner" />

      {/* Background sacred geometry */}
      <SriYantra size={280} opacity={0.04} style={{ bottom: 40, right: -40 }} />
      <OmSymbol size={160} opacity={0.03} style={{ top: 100, left: 20 }} />

      {/* SVG circuit-manuscript overlay */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06, pointerEvents: 'none' }} viewBox="0 0 560 740" fill="none">
        <path d="M90 0 L90 180 L200 180 L200 100 L360 100" stroke="#E8771A" strokeWidth="0.6" />
        <path d="M560 420 L400 420 L400 520 L270 520 L270 640" stroke="#C9A84C" strokeWidth="0.6" />
        <circle cx="200" cy="180" r="4" fill="#E8771A" opacity="0.5" />
        <circle cx="270" cy="520" r="4" fill="#C9A84C" opacity="0.5" />
        <path d="M0 320 L120 320 L120 380 L0 380" stroke="#E8771A" strokeWidth="0.3" strokeDasharray="4 8" />
        <path d="M560 160 L440 160 L440 250 L560 250" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="4 8" />
        {/* Sanskrit-like decorative lines */}
        <text x="30" y="680" fill="#C9A84C" fontSize="8" fontFamily="serif" opacity="0.4" letterSpacing="6">
          अमित चक्रवर्ती
        </text>
      </svg>

      <div className="cover-body">
        <div className="cover-edition">Principal Architect · Founding Engineer</div>

        {/* Hero image */}
        <div className="cover-hero-img">
          <img src="/images/cover-hero.jpg" alt="Cover" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
          {/* Fallback monogram */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
            <svg viewBox="0 0 100 100" width="72" height="72">
              <defs><linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E8771A" />
                <stop offset="100%" stopColor="#C9A84C" />
              </linearGradient></defs>
              <polygon points="50,8 92,82 8,82" fill="none" stroke="url(#ag)" strokeWidth="1.5" opacity="0.7" />
              <line x1="25" y1="62" x2="75" y2="62" stroke="url(#ag)" strokeWidth="1.5" opacity="0.4" />
              <circle cx="50" cy="50" r="8" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.4" />
              {[...Array(6)].map((_, i) => (
                <circle key={i}
                  cx={50 + Math.cos(i / 6 * Math.PI * 2) * 32}
                  cy={50 + Math.sin(i / 6 * Math.PI * 2) * 32}
                  r="1.5" fill="#E8771A" opacity="0.4"
                />
              ))}
            </svg>
            <span style={{ fontFamily: 'var(--f-caps)', fontSize: '0.48rem', letterSpacing: '0.2em', color: 'rgba(232,119,26,0.4)' }}>
              cover-hero.jpg
            </span>
          </div>
        </div>

        {/* Name */}
        <div>
          <div className="cover-firstname">Amit</div>
          <div className="cover-lastname">Chakraborty</div>
          <div className="cover-tagline-text">{PROFILE.tagline}</div>
        </div>

        <div className="cover-rule-gold" />

        <div>
          <div className="cover-subtitle">{PROFILE.subtitle}</div>
          <div className="cover-subroles">{PROFILE.subRoles}</div>
        </div>

        {/* Stats */}
        <div className="cover-stats-row">
          {STATS.map(s => (
            <div key={s.label} className="cover-stat">
              <span className="cover-stat-val">{s.value}</span>
              <span className="cover-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="cover-footer">
          <div className="cover-rule-gold" style={{ marginBottom: 8 }} />
          <div className="cover-year-text">MMXXV · KOLKATA, INDIA · OPEN FOR GLOBAL COLLABORATIONS</div>
        </div>
      </div>

      <button className="open-prompt" onClick={() => goToSpread(1)}>
        ॐ Open the Book →
      </button>
    </div>
  )
}

export function CoverRight() {
  const { goToSpread } = useBookStore()

  const chapters = [
    { num: 'F', label: 'Foreword', sub: 'The Man', spread: 1, pg: '1' },
    { num: 'I', label: 'Experience', sub: 'The Record', spread: 3, pg: '5' },
    { num: 'II', label: 'Projects', sub: 'The Work', spread: 6, pg: '11' },
    { num: 'III', label: 'Skills', sub: 'The Craft', spread: 9, pg: '17' },
    { num: 'IV', label: 'Testimonials', sub: 'Voices', spread: 12, pg: '23' },
    { num: '⁂', label: 'Colophon', sub: 'Contact', spread: 13, pg: '25' },
  ]

  return (
    <div className="page-content" style={{ background: 'var(--paper-2)' }}>
      <LotusGeo size={120} opacity={0.04} style={{ bottom: 60, right: 20 }} />

      <div className="running-head">
        <span>Contents</span>
        <span style={{ fontVariantNumeric: 'oldstyle-nums' }}>ii</span>
      </div>

      {/* Title */}
      <div style={{ marginBottom: 24 }}>
        <div className="sec-label">Table of Contents</div>
        <div className="pq" style={{ borderColor: 'var(--haldi)', marginTop: 8 }}>
          Before AI could write a line of code,<br />I was building production systems.
        </div>
      </div>

      {/* TOC entries */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        {chapters.map(ch => (
          <div key={ch.num} className="toc-row" onClick={() => goToSpread(ch.spread)}>
            <span className="toc-ch-num">{ch.num}</span>
            <div style={{ flex: 1 }}>
              <div className="toc-title-text">{ch.label}</div>
              <div className="toc-sub">{ch.sub}</div>
            </div>
            <div className="toc-dots" />
            <span className="toc-pg">{ch.pg}</span>
          </div>
        ))}
      </div>

      <OrnamentalRule />

      <div style={{
        fontFamily: 'var(--f-caps)', fontSize: '0.52rem', letterSpacing: '0.16em',
        color: 'var(--ink-4)', textAlign: 'center', marginTop: 6,
      }}>
        {PROFILE.location} · {PROFILE.availability}
      </div>

      <div className="page-num">ii</div>
    </div>
  )
}
