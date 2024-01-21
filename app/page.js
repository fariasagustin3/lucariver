"use client"
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import HeaderSection from './components/HeaderSection'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import SliderSection from './components/SliderSection'
import TestimonialSection from './components/TestimonialSection'
import Modal from './components/Modal'

export default function Home() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <main className={open ? `bg-[#A4A4A4] relative pt-20` : `relative pt-20 bg-white`}>
      <div >
      {/* modal */}
      {open && (
        <div className='fixed lg:top-5 lg:right-10 z-[100]'>
          <Modal open={open} setOpen={setOpen} />
        </div>
      )}

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
      </div>

    </main>
  )
}
