import { motion, useScroll, useTransform } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { SEOHead, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { ItemListSchema, HowToSchema, SpeakableSchema } from "@/components/seo/WebsiteSchema";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import salonMontage from "@/assets/salon-montage-lyon-professionnel.jpg";
import equipeMontageStand from "@/assets/equipe-montage-stand.jpg";
import logistiqueEntrepot from "@/assets/logistique-entrepot.jpg";
import standLuxe from "@/assets/stand-luxe-scenographie.jpg";
import supportTechniqueRegie from "@/assets/support-technique-regie.jpg";
import conferenceInternationale from "@/assets/conference-internationale.jpg";
import { FAQSection } from "@/components/home/FAQSection";

// FAQ data for structured data
const servicesFaqs = [
  { question: "Quels types de stands montez-vous ?", answer: "Nous intervenons sur tous types de stands : modulaires (Octanorm, Maxima, Aluvision), sur mesure en bois ou métal, parapluie. De 9m² à plusieurs centaines de m²." },
  { question: "Dans quels délais pouvez-vous intervenir ?", answer: "24 à 48h en Île-de-France, 72h sur le reste de la France. Équipes de remplacement disponibles en urgence." },
  { question: "Proposez-vous des forfaits tout compris ?", answer: "Oui, nous proposons des forfaits incluant montage, maintenance événement, démontage et évacuation." },
  { question: "Intervenez-vous à l'international ?", answer: "Oui, nous accompagnons nos clients dans plus de 30 pays avec notre réseau de partenaires locaux." }
];

// Services for ItemList schema
const servicesSchemaData = [
  { name: "Salons Professionnels", url: "https://baattitude.fr/services/salons-professionnels", description: "Montage et coordination de stands" },
  { name: "Support Technique", url: "https://baattitude.fr/services/support-technique", description: "Assistance technique 24/7" },
  { name: "Montage & Démontage", url: "https://baattitude.fr/services/montage-demontage", description: "Installation professionnelle" },
  { name: "Logistique & Coordination", url: "https://baattitude.fr/services/logistique-coordination", description: "Transport et manutention" },
  { name: "Scénographie Stands", url: "https://baattitude.fr/services/scenographie-stands", description: "Design sur mesure" },
  { name: "International", url: "https://baattitude.fr/services/international", description: "Coordination multi-pays" }
];

// Methodology steps for HowTo schema  
const methodologySteps = [
  { name: "Étude & Devis", text: "Analyse de votre cahier des charges, visite technique du site si nécessaire, établissement d'un devis détaillé." },
  { name: "Planification", text: "Définition du planning d'intervention, coordination avec les organisateurs et autres prestataires." },
  { name: "Installation", text: "Montage par nos équipes qualifiées dans le respect des délais et des normes de sécurité." },
  { name: "Démontage", text: "Repli soigné après l'événement, évacuation du matériel et remise en état des lieux." }
];

const services = [
  {
    id: "salons-professionnels",
    title: "Salons Professionnels",
    description: "Expertise complète pour vos participations aux salons, foires et expositions. Montage, démontage et coordination sur site.",
    image: salonMontage,
    features: ["Montage de stands", "Coordination terrain", "Gestion logistique"],
  },
  {
    id: "support-technique",
    title: "Support Technique Événementiel",
    description: "Accompagnement technique complet pour tous types d'événements B2B : congrès, conventions, forums professionnels.",
    image: supportTechniqueRegie,
    features: ["Assistance technique", "Coordination équipes", "Support 24/7"],
  },
  {
    id: "montage-demontage",
    title: "Montage & Démontage",
    description: "Équipes expertes pour le montage et démontage de stands, décors et installations événementielles dans les délais impartis.",
    image: equipeMontageStand,
    features: ["Équipes qualifiées", "Respect des délais", "Normes de sécurité"],
  },
  {
    id: "logistique-coordination",
    title: "Logistique & Coordination",
    description: "Gestion complète de la logistique événementielle : transport, stockage, manutention et coordination terrain.",
    image: logistiqueEntrepot,
    features: ["Transport sécurisé", "Stockage", "Manutention"],
  },
  {
    id: "scenographie-stands",
    title: "Scénographie de Stands",
    description: "Conception et réalisation de décors et scénographies sur mesure pour valoriser votre présence sur les salons.",
    image: standLuxe,
    features: ["Design sur mesure", "Fabrication", "Installation"],
  },
  {
    id: "international",
    title: "Prestations Internationales",
    description: "Déploiement de nos services à l'international avec la même qualité d'exécution. Coordination multi-pays et expertise export.",
    image: conferenceInternationale,
    features: ["12+ pays couverts", "Coordination globale", "Expertise export"],
  },
];

const advantages = [
  "Un interlocuteur unique du brief au démontage",
  "Réactivité et flexibilité 24/7",
  "Équipes formées aux normes de sécurité",
  "Présence France et international",
  "15 ans d'expérience en événementiel B2B",
  "Références prestigieuses (G20, grands salons)",
];

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      <SEOHead 
        title="Nos Services | Prestations Techniques Événementielles | BA Attitude"
        description="Découvrez nos services de prestations techniques pour salons professionnels : montage de stands, logistique événementielle, support technique, scénographie. Intervention France et international."
        canonical="https://baattitude.fr/services"
        ogUrl="https://baattitude.fr/services"
        ogType="website"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://baattitude.fr" },
          { name: "Nos Services", url: "https://baattitude.fr/services" }
        ]} 
      />
      <FAQSchema faqs={servicesFaqs} />
      <ItemListSchema 
        name="Services BA ATTITUDE"
        description="Prestations techniques complètes pour salons professionnels et événements B2B"
        items={servicesSchemaData}
      />
      <HowToSchema
        name="Méthodologie d'intervention BA ATTITUDE"
        description="Notre processus en 4 étapes pour réussir votre salon professionnel"
        steps={methodologySteps}
        totalTime="P2W"
      />
      <SpeakableSchema 
        cssSelector={[
          "h1",
          "h2",
          ".text-muted-foreground",
          ".text-xl"
        ]}
      />

      {/* Breadcrumb UI */}
      <section className="pt-28 pb-4 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Nos Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero */}
      <section ref={heroRef} className="pt-8 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <motion.div style={{ opacity }} className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              Nos Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Prestations techniques <span className="text-gradient-gold">événementielles</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Spécialiste des salons professionnels, foires et événements B2B.
              Du montage au démontage, nous assurons la coordination terrain de vos projets.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Advantages */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{advantage}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group block h-full bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-display font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-muted text-xs text-muted-foreground rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
            >
              Notre Méthodologie
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-card-foreground"
            >
              Comment nous <span className="text-gradient-gold">intervenons</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Étude & Devis", description: "Analyse de votre cahier des charges, visite technique du site si nécessaire, établissement d'un devis détaillé." },
              { step: "02", title: "Planification", description: "Définition du planning d'intervention, coordination avec les organisateurs et autres prestataires." },
              { step: "03", title: "Installation", description: "Montage par nos équipes qualifiées dans le respect des délais et des normes de sécurité." },
              { step: "04", title: "Démontage", description: "Repli soigné après l'événement, évacuation du matériel et remise en état des lieux." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center relative"
              >
                <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-card-foreground mb-4"
            >
              Zones d'<span className="text-gradient-gold">intervention</span>
            </motion.h2>
            <p className="text-muted-foreground">
              Nous intervenons sur l'ensemble du territoire français et à l'international.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {["Paris & Île-de-France", "Lyon", "Marseille", "Bordeaux", "Nice", "Strasbourg", "Lille", "Nantes", "Toulouse", "Monaco", "Genève", "Bruxelles"].map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-3 bg-muted rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-sm font-medium text-card-foreground">{city}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-4"
          >
            Un salon ou événement à préparer ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Contactez-nous pour une étude personnalisée et un devis adapté à vos besoins.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
