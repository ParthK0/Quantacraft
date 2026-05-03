import type { Metadata } from "next";
import { VT323, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuantCraft | Build. Solve. Conquer.",
  description: "Join QuantCraft, the ultimate hackathon at Galgotias University. AI/ML, Cyber Security, Blockchain, and Game Dev tracks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${vt323.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
