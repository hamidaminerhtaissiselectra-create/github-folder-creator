// Données SEO complètes pour les villes de banlieue parisienne
export interface BanlieueData {
  id: string;
  name: string;
  department: string;
  departmentCode: string;
  title: string;
  metaDescription: string;
  description: string;
  venues: string[];
  events: string[];
  landmarks: string[];
  nearbyCity: string[];
  stats: { value: string; label: string }[];
  keywords: string[];
  faqs: { question: string; answer: string }[];
  geo: { latitude: number; longitude: number };
  postalCode: string;
}

export const parisBanlieue: Record<string, BanlieueData> = {
  // HAUTS-DE-SEINE (92)
  "la-defense": {
    id: "la-defense",
    name: "La Défense",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    postalCode: "92400",
    title: "Montage Stand Salon La Défense | CNIT & Paris La Défense Arena",
    metaDescription: "Prestataire n°1 salons La Défense. CNIT, Paris La Défense Arena, tours d'affaires. Intervention express 24h. Expert conventions et congrès.",
    description: "BA ATTITUDE est le partenaire privilégié des événements de La Défense, premier quartier d'affaires européen. Notre expertise au CNIT et à Paris La Défense Arena garantit le succès de vos salons et conventions.",
    venues: [
      "CNIT Paris La Défense",
      "Paris La Défense Arena",
      "Grande Arche",
      "Tours Société Générale",
      "Tour Total",
      "Espace Grande Arche"
    ],
    events: [
      "Conventions d'Entreprise",
      "Congrès Internationaux",
      "Salons Professionnels CNIT",
      "Événements Corporate Tours",
      "Concerts Arena"
    ],
    landmarks: ["Grande Arche", "CNIT", "Parvis de La Défense", "Tours d'affaires"],
    nearbyCity: ["Nanterre", "Courbevoie", "Puteaux", "Neuilly-sur-Seine"],
    stats: [
      { value: "80+", label: "Événements/an" },
      { value: "30min", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["salon CNIT La Défense", "événement Paris La Défense Arena", "montage stand La Défense", "prestataire conventions affaires"],
    faqs: [
      {
        question: "Êtes-vous référencés au CNIT La Défense ?",
        answer: "Le CNIT est l'un de nos sites d'intervention majeurs. Nous y accompagnons plus de 80 événements par an : salons, conventions et congrès. Notre connaissance parfaite du site garantit des montages efficaces."
      },
      {
        question: "Intervenez-vous à Paris La Défense Arena ?",
        answer: "Oui, la plus grande arena d'Europe accueille des événements corporate et conventions pour lesquels nous assurons montage de stands, scénographie et logistique événementielle."
      }
    ],
    geo: { latitude: 48.8920, longitude: 2.2360 }
  },
  "boulogne-billancourt": {
    id: "boulogne-billancourt",
    name: "Boulogne-Billancourt",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    postalCode: "92100",
    title: "Montage Stand Salon Boulogne-Billancourt | Île Seguin & Studios",
    metaDescription: "Expert événementiel Boulogne-Billancourt. Salons Île Seguin, studios TF1, espaces corporate. Intervention rapide Hauts-de-Seine.",
    description: "BA ATTITUDE accompagne vos événements à Boulogne-Billancourt, ville dynamique aux portes de Paris. Notre expertise couvre l'Île Seguin, les studios TV et les espaces corporate.",
    venues: [
      "La Seine Musicale",
      "Studios TF1",
      "Espace Landowski",
      "Centre Culturel",
      "Trapèze (Île Seguin)"
    ],
    events: [
      "Événements La Seine Musicale",
      "Plateaux TV",
      "Conventions Corporate",
      "Salons Professionnels",
      "Galas"
    ],
    landmarks: ["La Seine Musicale", "Île Seguin", "Musée Albert Kahn", "Parc de Billancourt"],
    nearbyCity: ["Issy-les-Moulineaux", "Meudon", "Sèvres", "Paris 16e"],
    stats: [
      { value: "35+", label: "Événements/an" },
      { value: "45min", label: "Intervention" },
      { value: "99%", label: "Satisfaction" },
      { value: "12+", label: "Ans expertise" }
    ],
    keywords: ["salon Seine Musicale", "événement Boulogne-Billancourt", "montage stand Île Seguin", "prestataire Hauts-de-Seine"],
    faqs: [
      {
        question: "Accompagnez-vous les événements à La Seine Musicale ?",
        answer: "La Seine Musicale sur l'Île Seguin est un lieu d'exception pour les événements d'envergure. Nous assurons les prestations techniques pour concerts, conventions et galas dans ce cadre architectural remarquable."
      },
      {
        question: "Intervenez-vous dans les studios TV de Boulogne ?",
        answer: "Oui, nous accompagnons les émissions et événements dans les studios de Boulogne-Billancourt avec notre expertise décor et scénographie adaptée aux contraintes de la production TV."
      }
    ],
    geo: { latitude: 48.8354, longitude: 2.2414 }
  },
  "neuilly-sur-seine": {
    id: "neuilly-sur-seine",
    name: "Neuilly-sur-Seine",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    postalCode: "92200",
    title: "Montage Stand Salon Neuilly-sur-Seine | Événements Corporate Premium",
    metaDescription: "Prestataire événementiel haut de gamme Neuilly-sur-Seine. Sièges sociaux, événements corporate, lancements luxe. Service premium.",
    description: "BA ATTITUDE accompagne les événements corporate de Neuilly-sur-Seine, ville prestigieuse des Hauts-de-Seine. Notre expertise répond aux exigences des sièges sociaux et événements haut de gamme.",
    venues: [
      "Théâtre des Sablons",
      "Sièges sociaux",
      "Hôtels particuliers",
      "Centre Culturel",
      "Jardins événementiels"
    ],
    events: [
      "Événements Corporate",
      "Lancements Produits Luxe",
      "Réceptions Privées",
      "Assemblées Générales",
      "Galas d'Entreprise"
    ],
    landmarks: ["Bois de Boulogne", "Île de la Jatte", "Avenue Charles de Gaulle"],
    nearbyCity: ["Levallois-Perret", "Courbevoie", "Paris 17e", "La Défense"],
    stats: [
      { value: "25+", label: "Événements/an" },
      { value: "1h", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["événement corporate Neuilly", "salon prestige Hauts-de-Seine", "montage stand Neuilly-sur-Seine", "prestataire luxe 92"],
    faqs: [
      {
        question: "Accompagnez-vous les événements dans les sièges sociaux ?",
        answer: "Oui, Neuilly-sur-Seine concentre de nombreux sièges sociaux de grandes entreprises pour lesquels nous organisons conventions, assemblées générales et événements corporate avec un service premium."
      },
      {
        question: "Intervenez-vous pour les réceptions privées à Neuilly ?",
        answer: "Nous accompagnons les réceptions et événements privés dans les hôtels particuliers et espaces de prestige de Neuilly avec une attention particulière à la discrétion et la qualité de service."
      }
    ],
    geo: { latitude: 48.8847, longitude: 2.2698 }
  },
  "nanterre": {
    id: "nanterre",
    name: "Nanterre",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    postalCode: "92000",
    title: "Montage Stand Salon Nanterre | Arena & Université Paris Nanterre",
    metaDescription: "Expert salons et événements Nanterre. U Arena (proximité), Université Paris Nanterre, espaces corporate. Intervention rapide 92.",
    description: "BA ATTITUDE intervient à Nanterre, préfecture des Hauts-de-Seine. Notre équipe accompagne les événements universitaires, corporate et salons de ce pôle économique majeur.",
    venues: [
      "Paris La Défense Arena (proximité)",
      "Université Paris Nanterre",
      "Maison de la Musique",
      "Terrasse de Nanterre",
      "MUSIC"
    ],
    events: [
      "Congrès Universitaires",
      "Salons Professionnels",
      "Événements Corporate",
      "Concerts",
      "Conventions"
    ],
    landmarks: ["Université Paris Nanterre", "Préfecture", "Parc André Malraux"],
    nearbyCity: ["La Défense", "Puteaux", "Rueil-Malmaison", "Suresnes"],
    stats: [
      { value: "30+", label: "Événements/an" },
      { value: "45min", label: "Intervention" },
      { value: "98%", label: "Satisfaction" },
      { value: "10+", label: "Ans présence" }
    ],
    keywords: ["salon Nanterre 92", "événement Université Nanterre", "montage stand Hauts-de-Seine", "prestataire corporate Nanterre"],
    faqs: [
      {
        question: "Intervenez-vous à l'Université Paris Nanterre ?",
        answer: "Oui, l'Université Paris Nanterre accueille des congrès et colloques pour lesquels nous assurons les installations techniques et la logistique événementielle."
      },
      {
        question: "Accompagnez-vous les événements corporate à Nanterre ?",
        answer: "Nanterre accueille de nombreuses entreprises et administrations pour lesquelles nous organisons conventions, séminaires et événements d'entreprise."
      }
    ],
    geo: { latitude: 48.8924, longitude: 2.2066 }
  },

  // SEINE-SAINT-DENIS (93)
  "villepinte": {
    id: "villepinte",
    name: "Villepinte",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    postalCode: "93420",
    title: "Montage Stand Salon Villepinte | Paris Nord Villepinte Expert",
    metaDescription: "Prestataire n°1 Paris Nord Villepinte. 200+ salons/an, équipes dédiées, stockage local. Expert montage démontage stands exposition.",
    description: "BA ATTITUDE est LE spécialiste de Paris Nord Villepinte, 2e parc des expositions de France. Notre expertise de 15 ans sur ce site nous positionne comme le partenaire référent des exposants.",
    venues: [
      "Paris Nord Villepinte",
      "Halls 1 à 9",
      "Espace Congrès",
      "Zones extérieures",
      "VIPARIS"
    ],
    events: [
      "Maison & Objet",
      "SIAL Paris",
      "Première Vision",
      "Intermat",
      "Équiphotel",
      "JEC World"
    ],
    landmarks: ["Parc des Expositions", "Aéroport Roissy CDG", "Parc de la Poudrerie"],
    nearbyCity: ["Le Bourget", "Aulnay-sous-Bois", "Tremblay-en-France", "Roissy CDG"],
    stats: [
      { value: "200+", label: "Salons/an" },
      { value: "20min", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["salon Villepinte", "montage stand Paris Nord", "prestataire Maison Objet", "démontage stand SIAL"],
    faqs: [
      {
        question: "Êtes-vous spécialisés sur Paris Nord Villepinte ?",
        answer: "Paris Nord Villepinte est notre site d'intervention historique. Nous y accompagnons plus de 200 salons par an et connaissons parfaitement chaque hall, chaque accès et chaque contrainte logistique."
      },
      {
        question: "Proposez-vous un stockage près de Villepinte ?",
        answer: "Oui, notre entrepôt de 2000m² en région parisienne permet de stocker votre matériel entre les salons à Villepinte, optimisant ainsi vos coûts et délais de montage."
      }
    ],
    geo: { latitude: 48.9654, longitude: 2.5196 }
  },
  "le-bourget": {
    id: "le-bourget",
    name: "Le Bourget",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    postalCode: "93350",
    title: "Montage Stand Salon Le Bourget | Aéronautique & Aviation",
    metaDescription: "Expert salons aéronautiques Le Bourget. Salon du Bourget, événements aviation, Musée de l'Air. Intervention spécialisée 24h.",
    description: "BA ATTITUDE est spécialiste des événements aéronautiques du Bourget. Notre expertise couvre le Salon International de l'Aéronautique et les événements du Musée de l'Air et de l'Espace.",
    venues: [
      "Paris Le Bourget",
      "Musée de l'Air et de l'Espace",
      "Aéroport d'affaires",
      "Halls d'exposition",
      "Espaces extérieurs"
    ],
    events: [
      "Salon du Bourget",
      "Événements Aviation d'Affaires",
      "Salons Aéronautiques",
      "Réceptions Musée de l'Air",
      "Événements Corporate Aviation"
    ],
    landmarks: ["Aéroport Le Bourget", "Musée de l'Air", "Tarmac historique"],
    nearbyCity: ["Villepinte", "Drancy", "La Courneuve", "Dugny"],
    stats: [
      { value: "25+", label: "Événements/an" },
      { value: "30min", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["salon Bourget aéronautique", "montage stand aviation", "prestataire Salon du Bourget", "événement Musée Air"],
    faqs: [
      {
        question: "Accompagnez-vous les exposants au Salon du Bourget ?",
        answer: "Le Salon International de l'Aéronautique et de l'Espace est un événement majeur sur lequel nous accompagnons de nombreux exposants depuis 15 ans. Notre expertise inclut les chalets, stands extérieurs et espaces VIP."
      },
      {
        question: "Intervenez-vous au Musée de l'Air et de l'Espace ?",
        answer: "Oui, le Musée de l'Air accueille des événements privés et corporate dans un cadre exceptionnel. Nous assurons la scénographie et l'installation technique pour ces réceptions de prestige."
      }
    ],
    geo: { latitude: 48.9462, longitude: 2.4284 }
  },
  "saint-denis": {
    id: "saint-denis",
    name: "Saint-Denis",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    postalCode: "93200",
    title: "Montage Stand Salon Saint-Denis | Stade de France & Pleyel",
    metaDescription: "Expert événementiel Saint-Denis. Stade de France, Cité du Cinéma, Pleyel. Intervention rapide Seine-Saint-Denis.",
    description: "BA ATTITUDE accompagne vos événements à Saint-Denis, ville olympique. Notre expertise couvre le Stade de France, la Cité du Cinéma et les nouveaux espaces événementiels du Grand Paris.",
    venues: [
      "Stade de France",
      "Cité du Cinéma",
      "Académie Fratellini",
      "Pleyel City",
      "Dock B"
    ],
    events: [
      "Événements Stade de France",
      "Conventions Corporate",
      "Salons Cité du Cinéma",
      "Événements Sportifs",
      "Galas"
    ],
    landmarks: ["Stade de France", "Basilique Saint-Denis", "Cité du Cinéma"],
    nearbyCity: ["La Courneuve", "Aubervilliers", "Paris 18e", "Épinay-sur-Seine"],
    stats: [
      { value: "45+", label: "Événements/an" },
      { value: "30min", label: "Intervention" },
      { value: "99%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["événement Stade de France", "salon Saint-Denis 93", "montage stand Cité Cinéma", "prestataire Seine-Saint-Denis"],
    faqs: [
      {
        question: "Accompagnez-vous les événements au Stade de France ?",
        answer: "Le Stade de France accueille des conventions, séminaires et événements corporate pour lesquels nous assurons le montage de stands et la scénographie dans ce lieu iconique."
      },
      {
        question: "Intervenez-vous à la Cité du Cinéma ?",
        answer: "Oui, les studios de la Cité du Cinéma accueillent des événements et plateaux TV pour lesquels nous apportons notre expertise décor et installation technique."
      }
    ],
    geo: { latitude: 48.9360, longitude: 2.3576 }
  },
  "montreuil": {
    id: "montreuil",
    name: "Montreuil",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    postalCode: "93100",
    title: "Montage Stand Salon Montreuil | Événements Créatifs & Culturels",
    metaDescription: "Prestataire événementiel Montreuil. Salons créatifs, espaces industriels, Le Café de la Danse. Expertise Seine-Saint-Denis.",
    description: "BA ATTITUDE accompagne les événements créatifs de Montreuil, ville artistique aux portes de Paris. Notre expertise répond aux projets innovants et culturels du Grand Paris.",
    venues: [
      "Le Café de la Danse",
      "Nouveau théâtre de Montreuil",
      "Instants Chavirés",
      "Espaces industriels réhabilités",
      "Friches artistiques"
    ],
    events: [
      "Événements Créatifs",
      "Salons Design",
      "Festivals Culturels",
      "Pop-up Markets",
      "Événements Mode"
    ],
    landmarks: ["Murs à pêches", "Marché de Montreuil", "Square Jean Jaurès"],
    nearbyCity: ["Bagnolet", "Vincennes", "Fontenay-sous-Bois", "Paris 20e"],
    stats: [
      { value: "20+", label: "Événements/an" },
      { value: "1h", label: "Intervention" },
      { value: "98%", label: "Satisfaction" },
      { value: "8+", label: "Ans présence" }
    ],
    keywords: ["événement créatif Montreuil", "salon design 93", "montage stand Montreuil", "prestataire culturel Seine-Saint-Denis"],
    faqs: [
      {
        question: "Accompagnez-vous les événements dans les friches de Montreuil ?",
        answer: "Oui, Montreuil est riche en espaces industriels reconvertis qui accueillent des événements créatifs et salons design. Nous adaptons nos prestations à ces lieux atypiques."
      },
      {
        question: "Intervenez-vous pour les festivals culturels de Montreuil ?",
        answer: "La scène culturelle montreuilloise est dynamique et nous accompagnons festivals et événements artistiques avec notre expertise créative et notre connaissance du terrain."
      }
    ],
    geo: { latitude: 48.8638, longitude: 2.4437 }
  },

  // VAL-DE-MARNE (94)
  "creteil": {
    id: "creteil",
    name: "Créteil",
    department: "Val-de-Marne",
    departmentCode: "94",
    postalCode: "94000",
    title: "Montage Stand Salon Créteil | Préfecture Val-de-Marne",
    metaDescription: "Expert événementiel Créteil. Maison des Arts, Palais des Sports, Université Paris-Est. Service professionnel Val-de-Marne.",
    description: "BA ATTITUDE intervient à Créteil, préfecture du Val-de-Marne. Notre équipe accompagne les événements institutionnels, universitaires et sportifs de cette ville du Grand Paris.",
    venues: [
      "Maison des Arts",
      "Palais des Sports",
      "Université Paris-Est Créteil",
      "Centre Commercial Créteil Soleil",
      "Île de Loisirs"
    ],
    events: [
      "Événements Universitaires",
      "Salons Professionnels",
      "Événements Sportifs",
      "Conventions",
      "Événements Institutionnels"
    ],
    landmarks: ["Lac de Créteil", "Préfecture", "Cathédrale Notre-Dame", "Université Paris-Est"],
    nearbyCity: ["Maisons-Alfort", "Saint-Maur-des-Fossés", "Bonneuil", "Alfortville"],
    stats: [
      { value: "20+", label: "Événements/an" },
      { value: "1h", label: "Intervention" },
      { value: "98%", label: "Satisfaction" },
      { value: "10+", label: "Ans présence" }
    ],
    keywords: ["salon Créteil 94", "événement Val-de-Marne", "montage stand Créteil", "prestataire Université Paris-Est"],
    faqs: [
      {
        question: "Intervenez-vous à l'Université Paris-Est Créteil ?",
        answer: "Oui, l'Université Paris-Est Créteil accueille des congrès et colloques pour lesquels nous assurons les installations techniques et la coordination logistique."
      },
      {
        question: "Accompagnez-vous les événements sportifs à Créteil ?",
        answer: "Le Palais des Sports de Créteil accueille des événements sportifs et corporate pour lesquels nous assurons le montage de stands et la logistique événementielle."
      }
    ],
    geo: { latitude: 48.7905, longitude: 2.4550 }
  },
  "vincennes": {
    id: "vincennes",
    name: "Vincennes",
    department: "Val-de-Marne",
    departmentCode: "94",
    postalCode: "94300",
    title: "Montage Stand Salon Vincennes | Château & Parc Floral",
    metaDescription: "Prestataire événementiel Vincennes. Château de Vincennes, Parc Floral, Hippodrome. Expertise événements prestige Val-de-Marne.",
    description: "BA ATTITUDE accompagne vos événements de prestige à Vincennes. Du Château historique au Parc Floral, notre expertise couvre les lieux d'exception de l'Est parisien.",
    venues: [
      "Château de Vincennes",
      "Parc Floral de Paris",
      "Hippodrome de Vincennes",
      "Bois de Vincennes",
      "Delta Festival"
    ],
    events: [
      "Événements Château Vincennes",
      "Salons Parc Floral",
      "Événements Hippiques",
      "Festivals",
      "Événements Corporate"
    ],
    landmarks: ["Château de Vincennes", "Bois de Vincennes", "Parc Floral", "Hippodrome"],
    nearbyCity: ["Montreuil", "Fontenay-sous-Bois", "Saint-Mandé", "Paris 12e"],
    stats: [
      { value: "30+", label: "Événements/an" },
      { value: "45min", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "12+", label: "Ans expertise" }
    ],
    keywords: ["événement Château Vincennes", "salon Parc Floral", "montage stand Vincennes", "prestataire hippodrome 94"],
    faqs: [
      {
        question: "Accompagnez-vous les événements au Château de Vincennes ?",
        answer: "Le Château de Vincennes offre un cadre historique exceptionnel pour les événements de prestige. Nous assurons les prestations techniques dans le respect des contraintes de ce monument classé."
      },
      {
        question: "Intervenez-vous au Parc Floral ?",
        answer: "Oui, le Parc Floral de Paris accueille de nombreux salons et festivals pour lesquels nous assurons montage de stands, scénographie et logistique dans ce cadre verdoyant."
      }
    ],
    geo: { latitude: 48.8473, longitude: 2.4389 }
  },
  "orly": {
    id: "orly",
    name: "Orly",
    department: "Val-de-Marne",
    departmentCode: "94",
    postalCode: "94310",
    title: "Montage Stand Salon Orly | Aéroport & Zone d'Activités",
    metaDescription: "Expert événementiel Orly. Aéroport Paris-Orly, zone Orlytech, salons aviation. Intervention rapide Sud Paris.",
    description: "BA ATTITUDE accompagne les événements de la zone Orly, porte Sud de Paris. Notre expertise couvre l'aéroport Paris-Orly et les zones d'activités environnantes.",
    venues: [
      "Aéroport Paris-Orly",
      "Zone Orlytech",
      "Cœur d'Orly",
      "Hôtels aéroportuaires",
      "Espaces corporate"
    ],
    events: [
      "Événements Aviation",
      "Conventions Corporate",
      "Salons Professionnels",
      "Événements Logistique",
      "Lancements Produits"
    ],
    landmarks: ["Aéroport Paris-Orly", "Orlytech", "M.I.N. Rungis"],
    nearbyCity: ["Rungis", "Thiais", "Choisy-le-Roi", "Villeneuve-le-Roi"],
    stats: [
      { value: "25+", label: "Événements/an" },
      { value: "30min", label: "Intervention" },
      { value: "98%", label: "Satisfaction" },
      { value: "10+", label: "Ans présence" }
    ],
    keywords: ["événement aéroport Orly", "salon aviation Sud Paris", "montage stand Orly", "prestataire zone Orlytech"],
    faqs: [
      {
        question: "Intervenez-vous à l'aéroport Paris-Orly ?",
        answer: "Oui, l'aéroport Paris-Orly accueille des événements corporate et aviation pour lesquels nous assurons les installations dans le respect des contraintes sécuritaires aéroportuaires."
      },
      {
        question: "Accompagnez-vous les événements dans la zone Orlytech ?",
        answer: "La zone d'activités Orlytech concentre des entreprises qui organisent séminaires et conventions pour lesquels nous intervenons avec rapidité et professionnalisme."
      }
    ],
    geo: { latitude: 48.7262, longitude: 2.3652 }
  },

  // VAL-D'OISE (95)
  "roissy-cdg": {
    id: "roissy-cdg",
    name: "Roissy-en-France",
    department: "Val-d'Oise",
    departmentCode: "95",
    postalCode: "95700",
    title: "Montage Stand Salon Roissy CDG | Aéroport Charles de Gaulle",
    metaDescription: "Expert événementiel Roissy CDG. Aéroport Paris-Charles de Gaulle, Roissypôle, salons aéronautiques. Service 24h/24.",
    description: "BA ATTITUDE accompagne les événements de Roissy-CDG, premier aéroport de France. Notre expertise couvre les espaces événementiels de l'aéroport et les zones d'activités environnantes.",
    venues: [
      "Aéroport Paris-Charles de Gaulle",
      "Roissypôle",
      "Paris CDG Alliance",
      "Hôtels aéroportuaires",
      "Business Center"
    ],
    events: [
      "Événements Aéroportuaires",
      "Conventions Internationales",
      "Salons Aviation",
      "Événements Corporate",
      "Lancements Produits"
    ],
    landmarks: ["Aéroport CDG", "Roissypôle", "Parc International d'Activités"],
    nearbyCity: ["Villepinte", "Le Bourget", "Gonesse", "Tremblay-en-France"],
    stats: [
      { value: "40+", label: "Événements/an" },
      { value: "20min", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["événement aéroport CDG", "salon Roissy", "montage stand Charles de Gaulle", "prestataire aviation internationale"],
    faqs: [
      {
        question: "Intervenez-vous à l'aéroport Paris-Charles de Gaulle ?",
        answer: "L'aéroport CDG accueille des événements internationaux et conventions pour lesquels nous assurons les prestations techniques avec une connaissance parfaite des contraintes sécuritaires et logistiques."
      },
      {
        question: "Accompagnez-vous les événements au Roissypôle ?",
        answer: "Oui, le pôle d'affaires Roissypôle concentre des espaces événementiels que nous connaissons parfaitement pour y accompagner séminaires et conventions d'entreprise."
      }
    ],
    geo: { latitude: 49.0097, longitude: 2.5479 }
  },
  "cergy-pontoise": {
    id: "cergy-pontoise",
    name: "Cergy-Pontoise",
    department: "Val-d'Oise",
    departmentCode: "95",
    postalCode: "95000",
    title: "Montage Stand Salon Cergy-Pontoise | Université & Préfecture",
    metaDescription: "Prestataire événementiel Cergy-Pontoise. Université CY, centres de congrès, espaces corporate. Expert Val-d'Oise.",
    description: "BA ATTITUDE accompagne les événements de Cergy-Pontoise, ville nouvelle du Val-d'Oise. Notre expertise couvre les campus universitaires, centres de congrès et espaces corporate.",
    venues: [
      "Université CY Cergy Paris",
      "L'Apostrophe",
      "Base de loisirs",
      "ESSEC Business School",
      "Espaces corporate"
    ],
    events: [
      "Congrès Universitaires",
      "Salons Professionnels",
      "Conventions ESSEC",
      "Événements Corporate",
      "Séminaires"
    ],
    landmarks: ["Axe Majeur", "Port Cergy", "Base de loisirs", "Préfecture"],
    nearbyCity: ["Pontoise", "Osny", "Éragny", "Conflans-Sainte-Honorine"],
    stats: [
      { value: "20+", label: "Événements/an" },
      { value: "1h", label: "Intervention" },
      { value: "98%", label: "Satisfaction" },
      { value: "8+", label: "Ans présence" }
    ],
    keywords: ["salon Cergy-Pontoise 95", "événement ESSEC", "montage stand Val-d'Oise", "prestataire université CY"],
    faqs: [
      {
        question: "Intervenez-vous à l'ESSEC Business School ?",
        answer: "Oui, l'ESSEC organise de nombreux événements, conférences et forums pour lesquels nous assurons les prestations techniques avec notre expertise campus."
      },
      {
        question: "Accompagnez-vous les congrès à l'Université CY ?",
        answer: "L'Université CY Cergy Paris accueille des colloques et congrès scientifiques pour lesquels nous intervenons avec professionnalisme et adaptabilité."
      }
    ],
    geo: { latitude: 49.0363, longitude: 2.0758 }
  }
};

// Liste ordonnée des villes de banlieue par département
export const banlieueByDepartment = {
  "92": ["la-defense", "boulogne-billancourt", "neuilly-sur-seine", "nanterre"],
  "93": ["villepinte", "le-bourget", "saint-denis", "montreuil"],
  "94": ["creteil", "vincennes", "orly"],
  "95": ["roissy-cdg", "cergy-pontoise"]
};

export const allBanlieueList = Object.values(banlieueByDepartment).flat();
