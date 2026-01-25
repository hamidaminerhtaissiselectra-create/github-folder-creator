import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { SEOHead, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { ItemListSchema, SpeakableSchema } from "@/components/seo/WebsiteSchema";
import { ArrowUpRight, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParallaxSection, FadeInSection } from "@/components/animations/ParallaxSection";
import realisationGalaDior from "@/assets/realisation-gala-dior.jpg";
import realisationBvlgariLaunch from "@/assets/realisation-bvlgari-launch.jpg";
import realisationGoogleConvention from "@/assets/realisation-google-convention.jpg";
import realisationFendiDinner from "@/assets/realisation-fendi-dinner.jpg";
import realisationAramcoSeminar from "@/assets/realisation-aramco-seminar.jpg";
import realisationChaumetGala from "@/assets/realisation-chaumet-gala.jpg";
import realisationG20Event from "@/assets/realisation-g20-event.jpg";
import realisationDisneylandEvent from "@/assets/realisation-disneyland-event.jpg";

const categories = ["Tous", "Salons", "Corporate", "International"];

const projects = [
  {
    id: 1,
    title: "Maison & Objet Paris",
    client: "Agence DECO+",
    category: "Salons",
    image: realisationGalaDior,
    description: "Montage et coordination de 15 stands pour l'agence DECO+ sur le salon Maison & Objet",
    year: "2024",
    location: "Paris Nord Villepinte",
    services: ["Montage", "Coordination", "Logistique"],
  },
  {
    id: 2,
    title: "SIAL Paris",
    client: "Groupe Alimentaire",
    category: "Salons",
    image: realisationBvlgariLaunch,
    description: "Installation complète d'un stand de 200m² avec espace dégustation",
    year: "2024",
    location: "Paris Nord Villepinte",
    services: ["Montage", "Technique", "Démontage"],
  },
  {
    id: 3,
    title: "Convention GOOGLE",
    client: "GOOGLE France",
    category: "Corporate",
    image: realisationGoogleConvention,
    description: "Support technique et logistique pour la convention annuelle",
    year: "2024",
    location: "Paris La Défense",
    services: ["Support technique", "Coordination"],
  },
  {
    id: 4,
    title: "Sirha Lyon",
    client: "Fédération Restauration",
    category: "Salons",
    image: realisationFendiDinner,
    description: "Gestion de 8 espaces d'exposition sur le salon international de la restauration",
    year: "2023",
    location: "Eurexpo Lyon",
    services: ["Montage", "Logistique", "Démontage"],
  },
  {
    id: 5,
    title: "Arabian Travel Market",
    client: "Office Tourisme France",
    category: "International",
    image: realisationAramcoSeminar,
    description: "Coordination du pavillon France sur le salon ATM à Dubaï",
    year: "2023",
    location: "Dubaï, UAE",
    services: ["International", "Coordination", "Logistique"],
  },
  {
    id: 6,
    title: "Première Vision",
    client: "Maison de Mode",
    category: "Salons",
    image: realisationChaumetGala,
    description: "Installation et habillage du stand sur le salon du textile",
    year: "2023",
    location: "Paris Nord Villepinte",
    services: ["Montage", "Habillage", "Démontage"],
  },
  {
    id: 7,
    title: "ITB Berlin",
    client: "Cluster Tourisme",
    category: "International",
    image: realisationG20Event,
    description: "Support logistique pour le salon du tourisme à Berlin",
    year: "2023",
    location: "Berlin, Allemagne",
    services: ["International", "Transport", "Support"],
  },
  {
    id: 8,
    title: "Global Industrie",
    client: "ETI Industrielle",
    category: "Salons",
    image: realisationDisneylandEvent,
    description: "Montage d'un stand technique avec démonstrations machines",
    year: "2023",
    location: "Eurexpo Lyon",
    services: ["Montage technique", "Coordination", "Sécurité"],
  },
];

const allClients = [
  "LVMH", "L'Oréal", "Accor", "Air France", "Renault", 
  "Orange", "BNP Paribas", "Carrefour", "Danone", "Total"
];

const realisationsBreadcrumbs = [
  { name: "Accueil", url: "https://baattitude.fr/" },
  { name: "Réalisations", url: "https://baattitude.fr/realisations" },
];

export default function Realisations() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "Tous" || project.category === activeCategory
  );

  // Projects for ItemList schema
  const projectsSchemaData = projects.map(project => ({
    name: `${project.title} - ${project.client}`,
    url: `https://baattitude.fr/realisations/${project.id}`,
    description: project.description
  }));

  return (
    <Layout>
      <SEOHead
        title="Nos Réalisations | Salons Professionnels & Événements B2B - BA ATTITUDE"
        description="Découvrez nos projets événementiels : Maison & Objet, SIAL Paris, ITB Berlin... +500 salons professionnels réalisés en France et à l'international."
        canonical="https://baattitude.fr/realisations"
        ogUrl="https://baattitude.fr/realisations"
        ogType="website"
      />
      <BreadcrumbSchema items={realisationsBreadcrumbs} />
      <ItemListSchema
        name="Réalisations BA ATTITUDE"
        description="Portfolio de nos interventions sur salons professionnels et événements B2B"
        items={projectsSchemaData}
      />
      <SpeakableSchema 
        cssSelector={[
          "h1",
          "h2",
          "h3",
          ".text-muted-foreground"
        ]}
      />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              Nos Références
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Nos <span className="text-gradient-gold">réalisations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Découvrez une sélection de nos interventions sur les salons professionnels 
              et événements B2B en France et à l'international.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projets réalisés" },
              { value: "30+", label: "Pays d'intervention" },
              { value: "100+", label: "Clients actifs" },
              { value: "15", label: "Années d'expérience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <ParallaxSection className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="relative">
                <img
                  src={realisationGalaDior}
                  alt="Projet en vedette"
                  className="w-full rounded-lg"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Projet en vedette
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
                Maison & Objet 2024
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
                Coordination de 15 stands pour l'agence DECO+
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                BA Attitude a assuré la coordination complète de 15 stands pour l'agence DECO+ 
                sur l'édition 2024 de Maison & Objet. Un défi logistique relevé avec succès grâce 
                à notre expertise et notre équipe dédiée.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Montage", "Coordination", "Logistique", "Démontage"].map((service) => (
                  <span key={service} className="px-3 py-1 bg-card border border-border text-muted-foreground text-sm rounded-full">
                    {service}
                  </span>
                ))}
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-card-foreground italic mb-4">
                  "Une coordination parfaite malgré la complexité du projet. BA Attitude a su gérer 
                  les imprévus avec professionnalisme."
                </p>
                <p className="text-sm text-muted-foreground">— Responsable Projets, Agence DECO+</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      {/* Filters */}
      <section className="py-8 bg-background border-y border-border sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-card-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/realisations/${project.id}`}
                    className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-background/80 text-card-foreground text-xs font-medium rounded-full">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm text-primary mb-1">{project.client}</p>
                          <h3 className="text-xl font-display font-semibold text-card-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                            {project.description}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            📍 {project.location}
                          </p>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.services.slice(0, 3).map((service) => (
                          <span key={service} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
              Ils nous font confiance
            </span>
            <h3 className="text-2xl font-display font-bold text-card-foreground mb-8">
              Des entreprises <span className="text-gradient-gold">de référence</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xl md:text-2xl font-display text-muted-foreground/50">
              {allClients.map((client) => (
                <span key={client} className="hover:text-primary transition-colors cursor-default">
                  {client}
                </span>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-4">
              Votre projet sera le prochain ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre prochain salon ou événement professionnel.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Démarrer un projet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
}