import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Footer from '../components/Footer/Footer'

export default function LandingPage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Footer />
    </div>
  )
}
