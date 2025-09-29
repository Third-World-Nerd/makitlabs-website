import Navbar from './components/Navbar'
import Hero from './sections/home/Hero'
import Testimonials from './sections/home/Testimonials'
import WhoAreWe from './sections/home/WhoAreWe'
import WhyUs from './sections/home/WhyUs'
import Courses from './sections/home/Courses'
import Workshop from './sections/home/Workshop'
import TrustOurClients from './sections/home/TrustOurClients'
import Footer from './sections/home/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <WhoAreWe />
      <WhyUs />
      <Courses />
      <Workshop />
      <TrustOurClients />
      <Footer />
    </>
  )
}

export default App
