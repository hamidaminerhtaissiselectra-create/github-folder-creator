import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEOHead, FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInSection } from "@/components/animations/ParallaxSection";

// Regroupement de toutes les FAQ des pages zones + FAQ générale
const faqCategories = [
  {
    title: "Questions Générales",
    faqs: [
      {
        question: "Quels types de salons professionnels accompagnez-vous ?",
        answer: "BA Attitude intervient sur tous les types de salons professionnels et événements B2B : foires commerciales, expositions sectorielles (industrie, agroalimentaire, mode, high-tech, bâtiment, automobile, luxe, santé...), congrès, conventions d'entreprise, forums professionnels. Notre expertise s'adapte à tous les secteurs d'activité et formats d'événements, du stand de 9m² aux pavillons de plusieurs centaines de mètres carrés.",
      },
      {
        question: "Intervenez-vous dans toute la France et à l'international ?",
        answer: "Oui, nous intervenons sur l'ensemble du territoire français : Paris Expo Porte de Versailles, Paris Nord Villepinte, Eurexpo Lyon, Parc Chanot Marseille, Bordeaux Lac, Lille Grand Palais, et tous les sites d'exposition majeurs. À l'international, nous accompagnons nos clients sur les salons européens (Allemagne, Italie, Espagne, UK) et mondiaux (États-Unis, Moyen-Orient, Asie) grâce à notre réseau de partenaires locaux.",
      },
      {
        question: "Quel est votre délai minimum d'intervention ?",
        answer: "Nous pouvons mobiliser nos équipes sous 24 à 48 heures en Île-de-France, et sous 72 heures sur le reste du territoire français. Pour les montages de nuit ou les urgences pendant les périodes de salon, nous disposons d'équipes de renfort mobilisables très rapidement. Pour une organisation optimale, nous recommandons néanmoins de nous contacter au minimum 2 semaines avant votre événement.",
      },
      {
        question: "Proposez-vous des forfaits tout compris pour les salons ?",
        answer: "Oui, nous proposons des forfaits clé en main incluant le montage du stand, la maintenance pendant l'événement, le démontage et l'évacuation des déchets. Ces forfaits sont établis sur devis après analyse de vos plans et du cahier des charges du salon. Ils garantissent un budget maîtrisé sans mauvaise surprise. Nous proposons également des contrats-cadres pour les entreprises participant à plusieurs salons par an.",
      },
      {
        question: "Travaillez-vous en marque blanche pour les agences ?",
        answer: "Absolument. Nous accompagnons de nombreuses agences événementielles et standistes en tant que sous-traitant technique. Nous intervenons en toute discrétion, avec vos propres codes couleur et équipements de protection. Nos devis peuvent être présentés sous votre enseigne. La confidentialité et le professionnalisme sont au cœur de notre approche partenaire.",
      },
      {
        question: "Quelles sont vos certifications et garanties ?",
        answer: "Tous nos techniciens disposent des certifications requises : habilitations électriques (BR, B2V), formation travail en hauteur, port d'EPI. Nous sommes couverts par une assurance responsabilité civile professionnelle complète. Notre expérience de plus de 15 ans sur les salons professionnels et nos références (G20, grands salons nationaux) témoignent de notre fiabilité et de notre savoir-faire.",
      },
    ],
  },
  {
    title: "Paris & Île-de-France",
    faqs: [
      {
        question: "Quels sont les principaux sites d'exposition à Paris où vous intervenez ?",
        answer: "Nous intervenons sur tous les sites majeurs parisiens : Paris Expo Porte de Versailles, Paris Nord Villepinte, Le Bourget, Palais des Congrès, Carreau du Temple, Grande Halle de la Villette, ainsi que tous les hôtels et espaces événementiels de la capitale.",
      },
      {
        question: "Pouvez-vous intervenir en urgence sur un salon parisien ?",
        answer: "Oui, notre proximité avec Paris (siège à Pontault-Combault, 77) nous permet d'intervenir sous 24h en Île-de-France. Pour les urgences pendant les salons, nous disposons d'équipes de renfort mobilisables en quelques heures.",
      },
      {
        question: "Intervenez-vous à La Défense et dans les Hauts-de-Seine ?",
        answer: "Absolument. La Défense fait partie de notre zone d'intervention prioritaire. Nous accompagnons régulièrement des événements au CNIT, à la Grande Arche, ainsi que dans les nombreux espaces événementiels des tours de La Défense.",
      },
      {
        question: "Couvrez-vous les salons à Villepinte et au Bourget ?",
        answer: "Oui, Paris Nord Villepinte et Paris Le Bourget sont des sites où nous intervenons très fréquemment. Nous connaissons parfaitement ces complexes et leurs spécificités logistiques (accès, horaires, réglementations).",
      },
    ],
  },
  {
    title: "Banlieue Parisienne (92, 93, 94, 95)",
    faqs: [
      {
        question: "Intervenez-vous dans les départements 92, 93, 94 et 95 ?",
        answer: "Oui, nous couvrons l'ensemble de la petite et grande couronne parisienne. Nos équipes interviennent dans les Hauts-de-Seine (92), la Seine-Saint-Denis (93), le Val-de-Marne (94) et le Val-d'Oise (95) pour tous types d'événements professionnels.",
      },
      {
        question: "Quels sont vos délais d'intervention en banlieue parisienne ?",
        answer: "Notre siège étant situé à Pontault-Combault (77), nous pouvons intervenir sous 24h dans toute la banlieue parisienne. Pour les urgences, nous disposons d'équipes mobilisables en quelques heures.",
      },
      {
        question: "Proposez-vous des tarifs spécifiques pour l'Île-de-France ?",
        answer: "Oui, nous proposons des forfaits adaptés à la région parisienne avec des tarifs optimisés grâce à notre proximité géographique. Contactez-nous pour obtenir un devis personnalisé.",
      },
    ],
  },
  {
    title: "Province & Grandes Métropoles",
    faqs: [
      {
        question: "Intervenez-vous sur les salons à Lyon (Eurexpo) ?",
        answer: "Oui, Lyon est l'une de nos zones d'intervention majeures. Nous accompagnons régulièrement les exposants sur Eurexpo, au Centre de Congrès de Lyon, et sur tous les événements de la métropole lyonnaise comme Sirha, Pollutec ou Global Industrie.",
      },
      {
        question: "Pouvez-vous intervenir à Marseille et dans le Sud ?",
        answer: "Absolument. Nous intervenons sur le Parc Chanot à Marseille, ainsi qu'à Cannes (MIPIM, MAPIC), Nice et Monaco. Notre réseau de partenaires locaux nous permet d'assurer une présence efficace sur toute la région PACA.",
      },
      {
        question: "Couvrez-vous les salons de Bordeaux et du Sud-Ouest ?",
        answer: "Oui, nous accompagnons les exposants sur le Parc des Expositions de Bordeaux pour des événements comme Vinexpo ou Vinitech-Sifel, ainsi que sur l'ensemble de la région Nouvelle-Aquitaine.",
      },
      {
        question: "Intervenez-vous dans le Nord (Lille) et en Belgique ?",
        answer: "Oui, Lille Grand Palais et les salons des Hauts-de-France font partie de notre zone d'intervention. Notre proximité géographique nous permet également d'intervenir sur les événements en Belgique (Bruxelles).",
      },
    ],
  },
  {
    title: "International",
    faqs: [
      {
        question: "Accompagnez-vous les entreprises françaises à l'étranger ?",
        answer: "Oui, nous accompagnons nos clients sur les salons internationaux majeurs en Europe (Allemagne, Italie, Espagne, UK), au Moyen-Orient (Dubaï, Arabie Saoudite) et en Asie. Notre expérience du G20 et des événements diplomatiques témoigne de notre capacité à intervenir sur des projets d'envergure internationale.",
      },
      {
        question: "Comment gérez-vous la logistique internationale ?",
        answer: "Nous disposons d'un réseau de partenaires locaux dans plus de 30 pays. Nous coordonnons l'ensemble de la logistique : transport des équipements, dédouanement, stockage local, et intervention de techniciens qualifiés sur place.",
      },
      {
        question: "Quels sont les délais pour un projet à l'international ?",
        answer: "Pour les projets internationaux, nous recommandons de nous contacter au minimum 4 à 6 semaines avant l'événement pour organiser la logistique. Pour les pays hors Europe, un délai de 8 semaines est préférable.",
      },
    ],
  },
];

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap(category => category.faqs);

export default function FAQ() {
  return (
    <Layout>
      <SEOHead
        title="FAQ - Questions Fréquentes | BA Attitude"
        description="Retrouvez toutes les réponses à vos questions sur nos prestations de montage de stands, nos zones d'intervention et nos services événementiels."
        canonical="https://baattitude.fr/faq"
        ogUrl="https://baattitude.fr/faq"
        ogType="website"
      />
      <FAQSchema faqs={allFaqs} />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://baattitude.fr" },
        { name: "FAQ", url: "https://baattitude.fr/faq" }
      ]} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Foire Aux Questions
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Vos <span className="text-gradient-gold">questions</span>, nos réponses
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Retrouvez ici toutes les informations sur nos prestations, nos zones d'intervention 
              et notre façon de travailler.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqCategories.map((category, categoryIndex) => (
        <section 
          key={category.title} 
          className={categoryIndex % 2 === 0 ? "py-16 bg-muted" : "py-16 bg-background"}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInSection>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-card-foreground mb-8">
                  {category.title}
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
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
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
              Une question non répondue ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans votre projet événementiel.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Nous contacter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+33601591920">
                  06 01 59 19 20
                </a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
}
