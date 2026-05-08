"use client";

import { useEffect, useRef, useState } from "react";

interface BloodDrop {
  id: number;
  x: number;
  y: number;
  startTime: number;
}

/**
 * CustomCursor Component
 * Displays a Minecraft-themed sword cursor that shakes 2-3 times on hover
 * With pixelated blood drops from the top of the sword
 * Optimized for desktop and mobile (touch) devices
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [shakeAmount, setShakeAmount] = useState(0);
  const [bloodDrops, setBloodDrops] = useState<BloodDrop[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  
  const shakeCountRef = useRef(0);
  const shakeDirectionRef = useRef(1);
  const frameCountRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);

  // Detect mobile device on mount
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation loop - runs when isHovering changes
  useEffect(() => {
    if (!isHovering) {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      return;
    }

    // Reset animation state when starting
    shakeCountRef.current = 0;
    shakeDirectionRef.current = 1;
    frameCountRef.current = 0;

    const animateShake = () => {
      if (shakeCountRef.current >= 3) {
        setShakeAmount(0);
        setIsHovering(false);
        return;
      }

      frameCountRef.current++;

      // Shake animation - only 3 shakes
      setShakeAmount((prev) => {
        let newShake = prev + shakeDirectionRef.current * 6;
        if (newShake >= 8) {
          shakeDirectionRef.current = -1;
          newShake = 8;
          shakeCountRef.current += 0.5;
        } else if (newShake <= -8) {
          shakeDirectionRef.current = 1;
          newShake = -8;
          shakeCountRef.current += 0.5;
        }
        return newShake;
      });

      // Create blood drops at the start of each shake
      if (frameCountRef.current % 12 === 0 && shakeCountRef.current < 3) {
        const newDrop: BloodDrop = {
          id: Date.now() + Math.random(),
          x: Math.random() * 8 - 4, // Random horizontal offset
          y: -20, // Start from top of sword
          startTime: Date.now(),
        };
        setBloodDrops((prev) => [...prev, newDrop]);
      }

      animationFrameIdRef.current = requestAnimationFrame(animateShake);
    };

    animationFrameIdRef.current = requestAnimationFrame(animateShake);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isHovering]);

  // Mouse move handler (Desktop)
  useEffect(() => {
    if (isMobile) return;

    // Initialize cursor as visible
    if (cursorRef.current) {
      cursorRef.current.style.opacity = "1";
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Ensure cursor is visible when moving
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("hover-scale") ||
        target.classList.contains("cursor-pointer") ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']");

      if (isInteractive && !isHovering) {
        setIsHovering(true);
      } else if (!isInteractive && isHovering) {
        setIsHovering(false);
        setShakeAmount(0);
        setBloodDrops([]);
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
      setIsHovering(false);
      setShakeAmount(0);
      setBloodDrops([]);
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isHovering, isMobile]);

  // Clean up old blood drops
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setBloodDrops((prev) =>
        prev.filter((drop) => now - drop.startTime < 1200)
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hide default cursor on desktop only */}
      <style>{`
        ${!isMobile ? `
          * {
            cursor: none !important;
          }
        ` : ''}

        @keyframes swordGlow {
          0%, 100% {
            filter: drop-shadow(0 0 6px rgba(50, 235, 201, 0.8)) drop-shadow(0 0 12px rgba(220, 20, 60, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 14px rgba(50, 235, 201, 1)) drop-shadow(0 0 20px rgba(220, 20, 60, 0.6));
          }
        }

        .sword-cursor-active {
          animation: swordGlow 0.6s ease-in-out infinite;
        }

        @keyframes pixelBloodFall {
          0% {
            opacity: 1;
            transform: translateY(0px);
          }
          100% {
            opacity: 0;
            transform: translateY(60px);
          }
        }

        .pixel-blood-drop {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #cc0000;
          box-shadow: 
            1px 0 0 #ff3333,
            0 1px 0 #ff3333,
            1px 1px 0 #ff3333,
            0 0 0 1px #990000;
          animation: pixelBloodFall 1.2s ease-in forwards;
          image-rendering: pixelated;
        }
      `}</style>

      {/* Custom Cursor - Only render on desktop */}
      {!isMobile && (
        <div
          ref={cursorRef}
          className={`fixed pointer-events-none ${isHovering ? "sword-cursor-active" : ""}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `translate(-24px, -24px) translateX(${shakeAmount}px) scale(${
              isHovering ? "1.15" : "1"
            })`,
            transformOrigin: "center center",
            opacity: 1,
            width: "48px",
            height: "48px",
            transition: !isHovering ? "transform 0.3s ease-out" : "none",
            zIndex: 999999,
            position: "fixed",
          }}
        >
          {/* Blood Drops Container */}
          <div
            className="absolute inset-0"
            style={{
              width: "48px",
              height: "48px",
            }}
          >
            {bloodDrops.map((drop) => {
              const elapsed = Date.now() - drop.startTime;
              const progress = Math.min(elapsed / 1200, 1);

              return (
                <div
                  key={drop.id}
                  className="pixel-blood-drop"
                  style={{
                    left: `${24 + drop.x}px`,
                    top: `${24 + drop.y + progress * 60}px`,
                    opacity: 1 - progress,
                  }}
                />
              );
            })}
          </div>

          {/* Sword Cursor SVG */}
          <img
            src="/Cursor.svg"
            alt="Sword Cursor"
            width="48"
            height="48"
            style={{
              filter: isHovering
                ? "drop-shadow(0 0 12px rgba(50, 235, 201, 0.8)) drop-shadow(0 0 8px rgba(220, 20, 60, 0.6))"
                : "drop-shadow(0 0 6px rgba(50, 235, 201, 0.5))",
              imageRendering: "pixelated",
              width: "100%",
              height: "100%",
              transition: "filter 0.3s ease-out",
            }}
          />
        </div>
      )}
    </>
  );
}
