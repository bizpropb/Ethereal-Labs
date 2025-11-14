import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import './About.css'

const AnimatedSphere = () => {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#00D9FF"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <div className="section-label">About Us</div>
            <h2 className="section-title">
              Redefining the <span className="gradient-text">Future</span> of Mind
            </h2>
            <p className="section-description">
              At Ethereal Labs, we're not just studying consciousness—we're creating
              new paradigms for understanding and interfacing with it. Our
              multidisciplinary team combines cutting-edge neuroscience, quantum
              computing, and artificial intelligence to unlock the mysteries of awareness
              itself.
            </p>

            <div className="about-features">
              <motion.div className="feature-card glass" variants={itemVariants}>
                <div className="feature-icon">🧠</div>
                <h3>Neural Mapping</h3>
                <p>
                  Advanced brain-computer interfaces that map neural pathways with
                  unprecedented precision, enabling direct communication between mind
                  and machine.
                </p>
              </motion.div>

              <motion.div className="feature-card glass" variants={itemVariants}>
                <div className="feature-icon">⚛️</div>
                <h3>Quantum Processing</h3>
                <p>
                  Leveraging quantum phenomena to simulate consciousness patterns and
                  explore the fundamental nature of awareness at the quantum level.
                </p>
              </motion.div>

              <motion.div className="feature-card glass" variants={itemVariants}>
                <div className="feature-icon">🌌</div>
                <h3>AI Consciousness</h3>
                <p>
                  Pioneering research into emergent consciousness in artificial systems,
                  exploring the boundaries between biological and synthetic awareness.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="about-visual" variants={itemVariants}>
            <div className="canvas-container">
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              </Canvas>
            </div>
            <div className="visual-glow"></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mission-statement glass"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="mission-icon">✨</div>
          <h3>Our Mission</h3>
          <p>
            To bridge the gap between human consciousness and digital reality, creating
            technologies that enhance human potential while preserving the essence of
            what makes us uniquely aware, creative, and alive.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
