import React, { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { FaArrowDown } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import './Hero.css'

const Hero = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const handleArrowClick = () => {
    const target = document.querySelector('#data')
    if (!target) return
    const start = window.scrollY
    const distance = target.offsetTop - 80 - start
    const duration = 500
    const startTime = performance.now()

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeInOutCubic = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2
      window.scrollTo(0, start + distance * easeInOutCubic)
      if (progress < 1) requestAnimationFrame(animateScroll)
    }

    requestAnimationFrame(animateScroll)
  }

  const options = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: { enable: true, mode: 'repulse' },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 75, duration: 0.4 },
        },
      },
      particles: {
        color: { value: '#ffffff' },
        links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.3, width: 1 },
        move: { direction: 'none', enable: true, outModes: { default: 'out' }, random: true, speed: 1, straight: false },
        number: { density: { enable: true }, value: 201, limit: { mode: 'delete', value: 201 } },
        life: { delay: { value: 0, sync: false }, duration: { value: 0, sync: false } },
        opacity: { value: 0.8 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  )

  if (!init) return <section id="hero" className="hero" />

  return (
    <section id="hero" className="hero">
      <Particles id="hero-particles" options={options} className="particles-container" />
      <div className="darkening-overlay"></div>
      <div className="particle-gradient-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="typewriter-gradient">
              <Typewriter
                options={{
                  strings: [
                    'Exploring Quantum Consciousness',
                    'Advancing AI Research',
                    'Pioneering Neural Technologies',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 75,
                  pauseFor: 10000,
                }}
              />
            </div>
          </motion.h1>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 5.1 },
          y: { duration: 2, repeat: Infinity, delay: 5.9 }
        }}
        onClick={handleArrowClick}
      >
        <FaArrowDown />
      </motion.div>

      <div className="particle-hint">click to spawn more particles</div>
    </section>
  )
}

export default Hero
