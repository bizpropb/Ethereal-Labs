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
    { label: 'Technology', href: '#technology' },
    { label: 'Data', href: '#data' },
    { label: 'Timeline', href: '#timeline' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <motion.a
          href="#hero"
          className="navbar-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.0 }}
        >
          <FaBrain className="logo-icon" />
          <span className="logo-text bruno-ace-sc-regular">Ethereal</span>
        </motion.a>

        <div className="navbar-links desktop">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="navbar-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.3 + index * 0.3 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="navbar-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.3 + navItems.length * 0.3 }}
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
    </nav>
  )
}

export default Navbar
