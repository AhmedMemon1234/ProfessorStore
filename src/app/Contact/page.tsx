"use client"
import React from 'react';
import { FaShippingFast, FaClock, FaHeadphonesAlt, FaDiscord } from 'react-icons/fa'; // Importing custom icons
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-start py-12 px-6">
      <div className="max-w-4xl text-center">
        <motion.h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h1>
        <p className="text-xl mb-6">I'd love to hear from you! Whether you're interested in my services or just want to chat, feel free to reach out:</p>
        
        <div className="space-y-6">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-2xl font-semibold">Discord:</p>
            <a href="https://discord.com/users/your-discord-id" className="text-blue-300 hover:underline text-xl">callmeprofessor_</a>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-2xl font-semibold">Email:</p>
            <a href="mailto:youremail@example.com" className="text-blue-300 hover:underline text-xl">professoryt81@gmail.com</a>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 flex flex-wrap justify-center space-x-6 space-y-12 sm:space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-col items-center text-lg">
            <FaShippingFast className="text-4xl mb-2 text-yellow-500" />
            <p className="text-xl font-semibold">Fast Delivery</p>
            <p className="text-sm opacity-70">Get your projects done in no time</p>
          </div>
          
          <div className="flex flex-col items-center text-lg">
            <FaClock className="text-4xl mb-2 text-blue-500" />
            <p className="text-xl font-semibold">24/7 Support</p>
            <p className="text-sm opacity-70">Always here to assist you</p>
          </div>
          
          <div className="flex flex-col items-center text-lg">
            <FaHeadphonesAlt className="text-4xl mb-2 text-green-500" />
            <p className="text-xl font-semibold">Customer Care</p>
            <p className="text-sm opacity-70">Providing top-notch service</p>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-pink-500 to-purple-500 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Why Choose Me?</h2>
          <p className="text-lg sm:text-xl opacity-80 mb-4">I believe in delivering quality work on time, every time. Here's why working with me will be a great decision:</p>
          <ul className="list-disc list-inside text-lg">
            <li>Attention to detail in every project</li>
            <li>Expert in video editing, thumbnail designing, and Instagram reels</li>
            <li>Proven track record of satisfied clients</li>
            <li>Affordable pricing without compromising on quality</li>
          </ul>
        </motion.div>

        <motion.div
          className="mt-20 max-w-4xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">What My Clients Say</h2>
          <div className="space-y-6">
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <p className="text-xl mb-4">"Professor's video editing skills are amazing! He delivered exactly what I needed in record time."</p>
              <p className="text-lg opacity-70">- James Bond</p>
            </div>

            <div className="bg-black p-6 rounded-lg shadow-lg">
              <p className="text-xl mb-4">"The thumbnails Professor designed for my YouTube channel gave it a huge boost in engagement!"</p>
              <p className="text-lg opacity-70">- Micheal Adveb</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-lg">
          <p className="opacity-70">Feel free to message me anytime. Looking forward to connecting!</p>
        </div>
      </div>

      <a
        href="https://discord.com/channels/@me/1293223501553205280"
        target="_blank"
        className="fixed bottom-6 right-6 bg-blue-600 p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
        aria-label="Chat with me on Discord"
      >
        <FaDiscord className="text-white text-3xl" />
      </a>
    </div>
  );
};

export default Contact;
