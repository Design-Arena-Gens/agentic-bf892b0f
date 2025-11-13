'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                <div className="text-9xl gradient-text font-bold">&lt;/&gt;</div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              Passionate <span className="gradient-text">Developer</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a fullstack developer with a passion for creating beautiful, functional, and user-centered digital experiences. With expertise in both frontend and backend technologies, I bring ideas to life through clean code and innovative solutions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in modern web technologies including React, Next.js, Node.js, and various databases. My goal is to build scalable applications that solve real-world problems while maintaining optimal performance and user experience.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '30+', label: 'Happy Clients' },
                { number: '15+', label: 'Technologies' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-dark/50 border border-primary/20"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
