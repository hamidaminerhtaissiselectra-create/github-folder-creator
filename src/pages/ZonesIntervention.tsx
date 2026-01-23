import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle, Globe, Truck, Clock, Users, Phone, Building2, ChevronDown } from "lucide-react";
import { FadeInSection, StaggerContainer, staggerItem } from "@/components/animations/ParallaxSection";
import { LocalBusinessSchema, FAQSchema, SEOHead, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import zonesInterventionFrance from "@/assets/zones-intervention-france.jpg";
import salonMontage from "@/assets/salon-montage-lyon-professionnel.jpg";

// Données des régions avec leurs spécificités
const regions = [
  {
    id: "ile-de-france",
    name: "Île-de-France",
    cities: ["Paris", "La Défense", "Villepinte", "Le Bourget", "Versailles", "Saint-Denis"],
    venues: ["Paris Expo Porte de Versailles", "Paris Nord Villepinte", "Palais des Congrès", "Paris Le Bourget"],
    majorEvents: ["Maison & Objet", "SIAL Paris", "Première Vision", "Paris Retail Week"],
    description: "Première région économique de France, l'Île-de-France concentre les plus grands salons professionnels internationaux."
  },
  {
    id: "auvergne-rhone-alpes",
    name: "Auvergne-Rhône-Alpes",
    cities: ["Lyon", "Grenoble", "Saint-Étienne", "Chambéry", "Annecy", "Clermont-Ferrand"],
    venues: ["Eurexpo Lyon", "Centre de Congrès de Lyon", "Alpexpo Grenoble", "Parc des Expositions Saint-Étienne"],
    majorEvents: ["Sirha", "Pollutec", "Global Industrie", "Workspace Expo"],
    description: "Deuxième pôle économique français, la région Auvergne-Rhône-Alpes accueille des salons majeurs dans l'industrie et la restauration."
  },
  {
    id: "provence-alpes-cote-azur",
    name: "Provence-Alpes-Côte d'Azur",
    cities: ["Marseille", "Nice", "Cannes", "Monaco", "Aix-en-Provence", "Toulon"],
    venues: ["Parc Chanot Marseille", "Palais des Festivals Cannes", "Grimaldi Forum Monaco", "Nice Acropolis"],
    majorEvents: ["MIPIM", "MAPIC", "Cannes Lions", "Heavent Meetings"],
    description: "La région PACA attire les événements internationaux du luxe, de l'immobilier et des médias créatifs."
  },
  {
    id: "nouvelle-aquitaine",
    name: "Nouvelle-Aquitaine",
    cities: ["Bordeaux", "Toulouse", "Pau", "La Rochelle", "Biarritz", "Limoges"],
    venues: ["Parc des Expositions Bordeaux", "MEETT Toulouse", "Palais Beaumont Pau", "Espace Encan La Rochelle"],
    majorEvents: ["Vinexpo", "Vinitech-Sifel", "Siane", "Aquibat"],
    description: "Capitale mondiale du vin, la Nouvelle-Aquitaine accueille les grands rendez-vous de la viticulture et de l'aéronautique."
  },
  {
    id: "hauts-de-france",
    name: "Hauts-de-France",
    cities: ["Lille", "Amiens", "Roubaix", "Dunkerque", "Calais", "Valenciennes"],
    venues: ["Lille Grand Palais", "Zénith de Lille", "Stade Pierre Mauroy", "Mégacité Amiens"],
    majorEvents: ["World Forum Lille", "SIMI Nord", "Salon des Entrepreneurs", "Salon de l'Habitat"],
    description: "Carrefour européen, les Hauts-de-France bénéficient d'une position stratégique pour les événements B2B transfrontaliers."
  },
  {
    id: "grand-est",
    name: "Grand Est",
    cities: ["Strasbourg", "Metz", "Nancy", "Reims", "Mulhouse", "Colmar"],
    venues: ["Parc des Expositions Strasbourg", "Metz Expo", "Centre Prouvé Nancy", "Reims Congrès Expo"],
    majorEvents: ["Foire Européenne", "Salon Made in France Est", "Viteff", "Vinisud"],
    description: "Région frontalière avec l'Allemagne, le Grand Est accueille des salons à rayonnement européen."
  },
  {
    id: "pays-de-la-loire",
    name: "Pays de la Loire",
    cities: ["Nantes", "Le Mans", "Angers", "Saint-Nazaire", "La Roche-sur-Yon", "Cholet"],
    venues: ["Parc des Expositions Beaujoire", "Cité des Congrès Nantes", "Exponantes", "Centre des Congrès Angers"],
    majorEvents: ["Salon du Végétal", "Serbotel", "Carrefour International du Bois", "24h du Mans"],
    description: "Dynamique et innovante, la région Pays de la Loire se distingue dans les secteurs végétal, nautique et agroalimentaire."
  },
  {
    id: "bretagne",
    name: "Bretagne",
    cities: ["Rennes", "Brest", "Lorient", "Saint-Malo", "Vannes", "Quimper"],
    venues: ["Parc Expo Rennes", "Brest Arena", "Palais des Congrès Saint-Malo", "Vannes Parc Expo"],
    majorEvents: ["CFIA Rennes", "Salon Nautique Brest", "Breizh Fab", "SPACE"],
    description: "Leader de l'agroalimentaire, la Bretagne est incontournable pour les salons de l'industrie alimentaire et du nautisme."
  },
  {
    id: "occitanie",
    name: "Occitanie",
    cities: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Béziers", "Carcassonne"],
    venues: ["MEETT Toulouse", "Parc des Expositions Montpellier", "Arènes de Nîmes", "Parc Chanot Perpignan"],
    majorEvents: ["Siane", "Vinisud", "Millésime Bio", "Toulouse Space Show"],
    description: "Région aéronautique et viticole, l'Occitanie accueille des événements dans l'aérospatiale et les vins du sud."
  },
  {
    id: "normandie",
    name: "Normandie",
    cities: ["Rouen", "Le Havre", "Caen", "Cherbourg", "Évreux", "Dieppe"],
    venues: ["Parc Expo Rouen", "Carré des Docks Le Havre", "Parc des Expositions Caen", "La Cité de la Mer Cherbourg"],
    majorEvents: ["Salon des Entrepreneurs Normandie", "SIDO Normandie", "Normandie Équine", "Caen Congrès"],
    description: "Porte maritime de la France, la Normandie organise des événements dans le secteur portuaire et équin."
  },
  {
    id: "bourgogne-franche-comte",
    name: "Bourgogne-Franche-Comté",
    cities: ["Dijon", "Besançon", "Chalon-sur-Saône", "Auxerre", "Belfort", "Nevers"],
    venues: ["Parc des Expositions Dijon", "Micropolis Besançon", "Parc Expo Chalon", "Centre de Congrès Belfort"],
    majorEvents: ["Vinipro", "Salon des Vins Mâcon", "Micronora", "Industrie Paris Est"],
    description: "Réputée pour sa gastronomie et ses vins, la Bourgogne-Franche-Comté accueille les professionnels de la viticulture et de la microtechnique."
  },
  {
    id: "centre-val-de-loire",
    name: "Centre-Val de Loire",
    cities: ["Tours", "Orléans", "Bourges", "Chartres", "Blois", "Châteauroux"],
    venues: ["Parc Expo Tours", "CO'Met Orléans", "Palais d'Auron Bourges", "Chartrexpo"],
    majorEvents: ["Vinitech Val de Loire", "Salon des Vins de Loire", "ForumPlast", "Paysalia"],
    description: "Au cœur de la France, le Centre-Val de Loire offre une accessibilité idéale pour les salons nationaux."
  },
  {
    id: "corse",
    name: "Corse",
    cities: ["Ajaccio", "Bastia", "Porto-Vecchio", "Calvi", "Corte"],
    venues: ["Palais des Congrès Ajaccio", "Centre Culturel Bastia", "Complexe Sportif Porto-Vecchio"],
    majorEvents: ["Fiera di Bastia", "Salon du Terroir Corse", "Festiventu"],
    description: "L'île de Beauté accueille des événements mettant en valeur son patrimoine et ses produits du terroir."
  }
];

// FAQ par région - SEO régional complet
const regionalFaqs: Record<string, { question: string; answer: string }[]> = {
  "ile-de-france": [
    {
      question: "Comment BA Attitude intervient-elle sur les salons parisiens ?",
      answer: "Basés en Île-de-France, nous intervenons en moins de 24 heures sur tous les sites parisiens : Paris Expo Porte de Versailles, Paris Nord Villepinte, Palais des Congrès, Paris Le Bourget. Notre équipe connaît parfaitement les spécificités de chaque lieu (accès, réglementations, contacts organisateurs) pour garantir un montage fluide et efficace."
    },
    {
      question: "Quels sont les délais de montage sur les grands salons parisiens ?",
      answer: "Sur les grands salons parisiens comme Maison & Objet ou le SIAL, nous optimisons les créneaux de montage souvent limités (24 à 48h). Nos équipes travaillent en roulement pour respecter les délais imposés par les organisateurs, avec un suivi en temps réel de l'avancement du chantier."
    },
    {
      question: "Proposez-vous un stockage de matériel en Île-de-France ?",
      answer: "Oui, notre entrepôt de 2000m² en région parisienne permet de stocker votre matériel de stand entre les salons. Nous assurons l'inventaire, la maintenance et le conditionnement de vos équipements pour une réutilisation optimale sur vos prochains événements."
    }
  ],
  "auvergne-rhone-alpes": [
    {
      question: "Intervenez-vous sur Eurexpo Lyon et les salons lyonnais ?",
      answer: "Absolument. BA Attitude est présent sur tous les salons majeurs d'Eurexpo Lyon (Sirha, Pollutec, Global Industrie) ainsi qu'au Centre de Congrès de Lyon. Nous disposons de partenaires locaux pour optimiser la logistique et les coûts de transport depuis notre base francilienne."
    },
    {
      question: "Comment gérez-vous les salons à Grenoble et Saint-Étienne ?",
      answer: "Nous intervenons régulièrement à Alpexpo Grenoble et au Parc des Expositions de Saint-Étienne. Notre réseau de partenaires locaux nous permet de mobiliser des équipes sur place rapidement, tout en assurant la coordination depuis notre siège et le suivi qualité de nos prestations."
    },
    {
      question: "Quel est votre délai d'intervention en Auvergne-Rhône-Alpes ?",
      answer: "Nous garantissons une mobilisation sous 48 heures sur l'ensemble de la région Auvergne-Rhône-Alpes. Pour les événements planifiés à l'avance, nous organisons le transport du matériel et l'hébergement des équipes pour une intervention optimale."
    }
  ],
  "provence-alpes-cote-azur": [
    {
      question: "Accompagnez-vous les exposants au MIPIM et MAPIC à Cannes ?",
      answer: "Oui, nous sommes partenaires de nombreux exposants sur les salons de l'immobilier à Cannes (MIPIM, MAPIC). Notre expertise couvre la conception de stands premium, la logistique vers le Palais des Festivals et la coordination avec les équipes techniques du site."
    },
    {
      question: "Intervenez-vous au Parc Chanot de Marseille ?",
      answer: "BA Attitude intervient sur tous les salons du Parc Chanot à Marseille. Nous connaissons les contraintes d'accès et les réglementations locales pour garantir un montage dans les temps. Notre proximité avec Monaco nous permet également d'intervenir au Grimaldi Forum."
    },
    {
      question: "Comment gérez-vous la logistique vers la Côte d'Azur ?",
      answer: "Pour les événements en PACA, nous organisons le transport par véhicules dédiés depuis notre entrepôt francilien. Nos chauffeurs connaissent les itinéraires optimaux et les contraintes d'accès aux sites. Pour les salons récurrents, nous proposons un stockage local chez nos partenaires."
    }
  ],
  "nouvelle-aquitaine": [
    {
      question: "Accompagnez-vous les exposants à Vinexpo Bordeaux ?",
      answer: "Vinexpo est un rendez-vous incontournable pour nos clients du secteur viticole. Nous assurons le montage de stands sur mesure, la scénographie adaptée à l'univers du vin et la coordination logistique. Notre expérience de ce salon nous permet d'anticiper les spécificités du Parc des Expositions de Bordeaux."
    },
    {
      question: "Intervenez-vous à Toulouse et dans le sud-ouest ?",
      answer: "Oui, nous intervenons régulièrement au MEETT Toulouse pour les salons de l'aéronautique (Siane) et de l'industrie. Notre réseau couvre également Pau, La Rochelle et Biarritz pour les événements régionaux et les congrès professionnels."
    },
    {
      question: "Quel est votre délai de mobilisation en Nouvelle-Aquitaine ?",
      answer: "Nous garantissons une intervention sous 48 à 72 heures sur l'ensemble de la région Nouvelle-Aquitaine. Pour les salons majeurs comme Vinexpo ou Vinitech-Sifel, nous planifions les équipes plusieurs semaines à l'avance."
    }
  ],
  "hauts-de-france": [
    {
      question: "Intervenez-vous au Lille Grand Palais ?",
      answer: "BA Attitude est présent sur les principaux événements du Lille Grand Palais : World Forum, salons professionnels et congrès. Notre proximité géographique avec Paris nous permet une grande réactivité sur cette région stratégique."
    },
    {
      question: "Accompagnez-vous les exposants vers la Belgique depuis Lille ?",
      answer: "Oui, la position frontalière de Lille en fait une base idéale pour les salons belges (Brussels Expo, Kortrijk Xpo). Nous gérons les formalités douanières et la logistique transfrontalière pour une intervention sans accroc."
    },
    {
      question: "Intervenez-vous à Amiens et dans la Somme ?",
      answer: "Nous couvrons l'ensemble des Hauts-de-France, y compris Amiens (Mégacité), Arras et les villes du littoral. Notre réseau de partenaires locaux nous permet de mobiliser des équipes rapidement sur tous les sites d'exposition de la région."
    }
  ],
  "grand-est": [
    {
      question: "Intervenez-vous sur la Foire Européenne de Strasbourg ?",
      answer: "La Foire Européenne de Strasbourg est un événement majeur sur lequel nous accompagnons de nombreux exposants. Notre expérience du Parc des Expositions de Strasbourg nous permet de gérer efficacement les contraintes logistiques et réglementaires de ce site frontalier."
    },
    {
      question: "Accompagnez-vous les exposants français sur les salons allemands ?",
      answer: "Oui, notre positionnement dans le Grand Est facilite l'accès aux grands salons allemands (Foire de Hanovre, Francfort, Düsseldorf). Nous gérons le transport transfrontalier, les carnets ATA et la coordination avec les partenaires locaux allemands."
    },
    {
      question: "Intervenez-vous à Metz, Nancy et Reims ?",
      answer: "Nous couvrons l'ensemble du Grand Est : Metz Expo, Centre Prouvé Nancy, Reims Congrès Expo, et les sites d'Alsace. Notre connaissance des spécificités locales garantit des interventions fluides sur chaque site."
    }
  ],
  "pays-de-la-loire": [
    {
      question: "Intervenez-vous sur les salons de la Cité des Congrès de Nantes ?",
      answer: "BA Attitude accompagne les exposants sur les événements de la Cité des Congrès et du Parc des Expositions de la Beaujoire à Nantes. Nous intervenons sur des salons clés comme Serbotel et le Carrefour International du Bois."
    },
    {
      question: "Accompagnez-vous les salons au Mans et à Angers ?",
      answer: "Oui, nous couvrons l'ensemble des Pays de la Loire : Le Mans (24h du Mans, salons professionnels), Angers (Centre des Congrès), Saint-Nazaire et les villes du littoral. Notre réseau de partenaires locaux garantit une mobilisation rapide."
    },
    {
      question: "Quel est votre délai d'intervention à Nantes ?",
      answer: "Depuis notre base francilienne, nous intervenons sous 48 heures à Nantes et dans les Pays de la Loire. Pour les salons planifiés, nous optimisons la logistique en groupant les transports avec d'autres chantiers régionaux."
    }
  ],
  "bretagne": [
    {
      question: "Intervenez-vous au CFIA Rennes ?",
      answer: "Le CFIA (Carrefour des Fournisseurs de l'Industrie Agroalimentaire) est un salon majeur sur lequel nous accompagnons de nombreux exposants. Notre expertise du Parc Expo de Rennes nous permet d'optimiser les montages dans les délais souvent serrés."
    },
    {
      question: "Accompagnez-vous les exposants au Salon Nautique de Brest ?",
      answer: "Oui, nous intervenons sur les événements nautiques de Bretagne : Salon Nautique de Brest, salons à Lorient et à Saint-Malo. Notre expérience de ces événements techniques nous permet de gérer les contraintes spécifiques des espaces maritimes."
    },
    {
      question: "Intervenez-vous sur l'ensemble de la Bretagne ?",
      answer: "BA Attitude couvre toute la Bretagne : Rennes, Brest, Lorient, Vannes, Saint-Malo et Quimper. Notre réseau de partenaires locaux nous permet de mobiliser des équipes rapidement sur tous les sites d'exposition bretons."
    }
  ],
  "occitanie": [
    {
      question: "Intervenez-vous au MEETT Toulouse ?",
      answer: "Le MEETT est le nouveau centre d'exposition de Toulouse, sur lequel nous accompagnons les exposants pour les salons de l'aéronautique (Siane, Toulouse Space Show) et de l'industrie. Notre connaissance du site nous permet d'optimiser les accès et les montages."
    },
    {
      question: "Accompagnez-vous les exposants à Montpellier et Nîmes ?",
      answer: "Oui, nous intervenons sur les salons de Montpellier (Parc des Expositions, Corum), Nîmes et Perpignan. L'Occitanie accueille de nombreux événements viticoles (Vinisud, Millésime Bio) sur lesquels nous avons une forte expertise."
    },
    {
      question: "Quel est votre délai de mobilisation en Occitanie ?",
      answer: "Nous garantissons une intervention sous 48 à 72 heures sur l'ensemble de l'Occitanie. Pour les salons majeurs comme Siane ou Vinisud, nous planifions les équipes plusieurs semaines à l'avance et optimisons la logistique."
    }
  ],
  "normandie": [
    {
      question: "Intervenez-vous sur les salons de Rouen et du Havre ?",
      answer: "BA Attitude accompagne les exposants sur les principaux sites normands : Parc Expo de Rouen, Carré des Docks au Havre, Parc des Expositions de Caen. Notre proximité avec Paris nous permet une grande réactivité sur cette région."
    },
    {
      question: "Accompagnez-vous les événements maritimes en Normandie ?",
      answer: "Oui, la Normandie accueille de nombreux événements liés au secteur maritime et portuaire. Nous intervenons sur les salons du Havre, de Cherbourg (Cité de la Mer) et de Dieppe avec une expertise adaptée aux contraintes de ces sites."
    },
    {
      question: "Quel est votre délai d'intervention en Normandie ?",
      answer: "La Normandie étant proche de notre base francilienne, nous garantissons une intervention sous 24 à 48 heures sur l'ensemble de la région. Les trajets courts permettent également une optimisation des coûts de transport."
    }
  ],
  "bourgogne-franche-comte": [
    {
      question: "Intervenez-vous sur les salons viticoles de Bourgogne ?",
      answer: "La Bourgogne est une région clé pour les salons viticoles (Vinipro, Salon des Vins de Mâcon). Nous accompagnons les domaines et négociants sur ces événements avec une scénographie adaptée à l'univers du vin et des stands fonctionnels."
    },
    {
      question: "Accompagnez-vous les exposants à Besançon et Belfort ?",
      answer: "Oui, nous intervenons sur Micropolis Besançon (Micronora, salons de la microtechnique) et à Belfort. Notre réseau couvre l'ensemble de la Franche-Comté pour les événements industriels et professionnels."
    },
    {
      question: "Quel est votre délai de mobilisation en Bourgogne-Franche-Comté ?",
      answer: "Depuis Paris, nous intervenons sous 48 heures sur l'ensemble de la région Bourgogne-Franche-Comté. Pour les salons viticoles récurrents, nous proposons des formules annuelles avec stockage du matériel entre les événements."
    }
  ],
  "centre-val-de-loire": [
    {
      question: "Intervenez-vous sur les salons de Tours et Orléans ?",
      answer: "BA Attitude accompagne les exposants sur le Parc Expo de Tours et le CO'Met Orléans. La position centrale de cette région en fait un hub idéal pour les événements nationaux, avec une accessibilité optimale depuis toute la France."
    },
    {
      question: "Accompagnez-vous les salons des vins de Loire ?",
      answer: "Oui, le Centre-Val de Loire accueille des événements majeurs du monde viticole (Salon des Vins de Loire, Vinitech Val de Loire). Nous proposons des stands adaptés à l'univers du vin avec une scénographie élégante."
    },
    {
      question: "Quel est votre délai d'intervention en Centre-Val de Loire ?",
      answer: "La région étant très accessible depuis Paris, nous garantissons une intervention sous 24 à 48 heures sur l'ensemble du Centre-Val de Loire. Les coûts de transport sont optimisés grâce à la proximité géographique."
    }
  ],
  "corse": [
    {
      question: "Intervenez-vous sur les événements en Corse ?",
      answer: "BA Attitude accompagne les exposants sur les événements corses : Fiera di Bastia, salons du terroir, congrès à Ajaccio. Nous gérons la logistique maritime ou aérienne et coordonnons avec les partenaires locaux sur l'île."
    },
    {
      question: "Comment gérez-vous le transport du matériel vers la Corse ?",
      answer: "Nous organisons le transport par ferry depuis le continent (Marseille, Nice, Toulon) ou par fret aérien pour les urgences. Notre expérience de la logistique insulaire nous permet d'anticiper les délais et de garantir une livraison dans les temps."
    },
    {
      question: "Quel est votre délai de mobilisation pour la Corse ?",
      answer: "Compte tenu des contraintes logistiques insulaires, nous prévoyons un délai de 5 à 7 jours pour une intervention en Corse. Pour les événements planifiés, nous organisons le transport bien en amont pour sécuriser les créneaux de ferry."
    }
  ]
};

// FAQ générales nationales
const generalFaqs = [
  {
    question: "Dans quelles villes intervenez-vous en France ?",
    answer: "BA Attitude intervient sur l'ensemble du territoire français, dans les 13 régions métropolitaines et en Corse. Nous sommes particulièrement présents en Île-de-France, Lyon, Marseille, Bordeaux, Lille, Nantes, Strasbourg, Toulouse et dans toutes les grandes métropoles. Notre réseau de partenaires locaux nous permet de couvrir également les villes moyennes et les sites d'exposition régionaux."
  },
  {
    question: "Quel est votre délai d'intervention sur site ?",
    answer: "Nous garantissons une intervention sous 24 heures en Île-de-France, 48 heures dans les grandes métropoles régionales (Lyon, Marseille, Bordeaux, Lille, Nantes) et 72 heures sur le reste du territoire. Pour les zones isolées ou la Corse, le délai peut être de 5 à 7 jours en raison des contraintes logistiques."
  },
  {
    question: "Intervenez-vous à l'international ?",
    answer: "Oui, BA Attitude intervient sur tous les continents. Nous accompagnons nos clients français sur les salons européens (Allemagne, Italie, Espagne, Royaume-Uni, Benelux) et internationaux (États-Unis, Moyen-Orient, Asie). Notre équipe dédiée gère la logistique export, les formalités douanières (carnets ATA) et la coordination avec les partenaires locaux."
  },
  {
    question: "Comment gérez-vous la logistique pour les salons en région ?",
    answer: "Nous disposons d'un réseau de partenaires logistiques dans chaque grande région française. Le matériel est transporté depuis notre entrepôt francilien ou directement depuis vos locaux, avec un suivi GPS en temps réel. Nos équipes techniques se déplacent sur site pour le montage, le suivi pendant l'événement et le démontage. Pour les clients participant à plusieurs salons par an, nous proposons des solutions de stockage régional."
  },
  {
    question: "Proposez-vous un accompagnement pour plusieurs salons par an ?",
    answer: "Oui, nous proposons des contrats-cadres annuels pour les entreprises exposant régulièrement. Ces formules incluent une tarification préférentielle, un chef de projet dédié qui connaît votre stand et vos besoins, le stockage de votre matériel entre les salons, et une planification annuelle optimisée. Cela vous garantit une cohérence de qualité sur tous vos événements."
  },
  {
    question: "Quels types de salons couvrez-vous ?",
    answer: "Nous intervenons sur tous types de salons professionnels B2B : industrie (aéronautique, automobile, métallurgie), agroalimentaire et restauration, mode et textile, high-tech et digital, bâtiment et immobilier, santé et pharmaceutique, luxe et cosmétique, environnement et énergie. Notre expertise couvre les foires, expositions, congrès, conventions d'entreprise et tous les événements professionnels."
  },
  {
    question: "Quels sont vos engagements qualité sur chaque intervention ?",
    answer: "Sur chaque chantier, nous nous engageons sur : le respect des délais de montage imposés par l'organisateur, la conformité aux normes de sécurité ERP, la propreté du stand à l'ouverture, une permanence technique joignable pendant toute la durée du salon, et un démontage soigné avec remise en état des lieux. Notre taux de satisfaction client est de 98%."
  },
  {
    question: "Comment obtenir un devis pour un salon en région ?",
    answer: "Contactez-nous par téléphone au 06 01 59 19 20 ou via notre formulaire de contact. Précisez le nom du salon, la ville, les dates, la surface de votre stand et les prestations souhaitées (montage seul, scénographie complète, logistique...). Nous vous envoyons un devis détaillé sous 24 à 48 heures."
  }
];

// Combiner toutes les FAQ pour le schema SEO
const allFaqsForSchema = [
  ...generalFaqs,
  ...Object.values(regionalFaqs).flat()
];

const stats = [
  { value: "500+", label: "Salons accompagnés par an", icon: Building2 },
  { value: "15+", label: "Années d'expertise", icon: Clock },
  { value: "24h", label: "Délai d'intervention IDF", icon: Truck },
  { value: "13", label: "Régions couvertes", icon: MapPin }
];

export default function ZonesIntervention() {
  return (
    <Layout>
      <SEOHead
        title="Zones d'Intervention France & International | Montage Stands Salons | BA Attitude"
        description="BA Attitude intervient sur tous vos salons professionnels dans les 13 régions de France et à l'international. Montage, démontage de stands et logistique événementielle sur l'ensemble du territoire : Paris, Lyon, Marseille, Bordeaux, Lille, Nantes, Strasbourg, Toulouse."
        canonical="https://baattitude.fr/zones-intervention"
        ogUrl="https://baattitude.fr/zones-intervention"
        ogType="website"
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={allFaqsForSchema} />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://baattitude.fr" },
        { name: "Zones d'intervention", url: "https://baattitude.fr/zones-intervention" }
      ]} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={zonesInterventionFrance}
            alt="Intervention montage stands salons professionnels France"
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
                Couverture nationale & internationale
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Montage de Stands dans <span className="text-gradient-gold">Toute la France</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              BA Attitude intervient sur l'ensemble du territoire français — 13 régions métropolitaines et Corse — ainsi qu'à l'international pour accompagner vos participations à des salons professionnels, foires et événements B2B. Notre organisation logistique et notre réseau de partenaires locaux garantissent un service de qualité partout où vous exposez.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Demander un devis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+33601591920">
                  <Phone className="w-4 h-4 mr-2" />
                  06 01 59 19 20
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction SEO enrichie */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection className="max-w-2xl">
              <h2 className="text-3xl font-display font-bold text-card-foreground mb-6">
                Une Présence Nationale pour vos <span className="text-gradient-gold">Événements B2B</span>
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  Depuis plus de 15 ans, <strong>BA Attitude</strong> accompagne les entreprises françaises et internationales sur leurs participations à des salons professionnels partout en France. Notre expertise couvre l'ensemble de la chaîne de valeur : de la conception de votre stand à son installation, de la coordination terrain au démontage final.
                </p>
                <p className="mb-4">
                  Que vous exposiez à <strong>Paris Expo Porte de Versailles</strong>, à <strong>Eurexpo Lyon</strong>, au <strong>Parc Chanot de Marseille</strong>, au <strong>Palais des Festivals de Cannes</strong>, au <strong>MEETT Toulouse</strong> ou au <strong>Lille Grand Palais</strong>, notre équipe se déplace avec le même niveau d'exigence et de professionnalisme. Nous connaissons les spécificités de chaque lieu d'exposition, les réglementations locales et les interlocuteurs clés.
                </p>
                <p>
                  Notre organisation logistique repose sur un entrepôt central de 2000m² en région parisienne et un réseau de partenaires locaux dans chaque grande métropole. Cette structure nous permet d'optimiser les coûts de transport tout en garantissant une réactivité maximale, même pour les demandes de dernière minute.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={salonMontage}
                  alt="Vue d'ensemble salon professionnel France"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              13 Régions + Corse
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-card-foreground">
              Nos Régions d'<span className="text-gradient-gold">Intervention</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Nous intervenons sur les principaux sites d'exposition et centres de congrès de chaque région française, du nord au sud et de l'est à l'ouest.
            </p>
          </FadeInSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regions.map((region) => (
              <motion.div
                key={region.id}
                variants={staggerItem}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-gold transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-lg font-display font-bold text-card-foreground">
                    {region.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {region.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs text-primary uppercase tracking-wider mb-2">Villes principales</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {region.cities.slice(0, 4).join(", ")}...
                  </p>
                </div>
                <div>
                  <p className="text-xs text-primary uppercase tracking-wider mb-2">Lieux phares</p>
                  <ul className="space-y-1">
                    {region.venues.slice(0, 2).map((venue) => (
                      <li key={venue} className="text-sm text-muted-foreground flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="truncate">{venue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Régionales - Section SEO majeure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Questions par région
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-card-foreground">
              FAQ <span className="text-gradient-gold">Régionales</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Retrouvez les réponses aux questions les plus fréquentes pour chaque région de France où nous intervenons.
            </p>
          </FadeInSection>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {regions.map((region) => (
                <AccordionItem
                  key={region.id}
                  value={region.id}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <span className="text-lg font-display font-semibold text-card-foreground">
                          {region.name}
                        </span>
                        <p className="text-sm text-muted-foreground font-normal mt-1">
                          {region.cities.slice(0, 3).join(", ")}...
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-6 pt-2">
                      {regionalFaqs[region.id]?.map((faq, index) => (
                        <div key={index} className="border-l-2 border-primary/30 pl-4">
                          <h4 className="font-semibold text-card-foreground mb-2">
                            {faq.question}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* International */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
                Accompagnement international
              </span>
              <h2 className="text-3xl font-display font-bold text-card-foreground mb-6">
                Vos Salons à l'<span className="text-gradient-gold">International</span>
              </h2>
              <div className="prose text-muted-foreground">
                <p className="mb-4">
                  BA Attitude accompagne les entreprises françaises sur les principaux salons internationaux. Notre équipe dédiée gère l'ensemble de la logistique export : transport routier, maritime ou aérien, formalités douanières (carnets ATA), coordination avec les partenaires locaux et conformité aux réglementations de chaque pays.
                </p>
                <p className="mb-4">
                  Nous intervenons régulièrement sur les salons majeurs en <strong>Europe</strong> (Foire de Hanovre, Fiera Milano, IFEMA Madrid, NEC Birmingham), aux <strong>États-Unis</strong> (CES Las Vegas, NRF New York, SXSW Austin) et au <strong>Moyen-Orient</strong> (Gulfood Dubaï, Arab Health, GITEX).
                </p>
                <p>
                  Notre expérience internationale nous permet de vous accompagner sereinement sur tous les continents, avec la même exigence de qualité que sur le territoire français.
                </p>
              </div>
              <div className="mt-6">
                <Button variant="hero" asChild>
                  <Link to="/international">
                    Découvrir nos services internationaux
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { zone: "Europe", countries: "Allemagne, Italie, Espagne, UK, Benelux, Suisse" },
                  { zone: "Amérique", countries: "États-Unis, Canada, Mexique, Brésil, Argentine" },
                  { zone: "Moyen-Orient", countries: "Émirats, Arabie Saoudite, Qatar, Koweït" },
                  { zone: "Asie-Pacifique", countries: "Chine, Japon, Singapour, Australie, Corée" }
                ].map((item) => (
                  <div key={item.zone} className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                    <Globe className="w-6 h-6 text-primary mb-3" />
                    <h4 className="font-semibold text-card-foreground mb-1">{item.zone}</h4>
                    <p className="text-xs text-muted-foreground">{item.countries}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Organization Logistique */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-card-foreground">
              Notre Organisation <span className="text-gradient-gold">Logistique</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Une infrastructure pensée pour garantir réactivité et qualité sur tout le territoire
            </p>
          </FadeInSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Entrepôt Central",
                description: "Notre entrepôt de 2000m² en Île-de-France permet de stocker votre matériel entre les salons, préparer les expéditions et assurer la maintenance de vos équipements. Inventaire informatisé et conditions de stockage optimales."
              },
              {
                icon: Truck,
                title: "Flotte Dédiée",
                description: "Véhicules utilitaires et semi-remorques pour acheminer votre matériel partout en France et en Europe. Suivi GPS en temps réel, chauffeurs formés à la manutention événementielle et respect des délais garantis."
              },
              {
                icon: Users,
                title: "Équipes Terrain",
                description: "Monteurs, techniciens et régisseurs qualifiés se déplacent sur site pour l'installation et la coordination de votre stand. Équipes formées aux normes de sécurité et aux spécificités de chaque parc d'exposition."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/30 transition-colors"
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Générales SEO */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-card-foreground">
              Questions <span className="text-gradient-gold">Fréquentes</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Tout ce que vous devez savoir sur nos zones d'intervention et notre organisation
            </p>
          </FadeInSection>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {generalFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`general-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="py-5 hover:no-underline text-left">
                    <span className="font-semibold text-card-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
              Un Salon en <span className="text-gradient-gold">Vue</span> ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Que votre prochain événement soit à Paris, Lyon, Marseille, Bordeaux, Lille, Nantes, Strasbourg, Toulouse ou à l'international, BA Attitude vous accompagne avec le même niveau d'exigence. Contactez-nous pour obtenir un devis personnalisé.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  Découvrir nos services
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
}
