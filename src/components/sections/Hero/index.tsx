"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <video
        src="/assets/herobackground%202.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      />

      {/* Overlays for depth and readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(85,255,85,0.15),transparent_70%)] z-[2]" />
      
      {/* Main Logo in Centre - Floating Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -25, 0] // Smooth floating bobbing
        }}
        transition={{ 
          opacity: { duration: 1.2, ease: "easeOut" },
          scale: { duration: 1.2, ease: "easeOut" },
          y: { 
            repeat: Infinity, 
            duration: 4, 
            ease: "easeInOut" 
          }
        }}
        className="z-10 w-full max-w-xl px-6 pointer-events-none select-none"
      >
        <img 
          src="/assets/main Logo.png" 
          alt="QuantCraft Logo" 
          className="w-full h-auto filter drop-shadow-[0_0_60px_rgba(85,255,85,0.4)] brightness-110"
        />
      </motion.div>
      {/* Scrolling Marquee like AceHack */}
      <ScrollingMarquee />
    </section>
  );
}

function ScrollingMarquee() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest: number) => {
      if (latest > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 w-full z-[100] overflow-hidden bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-700 border-y-2 border-white/20 shadow-[0_-4px_20px_rgba(160,0,255,0.4)]"
    >
      <div className="flex whitespace-nowrap py-3 animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-minecraft text-sm mx-8 text-white drop-shadow-[2px_2px_0_#000]">
            QUANTCRAFT IS HERE! ~ MAY 25-26 ~ 48 HOURS OF BUILDING ~ JOIN THE ADVENTURE ~ 
          </span>
        ))}
      </div>
    </motion.div>
  );
}
