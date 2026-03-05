export interface Experience {
  id: string
  company: string
  role: string
  location: string
  period: string
  type: string
  color: string
  highlights: string[]
  tech: string[]
}

export interface Project {
  id: string
  name: string
  badge: string
  tagline: string
  desc: string
  tech: string[]
  color: string
  featured?: boolean
  link?: string
  impact?: string[]
}

export interface SkillCategory {
  cat: string
  color: string
  items: string[]
}

export interface Testimonial {
  name: string
  role: string
  company: string
  text: string
  li: string
}

export interface BlogPost {
  title: string
  cat: string
  color: string
  date: string
  teaser: string
  link: string
}

export interface Education {
  degree: string
  school: string
  period: string
  gpa: string
}

export interface Stat {
  value: string
  label: string
}

export interface StoryBeat {
  yr: string
  title: string
  color: string
  icon: string
  text: string
}

export type TurnDirection = 'forward' | 'backward'

export interface BookSpread {
  id: string
  chapter: number
  chapterTitle: string
  leftPageId: string
  rightPageId: string
}

export interface PageFaceProps {
  content: React.ReactNode
  side: 'left' | 'right'
  chapterNum?: number
  chapterTitle?: string
  pageNum?: number
}
