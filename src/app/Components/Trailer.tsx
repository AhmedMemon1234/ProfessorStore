"use client";

import { motion } from 'framer-motion';

export default function TrailerSection() {
  return (
    <section className="py-10 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Popular Works</h2>

        {/* Trailers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full">
              <video
                controls
                className="w-full h-[350px] object-cover rounded-lg"
              >
                <source src="minecraft_trailer1.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-center p-4">
                <h3 className="text-xl font-semibold">Minecraft Trailer 1</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full">
              <video
                controls
                className="w-full h-[350px] object-cover rounded-lg"
              >
                <source src="minecraft_trailer2.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-center p-4">
                <h3 className="text-xl font-semibold">Minecraft Trailer 2</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Instagram Reels and YouTube Shorts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full">
              <video
                controls
                className="w-full h-[400px] object-cover rounded-lg"
              >
                <source src="instagram_reel1.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full">
              <video
                controls
                className="w-full h-[400px] object-cover rounded-lg"
              >
                <source src="instagram_reel2.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full">
              <video
                controls
                className="w-full h-[400px] object-cover rounded-lg"
              >
                <source src="instagram_reel3.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full">
              <video
                controls
                className="w-full h-[400px] object-cover rounded-lg"
              >
                <source src="youtube_short1.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full">
              <video
                controls
                className="w-full h-[400px] object-cover rounded-lg"
              >
                <source src="youtube_short2.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full">
              <video
                controls
                className="w-full h-[400px] object-cover rounded-lg"
              >
                <source src="youtube_short3.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
