import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBrain, FaAtom, FaRobot, FaDna, FaNetworkWired, FaEye } from 'react-icons/fa'
import './Research.css'

const Research = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const researchAreas = [
    {
      icon: <FaBrain />,
      title: 'Neural Interface Technology',
      description: 'Developing next-generation brain-computer interfaces with millisecond precision and sub-neuron resolution.',
      color: '#00D9FF',
      achievements: ['99.7% accuracy', '0.3ms latency', '10M neurons mapped'],
    },
    {
      icon: <FaAtom />,
      title: 'Quantum Consciousness',
      description: 'Exploring quantum effects in biological neural networks and their role in consciousness emergence.',
      color: '#B537F2',
      achievements: ['12 qubits sustained', 'Coherence 500ms', '3 papers published'],
    },
    {
      icon: <FaRobot />,
      title: 'Synthetic Awareness',
      description: 'Creating artificial systems that exhibit emergent properties consistent with consciousness.',
      color: '#FF2E97',
      achievements: ['Self-aware agents', 'Qualia simulation', 'Turing+ capable'],
    },
    {
      icon: <FaDna />,
      title: 'Neuroplasticity Enhancement',
      description: 'Developing protocols to enhance brain plasticity and accelerate neural pathway formation.',
      color: '#00FFB3',
      achievements: ['3x faster learning', 'No side effects', 'FDA trials approved'],
    },
    {
      icon: <FaNetworkWired />,
      title: 'Collective Intelligence',
      description: 'Researching neural networking between multiple conscious entities to form meta-consciousness.',
      color: '#FFD700',
      achievements: ['8-way link stable', 'Shared cognition', 'Bandwidth 10GB/s'],
    },
    {
      icon: <FaEye />,
      title: 'Perception Augmentation',
      description: 'Expanding human sensory capabilities beyond natural biological limitations.',
      color: '#FF6B6B',
      achievements: ['Infrared vision', 'Ultrasonic hearing', 'EM field sense'],
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="research" className="research" ref={ref}>
      <div className="research-container">
        <motion.div
          className="research-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Research Areas</div>
          <h2 className="section-title">
            Pioneering <span className="gradient-text">Breakthroughs</span> in
            Consciousness Tech
          </h2>
          <p className="section-description">
            Our research spans multiple cutting-edge disciplines, each pushing the
            boundaries of what's scientifically possible.
          </p>
        </motion.div>

        <motion.div
          className="research-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              className="research-card glass"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 20px 60px ${area.color}40`,
              }}
            >
              <div className="research-card-inner">
                <div
                  className="research-icon"
                  style={{
                    color: area.color,
                    textShadow: `0 0 20px ${area.color}80`,
                  }}
                >
                  {area.icon}
                </div>

                <h3 className="research-title">{area.title}</h3>
                <p className="research-description">{area.description}</p>

                <div className="research-achievements">
                  {area.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className="achievement-badge"
                      style={{ borderColor: area.color }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {achievement}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="research-glow"
                  style={{ background: area.color }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="research-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>Want to collaborate?</h3>
          <p>We're always looking for brilliant minds to join our research efforts.</p>
          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Research
