'use client';

import { motion } from 'framer-motion';

export default function VisionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="vision"
      className="min-h-screen flex items-center justify-center p-8 md:p-20 bg-[#F0F4FF] text-slate-800"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={textVariants}>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-slate-900">Our Vision</h2>
          <p className="text-lg text-slate-600 mb-4">
            Our vision is to create a future where technology is a seamless extension of human potential, empowering individuals and organizations to achieve greatness.
          </p>
        </motion.div>
        <motion.div className="flex justify-center" variants={imageVariants}>
          <div className="w-full h-80 bg-white rounded-lg shadow-xl" />
        </motion.div>
      </div>
    </motion.section>
  );
}

