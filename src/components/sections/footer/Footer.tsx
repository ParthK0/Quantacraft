"use client";

import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-32 pb-10 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-4xl font-pixel mb-6">QUANTCRAFT</h2>
            <p className="text-zinc-400 mb-10 max-w-md">
              "We believe a partnership with your organization would be mutually valuable. Reach out — we&apos;d love to collaborate."
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-400">
                <Mail className="w-5 h-5 text-minecraft-green" />
                <span>eren.techfest@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-400">
                <Phone className="w-5 h-5 text-minecraft-green" />
                <div className="flex flex-col">
                  <span>Eren — 9306576649</span>
                  <span>Punit — 9650380372</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-400">
                <MapPin className="w-5 h-5 text-minecraft-green" />
                <span>Plot No. 2, Yamuna Expy, Greater Noida, UP 203201</span>
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-minecraft-green hover:text-black transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-minecraft-green hover:text-black transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-minecraft-green hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden h-[300px] relative">
              {/* Google Maps Embed Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-800">
                <MapPin className="w-12 h-12 text-zinc-600 mb-4" />
                <div className="text-zinc-500 font-pixel text-[10px]">GOOGLE_MAPS_EMBED_PLACEHOLDER</div>
              </div>
              <iframe 
                className="w-full h-full border-0 grayscale invert opacity-50"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.387114631383!2d77.53484217625126!3d28.377317675806653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc66264903333%3A0xc3c5d6c8b093f412!2sGalgotias%20University!5e0!3m2!1sen!2sin!4v1714742400000!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-900 border border-white/5 rounded-2xl">
                <div className="text-xs text-zinc-500 font-pixel mb-1 uppercase">Venue Partner</div>
                <div className="font-bold">Quanta — The Data Science Club, GU</div>
              </div>
              <div className="p-6 bg-zinc-900 border border-white/5 rounded-2xl text-right">
                <div className="text-xs text-zinc-500 font-pixel mb-1 uppercase">Copyright</div>
                <div className="font-bold">© 2026 QuantCraft</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-10 border-t border-white/5">
          <div className="font-pixel text-[10px] text-zinc-700 tracking-[0.5em] uppercase">
            Organized by Nexido × BuilderBase × Quanta Club
          </div>
        </div>
      </div>
    </footer>
  );
}
