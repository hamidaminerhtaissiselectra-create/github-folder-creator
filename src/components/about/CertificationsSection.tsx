import { motion } from "framer-motion";
import { Award, Leaf, Shield, Star } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "Assurance RC Pro",
    description: "Couverture complète pour tous vos événements",
  },
  {
    icon: Leaf,
    title: "Engagement RSE",
    description: "Démarche éco-responsable dans nos productions",
  },
  {
    icon: Award,
    title: "Référencé SYNPASE",
    description: "Syndicat professionnel de l'événement",
  },
  {
    icon: Star,
    title: "Certification Qualité",
    description: "Processus qualité certifié ISO 9001",
  },
];

export function CertificationsSection() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12"
        >
          Nos Certifications & Engagements
        </motion.h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <cert.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-1">
                {cert.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
