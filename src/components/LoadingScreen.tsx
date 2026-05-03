"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-[#1a1a1a] flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-md px-10">
            <div className="font-pixel text-minecraft-green text-center mb-8 animate-pulse text-2xl">
              LOADING QUANT-WORLD...
            </div>
            
            <div className="h-8 w-full bg-zinc-900 border-4 border-zinc-700 relative overflow-hidden">
              <motion.div
                className="h-full bg-minecraft-green"
                style={{ width: `${progress}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-pixel text-[10px] text-white mix-blend-difference">
                {Math.floor(progress)}%
              </div>
            </div>

            <div className="mt-6 text-zinc-500 font-pixel text-[10px] text-center uppercase tracking-[0.3em]">
              Building blocks... Initializing circuits...
            </div>
          </div>

          <div className="absolute bottom-10 font-pixel text-zinc-800 text-[8px]">
            QUANTCRAFT v2026.0.1_STABLE
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
