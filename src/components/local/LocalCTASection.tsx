import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/animations/ParallaxSection";

interface LocalCTASectionProps {
  locationName: string;
  regionName?: string;
}

export function LocalCTASection({ locationName, regionName }: LocalCTASectionProps) {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
            Un salon à {locationName} ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez notre équipe pour obtenir un devis personnalisé pour votre prochain événement
            {regionName ? ` en ${regionName}` : ""}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/faq">
                Consulter la FAQ
              </Link>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
