import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Béatrice Allouche",
    role: "Fondatrice & Directrice Artistique",
    description: "15 ans d'expérience dans la décoration événementielle haut de gamme. Passionnée par la création d'univers uniques.",
    initials: "BA",
  },
  {
    name: "Alexandre Martin",
    role: "Directeur de Production",
    description: "Expert en logistique événementielle, il coordonne toutes les opérations pour garantir une exécution parfaite.",
    initials: "AM",
  },
  {
    name: "Sophie Laurent",
    role: "Chef de Projet Senior",
    description: "Spécialiste des événements corporate et luxe, elle accompagne nos clients les plus exigeants.",
    initials: "SL",
  },
  {
    name: "Thomas Dubois",
    role: "Responsable Atelier",
    description: "Artisan d'exception, il supervise la fabrication de tous nos décors sur mesure.",
    initials: "TD",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
          >
            Notre Équipe
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-card-foreground mb-6"
          >
            Des experts <span className="text-gradient-gold">passionnés</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Une équipe pluridisciplinaire au service de vos projets les plus ambitieux.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                  <span className="text-2xl font-display font-bold text-primary">
                    {member.initials}
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold text-card-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {member.description}
                </p>

                <div className="flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
