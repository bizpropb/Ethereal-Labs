import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      value: 'contact@ethereallabs.io',
      link: 'mailto:contact@ethereallabs.io',
      color: '#00D9FF',
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#B537F2',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      value: 'San Francisco, CA',
      link: '#',
      color: '#FF2E97',
    },
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-description">
            Whether you're a researcher, investor, or simply curious about our work,
            we'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="info-card glass"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="info-icon"
                  style={{
                    color: info.color,
                    textShadow: `0 0 20px ${info.color}80`,
                  }}
                >
                  {info.icon}
                </div>
                <div className="info-content">
                  <div className="info-title">{info.title}</div>
                  <div className="info-value">{info.value}</div>
                </div>
                <div className="info-glow" style={{ background: info.color }} />
              </motion.a>
            ))}

            <motion.div
              className="extra-info glass"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3>Research Collaborations</h3>
              <p>
                Interested in collaborating on cutting-edge consciousness research?
                We partner with leading universities and research institutions worldwide.
              </p>
              <div className="collaboration-tags">
                <span className="tag">Academic Partnerships</span>
                <span className="tag">Industry Collaboration</span>
                <span className="tag">Grant Opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. Jane Smith"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@university.edu"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Research Collaboration Inquiry"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your interest in Ethereal Labs..."
                rows="6"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          className="footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="footer-content">
            <div className="footer-logo">
              <span className="gradient-text glow-text">Ethereal Labs</span>
            </div>
            <p className="footer-tagline">
              Pioneering the future of consciousness technology
            </p>
            <div className="footer-links">
              <a href="#research">Research</a>
              <span>•</span>
              <a href="#technology">Technology</a>
              <span>•</span>
              <a href="#team">Team</a>
              <span>•</span>
              <a href="#contact">Contact</a>
            </div>
            <p className="footer-copyright">
              © 2025 Ethereal Labs. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="contact-orb contact-orb-1" />
      <div className="contact-orb contact-orb-2" />
    </section>
  )
}

export default Contact
