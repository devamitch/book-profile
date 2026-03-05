import React from 'react'

// Om symbol
export function OmSymbol({ size = 80, opacity = 0.06, color = '#E8771A', style = {} }: {
  size?: number; opacity?: number; color?: string; style?: React.CSSProperties
}) {
  return (
    <div style={{
      position: 'absolute', pointerEvents: 'none',
      fontFamily: 'var(--f-display)', fontSize: size,
      color, opacity, lineHeight: 1, userSelect: 'none',
      ...style,
    }}>
      ॐ
    </div>
  )
}

// Lotus geometric
export function LotusGeo({ size = 120, opacity = 0.05, style = {} }: {
  size?: number; opacity?: number; style?: React.CSSProperties
}) {
  const c = size / 2
  const r = size * 0.3

  const petals = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2
    const x = c + Math.cos(a) * r
    const y = c + Math.sin(a) * r
    return `M${c},${c} Q${c + Math.cos(a - 0.4) * r * 1.8},${c + Math.sin(a - 0.4) * r * 1.8} ${x},${y} Q${c + Math.cos(a + 0.4) * r * 1.8},${c + Math.sin(a + 0.4) * r * 1.8} ${c},${c} Z`
  })

  return (
    <svg
      width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={{ position: 'absolute', pointerEvents: 'none', opacity, ...style }}
    >
      {petals.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#E8771A" strokeWidth="0.5" />
      ))}
      <circle cx={c} cy={c} r={r * 0.35} fill="none" stroke="#C9A84C" strokeWidth="0.5" />
      <circle cx={c} cy={c} r={r * 0.15} fill="#E8771A" />
    </svg>
  )
}

// Sri Yantra (simplified triangles)
export function SriYantra({ size = 140, opacity = 0.04, style = {} }: {
  size?: number; opacity?: number; style?: React.CSSProperties
}) {
  const c = size / 2
  const r = size * 0.4
  const tris = [
    // Upward triangles
    [[c, c - r], [c - r * 0.87, c + r * 0.5], [c + r * 0.87, c + r * 0.5]],
    [[c, c - r * 0.6], [c - r * 0.52, c + r * 0.3], [c + r * 0.52, c + r * 0.3]],
    // Downward triangles
    [[c, c + r], [c - r * 0.87, c - r * 0.5], [c + r * 0.87, c - r * 0.5]],
    [[c, c + r * 0.6], [c - r * 0.52, c - r * 0.3], [c + r * 0.52, c - r * 0.3]],
  ]

  return (
    <svg
      width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={{ position: 'absolute', pointerEvents: 'none', opacity, ...style }}
    >
      {tris.map((pts, i) => (
        <polygon
          key={i}
          points={pts.map(p => p.join(',')).join(' ')}
          fill="none"
          stroke={i % 2 === 0 ? '#E8771A' : '#C9A84C'}
          strokeWidth="0.6"
        />
      ))}
      <circle cx={c} cy={c} r={r * 0.2} fill="none" stroke="#E8771A" strokeWidth="0.5" />
      <circle cx={c} cy={c} r={r * 0.07} fill="#C9A84C" />
      {/* Outer circles */}
      <circle cx={c} cy={c} r={r * 0.95} fill="none" stroke="#C9A84C" strokeWidth="0.4" />
      <circle cx={c} cy={c} r={r * 1.05} fill="none" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="3 4" />
    </svg>
  )
}

// Chakra wheel
export function ChakraWheel({ size = 80, opacity = 0.08, style = {} }: {
  size?: number; opacity?: number; style?: React.CSSProperties
}) {
  const c = size / 2
  const r = size * 0.38
  const spokes = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2
    return {
      x1: c + Math.cos(a) * r * 0.2, y1: c + Math.sin(a) * r * 0.2,
      x2: c + Math.cos(a) * r,       y2: c + Math.sin(a) * r,
    }
  })
  return (
    <svg
      width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={{ position: 'absolute', pointerEvents: 'none', opacity, ...style }}
    >
      <circle cx={c} cy={c} r={r} fill="none" stroke="#C9A84C" strokeWidth="0.8" />
      <circle cx={c} cy={c} r={r * 0.25} fill="none" stroke="#E8771A" strokeWidth="0.8" />
      {spokes.map((s, i) => (
        <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke="#C9A84C" strokeWidth="0.6" />
      ))}
    </svg>
  )
}

// Decorative border with sacred patterns
export function SacredBorder({ style = {} }: { style?: React.CSSProperties }) {
  return (
    <svg
      style={{
        position: 'absolute', inset: 16, width: 'calc(100% - 32px)', height: 'calc(100% - 32px)',
        pointerEvents: 'none', opacity: 0.05, ...style,
      }}
      viewBox="0 0 100 100" preserveAspectRatio="none"
    >
      <rect x="1" y="1" width="98" height="98" fill="none" stroke="#E8771A" strokeWidth="0.4" />
      <rect x="3" y="3" width="94" height="94" fill="none" stroke="#C9A84C" strokeWidth="0.2" />
      {/* Corner ornaments */}
      {[
        [4, 4], [96, 4], [4, 96], [96, 96]
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <path
            d={`M-4,0 L0,0 L0,-4`}
            fill="none" stroke="#E8771A" strokeWidth="0.5"
            transform={`rotate(${i * 90})`}
          />
        </g>
      ))}
    </svg>
  )
}

// Horizontal ornamental rule
export function OrnamentalRule({ color = '#E8771A', style = {} }: {
  color?: string; style?: React.CSSProperties
}) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8, margin: '10px 0',
      ...style,
    }}>
      <div style={{ flex: 1, height: '0.5px', background: `linear-gradient(to right, transparent, ${color}40)` }} />
      <span style={{ fontFamily: 'var(--f-display)', fontSize: '0.8rem', color, opacity: 0.5 }}>◈</span>
      <div style={{ flex: 1, height: '0.5px', background: `linear-gradient(to left, transparent, ${color}40)` }} />
    </div>
  )
}

// Chapter header with numeral and lotus
export function ChapterHeader({ num, title, subtitle, epigraph }: {
  num: string; title: string; subtitle: string; epigraph?: string
}) {
  return (
    <div style={{ position: 'relative' }}>
      <LotusGeo size={100} opacity={0.06} style={{ top: -10, right: 0 }} />
      <div className="ch-numeral">{num}</div>
      <div className="ch-label">{title}</div>
      <div className="ch-title">{subtitle}</div>
      <div className="ch-rule" />
      {epigraph && <p className="ch-epigraph">{epigraph}</p>}
    </div>
  )
}
