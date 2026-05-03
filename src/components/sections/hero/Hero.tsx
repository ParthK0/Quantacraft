"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(85,255,85,0.1),transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <div className="inline-block px-4 py-1 mb-6 border border-minecraft-green/30 rounded-full bg-minecraft-green/10 text-minecraft-green text-xs font-pixel tracking-widest uppercase">
          Nexido × BuilderBase × Quanta Club
        </div>
        
        <h1 className="text-6xl md:text-8xl font-pixel mb-6 tracking-tighter hover:text-minecraft-green transition-colors cursor-default">
          QUANTCRAFT
        </h1>

        <div className="flex gap-12 justify-center mb-10">
          <motion.div 
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-pixel text-xs border border-white/20">Q</div>
            <span className="font-pixel text-[8px] text-zinc-500">QUANTA</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-pixel text-xs border border-white/20">N</div>
            <span className="font-pixel text-[8px] text-zinc-500">NEXIDO</span>
          </motion.div>
        </div>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light">
          Build. Solve. Conquer.
        </p>

        <div className="flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-minecraft-green text-black font-pixel text-sm hover:bg-white transition-colors"
          >
            REGISTER NOW
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white font-pixel text-sm hover:bg-white hover:text-black transition-colors"
          >
            LEARN MORE
          </motion.button>
        </div>
      </motion.div>

      {/* Placeholder for Minecart Animation */}
      <div className="absolute bottom-20 left-0 right-0 h-1 bg-zinc-800">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-20 h-10 -mt-10 bg-zinc-700 flex items-center justify-center text-xs font-pixel"
        >
          🛒
        </motion.div>
      </div>
    </section>
  );
}
