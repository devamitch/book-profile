import { useEffect, useRef } from 'react'
import { useBookStore } from '../store/bookStore'

export function useKeyboard() {
  const { nextSpread, prevSpread } = useBookStore()
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return
      switch (e.key) {
        case 'ArrowRight': case 'ArrowDown': case ' ':
          e.preventDefault(); nextSpread(); break
        case 'ArrowLeft': case 'ArrowUp':
          e.preventDefault(); prevSpread(); break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [nextSpread, prevSpread])
}

export function useWheelNav(ref: React.RefObject<HTMLElement>) {
  const { nextSpread, prevSpread, isAnimating } = useBookStore()
  const lastWheel = useRef(0)
  const accum = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (isAnimating) return
      e.preventDefault()
      const now = Date.now()

      // Accumulate fast scroll
      accum.current += Math.abs(e.deltaY)

      if (now - lastWheel.current < 600) {
        if (accum.current < 80) return
      }
      if (Math.abs(e.deltaY) < 15) return

      lastWheel.current = now
      accum.current = 0

      if (e.deltaY > 0) nextSpread()
      else prevSpread()
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [nextSpread, prevSpread, isAnimating])
}

// Drag gesture on the page corners
export function useDragPageTurn(ref: React.RefObject<HTMLElement>) {
  const {
    nextSpread, prevSpread, isAnimating,
    currentSpread, totalSpreads,
    setDragging, setDragProgress, commitDrag,
  } = useBookStore()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let startX = 0
    let startY = 0
    let isDragging = false
    let startEdge: 'right' | 'left' | null = null

    const EDGE_ZONE = 80 // px from edge to start drag

    const getEdge = (x: number, rect: DOMRect): 'right' | 'left' | null => {
      const relX = x - rect.left
      if (relX > rect.width - EDGE_ZONE && currentSpread < totalSpreads - 1) return 'right'
      if (relX < EDGE_ZONE && currentSpread > 0) return 'left'
      return null
    }

    // MOUSE
    const onMouseDown = (e: MouseEvent) => {
      if (isAnimating) return
      const rect = el.getBoundingClientRect()
      const edge = getEdge(e.clientX, rect)
      if (!edge) return
      startX = e.clientX; startY = e.clientY
      isDragging = true; startEdge = edge
      setDragging(true, edge)
      useBookStore.getState().direction = edge === 'right' ? 'forward' : 'backward'
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !startEdge) return
      const dx = e.clientX - startX
      const progress = startEdge === 'right'
        ? Math.max(0, -dx) / (el.getBoundingClientRect().width / 2)
        : Math.max(0, dx) / (el.getBoundingClientRect().width / 2)
      setDragProgress(Math.min(progress, 1))
    }

    const onMouseUp = (e: MouseEvent) => {
      if (!isDragging) return
      isDragging = false
      const dx = Math.abs(e.clientX - startX)
      commitDrag(dx > 60)
      startEdge = null
    }

    // TOUCH
    const onTouchStart = (e: TouchEvent) => {
      if (isAnimating) return
      const rect = el.getBoundingClientRect()
      const t = e.touches[0]
      const edge = getEdge(t.clientX, rect)
      startX = t.clientX; startY = t.clientY
      isDragging = !!edge; startEdge = edge
      if (edge) {
        setDragging(true, edge)
        useBookStore.getState().direction = edge === 'right' ? 'forward' : 'backward'
      }
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !startEdge) return
      const t = e.touches[0]
      const dx = t.clientX - startX
      const progress = startEdge === 'right'
        ? Math.max(0, -dx) / (el.getBoundingClientRect().width / 2)
        : Math.max(0, dx) / (el.getBoundingClientRect().width / 2)
      setDragProgress(Math.min(progress, 1))

      // Prevent default only if clearly horizontal drag
      if (Math.abs(dx) > Math.abs(t.clientY - startY)) {
        e.preventDefault()
      }
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (!isDragging) return
      const t = e.changedTouches[0]
      const dx = Math.abs(t.clientX - startX)
      const dy = Math.abs(t.clientY - startY)
      isDragging = false; startEdge = null

      // If more horizontal than vertical — commit
      if (dx > dy && dx > 45) commitDrag(true)
      else commitDrag(false)
    }

    // Simple swipe anywhere (not corner-initiated)
    const onSwipe = (() => {
      let sx = 0, sy = 0, active = false
      const ts = (e: TouchEvent) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; active = true }
      const te = (e: TouchEvent) => {
        if (!active) return; active = false
        const dx = e.changedTouches[0].clientX - sx
        const dy = e.changedTouches[0].clientY - sy
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
          if (dx < 0) nextSpread(); else prevSpread()
        }
      }
      return { ts, te }
    })()

    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    el.addEventListener('touchstart', onSwipe.ts, { passive: true })
    el.addEventListener('touchend', onSwipe.te, { passive: true })

    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      el.removeEventListener('touchstart', onSwipe.ts)
      el.removeEventListener('touchend', onSwipe.te)
    }
  }, [isAnimating, currentSpread, totalSpreads])
}
