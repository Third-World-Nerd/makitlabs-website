// import type { FC } from "react"
import Navbar from "../../components/Navbar"
import Hero from "./sections/Hero"
import Testimonials from "./sections/Testimonials"
import WhoAreWe from "./sections/WhoAreWe"
import WhyUs from "./sections/WhyUs"
import Courses from "./sections/Courses"
import Workshop from "./sections/Workshop"
import TrustOurClients from "./sections/TrustOurClients"
import Footer from "../../components/Footer"



function Home()
{
  return(
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
      <WhoAreWe />
      <WhyUs />
      <Courses />
      <Workshop />
      <TrustOurClients />
      <Footer />
    </div>)
}

export default Home;