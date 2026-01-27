import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import montageStandParis from "@/assets/montage-stand-salon-paris.jpg";
import supportTechnique from "@/assets/support-technique-evenement.jpg";
import logistiqueEvenementielle from "@/assets/logistique-evenementielle-chargement.jpg";
import scenographie from "@/assets/scenographie-stand-premium.jpg";
import salonProfessionnel from "@/assets/salon-professionnel-vue-ensemble.jpg";
import evenementInternational from "@/assets/evenement-international-conference.jpg";

const services = [
  {
    title: "Salons Professionnels",
    description: "Montage, démontage et coordination terrain pour vos participations aux salons et foires B2B.",
    image: salonProfessionnel,
    imageAlt: "Vue d'ensemble d'un salon professionnel B2B en France",
    href: "/services/salons-professionnels",
  },
  {
    title: "Montage & Démontage",
    description: "Installation professionnelle de vos stands d'exposition par des équipes qualifiées.",
    image: montageStandParis,
    imageAlt: "Équipe de montage de stand lors d'un salon à Paris",
    href: "/services/montage-demontage",
  },
  {
    title: "Support Technique",
    description: "Accompagnement technique complet pour congrès, conventions et événements B2B.",
    image: supportTechnique,
    imageAlt: "Technicien effectuant le support technique sur un stand d'exposition",
    href: "/services/support-technique",
  },
  {
    title: "Logistique Événementielle",
    description: "Transport, stockage et manutention pour tous vos événements professionnels.",
    image: logistiqueEvenementielle,
    imageAlt: "Équipe logistique chargeant du matériel d'exposition",
    href: "/services/logistique-coordination",
  },
  {
    title: "Scénographie",
    description: "Conception et réalisation d'espaces scénographiques premium pour vos événements.",
    image: scenographie,
    imageAlt: "Stand scénographique premium avec éclairage design",
    href: "/services/scenographie",
  },
  {
    title: "International",
    description: "Accompagnement de vos projets événementiels partout dans le monde.",
    image: evenementInternational,
    imageAlt: "Conférence internationale avec stands et visiteurs",
    href: "/services/international",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements - Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" aria-hidden="true" role="presentation" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            Nos Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-display font-bold text-card-foreground mb-6"
          >
            Prestations <span className="text-gradient-gold">sur mesure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-muted-foreground text-lg"
          >
            De la conception à la mise en œuvre opérationnelle, nous vous accompagnons 
            sur vos salons et événements professionnels en France et à l'international.
          </motion.p>
        </div>

        {/* Services Grid - 6 services en 2 rangées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
            >
              <Link
                to={service.href}
                className="group block relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                {/* Image with explicit dimensions */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width={640}
                    height={480}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            Voir tous nos services
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
