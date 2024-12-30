"use client"
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5, 
  });

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[600px] text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="/herobg.webp" alt="Background Image" className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <motion.div
        ref={ref} 
        className="relative z-10 flex flex-col justify-center items-center h-full text-center"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to My Professor Store</h1>
        <p className="text-lg text-gray-300 mb-8">Discover professional video editing and thumbnail work.</p>
        <a
          href="/Shop"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </a>
      </motion.div>

      <a
        href="https://discord.com/channels/@me/1293223501553205280"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-[90%] right-4 transform -translate-y-1/2 bg-indigo-600 p-4 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 z-10"
      >
        <FaDiscord className="text-white text-3xl" />
      </a>
    </div>
  );
};

export default HeroSection;
