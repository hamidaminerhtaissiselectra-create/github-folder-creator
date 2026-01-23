import { Helmet } from "react-helmet-async";

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  publisher?: {
    name: string;
    logo: string;
  };
}

export function ArticleSchema({
  title,
  description,
  image,
  author,
  datePublished,
  dateModified,
  url,
  publisher = {
    name: "BA Attitude",
    logo: "https://baattitude.fr/favicon.png"
  }
}: ArticleSchemaProps) {
  // Convert French date to ISO format
  const parseDate = (frenchDate: string): string => {
    const months: Record<string, string> = {
      "Janvier": "01", "Février": "02", "Mars": "03", "Avril": "04",
      "Mai": "05", "Juin": "06", "Juillet": "07", "Août": "08",
      "Septembre": "09", "Octobre": "10", "Novembre": "11", "Décembre": "12"
    };
    
    const parts = frenchDate.split(" ");
    if (parts.length === 3) {
      const day = parts[0].padStart(2, '0');
      const month = months[parts[1]] || "01";
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    return new Date().toISOString().split('T')[0];
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image.startsWith('http') ? image : `https://baattitude.fr${image}`,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": publisher.name,
      "logo": {
        "@type": "ImageObject",
        "url": publisher.logo
      }
    },
    "datePublished": parseDate(datePublished),
    "dateModified": dateModified ? parseDate(dateModified) : parseDate(datePublished),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
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
