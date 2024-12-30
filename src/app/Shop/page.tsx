"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

const data = [
  { id: 1, type: "thumbnail", src: "thumbnail1.jpg", title: "Thumbnail 1" },
  { id: 2, type: "thumbnail", src: "thumbnail2.jpg", title: "Thumbnail 2" },
  { id: 3, type: "thumbnail", src: "thumbnail3.jpg", title: "Thumbnail 3" },
  { id: 4, type: "thumbnail", src: "thumbnail4.jpg", title: "Thumbnail 4" },
  { id: 5, type: "trailer", src: "trailer1.mp4", title: "Trailer 1" },
  { id: 6, type: "trailer", src: "trailer2.mp4", title: "Trailer 2" },
  { id: 7, type: "reel", src: "reel1.mp4", title: "Instagram Reel 1" },
  { id: 8, type: "reel", src: "reel2.mp4", title: "Instagram Reel 2" },
  { id: 9, type: "reel", src: "reel3.mp4", title: "Instagram Reel 3" },
  { id: 10, type: "reel", src: "reel4.mp4", title: "Instagram Reel 4" },
  { id: 11, type: "short", src: "short1.mp4", title: "YouTube Short 1" },
  { id: 12, type: "short", src: "short2.mp4", title: "YouTube Short 2" },
  { id: 13, type: "short", src: "short3.mp4", title: "YouTube Short 3" },
  { id: 14, type: "short", src: "short4.mp4", title: "YouTube Short 4" },
];

export default function Shop() {
  const [filter, setFilter] = useState("all");

  const filteredData = filter === "all" ? data : data.filter((item) => item.type === filter);

  return (
    <section className="py-10 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Shop</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            className="text-white px-4 py-2 bg-gray-800 hover:bg-gray-600 transition rounded-lg"
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className="text-white px-4 py-2 bg-gray-800 hover:bg-gray-600 transition rounded-lg"
            onClick={() => setFilter("thumbnail")}
          >
            Thumbnails
          </button>
          <button
            className="text-white px-4 py-2 bg-gray-800 hover:bg-gray-600 transition rounded-lg"
            onClick={() => setFilter("trailer")}
          >
            Trailers
          </button>
          <button
            className="text-white px-4 py-2 bg-gray-800 hover:bg-gray-600 transition rounded-lg"
            onClick={() => setFilter("reel")}
          >
            Instagram Reels
          </button>
          <button
            className="text-white px-4 py-2 bg-gray-800 hover:bg-gray-600 transition rounded-lg"
            onClick={() => setFilter("short")}
          >
            YouTube Shorts
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              className="relative group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full">
                {item.type === "thumbnail" && (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                )}
                {(item.type === "trailer" || item.type === "short") && (
                  <video
                    controls
                    className={`w-full ${
                      item.type === "trailer" ? "h-[360px]" : "h-[500px]"
                    } object-cover rounded-lg`}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
                {item.type === "reel" && (
                  <video
                    controls
                    className="w-full h-[500px] object-cover rounded-lg"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-center p-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
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
