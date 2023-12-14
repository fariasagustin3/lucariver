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
    <main className="">
      <div className={open ? `bg-[#A4A4A4]` : `bg-white`}>

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

      {/* modal */}
      {open && (
        <Modal open={open} setOpen={setOpen} />
      )}
    </main>
  )
}
