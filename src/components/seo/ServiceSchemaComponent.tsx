import { Helmet } from "react-helmet-async";

interface ServiceSchemaComponentProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string[];
  url: string;
  image?: string;
  priceRange?: string;
  category?: string;
  serviceOutput?: string;
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
}

/**
 * ServiceSchema Component for individual service pages
 * Generates rich JSON-LD markup for Google's service rich results
 */
export function ServiceSchemaComponent({
  name,
  description,
  provider = "BA ATTITUDE",
  areaServed = ["France", "Europe", "International"],
  url,
  image,
  priceRange = "€€€",
  category = "Prestations techniques événementielles",
  serviceOutput,
  aggregateRating,
}: ServiceSchemaComponentProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "category": category,
    "serviceType": name,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider,
      "url": "https://baattitude.fr",
      "telephone": "+33601591920",
      "email": "contact@baattitude.fr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "16 Rue des Pendants",
        "addressLocality": "Pontault-Combault",
        "postalCode": "77340",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.8034,
        "longitude": 2.6061
      },
      "priceRange": priceRange
    },
    "areaServed": areaServed.map(area => ({
      "@type": area === "France" ? "Country" : "GeoCircle",
      "name": area
    })),
    ...(image && {
      "image": image.startsWith('http') ? image : `https://baattitude.fr${image}`
    }),
    ...(serviceOutput && {
      "serviceOutput": serviceOutput
    }),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "ratingCount": aggregateRating.ratingCount,
        "bestRating": 5,
        "worstRating": 1
      }
    }),
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR"
      }
    },
    "termsOfService": "https://baattitude.fr/mentions-legales",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Services ${name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": name
          }
        }
      ]
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
