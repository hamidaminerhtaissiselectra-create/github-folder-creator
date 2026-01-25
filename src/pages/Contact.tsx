import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Facebook } from "lucide-react";
import { LazyMap } from "@/components/ui/lazy-map";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { MultiStepQuoteForm } from "@/components/contact/MultiStepQuoteForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEOHead, LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { SpeakableSchema } from "@/components/seo/WebsiteSchema";

const contactFaqs = [
  {
    question: "Quel est votre délai de réponse ?",
    answer: "Nous nous engageons à répondre à toutes les demandes sous 24h ouvrées. Pour les demandes urgentes, n'hésitez pas à nous appeler directement.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer: "Remplissez le formulaire de demande de devis en 4 étapes. Plus vous êtes précis (type d'événement, lieu, dates), plus notre proposition sera adaptée à vos besoins.",
  },
  {
    question: "Intervenez-vous en urgence ?",
    answer: "Oui, notre réactivité est l'une de nos forces. Selon la complexité du projet, nous pouvons intervenir sous 48 à 72h. Contactez-nous par téléphone pour les demandes urgentes.",
  },
];

const contactBreadcrumbs = [
  { name: "Accueil", url: "https://baattitude.fr/" },
  { name: "Contact", url: "https://baattitude.fr/contact" },
];

export default function Contact() {
  return (
    <Layout>
      <SEOHead
        title="Contact & Devis Gratuit | BA ATTITUDE - Prestataire Événementiel Paris"
        description="Demandez un devis gratuit pour vos salons professionnels et événements B2B. Réponse sous 24h. BA ATTITUDE, votre partenaire événementiel en Île-de-France."
        canonical="https://baattitude.fr/contact"
        ogUrl="https://baattitude.fr/contact"
        ogType="website"
      />
      <LocalBusinessSchema
        name="BA ATTITUDE"
        description="Prestataire technique événementiel spécialisé dans les salons professionnels et événements B2B en France et à l'international."
        telephone="+33177000952"
        email="contact@baattitude.fr"
        address={{
          streetAddress: "16 Rue des Pendants de La Queue-en-Brie",
          addressLocality: "Pontault-Combault",
          postalCode: "77340",
          addressCountry: "FR",
        }}
        openingHours={["Mo-Fr 09:00-18:00"]}
        areaServed={["Paris", "Île-de-France", "France", "Europe"]}
        serviceType={[
          "Montage de stands",
          "Démontage de stands",
          "Logistique événementielle",
          "Support technique salons",
          "Scénographie événementielle",
        ]}
      />
      <FAQSchema faqs={contactFaqs} />
      <BreadcrumbSchema items={contactBreadcrumbs} />
      <SpeakableSchema 
        cssSelector={[
          "h1",
          "h2",
          ".text-muted-foreground",
          "address"
        ]}
      />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Demandez votre <span className="text-gradient-gold">devis gratuit</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Remplissez notre formulaire en quelques étapes et recevez 
              une proposition personnalisée sous 24h.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <ContactCTA />

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted" id="form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-display font-bold text-card-foreground mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground text-sm">
                      16 Rue des Pendants<br />
                      de La Queue-en-Brie<br />
                      77340 Pontault-Combault
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Téléphone</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="tel:+33177000952" className="hover:text-primary transition-colors">
                        01 77 00 09 52
                      </a>
                      <br />
                      <a href="tel:+33601591920" className="hover:text-primary transition-colors">
                        06 01 59 19 20
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      <a
                        href="mailto:contact@baattitude.fr"
                        className="hover:text-primary transition-colors"
                      >
                        contact@baattitude.fr
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Horaires</h3>
                    <p className="text-muted-foreground text-sm">
                      Lundi - Vendredi : 9h - 18h<br />
                      Disponibilité 24/7 sur événement
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-semibold text-card-foreground mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/baattitude.events/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Suivez BA Attitude sur Instagram"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ba-attitude/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Suivez BA Attitude sur LinkedIn"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.facebook.com/baattitude.events/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Suivez BA Attitude sur Facebook"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-xl font-display font-bold text-card-foreground mb-4">
                  Questions fréquentes
                </h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {contactFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card border border-border rounded-lg px-4 data-[state=open]:border-primary/50"
                    >
                      <AccordionTrigger className="text-left text-sm font-semibold text-card-foreground hover:text-primary hover:no-underline py-3">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm pb-3">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>

            {/* Multi-Step Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <MultiStepQuoteForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lazy Loaded Map */}
      <section className="h-[400px] relative">
        <LazyMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.5!2d2.6061!3d48.8034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6014f1e3c2c9d%3A0x8c9a07e63a7c5f1b!2s16%20Rue%20des%20Pendants%2C%2077340%20Pontault-Combault!5e0!3m2!1sfr!2sfr!4v1704880000000"
          title="Localisation BA Attitude - 16 Rue des Pendants, 77340 Pontault-Combault"
          className="h-full w-full"
        />
      </section>
    </Layout>
  );
}
