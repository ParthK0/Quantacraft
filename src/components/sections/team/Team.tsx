"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const team = [
  { name: "Eren", role: "Organizer", icon: "👤" },
  { name: "Punit", role: "Lead Dev", icon: "👤" },
  { name: "Sarah", role: "UI/UX", icon: "👤" },
  { name: "Alex", role: "Blockchain", icon: "👤" },
  { name: "Mike", role: "Cybersec", icon: "👤" },
  { name: "Elena", role: "AI Lead", icon: "👤" },
  { name: "David", role: "Gaming", icon: "👤" },
];

export default function Team() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="team" ref={targetRef} className="relative h-[200vh] bg-zinc-950">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-4xl font-pixel mb-20 z-10">THE QUANTA CREW</h2>
        
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {team.concat(team).map((member, i) => (
            <motion.div
              key={i}
              className="w-72 h-96 bg-zinc-900 border-2 border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center shrink-0 hover:border-minecraft-green/50 transition-colors"
            >
              <div className="text-7xl mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                {member.icon}
              </div>
              <h3 className="font-pixel text-xl mb-2">{member.name}</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-[10px]">
                {member.role}
              </p>
              
              {/* Minecart Tracks Decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-zinc-800">
                <div className="flex gap-4 justify-center">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="w-8 h-1 bg-zinc-700" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute bottom-20 text-zinc-600 font-pixel text-xs animate-bounce">
          SCROLL TO EXPLORE THE TRAIN
        </div>
      </div>
    </section>
  );
}
