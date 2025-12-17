"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="pt-16 pb-32 md:pt-24 md:pb-32 bg-white overflow-x-clip relative"
      id="home"
    >
      {/* Subtle background gradient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto md:mt-15 px-5 relative z-10">
        <div className="md:flex items-center justify-between md:h-[648px] gap-16">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center md:w-1/2 lg:w-[700px]">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 w-fit mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Workflow Automation Platform
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Business Operations Workflow Automation and Tracking
            </motion.h1>

            {/* Description Paragraphs */}
            <motion.div
              className="space-y-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Create software products that facilitate smooth tracking of workflows in various departments within your organization and seamlessly integrate with existing systems in use.
              </p>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">SpearStreamZ</span> is committed to streamlining departmental operational maintenance by implementing a configurable, rules-driven workflow. This approach empowers management with visual tools to monitor each step of internal business processes across various departments.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div 
            className="hidden md:flex md:w-1/2 justify-center items-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative background card */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl opacity-60 -z-10"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main Image */}
            <motion.div
              className="relative z-10"
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image 
                src="/hero1.svg" 
                alt="Workflow Automation Illustration" 
                className="w-[400px] lg:w-[500px] drop-shadow-2xl"
                width={500}
                height={500}
                priority
              />
            </motion.div>

            {/* Floating accent elements */}
            <motion.div 
              className="absolute top-10 right-0 w-24 h-24 bg-blue-200 rounded-full opacity-30 blur-2xl"
              animate={{ 
                y: [0, -25, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 left-0 w-32 h-32 bg-indigo-200 rounded-full opacity-30 blur-2xl"
              animate={{ 
                y: [0, 25, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Decorative dots pattern */}
            <div className="absolute -bottom-4 -right-4 grid grid-cols-4 gap-2 opacity-20">
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-blue-600 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}