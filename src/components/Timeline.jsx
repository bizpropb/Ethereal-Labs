import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaCheck } from 'react-icons/fa'
import './Timeline.css'

gsap.registerPlugin(ScrollTrigger)

const Timeline = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const timelineRef = useRef(null)
  const canvasRef = useRef(null)
  const animFrameRef = useRef(null)

  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Ethereal Labs founded by leading neuroscientists and quantum physicists.',
      achievement: 'Secured $50M Series A funding',
      color: '#c4b5fd',
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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let phase = 0

    const resize = () => {
      const section = canvas.parentElement
      canvas.width = section.offsetWidth
      canvas.height = section.offsetHeight
    }
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(canvas.parentElement)

    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const amplitude = 60
      const wavelength = 220
      const k = (2 * Math.PI) / wavelength

      // Rungs behind both strands
      for (let y = 0; y < height; y += 22) {
        const sv = Math.sin(k * y + phase)
        ctx.beginPath()
        ctx.moveTo(cx + amplitude * sv, y)
        ctx.lineTo(cx - amplitude * sv, y)
        ctx.strokeStyle = `rgba(196, 181, 253, ${0.05 + 0.05 * Math.abs(sv)})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Strands with correct Z-ordering: back strand first, front strand on top
      for (let y = 0; y < height - 3; y += 3) {
        const ky = k * y + phase
        const sv  = Math.sin(ky)
        const sv2 = Math.sin(k * (y + 3) + phase)

        const drawS1 = () => {
          const depth = (sv + 1) / 2
          ctx.beginPath()
          ctx.moveTo(cx + amplitude * sv,  y)
          ctx.lineTo(cx + amplitude * sv2, y + 3)
          ctx.strokeStyle = `rgba(196, 181, 253, ${0.12 + 0.35 * depth})`
          ctx.lineWidth = 0.5 + 2.5 * depth
          ctx.stroke()
        }

        const drawS2 = () => {
          const depth = (-sv + 1) / 2
          ctx.beginPath()
          ctx.moveTo(cx - amplitude * sv,  y)
          ctx.lineTo(cx - amplitude * sv2, y + 3)
          ctx.strokeStyle = `rgba(181, 55, 242, ${0.12 + 0.35 * depth})`
          ctx.lineWidth = 0.5 + 2.5 * depth
          ctx.stroke()
        }

        // sv > 0 → S1 is in front; sv < 0 → S2 is in front
        if (sv >= 0) { drawS2(); drawS1() }
        else          { drawS1(); drawS2() }
      }

      phase += 0.006
      animFrameRef.current = requestAnimationFrame(draw)
    }

    animFrameRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animFrameRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <section id="timeline" className="timeline-section" ref={ref}>
      <canvas ref={canvasRef} className="helix-canvas" />
      <div className="timeline-container">
        <motion.div
          className="timeline-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
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
                    <FaCheck />
                  </span>
                  {milestone.achievement}
                </div>
              </div>

              <div
                className="timeline-marker"
                style={{
                  borderColor: milestone.color,
                  boxShadow: `0 0 12px ${milestone.color}60`,
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
