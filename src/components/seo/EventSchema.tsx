import { Helmet } from "react-helmet-async";

interface EventSchemaProps {
  name: string;
  description: string;
  image: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    address: string;
  };
  organizer?: {
    name: string;
    url: string;
  };
  url?: string;
}

export function EventSchema({
  name,
  description,
  image,
  startDate,
  endDate,
  location,
  organizer = {
    name: "BA Attitude",
    url: "https://baattitude.fr"
  },
  url
}: EventSchemaProps) {
  // Convert year to full ISO date
  const parseDate = (year: string): string => {
    if (year.length === 4) {
      return `${year}-01-01`;
    }
    return year;
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "image": image.startsWith('http') ? image : `https://baattitude.fr${image}`,
    "startDate": parseDate(startDate),
    "endDate": endDate ? parseDate(endDate) : parseDate(startDate),
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": location.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location.address
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": organizer.name,
      "url": organizer.url
    },
    "performer": {
      "@type": "Organization",
      "name": "BA Attitude - Prestataire technique événementiel"
    },
    ...(url && { "url": url })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
