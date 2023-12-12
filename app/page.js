import Footer from './components/Footer'
import HeaderSection from './components/HeaderSection'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import SliderSection from './components/SliderSection'
import TestimonialSection from './components/TestimonialSection'

export default function Home() {
  return (
    <main className="">
      {/* navbar */}
      <Navbar />
      
      {/* main section */}
      <HeaderSection />

      {/* profile */}
      <Profile />

      {/* testimonial */}
      <TestimonialSection />

      {/* slider */}
      <SliderSection />

      {/* footer */}
      <Footer />
    </main>
  )
}
