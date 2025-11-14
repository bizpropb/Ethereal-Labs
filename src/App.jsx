import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Technology from './components/Technology'
import Timeline from './components/Timeline'
import Data from './components/Data'
import Team from './components/Team'
import Contact from './components/Contact'
import './App.css'

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Technology />
      <Data />
      <Timeline />
      <Team />
      <Contact />

      {/* Background gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </div>
  )
}

export default App
