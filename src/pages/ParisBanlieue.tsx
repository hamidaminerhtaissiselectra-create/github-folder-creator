import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle, Building2, Calendar, Users, Phone, Navigation, Globe, Train } from "lucide-react";
import { ParallaxSection, FadeInSection } from "@/components/animations/ParallaxSection";
import { SEOHead, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { SpeakableSchema, ItemListSchema } from "@/components/seo/WebsiteSchema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { parisBanlieue, allBanlieueList, banlieueByDepartment } from "@/data/paris-banlieue";
import heroImage from "@/assets/logistique-evenementielle-chargement.jpg";

// Schema LocalBusiness spécifique banlieue
function BanlieueLocalBusinessSchema({ 
  ville 
}: { 
  ville: typeof parisBanlieue[string] 
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `https://baattitude.fr/banlieue/${ville.id}/#localbusiness`,
    name: `BA ATTITUDE - ${ville.name}`,
    description: ville.description,
    url: `https://baattitude.fr/banlieue/${ville.id}`,
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
      latitude: ville.geo.latitude,
      longitude: ville.geo.longitude
    },
    areaServed: [
      {
        "@type": "Place",
        name: ville.name,
        address: {
          "@type": "PostalAddress",
          postalCode: ville.postalCode,
          addressLocality: ville.name,
          addressRegion: ville.department,
          addressCountry: "FR"
        }
      },
      ...ville.nearbyCity.map(city => ({
        "@type": "Place",
        name: city
      }))
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services BA ATTITUDE ${ville.name}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Montage de stands",
            description: `Installation de stands d'exposition à ${ville.name}`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Démontage de stands",
            description: `Démontage et évacuation de stands à ${ville.name}`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Logistique événementielle",
            description: `Transport et coordination pour événements ${ville.name} (${ville.departmentCode})`
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "127",
      bestRating: "5"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ParisBanlieue() {
  const { villeId } = useParams();
  const ville = parisBanlieue[villeId || ""];

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

  // Navigation banlieue
  const currentIndex = allBanlieueList.indexOf(ville.id);
  const prevVille = currentIndex > 0 ? allBanlieueList[currentIndex - 1] : null;
  const nextVille = currentIndex < allBanlieueList.length - 1 ? allBanlieueList[currentIndex + 1] : null;

  // Département label
  const getDepartmentLabel = (code: string) => {
    const labels: Record<string, string> = {
      "92": "Hauts-de-Seine",
      "93": "Seine-Saint-Denis",
      "94": "Val-de-Marne",
      "95": "Val-d'Oise"
    };
    return labels[code] || code;
  };

  return (
    <Layout>
      {/* SEO complet */}
      <SEOHead
        title={`${ville.title} | BA ATTITUDE`}
        description={ville.metaDescription}
        canonical={`https://baattitude.fr/banlieue/${ville.id}`}
        ogUrl={`https://baattitude.fr/banlieue/${ville.id}`}
        ogType="website"
        ogImage="https://baattitude.fr/og-zones.jpg"
      />
      
      <BanlieueLocalBusinessSchema ville={ville} />
      
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://baattitude.fr" },
        { name: "Zones d'intervention", url: "https://baattitude.fr/zones-intervention" },
        { name: getDepartmentLabel(ville.departmentCode), url: `https://baattitude.fr/zones-intervention#${ville.departmentCode}` },
        { name: ville.name, url: `https://baattitude.fr/banlieue/${ville.id}` }
      ]} />
      
      <FAQSchema faqs={ville.faqs} />
      
      <SpeakableSchema cssSelector={["h1", "h2", ".description-text", ".faq-answer"]} />
      
      <ItemListSchema 
        name={`Lieux d'intervention ${ville.name}`}
        description={`Sites événementiels où BA ATTITUDE intervient à ${ville.name}`}
        items={ville.venues.map(venue => ({
          name: venue,
          url: `https://baattitude.fr/banlieue/${ville.id}`,
          description: `Montage de stands et prestations techniques à ${venue}`
        }))}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`Salons professionnels ${ville.name}`}
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
                {ville.department} ({ville.departmentCode}) - {ville.postalCode}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Montage de Stands <br />
              <span className="text-gradient-gold">{ville.name}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8 description-text"
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
                  Devis gratuit {ville.name}
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
            {ville.stats.map((stat, index) => (
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
                  Lieux d'intervention - {ville.name}
                </h2>
                <ul className="space-y-4">
                  {ville.venues.map((venue, index) => (
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
                  {ville.events.map((event, index) => (
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
              Services disponibles à <span className="text-gradient-gold">{ville.name}</span>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Montage de stands", desc: `Installation complète de votre stand à ${ville.name}`, icon: Building2 },
              { title: "Démontage", desc: "Démontage soigné et évacuation rapide des matériaux", icon: Navigation },
              { title: "Logistique", desc: "Transport, stockage et manutention de vos équipements", icon: Train },
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
              FAQ - {ville.name}
            </h2>
          </FadeInSection>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {ville.faqs.map((faq, index) => (
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

      {/* Villes à proximité */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-display font-bold text-card-foreground">
              Villes à proximité de {ville.name}
            </h2>
          </FadeInSection>
          <FadeInSection className="flex flex-wrap justify-center gap-4">
            {ville.nearbyCity.map((city) => {
              // Chercher si la ville est dans notre base
              const cityId = city.toLowerCase().replace(/\s+/g, '-').replace(/é/g, 'e');
              const cityData = parisBanlieue[cityId];
              
              return cityData ? (
                <Link
                  key={city}
                  to={`/banlieue/${cityId}`}
                  className="px-6 py-3 bg-card border border-border rounded-full text-card-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {city}
                </Link>
              ) : (
                <span
                  key={city}
                  className="px-6 py-3 bg-card border border-border rounded-full text-card-foreground"
                >
                  {city}
                </span>
              );
            })}
          </FadeInSection>
        </div>
      </section>

      {/* Navigation prev/next */}
      <section className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {prevVille ? (
              <Link 
                to={`/banlieue/${prevVille}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ← {parisBanlieue[prevVille]?.name}
              </Link>
            ) : <span />}
            
            <Link 
              to="/zones-intervention"
              className="text-primary hover:underline"
            >
              Toutes les zones
            </Link>
            
            {nextVille ? (
              <Link 
                to={`/banlieue/${nextVille}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {parisBanlieue[nextVille]?.name} →
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
              Un salon à {ville.name} ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour obtenir un devis personnalisé pour votre prochain événement 
              à {ville.name} ({ville.departmentCode}).
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
