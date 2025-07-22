import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => (
  <section className="relative h-[72vh] md:h-[92vh] flex items-center justify-center overflow-hidden">
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="/assets/bg-video.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster=""
    />
    <div className="absolute inset-0 bg-black/50 z-10" />
    <div className="relative z-20 text-center max-w-3xl mx-auto flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.1, type: "spring" }}
        className="text-5xl md:text-7xl font-bold text-autumn-gold drop-shadow-lg mb-4"
      >
        Welcome to <span className="text-autumn-dark">Autumn Realty Group</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="text-xl md:text-2xl text-white mb-8"
      >
        Your premier destination for luxury properties and expert real estate guidance.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        href="#listings"
        className="inline-block px-8 py-3 bg-autumn-dark text-autumn-gold rounded-full text-xl font-semibold shadow-xl hover:bg-autumn transition"
      >
        Explore Listings
      </motion.a>
    </div>
  </section>
);

export default Hero;
