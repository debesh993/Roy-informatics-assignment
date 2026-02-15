import About1 from "./About1"
import BookCTA from "./BookCTA"
import Footer1 from "./Footer1"
import Gallery1 from "./Gallery1"
import Hero from "./Hero"
import MakeupServices from "./MakeupServices"
import Navbar from "./Navbar"
import NewArrival from "./NewArrival"
import PortfolioVideos from "./PortfolioVideos"
import ShopCollection from "./ShopCollection"
import WhatsAppFloat from "./WhatsAppFloat"




const Home = () => {
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

export default Home