import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Heart, Shield, Quote, CheckCircle, Building2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParallaxSection, FadeInSection } from "@/components/animations/ParallaxSection";
import { SEOHead, LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { OrganizationSchema, HowToSchema, SpeakableSchema } from "@/components/seo/WebsiteSchema";
import aboutTeam from "@/assets/about-team.jpg";
import aboutEquipeReunion from "@/assets/about-equipe-reunion.jpg";
import standLuxe from "@/assets/stand-luxe-scenographie.jpg";

// Timeline data for HowTo schema (company evolution)
const companyTimeline = [
  { name: "2008 - Création", text: "Fondation de BA Attitude à Paris, spécialisée dans les prestations techniques événementielles." },
  { name: "2012 - Expansion", text: "Premiers projets internationaux et développement du réseau européen." },
  { name: "2016 - Croissance", text: "100ème salon professionnel accompagné, consolidation de l'expertise." },
  { name: "2020 - Résilience", text: "Adaptation et diversification des services pendant la période difficile." },
  { name: "2024 - Leadership", text: "Reconnaissance comme référence du secteur B2B avec 500+ projets par an." }
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Chaque projet est traité avec le plus haut niveau d'exigence. Notre réputation se construit sur la qualité de nos interventions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous travaillons main dans la main avec vos équipes et vos prestataires pour garantir une coordination parfaite.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "L'événementiel est notre métier et notre passion. Nous mettons notre énergie au service de votre réussite.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Respect des délais, des budgets et des engagements. Vous pouvez compter sur nous en toutes circonstances.",
  },
];

const expertise = [
  "Salons professionnels et foires",
  "Événements B2B et corporate",
  "Montage et démontage de stands",
  "Logistique événementielle",
  "Coordination terrain",
  "Support technique",
];

const milestones = [
  { year: "2008", title: "Création", description: "Fondation de BA Attitude à Paris" },
  { year: "2012", title: "Expansion", description: "Premiers projets internationaux" },
  { year: "2016", title: "Croissance", description: "100ème salon professionnel accompagné" },
  { year: "2020", title: "Résilience", description: "Adaptation et diversification" },
  { year: "2024", title: "Leadership", description: "Référence du secteur B2B" },
];

const clients = [
  "Agences événementielles",
  "Entreprises B2B",
  "Organisateurs de salons",
  "Institutions et fédérations",
  "Marques internationales",
];

export default function About() {
  return (
    <Layout>
      <SEOHead
        title="À Propos de BA ATTITUDE | Expert Prestations Techniques Événementielles"
        description="Découvrez BA ATTITUDE, votre partenaire technique pour les salons professionnels depuis 15 ans. Équipes qualifiées, intervention France entière, 500+ projets réalisés."
        canonical="https://baattitude.fr/a-propos"
        ogUrl="https://baattitude.fr/a-propos"
        ogType="website"
      />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://baattitude.fr" },
        { name: "À Propos", url: "https://baattitude.fr/a-propos" },
      ]} />
      <HowToSchema
        name="L'histoire de BA ATTITUDE"
        description="15 ans d'évolution dans les prestations techniques événementielles"
        steps={companyTimeline}
        totalTime="P15Y"
      />
      <SpeakableSchema 
        cssSelector={[
          "h1",
          "h2",
          ".text-muted-foreground",
          "blockquote"
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              Notre Entreprise
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Votre partenaire technique pour l'
              <span className="text-gradient-gold">événementiel B2B</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Depuis plus de 15 ans, BA Attitude accompagne les entreprises et agences événementielles 
              sur leurs salons professionnels, foires et événements B2B en France et à l'international.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src={aboutTeam}
                    alt="Équipe BA ATTITUDE spécialiste montage stands salons professionnels"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary rounded-lg -z-10" />
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
                Notre Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
                Simplifier la logistique de vos événements professionnels
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                BA Attitude est née d'un constat simple : les entreprises qui participent à des salons 
                professionnels ont besoin d'un partenaire technique fiable, réactif et expert.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Notre équipe de techniciens, logisticiens et coordinateurs met son savoir-faire 
                à votre service pour que vous puissiez vous concentrer sur l'essentiel : 
                votre activité commerciale et vos visiteurs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Projets réalisés" },
                  { value: "15+", label: "Années d'expérience" },
                  { value: "30+", label: "Pays d'intervention" },
                  { value: "80%", label: "Clients agences" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-card rounded-lg border border-border">
                    <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection>
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <img
                  src={aboutEquipeReunion}
                  alt="Réunion de coordination de l'équipe BA ATTITUDE pour un projet événementiel"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Notre équipe en réunion de coordination projet
              </p>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <img
                  src={standLuxe}
                  alt="Stand d'exposition luxe réalisé par BA ATTITUDE avec scénographie premium"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Un stand scénographique premium avec éclairage design
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <ParallaxSection className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Nos Valeurs
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-card-foreground">
              Ce qui nous <span className="text-gradient-gold">définit</span>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInSection key={value.title} delay={index * 0.1}>
                <div className="text-center p-8 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-card-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Expertise */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
                Notre Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
                Spécialiste des prestations techniques pour <span className="text-gradient-gold">l'événementiel B2B</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Notre cœur de métier : les prestations techniques et logistiques pour les salons professionnels, 
                foires, expositions et événements B2B. Une expertise pointue qui fait la différence.
              </p>
              <ul className="space-y-4">
                {expertise.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-card-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <Building2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display font-semibold text-card-foreground mb-2">France</h3>
                  <p className="text-sm text-muted-foreground">
                    Paris, Lyon, Marseille, Bordeaux, Lille et tous les sites d'exposition français
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <Globe className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display font-semibold text-card-foreground mb-2">International</h3>
                  <p className="text-sm text-muted-foreground">
                    Réseau de partenaires dans plus de 30 pays en Europe, Amérique et Asie
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Notre Parcours
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-card-foreground">
              15 ans d'<span className="text-gradient-gold">évolution</span>
            </h2>
          </FadeInSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />
              {milestones.map((milestone, index) => (
                <FadeInSection key={milestone.year} delay={index * 0.1}>
                  <div className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="text-3xl font-display font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-display font-semibold text-card-foreground mb-1">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
                Nos Clients
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
                Ils nous font <span className="text-gradient-gold">confiance</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nous travaillons principalement avec des agences événementielles et des entreprises B2B 
                qui recherchent un partenaire technique fiable pour leurs salons professionnels.
              </p>
              <ul className="space-y-4">
                {clients.map((client, index) => (
                  <motion.li
                    key={client}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-card-foreground">{client}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-8">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <blockquote className="text-xl font-display text-card-foreground mb-6 leading-relaxed">
                  "BA Attitude est notre partenaire technique depuis 8 ans. Leur réactivité et leur 
                  professionnalisme nous permettent d'aborder chaque salon en toute sérénité."
                </blockquote>
                <div>
                  <p className="font-semibold text-card-foreground">Marie Dubois</p>
                  <p className="text-muted-foreground text-sm">Directrice de Production</p>
                  <p className="text-primary text-sm">Agence EVENTS+</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
              Prêt à travailler avec nous ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discutons de votre prochain salon ou événement professionnel. 
              Notre équipe est à votre disposition pour étudier vos besoins.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Contactez-nous
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
}
