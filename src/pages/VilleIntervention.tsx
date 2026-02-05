import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle, Building2, Calendar, Users, Phone, Briefcase, Star, ChevronRight } from "lucide-react";
import { ParallaxSection, FadeInSection } from "@/components/animations/ParallaxSection";
import { SEOHead, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from "@/components/seo/StructuredData";
import { SpeakableSchema } from "@/components/seo/WebsiteSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getVilleById, grandesVilles, getVillesByRegion, GrandeVille } from "@/data/grandes-villes";
import heroImage from "@/assets/hero-event.jpg";

// Breadcrumbs visuels
const VisualBreadcrumbs = ({ items }: { items: { label: string; href?: string }[] }) => (
  <nav aria-label="Breadcrumb" className="mb-6">
    <ol className="flex flex-wrap items-center gap-2 text-sm">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
          {item.href ? (
            <Link 
              to={item.href} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-primary font-medium">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default function VilleIntervention() {
  const { villeId } = useParams();
  const ville = getVilleById(villeId || "");

  if (!ville) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-card-foreground mb-4">Ville non trouvée</h1>
            <Button variant="gold" asChild>
              <Link to="/zones-intervention">Voir toutes les zones</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Obtenir les autres villes de la même région pour le maillage interne
  const villesProximite = getVillesByRegion(ville.region)
    .filter(v => v.id !== ville.id)
    .slice(0, 5);

  // Stats génériques basées sur la ville
  const stats = [
    { value: `${Math.floor(ville.population / 10000)}+`, label: "Événements potentiels" },
    { value: "48h", label: "Délai mobilisation" },
    { value: "15+", label: "Ans d'expérience" },
    { value: "98%", label: "Satisfaction client" },
  ];

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Zones d'intervention", href: "/zones-intervention" },
    { label: ville.region, href: "/zones-intervention" },
    { label: ville.nom }
  ];

  return (
    <Layout>
      <SEOHead
        title={`Montage de stands à ${ville.nom} | BA Attitude`}
        description={ville.metaDescription}
        canonical={`https://baattitude.fr/ville/${ville.id}`}
        ogUrl={`https://baattitude.fr/ville/${ville.id}`}
        ogType="website"
      />
      <LocalBusinessSchema 
        areaServed={[ville.nom, ville.departement, ville.region, "France"]}
        serviceType={["Montage de stands", "Démontage de stands", "Logistique événementielle", ...ville.secteursActivite]}
      />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://baattitude.fr" },
        { name: "Zones d'intervention", url: "https://baattitude.fr/zones-intervention" },
        { name: ville.region, url: "https://baattitude.fr/zones-intervention" },
        { name: ville.nom, url: `https://baattitude.fr/ville/${ville.id}` }
      ]} />
      <FAQSchema faqs={ville.faqs} />
      <SpeakableSchema 
        cssSelector={[
          "h1",
          "h2",
          ".text-muted-foreground"
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`Prestations événementielles à ${ville.nom}`}
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <VisualBreadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                {ville.region} • {ville.departement} ({ville.codeDepartement})
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Salons professionnels à <span className="text-gradient-gold">{ville.nom}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              {ville.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Demander un devis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+33601591920">
                  <Phone className="w-4 h-4 mr-2" />
                  06 01 59 19 20
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sites & Événements */}
      <ParallaxSection className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Sites d'exposition */}
            <FadeInSection>
              <div className="bg-card border border-border rounded-lg p-8 h-full">
                <Building2 className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-2xl font-display font-bold text-card-foreground mb-6">
                  Lieux d'intervention à {ville.nom}
                </h2>
                <ul className="space-y-4">
                  {ville.siteExposition && (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <Star className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground font-semibold">{ville.siteExposition}</span>
                    </motion.li>
                  )}
                  {ville.centreConvention && (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{ville.centreConvention}</span>
                    </motion.li>
                  )}
                  {ville.evenementsMajeurs.slice(0, 4).map((event, index) => (
                    <motion.li
                      key={event}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 2) * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{event}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInSection>

            {/* Salons phares */}
            <FadeInSection delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-8 h-full">
                <Calendar className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-2xl font-display font-bold text-card-foreground mb-6">
                  Salons phares à {ville.nom}
                </h2>
                <ul className="space-y-4">
                  {ville.salonsPhares.map((salon, index) => (
                    <motion.li
                      key={salon}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{salon}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      {/* Secteurs d'activité */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Secteurs couverts
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-card-foreground">
              Expertise sectorielle à <span className="text-gradient-gold">{ville.nom}</span>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ville.secteursActivite.map((secteur, index) => (
              <FadeInSection key={secteur} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors">
                  <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-display font-semibold text-card-foreground">
                    {secteur}
                  </h3>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Spécificités locales */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground">
                Nos atouts à {ville.nom}
              </h2>
            </FadeInSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ville.specificites.map((spec, index) => (
                <FadeInSection key={index} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-lg p-6 h-full">
                    <CheckCircle className="w-8 h-8 text-primary mb-4" />
                    <p className="text-card-foreground">{spec}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Nos prestations
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-card-foreground">
              Services à <span className="text-gradient-gold">{ville.nom}</span>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Montage de stands", desc: "Installation complète de votre stand d'exposition" },
              { title: "Démontage", desc: "Démontage soigné et évacuation des matériaux" },
              { title: "Logistique", desc: "Transport et stockage de vos équipements" },
              { title: "Coordination", desc: "Gestion terrain et interface avec les organisateurs" },
            ].map((service, index) => (
              <FadeInSection key={service.title} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/30 transition-colors">
                  <h3 className="text-lg font-display font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ locale */}
      {ville.faqs.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInSection className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground">
                  Questions fréquentes sur {ville.nom}
                </h2>
              </FadeInSection>
              
              <FadeInSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-4">
                  {ville.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
                    >
                      <AccordionTrigger className="text-left text-card-foreground hover:text-primary font-medium py-6 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeInSection>
            </div>
          </div>
        </section>
      )}

      {/* Maillage interne - Villes de la région */}
      {villesProximite.length > 0 && (
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <FadeInSection className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-display font-bold text-card-foreground">
                Également présents en {ville.region}
              </h2>
            </FadeInSection>
            <FadeInSection className="flex flex-wrap justify-center gap-4">
              {villesProximite.map((v) => (
                <Link
                  key={v.id}
                  to={`/ville/${v.id}`}
                  className="px-6 py-3 bg-card border border-border rounded-full text-card-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {v.nom}
                </Link>
              ))}
            </FadeInSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
              Un salon à {ville.nom} ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour obtenir un devis personnalisé pour votre prochain événement 
              en {ville.region}.
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
    </Layout>
  );
}
