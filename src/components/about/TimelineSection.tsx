import { motion } from "framer-motion";

const milestones = [
  {
    year: "2008",
    title: "Création de BA Attitude",
    description: "Lancement de l'entreprise avec une vision claire : proposer des prestations de décoration événementielle haut de gamme.",
  },
  {
    year: "2012",
    title: "Premier projet international",
    description: "Expansion à l'international avec notre premier projet à Dubaï pour une grande marque de luxe française.",
  },
  {
    year: "2015",
    title: "Agrandissement de l'atelier",
    description: "Déménagement dans nos nouveaux locaux de 800m² à Pontault-Combault avec un atelier de fabrication intégré.",
  },
  {
    year: "2018",
    title: "Partenariat agences majeures",
    description: "Développement de partenariats stratégiques avec les plus grandes agences événementielles françaises.",
  },
  {
    year: "2020",
    title: "Adaptation & Innovation",
    description: "Développement de nouvelles offres hybrides et digitales pour accompagner nos clients dans leur transformation.",
  },
  {
    year: "2023",
    title: "500+ événements",
    description: "Franchissement du cap des 500 événements réalisés avec une présence dans 12 pays.",
  },
];

export function TimelineSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
          >
            Notre Parcours
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-card-foreground"
          >
            15 ans d'<span className="text-gradient-gold">histoire</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}>
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <span className="text-3xl font-display font-bold text-primary mb-2 block">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-display font-semibold text-card-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-background" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
