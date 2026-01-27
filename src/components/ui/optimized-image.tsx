import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean; // Above-the-fold images should have priority=true (no lazy loading)
  sizes?: string;
  className?: string;
  wrapperClassName?: string;
  aspectRatio?: string;
}

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Explicit width/height for CLS prevention
 * - Priority loading for above-the-fold images
 * - Lazy loading for below-the-fold images
 * - Intersection Observer for performance
 * - Smooth loading transitions
 * - Responsive sizes support
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes,
  className,
  wrapperClassName,
  aspectRatio,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Priority images are immediately "in view"
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Priority images don't need intersection observer
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const aspectStyle = aspectRatio
    ? { aspectRatio }
    : { aspectRatio: `${width}/${height}` };

  return (
    <div 
      className={cn("relative overflow-hidden", wrapperClassName)}
      style={aspectStyle}
    >
      {/* Placeholder skeleton */}
      <div
        className={cn(
          "absolute inset-0 bg-muted transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100 animate-pulse"
        )}
        aria-hidden="true"
      />
      
      {/* Actual image */}
      <img
        ref={imgRef}
        src={isInView ? src : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={cn(
          "transition-opacity duration-500 w-full h-full object-cover",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        {...props}
      />
    </div>
  );
}

/**
 * HeroImage Component
 * 
 * Specialized for above-the-fold hero images:
 * - No lazy loading (priority=true by default)
 * - High fetch priority
 * - Preload hint support
 */
export function HeroImage({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: Omit<OptimizedImageProps, 'priority'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={true}
      className={className}
      {...props}
    />
  );
}
