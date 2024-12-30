'use client'
import { motion } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa'; 

export default function About() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-400">About Professor</h2>
          <p className="mt-4 text-lg text-gray-400">
            A seasoned expert in Video Editing, Thumbnail Design, and Instagram Reels production with a passion for delivering visually stunning results.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-blue-400">Hello, I'm Professor</h3>
            <p className="mt-4 text-lg text-gray-300">
              I am a seasoned freelancer with a deep passion for crafting visually compelling content. My expertise lies in video editing, creating custom thumbnails, and producing Instagram Reels that capture attention and drive engagement.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              I specialize in customizing content to reflect your brand’s unique voice, ensuring that your visuals not only look amazing but also resonate with your target audience.
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/3 h-[350px] bg-cover bg-center rounded-lg shadow-xl"
            style={{ backgroundImage: 'url(/about.webp)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center text-blue-400 mb-8">Skills & Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h4 className="text-xl font-bold text-blue-400">Video Editing</h4>
              <p className="mt-2 text-gray-300">
                Expert in high-quality video editing using Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h4 className="text-xl font-bold text-blue-400">Thumbnail Design</h4>
              <p className="mt-2 text-gray-300">
                Specialize in creating attention-grabbing thumbnails for YouTube and other platforms using Photoshop and Illustrator.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h4 className="text-xl font-bold text-blue-400">Instagram Reels</h4>
              <p className="mt-2 text-gray-300">
                I create engaging Instagram Reels that boost visibility and drive user interaction.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center text-blue-400 mb-8">My Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h4 className="text-2xl font-semibold text-blue-400">Custom Video Editing</h4>
              <p className="mt-4 text-lg text-gray-300">
                Tailored video edits that align with your unique style and brand message, perfect for any platform.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h4 className="text-2xl font-semibold text-blue-400">Thumbnail Design</h4>
              <p className="mt-4 text-lg text-gray-300">
                Professionally designed thumbnails that grab attention and boost click-through rates.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h4 className="text-2xl font-semibold text-blue-400">Instagram Reels Creation</h4>
              <p className="mt-4 text-lg text-gray-300">
                Engaging and creative Instagram Reels designed to increase your brand’s visibility and audience interaction.
              </p>
            </motion.div>
          </div>
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
    </section>
  );
}
