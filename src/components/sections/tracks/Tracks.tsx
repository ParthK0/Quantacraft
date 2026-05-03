"use client";

import { motion } from "framer-motion";
import { Brain, ShieldAlert, Cpu, Gamepad2 } from "lucide-react";

const tracks = [
  {
    title: "AI/ML",
    desc: "Build intelligent systems that learn and adapt.",
    icon: Brain,
    color: "bg-purple-500",
  },
  {
    title: "Cyber Security",
    desc: "Secure the digital frontier against modern threats.",
    icon: ShieldAlert,
    color: "bg-red-500",
  },
  {
    title: "Blockchain",
    desc: "Decentralize the future with trustless technology.",
    icon: Cpu,
    color: "bg-blue-500",
  },
  {
    title: "Game Development",
    desc: "Create immersive worlds and engaging mechanics.",
    icon: Gamepad2,
    color: "bg-green-500",
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-32 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-pixel text-center mb-20">HACKATHON TRACKS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tracks.map((track, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="p-8 bg-zinc-900 border border-white/10 rounded-2xl relative group overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${track.color} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity`} />
            <track.icon className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-pixel mb-4">{track.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{track.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
