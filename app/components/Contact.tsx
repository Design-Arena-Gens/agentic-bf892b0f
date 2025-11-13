'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 bg-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: '📧', label: 'Email', value: 'hello@developer.com' },
                  { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
                  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/developer' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-dark/50 border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { name: 'GitHub', icon: 'GH' },
                { name: 'LinkedIn', icon: 'LI' },
                { name: 'Twitter', icon: 'TW' },
                { name: 'Dribbble', icon: 'DR' },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center hover:border-primary/50 transition-all"
                >
                  <span className="text-primary font-bold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-xl focus:border-primary focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-xl focus:border-primary focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-xl focus:border-primary focus:outline-none transition-all"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-xl focus:border-primary focus:outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
