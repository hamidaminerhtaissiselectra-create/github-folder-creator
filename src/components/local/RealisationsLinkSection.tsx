import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/animations/ParallaxSection";

export function RealisationsLinkSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <FadeInSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
            Nos réalisations
          </h2>
          <p className="text-muted-foreground mb-6">
            Découvrez nos projets récents pour des clients prestigieux : LVMH, Google, Dior, G20...
          </p>
          <Button variant="outline" asChild>
            <Link to="/realisations">
              Voir nos réalisations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </FadeInSection>
      </div>
    </section>
  );
}
