import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMicrochip, FaServer, FaCode, FaShieldAlt } from 'react-icons/fa'
import './Technology.css'

const Technology = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeTab, setActiveTab] = useState(0)

  const technologies = [
    {
      icon: <FaMicrochip />,
      title: 'Neural Processors',
      category: 'Hardware',
      description: 'Custom-designed quantum neural processing units capable of simulating 10 million neurons simultaneously.',
      specs: [
        { label: 'Processing Power', value: '10 PetaFLOPS' },
        { label: 'Neural Nodes', value: '10M+ simultaneous' },
        { label: 'Latency', value: '<0.3ms' },
        { label: 'Energy Efficiency', value: '0.1W per 1000 nodes' },
      ],
      color: '#00D9FF',
    },
    {
      icon: <FaServer />,
      title: 'Quantum Cloud',
      category: 'Infrastructure',
      description: 'Distributed quantum computing infrastructure for massive parallel consciousness simulation.',
      specs: [
        { label: 'Qubits Available', value: '1000+' },
        { label: 'Coherence Time', value: '500ms' },
        { label: 'Availability', value: '99.99%' },
        { label: 'Global Nodes', value: '47 locations' },
      ],
      color: '#B537F2',
    },
    {
      icon: <FaCode />,
      title: 'Consciousness API',
      category: 'Software',
      description: 'Revolutionary API for interfacing with synthetic awareness systems and neural networks.',
      specs: [
        { label: 'API Calls/sec', value: '1M+' },
        { label: 'Response Time', value: '<10ms' },
        { label: 'Accuracy', value: '99.7%' },
        { label: 'Protocols', value: 'REST, GraphQL, WebSocket' },
      ],
      color: '#FF2E97',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Neural Security',
      category: 'Security',
      description: 'Military-grade encryption and protection for neural data and consciousness patterns.',
      specs: [
        { label: 'Encryption', value: 'Quantum-resistant' },
        { label: 'Compliance', value: 'ISO 27001, HIPAA' },
        { label: 'Penetration Tests', value: 'Weekly' },
        { label: 'Zero Breaches', value: 'Since inception' },
      ],
      color: '#00FFB3',
    },
  ]

  return (
    <section id="technology" className="technology" ref={ref}>
      <div className="technology-container">
        <motion.div
          className="technology-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Technology Stack</div>
          <h2 className="section-title">
            Powered by <span className="gradient-text">Next-Gen</span> Infrastructure
          </h2>
          <p className="section-description">
            Our proprietary technology stack combines quantum computing, advanced AI, and
            custom hardware to achieve the impossible.
          </p>
        </motion.div>

        <div className="technology-tabs">
          {technologies.map((tech, index) => (
            <motion.button
              key={index}
              className={`tech-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="tech-tab-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <div className="tech-tab-info">
                <div className="tech-tab-title">{tech.title}</div>
                <div className="tech-tab-category">{tech.category}</div>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="technology-content glass"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="tech-content-header">
              <div
                className="tech-content-icon"
                style={{
                  color: technologies[activeTab].color,
                  textShadow: `0 0 30px ${technologies[activeTab].color}80`,
                }}
              >
                {technologies[activeTab].icon}
              </div>
              <div>
                <h3 className="tech-content-title">{technologies[activeTab].title}</h3>
                <p className="tech-content-category">{technologies[activeTab].category}</p>
              </div>
            </div>

            <p className="tech-content-description">
              {technologies[activeTab].description}
            </p>

            <div className="tech-specs-grid">
              {technologies[activeTab].specs.map((spec, index) => (
                <motion.div
                  key={index}
                  className="tech-spec"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="spec-label">{spec.label}</div>
                  <div
                    className="spec-value"
                    style={{ color: technologies[activeTab].color }}
                  >
                    {spec.value}
                  </div>
                  <motion.div
                    className="spec-bar"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <div
                      className="spec-bar-fill"
                      style={{ background: technologies[activeTab].color }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="tech-glow"
              style={{ background: technologies[activeTab].color }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Technology
