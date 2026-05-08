"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "scale-down";
  objectPosition?: string;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onLoad?: () => void;
}

/**
 * OptimizedImage Component
 * Wraps Next.js Image component with:
 * - Automatic format optimization (WebP, AVIF)
 * - Responsive sizing
 * - Lazy loading by default
 * - Blur placeholder support
 * - Error handling
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  objectFit = "cover",
  objectPosition = "center",
  quality = 75,
  placeholder = "empty",
  blurDataURL,
  onLoad,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Fallback to regular img tag for non-optimizable images
  if (src.includes(".gif") || src.includes(".svg")) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        onLoad={onLoad}
      />
    );
  }

  return (
    <div className={`relative ${fill ? "w-full h-full" : ""}`}>
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : (width || 1200)}
          height={fill ? undefined : (height || 800)}
          fill={fill}
          className={`${className} ${isLoading ? "blur-sm" : "blur-0"} transition-all duration-300`}
          priority={priority}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoadingComplete={() => {
            setIsLoading(false);
            onLoad?.();
          }}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          style={{
            objectFit,
            objectPosition,
          }}
        />
      ) : (
        // Fallback to regular img if Next.js Image fails
        <img
          src={src}
          alt={alt}
          className={className}
          loading={priority ? "eager" : "lazy"}
          style={{
            objectFit,
            objectPosition,
          }}
        />
      )}
    </div>
  );
}
