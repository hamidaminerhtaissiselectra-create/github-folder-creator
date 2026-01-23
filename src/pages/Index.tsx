import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { SEOHead, LocalBusinessSchema } from "@/components/seo/StructuredData";
import { WebsiteSchema, OrganizationSchema, HowToSchema, ItemListSchema, SpeakableSchema } from "@/components/seo/WebsiteSchema";

// Homepage FAQ data for structured data
const homeFaqs = [
  { question: "Quels types d'événements accompagnez-vous ?", answer: "BA ATTITUDE accompagne tous types de salons professionnels, foires, expositions B2B, conventions d'entreprise et événements corporate en France et à l'international." },
  { question: "Dans quels délais pouvez-vous intervenir ?", answer: "Nous pouvons mobiliser nos équipes sous 24 à 48 heures en Île-de-France, et sous 72 heures sur le reste du territoire français." },
  { question: "Proposez-vous des devis gratuits ?", answer: "Oui, nous établissons des devis gratuits et détaillés sous 48h après analyse de votre cahier des charges." }
];

// Services list for ItemList schema
const servicesForSchema = [
  { name: "Salons Professionnels", url: "https://baattitude.fr/services/salons-professionnels", description: "Montage et coordination de stands pour salons B2B" },
  { name: "Support Technique", url: "https://baattitude.fr/services/support-technique", description: "Assistance technique sur site 24/7" },
  { name: "Montage & Démontage", url: "https://baattitude.fr/services/montage-demontage", description: "Équipes qualifiées pour installation de stands" },
  { name: "Logistique & Coordination", url: "https://baattitude.fr/services/logistique-coordination", description: "Transport, stockage et manutention événementielle" },
  { name: "Scénographie Stands", url: "https://baattitude.fr/services/scenographie-stands", description: "Design et réalisation de décors sur mesure" },
  { name: "Prestations Internationales", url: "https://baattitude.fr/services/international", description: "Coordination multi-pays et expertise export" }
];

// Process steps for HowTo schema
const processSteps = [
  { name: "Étude & Devis", text: "Analyse de votre cahier des charges, visite technique si nécessaire, établissement d'un devis détaillé sous 48h." },
  { name: "Planification", text: "Définition du planning d'intervention, coordination avec les organisateurs et autres prestataires." },
  { name: "Installation", text: "Montage par nos équipes qualifiées dans le respect des délais et des normes de sécurité." },
  { name: "Démontage", text: "Repli soigné après l'événement, évacuation du matériel et remise en état des lieux." }
];

const Index = () => {
  return (
    <Layout>
      {/* Primary SEO Meta Tags */}
      <SEOHead
        title="BA ATTITUDE | Prestations Techniques Événementielles - Salons Professionnels France"
        description="Spécialiste des prestations techniques pour salons professionnels, foires et événements B2B. Montage de stands, logistique, coordination terrain en France et à l'international. Devis gratuit sous 48h."
        canonical="https://baattitude.fr"
        ogUrl="https://baattitude.fr"
        ogImage="https://baattitude.fr/og-image.jpg"
        ogType="website"
      />
      
      {/* Structured Data for Google, ChatGPT, Perplexity, Alexa */}
      <WebsiteSchema />
      <OrganizationSchema />
      <LocalBusinessSchema
        serviceType={[
          "Montage et démontage de stands",
          "Logistique événementielle",
          "Support technique salons",
          "Coordination terrain",
          "Scénographie événementielle",
          "Prestations internationales"
        ]}
      />
      <ItemListSchema 
        name="Services BA ATTITUDE"
        description="Prestations techniques pour salons professionnels et événements B2B"
        items={servicesForSchema}
      />
      <HowToSchema
        name="Comment organiser votre participation à un salon professionnel"
        description="Découvrez notre méthodologie en 4 étapes pour réussir votre salon professionnel avec BA ATTITUDE"
        steps={processSteps}
        totalTime="P2W"
      />
      {/* Speakable for voice assistants (Alexa, Google Assistant, Siri) */}
      <SpeakableSchema 
        cssSelector={[
          "h1",
          ".hero-description",
          ".faq-answer",
          "article h2",
          "article p:first-of-type"
        ]}
      />
      
      {/* Page Content */}
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
