import React from 'react'
import CarouselComponent from '@/components/carousel/carousel'
import VideoGallery from '@/components/encounter-jesus/encounter-jesus'
import ProfileGallery from '@/components/profiles/profiles'
import EventCarousel from '@/components/meetings/meetings'
import InfoSection from '@/components/infocolumn/infocolumn'
import EventCTA from '@/components/event-cta/event-cta'
import FreeResources from '@/components/freeresources/freeresources'

const Home = () => {
  return (
    <div >
      <CarouselComponent />
      <VideoGallery/>
      <ProfileGallery/>
      <EventCarousel/>
      <InfoSection/>
      <EventCTA/>
      <FreeResources/>
    </div>
  
  )
}

export default Home