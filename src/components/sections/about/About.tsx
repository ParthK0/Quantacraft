"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-4 max-w-7xl mx-auto border-y border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-pixel text-minecraft-green mb-8">THE CRAFT BEGINS</h2>
          <div className="space-y-6 text-lg text-zinc-400">
            <p>
              QuantCraft is more than just a hackathon; it&apos;s an arena where innovation meets logic. Hosted at Galgotias University, this 2026 edition challenges you to build real-world solutions across four cutting-edge tracks.
            </p>
            <p>
              Galgotias University, established in 2011, is ranked among India&apos;s top institutions. It stands 1st in UP for patents and 3rd nationally in pharmacy patents, fostering a global ecosystem of collaboration and excellence.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-900 border border-white/10 rounded-lg">
                <div className="text-minecraft-blue font-pixel text-2xl mb-1">1st</div>
                <div className="text-xs uppercase tracking-wider">in UP for Patents</div>
              </div>
              <div className="p-4 bg-zinc-900 border border-white/10 rounded-lg">
                <div className="text-minecraft-blue font-pixel text-2xl mb-1">Top</div>
                <div className="text-xs uppercase tracking-wider">Ranked University</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square bg-zinc-900 border-4 border-white/20 p-8 flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="z-10 text-center">
            <div className="text-8xl mb-4">🏫</div>
            <div className="font-pixel text-sm text-zinc-500 uppercase">Galgotias Campus Pixel Art Placeholder</div>
          </div>
          <div className="absolute bottom-4 right-4 font-pixel text-[10px] text-zinc-600">CANVA_RENDER_v1.0</div>
        </motion.div>
      </div>
    </section>
  );
}
