import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/animations/ParallaxSection";

interface ServiceLink {
  title: string;
  desc: string;
  link: string;
}

interface ServiceLinksSectionProps {
  locationName: string;
  services?: ServiceLink[];
}

const defaultServices: ServiceLink[] = [
  { 
    title: "Montage de stands", 
    desc: "Installation complète de votre stand d'exposition", 
    link: "/services/montage-demontage" 
  },
  { 
    title: "Support technique", 
    desc: "Assistance 24/7 pendant vos événements", 
    link: "/services/support-technique" 
  },
  { 
    title: "Logistique", 
    desc: "Transport et stockage de vos équipements", 
    link: "/services/logistique-coordination" 
  },
  { 
    title: "Scénographie", 
    desc: "Conception de décors sur mesure", 
    link: "/services/scenographie-stands" 
  },
];

export function ServiceLinksSection({ 
  locationName, 
  services = defaultServices 
}: ServiceLinksSectionProps) {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Nos prestations
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-card-foreground">
            Services à <span className="text-gradient-gold">{locationName}</span>
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeInSection key={service.title} delay={index * 0.1}>
              <Link 
                to={service.link}
                className="block bg-card border border-border rounded-lg p-6 h-full hover:border-primary/30 hover:shadow-gold transition-all group"
              >
                <h3 className="text-lg font-display font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
                <span className="text-primary text-sm mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link to="/services">
              Découvrir tous nos services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </FadeInSection>
      </div>
    </section>
  );
}
