import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-sky-400 mb-6"
        >
          About This Todo App
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          This Todo List application helps you organize your daily tasks,
          improve productivity, and stay focused on what really matters.
        </motion.p>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12"
        >

          {[
            {
              title: '📝 Add Tasks',
              text: 'Easily add new tasks and manage your daily to-do list in one place.',
            },
            {
              title: '🗑️ Delete Tasks',
              text: 'Remove completed or unnecessary tasks with a single click.',
            },
            {
              title: '⚡ Fast & Simple',
              text: 'Built with React for a smooth, fast, and modern user experience.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 cursor-default hover:shadow-xl hover:shadow-sky-500/10"
            >
              <h3 className="text-sky-400 text-lg font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}

        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-slate-500 text-sm"
        >
          This project was created to practice React fundamentals such as
          components, state management, and routing.
        </motion.p>

      </div>
    </section>
  )
}

export default About
