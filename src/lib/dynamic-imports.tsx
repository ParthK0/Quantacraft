/**
 * Dynamic Imports Configuration
 * Enables code splitting for better performance
 * Components are loaded on-demand rather than bundled upfront
 */

import dynamic from "next/dynamic";

// Dynamically import heavy components
export const DynamicAbout = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: true,
});

export const DynamicTracks = dynamic(() => import("@/components/sections/Tracks"), {
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: true,
});

export const DynamicTeam = dynamic(() => import("@/components/sections/Team"), {
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: true,
});

export const DynamicPrizes = dynamic(() => import("@/components/sections/Prizes"), {
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: true,
});

export const DynamicTimeline = dynamic(() => import("@/components/sections/Timeline"), {
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: true,
});

export const DynamicSponsors = dynamic(() => import("@/components/sections/Sponsors"), {
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: true,
});

export const DynamicFAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <div className="min-h-screen bg-black" />,
  ssr: true,
});

export const DynamicFooter = dynamic(() => import("@/components/sections/Footer"), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true,
});
