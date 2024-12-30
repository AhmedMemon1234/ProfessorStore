"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TopProducts = () => {
  const [isThumbnailHovered, setIsThumbnailHovered] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  return (
    <div className="bg-black py-20">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl sm:-mt-10 md:text-4xl font-semibold">Top Products</h2>
        <p className="text-gray-300 mt-2">Check out our best-selling products</p>
      </div>

      <div className="overflow-hidden relative mb-20">
        <div className="flex">
          <motion.div
            className="flex"
            animate={{
              x: isThumbnailHovered ? 0 : "-100%", 
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, 
              ease: "linear",
            }}
            style={{ whiteSpace: "nowrap" }}
            onHoverStart={() => setIsThumbnailHovered(true)} 
            onHoverEnd={() => setIsThumbnailHovered(false)} 
          >
            {Array(12).fill(null).map((_, index) => (
              <div key={index} className="w-[480px] h-[270px] bg-gray-700 rounded-lg mr-6 inline-block">
                <motion.img
                  src="/thumbnail1.jpg"
                  className="w-full h-full object-cover rounded-lg"
                  alt={`Product ${index + 1}`}
                  whileHover={{ scale: 1.05 }} 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="text-center mb-20">
        <h2 className="text-white text-3xl md:text-4xl font-semibold">Sample Videos</h2>
        <p className="text-gray-300 mt-2">Watch our product demo videos below.</p>
      </div>

      <div className="overflow-hidden">
        <div className="flex">
          <motion.div
            className="flex"
            animate={{
              x: isVideoHovered ? 0 : "-100%",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25, 
              ease: "linear",
            }}
            style={{ whiteSpace: "nowrap" }}
            onHoverStart={() => setIsVideoHovered(true)} 
            onHoverEnd={() => setIsVideoHovered(false)} 
          >
            {Array(12).fill(null).map((_, index) => (
              <div key={index} className="w-[480px] h-[270px] bg-gray-700 rounded-lg mr-6 inline-block">
                <motion.video
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  muted
                  loop
                  whileHover={{ scale: 1.05 }} 
                >
                  <source src="/sample-video1.mp4" type="video/mp4" />
                </motion.video>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
