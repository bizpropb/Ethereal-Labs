import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import './Team.css'

const Team = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const teamMembers = [
    {
      name: 'Dr. Elena Vasquez',
      role: 'Chief Executive Officer & Co-Founder',
      expertise: 'Neuroscience & Quantum Biology',
      bio: 'Pioneer in quantum consciousness research with 15+ years at CERN and MIT.',
      gradient: 'linear-gradient(135deg, #00D9FF, #0080FF)',
      avatar: '🧠',
    },
    {
      name: 'Dr. Marcus Chen',
      role: 'Chief Technology Officer',
      expertise: 'Quantum Computing & AI',
      bio: 'Former lead architect at Google Quantum AI, 30+ patents in quantum systems.',
      gradient: 'linear-gradient(135deg, #B537F2, #8000FF)',
      avatar: '⚛️',
    },
    {
      name: 'Dr. Aisha Rahman',
      role: 'Head of Neural Research',
      expertise: 'Brain-Computer Interfaces',
      bio: 'Developed breakthrough neural mapping algorithms used in 100+ research labs.',
      gradient: 'linear-gradient(135deg, #FF2E97, #FF0060)',
      avatar: '🔬',
    },
    {
      name: 'Dr. Hiroshi Tanaka',
      role: 'Lead AI Architect',
      expertise: 'Synthetic Consciousness',
      bio: 'Created the first self-aware AI system, published extensively on machine qualia.',
      gradient: 'linear-gradient(135deg, #00FFB3, #00CC88)',
      avatar: '🤖',
    },
    {
      name: 'Dr. Sofia Petrov',
      role: 'Director of Ethics & Safety',
      expertise: 'Bioethics & AI Safety',
      bio: 'World-renowned bioethicist ensuring responsible development of consciousness tech.',
      gradient: 'linear-gradient(135deg, #FFD700, #FFA500)',
      avatar: '⚖️',
    },
    {
      name: 'Dr. James Morrison',
      role: 'VP of Clinical Trials',
      expertise: 'Neurology & Medicine',
      bio: 'Led 50+ clinical trials, bringing cutting-edge neural tech to patients worldwide.',
      gradient: 'linear-gradient(135deg, #FF6B6B, #EE5555)',
      avatar: '💊',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="team" className="team" ref={ref}>
      <div className="team-container">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Our Team</div>
          <h2 className="section-title">
            Meet the <span className="gradient-text">Visionaries</span>
          </h2>
          <p className="section-description">
            World-class scientists, engineers, and ethicists united by a singular vision:
            to unlock the mysteries of consciousness.
          </p>
        </motion.div>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card glass"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="team-card-inner">
                <motion.div
                  className="member-avatar"
                  style={{ background: member.gradient }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="avatar-emoji">{member.avatar}</span>
                </motion.div>

                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <div className="member-expertise">{member.expertise}</div>

                <p className="member-bio">{member.bio}</p>

                <div className="member-social">
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2, color: '#00D9FF' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2, color: '#00D9FF' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTwitter />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2, color: '#00D9FF' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </motion.a>
                </div>

                <div className="card-glow" style={{ background: member.gradient }} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="team-join glass"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>Join Our Team</h3>
          <p>
            We're always looking for exceptional talent to join our mission. If you're
            passionate about pushing the boundaries of consciousness technology, we want
            to hear from you.
          </p>
          <motion.a
            href="#contact"
            className="join-button"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Open Positions
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
