import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle, Building2, Calendar, Users, Phone, Navigation, Globe, ChevronRight, Home } from "lucide-react";
import { ParallaxSection, FadeInSection } from "@/components/animations/ParallaxSection";
import { SEOHead, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { SpeakableSchema, ItemListSchema } from "@/components/seo/WebsiteSchema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { parisArrondissements, arrondissementsList } from "@/data/paris-arrondissements";
import { parisBanlieue, allBanlieueList } from "@/data/paris-banlieue";
import heroImage from "@/assets/hero-salon-panoramique.jpg";

// Composant Breadcrumbs visuel
function VisualBreadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />}
            {item.href ? (
              <Link 
                to={item.href} 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                {index === 0 && <Home className="w-4 h-4" />}
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
}

// Schema LocalBusiness spécifique arrondissement
function ArrondissementLocalBusinessSchema({ 
  arrondissement 
}: { 
  arrondissement: typeof parisArrondissements[string] 
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `https://baattitude.fr/paris/${arrondissement.id}/#localbusiness`,
    name: `BA ATTITUDE - ${arrondissement.name}`,
    description: arrondissement.description,
    url: `https://baattitude.fr/paris/${arrondissement.id}`,
    telephone: "+33601591920",
    email: "contact@baattitude.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "16 Rue des Pendants",
      addressLocality: "Pontault-Combault",
      postalCode: "77340",
      addressRegion: "Île-de-France",
      addressCountry: "FR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: arrondissement.geo.latitude,
      longitude: arrondissement.geo.longitude
    },
    areaServed: [
      {
        "@type": "Place",
        name: arrondissement.fullName,
        address: {
          "@type": "PostalAddress",
          postalCode: arrondissement.postalCode,
          addressLocality: "Paris",
          addressCountry: "FR"
        }
      },
      ...arrondissement.neighboringArrondissements.map(arr => ({
        "@type": "Place",
        name: `Paris ${arr}`
      }))
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services BA ATTITUDE ${arrondissement.name}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Montage de stands",
            description: `Installation de stands d'exposition dans le ${arrondissement.name}`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Démontage de stands",
            description: `Démontage et évacuation de stands dans le ${arrondissement.name}`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Logistique événementielle",
            description: `Transport et coordination pour événements ${arrondissement.name}`
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "127",
      bestRating: "5"
    },
    sameAs: [
      "https://www.linkedin.com/company/ba-attitude",
      "https://www.instagram.com/baattitude.events"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ParisArrondissement() {
  const { arrondissementId } = useParams();
  const arrondissement = parisArrondissements[arrondissementId || ""];

  if (!arrondissement) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-card-foreground mb-4">Arrondissement non trouvé</h1>
            <Button variant="gold" asChild>
              <Link to="/zones-intervention">Voir toutes les zones</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Navigation arrondissements
  const currentIndex = arrondissementsList.indexOf(arrondissement.id);
  const prevArrondissement = currentIndex > 0 ? arrondissementsList[currentIndex - 1] : null;
  const nextArrondissement = currentIndex < arrondissementsList.length - 1 ? arrondissementsList[currentIndex + 1] : null;

  return (
    <Layout>
      {/* SEO complet */}
      <SEOHead
        title={`${arrondissement.title} | BA ATTITUDE`}
        description={arrondissement.metaDescription}
        canonical={`https://baattitude.fr/paris/${arrondissement.id}`}
        ogUrl={`https://baattitude.fr/paris/${arrondissement.id}`}
        ogType="website"
        ogImage="https://baattitude.fr/og-zones.jpg"
      />
      
      <ArrondissementLocalBusinessSchema arrondissement={arrondissement} />
      
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://baattitude.fr" },
        { name: "Zones d'intervention", url: "https://baattitude.fr/zones-intervention" },
        { name: "Paris", url: "https://baattitude.fr/zones/paris" },
        { name: arrondissement.name, url: `https://baattitude.fr/paris/${arrondissement.id}` }
      ]} />
      
      <FAQSchema faqs={arrondissement.faqs} />
      
      <SpeakableSchema cssSelector={["h1", "h2", ".description-text", ".faq-answer"]} />
      
      <ItemListSchema 
        name={`Lieux d'intervention ${arrondissement.name}`}
        description={`Sites événementiels où BA ATTITUDE intervient dans le ${arrondissement.name}`}
        items={arrondissement.venues.map(venue => ({
          name: venue,
          url: `https://baattitude.fr/paris/${arrondissement.id}`,
          description: `Montage de stands et prestations techniques à ${venue}`
        }))}
      />

      {/* Breadcrumbs visuels */}
      <section className="pt-28 pb-4 bg-background">
        <div className="container mx-auto px-4">
          <VisualBreadcrumbs items={[
            { label: "Accueil", href: "/" },
            { label: "Zones d'intervention", href: "/zones-intervention" },
            { label: "Paris", href: "/zones-intervention#paris" },
            { label: arrondissement.name }
          ]} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`Salons professionnels ${arrondissement.name}`}
            className="w-full h-full object-cover opacity-15"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Paris {arrondissement.postalCode}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Montage de Stands <br />
              <span className="text-gradient-gold">{arrondissement.name}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8 description-text"
            >
              {arrondissement.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Devis gratuit {arrondissement.name}
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
            {arrondissement.stats.map((stat, index) => (
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

      {/* Venues & Events */}
      <ParallaxSection className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Venues */}
            <FadeInSection>
              <div className="bg-card border border-border rounded-lg p-8 h-full">
                <Building2 className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-2xl font-display font-bold text-card-foreground mb-6">
                  Lieux d'intervention - {arrondissement.name}
                </h2>
                <ul className="space-y-4">
                  {arrondissement.venues.map((venue, index) => (
                    <motion.li
                      key={venue}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{venue}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInSection>

            {/* Events */}
            <FadeInSection delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-8 h-full">
                <Calendar className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-2xl font-display font-bold text-card-foreground mb-6">
                  Salons & événements accompagnés
                </h2>
                <ul className="space-y-4">
                  {arrondissement.events.map((event, index) => (
                    <motion.li
                      key={event}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{event}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      {/* Services */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Nos prestations
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-card-foreground">
              Services disponibles <span className="text-gradient-gold">{arrondissement.name}</span>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Montage de stands", desc: `Installation complète de votre stand dans le ${arrondissement.name}`, icon: Building2 },
              { title: "Démontage", desc: "Démontage soigné et évacuation rapide des matériaux", icon: Navigation },
              { title: "Logistique", desc: "Transport, stockage et manutention de vos équipements", icon: Globe },
              { title: "Coordination", desc: "Gestion terrain et interface avec les organisateurs", icon: Users },
            ].map((service, index) => (
              <FadeInSection key={service.title} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/30 transition-colors">
                  <service.icon className="w-8 h-8 text-primary mb-4" />
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

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Questions fréquentes
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground">
              FAQ - {arrondissement.name}
            </h2>
          </FadeInSection>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {arrondissement.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-card-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground faq-answer">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Arrondissements voisins */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-display font-bold text-card-foreground">
              Arrondissements à proximité
            </h2>
          </FadeInSection>
          <FadeInSection className="flex flex-wrap justify-center gap-4">
            {arrondissement.neighboringArrondissements.map((arr) => {
              const neighborId = `paris-${arr.toLowerCase()}`;
              const neighborData = parisArrondissements[neighborId];
              return neighborData ? (
                <Link
                  key={arr}
                  to={`/paris/${neighborId}`}
                  className="px-6 py-3 bg-card border border-border rounded-full text-card-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  Paris {arr}
                </Link>
              ) : (
                <span
                  key={arr}
                  className="px-6 py-3 bg-card border border-border rounded-full text-card-foreground"
                >
                  Paris {arr}
                </span>
              );
            })}
          </FadeInSection>
        </div>
      </section>

      {/* Maillage interne - Banlieue parisienne */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-display font-semibold text-card-foreground">
              Également présents en banlieue parisienne
            </h3>
            <p className="text-muted-foreground mt-2">
              Découvrez nos interventions dans les parcs des expositions de la région
            </p>
          </FadeInSection>
          <FadeInSection className="flex flex-wrap justify-center gap-3">
            {allBanlieueList.slice(0, 6).map((villeId) => {
              const villeData = parisBanlieue[villeId];
              return villeData ? (
                <Link
                  key={villeId}
                  to={`/banlieue/${villeId}`}
                  className="px-5 py-2 bg-card border border-border rounded-lg text-sm text-card-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {villeData.name}
                </Link>
              ) : null;
            })}
            <Link
              to="/zones-intervention"
              className="px-5 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary hover:bg-primary/20 transition-colors"
            >
              Toutes les zones →
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Navigation prev/next */}
      <section className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {prevArrondissement ? (
              <Link 
                to={`/paris/${prevArrondissement}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ← {parisArrondissements[prevArrondissement]?.name}
              </Link>
            ) : <span />}
            
            <Link 
              to="/zones-intervention"
              className="text-primary hover:underline"
            >
              Toutes les zones
            </Link>
            
            {nextArrondissement ? (
              <Link 
                to={`/paris/${nextArrondissement}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {parisArrondissements[nextArrondissement]?.name} →
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
              Un salon dans le {arrondissement.name} ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour obtenir un devis personnalisé pour votre prochain événement 
              à Paris {arrondissement.postalCode}.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
}
