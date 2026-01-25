import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle, Building2, Calendar, Users, Phone } from "lucide-react";
import { ParallaxSection, FadeInSection } from "@/components/animations/ParallaxSection";
import { SEOHead, BreadcrumbSchema, LocalBusinessSchema } from "@/components/seo/StructuredData";
import { SpeakableSchema } from "@/components/seo/WebsiteSchema";
import heroImage from "@/assets/hero-event.jpg";
const zonesData: Record<string, {
  city: string;
  region: string;
  title: string;
  description: string;
  venues: string[];
  events: string[];
  stats: { value: string; label: string }[];
  nearby: string[];
}> = {
  "paris": {
    city: "Paris",
    region: "Île-de-France",
    title: "Salons Professionnels à Paris & Île-de-France",
    description: "BA Attitude est votre partenaire de référence pour les prestations techniques et logistiques sur les salons professionnels parisiens. Notre proximité avec les principaux sites d'exposition nous permet d'intervenir rapidement et efficacement.",
    venues: [
      "Paris Expo Porte de Versailles",
      "Paris Nord Villepinte",
      "Palais des Congrès",
      "Paris Le Bourget",
      "Carreau du Temple",
      "Grande Halle de la Villette",
    ],
    events: [
      "Maison & Objet",
      "SIAL Paris",
      "Equip Auto",
      "Première Vision",
      "Who's Next",
      "Paris Retail Week",
    ],
    stats: [
      { value: "200+", label: "Salons accompagnés" },
      { value: "15", label: "Années d'expertise" },
      { value: "24h", label: "Délai d'intervention" },
      { value: "100%", label: "Satisfaction client" },
    ],
    nearby: ["Versailles", "Saint-Denis", "Villepinte", "Le Bourget", "La Défense"],
  },
  "lyon": {
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    title: "Salons Professionnels à Lyon & Rhône-Alpes",
    description: "Deuxième pôle économique français, Lyon accueille de nombreux salons professionnels majeurs. BA Attitude vous accompagne sur l'ensemble de la région Auvergne-Rhône-Alpes pour vos événements B2B.",
    venues: [
      "Eurexpo Lyon",
      "Centre de Congrès de Lyon",
      "Palais des Congrès",
      "Double Mixte",
      "La Sucrière",
      "Halle Tony Garnier",
    ],
    events: [
      "Sirha Lyon",
      "Pollutec",
      "Global Industrie",
      "Salon du Tourisme",
      "Workspace Expo",
      "Forum LED Europe",
    ],
    stats: [
      { value: "80+", label: "Événements par an" },
      { value: "48h", label: "Délai mobilisation" },
      { value: "30+", label: "Partenaires locaux" },
      { value: "98%", label: "Projets livrés à temps" },
    ],
    nearby: ["Saint-Étienne", "Grenoble", "Villeurbanne", "Vaulx-en-Velin", "Bron"],
  },
  "marseille": {
    city: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    title: "Salons Professionnels à Marseille & PACA",
    description: "Première ville du Sud de la France, Marseille est un carrefour international pour les événements professionnels. BA Attitude intervient sur l'ensemble de la région PACA pour vos salons et congrès.",
    venues: [
      "Parc Chanot",
      "Palais du Pharo",
      "World Trade Center",
      "Villa Méditerranée",
      "Palais des Congrès Cannes",
      "Grimaldi Forum Monaco",
    ],
    events: [
      "SITL Méditerranée",
      "Heavent Meetings",
      "MIPIM (Cannes)",
      "MAPIC (Cannes)",
      "Salon Nautique",
      "Med'Agri",
    ],
    stats: [
      { value: "50+", label: "Salons PACA/an" },
      { value: "72h", label: "Délai intervention" },
      { value: "20+", label: "Partenaires région" },
      { value: "15", label: "Ans sur la région" },
    ],
    nearby: ["Nice", "Cannes", "Monaco", "Toulon", "Aix-en-Provence"],
  },
  "bordeaux": {
    city: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    title: "Salons Professionnels à Bordeaux & Nouvelle-Aquitaine",
    description: "Bordeaux et sa région accueillent des événements professionnels de premier plan. BA Attitude vous accompagne sur tous vos projets dans le Grand Sud-Ouest.",
    venues: [
      "Parc des Expositions de Bordeaux",
      "Palais des Congrès de Bordeaux",
      "Hangar 14",
      "Base sous-marine",
      "Palais de la Bourse",
      "Arkéa Arena",
    ],
    events: [
      "Vinexpo",
      "Vinitech-Sifel",
      "Salon de l'Agriculture Aquitaine",
      "Siane",
      "Aquibat",
      "Be Positive",
    ],
    stats: [
      { value: "40+", label: "Projets/an" },
      { value: "48h", label: "Mobilisation" },
      { value: "15+", label: "Partenaires" },
      { value: "10", label: "Ans d'expérience" },
    ],
    nearby: ["Toulouse", "Pau", "La Rochelle", "Limoges", "Biarritz"],
  },
  "lille": {
    city: "Lille",
    region: "Hauts-de-France",
    title: "Salons Professionnels à Lille & Hauts-de-France",
    description: "Carrefour européen, Lille est idéalement située pour les événements B2B internationaux. BA Attitude est votre partenaire technique pour les salons du Nord de la France.",
    venues: [
      "Lille Grand Palais",
      "Zenith de Lille",
      "Stade Pierre Mauroy",
      "Tri Postal",
      "Nouveau Siècle",
      "Palais Rameau",
    ],
    events: [
      "SIMI Nord",
      "World Forum",
      "Salon des Entrepreneurs",
      "Congres Pharmacie",
      "Salon de l'Habitat",
      "Business Power",
    ],
    stats: [
      { value: "35+", label: "Salons/an" },
      { value: "24h", label: "Réactivité" },
      { value: "Benelux", label: "Zone couverte" },
      { value: "12", label: "Ans d'expertise" },
    ],
    nearby: ["Bruxelles", "Amiens", "Reims", "Roubaix", "Tourcoing"],
  },
  "nantes": {
    city: "Nantes",
    region: "Pays de la Loire",
    title: "Salons Professionnels à Nantes & Grand Ouest",
    description: "Nantes et l'Ouest de la France constituent un pôle dynamique pour les événements professionnels. BA Attitude intervient sur l'ensemble du Grand Ouest pour vos salons et congrès.",
    venues: [
      "Parc des Expositions Beaujoire",
      "Cité des Congrès",
      "Exponantes",
      "Machines de l'île",
      "Stereolux",
      "Lieu Unique",
    ],
    events: [
      "Salon du Végétal",
      "Serbotel",
      "CFIA Rennes",
      "Carrefour International du Bois",
      "Salon Nautique",
      "Ouest Industries",
    ],
    stats: [
      { value: "30+", label: "Événements/an" },
      { value: "48h", label: "Mobilisation" },
      { value: "Grand Ouest", label: "Zone couverte" },
      { value: "8", label: "Ans présence" },
    ],
    nearby: ["Rennes", "Angers", "Le Mans", "Saint-Nazaire", "La Roche-sur-Yon"],
  },
};

export default function ZoneIntervention() {
  const { zoneId } = useParams();
  const zone = zonesData[zoneId || ""];

  if (!zone) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-card-foreground mb-4">Zone non trouvée</h1>
            <Button variant="gold" asChild>
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title={`${zone.title} | BA Attitude`}
        description={zone.description}
        canonical={`https://baattitude.fr/zones/${zoneId}`}
        ogUrl={`https://baattitude.fr/zones/${zoneId}`}
        ogType="website"
      />
      <LocalBusinessSchema 
        areaServed={[zone.city, zone.region, "France"]}
        serviceType={["Montage de stands", "Démontage de stands", "Logistique événementielle"]}
      />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://baattitude.fr" },
        { name: "Zones d'intervention", url: "https://baattitude.fr/zones-intervention" },
        { name: zone.region, url: `https://baattitude.fr/zones/${zoneId}` }
      ]} />
      <SpeakableSchema 
        cssSelector={[
          "h1",
          "h2",
          ".text-muted-foreground"
        ]}
      />
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={zone.title}
            className="w-full h-full object-cover opacity-15"
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
                {zone.region}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              {zone.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              {zone.description}
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
            {zone.stats.map((stat, index) => (
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
                  Lieux d'intervention à {zone.city}
                </h2>
                <ul className="space-y-4">
                  {zone.venues.map((venue, index) => (
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
                  Salons où nous intervenons
                </h2>
                <ul className="space-y-4">
                  {zone.events.map((event, index) => (
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
              Services disponibles à <span className="text-gradient-gold">{zone.city}</span>
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

      {/* Nearby zones */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-display font-bold text-card-foreground">
              Nous intervenons également à proximité
            </h2>
          </FadeInSection>
          <FadeInSection className="flex flex-wrap justify-center gap-4">
            {zone.nearby.map((city) => (
              <span
                key={city}
                className="px-6 py-3 bg-card border border-border rounded-full text-card-foreground hover:border-primary/50 transition-colors"
              >
                {city}
              </span>
            ))}
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
              Un salon à {zone.city} ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour obtenir un devis personnalisé pour votre prochain événement 
              dans la région {zone.region}.
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