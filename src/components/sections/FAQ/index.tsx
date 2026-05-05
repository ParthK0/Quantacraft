"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who can participate?",
    a: "Any student enrolled in a college or university across India. All skill levels welcome — beginners to advanced.",
  },
  {
    q: "What is the team size?",
    a: "Teams of 2–4 members. Solo participation not allowed.",
  },
  {
    q: "Is there a registration fee?",
    a: "No. QuantCraft is completely free to participate in.",
  },
  {
    q: "What do I need to submit?",
    a: "A PPT by May 15, followed by the final project by May 20.",
  },
  {
    q: "Will accommodation be provided?",
    a: "Details will be shared with shortlisted teams. Stay tuned.",
  },
  {
    q: "What tracks can I build for?",
    a: "AI/ML, Cybersecurity, Blockchain, Game Dev.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-32 px-4 max-w-3xl mx-auto overflow-visible">
      <div className="text-center mb-24 pt-20">
        <h2 data-corner-text="Help Center">COMMAND CENTER (FAQ)</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-pixel text-sm">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-white/5">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
