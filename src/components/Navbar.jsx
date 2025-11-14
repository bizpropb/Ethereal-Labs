import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBrain, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Research', href: '#research' },
    { label: 'Technology', href: '#technology' },
    { label: 'Data', href: '#data' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Team', href: '#team' },
  ]

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.a
          href="#hero"
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaBrain className="logo-icon" />
          <span className="logo-text gradient-text">Ethereal Labs</span>
        </motion.a>

        <div className="navbar-links desktop">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="navbar-link"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: '#00D9FF' }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="navbar-cta"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.a>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            className="mobile-menu-link"
            onClick={() => setMobileMenuOpen(false)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
            transition={{ delay: index * 0.05 }}
          >
            {item.label}
          </motion.a>
        ))}
        <motion.a
          href="#contact"
          className="mobile-menu-cta"
          onClick={() => setMobileMenuOpen(false)}
        >
          Join Us
        </motion.a>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
