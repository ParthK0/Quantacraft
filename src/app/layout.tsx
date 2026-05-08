import type { Metadata } from "next";
import { VT323, Outfit, Press_Start_2P, Satisfy, Fira_Code, Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuantCraft | Build. Solve. Conquer.",
  description: "Join QuantCraft, the ultimate hackathon at Galgotias University. AI/ML, Cyber Security, Blockchain, and Game Dev tracks.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/assets/main Logo.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/icon.png",
    shortcut: "/icon.png"
  },
};

import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

/**
 * Performance Monitoring Hook
 * Logs Core Web Vitals and performance metrics
 */
function PerformanceMonitor() {
  if (typeof window === "undefined") return null;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // Web Vitals Monitoring
          if ('web-vital' in window) {
            window.addEventListener('web-vital', (event) => {
              const { name, value, rating } = event.detail;
              console.log(\`[\${name}] \${value.toFixed(2)}ms - \${rating}\`);
            });
          }

          // Performance Observer for resource timing
          if ('PerformanceObserver' in window) {
            try {
              const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (entry.duration > 1000) {
                    console.warn(\`Slow resource: \${entry.name} (\${entry.duration.toFixed(2)}ms)\`);
                  }
                }
              });
              observer.observe({ entryTypes: ['resource', 'navigation'] });
            } catch (e) {
              console.log('PerformanceObserver not supported');
            }
          }

          // Log page load time
          window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(\`Page Load Time: \${pageLoadTime}ms\`);
          });
        `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#00ffcc" />
        {/* Apple Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="QuantCraft" />
        {/* Preconnect to external resources for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${outfit.variable} ${vt323.variable} ${pressStart2P.variable} ${satisfy.variable} ${firaCode.variable} ${exo2.variable} font-sans antialiased bg-black text-white`} suppressHydrationWarning>
        <CustomCursor />
        <PerformanceMonitor />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
