import React from 'react'
import WhatsAppFloat from './components/WhatsAppFloat'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import CTASection from './components/CTASection'
import Videos from './components/Videos'
import Gallery from './components/Gallery'
import About from './components/About'
import Footer from './components/Footer'
import NewArrival from './components/NewArrival'
import ShopCollection from './components/ShopCollection'
import MakeupServices from './components/MakeupServices'
import BookCTA from './components/BookCTA'
import PortfolioVideos from './components/PortfolioVideos'
import Gallery1 from './components/Gallery1'
import About1 from './components/About1'
import Footer1 from './components/Footer1'
import Hero1 from './components/Hero1'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <WhatsAppFloat/>
      {/* <Header/> */}
      <Navbar/>
      <Hero/>
      <NewArrival/>
      <ShopCollection/>
      <MakeupServices/>
      <BookCTA/>
      <PortfolioVideos/>
      <Gallery1/>
      <About1/>
      <Footer1/>

      {/* <Services/>
      <CTASection/>
      <Videos/>
      <Gallery/>
      <About/>
      <Footer/> */}
    </>
  )
}

export default App