import { useEffect, useRef } from 'react'
import { useBookStore } from '../../store/bookStore'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const { isAnimating, isDragging } = useBookStore()
  let rx = 0, ry = 0, mx = 0, my = 0

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = `${mx}px`; dot.style.top = `${my}px`
    }

    const tick = () => {
      rx += (mx - rx) * 0.11; ry += (my - ry) * 0.11
      ring.style.left = `${rx}px`; ring.style.top = `${ry}px`
      raf = requestAnimationFrame(tick)
    }
    tick()

    const onEnter = () => ring.classList.add('hovered')
    const onLeave = () => ring.classList.remove('hovered')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  useEffect(() => {
    const ring = ringRef.current; if (!ring) return
    ring.classList.toggle('dragging', isDragging)
  }, [isDragging])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
