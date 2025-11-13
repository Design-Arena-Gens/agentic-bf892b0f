'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 87 },
        { name: 'MongoDB', level: 90 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 83 },
        { name: 'Vercel', level: 95 },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="relative py-20 md:py-32 bg-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Tailwind'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
