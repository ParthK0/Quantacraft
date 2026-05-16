"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const events = [
  { 
    id: "7may",
    imageSrc: "/assets/timeline/7may1.png",
    alt: "MAY 07: Registration Starts",
  },
  { 
    id: "20may",
    imageSrc: "/assets/timeline/20may1.png",
    alt: "MAY 20: PPT Submission",
  },
  { 
    id: "23may",
    imageSrc: "/assets/timeline/23May1.png",
    alt: "MAY 23: Final Deadline",
  },
  { 
    id: "24may",
    imageSrc: "/assets/timeline/22may1.png",
    alt: "MAY 24: Trae Session",
  },
  { 
    id: "25may",
    imageSrc: "/assets/timeline/23May1.png",
    alt: "MAY 25: PPT Evaluation",
  },
  { 
    id: "27-28may",
    imageSrc: "/assets/timeline/25-26may.png",
    alt: "MAY 27-28: The End Fight",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 px-4 relative overflow-hidden font-pixel">
      {/* Background Stars/Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(160,0,255,0.1),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="EVENT TIMELINE" 
          subtext="Tick Tock Hack!!"
          className="mb-24"
          titleClassName="[word-spacing:-0.6em]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Central Vertical Redstone Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-3 -translate-x-1/2 z-0">
          {/* Main Redstone Wire */}
          <div className="w-full h-full bg-gradient-to-b from-[#8B0000] via-[#DC143C] to-[#8B0000] shadow-[0_0_20px_rgba(220,20,60,0.6)]">
            {/* Redstone Dust Particles */}
            <div className="absolute inset-0 opacity-60" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #FF6B6B 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, #FF4444 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, #DC143C 1px, transparent 1px)
              `,
              backgroundSize: '8px 8px, 12px 12px, 6px 6px',
              animation: 'redstoneFlicker 2s ease-in-out infinite'
            }}></div>
          </div>

          {/* Redstone Repeaters */}
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute w-6 h-4 bg-[#4A4A4A] border-2 border-[#2A2A2A] -left-1.5"
              style={{ 
                top: `${(i * 12) + 8}%`,
                boxShadow: '0 0 10px rgba(220, 20, 60, 0.4)'
              }}
              animate={{
                boxShadow: [
                  '0 0 10px rgba(220, 20, 60, 0.4)',
                  '0 0 20px rgba(220, 20, 60, 0.8)',
                  '0 0 10px rgba(220, 20, 60, 0.4)'
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            >
              {/* Repeater Torch */}
              <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-2 bg-[#FFD700] shadow-[0_0_6px_rgba(255,215,0,0.8)]"></div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4 md:space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex items-center relative group mb-12 md:mb-24 ${
                i % 2 === 0 ? "flex-row md:flex-row" : "flex-row md:flex-row-reverse"
              }`}
            >
              {/* Event Image Card with Minecraft Frame */}
              <div className={`flex-1 w-full z-10 pl-16 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative cursor-pointer"
                >
                  {/* Minecraft-style Frame */}
                  <div className="relative bg-gradient-to-br from-[#8B4513] to-[#5D2F0A] border-4 border-[#D2691E] p-2 shadow-2xl">
                    {/* Corner Brackets */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-[#FFD700]"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-[#FFD700]"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-[#FFD700]"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[#FFD700]"></div>
                    
                    {/* Inner Glow */}
                    <div className="absolute inset-1 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                    
                    <img 
                      src={event.imageSrc} 
                      alt={event.alt}
                      className="relative w-full h-[80px] md:h-[140px] object-contain z-10"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Horizontal Redstone Connector */}
              <div className={`absolute top-1/2 -translate-y-1/2 h-2 bg-gradient-to-r from-[#8B0000] to-[#DC143C] z-0 shadow-[0_0_10px_rgba(220,20,60,0.5)] ${
                i % 2 === 0 
                  ? "left-6 right-1/2 md:left-[20%]" 
                  : "left-6 right-1/2 md:right-[20%] md:left-1/2"
              }`}>
                {/* Redstone Dust Effect */}
                <div className="absolute inset-0 opacity-40" style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, #FF4444 1px, transparent 1px)`,
                  backgroundSize: '4px 4px'
                }}></div>
              </div>

              {/* Center Connection Point (Redstone Block) */}
              <motion.div 
                className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#DC143C] to-[#8B0000] border-2 border-[#4A0000] z-20 shadow-[0_0_15px_rgba(220,20,60,0.8)]"
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(220, 20, 60, 0.8)',
                    '0 0 25px rgba(220, 20, 60, 1)',
                    '0 0 15px rgba(220, 20, 60, 0.8)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                {/* Inner Redstone Texture */}
                <div className="absolute inset-0.5 bg-gradient-to-br from-[#FF4444] to-[#CC0000] opacity-60"></div>
                {/* Redstone Dust Sparkle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#FFD700] rounded-full animate-pulse"></div>
              </motion.div>
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for Redstone Animation */}
      <style jsx>{`
        @keyframes redstoneFlicker {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
