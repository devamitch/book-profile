import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { useBookStore } from '../store/bookStore'

export function usePageTurn() {
  const pageRef = useRef<HTMLDivElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)
  const creaseRef = useRef<HTMLDivElement>(null)
  const prevSpread = useRef(0)
  const { currentSpread, direction, isAnimating, setAnimating } = useBookStore()

  const animateForward = useCallback(() => {
    const page = pageRef.current
    const shadow = shadowRef.current
    const crease = creaseRef.current
    if (!page) return

    const tl = gsap.timeline({
      onComplete: () => {
        setAnimating(false)
        prevSpread.current = currentSpread
      }
    })

    // Page starts flat on right side
    gsap.set(page, {
      rotateY: 0,
      rotateX: 0,
      transformOrigin: 'left center',
      transformPerspective: 2000,
      zIndex: 10,
    })

    tl
      // Lift off - slight raise
      .to(page, {
        rotateY: -15,
        rotateX: 3,
        duration: 0.15,
        ease: 'power1.in',
      })
      // Main fold
      .to(page, {
        rotateY: -90,
        rotateX: 8,
        duration: 0.35,
        ease: 'power2.in',
      })
      // Complete turn - decelerate into flat
      .to(page, {
        rotateY: -180,
        rotateX: 0,
        duration: 0.35,
        ease: 'power2.out',
      })
      // Shadow animation
      .to(shadow || {}, {
        opacity: 0.6,
        duration: 0.2,
        ease: 'power1.inOut',
      }, '<0.1')
      .to(shadow || {}, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      }, '-=0.25')
      // Crease highlight
      .to(crease || {}, {
        opacity: 0.8,
        duration: 0.15,
      }, '<-0.4')
      .to(crease || {}, {
        opacity: 0,
        duration: 0.3,
      }, '-=0.15')
  }, [currentSpread, setAnimating])

  const animateBackward = useCallback(() => {
    const page = pageRef.current
    if (!page) return

    const tl = gsap.timeline({
      onComplete: () => {
        setAnimating(false)
        prevSpread.current = currentSpread
      }
    })

    gsap.set(page, {
      rotateY: -180,
      transformOrigin: 'right center',
      transformPerspective: 2000,
      zIndex: 10,
    })

    tl
      .to(page, { rotateY: -90, rotateX: 8, duration: 0.35, ease: 'power2.in' })
      .to(page, { rotateY: 0, rotateX: 0, duration: 0.35, ease: 'power2.out' })
  }, [currentSpread, setAnimating])

  useEffect(() => {
    if (!isAnimating) return
    if (direction === 'forward') animateForward()
    else animateBackward()
  }, [isAnimating, direction, animateForward, animateBackward])

  return { pageRef, shadowRef, creaseRef }
}
