"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about-section py-32 px-4 bg-black">
      <div className="about-header mt-20">
        <h2 data-corner-text="Experience Premium">
          ABOUT QUANTCRAFT
        </h2>
      </div>

      <div className="about-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-text text-zinc-100 font-minecraft text-[12px] leading-[2.2]"
        >
          <p className="mb-8">
            QuantCraft 1.0 is the next evolution of Rajasthan's biggest student-run hackathon—a 36-hour build space where students and innovators from across the country come together to create impactful, real-world tech solutions.
          </p>
          <p className="mb-8">
            More than just coding, it is a platform to explore ideas, sharpen skills, and grow with a driven community—whether you are just starting out or building complex systems.
          </p>
          <p>
            Enter QuantCraft and shape the future, one idea at a time.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-image-container"
        >
          <div className="relative">
            <img 
              src="/assets/college.png" 
              alt="College Campus" 
              className="about-image"
            />
            
            {/* Creeper & Speech Bubble */}
            <div className="absolute -bottom-10 -left-20 flex items-end">
              <div className="relative group">
                <img 
                  src="https://minecraft.wiki/images/Creeper_JE2_BE1.png?26084" 
                  alt="Creeper" 
                  className="w-32 h-auto image-rendering-pixelated drop-shadow-[0_0_15px_rgba(85,255,85,0.5)] transform hover:scale-110 transition-transform"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="speech-bubble"
                >
                  36 hours of pure innovation awaits!
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
