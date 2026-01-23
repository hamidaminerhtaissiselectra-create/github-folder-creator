import { Helmet } from "react-helmet-async";

/**
 * Schema.org WebSite markup for sitelinks searchbox and site identity
 * Helps Google, ChatGPT, Perplexity understand site structure
 */
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://baattitude.fr/#website",
    name: "BA ATTITUDE",
    alternateName: "BA Attitude Événementiel",
    url: "https://baattitude.fr",
    description: "Prestations techniques et logistiques pour salons professionnels, foires et événements B2B en France et à l'international.",
    inLanguage: "fr-FR",
    publisher: {
      "@id": "https://baattitude.fr/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://baattitude.fr/services?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * Organization schema for brand recognition across AI systems
 */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://baattitude.fr/#organization",
    name: "BA ATTITUDE",
    legalName: "BA ATTITUDE SARL",
    url: "https://baattitude.fr",
    logo: {
      "@type": "ImageObject",
      url: "https://baattitude.fr/logo.png",
      width: 512,
      height: 512
    },
    image: "https://baattitude.fr/og-image.jpg",
    description: "Expert en prestations techniques pour salons professionnels et événements B2B depuis 2008. Montage de stands, logistique événementielle, coordination terrain.",
    foundingDate: "2008",
    founder: {
      "@type": "Person",
      name: "BA ATTITUDE"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressRegion: "Île-de-France",
      postalCode: "75000",
      addressCountry: "FR"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+33601591920",
        contactType: "customer service",
        areaServed: ["FR", "BE", "CH", "LU", "MC"],
        availableLanguage: ["French", "English"]
      },
      {
        "@type": "ContactPoint",
        email: "contact@baattitude.fr",
        contactType: "sales",
        areaServed: "Worldwide"
      }
    ],
    sameAs: [
      "https://www.linkedin.com/company/baattitude",
      "https://www.instagram.com/baattitude",
      "https://www.facebook.com/baattitude"
    ],
    knowsAbout: [
      "Montage de stands d'exposition",
      "Salons professionnels",
      "Événementiel B2B",
      "Logistique événementielle",
      "Coordination terrain",
      "Démontage de stands",
      "Scénographie événementielle",
      "Prestations techniques internationales"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services BA ATTITUDE",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Salons Professionnels",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Montage de stands" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Démontage de stands" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coordination terrain" } }
          ]
        },
        {
          "@type": "OfferCatalog", 
          name: "Logistique Événementielle",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport de matériel" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stockage" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manutention" } }
          ]
        }
      ]
    },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Belgique" },
      { "@type": "Country", name: "Suisse" },
      { "@type": "Country", name: "Luxembourg" },
      { "@type": "Country", name: "Monaco" },
      { "@type": "Country", name: "Allemagne" },
      { "@type": "Country", name: "Espagne" },
      { "@type": "Country", name: "Italie" },
      { "@type": "Country", name: "Royaume-Uni" },
      { "@type": "GeoCircle", name: "Europe" },
      { "@type": "GeoCircle", name: "Moyen-Orient" }
    ],
    slogan: "Votre partenaire salons & événements B2B en France",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * Service schema for individual service pages
 */
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
  areaServed?: string[];
  priceRange?: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  image = "https://baattitude.fr/og-image.jpg",
  provider = "BA ATTITUDE",
  areaServed = ["France", "Europe"],
  priceRange = "€€€"
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": url,
    name,
    description,
    url,
    image,
    provider: {
      "@type": "Organization",
      "@id": "https://baattitude.fr/#organization",
      name: provider
    },
    areaServed: areaServed.map(area => ({
      "@type": "Place",
      name: area
    })),
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      price: priceRange
    },
    termsOfService: "https://baattitude.fr/mentions-legales",
    serviceType: name
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * HowTo schema for process/methodology sections
 * Great for AI systems to understand step-by-step processes
 */
interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
}

export function HowToSchema({ name, description, steps, totalTime = "P2W" }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image })
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * ItemList schema for collections (services, projects, etc.)
 * Helps AI understand list structure
 */
interface ItemListItem {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

interface ItemListSchemaProps {
  name: string;
  description: string;
  items: ItemListItem[];
}

export function ItemListSchema({ name, description, items }: ItemListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: item.name,
        url: item.url,
        ...(item.description && { description: item.description }),
        ...(item.image && { image: item.image })
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

/**
 * SpeakableSpecification for voice search optimization
 * Important for AI assistants like Alexa, Google Assistant
 */
interface SpeakableProps {
  cssSelector?: string[];
  xpath?: string[];
}

export function SpeakableSchema({ 
  cssSelector = ["article h1", "article .summary", ".faq-answer"],
  xpath 
}: SpeakableProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      ...(cssSelector && { cssSelector }),
      ...(xpath && { xpath })
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
