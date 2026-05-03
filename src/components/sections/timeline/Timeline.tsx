"use client";

import { motion } from "framer-motion";

const events = [
  { date: "May 04", title: "Registration Starts", desc: "Open to all students across India." },
  { date: "May 15", title: "PPT Submission", desc: "Submit your core idea and approach." },
  { date: "May 20", title: "Reg End & Final Sub", desc: "Final deadline for all submissions." },
  { date: "May 22", title: "Trade Session", desc: "Interactive session with mentors." },
  { date: "May 23", title: "PPT Evaluation", desc: "Expert review of your presentations." },
  { date: "May 25-26", title: "The End Fight", desc: "48H final hacking at the venue." },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 px-4 max-w-7xl mx-auto overflow-hidden">
      <h2 className="text-4xl font-pixel text-center mb-20 text-minecraft-gold">THE QUEST LINE</h2>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-12">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 text-center md:text-left">
                <div className={`p-6 bg-zinc-900 border border-white/10 rounded-2xl ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="font-pixel text-minecraft-gold mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-zinc-400 text-sm">{event.desc}</p>
                </div>
              </div>
              
              <div className="w-12 h-12 bg-black border-4 border-minecraft-gold rounded-full z-10 flex items-center justify-center shrink-0">
                <div className="w-3 h-3 bg-minecraft-gold rounded-full animate-pulse" />
              </div>
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
