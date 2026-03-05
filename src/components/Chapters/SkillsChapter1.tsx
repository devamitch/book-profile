import React from 'react'
import { SKILLS } from '../../data/profile'
import { ChapterHeader, LotusGeo, OrnamentalRule, SriYantra, ChakraWheel, OmSymbol } from './Sacred'

function SkillSection({ s }: { s: typeof SKILLS[0] }) {
  return (
    <div className="skill-section">
      <div className="skill-cat-head" style={{ color: s.color }}>{s.cat}</div>
      <div className="skill-2col">
        {s.items.map(item => (
          <div key={item} className="skill-item">{item}</div>
        ))}
      </div>
    </div>
  )
}

// ─── Spread 1: Chapter III opener + Mobile + AI ──────────────────
export function Skills1L() {
  return (
    <div className="page-content">
      <SriYantra size={140} opacity={0.04} style={{ bottom: 20, right: -20 }} />
      <div className="running-head"><span>Chapter III</span><span>17</span></div>

      <ChapterHeader
        num="III"
        title="Chapter III"
        subtitle={"The Craft\n— From native device\nto cloud scale."}
        epigraph="8 categories. 50+ skills. All battle-tested in production environments."
      />

      <div style={{ marginTop: 'auto' }}>
        <div className="sec-label">Full Stack Span</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            ['Mobile',    'React Native · Expert, Bridgeless'],
            ['AI / ML',   'RAG · Agentic · Computer Vision'],
            ['Web3',      'Ethereum · Solana · DeFi · NFT'],
            ['Backend',   'NestJS · Node · GraphQL · AWS'],
            ['Frontend',  'React · Next.js 15 · GSAP'],
            ['Cloud',     'Docker · K8s · CI/CD · Fastlane'],
          ].map(([cat, desc]) => (
            <div key={cat} style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--f-caps)', fontSize: '0.56rem', letterSpacing: '0.1em', color: 'var(--saffron)', width: 58, flexShrink: 0 }}>{cat}</span>
              <span style={{ fontFamily: 'var(--f-body)', fontSize: '0.76rem', color: 'var(--ink-3)' }}>{desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="page-num">17</div>
    </div>
  )
}

export function Skills1R() {
  return (
    <div className="page-content">
      <LotusGeo size={80} opacity={0.05} style={{ top: 20, right: 12 }} />
      <div className="running-head"><span>The Craft</span><span>18</span></div>
      <SkillSection s={SKILLS[0]} />
      <OrnamentalRule />
      <SkillSection s={SKILLS[1]} />
      <div className="page-num">18</div>
    </div>
  )
}

// ─── Spread 2: Blockchain + Backend + Frontend ───────────────────
export function Skills2L() {
  return (
    <div className="page-content">
      <ChakraWheel size={80} opacity={0.06} style={{ bottom: 40, right: 10 }} />
      <div className="running-head"><span>Chapter III · Continued</span><span>19</span></div>
      <SkillSection s={SKILLS[2]} />
      <OrnamentalRule />
      <SkillSection s={SKILLS[3]} />
      <div className="page-num">19</div>
    </div>
  )
}

export function Skills2R() {
  return (
    <div className="page-content">
      <div className="running-head"><span>Chapter III · Continued</span><span>20</span></div>
      <SkillSection s={SKILLS[4]} />
      <OrnamentalRule />
      <SkillSection s={SKILLS[5]} />
      <div className="page-num">20</div>
    </div>
  )
}

// ─── Spread 3: Cloud + Leadership + Full tech stack ──────────────
export function Skills3L() {
  return (
    <div className="page-content">
      <OmSymbol size={120} opacity={0.035} style={{ bottom: 30, right: 0 }} />
      <div className="running-head"><span>Chapter III · Continued</span><span>21</span></div>
      <SkillSection s={SKILLS[6]} />
      <OrnamentalRule />
      {SKILLS[7] && <SkillSection s={SKILLS[7]} />}

      <div style={{ marginTop: 'auto' }}>
        <div className="pq">
          You don't need to know every tool.<br />
          You need to know which tool breaks the problem.
          <cite>Amit Chakraborty</cite>
        </div>
      </div>

      <div className="page-num">21</div>
    </div>
  )
}

export function Skills3R() {
  const allTechs = [
    'React Native','Next.js','NestJS','TypeScript','Node.js','AWS',
    'Docker','Kubernetes','PostgreSQL','MongoDB','Redis','GraphQL',
    'GSAP','Framer Motion','TensorFlow','MediaPipe','Pinecone',
    'Solidity','Web3.js','Ethers.js','Viem','Wagmi','WalletConnect',
    'Python','Rust','Go','Firebase','Electron','Fastlane',
    'GitHub Actions','CircleCI','Stripe','Razorpay','Binance Pay',
  ]

  return (
    <div className="page-content">
      <div className="running-head"><span>Full Stack Reference</span><span>22</span></div>

      <div className="sec-label">The Complete Arsenal</div>

      <div style={{
        fontFamily: 'var(--f-body)', fontSize: '0.8rem',
        lineHeight: 1.9, color: 'var(--ink-3)', textAlign: 'justify',
        flex: 1,
      }}>
        {allTechs.map((tech, i) => (
          <React.Fragment key={tech}>
            <span style={{
              color: i % 5 === 0 ? 'var(--saffron-deep)'
                : i % 4 === 0 ? 'var(--gold-deep)'
                : i % 3 === 0 ? 'var(--kumkum)'
                : 'var(--ink-3)',
              fontWeight: i % 5 === 0 ? 500 : undefined,
            }}>
              {tech}
            </span>
            {i < allTechs.length - 1 && (
              <span style={{ color: 'rgba(26,8,0,0.2)', margin: '0 5px', fontSize: '0.7rem' }}>·</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <OrnamentalRule />

      <div style={{
        fontFamily: 'var(--f-caps)', fontSize: '0.52rem', letterSpacing: '0.16em',
        color: 'var(--ink-4)', textAlign: 'center',
      }}>
        github.com/devamitch · 55+ repositories
      </div>

      <div className="page-num">22</div>
    </div>
  )
}
