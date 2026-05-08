"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { socialLinks, contactInfo, quickLinks } from "@/lib/data";

// Social Media Icons
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="footer" className="relative w-full overflow-hidden">
      {/* 👾 Top Grass Block Strip */}
      <div className="h-[20px] w-full relative z-30 flex flex-col shadow-[0_0_20px_#22c55e]">
        <div className="h-[12px] w-full bg-[#4ade80] border-b-2 border-[#15803d]" />
        <div className="h-[8px] w-full bg-[#3d1f00]" />
      </div>

      {/* 📜 Event Marquee Bar (Photo Format) */}
      <div className="w-full bg-gradient-to-r from-[#003366] via-[#006666] to-[#008080] border-y-2 border-[#88eeff] py-2 overflow-hidden relative z-20">
        <div className="flex whitespace-nowrap animate-marquee px-4">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-minecraft text-[10px] text-white tracking-[1px] flex items-center gap-8 mx-4">
              <span>QUANTA CRAFT 1.0 IS HERE!</span>
              <span className="text-[#88eeff]">~</span>
              <span>MAY 25-26</span>
              <span className="text-[#88eeff]">~</span>
              <span>24 HOURS OF BUILDING</span>
              <span className="text-[#88eeff]">~</span>
              <span>JOIN THE ADVENTURE!</span>
              <span className="text-[#88eeff] mx-4">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* 📏 Divider line */}
      <div className="w-full h-[1px] bg-white/10 relative z-20" />

      {/* Main Footer Container */}
      <div className="jungle-footer-bg pt-12 pb-0 relative">
        <div className="mossy-overlay" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-8"
          >
            {/* [Col 1 - Brand] */}
            <div className="flex flex-col pr-8 mb-8 lg:mb-0 bg-black/30 p-4 backdrop-blur-[2px]">
              <img
                src="/assets/footer/QuantCraft.svg?v=2"
                alt="QuantCraft Logo"
                className="h-16 w-auto mb-6 object-contain self-start filter drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]"
                loading="lazy"
              />
                  <div className="space-y-6">
                    {/* Nexido Socials */}
                    <div>
                      <h3 className="footer-heading !mb-3">FOLLOW NEXIDO</h3>
                      <div className="flex flex-wrap gap-3">
                        <a 
                          href={socialLinks.nexido.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-[36px] h-[36px] flex items-center justify-center border-2 border-[#67e8f9] rounded-none bg-[rgba(103,232,249,0.1)] text-[#67e8f9] transition-all duration-200 hover:bg-[#67e8f9] hover:text-[#0f1a0f] hover:shadow-[0_0_15px_#67e8f9] hover:-translate-y-[3px]"
                          title="NEXIDO INSTAGRAM"
                          aria-label="NEXIDO INSTAGRAM"
                        >
                          <InstagramIcon />
                        </a>
                        <a 
                          href={socialLinks.nexido.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-[36px] h-[36px] flex items-center justify-center border-2 border-[#67e8f9] rounded-none bg-[rgba(103,232,249,0.1)] text-[#67e8f9] transition-all duration-200 hover:bg-[#67e8f9] hover:text-[#0f1a0f] hover:shadow-[0_0_15px_#67e8f9] hover:-translate-y-[3px]"
                          title="NEXIDO X"
                          aria-label="NEXIDO X"
                        >
                          <XIcon />
                        </a>
                        <a 
                          href={socialLinks.nexido.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-[36px] h-[36px] flex items-center justify-center border-2 border-[#67e8f9] rounded-none bg-[rgba(103,232,249,0.1)] text-[#67e8f9] transition-all duration-200 hover:bg-[#67e8f9] hover:text-[#0f1a0f] hover:shadow-[0_0_15px_#67e8f9] hover:-translate-y-[3px]"
                          title="NEXIDO LINKEDIN"
                          aria-label="NEXIDO LINKEDIN"
                        >
                          <LinkedInIcon />
                        </a>
                      </div>
                    </div>

                    {/* Builder Base Socials */}
                    <div>
                      <h3 className="footer-heading !mb-3">FOLLOW BUILDER BASE</h3>
                      <div className="flex flex-wrap gap-3">
                        <a 
                          href={socialLinks.builderbase.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-[36px] h-[36px] flex items-center justify-center border-2 border-[#67e8f9] rounded-none bg-[rgba(103,232,249,0.1)] text-[#67e8f9] transition-all duration-200 hover:bg-[#67e8f9] hover:text-[#0f1a0f] hover:shadow-[0_0_15px_#67e8f9] hover:-translate-y-[3px]"
                          title="BUILDER BASE INSTAGRAM"
                          aria-label="BUILDER BASE INSTAGRAM"
                        >
                          <InstagramIcon />
                        </a>
                      </div>
                    </div>
                  </div>
            </div>

            {/* [Col 2 - Quick Links] */}
            <div className="lg:border-l lg:border-white/10 pl-4 lg:pl-12 mb-8 lg:mb-0 bg-black/25 p-4 backdrop-blur-[2px]">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link-pixel">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* [Col 3 & 4 - Contact & Map Combined on Mobile] */}
            <div className="lg:border-l lg:border-white/10 pl-4 lg:pl-12 bg-black/20 p-4 backdrop-blur-[2px] lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Us Part */}
              <div>
                <h3 className="footer-heading">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="footer-label mb-1">Email</span>
                    <a href={`mailto:${contactInfo.email}`} className="font-exo text-[13px] text-[#cccccc] hover:text-[#67e8f9] transition-colors tracking-wide">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="footer-label mb-1">Phone</span>
                    <span className="font-exo text-[13px] text-[#cccccc] tracking-widest">{contactInfo.phone}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="footer-label mb-1">Address</span>
                    <span className="font-exo text-[12px] text-[#cccccc] leading-relaxed">
                      {contactInfo.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Part */}
              <div>
                <h3 className="footer-heading flex items-center gap-2">
                  <span className="text-xl">📍</span> FIND US
                </h3>
                <a 
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0a0a0a] border-[3px] border-[#67e8f9] shadow-[0_0_15px_#67e8f9,inset_0_0_10px_rgba(103,232,249,0.1)] rounded-none p-1 overflow-hidden h-[180px] relative group block cursor-pointer"
                  aria-label="Open location in Google Maps"
                >
                  <div className="absolute inset-0 bg-[#67e8f9]/0 group-hover:bg-[#67e8f9]/10 transition-colors z-10 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#0a0a0a] border border-[#67e8f9] text-[#67e8f9] font-minecraft text-[10px] px-3 py-1 uppercase tracking-widest shadow-[0_0_10px_#67e8f9]">
                      Open in Maps
                    </span>
                  </div>
                  <iframe
                    className="w-full h-full border-0 transition-all duration-500 pointer-events-none"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.387114631383!2d77.53484217625126!3d28.377317675806653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc66264903333%3A0xc3c5d6c8b093f412!2sGalgotias%20University!5e0!3m2!1sen!2sin!4v1714742400000!5m2!1sen!2sin"
                    loading="lazy"
                    title="Galgotias University Location"
                  ></iframe>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 👾 Copyright Bar */}
        <div className="w-full bg-gradient-to-r from-[#003366] via-[#006666] to-[#008080] py-4 px-6 relative z-10 border-t-2 border-[#88eeff]">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <div className="font-minecraft text-[10px] text-white tracking-[1px] text-center leading-loose uppercase">
              © 2026 QUANTCRAFT • ORGANIZED BY NEXIDO × BUILDERBASE × QUANTA CLUB
              <br />
              <span className="text-white opacity-80 text-[8px] tracking-[1px]">ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
