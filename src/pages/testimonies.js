import Testimony from '@/components/testimony/testimony'
import React from 'react'

const TestimonyPage = () => {
  return (
    <div>
      <Testimony
        quote="The best course I've taken this year is Dream Studio by Kevin Shen. If you shoot video regularly, buy this"
        author="Charlie Hoehn"
        occupation="AUTHOR, ENTREPRENEUR, PUBLIC SPEAKER"
        videoUrl="https://www.youtube.com/embed/qUVgAih13sg?si=yVmbLp3JhBVq1LC_"
      />
      <Testimony
        quote="This course changed the way I approach video production!"
        author="Jane Doe"
        occupation="PROFESSIONAL VIDEOGRAPHER"
        videoUrl="https://www.youtube.com/embed/qUVgAih13sg?si=yVmbLp3JhBVq1LC_"
      />
    </div>
  )
}

export default TestimonyPage