import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Earn from '../components/Earn'
import Diversify from '../components/Diversify'
import Grow from '../components/Grow'
import Download from '../components/Download'
import Review from '../components/Review'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Review />
      <Download />
      <Grow/>
      <Diversify />
      <Earn />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
