import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { FadeInSection } from "@/components/animations/ParallaxSection";

interface NearbyLocation {
  id: string;
  name: string;
  path: string; // e.g., "/ville/", "/paris/", "/banlieue/"
}

interface NearbyLocationsSectionProps {
  title: string;
  locations: NearbyLocation[];
  allZonesLink?: string;
  allZonesLabel?: string;
}

export function NearbyLocationsSection({ 
  title, 
  locations, 
  allZonesLink = "/zones-intervention",
  allZonesLabel = "Voir toutes nos zones d'intervention"
}: NearbyLocationsSectionProps) {
  if (locations.length === 0) return null;

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <FadeInSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-card-foreground">
            {title}
          </h2>
        </FadeInSection>
        
        <FadeInSection className="flex flex-wrap justify-center gap-4">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              to={`${loc.path}${loc.id}`}
              className="px-6 py-3 bg-card border border-border rounded-full text-card-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              {loc.name}
            </Link>
          ))}
        </FadeInSection>

        <FadeInSection className="text-center mt-8">
          <Link 
            to={allZonesLink} 
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            {allZonesLabel} <ChevronRight className="w-4 h-4" />
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
}
