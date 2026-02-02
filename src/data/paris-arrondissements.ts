// Données SEO complètes pour les arrondissements de Paris
export interface ArrondissementData {
  id: string;
  name: string;
  fullName: string;
  postalCode: string;
  title: string;
  metaDescription: string;
  description: string;
  venues: string[];
  events: string[];
  landmarks: string[];
  neighboringArrondissements: string[];
  stats: { value: string; label: string }[];
  keywords: string[];
  faqs: { question: string; answer: string }[];
  geo: { latitude: number; longitude: number };
}

export const parisArrondissements: Record<string, ArrondissementData> = {
  "paris-1er": {
    id: "paris-1er",
    name: "1er arrondissement",
    fullName: "Paris 1er arrondissement - Louvre",
    postalCode: "75001",
    title: "Montage Stand Salon Paris 1er | Louvre & Palais Royal",
    metaDescription: "Prestataire technique pour salons et événements Paris 1er arrondissement. Montage de stands près du Louvre, Palais Royal, Forum des Halles. Intervention 24h.",
    description: "BA ATTITUDE intervient dans le 1er arrondissement de Paris, cœur historique de la capitale. Notre proximité nous permet d'accompagner vos événements professionnels près du Louvre, du Palais Royal et du Carrousel.",
    venues: [
      "Carrousel du Louvre",
      "Palais Royal",
      "Palais de la Bourse",
      "Forum des Halles",
      "Hôtel de Ville (proximité)",
      "Jardin des Tuileries"
    ],
    events: [
      "Art Paris Art Fair",
      "Salon du Dessin",
      "Paris Photo (Carrousel)",
      "Événements Mode & Luxe",
      "Lancements Produits Premium"
    ],
    landmarks: ["Musée du Louvre", "Palais Royal", "Forum des Halles", "Jardin des Tuileries", "Place Vendôme"],
    neighboringArrondissements: ["2e", "3e", "4e", "6e", "7e", "8e"],
    stats: [
      { value: "30+", label: "Événements/an" },
      { value: "2h", label: "Délai intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans d'expertise" }
    ],
    keywords: ["montage stand Paris 1er", "prestataire salon Louvre", "événement Palais Royal", "stand Carrousel du Louvre"],
    faqs: [
      {
        question: "Intervenez-vous au Carrousel du Louvre ?",
        answer: "Oui, le Carrousel du Louvre est l'un de nos sites d'intervention privilégiés. Nous connaissons parfaitement les contraintes d'accès et les réglementations de ce lieu d'exception pour vos salons et événements premium."
      },
      {
        question: "Quel est le délai d'intervention dans le 1er arrondissement ?",
        answer: "Notre équipe peut intervenir en moins de 2 heures dans le 1er arrondissement. Notre connaissance des accès et du stationnement nous permet une grande réactivité même dans ce secteur très central."
      }
    ],
    geo: { latitude: 48.8602, longitude: 2.3477 }
  },
  "paris-2e": {
    id: "paris-2e",
    name: "2e arrondissement",
    fullName: "Paris 2e arrondissement - Bourse",
    postalCode: "75002",
    title: "Montage Stand Salon Paris 2e | Bourse & Sentier",
    metaDescription: "Expert montage de stands Paris 2e arrondissement. Événements professionnels quartier Bourse, Sentier, Grands Boulevards. Réactivité 24h/24.",
    description: "BA ATTITUDE intervient dans le 2e arrondissement, quartier d'affaires historique de Paris. Nous accompagnons vos événements B2B près de la Bourse, du Sentier et des Grands Boulevards.",
    venues: [
      "Palais Brongniart",
      "Espace Sentier",
      "Rex Club",
      "Salle Gaveau (proximité)",
      "Grands Boulevards"
    ],
    events: [
      "Salon FinTech",
      "Événements Tech Startups",
      "Conférences Finance",
      "Showrooms Mode",
      "Lancements Produits"
    ],
    landmarks: ["Palais Brongniart", "Place des Victoires", "Passage des Panoramas", "Bibliothèque Nationale"],
    neighboringArrondissements: ["1er", "3e", "9e", "10e"],
    stats: [
      { value: "25+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "98%", label: "Satisfaction" },
      { value: "10+", label: "Ans présence" }
    ],
    keywords: ["stand salon Bourse Paris", "événement Palais Brongniart", "montage stand Sentier", "prestataire technique Paris 2"],
    faqs: [
      {
        question: "Organisez-vous des événements au Palais Brongniart ?",
        answer: "Absolument, le Palais Brongniart est un lieu emblématique pour les événements professionnels. Nous assurons le montage de stands, la scénographie et la logistique pour vos salons et conférences dans ce cadre prestigieux."
      },
      {
        question: "Intervenez-vous pour les showrooms mode du Sentier ?",
        answer: "Oui, le quartier du Sentier concentre de nombreux showrooms et événements mode. Nous accompagnons les marques pour l'installation de leurs espaces de présentation et événements presse."
      }
    ],
    geo: { latitude: 48.8686, longitude: 2.3414 }
  },
  "paris-3e": {
    id: "paris-3e",
    name: "3e arrondissement",
    fullName: "Paris 3e arrondissement - Temple",
    postalCode: "75003",
    title: "Montage Stand Salon Paris 3e | Marais & Temple",
    metaDescription: "Prestataire événementiel Paris 3e arrondissement. Installation stands salons Marais, Temple, Carreau du Temple. Expertise haut de gamme.",
    description: "BA ATTITUDE accompagne vos événements dans le 3e arrondissement, au cœur du Marais historique. Notre expertise couvre les salons du Carreau du Temple et les événements culturels du quartier.",
    venues: [
      "Carreau du Temple",
      "Musée Picasso",
      "Archives Nationales",
      "Gaîté Lyrique",
      "Lieux événementiels du Marais"
    ],
    events: [
      "Salon du Vintage",
      "Fashion Week Events",
      "Salons Design & Déco",
      "Événements Art Contemporain",
      "Pop-up Stores Luxe"
    ],
    landmarks: ["Carreau du Temple", "Musée Picasso", "Archives Nationales", "Square du Temple"],
    neighboringArrondissements: ["1er", "2e", "4e", "10e", "11e"],
    stats: [
      { value: "35+", label: "Projets/an" },
      { value: "2h", label: "Réactivité" },
      { value: "100%", label: "Clients satisfaits" },
      { value: "12+", label: "Années expertise" }
    ],
    keywords: ["montage stand Carreau du Temple", "événement Marais Paris", "salon Paris 3e", "prestataire technique Temple"],
    faqs: [
      {
        question: "Accompagnez-vous les salons au Carreau du Temple ?",
        answer: "Le Carreau du Temple est l'un de nos sites d'intervention réguliers. Nous maîtrisons parfaitement les accès, les contraintes techniques et les spécificités de ce lieu polyvalent pour vos salons mode, design et vintage."
      },
      {
        question: "Intervenez-vous pour les événements Fashion Week dans le Marais ?",
        answer: "Oui, nous accompagnons de nombreuses marques pendant les Fashion Weeks parisiennes pour l'installation de showrooms, pop-up stores et événements presse dans le Marais."
      }
    ],
    geo: { latitude: 48.8656, longitude: 2.3611 }
  },
  "paris-4e": {
    id: "paris-4e",
    name: "4e arrondissement",
    fullName: "Paris 4e arrondissement - Hôtel de Ville",
    postalCode: "75004",
    title: "Montage Stand Salon Paris 4e | Hôtel de Ville & Marais",
    metaDescription: "Expert événementiel Paris 4e arrondissement. Montage stands Hôtel de Ville, Centre Pompidou, Marais. Service premium 24h/24.",
    description: "BA ATTITUDE intervient dans le 4e arrondissement, symbole du Paris historique. Nos équipes accompagnent vos événements près de l'Hôtel de Ville, Notre-Dame et du Centre Pompidou.",
    venues: [
      "Hôtel de Ville de Paris",
      "Centre Pompidou",
      "Pavillon de l'Arsenal",
      "Île Saint-Louis",
      "BHV Marais"
    ],
    events: [
      "Paris Face Cachée",
      "Nuit Blanche",
      "Salons Architecture",
      "Événements Institutionnels",
      "Expositions Art Contemporain"
    ],
    landmarks: ["Notre-Dame", "Centre Pompidou", "Hôtel de Ville", "Place des Vosges", "Île Saint-Louis"],
    neighboringArrondissements: ["1er", "3e", "5e", "11e", "12e"],
    stats: [
      { value: "40+", label: "Événements/an" },
      { value: "1h", label: "Intervention urgente" },
      { value: "99%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["événement Hôtel de Ville Paris", "salon Centre Pompidou", "montage stand Paris 4e", "prestataire Marais"],
    faqs: [
      {
        question: "Intervenez-vous pour les événements à l'Hôtel de Ville ?",
        answer: "Oui, nous accompagnons régulièrement les organisateurs d'événements à l'Hôtel de Ville de Paris. Notre expérience nous permet de gérer les contraintes protocolaires et logistiques de ce lieu institutionnel."
      },
      {
        question: "Accompagnez-vous les expositions au Centre Pompidou ?",
        answer: "Nous intervenons pour des événements et installations temporaires dans l'environnement du Centre Pompidou. Notre expertise scénographique est particulièrement adaptée aux exigences de ce haut lieu culturel."
      }
    ],
    geo: { latitude: 48.8546, longitude: 2.3572 }
  },
  "paris-5e": {
    id: "paris-5e",
    name: "5e arrondissement",
    fullName: "Paris 5e arrondissement - Panthéon",
    postalCode: "75005",
    title: "Montage Stand Salon Paris 5e | Quartier Latin & Panthéon",
    metaDescription: "Prestataire technique salons Paris 5e arrondissement. Événements Quartier Latin, Panthéon, Sorbonne. Intervention rapide et expertise premium.",
    description: "BA ATTITUDE accompagne vos événements dans le 5e arrondissement, cœur intellectuel de Paris. Notre équipe intervient pour les congrès universitaires, salons et événements du Quartier Latin.",
    venues: [
      "Panthéon",
      "Sorbonne",
      "Jussieu Campus",
      "Institut du Monde Arabe",
      "Jardin des Plantes"
    ],
    events: [
      "Congrès Universitaires",
      "Colloques Scientifiques",
      "Salons Éducation",
      "Événements Culturels",
      "Remises de Prix Académiques"
    ],
    landmarks: ["Panthéon", "Sorbonne", "Jardin des Plantes", "Mosquée de Paris", "Arènes de Lutèce"],
    neighboringArrondissements: ["4e", "6e", "13e", "14e"],
    stats: [
      { value: "20+", label: "Événements/an" },
      { value: "2h", label: "Mobilisation" },
      { value: "100%", label: "Satisfaction" },
      { value: "10+", label: "Ans présence" }
    ],
    keywords: ["événement Sorbonne Paris", "salon Quartier Latin", "montage stand Paris 5e", "prestataire congrès universitaire"],
    faqs: [
      {
        question: "Intervenez-vous pour les congrès à la Sorbonne ?",
        answer: "Oui, nous accompagnons régulièrement les congrès et colloques dans les amphithéâtres de la Sorbonne et sur le campus de Jussieu. Notre expertise inclut la gestion des contraintes propres aux sites universitaires."
      },
      {
        question: "Accompagnez-vous les événements au Jardin des Plantes ?",
        answer: "Le Jardin des Plantes et le Muséum d'Histoire Naturelle accueillent des événements que nous accompagnons techniquement, en respectant les exigences de ces sites patrimoniaux."
      }
    ],
    geo: { latitude: 48.8462, longitude: 2.3472 }
  },
  "paris-6e": {
    id: "paris-6e",
    name: "6e arrondissement",
    fullName: "Paris 6e arrondissement - Luxembourg",
    postalCode: "75006",
    title: "Montage Stand Salon Paris 6e | Saint-Germain & Luxembourg",
    metaDescription: "Expert événementiel Paris 6e arrondissement. Salons Saint-Germain-des-Prés, Luxembourg, Odéon. Prestations haut de gamme.",
    description: "BA ATTITUDE intervient dans le 6e arrondissement, quartier emblématique de Saint-Germain-des-Prés. Nous accompagnons les événements de prestige dans ce secteur prisé de la rive gauche.",
    venues: [
      "Palais du Luxembourg",
      "Sénat",
      "Odéon Théâtre de l'Europe",
      "Institut de France",
      "École des Beaux-Arts"
    ],
    events: [
      "Événements Institutionnels Sénat",
      "Salons Littéraires",
      "Événements Art & Culture",
      "Lancements Édition",
      "Galas Prestige"
    ],
    landmarks: ["Jardin du Luxembourg", "Saint-Germain-des-Prés", "Odéon", "Pont des Arts"],
    neighboringArrondissements: ["1er", "5e", "7e", "14e", "15e"],
    stats: [
      { value: "25+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "12+", label: "Ans expertise" }
    ],
    keywords: ["événement Saint-Germain Paris", "salon Luxembourg", "montage stand Paris 6e", "prestataire Odéon"],
    faqs: [
      {
        question: "Intervenez-vous au Palais du Luxembourg ?",
        answer: "Nous accompagnons les événements institutionnels au Sénat et dans les jardins du Luxembourg. Notre expérience des sites officiels nous permet de gérer les exigences protocolaires et sécuritaires."
      },
      {
        question: "Accompagnez-vous les événements littéraires de Saint-Germain ?",
        answer: "Oui, le quartier Saint-Germain-des-Prés accueille de nombreux événements édition et littérature que nous accompagnons pour la scénographie et l'installation technique."
      }
    ],
    geo: { latitude: 48.8490, longitude: 2.3325 }
  },
  "paris-7e": {
    id: "paris-7e",
    name: "7e arrondissement",
    fullName: "Paris 7e arrondissement - Palais Bourbon",
    postalCode: "75007",
    title: "Montage Stand Salon Paris 7e | Tour Eiffel & Invalides",
    metaDescription: "Prestataire événementiel Paris 7e arrondissement. Salons Tour Eiffel, Invalides, Champ de Mars. Expertise premium événements d'exception.",
    description: "BA ATTITUDE intervient dans le 7e arrondissement, symbole de l'excellence parisienne. Nous accompagnons les événements de prestige près de la Tour Eiffel, des Invalides et du Quai d'Orsay.",
    venues: [
      "Champ de Mars",
      "École Militaire",
      "Musée du Quai Branly",
      "Hôtel des Invalides",
      "UNESCO"
    ],
    events: [
      "Événements Tour Eiffel",
      "Galas Diplomatiques",
      "Congrès Internationaux UNESCO",
      "Salons Défense",
      "Événements Institutionnels"
    ],
    landmarks: ["Tour Eiffel", "Invalides", "Musée d'Orsay", "Assemblée Nationale", "Musée Rodin"],
    neighboringArrondissements: ["1er", "6e", "8e", "15e", "16e"],
    stats: [
      { value: "45+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["événement Tour Eiffel Paris", "salon Invalides", "montage stand Paris 7e", "prestataire événement UNESCO"],
    faqs: [
      {
        question: "Organisez-vous des événements près de la Tour Eiffel ?",
        answer: "Oui, nous accompagnons de nombreux événements sur le Champ de Mars et dans les espaces événementiels proches de la Tour Eiffel. Notre équipe maîtrise les autorisations et contraintes spécifiques à ce secteur touristique."
      },
      {
        question: "Intervenez-vous pour les congrès à l'UNESCO ?",
        answer: "L'UNESCO accueille des congrès internationaux pour lesquels nous assurons les prestations techniques : montage de stands, scénographie et coordination logistique dans ce site d'exception."
      }
    ],
    geo: { latitude: 48.8560, longitude: 2.3124 }
  },
  "paris-8e": {
    id: "paris-8e",
    name: "8e arrondissement",
    fullName: "Paris 8e arrondissement - Élysée",
    postalCode: "75008",
    title: "Montage Stand Salon Paris 8e | Champs-Élysées & Concorde",
    metaDescription: "Expert montage stands Paris 8e arrondissement. Événements Champs-Élysées, Grand Palais, Concorde. Service premium salons prestige.",
    description: "BA ATTITUDE accompagne vos événements dans le 8e arrondissement, vitrine internationale de Paris. Notre expertise couvre les salons du Grand Palais, les événements Champs-Élysées et les lancements de prestige.",
    venues: [
      "Grand Palais",
      "Petit Palais",
      "Palais de la Découverte",
      "Théâtre des Champs-Élysées",
      "Pavillon Gabriel"
    ],
    events: [
      "FIAC Paris",
      "Salon du Chocolat",
      "Paris Photo",
      "Lancements Automobiles",
      "Événements Luxe Champs-Élysées"
    ],
    landmarks: ["Champs-Élysées", "Arc de Triomphe", "Grand Palais", "Place de la Concorde", "Madeleine"],
    neighboringArrondissements: ["1er", "7e", "9e", "16e", "17e"],
    stats: [
      { value: "60+", label: "Événements/an" },
      { value: "1h", label: "Intervention urgente" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["événement Champs-Élysées Paris", "salon Grand Palais", "montage stand Paris 8e", "prestataire luxe Concorde"],
    faqs: [
      {
        question: "Accompagnez-vous les salons au Grand Palais ?",
        answer: "Le Grand Palais est l'un de nos sites d'intervention majeurs. Nous connaissons parfaitement ses contraintes techniques et logistiques pour assurer le succès de vos salons d'art, mode et design."
      },
      {
        question: "Intervenez-vous pour les lancements sur les Champs-Élysées ?",
        answer: "Oui, nous accompagnons les lancements de produits et événements de marques sur les Champs-Élysées. Notre expertise en scénographie premium répond aux exigences de cette avenue iconique."
      }
    ],
    geo: { latitude: 48.8741, longitude: 2.3118 }
  },
  "paris-9e": {
    id: "paris-9e",
    name: "9e arrondissement",
    fullName: "Paris 9e arrondissement - Opéra",
    postalCode: "75009",
    title: "Montage Stand Salon Paris 9e | Opéra & Grands Magasins",
    metaDescription: "Prestataire technique salons Paris 9e arrondissement. Événements Opéra Garnier, Lafayette, Printemps. Expertise retail et luxe.",
    description: "BA ATTITUDE intervient dans le 9e arrondissement, cœur commercial et culturel de Paris. Nous accompagnons les événements de l'Opéra Garnier aux Grands Magasins du boulevard Haussmann.",
    venues: [
      "Opéra Garnier",
      "Galeries Lafayette",
      "Printemps Haussmann",
      "Casino de Paris",
      "Folies Bergère"
    ],
    events: [
      "Événements Retail",
      "Lancements Mode",
      "Galas Opéra",
      "Showcases Grands Magasins",
      "Événements Corporate"
    ],
    landmarks: ["Opéra Garnier", "Galeries Lafayette", "Musée Grévin", "Grands Boulevards"],
    neighboringArrondissements: ["2e", "8e", "10e", "17e", "18e"],
    stats: [
      { value: "35+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "99%", label: "Satisfaction" },
      { value: "12+", label: "Ans expertise" }
    ],
    keywords: ["événement Opéra Paris", "salon Galeries Lafayette", "montage stand Paris 9e", "prestataire Haussmann"],
    faqs: [
      {
        question: "Accompagnez-vous les événements retail des Grands Magasins ?",
        answer: "Oui, nous intervenons régulièrement pour les Galeries Lafayette et le Printemps Haussmann sur des installations événementielles, vitrines et pop-up stores. Notre expertise retail répond aux exigences du luxe parisien."
      },
      {
        question: "Intervenez-vous à l'Opéra Garnier ?",
        answer: "L'Opéra Garnier accueille des galas et événements privés pour lesquels nous assurons les prestations techniques dans le respect des contraintes de ce monument historique."
      }
    ],
    geo: { latitude: 48.8753, longitude: 2.3380 }
  },
  "paris-10e": {
    id: "paris-10e",
    name: "10e arrondissement",
    fullName: "Paris 10e arrondissement - Entrepôt",
    postalCode: "75010",
    title: "Montage Stand Salon Paris 10e | Gares & Canal Saint-Martin",
    metaDescription: "Expert événementiel Paris 10e arrondissement. Salons Gare du Nord, Gare de l'Est, Canal Saint-Martin. Intervention rapide 24h.",
    description: "BA ATTITUDE accompagne vos événements dans le 10e arrondissement, quartier dynamique entre les gares et le Canal Saint-Martin. Nous intervenons sur les salons et événements de ce secteur en pleine effervescence.",
    venues: [
      "La Bellevilloise",
      "Point Éphémère",
      "Espace Canal",
      "Théâtre des Bouffes du Nord",
      "Le Centquatre (proximité)"
    ],
    events: [
      "Salons Startup",
      "Événements Tech",
      "Pop-up Markets",
      "Festivals Créatifs",
      "Showcases Musique"
    ],
    landmarks: ["Gare du Nord", "Gare de l'Est", "Canal Saint-Martin", "Porte Saint-Denis"],
    neighboringArrondissements: ["2e", "3e", "9e", "11e", "18e", "19e"],
    stats: [
      { value: "30+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "98%", label: "Satisfaction" },
      { value: "10+", label: "Ans présence" }
    ],
    keywords: ["événement Canal Saint-Martin", "salon Gare du Nord Paris", "montage stand Paris 10e", "prestataire tech startup"],
    faqs: [
      {
        question: "Intervenez-vous pour les événements startup du 10e ?",
        answer: "Oui, le 10e arrondissement est devenu un hub pour les événements tech et startup. Nous accompagnons les salons, meetups et lancements dans les espaces événementiels du quartier."
      },
      {
        question: "Accompagnez-vous les pop-up stores du Canal Saint-Martin ?",
        answer: "Le quartier du Canal Saint-Martin accueille de nombreux pop-up stores et événements éphémères que nous installons avec rapidité et créativité."
      }
    ],
    geo: { latitude: 48.8757, longitude: 2.3590 }
  },
  "paris-11e": {
    id: "paris-11e",
    name: "11e arrondissement",
    fullName: "Paris 11e arrondissement - Popincourt",
    postalCode: "75011",
    title: "Montage Stand Salon Paris 11e | Bastille & Oberkampf",
    metaDescription: "Prestataire événementiel Paris 11e arrondissement. Salons Bastille, Oberkampf, République. Expertise événements créatifs et culturels.",
    description: "BA ATTITUDE accompagne vos événements dans le 11e arrondissement, quartier créatif et festif de Paris. Nous intervenons de Bastille à Oberkampf pour vos salons et événements.",
    venues: [
      "Cirque d'Hiver",
      "Le Bataclan",
      "La Gaîté Lyrique",
      "Atelier des Lumières",
      "Espaces Bastille"
    ],
    events: [
      "Salons Créatifs",
      "Événements Musique",
      "Pop-up Design",
      "Festivals Culturels",
      "Lancements Produits"
    ],
    landmarks: ["Place de la Bastille", "Oberkampf", "Cirque d'Hiver", "Rue de la Roquette"],
    neighboringArrondissements: ["3e", "4e", "10e", "12e", "20e"],
    stats: [
      { value: "40+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "99%", label: "Satisfaction" },
      { value: "12+", label: "Ans expertise" }
    ],
    keywords: ["événement Bastille Paris", "salon Oberkampf", "montage stand Paris 11e", "prestataire créatif République"],
    faqs: [
      {
        question: "Intervenez-vous au Cirque d'Hiver ?",
        answer: "Le Cirque d'Hiver est un lieu emblématique pour les événements parisiens. Nous y assurons les prestations techniques pour défilés de mode, galas et événements corporate dans ce cadre historique unique."
      },
      {
        question: "Accompagnez-vous les événements de l'Atelier des Lumières ?",
        answer: "Oui, nous intervenons dans l'environnement de l'Atelier des Lumières pour des événements privés et lancements qui profitent de ce lieu immersif exceptionnel."
      }
    ],
    geo: { latitude: 48.8594, longitude: 2.3800 }
  },
  "paris-12e": {
    id: "paris-12e",
    name: "12e arrondissement",
    fullName: "Paris 12e arrondissement - Reuilly",
    postalCode: "75012",
    title: "Montage Stand Salon Paris 12e | Bercy & Gare de Lyon",
    metaDescription: "Expert montage stands Paris 12e arrondissement. Salons AccorHotels Arena, Bercy Village, Gare de Lyon. Service rapide et professionnel.",
    description: "BA ATTITUDE intervient dans le 12e arrondissement, pôle événementiel majeur de l'Est parisien. Notre expertise couvre l'AccorHotels Arena, Bercy Village et les espaces de la Gare de Lyon.",
    venues: [
      "AccorHotels Arena (Bercy)",
      "Bercy Village",
      "Palais Omnisports",
      "Pavillon de l'Arsenal",
      "Cour Saint-Émilion"
    ],
    events: [
      "Salons Grand Public Bercy",
      "Conventions d'Entreprise",
      "Événements Sportifs",
      "Salons Mode",
      "Concerts & Spectacles"
    ],
    landmarks: ["AccorHotels Arena", "Bois de Vincennes", "Gare de Lyon", "Viaduc des Arts"],
    neighboringArrondissements: ["4e", "5e", "11e", "13e", "20e"],
    stats: [
      { value: "50+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["salon Bercy Arena Paris", "événement Gare de Lyon", "montage stand Paris 12e", "prestataire AccorHotels Arena"],
    faqs: [
      {
        question: "Accompagnez-vous les salons à l'AccorHotels Arena ?",
        answer: "L'AccorHotels Arena est l'un de nos sites d'intervention majeurs. Nous maîtrisons parfaitement la logistique de ce grand espace pour les salons, conventions et événements d'envergure."
      },
      {
        question: "Intervenez-vous à Bercy Village ?",
        answer: "Oui, Bercy Village accueille régulièrement des événements et pop-up stores que nous accompagnons pour l'installation et la scénographie dans cet espace commercial unique."
      }
    ],
    geo: { latitude: 48.8396, longitude: 2.3876 }
  },
  "paris-13e": {
    id: "paris-13e",
    name: "13e arrondissement",
    fullName: "Paris 13e arrondissement - Gobelins",
    postalCode: "75013",
    title: "Montage Stand Salon Paris 13e | Bibliothèque & Chinatown",
    metaDescription: "Prestataire événementiel Paris 13e arrondissement. Salons BNF, Station F, Quartier Asiatique. Expertise innovation et tech.",
    description: "BA ATTITUDE accompagne vos événements dans le 13e arrondissement, quartier de l'innovation parisienne. Nous intervenons de Station F à la BNF pour vos salons tech et événements.",
    venues: [
      "Station F",
      "BNF François Mitterrand",
      "Espace 104 (proximité)",
      "MK2 Bibliothèque",
      "Les Docks"
    ],
    events: [
      "Salons Tech & Innovation",
      "Événements Startup Station F",
      "Salons Étudiants",
      "Événements Culturels BNF",
      "Conventions Tech"
    ],
    landmarks: ["BNF François Mitterrand", "Station F", "Quartier Asiatique", "Butte aux Cailles"],
    neighboringArrondissements: ["5e", "12e", "14e"],
    stats: [
      { value: "35+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "99%", label: "Satisfaction" },
      { value: "10+", label: "Ans présence" }
    ],
    keywords: ["événement Station F Paris", "salon BNF", "montage stand Paris 13e", "prestataire tech innovation"],
    faqs: [
      {
        question: "Accompagnez-vous les événements à Station F ?",
        answer: "Station F, le plus grand campus de startups au monde, accueille de nombreux événements que nous accompagnons pour l'installation de stands, scénographie et logistique événementielle."
      },
      {
        question: "Intervenez-vous à la BNF ?",
        answer: "La Bibliothèque Nationale de France organise des expositions et événements culturels pour lesquels nous assurons les prestations techniques dans ce cadre architectural remarquable."
      }
    ],
    geo: { latitude: 48.8322, longitude: 2.3561 }
  },
  "paris-14e": {
    id: "paris-14e",
    name: "14e arrondissement",
    fullName: "Paris 14e arrondissement - Observatoire",
    postalCode: "75014",
    title: "Montage Stand Salon Paris 14e | Montparnasse & Denfert",
    metaDescription: "Expert événementiel Paris 14e arrondissement. Salons Montparnasse, Porte de Vanves, Cité Universitaire. Service professionnel 24h.",
    description: "BA ATTITUDE intervient dans le 14e arrondissement, de Montparnasse à la Cité Universitaire. Notre équipe accompagne vos événements B2B et salons dans ce secteur dynamique.",
    venues: [
      "Tour Montparnasse",
      "Cité Internationale Universitaire",
      "Espace Champerret (proximité)",
      "Fondation Cartier",
      "Théâtre de la Gaîté"
    ],
    events: [
      "Congrès Universitaires",
      "Salons Professionnels",
      "Événements Corporate Tour Montparnasse",
      "Expositions Art Contemporain",
      "Conventions"
    ],
    landmarks: ["Tour Montparnasse", "Catacombes", "Cité Universitaire", "Parc Montsouris"],
    neighboringArrondissements: ["5e", "6e", "13e", "15e"],
    stats: [
      { value: "25+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "98%", label: "Satisfaction" },
      { value: "10+", label: "Ans expertise" }
    ],
    keywords: ["événement Montparnasse Paris", "salon Cité Universitaire", "montage stand Paris 14e", "prestataire Porte de Vanves"],
    faqs: [
      {
        question: "Intervenez-vous à la Tour Montparnasse ?",
        answer: "La Tour Montparnasse accueille des événements corporate pour lesquels nous assurons l'installation de stands et la logistique événementielle avec vue panoramique sur Paris."
      },
      {
        question: "Accompagnez-vous les événements de la Cité Universitaire ?",
        answer: "Oui, la Cité Internationale Universitaire organise des congrès et événements internationaux que nous accompagnons pour les installations techniques et la scénographie."
      }
    ],
    geo: { latitude: 48.8319, longitude: 2.3267 }
  },
  "paris-15e": {
    id: "paris-15e",
    name: "15e arrondissement",
    fullName: "Paris 15e arrondissement - Vaugirard",
    postalCode: "75015",
    title: "Montage Stand Salon Paris 15e | Porte de Versailles & Vaugirard",
    metaDescription: "Prestataire référent salons Paris 15e. Paris Expo Porte de Versailles, Aquaboulevard, Parc André Citroën. Expert n°1 montage stands.",
    description: "BA ATTITUDE est le partenaire privilégié des exposants au Parc des Expositions Porte de Versailles. Basés à proximité, nous intervenons en priorité sur tous les salons majeurs de ce site incontournable.",
    venues: [
      "Paris Expo Porte de Versailles",
      "Palais des Sports",
      "Parc André Citroën",
      "Aquaboulevard",
      "Dôme de Paris"
    ],
    events: [
      "Foire de Paris",
      "Salon de l'Agriculture",
      "Équita'Lyon",
      "Mondial de l'Auto",
      "Salon du Livre",
      "Maison & Objet"
    ],
    landmarks: ["Parc des Expositions", "Parc André Citroën", "Ballon de Paris", "Front de Seine"],
    neighboringArrondissements: ["6e", "7e", "14e", "16e"],
    stats: [
      { value: "150+", label: "Salons/an" },
      { value: "30min", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["salon Porte de Versailles", "montage stand Paris Expo", "prestataire Parc Expositions Paris", "événement Paris 15e"],
    faqs: [
      {
        question: "Êtes-vous spécialisés sur Paris Expo Porte de Versailles ?",
        answer: "Paris Expo Porte de Versailles est notre site d'intervention principal. Nous y accompagnons plus de 150 salons par an avec une connaissance parfaite de chaque hall, des accès et des contraintes logistiques."
      },
      {
        question: "Quel est votre délai d'intervention Porte de Versailles ?",
        answer: "Notre proximité nous permet d'intervenir en 30 minutes sur le Parc des Expositions. Nos équipes sont mobilisables 24h/24 pendant les périodes de montage et démontage."
      }
    ],
    geo: { latitude: 48.8320, longitude: 2.2880 }
  },
  "paris-16e": {
    id: "paris-16e",
    name: "16e arrondissement",
    fullName: "Paris 16e arrondissement - Passy",
    postalCode: "75016",
    title: "Montage Stand Salon Paris 16e | Trocadéro & Auteuil",
    metaDescription: "Expert événementiel Paris 16e arrondissement. Salons Trocadéro, Palais de Chaillot, Roland-Garros. Prestations haut de gamme.",
    description: "BA ATTITUDE accompagne vos événements de prestige dans le 16e arrondissement. Du Palais de Chaillot à Roland-Garros, nous assurons les prestations techniques de vos salons et galas.",
    venues: [
      "Palais de Chaillot",
      "Palais de Tokyo",
      "Roland-Garros",
      "Musée Marmottan",
      "Maison de la Radio"
    ],
    events: [
      "Événements Mode & Luxe",
      "Galas Trocadéro",
      "Roland-Garros Hospitality",
      "Événements Corporate",
      "Expositions Art"
    ],
    landmarks: ["Trocadéro", "Bois de Boulogne", "Roland-Garros", "Fondation Louis Vuitton"],
    neighboringArrondissements: ["7e", "8e", "15e", "17e"],
    stats: [
      { value: "45+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["événement Trocadéro Paris", "salon Roland-Garros", "montage stand Paris 16e", "prestataire luxe Auteuil"],
    faqs: [
      {
        question: "Accompagnez-vous les événements au Palais de Chaillot ?",
        answer: "Le Palais de Chaillot avec sa vue exceptionnelle sur la Tour Eiffel accueille des événements de prestige que nous accompagnons avec notre expertise scénographique et logistique."
      },
      {
        question: "Intervenez-vous à Roland-Garros ?",
        answer: "Oui, nous assurons les prestations techniques pour les événements hospitalité et corporate de Roland-Garros, en respectant les exigences de ce site sportif d'exception."
      }
    ],
    geo: { latitude: 48.8630, longitude: 2.2750 }
  },
  "paris-17e": {
    id: "paris-17e",
    name: "17e arrondissement",
    fullName: "Paris 17e arrondissement - Batignolles-Monceau",
    postalCode: "75017",
    title: "Montage Stand Salon Paris 17e | Palais des Congrès & Batignolles",
    metaDescription: "Prestataire technique salons Paris 17e. Palais des Congrès, Espace Champerret, Batignolles. Expert montage stands congrès et conventions.",
    description: "BA ATTITUDE intervient dans le 17e arrondissement, pôle majeur des congrès parisiens. Notre expertise au Palais des Congrès et à l'Espace Champerret en fait un partenaire privilégié des organisateurs.",
    venues: [
      "Palais des Congrès de Paris",
      "Espace Champerret",
      "Salle Wagram",
      "Théâtre de Paris",
      "Parc Martin Luther King"
    ],
    events: [
      "Congrès Internationaux",
      "Conventions d'Entreprise",
      "Salons Professionnels Champerret",
      "Événements Corporate",
      "Galas & Cérémonies"
    ],
    landmarks: ["Palais des Congrès", "Parc Monceau", "Place de Clichy", "Batignolles"],
    neighboringArrondissements: ["8e", "9e", "16e", "18e"],
    stats: [
      { value: "70+", label: "Congrès/an" },
      { value: "1h", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "15+", label: "Ans expertise" }
    ],
    keywords: ["salon Palais des Congrès Paris", "événement Champerret", "montage stand Paris 17e", "prestataire congrès Batignolles"],
    faqs: [
      {
        question: "Êtes-vous référencés au Palais des Congrès de Paris ?",
        answer: "Le Palais des Congrès est l'un de nos sites d'intervention majeurs. Nous y accompagnons plus de 70 congrès par an et connaissons parfaitement les contraintes techniques et logistiques de chaque niveau."
      },
      {
        question: "Intervenez-vous à l'Espace Champerret ?",
        answer: "Oui, l'Espace Champerret accueille de nombreux salons professionnels sur lesquels nous assurons le montage de stands, la logistique et la coordination terrain."
      }
    ],
    geo: { latitude: 48.8834, longitude: 2.3089 }
  },
  "paris-18e": {
    id: "paris-18e",
    name: "18e arrondissement",
    fullName: "Paris 18e arrondissement - Butte-Montmartre",
    postalCode: "75018",
    title: "Montage Stand Salon Paris 18e | Montmartre & Clignancourt",
    metaDescription: "Expert événementiel Paris 18e arrondissement. Salons Montmartre, Porte de Clignancourt, La Villette (proximité). Service créatif et réactif.",
    description: "BA ATTITUDE accompagne vos événements dans le 18e arrondissement, de Montmartre à Clignancourt. Notre expertise créative répond aux exigences des événements culturels et artistiques du quartier.",
    venues: [
      "Le 104 (proximité)",
      "Élysée Montmartre",
      "La Cigale",
      "Machine du Moulin Rouge",
      "Saint-Ouen Puces"
    ],
    events: [
      "Événements Créatifs",
      "Salons Antiquaires Puces",
      "Festivals Culturels",
      "Événements Mode",
      "Pop-up Stores"
    ],
    landmarks: ["Sacré-Cœur", "Moulin Rouge", "Puces de Saint-Ouen", "Place du Tertre"],
    neighboringArrondissements: ["9e", "10e", "17e", "19e"],
    stats: [
      { value: "30+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "98%", label: "Satisfaction" },
      { value: "10+", label: "Ans présence" }
    ],
    keywords: ["événement Montmartre Paris", "salon Puces Saint-Ouen", "montage stand Paris 18e", "prestataire créatif Clignancourt"],
    faqs: [
      {
        question: "Accompagnez-vous les événements aux Puces de Saint-Ouen ?",
        answer: "Oui, les Puces de Saint-Ouen accueillent des salons antiquaires et design que nous accompagnons pour l'installation de stands et la scénographie dans ce lieu unique."
      },
      {
        question: "Intervenez-vous pour les événements culturels de Montmartre ?",
        answer: "Le quartier de Montmartre accueille de nombreux événements artistiques et culturels que nous accompagnons avec notre expertise créative et notre connaissance du terrain."
      }
    ],
    geo: { latitude: 48.8920, longitude: 2.3440 }
  },
  "paris-19e": {
    id: "paris-19e",
    name: "19e arrondissement",
    fullName: "Paris 19e arrondissement - Buttes-Chaumont",
    postalCode: "75019",
    title: "Montage Stand Salon Paris 19e | La Villette & Pantin",
    metaDescription: "Prestataire technique salons Paris 19e. Cité des Sciences, Grande Halle Villette, Le 104. Expert événements culturels et scientifiques.",
    description: "BA ATTITUDE accompagne vos événements dans le 19e arrondissement, autour du Parc de la Villette. Notre expertise couvre la Cité des Sciences, la Grande Halle et le Centquatre.",
    venues: [
      "Cité des Sciences",
      "Grande Halle de la Villette",
      "Philharmonie de Paris",
      "Le Centquatre",
      "Zénith de Paris"
    ],
    events: [
      "Salons Scientifiques",
      "Événements Culturels Villette",
      "Conventions Cité des Sciences",
      "Festivals Musique",
      "Expositions"
    ],
    landmarks: ["Parc de la Villette", "Cité des Sciences", "Canal de l'Ourcq", "Buttes-Chaumont"],
    neighboringArrondissements: ["10e", "18e", "20e"],
    stats: [
      { value: "55+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "100%", label: "Satisfaction" },
      { value: "12+", label: "Ans expertise" }
    ],
    keywords: ["salon Cité des Sciences Paris", "événement Grande Halle Villette", "montage stand Paris 19e", "prestataire Philharmonie"],
    faqs: [
      {
        question: "Accompagnez-vous les salons à la Cité des Sciences ?",
        answer: "La Cité des Sciences et de l'Industrie accueille de nombreux événements professionnels et grand public que nous accompagnons pour le montage de stands et la logistique événementielle."
      },
      {
        question: "Intervenez-vous à la Grande Halle de la Villette ?",
        answer: "Oui, la Grande Halle de la Villette est un site emblématique pour les grands salons parisiens. Nous maîtrisons parfaitement ses contraintes pour garantir le succès de vos événements."
      }
    ],
    geo: { latitude: 48.8870, longitude: 2.3820 }
  },
  "paris-20e": {
    id: "paris-20e",
    name: "20e arrondissement",
    fullName: "Paris 20e arrondissement - Ménilmontant",
    postalCode: "75020",
    title: "Montage Stand Salon Paris 20e | Belleville & Ménilmontant",
    metaDescription: "Expert événementiel Paris 20e arrondissement. Salons Belleville, Ménilmontant, Père-Lachaise. Expertise créative et culturelle.",
    description: "BA ATTITUDE intervient dans le 20e arrondissement, quartier créatif de l'Est parisien. Nous accompagnons les événements culturels et artistiques de Belleville à Ménilmontant.",
    venues: [
      "Mama Shelter",
      "La Bellevilloise",
      "Flèche d'Or",
      "Studios de Ménilmontant",
      "Espaces culturels Belleville"
    ],
    events: [
      "Événements Créatifs",
      "Salons Art Urbain",
      "Pop-up Markets",
      "Festivals Musique",
      "Showcases"
    ],
    landmarks: ["Père-Lachaise", "Belleville", "Ménilmontant", "Parc de Belleville"],
    neighboringArrondissements: ["10e", "11e", "12e", "19e"],
    stats: [
      { value: "25+", label: "Événements/an" },
      { value: "2h", label: "Intervention" },
      { value: "98%", label: "Satisfaction" },
      { value: "8+", label: "Ans présence" }
    ],
    keywords: ["événement Belleville Paris", "salon Ménilmontant", "montage stand Paris 20e", "prestataire créatif Est parisien"],
    faqs: [
      {
        question: "Accompagnez-vous les événements créatifs de Belleville ?",
        answer: "Oui, Belleville est un quartier artistique où nous accompagnons régulièrement des événements créatifs, vernissages et pop-up stores avec notre expertise scénographique."
      },
      {
        question: "Intervenez-vous à La Bellevilloise ?",
        answer: "La Bellevilloise est un lieu événementiel majeur du 20e que nous connaissons parfaitement pour y assurer les prestations techniques de salons et événements corporate."
      }
    ],
    geo: { latitude: 48.8650, longitude: 2.3980 }
  }
};

// Liste ordonnée des arrondissements pour navigation
export const arrondissementsList = [
  "paris-1er", "paris-2e", "paris-3e", "paris-4e", "paris-5e",
  "paris-6e", "paris-7e", "paris-8e", "paris-9e", "paris-10e",
  "paris-11e", "paris-12e", "paris-13e", "paris-14e", "paris-15e",
  "paris-16e", "paris-17e", "paris-18e", "paris-19e", "paris-20e"
];
