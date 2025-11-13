'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses, file sharing, and video conferencing capabilities.',
      tech: ['React', 'WebRTC', 'Socket.io', 'OpenAI'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative project management platform with task tracking, team collaboration, and analytics dashboard.',
      tech: ['Vue.js', 'Express', 'MongoDB', 'Redis'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts with scheduling and performance metrics.',
      tech: ['React', 'Python', 'GraphQL', 'AWS'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Healthcare Portal',
      description: 'HIPAA-compliant patient portal with appointment scheduling, telemedicine, and medical records management.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'WebRTC'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Real-time Analytics',
      description: 'Real-time data visualization platform processing millions of events per second with interactive dashboards.',
      tech: ['React', 'Python', 'Kafka', 'TimescaleDB'],
      color: 'from-pink-500 to-rose-500',
    },
  ]

  return (
    <section id="projects" ref={ref} className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6`}>
                  <span className="text-2xl font-bold text-white">{'{ }'}</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 border border-primary/30 rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-medium text-sm"
                  >
                    Live Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 border border-primary rounded-lg text-white font-medium text-sm hover:bg-primary/10 transition-all"
                  >
                    View Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
