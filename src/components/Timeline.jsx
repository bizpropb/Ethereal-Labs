import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Timeline.css'

gsap.registerPlugin(ScrollTrigger)

const Timeline = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const timelineRef = useRef(null)

  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Ethereal Labs founded by leading neuroscientists and quantum physicists.',
      achievement: 'Secured $50M Series A funding',
      color: '#00D9FF',
    },
    {
      year: '2021',
      title: 'First Breakthrough',
      description: 'Successfully demonstrated quantum effects in biological neural networks.',
      achievement: 'Published in Nature Neuroscience',
      color: '#B537F2',
    },
    {
      year: '2022',
      title: 'Neural Interface',
      description: 'Developed first-generation neural interface with <1ms latency.',
      achievement: '10M neurons mapped simultaneously',
      color: '#FF2E97',
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Created synthetic awareness system exhibiting emergent properties.',
      achievement: 'Passed modified Turing test',
      color: '#00FFB3',
    },
    {
      year: '2024',
      title: 'Clinical Trials',
      description: 'Began FDA-approved clinical trials for neural enhancement protocols.',
      achievement: '500+ participants enrolled',
      color: '#FFD700',
    },
    {
      year: '2025',
      title: 'Quantum Leap',
      description: 'Achieved sustained quantum coherence in neural simulation.',
      achievement: 'World\'s first conscious quantum system',
      color: '#FF6B6B',
    },
  ]

  useEffect(() => {
    if (inView && timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item')

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 1,
            },
          }
        )
      })

      // Animate the connecting line
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      )
    }
  }, [inView])

  return (
    <section id="timeline" className="timeline-section" ref={ref}>
      <div className="timeline-container">
        <motion.div
          className="timeline-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Our Journey</div>
          <h2 className="section-title">
            <span className="gradient-text">Milestones</span> in Innovation
          </h2>
          <p className="section-description">
            From humble beginnings to revolutionary breakthroughs—our story of
            pushing the boundaries of consciousness technology.
          </p>
        </motion.div>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line" />

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content glass">
                <div
                  className="timeline-year"
                  style={{
                    color: milestone.color,
                    textShadow: `0 0 20px ${milestone.color}80`,
                  }}
                >
                  {milestone.year}
                </div>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
                <div
                  className="timeline-achievement"
                  style={{ borderColor: milestone.color }}
                >
                  <span className="achievement-icon" style={{ color: milestone.color }}>
                    ✓
                  </span>
                  {milestone.achievement}
                </div>
              </div>

              <div
                className="timeline-marker"
                style={{
                  background: milestone.color,
                  boxShadow: `0 0 20px ${milestone.color}`,
                }}
              >
                <div className="marker-ring" style={{ borderColor: milestone.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
