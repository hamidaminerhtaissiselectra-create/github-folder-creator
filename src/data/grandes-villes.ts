// Top 50 des plus grandes villes de France métropolitaine avec données personnalisées
// Classement par population (hors Paris déjà couvert par les arrondissements)

export interface GrandeVille {
  id: string;
  nom: string;
  region: string;
  departement: string;
  codeDepartement: string;
  population: number;
  siteExposition?: string;
  centreConvention?: string;
  evenementsMajeurs: string[];
  salonsPhares: string[];
  secteursActivite: string[];
  description: string;
  metaDescription: string;
  specificites: string[];
  faqs: { question: string; answer: string }[];
}

export const grandesVilles: GrandeVille[] = [
  // 1. Lyon (2e ville)
  {
    id: "lyon",
    nom: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    departement: "Rhône",
    codeDepartement: "69",
    population: 522969,
    siteExposition: "Eurexpo Lyon",
    centreConvention: "Centre de Congrès de Lyon",
    evenementsMajeurs: ["Sirha", "Pollutec", "Global Industrie", "Equip'Hotel"],
    salonsPhares: ["Sirha", "Pollutec", "Global Industrie", "Paysalia", "Batimat"],
    secteursActivite: ["Gastronomie", "Industrie", "Pharmaceutique", "Textile"],
    description: "Capitale de la gastronomie et pôle industriel majeur, Lyon accueille des salons d'envergure internationale comme Sirha et Global Industrie.",
    metaDescription: "Montage de stands et prestations événementielles à Lyon. Eurexpo, Centre de Congrès - Intervention rapide sur tous vos salons professionnels lyonnais.",
    specificites: [
      "Proximité immédiate d'Eurexpo (140 000 m²)",
      "Expertise salons gastronomie et industrie",
      "Équipes basées en région Auvergne-Rhône-Alpes"
    ],
    faqs: [
      {
        question: "Intervenez-vous sur Eurexpo Lyon ?",
        answer: "Oui, Eurexpo est l'un de nos sites d'intervention majeurs. Nous y accompagnons les exposants sur Sirha, Pollutec, Global Industrie et l'ensemble des salons organisés sur ce site de 140 000 m²."
      },
      {
        question: "Quels sont vos délais d'intervention à Lyon ?",
        answer: "Grâce à notre réseau régional, nous intervenons sous 48h à Lyon et dans toute la métropole lyonnaise. Pour les urgences pendant les salons, mobilisation possible en quelques heures."
      }
    ]
  },
  // 2. Marseille (3e ville)
  {
    id: "marseille",
    nom: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Bouches-du-Rhône",
    codeDepartement: "13",
    population: 873076,
    siteExposition: "Parc Chanot",
    centreConvention: "Palais du Pharo",
    evenementsMajeurs: ["Foire de Marseille", "MIDEM (Cannes)", "MIPIM (Cannes)"],
    salonsPhares: ["Foire de Marseille", "Vivatech Sud", "Med'Agri"],
    secteursActivite: ["Maritime", "Agroalimentaire", "Tourisme", "Énergie"],
    description: "Porte de la Méditerranée, Marseille combine tradition maritime et dynamisme économique avec des événements majeurs au Parc Chanot.",
    metaDescription: "Prestations événementielles à Marseille et région PACA. Parc Chanot, Palais du Pharo - Montage de stands pour tous vos salons professionnels.",
    specificites: [
      "Expertise salons maritimes et méditerranéens",
      "Couverture complète région PACA",
      "Intervention Cannes (MIPIM, MAPIC, MIDEM)"
    ],
    faqs: [
      {
        question: "Couvrez-vous également Cannes et Nice ?",
        answer: "Absolument. Nous intervenons sur l'ensemble de la Côte d'Azur : Palais des Festivals de Cannes (MIPIM, MAPIC, MIDEM), Nice Acropolis, Monaco, et tous les sites événementiels de la région."
      },
      {
        question: "Intervenez-vous au Parc Chanot ?",
        answer: "Oui, le Parc Chanot est l'un de nos sites réguliers. Nous accompagnons les exposants sur la Foire de Marseille et l'ensemble des salons professionnels organisés sur ce site."
      }
    ]
  },
  // 3. Toulouse (4e ville)
  {
    id: "toulouse",
    nom: "Toulouse",
    region: "Occitanie",
    departement: "Haute-Garonne",
    codeDepartement: "31",
    population: 498003,
    siteExposition: "MEETT Toulouse",
    centreConvention: "Centre de Congrès Pierre Baudis",
    evenementsMajeurs: ["Toulouse Space Show", "Siane", "IoT World"],
    salonsPhares: ["Toulouse Space Show", "Siane", "Energaïa", "Sepem Industries"],
    secteursActivite: ["Aéronautique", "Spatial", "IoT", "Santé"],
    description: "Capitale européenne de l'aéronautique et du spatial, Toulouse accueille des salons high-tech de renommée mondiale au nouveau MEETT.",
    metaDescription: "Montage de stands à Toulouse. MEETT, Centre de Congrès Pierre Baudis - Expert des salons aéronautique, spatial et industrie en Occitanie.",
    specificites: [
      "Expertise salons aéronautique et spatial",
      "Intervention sur le nouveau MEETT (155 000 m²)",
      "Couverture complète Occitanie"
    ],
    faqs: [
      {
        question: "Intervenez-vous sur le nouveau MEETT ?",
        answer: "Oui, le MEETT est notre site principal d'intervention à Toulouse. Ce nouveau parc d'exposition de 155 000 m² accueille les plus grands salons d'Occitanie que nous accompagnons régulièrement."
      },
      {
        question: "Avez-vous une expertise aéronautique ?",
        answer: "Toulouse étant la capitale de l'aéronautique européenne, nous avons développé une expertise spécifique sur les salons de ce secteur : Toulouse Space Show, sous-traitance aéronautique, et événements Airbus."
      }
    ]
  },
  // 4. Nice
  {
    id: "nice",
    nom: "Nice",
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Alpes-Maritimes",
    codeDepartement: "06",
    population: 342669,
    siteExposition: "Nice Acropolis",
    centreConvention: "Palais Nikaïa",
    evenementsMajeurs: ["CES Unveiled", "Congrès internationaux"],
    salonsPhares: ["Riviera Network", "Nice Congress", "Tech Summit"],
    secteursActivite: ["Tourisme", "Tech", "Luxe", "Santé"],
    description: "Perle de la Côte d'Azur, Nice combine tourisme haut de gamme et événements tech au sein de l'écosystème French Riviera.",
    metaDescription: "Prestations événementielles à Nice et Côte d'Azur. Nice Acropolis, Palais Nikaïa - Montage de stands pour congrès et salons professionnels.",
    specificites: [
      "Expertise événements luxe et tourisme",
      "Intervention rapide Côte d'Azur",
      "Coordination avec Monaco"
    ],
    faqs: [
      {
        question: "Intervenez-vous à Monaco depuis Nice ?",
        answer: "Oui, notre base niçoise nous permet d'intervenir très rapidement à Monaco pour les événements du Grimaldi Forum, du Monte-Carlo Bay et de l'ensemble de la Principauté."
      },
      {
        question: "Couvrez-vous les événements de luxe ?",
        answer: "La Côte d'Azur étant un territoire privilégié pour les événements haut de gamme, nous avons développé une expertise spécifique pour les lancements de produits de luxe et les soirées exclusives."
      }
    ]
  },
  // 5. Nantes
  {
    id: "nantes",
    nom: "Nantes",
    region: "Pays de la Loire",
    departement: "Loire-Atlantique",
    codeDepartement: "44",
    population: 320732,
    siteExposition: "Parc des Expositions de la Beaujoire",
    centreConvention: "Cité des Congrès",
    evenementsMajeurs: ["Salon du Végétal", "Digital Change", "Ouest Industries"],
    salonsPhares: ["Salon du Végétal", "Digital Change", "CFIA", "Sepem Industries"],
    secteursActivite: ["Agroalimentaire", "Végétal", "Digital", "Naval"],
    description: "Métropole dynamique de l'Ouest, Nantes est un hub majeur pour les salons agroalimentaires et les événements du végétal.",
    metaDescription: "Montage de stands à Nantes. Parc de la Beaujoire, Cité des Congrès - Expert des salons agroalimentaire et végétal en Pays de la Loire.",
    specificites: [
      "Expertise salons agroalimentaires",
      "Couverture Pays de la Loire et Bretagne",
      "Intervention sur événements maritimes"
    ],
    faqs: [
      {
        question: "Intervenez-vous sur le Parc de la Beaujoire ?",
        answer: "Oui, le Parc des Expositions de la Beaujoire est notre site principal à Nantes. Nous y intervenons sur le Salon du Végétal, les salons agroalimentaires et tous les événements professionnels."
      },
      {
        question: "Couvrez-vous également Rennes et la Bretagne ?",
        answer: "Absolument. Notre implantation nantaise nous permet de couvrir efficacement toute la Bretagne : Rennes, Brest, Saint-Brieuc, et l'ensemble des sites d'exposition de la région."
      }
    ]
  },
  // 6. Strasbourg
  {
    id: "strasbourg",
    nom: "Strasbourg",
    region: "Grand Est",
    departement: "Bas-Rhin",
    codeDepartement: "67",
    population: 291313,
    siteExposition: "Parc des Expositions de Strasbourg",
    centreConvention: "Palais de la Musique et des Congrès",
    evenementsMajeurs: ["Foire Européenne", "Marché de Noël Pro", "Be Positive"],
    salonsPhares: ["Foire Européenne", "Be Positive", "Sepem Industries", "JEC World"],
    secteursActivite: ["Européen", "Énergie", "Transfrontalier", "Vin"],
    description: "Capitale européenne, Strasbourg est un carrefour international idéal pour les salons transfrontaliers France-Allemagne.",
    metaDescription: "Prestations événementielles à Strasbourg. Parc des Expositions, Palais des Congrès - Expert des salons européens et transfrontaliers.",
    specificites: [
      "Expertise événements transfrontaliers",
      "Intervention en Allemagne (Fribourg, Karlsruhe)",
      "Connaissance parfaite du marché alsacien"
    ],
    faqs: [
      {
        question: "Intervenez-vous également en Allemagne ?",
        answer: "Oui, notre position strasbourgeoise nous permet d'intervenir facilement en Allemagne : Fribourg, Karlsruhe, Stuttgart. Nous gérons les spécificités réglementaires transfrontalières."
      },
      {
        question: "Accompagnez-vous la Foire Européenne ?",
        answer: "Absolument. La Foire Européenne de Strasbourg est l'un des événements majeurs où nous intervenons chaque année, avec une expertise complète de ce site et de ses spécificités."
      }
    ]
  },
  // 7. Montpellier
  {
    id: "montpellier",
    nom: "Montpellier",
    region: "Occitanie",
    departement: "Hérault",
    codeDepartement: "34",
    population: 299096,
    siteExposition: "Parc des Expositions de Montpellier",
    centreConvention: "Le Corum",
    evenementsMajeurs: ["Sitevi", "Vinisud", "Med'Agri"],
    salonsPhares: ["Sitevi", "Vinisud", "Med'Agri", "Energaïa"],
    secteursActivite: ["Viticulture", "Agroalimentaire", "Santé", "Énergie"],
    description: "Capitale du Languedoc et pôle viticole majeur, Montpellier accueille les plus grands salons du monde du vin et de l'agriculture.",
    metaDescription: "Montage de stands à Montpellier. Le Corum, Parc des Expositions - Expert des salons viticoles et agroalimentaires en Occitanie.",
    specificites: [
      "Expertise salons viticoles (Sitevi, Vinisud)",
      "Couverture complète du Sud de la France",
      "Intervention événements énergie renouvelable"
    ],
    faqs: [
      {
        question: "Êtes-vous spécialisés dans les salons viticoles ?",
        answer: "Montpellier étant la capitale de la viticulture française, nous avons développé une expertise pointue sur Sitevi, Vinisud et l'ensemble des événements liés au monde du vin."
      },
      {
        question: "Couvrez-vous Béziers et Narbonne ?",
        answer: "Oui, notre implantation montpelliéraine nous permet de couvrir tout le Languedoc : Béziers, Narbonne, Perpignan, et l'ensemble des sites événementiels de la région."
      }
    ]
  },
  // 8. Bordeaux
  {
    id: "bordeaux",
    nom: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    departement: "Gironde",
    codeDepartement: "33",
    population: 260958,
    siteExposition: "Parc des Expositions de Bordeaux",
    centreConvention: "Palais des Congrès de Bordeaux",
    evenementsMajeurs: ["Vinexpo", "Vinitech-Sifel", "Solutrans"],
    salonsPhares: ["Vinexpo", "Vinitech-Sifel", "Aquibat", "Sepem Industries"],
    secteursActivite: ["Vin", "Aéronautique", "Tourisme", "Agroalimentaire"],
    description: "Capitale mondiale du vin, Bordeaux accueille Vinexpo et des événements d'envergure internationale au Parc des Expositions.",
    metaDescription: "Prestations événementielles à Bordeaux. Parc des Expositions, Palais des Congrès - Expert Vinexpo et salons viticoles de Nouvelle-Aquitaine.",
    specificites: [
      "Expertise Vinexpo et salons du vin",
      "Couverture Nouvelle-Aquitaine",
      "Intervention sur événements aéronautique"
    ],
    faqs: [
      {
        question: "Accompagnez-vous Vinexpo ?",
        answer: "Vinexpo est l'un des événements phares où nous intervenons. Nous accompagnons les exposants sur ce salon international du vin avec une expertise complète du montage de stands premium."
      },
      {
        question: "Couvrez-vous le Sud-Ouest ?",
        answer: "Oui, notre base bordelaise nous permet de couvrir toute la Nouvelle-Aquitaine : Pau, Bayonne, La Rochelle, Poitiers, et l'ensemble des sites d'exposition de la région."
      }
    ]
  },
  // 9. Lille
  {
    id: "lille",
    nom: "Lille",
    region: "Hauts-de-France",
    departement: "Nord",
    codeDepartement: "59",
    population: 236710,
    siteExposition: "Lille Grand Palais",
    centreConvention: "Nouveau Siècle",
    evenementsMajeurs: ["Braderie Pro", "World Forum", "Salon du Tourisme"],
    salonsPhares: ["Sepem Industries", "Salon de l'Agriculture", "Artibat", "Sifer"],
    secteursActivite: ["Commerce", "Industrie", "Transport ferroviaire", "Textile"],
    description: "Carrefour européen au cœur du triangle Paris-Londres-Bruxelles, Lille Grand Palais accueille des événements d'envergure internationale.",
    metaDescription: "Montage de stands à Lille. Lille Grand Palais, Nouveau Siècle - Expert des salons industriels et européens dans les Hauts-de-France.",
    specificites: [
      "Position stratégique Paris-Londres-Bruxelles",
      "Expertise salons industriels et ferroviaires",
      "Intervention en Belgique possible"
    ],
    faqs: [
      {
        question: "Intervenez-vous sur Lille Grand Palais ?",
        answer: "Oui, Lille Grand Palais est notre site principal dans les Hauts-de-France. Nous y accompagnons les exposants sur tous les salons professionnels et événements d'entreprise."
      },
      {
        question: "Couvrez-vous la Belgique depuis Lille ?",
        answer: "Absolument. Notre proximité avec la Belgique nous permet d'intervenir à Bruxelles, Gand, Anvers pour les salons européens. Nous gérons les spécificités transfrontalières."
      }
    ]
  },
  // 10. Rennes
  {
    id: "rennes",
    nom: "Rennes",
    region: "Bretagne",
    departement: "Ille-et-Vilaine",
    codeDepartement: "35",
    population: 222485,
    siteExposition: "Parc Expo Rennes Aéroport",
    centreConvention: "Le Couvent des Jacobins",
    evenementsMajeurs: ["Space", "Carrefour International du Bois", "Ouest Industries"],
    salonsPhares: ["Space", "Carrefour International du Bois", "Ouest Industries", "Sepem"],
    secteursActivite: ["Agriculture", "Bois", "Digital", "Agroalimentaire"],
    description: "Capitale bretonne et pôle numérique majeur, Rennes accueille Space, le plus grand salon de l'élevage en Europe.",
    metaDescription: "Prestations événementielles à Rennes. Parc Expo Aéroport, Couvent des Jacobins - Expert Space et salons agricoles en Bretagne.",
    specificites: [
      "Expertise Space et salons agricoles",
      "Couverture complète Bretagne",
      "Intervention sur événements tech (Rennes Tech)"
    ],
    faqs: [
      {
        question: "Accompagnez-vous le salon Space ?",
        answer: "Space est l'un des événements majeurs où nous intervenons chaque année. Ce salon international de l'élevage rassemble plus de 100 000 visiteurs et nous y accompagnons de nombreux exposants."
      },
      {
        question: "Couvrez-vous toute la Bretagne ?",
        answer: "Oui, notre implantation rennaise nous permet d'intervenir sur toute la Bretagne : Brest, Quimper, Lorient, Saint-Brieuc, Vannes, et tous les sites événementiels de la région."
      }
    ]
  },
  // 11. Reims
  {
    id: "reims",
    nom: "Reims",
    region: "Grand Est",
    departement: "Marne",
    codeDepartement: "51",
    population: 182211,
    siteExposition: "Parc des Expositions de Reims",
    centreConvention: "Centre des Congrès de Reims",
    evenementsMajeurs: ["Foire de Champagne", "Salon du Vin de Champagne"],
    salonsPhares: ["Foire de Champagne", "Salon Habitat", "Sepem Industries"],
    secteursActivite: ["Champagne", "Agroalimentaire", "Industrie", "Luxe"],
    description: "Capitale du Champagne, Reims allie prestige viticole et dynamisme industriel avec des événements liés au monde du luxe.",
    metaDescription: "Montage de stands à Reims. Parc des Expositions, Centre des Congrès - Expert des événements Champagne et luxe dans le Grand Est.",
    specificites: [
      "Expertise événements Champagne et luxe",
      "Intervention dans les maisons de Champagne",
      "Couverture Grand Est et Champagne"
    ],
    faqs: [
      {
        question: "Organisez-vous des événements dans les maisons de Champagne ?",
        answer: "Oui, nous accompagnons régulièrement les grandes maisons de Champagne pour leurs événements privés et lancements de produits dans leurs caves et domaines."
      },
      {
        question: "Couvrez-vous Épernay et Troyes ?",
        answer: "Absolument. Notre présence rémoise nous permet de couvrir tout le territoire champenois : Épernay, Troyes, Châlons-en-Champagne, et l'ensemble de la région."
      }
    ]
  },
  // 12. Le Havre
  {
    id: "le-havre",
    nom: "Le Havre",
    region: "Normandie",
    departement: "Seine-Maritime",
    codeDepartement: "76",
    population: 170147,
    siteExposition: "Carré des Docks",
    centreConvention: "Docks Océane",
    evenementsMajeurs: ["Salon du Made in France", "Les Rendez-vous du Maritime"],
    salonsPhares: ["Salon du Made in France", "Sea Tech Week", "Salon Habitat"],
    secteursActivite: ["Maritime", "Portuaire", "Industrie", "Énergie"],
    description: "Premier port français pour le commerce extérieur, Le Havre est un hub stratégique pour les événements maritimes et industriels.",
    metaDescription: "Prestations événementielles au Havre. Carré des Docks - Expert des salons maritimes et portuaires en Normandie.",
    specificites: [
      "Expertise événements maritimes et portuaires",
      "Intervention sur sites industriels",
      "Couverture Normandie complète"
    ],
    faqs: [
      {
        question: "Intervenez-vous sur les événements portuaires ?",
        answer: "Le Havre étant le premier port français de commerce, nous avons développé une expertise spécifique pour les événements maritimes, logistiques et industriels liés au monde portuaire."
      },
      {
        question: "Couvrez-vous Rouen et la Normandie ?",
        answer: "Oui, notre présence au Havre nous permet de couvrir toute la Normandie : Rouen, Caen, Deauville, et l'ensemble des sites événementiels de la région."
      }
    ]
  },
  // 13. Saint-Étienne
  {
    id: "saint-etienne",
    nom: "Saint-Étienne",
    region: "Auvergne-Rhône-Alpes",
    departement: "Loire",
    codeDepartement: "42",
    population: 172696,
    siteExposition: "Parc des Expositions de Saint-Étienne",
    centreConvention: "Centre de Congrès",
    evenementsMajeurs: ["Biennale du Design", "Salon du Made in France"],
    salonsPhares: ["Biennale du Design", "Salon Habitat", "Sepem Industries"],
    secteursActivite: ["Design", "Industrie", "Innovation", "Textile"],
    description: "Ville UNESCO du Design, Saint-Étienne accueille la Biennale Internationale du Design et des événements innovants.",
    metaDescription: "Montage de stands à Saint-Étienne. Parc des Expositions - Expert Biennale du Design et événements industriels en Loire.",
    specificites: [
      "Expertise événements design et création",
      "Proximité Lyon (40 min)",
      "Couverture Loire et Haute-Loire"
    ],
    faqs: [
      {
        question: "Accompagnez-vous la Biennale du Design ?",
        answer: "La Biennale Internationale du Design est l'un des événements phares où nous intervenons. Saint-Étienne étant ville UNESCO du Design, nous avons une expertise particulière sur ces événements créatifs."
      },
      {
        question: "Intervenez-vous également à Lyon depuis Saint-Étienne ?",
        answer: "Oui, la proximité avec Lyon (40 minutes) nous permet d'intervenir sur les deux métropoles. Nous couvrons ainsi tout le corridor Rhône-Alpes."
      }
    ]
  },
  // 14. Toulon
  {
    id: "toulon",
    nom: "Toulon",
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Var",
    codeDepartement: "83",
    population: 178745,
    siteExposition: "Palais Neptune",
    centreConvention: "Palais des Congrès Neptune",
    evenementsMajeurs: ["Euronaval Med", "Salon du Nautisme"],
    salonsPhares: ["Euronaval Med", "Salon du Nautisme", "Salon Habitat"],
    secteursActivite: ["Naval militaire", "Nautisme", "Tourisme", "Défense"],
    description: "Premier port militaire français, Toulon accueille des événements liés à la défense navale et au nautisme méditerranéen.",
    metaDescription: "Prestations événementielles à Toulon. Palais Neptune - Expert des événements naval, défense et nautisme en région PACA.",
    specificites: [
      "Expertise événements défense et naval",
      "Intervention sur sites militaires (habilitations)",
      "Couverture Var et Côte d'Azur"
    ],
    faqs: [
      {
        question: "Avez-vous les habilitations pour les événements défense ?",
        answer: "Toulon étant le premier port militaire français, nous disposons des habilitations nécessaires pour intervenir sur les événements liés à la défense et à la Marine Nationale."
      },
      {
        question: "Couvrez-vous Hyères et le Var ?",
        answer: "Oui, notre implantation toulonnaise nous permet de couvrir tout le Var : Hyères, Fréjus, Saint-Tropez, Draguignan, et l'ensemble des sites événementiels du département."
      }
    ]
  },
  // 15. Grenoble
  {
    id: "grenoble",
    nom: "Grenoble",
    region: "Auvergne-Rhône-Alpes",
    departement: "Isère",
    codeDepartement: "38",
    population: 158198,
    siteExposition: "Alpexpo",
    centreConvention: "World Trade Center Grenoble",
    evenementsMajeurs: ["Mountain Planet", "Sepem Industries", "Salon de la Montagne"],
    salonsPhares: ["Mountain Planet", "Alpitec", "Sepem Industries", "Salon Habitat"],
    secteursActivite: ["Montagne", "High-tech", "Énergie", "Recherche"],
    description: "Capitale des Alpes et pôle d'innovation, Grenoble est le hub mondial des technologies de la montagne avec Mountain Planet.",
    metaDescription: "Montage de stands à Grenoble. Alpexpo, WTC - Expert Mountain Planet et salons high-tech dans les Alpes françaises.",
    specificites: [
      "Expertise salons montagne et outdoor",
      "Intervention sur événements high-tech",
      "Couverture Alpes françaises"
    ],
    faqs: [
      {
        question: "Accompagnez-vous Mountain Planet ?",
        answer: "Mountain Planet est l'événement phare d'Alpexpo que nous accompagnons systématiquement. Ce salon mondial de l'aménagement de la montagne rassemble tout l'écosystème alpin."
      },
      {
        question: "Intervenez-vous dans les stations de ski ?",
        answer: "Oui, nous accompagnons les événements professionnels dans les stations alpines : Chamonix, Courchevel, Méribel, Val d'Isère, pour les séminaires d'entreprise et événements corporate."
      }
    ]
  },
  // 16. Dijon
  {
    id: "dijon",
    nom: "Dijon",
    region: "Bourgogne-Franche-Comté",
    departement: "Côte-d'Or",
    codeDepartement: "21",
    population: 159346,
    siteExposition: "Parc des Expositions de Dijon",
    centreConvention: "Palais des Congrès",
    evenementsMajeurs: ["Salon des Vins de Bourgogne", "Foire Internationale de Dijon"],
    salonsPhares: ["Salon des Vins", "Foire de Dijon", "Vinexpo Explorer", "Sepem"],
    secteursActivite: ["Vin", "Gastronomie", "Agroalimentaire", "Industrie"],
    description: "Capitale de la Bourgogne et de la gastronomie, Dijon accueille des événements viticoles et culinaires de renommée internationale.",
    metaDescription: "Prestations événementielles à Dijon. Parc des Expositions, Palais des Congrès - Expert des salons viticoles et gastronomiques en Bourgogne.",
    specificites: [
      "Expertise événements viticoles bourguignons",
      "Intervention dans les domaines viticoles",
      "Couverture Bourgogne-Franche-Comté"
    ],
    faqs: [
      {
        question: "Accompagnez-vous les événements viticoles en Bourgogne ?",
        answer: "Dijon étant la capitale de la Bourgogne viticole, nous accompagnons les salons des vins, les événements dans les domaines et les dégustations professionnelles de la région."
      },
      {
        question: "Couvrez-vous Beaune et la route des vins ?",
        answer: "Oui, nous intervenons sur toute la route des vins de Bourgogne : Beaune, Nuits-Saint-Georges, Mâcon, Chablis, pour les événements professionnels et les réceptions dans les domaines."
      }
    ]
  },
  // 17. Angers
  {
    id: "angers",
    nom: "Angers",
    region: "Pays de la Loire",
    departement: "Maine-et-Loire",
    codeDepartement: "49",
    population: 157175,
    siteExposition: "Parc des Expositions d'Angers",
    centreConvention: "Centre de Congrès",
    evenementsMajeurs: ["Sival", "Carrefour International du Bois"],
    salonsPhares: ["Sival", "Salon du Végétal", "Sepem Industries", "Salon Habitat"],
    secteursActivite: ["Végétal", "Horticulture", "Agroalimentaire", "Électronique"],
    description: "Capitale du végétal et pôle horticole majeur, Angers accueille Sival et des événements dédiés au monde du plant.",
    metaDescription: "Montage de stands à Angers. Parc des Expositions - Expert Sival et salons du végétal en Pays de la Loire.",
    specificites: [
      "Expertise salons végétal et horticulture",
      "Intervention sur événements électronique",
      "Couverture Maine-et-Loire et Anjou"
    ],
    faqs: [
      {
        question: "Accompagnez-vous le salon Sival ?",
        answer: "Sival est le salon phare d'Angers dédié aux productions végétales. Nous y accompagnons chaque année de nombreux exposants avec une expertise spécifique du secteur horticole."
      },
      {
        question: "Intervenez-vous sur Le Mans et la Sarthe ?",
        answer: "Oui, notre présence angevine nous permet de couvrir les départements voisins : Le Mans, Laval, et l'ensemble du Maine-et-Loire pour les événements professionnels."
      }
    ]
  },
  // 18. Nîmes
  {
    id: "nimes",
    nom: "Nîmes",
    region: "Occitanie",
    departement: "Gard",
    codeDepartement: "30",
    population: 148236,
    siteExposition: "Parc des Expositions de Nîmes",
    centreConvention: "Arènes de Nîmes (événements)",
    evenementsMajeurs: ["Feria (événements pro)", "Salon du Tourisme"],
    salonsPhares: ["Salon du Tourisme", "Foire de Nîmes", "Salon Habitat"],
    secteursActivite: ["Tourisme", "Viticulture", "Textile", "Agroalimentaire"],
    description: "Ville romaine au cœur du Languedoc, Nîmes combine patrimoine exceptionnel et événements dans un cadre unique comme les Arènes.",
    metaDescription: "Prestations événementielles à Nîmes. Arènes de Nîmes, Parc des Expositions - Expert des événements dans sites patrimoniaux en Occitanie.",
    specificites: [
      "Expertise événements dans sites patrimoniaux",
      "Intervention dans les Arènes et monuments",
      "Couverture Gard et Languedoc"
    ],
    faqs: [
      {
        question: "Organisez-vous des événements dans les Arènes ?",
        answer: "Les Arènes de Nîmes accueillent régulièrement des événements corporate et professionnels. Nous y intervenons avec une expertise spécifique de ce site patrimonial exceptionnel."
      },
      {
        question: "Couvrez-vous Avignon et le Vaucluse ?",
        answer: "Oui, notre implantation nîmoise nous permet de couvrir le Gard, le Vaucluse (Avignon), les Bouches-du-Rhône, et l'ensemble du sud de la région Occitanie."
      }
    ]
  },
  // 19. Villeurbanne
  {
    id: "villeurbanne",
    nom: "Villeurbanne",
    region: "Auvergne-Rhône-Alpes",
    departement: "Rhône",
    codeDepartement: "69",
    population: 154781,
    siteExposition: "Eurexpo (proximité)",
    centreConvention: "Double Mixte",
    evenementsMajeurs: ["Congrès tech", "Événements corporate"],
    salonsPhares: ["Événements tech", "Séminaires entreprise", "Lancements produits"],
    secteursActivite: ["Tech", "Industrie", "Startups", "Innovation"],
    description: "Cœur technologique de la métropole lyonnaise, Villeurbanne est un pôle d'innovation accueillant de nombreux événements tech et startups.",
    metaDescription: "Montage de stands à Villeurbanne. Double Mixte, campus tech - Expert des événements innovation et startups dans la métropole lyonnaise.",
    specificites: [
      "Expertise événements tech et startups",
      "Intervention campus universitaires",
      "Synergie avec Lyon et Eurexpo"
    ],
    faqs: [
      {
        question: "Intervenez-vous sur les campus de Villeurbanne ?",
        answer: "Villeurbanne accueillant de nombreux campus universitaires et technologiques (INSA, La Doua), nous intervenons régulièrement sur les événements académiques et les job datings."
      },
      {
        question: "Quelle différence avec Lyon ?",
        answer: "Villeurbanne fait partie de la métropole lyonnaise. Notre intervention couvre l'ensemble du territoire : Eurexpo, Centre de Congrès, et tous les sites de Villeurbanne et Lyon."
      }
    ]
  },
  // 20. Le Mans
  {
    id: "le-mans",
    nom: "Le Mans",
    region: "Pays de la Loire",
    departement: "Sarthe",
    codeDepartement: "72",
    population: 145169,
    siteExposition: "Parc des Expositions du Mans",
    centreConvention: "Centre des Congrès",
    evenementsMajeurs: ["24 Heures du Mans (off)", "Salon de l'Auto"],
    salonsPhares: ["Salon de l'Auto", "Foire du Mans", "Sepem Industries"],
    secteursActivite: ["Automobile", "Assurance", "Industrie", "Agroalimentaire"],
    description: "Capitale de l'endurance automobile, Le Mans est un pôle majeur pour les événements liés au monde de l'automobile et du sport mécanique.",
    metaDescription: "Prestations événementielles au Mans. Parc des Expositions - Expert des événements automobile et industriels en Sarthe.",
    specificites: [
      "Expertise événements automobile",
      "Intervention lors des 24 Heures (villages partenaires)",
      "Couverture Sarthe et Maine"
    ],
    faqs: [
      {
        question: "Intervenez-vous lors des 24 Heures du Mans ?",
        answer: "Les 24 Heures du Mans génèrent de nombreux événements professionnels (villages partenaires, hospitality, lancements). Nous y intervenons pour les stands et espaces corporate."
      },
      {
        question: "Couvrez-vous la Sarthe et le Maine ?",
        answer: "Oui, notre implantation mancelle nous permet de couvrir la Sarthe, le Maine-et-Loire, la Mayenne, et l'ensemble des sites événementiels de la région."
      }
    ]
  },
  // 21. Aix-en-Provence
  {
    id: "aix-en-provence",
    nom: "Aix-en-Provence",
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Bouches-du-Rhône",
    codeDepartement: "13",
    population: 145133,
    siteExposition: "Pasino Aix-en-Provence",
    centreConvention: "Centre de Congrès",
    evenementsMajeurs: ["Festival d'Aix (off pro)", "Tech conferences"],
    salonsPhares: ["Conférences tech", "Événements luxe", "Séminaires"],
    secteursActivite: ["Tech", "Luxe", "Culture", "Recherche"],
    description: "Ville d'art et de culture, Aix-en-Provence est un lieu privilégié pour les événements haut de gamme et les conférences internationales.",
    metaDescription: "Montage de stands à Aix-en-Provence. Centre de Congrès - Expert des événements premium et conférences en Provence.",
    specificites: [
      "Expertise événements haut de gamme",
      "Intervention Festival d'Aix (corporate)",
      "Synergie avec Marseille"
    ],
    faqs: [
      {
        question: "Organisez-vous des événements pour le Festival d'Aix ?",
        answer: "Le Festival d'Aix génère de nombreux événements corporate (réceptions, soirées sponsors). Nous accompagnons ces événements dans les lieux prestigieux de la ville."
      },
      {
        question: "Quelle coordination avec Marseille ?",
        answer: "Aix-en-Provence et Marseille forment une métropole complémentaire. Notre couverture inclut les deux villes et l'ensemble des sites événementiels des Bouches-du-Rhône."
      }
    ]
  },
  // 22. Clermont-Ferrand
  {
    id: "clermont-ferrand",
    nom: "Clermont-Ferrand",
    region: "Auvergne-Rhône-Alpes",
    departement: "Puy-de-Dôme",
    codeDepartement: "63",
    population: 147865,
    siteExposition: "Grande Halle d'Auvergne",
    centreConvention: "Polydome",
    evenementsMajeurs: ["Salon de l'Agriculture", "Court Métrage (pro)"],
    salonsPhares: ["Salon de l'Agriculture", "Sepem Industries", "Salon Habitat"],
    secteursActivite: ["Industrie pneumatique", "Agriculture", "Santé", "Recherche"],
    description: "Capitale de l'Auvergne et berceau de Michelin, Clermont-Ferrand est un pôle industriel majeur accueillant des salons agricoles et techniques.",
    metaDescription: "Prestations événementielles à Clermont-Ferrand. Grande Halle d'Auvergne, Polydome - Expert des salons industriels et agricoles en Auvergne.",
    specificites: [
      "Expertise salons industrie et agriculture",
      "Intervention sur événements Michelin",
      "Couverture Auvergne complète"
    ],
    faqs: [
      {
        question: "Accompagnez-vous les événements Michelin ?",
        answer: "Clermont-Ferrand étant le siège de Michelin, nous accompagnons régulièrement les événements internes et externes de ce groupe mondial : lancements, conventions, salons."
      },
      {
        question: "Couvrez-vous l'ensemble de l'Auvergne ?",
        answer: "Oui, notre implantation clermontoise nous permet de couvrir le Puy-de-Dôme, le Cantal, la Haute-Loire, l'Allier, et l'ensemble de la région Auvergne."
      }
    ]
  },
  // 23. Brest
  {
    id: "brest",
    nom: "Brest",
    region: "Bretagne",
    departement: "Finistère",
    codeDepartement: "29",
    population: 140064,
    siteExposition: "Parc des Expositions de Penfeld",
    centreConvention: "Le Quartz",
    evenementsMajeurs: ["Fêtes Maritimes (pro)", "Salon Nautique", "Sea Tech Week"],
    salonsPhares: ["Salon Nautique", "Sea Tech Week", "Sepem Industries"],
    secteursActivite: ["Maritime", "Défense", "Océanographie", "Agroalimentaire"],
    description: "Premier port militaire de l'Atlantique, Brest est un hub pour les événements maritimes et les technologies océanographiques.",
    metaDescription: "Montage de stands à Brest. Le Quartz, Parc des Expositions - Expert des événements maritimes et navals en Finistère.",
    specificites: [
      "Expertise événements maritimes et navals",
      "Intervention sur sites militaires",
      "Couverture Finistère et Bretagne Ouest"
    ],
    faqs: [
      {
        question: "Avez-vous les habilitations pour la Marine ?",
        answer: "Brest étant le premier port militaire de l'Atlantique, nous disposons des habilitations nécessaires pour intervenir sur les événements liés à la Marine Nationale et à la défense."
      },
      {
        question: "Accompagnez-vous les Fêtes Maritimes ?",
        answer: "Les Fêtes Maritimes de Brest génèrent de nombreux événements professionnels et villages sponsors. Nous y intervenons pour les espaces corporate et les stands partenaires."
      }
    ]
  },
  // 24. Tours
  {
    id: "tours",
    nom: "Tours",
    region: "Centre-Val de Loire",
    departement: "Indre-et-Loire",
    codeDepartement: "37",
    population: 136463,
    siteExposition: "Parc des Expositions de Tours",
    centreConvention: "Vinci - Centre de Congrès",
    evenementsMajeurs: ["Salon de l'Agriculture Centre", "Salon du Tourisme"],
    salonsPhares: ["Salon de l'Agriculture", "Salon du Tourisme", "Foire de Tours"],
    secteursActivite: ["Tourisme", "Viticulture", "Pharmacie", "Agroalimentaire"],
    description: "Au cœur des Châteaux de la Loire, Tours est un carrefour touristique et viticole accueillant des événements dans un cadre patrimonial.",
    metaDescription: "Prestations événementielles à Tours. Vinci Centre de Congrès - Expert des événements tourisme et patrimoine en Centre-Val de Loire.",
    specificites: [
      "Expertise événements dans châteaux",
      "Intervention sur sites patrimoniaux",
      "Couverture Centre-Val de Loire"
    ],
    faqs: [
      {
        question: "Organisez-vous des événements dans les Châteaux de la Loire ?",
        answer: "Tours étant au cœur du Val de Loire, nous accompagnons régulièrement des événements dans les châteaux : Chambord, Chenonceau, Amboise, pour les réceptions corporate et les lancements."
      },
      {
        question: "Couvrez-vous Orléans et le Centre ?",
        answer: "Oui, notre implantation tourangelle nous permet de couvrir toute la région Centre-Val de Loire : Orléans, Blois, Chartres, Bourges, et l'ensemble des sites événementiels."
      }
    ]
  },
  // 25. Limoges
  {
    id: "limoges",
    nom: "Limoges",
    region: "Nouvelle-Aquitaine",
    departement: "Haute-Vienne",
    codeDepartement: "87",
    population: 130592,
    siteExposition: "Parc des Expositions de Limoges",
    centreConvention: "Zénith de Limoges",
    evenementsMajeurs: ["Salon de l'Habitat", "Foire Exposition"],
    salonsPhares: ["Salon de l'Habitat", "Foire de Limoges", "Sepem Industries"],
    secteursActivite: ["Porcelaine", "Cuir", "Agroalimentaire", "Électronique"],
    description: "Capitale des arts du feu et de la porcelaine, Limoges est un pôle de savoir-faire artisanal et industriel au cœur du Limousin.",
    metaDescription: "Montage de stands à Limoges. Parc des Expositions - Expert des événements artisanat et industrie en Haute-Vienne.",
    specificites: [
      "Expertise événements artisanat d'art",
      "Intervention sur salons porcelaine et cuir",
      "Couverture Limousin complète"
    ],
    faqs: [
      {
        question: "Accompagnez-vous les événements porcelaine ?",
        answer: "Limoges étant la capitale mondiale de la porcelaine, nous accompagnons les événements liés à cet artisanat : salons, expositions, et événements dans les manufactures."
      },
      {
        question: "Couvrez-vous le Limousin ?",
        answer: "Oui, notre implantation limougeaude nous permet de couvrir la Haute-Vienne, la Corrèze, la Creuse, et l'ensemble des sites événementiels du Limousin."
      }
    ]
  },
  // 26. Amiens
  {
    id: "amiens",
    nom: "Amiens",
    region: "Hauts-de-France",
    departement: "Somme",
    codeDepartement: "80",
    population: 135449,
    siteExposition: "Mégacité",
    centreConvention: "Mégacité",
    evenementsMajeurs: ["Salon de l'Habitat", "Congrès régionaux"],
    salonsPhares: ["Salon de l'Habitat", "Foire d'Amiens", "Sepem Industries"],
    secteursActivite: ["Agroalimentaire", "Logistique", "Santé", "Textile"],
    description: "Capitale de la Picardie, Amiens est un carrefour logistique majeur entre Paris et le nord de l'Europe.",
    metaDescription: "Prestations événementielles à Amiens. Mégacité - Expert des salons professionnels et événements en Picardie.",
    specificites: [
      "Position stratégique Paris-Nord Europe",
      "Expertise salons logistique",
      "Couverture Picardie complète"
    ],
    faqs: [
      {
        question: "Intervenez-vous sur Mégacité ?",
        answer: "Mégacité est notre site principal à Amiens. Ce complexe multifonctionnel accueille salons, congrès et événements que nous accompagnons régulièrement."
      },
      {
        question: "Couvrez-vous Saint-Quentin et Compiègne ?",
        answer: "Oui, notre présence amiénoise nous permet de couvrir toute la Picardie : Saint-Quentin, Compiègne, Beauvais, et l'ensemble de la Somme et de l'Oise."
      }
    ]
  },
  // 27. Perpignan
  {
    id: "perpignan",
    nom: "Perpignan",
    region: "Occitanie",
    departement: "Pyrénées-Orientales",
    codeDepartement: "66",
    population: 121875,
    siteExposition: "Parc des Expositions de Perpignan",
    centreConvention: "Palais des Congrès",
    evenementsMajeurs: ["Visa pour l'Image (pro)", "Salon du Tourisme"],
    salonsPhares: ["Visa pour l'Image", "Salon du Tourisme", "Foire de Perpignan"],
    secteursActivite: ["Tourisme", "Viticulture", "Agroalimentaire", "Culture"],
    description: "Porte de la Catalogne, Perpignan est un carrefour franco-espagnol accueillant des événements culturels majeurs comme Visa pour l'Image.",
    metaDescription: "Montage de stands à Perpignan. Palais des Congrès - Expert des événements transfrontaliers et culturels en Pays Catalan.",
    specificites: [
      "Expertise événements transfrontaliers France-Espagne",
      "Intervention sur Visa pour l'Image",
      "Couverture Pyrénées-Orientales et Catalogne"
    ],
    faqs: [
      {
        question: "Accompagnez-vous Visa pour l'Image ?",
        answer: "Visa pour l'Image est le festival international du photojournalisme. Nous accompagnons les événements professionnels liés à ce rendez-vous mondial de l'image."
      },
      {
        question: "Intervenez-vous en Espagne ?",
        answer: "Notre position perpignanaise nous permet d'intervenir en Catalogne espagnole : Barcelone, Gérone, Figueres, pour les événements transfrontaliers et les salons catalans."
      }
    ]
  },
  // 28. Metz
  {
    id: "metz",
    nom: "Metz",
    region: "Grand Est",
    departement: "Moselle",
    codeDepartement: "57",
    population: 120205,
    siteExposition: "Parc des Expositions de Metz",
    centreConvention: "Centre Pompidou-Metz (événements)",
    evenementsMajeurs: ["Foire Internationale de Metz", "Congrès industriels"],
    salonsPhares: ["Foire de Metz", "Sepem Industries", "Salon Habitat"],
    secteursActivite: ["Industrie", "Transfrontalier", "Culture", "Logistique"],
    description: "Carrefour lorrain et porte du Luxembourg, Metz est un hub industriel accueillant des événements transfrontaliers France-Allemagne-Luxembourg.",
    metaDescription: "Prestations événementielles à Metz. Parc des Expositions - Expert des salons industriels et transfrontaliers en Moselle.",
    specificites: [
      "Expertise événements transfrontaliers (Lux, Allemagne)",
      "Intervention sur événements Pompidou-Metz",
      "Couverture Lorraine et Grande Région"
    ],
    faqs: [
      {
        question: "Intervenez-vous au Luxembourg depuis Metz ?",
        answer: "Notre position messine nous permet d'intervenir très rapidement au Luxembourg (30 min) : Luxexpo, Kirchberg, et l'ensemble des sites événementiels luxembourgeois."
      },
      {
        question: "Organisez-vous des événements au Centre Pompidou-Metz ?",
        answer: "Le Centre Pompidou-Metz accueille des événements corporate et des réceptions privées. Nous y intervenons avec une expertise spécifique de ce site architectural exceptionnel."
      }
    ]
  },
  // 29. Besançon
  {
    id: "besancon",
    nom: "Besançon",
    region: "Bourgogne-Franche-Comté",
    departement: "Doubs",
    codeDepartement: "25",
    population: 117836,
    siteExposition: "Micropolis",
    centreConvention: "Micropolis",
    evenementsMajeurs: ["Micronora", "Salon de l'Horlogerie"],
    salonsPhares: ["Micronora", "Salon de l'Horlogerie", "Sepem Industries"],
    secteursActivite: ["Microtechniques", "Horlogerie", "Médical", "Industrie"],
    description: "Capitale française des microtechniques et de l'horlogerie, Besançon accueille Micronora, salon international de la précision.",
    metaDescription: "Montage de stands à Besançon. Micropolis - Expert Micronora et salons des microtechniques en Franche-Comté.",
    specificites: [
      "Expertise Micronora et microtechniques",
      "Intervention sur événements horlogerie",
      "Couverture Franche-Comté et Suisse"
    ],
    faqs: [
      {
        question: "Accompagnez-vous Micronora ?",
        answer: "Micronora est le salon phare de Besançon, dédié aux microtechniques et à la précision. Nous y accompagnons les exposants avec une expertise spécifique de ce secteur technique."
      },
      {
        question: "Intervenez-vous en Suisse ?",
        answer: "Notre position bisontine nous permet d'intervenir en Suisse romande : Genève, Lausanne, Neuchâtel, pour les salons horlogers et les événements de précision."
      }
    ]
  },
  // 30. Orléans
  {
    id: "orleans",
    nom: "Orléans",
    region: "Centre-Val de Loire",
    departement: "Loiret",
    codeDepartement: "45",
    population: 116685,
    siteExposition: "Parc des Expositions d'Orléans",
    centreConvention: "Centre de Conférences",
    evenementsMajeurs: ["Salon de l'Agriculture", "Foire d'Orléans"],
    salonsPhares: ["Salon de l'Agriculture", "Foire d'Orléans", "Sepem Industries"],
    secteursActivite: ["Cosmétique", "Pharmacie", "Logistique", "Agroalimentaire"],
    description: "Capitale régionale du Centre-Val de Loire et pôle cosmétique majeur, Orléans accueille des événements agricoles et industriels.",
    metaDescription: "Prestations événementielles à Orléans. Parc des Expositions - Expert des salons agricoles et industriels dans le Loiret.",
    specificites: [
      "Expertise pôle cosmétique (Cosmetic Valley)",
      "Position stratégique Paris-Sud",
      "Couverture Centre-Val de Loire"
    ],
    faqs: [
      {
        question: "Accompagnez-vous les événements Cosmetic Valley ?",
        answer: "Orléans étant au cœur de Cosmetic Valley, premier pôle mondial de la parfumerie-cosmétique, nous accompagnons les événements de ce secteur : salons, lancements, conventions."
      },
      {
        question: "Couvrez-vous Chartres et le Loiret ?",
        answer: "Oui, notre implantation orléanaise nous permet de couvrir le Loiret, l'Eure-et-Loir, le Loir-et-Cher, et l'ensemble de la région Centre-Val de Loire."
      }
    ]
  },
  // 31-50: Villes supplémentaires
  {
    id: "mulhouse",
    nom: "Mulhouse",
    region: "Grand Est",
    departement: "Haut-Rhin",
    codeDepartement: "68",
    population: 110351,
    siteExposition: "Parc Expo Mulhouse",
    centreConvention: "Palais des Sports",
    evenementsMajeurs: ["Salon de l'Auto", "Foire de Mulhouse"],
    salonsPhares: ["Salon de l'Auto", "Foire de Mulhouse", "Sepem Industries"],
    secteursActivite: ["Automobile", "Textile", "Industrie", "Transfrontalier"],
    description: "Capitale alsacienne de l'automobile et carrefour tripartite France-Allemagne-Suisse, Mulhouse est un pôle industriel dynamique.",
    metaDescription: "Montage de stands à Mulhouse. Parc Expo - Expert des salons industriels et automobiles en Alsace du Sud.",
    specificites: [
      "Expertise salons automobile",
      "Intervention tripartite (France, Allemagne, Suisse)",
      "Couverture Haut-Rhin et Bâle"
    ],
    faqs: [
      {
        question: "Intervenez-vous en Suisse et en Allemagne ?",
        answer: "Mulhouse étant au carrefour de trois pays, nous intervenons à Bâle (Suisse), Fribourg-en-Brisgau (Allemagne), et dans l'ensemble de la région transfrontalière."
      },
      {
        question: "Accompagnez-vous les événements automobile ?",
        answer: "Mulhouse accueillant la Cité de l'Automobile, nous avons une expertise spécifique sur les événements liés au monde automobile : salons, lancements, conventions constructeurs."
      }
    ]
  },
  {
    id: "caen",
    nom: "Caen",
    region: "Normandie",
    departement: "Calvados",
    codeDepartement: "14",
    population: 107229,
    siteExposition: "Parc des Expositions de Caen",
    centreConvention: "Centre de Congrès",
    evenementsMajeurs: ["Foire de Caen", "Salon de l'Agriculture"],
    salonsPhares: ["Foire de Caen", "Salon de l'Agriculture", "Sepem Industries"],
    secteursActivite: ["Agroalimentaire", "Équin", "Industrie", "Tourisme"],
    description: "Capitale normande, Caen est un pôle agroalimentaire et équin majeur accueillant des événements dans un cadre historique.",
    metaDescription: "Prestations événementielles à Caen. Parc des Expositions - Expert des salons agricoles et équins en Normandie.",
    specificites: [
      "Expertise salons équins et agricoles",
      "Intervention D-Day (événements mémoriels)",
      "Couverture Normandie Ouest"
    ],
    faqs: [
      {
        question: "Accompagnez-vous les événements équestres ?",
        answer: "La Normandie étant la première région équine de France, nous accompagnons les salons du cheval, les concours hippiques professionnels et les événements du monde équin."
      },
      {
        question: "Intervenez-vous sur les événements D-Day ?",
        answer: "Les plages du Débarquement génèrent des événements mémoriels et corporate. Nous accompagnons ces événements dans les sites historiques normands."
      }
    ]
  },
  {
    id: "nancy",
    nom: "Nancy",
    region: "Grand Est",
    departement: "Meurthe-et-Moselle",
    codeDepartement: "54",
    population: 104592,
    siteExposition: "Parc des Expositions de Nancy",
    centreConvention: "Centre de Congrès Prouvé",
    evenementsMajeurs: ["Foire de Nancy", "Congrès médicaux"],
    salonsPhares: ["Foire de Nancy", "Sepem Industries", "Salon Habitat"],
    secteursActivite: ["Santé", "Recherche", "Art Nouveau", "Industrie"],
    description: "Ville Art Nouveau et pôle de santé majeur, Nancy accueille des congrès médicaux et des événements culturels de prestige.",
    metaDescription: "Montage de stands à Nancy. Centre de Congrès Prouvé - Expert des congrès médicaux et événements culturels en Lorraine.",
    specificites: [
      "Expertise congrès médicaux et scientifiques",
      "Intervention sur événements Art Nouveau",
      "Couverture Lorraine Sud"
    ],
    faqs: [
      {
        question: "Accompagnez-vous les congrès médicaux ?",
        answer: "Nancy étant un pôle de santé majeur (CHU, facultés de médecine), nous accompagnons de nombreux congrès médicaux et événements du secteur santé."
      },
      {
        question: "Organisez-vous des événements Art Nouveau ?",
        answer: "Nancy étant la capitale de l'Art Nouveau, nous intervenons sur les événements dans les lieux patrimoniaux : Villa Majorelle, Musée de l'École de Nancy, et les réceptions dans ces cadres uniques."
      }
    ]
  },
  {
    id: "rouen",
    nom: "Rouen",
    region: "Normandie",
    departement: "Seine-Maritime",
    codeDepartement: "76",
    population: 113368,
    siteExposition: "Parc des Expositions de Rouen",
    centreConvention: "Le 106",
    evenementsMajeurs: ["Foire de Rouen", "Armada (off pro)"],
    salonsPhares: ["Foire de Rouen", "Salon de l'Habitat", "Sepem Industries"],
    secteursActivite: ["Maritime", "Industrie", "Logistique", "Agroalimentaire"],
    description: "Port fluvial majeur et capitale normande historique, Rouen accueille des événements maritimes et industriels de premier plan.",
    metaDescription: "Prestations événementielles à Rouen. Parc des Expositions - Expert des salons maritimes et industriels en Seine-Maritime.",
    specificites: [
      "Expertise événements maritimes et fluviaux",
      "Intervention lors de l'Armada",
      "Couverture Seine-Maritime"
    ],
    faqs: [
      {
        question: "Accompagnez-vous l'Armada de Rouen ?",
        answer: "L'Armada génère de nombreux événements professionnels : villages sponsors, réceptions sur les quais, espaces corporate. Nous y intervenons pour les stands et espaces partenaires."
      },
      {
        question: "Couvrez-vous Dieppe et la côte normande ?",
        answer: "Oui, notre implantation rouennaise nous permet de couvrir toute la Seine-Maritime : Dieppe, Fécamp, Le Tréport, et l'ensemble des sites événementiels du département."
      }
    ]
  },
  {
    id: "saint-denis-reunion",
    nom: "Saint-Denis (La Réunion)",
    region: "La Réunion",
    departement: "La Réunion",
    codeDepartement: "974",
    population: 153810,
    siteExposition: "NORDEV",
    centreConvention: "Nordev",
    evenementsMajeurs: ["Foire de La Réunion", "Salon de l'Agriculture"],
    salonsPhares: ["Foire de La Réunion", "Salon de l'Agriculture", "Salon du Tourisme"],
    secteursActivite: ["Tourisme", "Agriculture tropicale", "Énergie", "Commerce"],
    description: "Chef-lieu de La Réunion et porte de l'océan Indien, Saint-Denis accueille des événements à rayonnement régional.",
    metaDescription: "Montage de stands à Saint-Denis (La Réunion). NORDEV - Expert des salons professionnels dans l'océan Indien.",
    specificites: [
      "Expertise événements océan Indien",
      "Intervention sur salons tropicaux",
      "Couverture La Réunion et Maurice"
    ],
    faqs: [
      {
        question: "Intervenez-vous à La Réunion ?",
        answer: "Oui, nous accompagnons les événements professionnels à La Réunion grâce à notre réseau de partenaires locaux. Nous gérons la logistique depuis la métropole."
      },
      {
        question: "Couvrez-vous Maurice et l'océan Indien ?",
        answer: "Notre expertise ultramarine nous permet d'accompagner les événements à Maurice, aux Seychelles, et dans l'ensemble de la zone océan Indien."
      }
    ]
  },
  {
    id: "argenteuil",
    nom: "Argenteuil",
    region: "Île-de-France",
    departement: "Val-d'Oise",
    codeDepartement: "95",
    population: 110388,
    siteExposition: "Paris Nord Villepinte (proximité)",
    centreConvention: "Centre culturel",
    evenementsMajeurs: ["Événements corporate", "Séminaires"],
    salonsPhares: ["Événements corporate", "Séminaires d'entreprise"],
    secteursActivite: ["Industrie", "Logistique", "Services", "Commerce"],
    description: "Première ville du Val-d'Oise et pôle économique du nord parisien, Argenteuil bénéficie de la proximité de Paris Nord Villepinte.",
    metaDescription: "Prestations événementielles à Argenteuil. Proximité Paris Nord Villepinte - Expert des événements corporate dans le Val-d'Oise.",
    specificites: [
      "Proximité Paris Nord Villepinte",
      "Intervention rapide nord Île-de-France",
      "Couverture Val-d'Oise"
    ],
    faqs: [
      {
        question: "Quel avantage Argenteuil pour les salons ?",
        answer: "Argenteuil est idéalement situé entre Paris et Villepinte. Nous intervenons sur les deux sites avec une logistique optimisée pour le nord de l'Île-de-France."
      },
      {
        question: "Couvrez-vous Cergy et le Val-d'Oise ?",
        answer: "Oui, notre couverture du Val-d'Oise inclut Cergy-Pontoise, Enghien-les-Bains, Saint-Ouen-l'Aumône, et l'ensemble du département."
      }
    ]
  },
  {
    id: "montreuil",
    nom: "Montreuil",
    region: "Île-de-France",
    departement: "Seine-Saint-Denis",
    codeDepartement: "93",
    population: 111370,
    siteExposition: "Paris Nord Villepinte (proximité)",
    centreConvention: "Studios",
    evenementsMajeurs: ["Événements créatifs", "Lancements produits"],
    salonsPhares: ["Événements créatifs", "Showrooms", "Pop-up stores"],
    secteursActivite: ["Créatif", "Digital", "Artisanat", "Mode"],
    description: "Capitale créative de l'Est parisien, Montreuil accueille de nombreux événements artistiques et des lancements de produits innovants.",
    metaDescription: "Montage de stands à Montreuil. Studios et espaces créatifs - Expert des événements artistiques et lancements en Seine-Saint-Denis.",
    specificites: [
      "Expertise événements créatifs et artistiques",
      "Intervention dans studios et lofts",
      "Couverture Est parisien"
    ],
    faqs: [
      {
        question: "Accompagnez-vous les événements créatifs ?",
        answer: "Montreuil étant un pôle créatif majeur, nous accompagnons les vernissages, lancements de produits, showrooms et événements dans les nombreux studios et lofts de la ville."
      },
      {
        question: "Intervenez-vous dans les espaces atypiques ?",
        answer: "Oui, Montreuil regorge d'espaces atypiques (anciennes usines, ateliers d'artistes). Nous adaptons nos prestations à ces lieux singuliers."
      }
    ]
  },
  {
    id: "saint-paul-reunion",
    nom: "Saint-Paul (La Réunion)",
    region: "La Réunion",
    departement: "La Réunion",
    codeDepartement: "974",
    population: 105240,
    siteExposition: "Parc des Expositions de Saint-Paul",
    centreConvention: "TEAT Plein Air",
    evenementsMajeurs: ["Sakifo (pro)", "Événements touristiques"],
    salonsPhares: ["Salon du Tourisme", "Événements culturels", "Marchés pro"],
    secteursActivite: ["Tourisme", "Culture", "Agriculture", "Artisanat"],
    description: "Deuxième ville de La Réunion et capitale de l'Ouest, Saint-Paul accueille des événements touristiques et culturels majeurs.",
    metaDescription: "Prestations événementielles à Saint-Paul (La Réunion). TEAT Plein Air - Expert des événements touristiques dans l'océan Indien.",
    specificites: [
      "Expertise événements touristiques tropicaux",
      "Intervention sur festivals (Sakifo)",
      "Couverture Ouest Réunion"
    ],
    faqs: [
      {
        question: "Accompagnez-vous le festival Sakifo ?",
        answer: "Sakifo génère des événements professionnels : espaces sponsors, villages VIP, stands médias. Nous accompagnons ces aspects corporate du festival."
      },
      {
        question: "Intervenez-vous sur les événements touristiques ?",
        answer: "Saint-Paul étant un pôle touristique majeur, nous accompagnons les salons du tourisme, les événements hôteliers et les activités promotionnelles de la destination."
      }
    ]
  },
  {
    id: "tourcoing",
    nom: "Tourcoing",
    region: "Hauts-de-France",
    departement: "Nord",
    codeDepartement: "59",
    population: 98654,
    siteExposition: "Lille Grand Palais (proximité)",
    centreConvention: "Le Fresnoy",
    evenementsMajeurs: ["Événements textile", "Art numérique"],
    salonsPhares: ["Événements textile", "Expositions numériques", "Séminaires"],
    secteursActivite: ["Textile", "Art numérique", "Commerce", "Industrie"],
    description: "Ancienne capitale mondiale du textile et pôle d'art numérique avec Le Fresnoy, Tourcoing allie patrimoine industriel et innovation.",
    metaDescription: "Montage de stands à Tourcoing. Le Fresnoy - Expert des événements textile et art numérique dans les Hauts-de-France.",
    specificites: [
      "Expertise événements textile et mode",
      "Intervention au Fresnoy (art numérique)",
      "Synergie avec Lille et Roubaix"
    ],
    faqs: [
      {
        question: "Accompagnez-vous les événements textile ?",
        answer: "Tourcoing conservant un héritage textile important, nous accompagnons les événements de ce secteur : salons professionnels, showrooms mode, et événements dans les anciennes manufactures."
      },
      {
        question: "Intervenez-vous au Fresnoy ?",
        answer: "Le Fresnoy est un lieu unique dédié aux arts numériques. Nous y intervenons pour les événements professionnels, vernissages et réceptions dans ce cadre contemporain."
      }
    ]
  },
  {
    id: "roubaix",
    nom: "Roubaix",
    region: "Hauts-de-France",
    departement: "Nord",
    codeDepartement: "59",
    population: 98653,
    siteExposition: "Lille Grand Palais (proximité)",
    centreConvention: "Condition Publique",
    evenementsMajeurs: ["Événements mode", "Paris-Roubaix (off pro)"],
    salonsPhares: ["Événements mode", "Salons déstockage", "Séminaires"],
    secteursActivite: ["Mode", "Textile", "Commerce", "E-commerce"],
    description: "Capitale de la mode et du déstockage, Roubaix est un pôle commercial dynamique avec des espaces événementiels dans d'anciennes usines textiles.",
    metaDescription: "Prestations événementielles à Roubaix. Condition Publique - Expert des événements mode et textile dans le Nord.",
    specificites: [
      "Expertise événements mode et retail",
      "Intervention dans friches industrielles",
      "Synergie avec Lille et Tourcoing"
    ],
    faqs: [
      {
        question: "Accompagnez-vous les événements mode ?",
        answer: "Roubaix étant un pôle mode majeur (La Redoute, Kiabi...), nous accompagnons les événements du secteur : showrooms, ventes privées, lancements collections."
      },
      {
        question: "Intervenez-vous à la Condition Publique ?",
        answer: "La Condition Publique est un lieu événementiel unique dans une ancienne usine textile. Nous y intervenons régulièrement pour les événements corporate et les expositions."
      }
    ]
  },
  {
    id: "avignon",
    nom: "Avignon",
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Vaucluse",
    codeDepartement: "84",
    population: 93671,
    siteExposition: "Parc des Expositions d'Avignon",
    centreConvention: "Palais des Papes (événements)",
    evenementsMajeurs: ["Festival d'Avignon (off pro)", "Millésime Bio"],
    salonsPhares: ["Millésime Bio", "Festival Off (pro)", "Salon du Vin"],
    secteursActivite: ["Culture", "Vin bio", "Tourisme", "Agriculture"],
    description: "Cité des Papes et capitale mondiale du théâtre, Avignon accueille des événements culturels et viticoles dans un cadre patrimonial exceptionnel.",
    metaDescription: "Montage de stands à Avignon. Palais des Papes - Expert des événements culturels et viticoles en Vaucluse.",
    specificites: [
      "Expertise événements dans sites patrimoniaux",
      "Intervention Festival d'Avignon (corporate)",
      "Couverture Vaucluse et Provence"
    ],
    faqs: [
      {
        question: "Organisez-vous des événements au Palais des Papes ?",
        answer: "Le Palais des Papes accueille des événements corporate exceptionnels. Nous y intervenons avec une expertise spécifique de ce site UNESCO et de ses contraintes patrimoniales."
      },
      {
        question: "Accompagnez-vous le Festival d'Avignon ?",
        answer: "Le Festival génère de nombreux événements professionnels : réceptions sponsors, cocktails presse, soirées partenaires. Nous accompagnons ces événements corporate."
      }
    ]
  },
  {
    id: "dunkerque",
    nom: "Dunkerque",
    region: "Hauts-de-France",
    departement: "Nord",
    codeDepartement: "59",
    population: 87353,
    siteExposition: "Kursaal",
    centreConvention: "Palais des Congrès",
    evenementsMajeurs: ["Carnaval (off pro)", "Salon du Littoral"],
    salonsPhares: ["Salon du Littoral", "Événements portuaires", "Sepem Industries"],
    secteursActivite: ["Portuaire", "Énergie", "Industrie", "Logistique"],
    description: "Troisième port de France et hub énergétique majeur, Dunkerque accueille des événements liés au monde maritime et industriel.",
    metaDescription: "Prestations événementielles à Dunkerque. Kursaal, Palais des Congrès - Expert des salons portuaires et énergétiques dans le Nord.",
    specificites: [
      "Expertise événements portuaires et industriels",
      "Intervention sur sites énergétiques",
      "Couverture Flandres et Côte d'Opale"
    ],
    faqs: [
      {
        question: "Intervenez-vous sur les événements portuaires ?",
        answer: "Dunkerque étant le troisième port de France, nous accompagnons les événements liés au monde maritime : congrès portuaires, salons logistiques, événements shipping."
      },
      {
        question: "Couvrez-vous Calais et la Côte d'Opale ?",
        answer: "Oui, notre présence dunkerquoise nous permet de couvrir Calais, Boulogne-sur-Mer, Le Touquet, et l'ensemble de la Côte d'Opale et des Flandres."
      }
    ]
  },
  {
    id: "valence",
    nom: "Valence",
    region: "Auvergne-Rhône-Alpes",
    departement: "Drôme",
    codeDepartement: "26",
    population: 66257,
    siteExposition: "Parc des Expositions de Valence",
    centreConvention: "Le Palais des Congrès",
    evenementsMajeurs: ["Salon de l'Agriculture", "Foire de Valence"],
    salonsPhares: ["Salon de l'Agriculture", "Foire de Valence", "Sepem Industries"],
    secteursActivite: ["Agroalimentaire", "Logistique", "Industrie", "Tourisme"],
    description: "Porte du Midi et carrefour rhodanien, Valence est un hub logistique accueillant des événements agricoles et industriels.",
    metaDescription: "Montage de stands à Valence. Parc des Expositions - Expert des salons agricoles et industriels dans la Drôme.",
    specificites: [
      "Position stratégique Lyon-Marseille",
      "Expertise salons agricoles",
      "Couverture Drôme-Ardèche"
    ],
    faqs: [
      {
        question: "Quel avantage la position de Valence ?",
        answer: "Valence est idéalement située sur l'axe Lyon-Marseille. Nous intervenons dans les deux métropoles et sur l'ensemble du couloir rhodanien avec une logistique optimisée."
      },
      {
        question: "Couvrez-vous la Drôme et l'Ardèche ?",
        answer: "Oui, notre implantation valentinoise nous permet de couvrir la Drôme, l'Ardèche, et les événements dans les sites touristiques de la région (châteaux, domaines viticoles)."
      }
    ]
  },
  {
    id: "pau",
    nom: "Pau",
    region: "Nouvelle-Aquitaine",
    departement: "Pyrénées-Atlantiques",
    codeDepartement: "64",
    population: 77028,
    siteExposition: "Parc des Expositions de Pau",
    centreConvention: "Palais Beaumont",
    evenementsMajeurs: ["Grand Prix Automobile", "Congrès internationaux"],
    salonsPhares: ["Foire de Pau", "Salon de l'Agriculture", "Sepem Industries"],
    secteursActivite: ["Énergie", "Aéronautique", "Tourisme", "Agroalimentaire"],
    description: "Capitale du Béarn et pôle énergétique majeur (Total), Pau accueille des événements dans le cadre prestigieux du Palais Beaumont.",
    metaDescription: "Prestations événementielles à Pau. Palais Beaumont - Expert des congrès et salons professionnels en Béarn.",
    specificites: [
      "Expertise événements énergie (Total)",
      "Intervention Palais Beaumont (4 étoiles)",
      "Couverture Béarn et Pays Basque"
    ],
    faqs: [
      {
        question: "Accompagnez-vous les événements Total/TotalEnergies ?",
        answer: "Pau étant le siège historique de Total, nous accompagnons régulièrement les événements du groupe : conventions, séminaires, forums sectoriels de l'énergie."
      },
      {
        question: "Couvrez-vous Biarritz et le Pays Basque ?",
        answer: "Oui, notre présence paloise nous permet de couvrir tout le Pays Basque : Biarritz, Bayonne, Saint-Jean-de-Luz, et l'ensemble des sites événementiels de la côte basque."
      }
    ]
  },
  {
    id: "la-rochelle",
    nom: "La Rochelle",
    region: "Nouvelle-Aquitaine",
    departement: "Charente-Maritime",
    codeDepartement: "17",
    population: 79346,
    siteExposition: "Parc des Expositions de La Rochelle",
    centreConvention: "Espace Encan",
    evenementsMajeurs: ["Grand Pavois", "Francofolies (off pro)"],
    salonsPhares: ["Grand Pavois", "Salon du Nautisme", "Foire de La Rochelle"],
    secteursActivite: ["Nautisme", "Tourisme", "Agroalimentaire", "Tech"],
    description: "Capitale du nautisme français, La Rochelle accueille le Grand Pavois, plus grand salon nautique à flot d'Europe.",
    metaDescription: "Montage de stands à La Rochelle. Espace Encan - Expert Grand Pavois et événements nautiques en Charente-Maritime.",
    specificites: [
      "Expertise Grand Pavois et nautisme",
      "Intervention sur événements portuaires",
      "Couverture Charente-Maritime et îles"
    ],
    faqs: [
      {
        question: "Accompagnez-vous le Grand Pavois ?",
        answer: "Le Grand Pavois est le plus grand salon nautique à flot d'Europe. Nous y accompagnons les exposants sur les stands à terre et les espaces corporate du port des Minimes."
      },
      {
        question: "Intervenez-vous sur l'île de Ré ?",
        answer: "Oui, notre présence rochelaise nous permet d'intervenir sur l'île de Ré, l'île d'Oléron, et les sites événementiels de la côte atlantique pour les réceptions et événements premium."
      }
    ]
  },
  {
    id: "cannes",
    nom: "Cannes",
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Alpes-Maritimes",
    codeDepartement: "06",
    population: 74285,
    siteExposition: "Palais des Festivals et des Congrès",
    centreConvention: "Palais des Festivals",
    evenementsMajeurs: ["Festival de Cannes", "MIPIM", "MAPIC", "MIDEM", "Cannes Lions"],
    salonsPhares: ["MIPIM", "MAPIC", "MIDEM", "Cannes Lions", "MIPTV", "TFWA"],
    secteursActivite: ["Immobilier", "Luxe", "Média", "Publicité", "Travel Retail"],
    description: "Capitale mondiale des festivals et congrès, Cannes accueille les plus grands événements B2B internationaux au Palais des Festivals.",
    metaDescription: "Prestations événementielles à Cannes. Palais des Festivals - Expert MIPIM, MAPIC, Cannes Lions et salons internationaux.",
    specificites: [
      "Expertise salons internationaux premium",
      "Intervention sur tous les événements du Palais",
      "Coordination avec hôtels de luxe"
    ],
    faqs: [
      {
        question: "Accompagnez-vous le MIPIM et le MAPIC ?",
        answer: "Le MIPIM et le MAPIC sont des événements phares où nous intervenons chaque année. Nous accompagnons les exposants sur leurs stands au Palais et dans les espaces off-site."
      },
      {
        question: "Intervenez-vous lors du Festival de Cannes ?",
        answer: "Le Festival génère de nombreux événements professionnels : plages sponsors, soirées marques, espaces partenaires. Nous accompagnons ces événements corporate pendant la quinzaine."
      }
    ]
  },
  {
    id: "ajaccio",
    nom: "Ajaccio",
    region: "Corse",
    departement: "Corse-du-Sud",
    codeDepartement: "2A",
    population: 73822,
    siteExposition: "Parc des Expositions d'Ajaccio",
    centreConvention: "Palais des Congrès",
    evenementsMajeurs: ["Foire d'Ajaccio", "Événements tourisme"],
    salonsPhares: ["Foire d'Ajaccio", "Salon du Tourisme", "Salon de l'Artisanat"],
    secteursActivite: ["Tourisme", "Artisanat", "Agroalimentaire", "Culture"],
    description: "Capitale de la Corse et ville natale de Napoléon, Ajaccio accueille des événements touristiques et culturels dans un cadre méditerranéen.",
    metaDescription: "Montage de stands à Ajaccio. Palais des Congrès - Expert des événements professionnels en Corse-du-Sud.",
    specificites: [
      "Expertise événements insulaires",
      "Logistique maritime maîtrisée",
      "Couverture Corse-du-Sud"
    ],
    faqs: [
      {
        question: "Comment gérez-vous la logistique vers la Corse ?",
        answer: "Nous maîtrisons parfaitement la logistique maritime Corse-Continent. Nous organisons le transport des équipements par ferry et coordonnons les délais d'acheminement."
      },
      {
        question: "Couvrez-vous Bastia et la Haute-Corse ?",
        answer: "Oui, notre couverture insulaire inclut Ajaccio, Bastia, Porto-Vecchio, Calvi, et l'ensemble des sites événementiels de l'île de Beauté."
      }
    ]
  },
  {
    id: "antibes",
    nom: "Antibes",
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Alpes-Maritimes",
    codeDepartement: "06",
    population: 73798,
    siteExposition: "Palais des Congrès Anthéa",
    centreConvention: "Anthéa",
    evenementsMajeurs: ["Congrès tech", "Événements yachting"],
    salonsPhares: ["Événements tech", "Congrès Sophia Antipolis", "Yachting"],
    secteursActivite: ["Tech", "Yachting", "Tourisme", "Recherche"],
    description: "Porte de Sophia Antipolis et capitale du yachting, Antibes allie innovation technologique et prestige maritime sur la Côte d'Azur.",
    metaDescription: "Prestations événementielles à Antibes. Sophia Antipolis - Expert des événements tech et yachting sur la Côte d'Azur.",
    specificites: [
      "Expertise événements tech (Sophia Antipolis)",
      "Intervention sur événements yachting",
      "Couverture Côte d'Azur premium"
    ],
    faqs: [
      {
        question: "Accompagnez-vous les événements Sophia Antipolis ?",
        answer: "Sophia Antipolis étant la première technopole d'Europe, nous accompagnons les événements tech : conventions, lancements, séminaires des entreprises de la technopole."
      },
      {
        question: "Intervenez-vous sur les événements yachting ?",
        answer: "Port Vauban étant le plus grand port de plaisance de Méditerranée, nous accompagnons les événements yachting : Monaco Yacht Show (off), salons nautiques, réceptions sur yachts."
      }
    ]
  }
];

// Fonction pour obtenir une ville par son ID
export const getVilleById = (id: string): GrandeVille | undefined => {
  return grandesVilles.find(ville => ville.id === id);
};

// Fonction pour obtenir les villes par région
export const getVillesByRegion = (region: string): GrandeVille[] => {
  return grandesVilles.filter(ville => ville.region === region);
};

// Fonction pour obtenir les villes par département
export const getVillesByDepartement = (codeDepartement: string): GrandeVille[] => {
  return grandesVilles.filter(ville => ville.codeDepartement === codeDepartement);
};

// Liste des régions uniques
export const getRegionsUniques = (): string[] => {
  return [...new Set(grandesVilles.map(ville => ville.region))];
};
