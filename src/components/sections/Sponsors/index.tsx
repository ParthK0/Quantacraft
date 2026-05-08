"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import OptimizedImage from "@/components/OptimizedImage";

const goldenSponsors = [
  { name: "Golden Sponsor 1", logo: "/assets/sponsor/Golden Sponsor 1.png", scale: 1.1 },
  { name: "Golden Sponsor 2", logo: "/assets/sponsor/Golden sponsor 2.png", scale: 1.5 },
];

const bronzeSponsors = [
  { name: "Bronze Sponsor 1", logo: "/assets/sponsor/Bronze Sponsor 1.png", scale: 1.0 },
  { name: "Bronze Sponsor 2", logo: "/assets/sponsor/Bronze Sponsor 2.png", scale: 1.0 },
];

interface SponsorCardProps {
  sponsor: { name: string; logo: string; scale?: number };
  tier: "golden" | "bronze";
  index: number;
}

function SponsorCard({ sponsor, tier, index }: SponsorCardProps) {
  const isGolden = tier === "golden";

  // Minecraft Pixel Palette
  const colors = isGolden ? {
    primary: "#f7e34d",
    dark: "#b59a24",
    light: "#fff9ab",
    glow: "rgba(247, 227, 77, 0.15)" // Reduced opacity
  } : {
    primary: "#c46c3d",
    dark: "#8c4d2d",
    light: "#e8a685",
    glow: "rgba(196, 108, 61, 0.1)" // Reduced opacity
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group"
    >
      {/* Simplified - removed continuous animation on mobile */}
      <div className="md:animate-float">
        {/* Background Glow - Reduced blur */}
        <div
          className="absolute inset-[-20px] rounded-full blur-[30px] opacity-80 z-0"
          style={{ backgroundColor: colors.glow }}
        />

        <div className="w-40 h-40 md:w-64 md:h-64 relative flex items-center justify-center">
          {/* Pixelated Frame Container */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Outer Dark Rim */}
            <div className="absolute inset-0 border-[4px] border-black/40" />

            {/* Main Frame Body */}
            <div
              className="absolute inset-[4px] border-[8px]"
              style={{ borderColor: colors.primary }}
            />

            {/* Inner Highlight/Shadow Lines */}
            <div
              className="absolute inset-[4px] border-t-[4px] border-l-[4px]"
              style={{ borderColor: colors.light }}
            />
            <div
              className="absolute inset-[4px] border-b-[4px] border-r-[4px]"
              style={{ borderColor: colors.dark }}
            />

            {/* Corner Pixel Blocks */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-black/60" />
            <div className="absolute top-0 right-0 w-4 h-4 bg-black/60" />
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-black/60" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-black/60" />

            {/* Accent Pixels */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30" />
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-black/20" />
          </div>

          {/* Inner Texture / Backdrop - Lazy loaded */}
          <OptimizedImage
            src="/assets/sponsor/sponsor back.png"
            alt="Sponsor Backdrop"
            fill
            className="absolute inset-[12px] w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover z-10 brightness-[0.9] group-hover:brightness-110 transition-all duration-300"
            priority={false}
          />

          {/* Sponsor Logo - Lazy loaded */}
          <div className="absolute inset-[12px] z-30 flex items-center justify-center p-8">
            <div style={{ transform: `scale(${sponsor.scale || 1})` }} className="transition-transform duration-300 group-hover:scale-110">
              <OptimizedImage
                src={sponsor.logo}
                alt={sponsor.name}
                width={200}
                height={200}
                className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 px-4 relative overflow-hidden" style={{
      backgroundImage: 'url(/assets/sponsor/sponsor.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Subtle Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1] pointer-events-none" />

      <SectionHeader 
        title="OUR SPONSORS" 
        subtext="Forged in Alliance"
        titleShadow="#bc00ff"
        className="mb-20"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mt-32 space-y-32">
          {/* Golden Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-20">
            {goldenSponsors.map((sponsor, idx) => (
              <SponsorCard key={idx} sponsor={sponsor} tier="golden" index={idx} />
            ))}
          </div>

          {/* Bronze Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-20">
            {bronzeSponsors.map((sponsor, idx) => (
              <SponsorCard key={idx} sponsor={sponsor} tier="bronze" index={idx + 2} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Glows - Reduced blur and hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="hidden md:block absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-orange-900/10 rounded-full blur-[80px] pointer-events-none" />
    </section>
  );
}
