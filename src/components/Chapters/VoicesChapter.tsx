import React from 'react'
import { TESTIMONIALS, PROFILE } from '../../data/profile'
import { ChapterHeader, LotusGeo, OrnamentalRule, OmSymbol } from './Sacred'

export function Voices1L() {
  return (
    <div className="page-content">
      <OmSymbol size={140} opacity={0.04} style={{ bottom: 40, right: 0 }} />
      <div className="running-head"><span>Chapter IV</span><span>23</span></div>

      <ChapterHeader
        num="IV"
        title="Chapter IV"
        subtitle={"Voices\n— What teammates\nactually say."}
        epigraph="These words belong to the people who worked alongside Amit — managers, colleagues, and mentees who witnessed the work firsthand."
      />

      <div style={{ marginTop: 'auto' }}>
        <OrnamentalRule />
        <div style={{ fontFamily: 'var(--f-caps)', fontSize: '0.52rem', letterSpacing: '0.14em', color: 'var(--ink-4)', textAlign: 'center' }}>
          All testimonials verified via LinkedIn
        </div>

        <div style={{ marginTop: 16 }}>
          <div className="sec-label">What I Stand For</div>
          {[
            'Full accountability for production systems',
            'Engineers turned into technical leaders',
            'Calm under high-pressure pivots',
            'Founder-mindset in every engagement',
          ].map((h, i) => (
            <div key={i} style={{
              fontFamily: 'var(--f-body)', fontSize: '0.77rem', lineHeight: 1.5, color: 'var(--ink-3)',
              padding: '3px 0 3px 12px', borderLeft: '1.5px solid rgba(201,168,76,0.3)', marginBottom: 7,
            }}>
              {h}
            </div>
          ))}
        </div>
      </div>

      <div className="page-num">23</div>
    </div>
  )
}

export function Voices1R() {
  return (
    <div className="page-content">
      <LotusGeo size={80} opacity={0.05} style={{ top: 20, right: 12 }} />
      <div className="running-head"><span>Voices</span><span>24</span></div>

      <div className="sec-label">From the People Who Know</div>

      {TESTIMONIALS.map((t, i) => (
        <React.Fragment key={t.name}>
          <div className="testi">
            <div className="testi-quote-mark">"</div>
            <div className="testi-text">{t.text}</div>
            <a className="testi-who" href={t.li} target="_blank" rel="noreferrer">
              {t.name} — {t.role}
            </a>
            <div className="testi-co">{t.company}</div>
          </div>
          {i < TESTIMONIALS.length - 1 && <div className="testi-hr" />}
        </React.Fragment>
      ))}

      <OrnamentalRule />

      <div style={{
        fontFamily: 'var(--f-body)', fontStyle: 'italic', fontSize: '0.78rem',
        color: 'var(--ink-4)', textAlign: 'center',
      }}>
        linkedin.com/in/devamitch
      </div>

      <div className="page-num">24</div>
    </div>
  )
}
