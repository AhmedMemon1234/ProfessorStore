"use client";

import { useState } from "react";
import { FaStar, FaClock, FaHeadset, FaCogs, FaDollarSign, FaLightbulb, FaUsers, FaFastForward, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 

const Feature: React.FC<{ feature: any }> = ({ feature }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mb-4 p-4 bg-indigo-600 rounded-full">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </motion.div>
  );
};

const VIPSection: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(6);

  const features = [
    {
      title: "Minecraft Video Editor",
      description: "Professional editing services for Minecraft gameplay videos and trailers.",
      icon: <FaCogs/>
    },
    {
      title: "Minecraft Video Maker",
      description: "Create compelling Minecraft videos to showcase your creativity.",
      icon: <FaLightbulb/>
    },
    {
      title: "Minecraft Art/Thumbnail/Banner",
      description: "Custom designs for thumbnails, banners, and art tailored for Minecraft enthusiasts.",
      icon: <FaUsers/>
    },
    {
      title: "Discord Partnership Manager",
      description: "Efficiently manage partnerships and collaborations for Discord servers.",
      icon: <FaHeadset/>
    },
    {
      title: "Discord Member Inviter",
      description: "Grow your community with effective member invitation strategies.",
      icon: <FaFastForward/>
    },
    {
      title: "Server Voter",
      description: "Increase your server visibility with organized voting campaigns.",
      icon: <FaSmile/>
    },
    {
      title: "Staff/Admin/Manager",
      description: "Professional management and administration services for your server.",
      icon: <FaStar/>
    },
    {
      title: "Social Media Manager",
      description: "Enhance your online presence with dedicated social media management.",
      icon: <FaClock/>
    },
    {
      title: "Tiktok Shorts/Insta Reels",
      description: "Create captivating short videos for TikTok and Instagram to boost engagement.",
      icon: <FaDollarSign/>
    },
    {
      title: "Minecraft Server Advertiser",
      description: "Promote your Minecraft server to reach a wider audience.",
      icon: <FaLightbulb/>
    },
    {
      title: "Discord Server Setup",
      description: "Get your Discord server professionally set up for seamless communication.",
      icon: <FaCogs/>
    }
  ];

  const loadMoreFeatures = () => {
    setVisibleFeatures((prev) => prev + 3); 
  };

  const loadLessFeatures = () => {
    setVisibleFeatures(6); 
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, visibleFeatures).map((feature, index) => (
            <Feature key={index} feature={feature} />
          ))}
        </div>

        <div className="mt-12 text-center">
          {visibleFeatures < features.length ? (
            <button
              onClick={loadMoreFeatures}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all"
            >
              Load More
            </button>
          ) : (
            <button
              onClick={loadLessFeatures}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all"
            >
              Load Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VIPSection;
