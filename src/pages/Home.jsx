import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Biography from '../components/biography'
import Discography from '../components/discography'
import Timeline from '../components/Timeline'
import Achievement from '../components/achievements'
import Awards from '../components/awards'
import Collaborators from '../components/collaborators'
import Footer from '../components/footer'
import Tours from '../components/tours'
import Gallery from '../components/gallery'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Biography />
      <Timeline />
      <Discography />
      <Achievement />
      <Awards />
      <Collaborators />
      <Tours />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home