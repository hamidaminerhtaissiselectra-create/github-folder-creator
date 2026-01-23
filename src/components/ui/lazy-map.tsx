import { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

interface LazyMapProps {
  src: string;
  title: string;
  className?: string;
}

export function LazyMap({ src, title, className = "" }: LazyMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary/50 mx-auto mb-2" />
            <p className="text-muted-foreground text-sm">
              {isInView ? "Chargement de la carte..." : "Faire défiler pour charger la carte"}
            </p>
          </div>
        </div>
      )}

      {/* Iframe - only render when in view */}
      {isInView && (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}
