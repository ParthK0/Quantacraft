"use client";
import { useEffect, useState } from "react";
import "./LoadingScreen.css";

const tips = [
  "Creepers were originally pigs.",
  "Hackathons respawn you stronger.",
  "48 hours = infinite XP gained.",
  "The best builds start with one block.",
  "Sleep skips the night, not the grind.",
  "Every coder started in Creative Mode.",
  "Diamonds are found at Y-level -58.",
  "QuantCraft 1.0 — your first raid.",
  "Notch coded Minecraft in 6 days.",
  "The End is just a new beginning.",
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("Building terrain...");
  const [tip, setTip] = useState(tips[0]);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("qc_loaded")) {
      setVisible(false);
      return;
    }
    
    document.body.style.overflow = "hidden";

    // Minecraft-style loading phases
    const phases = [
      { text: "Building terrain...", duration: 1200, progress: 0 },
      { text: "Preparing spawn area...", duration: 800, progress: 25 },
      { text: "Loading terrain...", duration: 1000, progress: 45 },
      { text: "Populating chunks...", duration: 900, progress: 65 },
      { text: "Generating structures...", duration: 700, progress: 80 },
      { text: "Spawning entities...", duration: 600, progress: 90 },
      { text: "Finishing up...", duration: 500, progress: 95 },
    ];

    let currentPhaseIndex = 0;
    let animationFrame: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const currentPhase = phases[currentPhaseIndex];
      
      if (!currentPhase) {
        setProgress(100);
        setTimeout(startExit, 400);
        return;
      }

      // Calculate progress within current phase
      const phaseProgress = Math.min(elapsed / currentPhase.duration, 1);
      const nextPhase = phases[currentPhaseIndex + 1];
      const targetProgress = nextPhase ? nextPhase.progress : 100;
      const currentProgress = currentPhase.progress + (targetProgress - currentPhase.progress) * phaseProgress;
      
      setProgress(Math.floor(currentProgress));
      setPhase(currentPhase.text);

      if (elapsed >= currentPhase.duration) {
        currentPhaseIndex++;
        startTime = Date.now();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const startTimeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 100);

    // Rotate tips
    const tipInterval = setInterval(() => {
      setTip(prev => {
        const currentIdx = tips.indexOf(prev);
        return tips[(currentIdx + 1) % tips.length];
      });
    }, 3000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(tipInterval);
      cancelAnimationFrame(animationFrame);
      document.body.style.overflow = "";
    };
  }, []);

  function startExit() {
    setExiting(true);
    setTimeout(() => {
      sessionStorage.setItem("qc_loaded", "true");
      setVisible(false);
      document.body.style.overflow = "";
    }, 600);
  }

  if (!visible) return null;

  return (
    <div className={`loading-screen ${exiting ? "loading-exit" : ""}`}>
      <img 
        src="/assets/footer/QuantCraft.svg?v=2" 
        className="loading-logo" 
        alt="QuantCraft" 
      />

      <div className="loading-bar-wrap">
        <p className="loading-phase">{phase}</p>
        <div className="loading-bar-outer">
          <div 
            className="loading-bar-fill" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <p className="loading-percentage">{progress}%</p>
      </div>

      <p className="loading-tip">
        <span className="tip-label">Did you know?</span> {tip}
      </p>
    </div>
  );
}
