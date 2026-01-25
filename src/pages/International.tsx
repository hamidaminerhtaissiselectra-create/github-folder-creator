import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { SEOHead, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { SpeakableSchema } from "@/components/seo/WebsiteSchema";
import { ArrowRight, Globe, Users, CheckCircle, MapPin, Plane, Building2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParallaxSection, FadeInSection } from "@/components/animations/ParallaxSection";
import serviceInternational from "@/assets/service-international.jpg";

const countries = [
  { name: "Europe", cities: ["Londres", "Berlin", "Milan", "Madrid", "Amsterdam", "Genève"] },
  { name: "Moyen-Orient", cities: ["Dubaï", "Riyad", "Doha", "Abu Dhabi"] },
  { name: "Asie", cities: ["Singapour", "Hong Kong", "Tokyo", "Shanghai"] },
  { name: "Amérique", cities: ["New York", "Miami", "Los Angeles", "São Paulo"] },
];

const advantages = [
  {
    icon: Globe,
    title: "Réseau International",
    description: "Partenaires locaux qualifiés dans plus de 30 pays pour une exécution parfaite.",
  },
  {
    icon: Users,
    title: "Un Seul Interlocuteur",
    description: "Votre chef de projet BA Attitude coordonne l'ensemble des prestataires.",
  },
  {
    icon: Plane,
    title: "Logistique Mondiale",
    description: "Gestion du transport, des douanes et de l'acheminement international.",
  },
  {
    icon: Handshake,
    title: "Qualité Constante",
    description: "Les mêmes standards d'excellence partout dans le monde.",
  },
];

const services = [
  "Coordination de prestataires locaux",
  "Gestion des formalités douanières",
  "Transport et logistique internationale",
  "Supervision sur site par notre équipe",
  "Adaptation aux normes locales",
  "Support multilingue (FR/EN)",
];

const testimonial = {
  quote: "BA Attitude nous accompagne sur nos salons internationaux depuis 5 ans. Leur capacité à coordonner des équipes dans différents pays tout en maintenant notre niveau d'exigence est remarquable.",
  author: "Sophie Martin",
  role: "Directrice Marketing International",
  company: "Groupe LVMH",
};

const internationalFaqs = [
  {
    question: "Dans quels pays intervenez-vous ?",
    answer: "Nous intervenons dans plus de 30 pays à travers le monde : Europe (Allemagne, Royaume-Uni, Italie, Espagne...), Moyen-Orient (Dubaï, Qatar, Arabie Saoudite...), Asie (Singapour, Hong Kong, Japon...) et Amérique (États-Unis, Brésil...). Notre réseau de partenaires locaux nous permet d'assurer une qualité constante partout.",
  },
  {
    question: "Comment gérez-vous les formalités douanières ?",
    answer: "Notre équipe spécialisée prend en charge l'intégralité des formalités douanières : ATA Carnets, documents d'exportation temporaire, déclarations en douane. Nous anticipons les délais et réglementations spécifiques à chaque pays pour garantir la livraison de votre matériel dans les temps.",
  },
  {
    question: "Avez-vous des équipes sur place à l'étranger ?",
    answer: "Nous travaillons avec un réseau de partenaires locaux qualifiés dans chaque pays d'intervention. Un chef de projet BA ATTITUDE se déplace systématiquement pour superviser les opérations et garantir le respect de nos standards de qualité.",
  },
  {
    question: "Quels sont vos délais pour un projet international ?",
    answer: "Les délais varient selon la destination et la complexité du projet. En général, nous recommandons un délai de 6 à 8 semaines pour un projet international standard, 3 à 4 mois pour les projets complexes incluant transport maritime ou destinations lointaines.",
  },
];

const internationalBreadcrumbs = [
  { name: "Accueil", url: "https://baattitude.fr/" },
  { name: "International", url: "https://baattitude.fr/international" },
];

export default function International() {
  return (
    <Layout>
      <SEOHead
        title="Prestations Internationales | Salons Professionnels Monde - BA ATTITUDE"
        description="Interventions sur salons professionnels dans plus de 30 pays. Coordination locale, logistique internationale et formalités douanières. Partenaire événementiel mondial."
        canonical="https://baattitude.fr/international"
        ogUrl="https://baattitude.fr/international"
        ogType="website"
        hreflangTags={[
          { lang: "fr", url: "https://baattitude.fr/international" },
          { lang: "en", url: "https://baattitude.fr/international" },
          { lang: "x-default", url: "https://baattitude.fr/international" },
        ]}
      />
      <BreadcrumbSchema items={internationalBreadcrumbs} />
      <FAQSchema faqs={internationalFaqs} />
      <SpeakableSchema 
        cssSelector={[
          "h1",
          "h2",
          "blockquote",
          ".text-muted-foreground"
        ]}
      />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceInternational}
            alt="Prestations internationales"
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
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Services Internationaux
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Votre partenaire technique <span className="text-gradient-gold">partout dans le monde</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              Fort de notre expérience et de notre réseau de partenaires internationaux, 
              nous intervenons sur vos salons professionnels et événements B2B à travers le monde, 
              avec la même exigence de qualité qu'en France.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Discuter de votre projet
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/realisations">Voir nos références</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "30+", label: "Pays d'intervention" },
              { value: "200+", label: "Projets internationaux" },
              { value: "50+", label: "Partenaires locaux" },
              { value: "15", label: "Années d'expérience" },
            ].map((stat, index) => (
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

      {/* Advantages */}
      <ParallaxSection className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Nos Atouts
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-card-foreground">
              Pourquoi nous faire <span className="text-gradient-gold">confiance</span> ?
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <FadeInSection key={advantage.title} delay={index * 0.1}>
                <div className="text-center p-8 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <advantage.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {advantage.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Services */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
                Nos Services
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
                Services inclus dans nos <span className="text-gradient-gold">prestations internationales</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nous prenons en charge l'intégralité de la coordination de votre projet à l'international, 
                vous permettant de vous concentrer sur votre événement.
              </p>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-card-foreground">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-8">
                <Building2 className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">
                  Zones d'intervention
                </h3>
                <div className="space-y-6">
                  {countries.map((region) => (
                    <div key={region.name}>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        {region.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {region.cities.map((city) => (
                          <span
                            key={city}
                            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-primary/20 font-serif mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-display text-card-foreground mb-8 leading-relaxed">
              {testimonial.quote}
            </blockquote>
            <div>
              <p className="font-semibold text-card-foreground">{testimonial.author}</p>
              <p className="text-muted-foreground">{testimonial.role}</p>
              <p className="text-primary text-sm">{testimonial.company}</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
              Un projet international ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour discuter de votre événement à l'étranger. 
              Nous vous accompagnons de la conception à la réalisation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Demander un devis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+33601591920" aria-label="Appeler BA Attitude au 06 01 59 19 20">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  Contacter un expert
                </a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
}

function Phone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}