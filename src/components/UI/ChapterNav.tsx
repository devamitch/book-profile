import React from 'react'
import { useBookStore, TOTAL_SPREADS, SPREAD_META } from '../../store/bookStore'

export default function ChapterNav() {
  const { currentSpread, goToSpread, nextSpread, prevSpread, isAnimating, theme, toggleTheme } = useBookStore()
  const meta = SPREAD_META[currentSpread]

  return (
    <>
      <div className="book-nav">
        <button className="nav-btn" onClick={prevSpread}
          disabled={isAnimating || currentSpread === 0} data-hover>←</button>
        <div className="nav-info">
          {meta?.label}
          <span>{currentSpread + 1} / {TOTAL_SPREADS}</span>
        </div>
        <button className="nav-btn" onClick={nextSpread}
          disabled={isAnimating || currentSpread === TOTAL_SPREADS - 1} data-hover>→</button>
        <button className="nav-btn" onClick={toggleTheme} style={{ marginLeft: 6 }} data-hover>
          {theme === 'day' ? '◐' : '◑'}
        </button>
      </div>

      <div className="ch-dots">
        {SPREAD_META.map((m, i) => (
          <div key={i} className={`ch-dot-wrap ${currentSpread === i ? 'active' : ''}`}
            onClick={() => goToSpread(i)} data-hover>
            <span className="ch-dot-lbl">{m.label}</span>
            <div className="ch-dot" />
          </div>
        ))}
      </div>

      <div className="hint-bar">
        <span>← → Keys · Scroll · Drag corners · Swipe</span>
      </div>
    </>
  )
}
