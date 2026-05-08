"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import LazyVideo from "@/components/LazyVideo";
import OptimizedImage from "@/components/OptimizedImage";

export default function About() {
  return (
    <section id="about" className="about-section py-16 px-4 relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
      {/* Background Video - Desktop (Lazy Loaded) */}
      <LazyVideo
        src="/assets/about/mp_.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none hidden md:block"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Background Image - Mobile (Optimized) */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <OptimizedImage
          src="/assets/about/sky.jpg"
          alt="Sky Background"
          fill
          className="object-cover"
          priority={true}
        />
      </div>

      {/* Very light gradient overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent z-[1]" />

      <SectionHeader
        title="ABOUT QUANTCRAFT"
        subtext="Build. Solve. Conquer."
        className="mb-8"
      />

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE - Content Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Minecraft-style Panel Frame */}
            <div className="relative bg-gradient-to-br from-[#2d1b0f] to-[#1a0f08] border-4 border-[#8B4513] p-6 lg:p-8 shadow-2xl">
              {/* Corner Brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-4 border-t-4 border-[#D2691E]"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-4 border-t-4 border-[#D2691E]"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-4 border-b-4 border-[#D2691E]"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-4 border-b-4 border-[#D2691E]"></div>

              {/* Enchanted Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 animate-pulse"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Label */}
                <div className="font-minecraft text-[#00FFCC] text-xs mb-3 tracking-wider">
                  ABOUT QUANTCRAFT
                </div>

                {/* Main Heading */}
                <h3 className="font-minecraft text-white text-lg lg:text-xl mb-4 leading-tight">
                  WHERE INNOVATION MEETS THE MINECRAFT UNIVERSE
                </h3>

                {/* Description */}
                <p className="font-exo text-[#e2e8f0] text-sm lg:text-base leading-relaxed mb-6">
                  QuantCraft is a national-level student-run hackathon where developers, designers, and innovators collaborate to build impactful real-world solutions through creativity, technology, and competition.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Duration", value: "24 Hours" },
                    { label: "Scope", value: "Multiple Tracks" },
                    { label: "Level", value: "National" },
                    { label: "Format", value: "Team Based" }
                  ].map((stat, index) => (
                    <div key={index} className="flex flex-col items-center justify-center text-center p-4 bg-black/30 border border-[#8B4513]/50 min-h-[80px]">
                      <div className="font-minecraft text-[#FFD700] text-sm mb-2 leading-tight">{stat.value}</div>
                      <div className="font-exo text-[#a0aec0] text-xs uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Cinematic Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[350px] lg:h-[400px]"
          >
            {/* Main Display Frame */}
            <div className="relative w-full h-full bg-gradient-to-br from-[#2d1b0f] to-[#1a0f08] border-4 border-[#8B4513] p-3 shadow-2xl">
              {/* Screen Glow */}
              <div className="absolute inset-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
              
              {/* College Image with Minecraft Frame */}
              <div className="relative w-full h-full overflow-hidden bg-black/50">
                <OptimizedImage
                  src="/assets/college3.png"
                  alt="College Campus"
                  fill
                  className="object-cover"
                  priority={false}
                />
                
                {/* Overlay Grid Pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,255,204,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,255,204,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              {/* Floating UI Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 bg-[#2d1b0f] border-2 border-[#00FFCC] px-2 py-1"
              >
                <div className="font-minecraft text-[#00FFCC] text-xs">LIVE</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 left-4 bg-[#2d1b0f] border-2 border-[#FFD700] px-2 py-1"
              >
                <div className="font-minecraft text-[#FFD700] text-xs">BUILDING...</div>
              </motion.div>

              {/* Particle Effects */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Command Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-3 -right-3 bg-black border-2 border-[#00FF00] p-2 w-40 shadow-lg"
            >
              <div className="font-minecraft text-[#00FF00] text-xs">
                <div className="mb-1">$ quantcraft init</div>
                <div className="text-[#FFD700]">Ready to build...</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
