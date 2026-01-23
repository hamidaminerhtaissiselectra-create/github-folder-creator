import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema } from "@/components/seo/StructuredData";

const faqs = [
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
];

export function FAQSection() {
  return (
    <section className="py-24 bg-muted">
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
            >
              Questions Fréquentes
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-card-foreground"
            >
              Tout ce que vous devez <span className="text-gradient-gold">savoir</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
