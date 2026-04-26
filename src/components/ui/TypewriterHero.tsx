"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "Ancient Wisdom.",
  "Modern Learning.",
  "Limitless Growth.",
  "Welcome to Enlightened Bharat."
];

export function TypewriterHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < phrases.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 2500);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="h-24 sm:h-32 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl md:text-6xl font-serif font-bold text-gurukul-dark text-center"
        >
          {phrases[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}