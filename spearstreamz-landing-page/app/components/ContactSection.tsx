"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    requirements: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", profession: "", requirements: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center p-8 md:p-20 bg-[#F0F4FF] text-slate-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.div
        className="w-full max-w-2xl text-center mb-12"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <h1 className="text-5xl md:text-7xl font-black mb-4 text-slate-900">
          Learn More About Our Software
        </h1>
        <p className="text-lg text-slate-600">
          Fill out the form below, and one of our experts will get in touch with
          you shortly.
        </p>
      </motion.div>
      <motion.div
        className="w-full max-w-lg"
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.2 },
          },
        }}
      >
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="shadow-sm appearance-none border border-slate-300 rounded w-full py-3 px-4 bg-[#EAEEFE] text-slate-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
              id="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow-sm appearance-none border border-slate-300 rounded w-full py-3 px-4 bg-[#EAEEFE] text-slate-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="profession"
            >
              Profession
            </label>
            <input
              className="shadow-sm appearance-none border border-slate-300 rounded w-full py-3 px-4 bg-[#EAEEFE] text-slate-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
              id="profession"
              type="text"
              placeholder="e.g., Software Engineer, Designer"
              value={formData.profession}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="requirements"
            >
              What are you planning to use the software for?
            </label>
            <textarea
              id="requirements"
              rows={6}
              className="shadow-sm appearance-none border border-slate-300 rounded w-full py-3 px-4 bg-[#EAEEFE] text-slate-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-y"
              placeholder="Describe your use case, expected scale, integrations, and any other details..."
              value={formData.requirements}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <motion.button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors duration-300 disabled:bg-indigo-400"
              type="submit"
              whileHover={{ scale: status === "sending" ? 1 : 1.05 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.95 }}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Request Information"}
            </motion.button>
          </div>
           {status === "success" && (
            <p className="text-center text-green-600 mt-4">
              Thank you! Your message has been sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-600 mt-4">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </motion.div>
    </motion.section>
  );
}
