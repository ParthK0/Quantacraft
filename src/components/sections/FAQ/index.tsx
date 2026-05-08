"use client";

import { useState } from "react";
import { PickaxeIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import LazyVideo from "@/components/LazyVideo";
import OptimizedImage from "@/components/OptimizedImage";
import { faqData } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-16 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
      {/* 📹 Background Video - Desktop (Lazy Loaded) */}
      <LazyVideo
        src="/assets/FAQs/FAQs.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-110 hidden md:block"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🖼️ Background Image - Mobile (Optimized) */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <OptimizedImage
          src="/assets/about/sky.jpg"
          alt="Sky Background"
          fill
          className="object-cover brightness-110"
          priority={true}
        />
      </div>

      {/* 🌑 Very light overlay for text contrast only */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent z-[1]" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <SectionHeader
          title="FAQs"
          subtext=""
          className="pt-0"
        />
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  isOpen,
  onToggle
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group relative border-[3px] border-[#A000FF] bg-[#0a0a0a]/40 overflow-hidden z-10 shadow-[0_0_15px_rgba(160,0,255,0.2)]">
      {/* 🖼️ Card Backdrop (Covers both Question and Answer) */}
      <div
        className="absolute inset-0 opacity-70 group-hover:opacity-60 transition-opacity pointer-events-none -z-10"
        style={{
          backgroundImage: 'url("/assets/FAQs/FAQs qus frame backdrop.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <button
        onClick={onToggle}
        className="relative w-full p-5 flex items-center justify-between text-left z-10"
        aria-expanded={isOpen}
        aria-label={`Toggle answer for: ${faq.q}`}
      >
        <span className="font-minecraft text-[9px] md:text-[11px] text-white tracking-[1px] drop-shadow-[2px_2px_0_#A000FF] uppercase">
          {faq.q}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-45 scale-110" : ""}`}>
          <PickaxeIcon 
            className="w-6 h-6 text-white drop-shadow-[2px_2px_0_#A000FF]"
            aria-hidden="true"
          />
        </div>
      </button>

      <div
        className={`relative overflow-hidden transition-all duration-300 ease-in-out z-20 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        role="region"
        aria-label="FAQ answer"
      >
        <div className="p-5 pt-0">
          <div className="p-4 bg-black/50 border-l-[4px] border-[#A000FF] backdrop-blur-[2px]">
            <p className="font-minecraft text-[9px] md:text-[11px] text-white leading-relaxed tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
