import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import './Data.css'

const Data = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const neuralActivityData = [
    { time: '0s', activity: 45, prediction: 40 },
    { time: '2s', activity: 52, prediction: 50 },
    { time: '4s', activity: 61, prediction: 58 },
    { time: '6s', activity: 75, prediction: 72 },
    { time: '8s', activity: 88, prediction: 85 },
    { time: '10s', activity: 95, prediction: 92 },
    { time: '12s', activity: 92, prediction: 90 },
    { time: '14s', activity: 98, prediction: 96 },
  ]

  const researchProgressData = [
    { month: 'Jan', papers: 15, patents: 0, trials: 2 },
    { month: 'Feb', papers: 19, patents: 2, trials: 6 },
    { month: 'Mar', papers: 23, patents: 4, trials: 13 },
    { month: 'Apr', papers: 27, patents: 9, trials: 20 },
    { month: 'May', papers: 31, patents: 14, trials: 24 },
    { month: 'Jun', papers: 35, patents: 17, trials: 30 },
  ]

  const capabilitiesData = [
    { capability: 'Neural Mapping', value: 98 },
    { capability: 'Quantum Processing', value: 75 },
    { capability: 'AI Integration', value: 96 },
    { capability: 'Data Security', value: 78 },
    { capability: 'Response Time', value: 92 },
    { capability: 'Accuracy', value: 78 },
  ]

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip glass">
          <p className="tooltip-label">{payload[0].payload.time || payload[0].payload.month}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <section id="data" className="data" ref={ref}>
      <div className="data-container">
        <motion.div
          className="data-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Realtime</span> Research Analytics
          </h2>
          <p className="section-description">
            Visualizing our progress and breakthroughs across all research domains.
          </p>
        </motion.div>

        <div className="data-grid">
          <motion.div
            className="data-card glass"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="data-card-title">Neural Activity Monitoring</h3>
            <p className="data-card-description">
              Real-time neural activity tracking with AI-powered prediction models
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={neuralActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="time" stroke="#8B8B9F" />
                <YAxis stroke="#8B8B9F" />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="activity"
                  stroke="#c4b5fd"
                  strokeWidth={3}
                  dot={{ fill: '#c4b5fd', r: 5 }}
                  name="Actual Activity"
                />
                <Line
                  type="monotone"
                  dataKey="prediction"
                  stroke="#B537F2"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#B537F2', r: 3 }}
                  name="AI Prediction"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            className="data-card glass"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="data-card-title">System Capabilities</h3>
            <p className="data-card-description">
              Performance metrics across key technological domains
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={capabilitiesData}>
                <PolarGrid stroke="rgba(255,255,255,0.2)" />
                <PolarAngleAxis dataKey="capability" stroke="#8B8B9F" />
                <PolarRadiusAxis stroke="#8B8B9F" />
                <Radar
                  name="Performance"
                  dataKey="value"
                  stroke="#FF2E97"
                  fill="#FF2E97"
                  fillOpacity={0.08}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            className="data-card glass full-width"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="data-card-title">Research Output Trends</h3>
            <p className="data-card-description">
              Monthly progress across papers, patents, and clinical trials
            </p>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={researchProgressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="#8B8B9F" />
                <YAxis stroke="#8B8B9F" />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="papers"
                  stackId="1"
                  stroke="#c4b5fd"
                  fill="#c4b5fd"
                  fillOpacity={0.08}
                  name="Papers"
                />
                <Area
                  type="monotone"
                  dataKey="patents"
                  stackId="1"
                  stroke="#B537F2"
                  fill="#B537F2"
                  fillOpacity={0.08}
                  name="Patents"
                />
                <Area
                  type="monotone"
                  dataKey="trials"
                  stackId="1"
                  stroke="#FF2E97"
                  fill="#FF2E97"
                  fillOpacity={0.08}
                  name="Trials"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div
          className="data-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="data-stat-card glass">
            <div className="stat-number gradient-text">127</div>
            <div className="stat-description">Research Papers Published</div>
          </div>
          <div className="data-stat-card glass">
            <div className="stat-number gradient-text">43</div>
            <div className="stat-description">Patents Filed Worldwide</div>
          </div>
          <div className="data-stat-card glass">
            <div className="stat-number gradient-text">18</div>
            <div className="stat-description">Active Clinical Trials</div>
          </div>
          <div className="data-stat-card glass">
            <div className="stat-number gradient-text">99.7%</div>
            <div className="stat-description">Neural Mapping Accuracy</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Data
