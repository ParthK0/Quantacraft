"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Tracks from "@/components/sections/Tracks";
import Timeline from "@/components/sections/Timeline";
import Prizes from "@/components/sections/Prizes";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import AvatarAssistant from "@/components/AvatarAssistant";
import LoadingScreen from "@/components/LoadingScreen";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative">
      <LoadingScreen />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-minecraft-green z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5 py-4 px-6 flex justify-between items-center">
        <div className="font-pixel text-xl tracking-tighter hover:text-minecraft-green cursor-pointer transition-colors group">
          QUANT<span className="text-minecraft-green group-hover:text-white transition-colors">CRAFT</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] font-pixel uppercase tracking-widest text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#tracks" className="hover:text-white transition-colors">Tracks</a>
          <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
          <a href="#prizes" className="hover:text-white transition-colors">Prizes</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <button className="px-4 py-2 bg-white text-black font-pixel text-[10px] hover:bg-minecraft-green transition-colors">
          JOIN ARENA
        </button>
      </nav>

      {/* Sections */}
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Prizes />
      <Team />
      <FAQ />
      <Footer />

      {/* Persistent Avatar Assistant */}
      <AvatarAssistant />
    </main>
  );
}
