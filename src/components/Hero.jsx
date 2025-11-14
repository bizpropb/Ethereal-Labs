import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { FaArrowDown, FaRocket, FaBrain, FaAtom } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const particlesConfig = {
    fullScreen: false,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ['#00D9FF', '#B537F2', '#FF2E97'],
      },
      shape: {
        type: ['circle', 'triangle'],
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#00D9FF',
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.5,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  }

  return (
    <section id="hero" className="hero">
      <Particles
        id="hero-particles"
        init={particlesInit}
        options={particlesConfig}
        className="particles-container"
      />

      <div className="hero-content">
        <motion.div
          className="floating-icons"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <div className="icon-orb icon-1">
            <FaBrain />
          </div>
          <div className="icon-orb icon-2">
            <FaAtom />
          </div>
          <div className="icon-orb icon-3">
            <FaRocket />
          </div>
        </motion.div>

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-dot"></span>
            Pioneering Neural Technologies
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Bridging <span className="gradient-text glow-text">Consciousness</span>
            <br />
            and <span className="gradient-text glow-text">Quantum Reality</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Ethereal Labs is pushing the boundaries of what's possible at the intersection
            of neuroscience, quantum computing, and artificial consciousness.
          </motion.p>

          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.a
              href="#research"
              className="hero-cta primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Research
            </motion.a>
            <motion.a
              href="#contact"
              className="hero-cta secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Journey
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="stat">
              <div className="stat-value gradient-text">127+</div>
              <div className="stat-label">Research Papers</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value gradient-text">43</div>
              <div className="stat-label">Patents Filed</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value gradient-text">∞</div>
              <div className="stat-label">Possibilities</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
      </div>

      {/* Animated gradient background */}
      <div className="hero-gradient-bg"></div>
    </section>
  )
}

export default Hero
