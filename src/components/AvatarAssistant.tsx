"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const quotes: Record<string, string> = {
  hero: "Welcome to QuantCraft! Ready to build the future?",
  about: "Galgotias University is where the magic happens.",
  tracks: "Which path will you choose? AI, Cyber, Crypto, or Games?",
  timeline: "Keep an eye on the clock! May is going to be intense.",
  prizes: "₹35,000 up for grabs! Plus goodies for everyone.",
  team: "The dream team behind the scenes. Meet the Quanta crew!",
  faq: "Got questions? We've got answers.",
};

export default function AvatarAssistant() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-end gap-4 pointer-events-none">
      <motion.div
        className="pointer-events-auto cursor-help"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <div className="w-24 h-24 bg-zinc-800 rounded-lg border-2 border-white/20 overflow-hidden relative group">
          <img 
            src="/assets/avatar.png" 
            alt="Avatar" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-[8px] text-center py-0.5 font-pixel uppercase text-white">
            QuantBot
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {(isHovered || true) && (
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white text-black p-3 rounded-xl rounded-bl-none shadow-xl max-w-[200px] text-sm font-medium relative mb-12 pointer-events-auto"
          >
            {quotes[currentSection] || "Build. Solve. Conquer."}
            <div className="absolute -bottom-2 left-0 w-4 h-4 bg-white rotate-45 -translate-x-1/2" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
