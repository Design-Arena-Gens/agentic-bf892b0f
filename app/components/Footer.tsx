'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold gradient-text mb-4"
            >
              &lt;Dev/&gt;
            </motion.div>
            <p className="text-gray-400">
              Crafting elegant digital solutions with modern technologies.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="space-y-2">
              {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="block text-gray-400 hover:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center text-gray-400">
          <p>&copy; 2024 Fullstack Developer Portfolio. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
