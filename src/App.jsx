import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technology from './components/Technology'
import Timeline from './components/Timeline'
import Data from './components/Data'
import Contact from './components/Contact'
import './App.css'

function App() {
  useEffect(() => {
    // Custom smooth scroll for anchor links with 500ms duration
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href || href === '#') return

      const targetSection = document.querySelector(href)
      if (!targetSection) return

      e.preventDefault()

      const start = window.scrollY
      const offset = 80 // Offset in pixels to account for navbar
      const targetPosition = targetSection.offsetTop - offset
      const distance = targetPosition - start
      const duration = 500
      const startTime = performance.now()

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function (ease-in-out)
        const easeInOutCubic = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2

        window.scrollTo(0, start + distance * easeInOutCubic)

        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        }
      }

      requestAnimationFrame(animateScroll)
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Data />
      <Technology />
      <Timeline />
      <Contact />
      {/* Background gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </div>
  )
}

export default App
