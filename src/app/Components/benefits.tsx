"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 

type Service = {
  key: string;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    key: "video-editing",
    title: "Professional Video Editing",
    description:
      "Enhance your content with our professional video editing services. Perfect for YouTube, marketing, and more!",
    image: "/video.jpg",
  },
  {
    key: "thumbnail-editing",
    title: "Creative Thumbnail Editing",
    description:
      "Attract more views with custom, eye-catching thumbnails designed to make your content stand out!",
    image: "/thumbnail.jpg",
  },
  {
    key: "instagram-reels",
    title: "Instagram Reels Editing",
    description:
      "Get engaging Instagram Reels tailored to capture your audience's attention and grow your reach.",
    image: "/insta.jpg",
  },
];

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: false, 
    threshold: 0.5,
  });

  return (
    <section
      ref={servicesRef} 
      className="bg-black text-white py-12"
    >
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: servicesInView ? 1 : 0 }} 
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Our Services</h2>
          <p className="text-gray-400 text-center mb-8">
            Discover the range of services we offer to elevate your digital presence.
          </p>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/3 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
              {services.map((service) => (
                <button
                  key={service.key}
                  onClick={() => setActiveService(service)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap lg:whitespace-normal text-center lg:text-left w-full lg:w-auto ${{
                    'bg-indigo-600 text-white': activeService.key === service.key,
                    'bg-gray-800 hover:bg-gray-700': activeService.key !== service.key,
                  }}`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <div className="lg:w-2/3 flex flex-col items-center text-center lg:text-left">
              <motion.img
                src={activeService.image}
                alt={activeService.title}
                className="rounded-lg w-full h-60 sm:h-72 lg:h-80 object-cover mb-6 shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: servicesInView ? 1 : 0 }} // Fade in when in view
                transition={{ duration: 1 }}
              />
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                {activeService.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {activeService.description}
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="/Shop"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-all"
                >
                  Explore
                </a>
                <a
                  href="/Contact"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-full transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
