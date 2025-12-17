"use client";
import Image from 'next/image';
import { GiAerodynamicHarpoon } from "react-icons/gi";
import { BsLayersHalf } from "react-icons/bs";
import { MdOutlineLoop } from "react-icons/md";
import { LuPlugZap } from "react-icons/lu";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  return (
    <section id="about" className="pt-16 pb-32 md:pt-24 md:pb-32 bg-white">
      <div className="container mx-auto px-7">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text & Features */}
          <motion.div 
            className="flex-1 flex flex-col gap-8 items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-blue-600">◆</span>
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Introducing SpearStreamZ
              </span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About Our Approach
            </motion.h2>

            <motion.p 
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              At <span className="font-semibold text-slate-900">SpearStreamZ</span>, we blend creativity and technology to deliver streamlined, intuitive, and robust workflow solutions. Our process is inspired by the dynamic, interconnected, and flexible nature of modern organizations.
            </motion.p>

            <div className="flex flex-col gap-4 w-full mt-4">
              {[
                { icon: GiAerodynamicHarpoon, text: "Flexible process mapping for unique business needs", delay: 0.5 },
                { icon: BsLayersHalf, text: "Structured architecture for scalable growth", delay: 0.6 },
                { icon: MdOutlineLoop, text: "Agile and resilient to adapt to change", delay: 0.7 },
                { icon: LuPlugZap, text: "Seamless integration with your existing systems", delay: 0.8 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300 border-2 relative overflow-hidden cursor-pointer group bg-white shadow-sm hover:shadow-lg"
                  style={{
                    borderColor: hoveredCard === index ? 'transparent' : '#e2e8f0'
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600"
                    initial={{ x: "-100%" }}
                    animate={{ 
                      x: hoveredCard === index ? "0%" : "-100%"
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                  
                  {/* Icon with background circle */}
                  <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0 group-hover:bg-white/20 transition-all duration-300 ${
                        hoveredCard === index ? "text-white scale-110" : "text-blue-600"
                      }`}>
                    <item.icon 
                      size={28} 
                    />
                  </div>
                  
                  <span className={`text-base font-medium relative z-10 transition-colors duration-300 ${
                    hoveredCard === index ? "text-white" : "text-slate-700"
                  }`}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Animated Image */}
          <motion.div 
            className="flex-1 flex items-center justify-center relative min-h-[420px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Decorative background elements */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl opacity-60"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main Image */}
            <motion.div 
              className="relative z-10 flex items-center justify-center"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Image 
                src="/aboutimg_1.svg" 
                alt="Workflow visualization" 
                className="w-64 md:w-80 drop-shadow-2xl"
                width={320}
                height={320}
              />
            </motion.div>

            {/* Floating accent circles */}
            <motion.div 
              className="absolute top-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-40 blur-xl"
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-40 blur-xl"
              animate={{ 
                y: [0, 20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}