import { useEffect, lazy, Suspense } from 'react'
import { useBookStore } from './store/bookStore'
import Book from './components/Book/Book'
import ChapterNav from './components/UI/ChapterNav'
import Cursor from './components/UI/Cursor'

const AmbientScene = lazy(() => import('./components/Three/AmbientScene'))

export default function App() {
  const { theme } = useBookStore()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <>
      <div className="scene-bg" />
      <div className="glow-wrap">
        <div className="glow-orb" style={{
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(232,119,26,0.10) 0%, transparent 70%)',
          top: '-15%', left: '55%',
        }} />
        <div className="glow-orb" style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(176,32,32,0.07) 0%, transparent 70%)',
          bottom: '0%', left: '0%',
          animationDelay: '-6s', animationDuration: '20s',
        }} />
        <div className="glow-orb" style={{
          width: 350, height: 350,
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          top: '30%', left: '5%',
          animationDelay: '-3s', animationDuration: '14s',
        }} />
      </div>

      <Suspense fallback={null}>
        <AmbientScene />
      </Suspense>

      <Book />
      <ChapterNav />
      <Cursor />
    </>
  )
}
