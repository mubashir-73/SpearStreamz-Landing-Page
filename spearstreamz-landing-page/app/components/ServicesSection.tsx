'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="services"
      className="min-h-screen flex flex-col items-center justify-center p-8 md:p-20 bg-white text-slate-800"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="w-full max-w-2xl text-center mb-12"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <h2 className="text-5xl md:text-7xl font-black mb-4 text-slate-900">Our Services</h2>
        <p className="text-lg text-slate-600">
          We offer a wide range of services to help you achieve your goals.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {['Web Development', 'Mobile Apps', 'UI/UX Design'].map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#F0F4FF] p-8 rounded-lg shadow-lg text-center"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mt-4">{service}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

