'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-8 md:p-20 bg-[#F0F4FF] text-slate-800"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-5xl md:text-7xl font-black mb-4 text-slate-900 text-center"
        variants={itemVariants}
      >
        About Us
      </motion.h2>
      <motion.p
        className="text-lg text-slate-600 max-w-3xl text-center mb-12"
        variants={itemVariants}
      >
        We are a team of passionate developers and designers dedicated to creating software that is not only powerful but also intuitive and beautiful. Our mission is to simplify complexity and empower our users.
      </motion.p>
    </motion.section>
  );
}

