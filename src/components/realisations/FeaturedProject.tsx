import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-event.jpg";

export function FeaturedProject() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Gala événementiel DIOR Paris - Décoration luxe Palais de Tokyo par BA ATTITUDE"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary rounded-lg -z-10" />
            
            {/* Badge */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
              Projet Vedette
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Gala Annuel DIOR
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
              Une soirée d'exception pour la maison <span className="text-gradient-gold">DIOR</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Pour le gala annuel de la maison DIOR, nous avons conçu un décor féerique 
              inspiré des jardins de Versailles. Plus de 5000 fleurs fraîches, des installations 
              lumineuses sur mesure et une scénographie immersive ont transformé le Palais de Tokyo 
              en un écrin de luxe.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-2xl font-display font-bold text-primary">800</div>
                <div className="text-sm text-muted-foreground">Invités</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-primary">5000</div>
                <div className="text-sm text-muted-foreground">Fleurs</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Espaces</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-muted border border-border rounded-lg p-6 mb-8">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-card-foreground italic mb-4">
                "BA Attitude a su capturer l'essence de notre maison et la traduire 
                en une expérience visuelle exceptionnelle. Un travail remarquable."
              </p>
              <div className="text-sm">
                <span className="text-card-foreground font-semibold">Sophie Marchand</span>
                <span className="text-muted-foreground"> — Directrice Events DIOR</span>
              </div>
            </div>

            <Button variant="gold" asChild>
              <Link to="/realisations/1">
                Voir le projet complet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
