"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  alt?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
}

/**
 * LazyVideo Component
 * Lazy loads video elements using Intersection Observer API
 * Improves performance by deferring video loading until visible
 */
export default function LazyVideo({
  src,
  poster,
  alt = "Video",
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "50px", // Start loading 50px before entering viewport
        threshold: 0.01,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay={isVisible && autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      controls={controls}
      onLoadedData={() => setIsLoaded(true)}
      preload={isVisible ? "auto" : "none"}
    >
      {isVisible && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}
