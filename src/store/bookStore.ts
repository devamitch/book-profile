import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export type TurnDirection = 'forward' | 'backward'

export interface BookStore {
  currentSpread: number
  totalSpreads: number
  isAnimating: boolean
  direction: TurnDirection
  isDragging: boolean
  dragProgress: number
  dragSide: 'right' | 'left'
  theme: 'day' | 'night'
  highlightSpread: number | null

  nextSpread: () => void
  prevSpread: () => void
  goToSpread: (n: number) => void
  setAnimating: (v: boolean) => void
  setDragging: (v: boolean, side?: 'right' | 'left') => void
  setDragProgress: (v: number) => void
  commitDrag: (commit: boolean) => void
  toggleTheme: () => void
}

export const TOTAL_SPREADS = 14

export const SPREAD_META = [
  { label: 'Cover',         chapter: '',    symbol: '◈', pageNums: [null, 'ii'] },
  { label: 'Foreword',      chapter: 'F',   symbol: 'ॐ', pageNums: [1, 2] },
  { label: 'The Author',    chapter: 'F',   symbol: '◉', pageNums: [3, 4] },
  { label: 'Chapter I',     chapter: 'I',   symbol: '𝕀', pageNums: [5, 6] },
  { label: 'NonceBlox',     chapter: 'I',   symbol: '◆', pageNums: [7, 8] },
  { label: 'Early Career',  chapter: 'I',   symbol: '◆', pageNums: [9, 10] },
  { label: 'Chapter II',    chapter: 'II',  symbol: '◈', pageNums: [11, 12] },
  { label: 'Projects I',    chapter: 'II',  symbol: '◈', pageNums: [13, 14] },
  { label: 'Projects II',   chapter: 'II',  symbol: '◆', pageNums: [15, 16] },
  { label: 'Chapter III',   chapter: 'III', symbol: '◉', pageNums: [17, 18] },
  { label: 'Skills I',      chapter: 'III', symbol: '◆', pageNums: [19, 20] },
  { label: 'Skills II',     chapter: 'III', symbol: '◆', pageNums: [21, 22] },
  { label: 'Chapter IV',    chapter: 'IV',  symbol: '◈', pageNums: [23, 24] },
  { label: 'Colophon',      chapter: '⁂',   symbol: 'ॐ', pageNums: [25, 26] },
]

export const useBookStore = create<BookStore>()(
  subscribeWithSelector((set, get) => ({
    currentSpread: 0,
    totalSpreads: TOTAL_SPREADS,
    isAnimating: false,
    direction: 'forward',
    isDragging: false,
    dragProgress: 0,
    dragSide: 'right',
    theme: 'day',
    highlightSpread: null,

    nextSpread: () => {
      const { currentSpread, totalSpreads, isAnimating } = get()
      if (isAnimating || currentSpread >= totalSpreads - 1) return
      set({ direction: 'forward', isAnimating: true, currentSpread: currentSpread + 1 })
    },

    prevSpread: () => {
      const { currentSpread, isAnimating } = get()
      if (isAnimating || currentSpread <= 0) return
      set({ direction: 'backward', isAnimating: true, currentSpread: currentSpread - 1 })
    },

    goToSpread: (n: number) => {
      const { currentSpread, isAnimating, totalSpreads } = get()
      if (isAnimating || n === currentSpread || n < 0 || n >= totalSpreads) return
      set({ direction: n > currentSpread ? 'forward' : 'backward', isAnimating: true, currentSpread: n })
    },

    setAnimating: (v) => set({ isAnimating: v }),

    setDragging: (v, side = 'right') => set({ isDragging: v, dragSide: side }),

    setDragProgress: (v) => set({ dragProgress: Math.max(0, Math.min(1, v)) }),

    commitDrag: (commit) => {
      const { direction, currentSpread, totalSpreads } = get()
      set({ isDragging: false, dragProgress: 0 })
      if (!commit) return
      if (direction === 'forward' && currentSpread < totalSpreads - 1) {
        set({ isAnimating: true, currentSpread: currentSpread + 1 })
      } else if (direction === 'backward' && currentSpread > 0) {
        set({ isAnimating: true, currentSpread: currentSpread - 1 })
      }
    },

    toggleTheme: () => set(s => ({ theme: s.theme === 'day' ? 'night' : 'day' })),
  }))
)
