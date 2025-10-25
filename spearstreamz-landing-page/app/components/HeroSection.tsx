'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white text-slate-800 pt-20">
      <motion.div
        className="text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-black mb-4 text-slate-900"
          variants={itemVariants}
        >
          Revolutionize Your Workflow
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-slate-600 mb-8"
          variants={itemVariants}
        >
          Discover the next generation of software solutions designed to propel your business forward.
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

