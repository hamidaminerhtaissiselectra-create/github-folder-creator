import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ArrowLeft, Phone, CheckCircle, MapPin, Clock, Shield, Users, Award, Building2, ChevronRight } from "lucide-react";
import { ParallaxSection, FadeInSection, StaggerContainer, staggerItem } from "@/components/animations/ParallaxSection";
import { SEOHead, BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from "@/components/seo/StructuredData";
import { ServiceSchema, SpeakableSchema, HowToSchema } from "@/components/seo/WebsiteSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import heroImage from "@/assets/hero-event.jpg";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceScenography from "@/assets/service-scenography.jpg";
import serviceLocation from "@/assets/service-location.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceLogistique from "@/assets/service-logistique.jpg";
import serviceInternational from "@/assets/service-international.jpg";

interface ServiceData {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  heroImage: string;
  images: { src: string; alt: string }[];
  intro: string;
  whoFor: { title: string; items: string[] };
  problemsSolved: string[];
  features: { title: string; description: string }[];
  methodology: { step: string; title: string; description: string }[];
  expertise: { title: string; items: string[] };
  zonesText: string;
  faq: { question: string; answer: string }[];
  stats: { value: string; label: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "salons-professionnels": {
    title: "Prestations Salons Professionnels",
    subtitle: "Expert en montage et coordination de stands depuis 15 ans",
    metaTitle: "Montage Stand Salon Professionnel | BA Attitude - Paris, Lyon, France",
    metaDescription: "Spécialiste du montage et démontage de stands pour salons professionnels en France. Équipes expérimentées, intervention 24h/24. Devis gratuit sous 48h.",
    description: "BA Attitude accompagne les entreprises et agences sur l'ensemble de leurs participations à des salons professionnels, foires et expositions B2B en France et à l'international.",
    heroImage: heroImage,
    images: [
      { src: heroImage, alt: "Montage stand salon professionnel Paris" },
      { src: serviceDecoration, alt: "Installation mobilier exposition" },
      { src: serviceScenography, alt: "Équipe technique salon B2B" },
    ],
    intro: `Les salons professionnels représentent des moments stratégiques pour les entreprises : visibilité, génération de leads, renforcement de l'image de marque. Pourtant, la réussite d'une participation repose en grande partie sur l'exécution technique irréprochable du stand et de sa logistique.

BA Attitude intervient depuis plus de 15 ans comme partenaire technique des exposants et des agences événementielles sur les principaux salons professionnels en France. Notre mission : vous garantir un stand parfaitement installé, dans les délais, sans stress.

Que vous participiez à Maison & Objet, au SIAL, à Première Vision ou à tout autre salon professionnel, notre équipe prend en charge l'intégralité de la chaîne technique : réception du matériel, montage du stand, coordination avec l'organisateur, maintenance pendant l'événement, démontage et évacuation.

Notre expertise couvre tous les types de stands : modulaires (Octanorm, Maxima, Aluvision), sur mesure en bois ou métal, pavillons clé en main. Nous intervenons aussi bien sur des stands de 9m² que sur des espaces de plusieurs centaines de mètres carrés.`,
    whoFor: {
      title: "Ce service est fait pour vous si...",
      items: [
        "Vous êtes exposant et avez besoin d'une équipe technique fiable pour monter votre stand",
        "Vous êtes une agence événementielle et recherchez un sous-traitant de confiance en marque blanche",
        "Vous participez à plusieurs salons par an et souhaitez un partenaire récurrent",
        "Vous avez des contraintes de timing serrées et avez besoin d'une équipe réactive",
        "Vous exposez sur un salon que vous ne connaissez pas et avez besoin d'être accompagné",
      ],
    },
    problemsSolved: [
      "Retards de montage qui mettent en péril l'ouverture du salon",
      "Prestataires peu fiables ou non disponibles au dernier moment",
      "Méconnaissance des règles et contraintes des organisateurs",
      "Coordination difficile entre plusieurs intervenants sur le stand",
      "Surcoûts liés aux imprévus et aux heures supplémentaires non anticipées",
    ],
    features: [
      { title: "Montage de stands", description: "Installation complète de votre stand : structure, cloisons, mobilier, signalétique, éclairage. Tous types de stands (modulaires, sur mesure, parapluie)." },
      { title: "Coordination organisateur", description: "Nous gérons les relations avec l'organisateur : badges, demandes techniques, raccordements électriques, respect du cahier des charges." },
      { title: "Logistique matériel", description: "Réception, stockage et acheminement de votre matériel sur site. Suivi des livraisons et gestion des imprévus." },
      { title: "Pose moquette et sols", description: "Installation de moquettes, planchers, sols techniques. Finitions soignées et découpes précises." },
      { title: "Maintenance événement", description: "Présence de techniciens pendant le salon pour ajustements, dépannages et maintenance du stand." },
      { title: "Démontage et repli", description: "Démontage soigné après l'événement, conditionnement du matériel, évacuation des déchets." },
    ],
    methodology: [
      { step: "01", title: "Brief & Étude", description: "Analyse de vos plans de stand, visite du site si nécessaire, établissement d'un devis détaillé et transparent. Identification des contraintes organisateur." },
      { step: "02", title: "Planification", description: "Rétroplanning précis intégrant les délais organisateur, coordination avec vos autres prestataires (standiste, audiovisuel, traiteur)." },
      { step: "03", title: "Mobilisation", description: "Constitution de l'équipe adaptée (monteurs, techniciens, chef de projet), préparation du matériel et outillage, briefing d'équipe." },
      { step: "04", title: "Montage", description: "Installation du stand selon le planning convenu, check-list qualité, recette avec le client avant ouverture du salon." },
      { step: "05", title: "Exploitation", description: "Présence d'un référent joignable pendant le salon, interventions d'ajustement si nécessaire, anticipation du démontage." },
      { step: "06", title: "Démontage", description: "Repli soigné selon planning organisateur, conditionnement du matériel réutilisable, évacuation et nettoyage du site." },
    ],
    expertise: {
      title: "Pourquoi choisir BA Attitude ?",
      items: [
        "15 ans d'expérience sur les salons professionnels français et internationaux",
        "Équipes formées aux normes de sécurité et aux exigences des organisateurs",
        "Réactivité 24h/24 et 7j/7 pendant les périodes de montage/démontage",
        "Interlocuteur unique du brief au démontage final",
        "Références prestigieuses : G20, grands salons Porte de Versailles, Villepinte, Lyon",
        "Tarification transparente et forfaitaire, sans surprise",
        "Assurance responsabilité civile professionnelle complète",
      ],
    },
    zonesText: "Nous intervenons sur l'ensemble du territoire français pour vos salons professionnels. Nos équipes se déplacent à Paris Expo Porte de Versailles, Paris Nord Villepinte, Eurexpo Lyon, Parc Chanot Marseille, Bordeaux Lac, Lille Grand Palais, et tous les autres sites d'exposition majeurs. Pour les salons internationaux, nous accompagnons également nos clients en Europe et au-delà.",
    faq: [
      { question: "Dans quels délais pouvez-vous intervenir sur un salon professionnel ?", answer: "Nous pouvons mobiliser nos équipes sous 24 à 48 heures en Île-de-France, et sous 72 heures sur le reste du territoire français. Pour les demandes d'urgence pendant les périodes de montage, nous disposons d'équipes de remplacement mobilisables rapidement. Nous recommandons néanmoins de nous contacter au minimum 2 semaines avant le salon pour une organisation optimale." },
      { question: "Intervenez-vous sur tous les types de salons professionnels ?", answer: "Oui, BA Attitude intervient sur tous les secteurs d'activité : industrie, agroalimentaire (SIAL, Sirha), mode et textile (Première Vision), high-tech (CES, VivaTech), bâtiment (Batimat), automobile, luxe, santé, etc. Notre expertise technique s'adapte à toutes les thématiques et tous les formats de stands." },
      { question: "Proposez-vous des forfaits tout compris pour les salons ?", answer: "Oui, nous proposons des forfaits incluant le montage, la maintenance événement, le démontage et l'évacuation. Ces forfaits sont établis sur devis après analyse de vos plans et du cahier des charges du salon. Ils garantissent un budget maîtrisé sans surprise." },
      { question: "Comment gérez-vous la coordination avec l'organisateur du salon ?", answer: "Nous prenons en charge toutes les démarches auprès de l'organisateur : commande des badges exposants, déclaration des travaux, demandes de raccordement électrique, respect des horaires de montage/démontage. Notre connaissance des principaux sites d'exposition nous permet d'anticiper les contraintes spécifiques de chaque lieu." },
      { question: "Pouvez-vous stocker notre stand entre deux salons ?", answer: "Oui, nous disposons d'un entrepôt sécurisé en région parisienne pour stocker votre matériel de stand entre vos participations. Ce service est particulièrement apprécié des entreprises participant à plusieurs salons par an. Nous assurons également l'inventaire et la vérification de l'état du matériel." },
      { question: "Travaillez-vous en marque blanche pour les agences ?", answer: "Absolument. Nous accompagnons de nombreuses agences événementielles et standistes en tant que sous-traitant technique. Nous intervenons en toute discrétion, avec vos propres codes couleur et équipements de protection. Nos devis peuvent être présentés sous votre enseigne." },
    ],
    stats: [
      { value: "500+", label: "Salons accompagnés par an" },
      { value: "24h", label: "Délai d'intervention IDF" },
      { value: "15 ans", label: "D'expérience terrain" },
      { value: "100%", label: "Satisfaction client" },
    ],
  },
  "support-technique": {
    title: "Support Technique Événementiel",
    subtitle: "Assistance technique sur site pour tous vos événements B2B",
    metaTitle: "Support Technique Événementiel | Techniciens Salon | BA Attitude",
    metaDescription: "Techniciens qualifiés pour support technique événementiel : maintenance, dépannage, assistance terrain. Intervention France entière. Devis gratuit.",
    description: "Nos équipes techniques interviennent pendant vos événements pour assurer la maintenance, les ajustements et le dépannage de vos installations.",
    heroImage: serviceScenography,
    images: [
      { src: serviceScenography, alt: "Support technique événement professionnel" },
      { src: serviceLocation, alt: "Technicien maintenance stand" },
      { src: serviceCorporate, alt: "Équipe technique sur site" },
    ],
    intro: `Pendant un salon ou un événement professionnel, les imprévus techniques sont fréquents : une lumière qui lâche, un écran qui ne fonctionne plus, un élément de stand endommagé par les visiteurs. Ces incidents, même mineurs, peuvent nuire à l'image de votre entreprise et perturber vos équipes commerciales.

Le support technique événementiel de BA Attitude vous garantit une réactivité maximale face à ces situations. Nos techniciens, présents sur site ou mobilisables en moins d'une heure, interviennent pour résoudre tous les problèmes techniques rencontrés pendant votre événement.

Notre service couvre aussi bien la maintenance préventive (vérifications quotidiennes, nettoyage, réglages) que la maintenance curative (dépannage, réparations, remplacement de matériel). Nous intervenons sur les stands d'exposition, mais aussi sur les congrès, conventions d'entreprise, et tous les événements B2B.

Nos techniciens sont formés aux normes de sécurité des ERP (établissements recevant du public) et disposent des habilitations nécessaires (électrique, travail en hauteur). Ils sont équipés d'un stock de consommables et pièces détachées courantes pour des interventions rapides.`,
    whoFor: {
      title: "Ce service est fait pour vous si...",
      items: [
        "Vous avez besoin d'une présence technique continue pendant votre salon",
        "Vous souhaitez anticiper et prévenir les incidents techniques",
        "Vous organisez un événement sur plusieurs jours et avez besoin d'un support réactif",
        "Vous ne disposez pas de ressources techniques internes pour gérer les imprévus",
        "Vous voulez vous concentrer sur le commercial et déléguer la technique",
      ],
    },
    problemsSolved: [
      "Pannes électriques ou d'éclairage pendant l'événement",
      "Équipements audiovisuels défaillants (écrans, vidéoprojecteurs)",
      "Éléments de stand endommagés par la fréquentation",
      "Réajustements nécessaires après la première journée",
      "Absence de personnel technique en cas d'urgence",
    ],
    features: [
      { title: "Présence terrain", description: "Techniciens dédiés présents sur site pendant toute la durée de votre événement, joignables en permanence." },
      { title: "Hotline technique", description: "Numéro dédié avec prise en charge immédiate de vos demandes. Intervention sous 30 minutes en Île-de-France." },
      { title: "Maintenance préventive", description: "Vérification quotidienne de vos installations : éclairage, électricité, mobilier, signalétique. Anticipation des problèmes." },
      { title: "Dépannage rapide", description: "Stock de consommables et pièces détachées pour des réparations immédiates. Remplacement de matériel si nécessaire." },
      { title: "Reporting", description: "Compte-rendu quotidien des interventions réalisées. Recommandations pour vos prochains événements." },
      { title: "Adaptation", description: "Modifications de dernière minute, ajout d'éléments, réagencement selon vos retours terrain." },
    ],
    methodology: [
      { step: "01", title: "Audit préalable", description: "Visite du stand avant ouverture, identification des points sensibles, mise en place d'un protocole de surveillance." },
      { step: "02", title: "Briefing équipe", description: "Présentation des installations à l'équipe technique, définition des priorités d'intervention, remise des coordonnées." },
      { step: "03", title: "Permanence", description: "Présence continue ou passages réguliers selon la formule choisie. Veille proactive sur l'état des installations." },
      { step: "04", title: "Intervention", description: "Prise en charge immédiate des incidents signalés. Diagnostic, réparation ou remplacement selon les cas." },
      { step: "05", title: "Clôture", description: "Vérification finale avant démontage, remise d'un rapport d'intervention, recommandations." },
    ],
    expertise: {
      title: "Notre valeur ajoutée",
      items: [
        "Techniciens habilités électriques (BR, B2V) et travail en hauteur",
        "Connaissance approfondie des sites d'exposition français",
        "Stock de consommables et matériel de remplacement",
        "Intervention sous 30 minutes en Île-de-France",
        "Reporting détaillé de chaque intervention",
        "Formule adaptable : présence continue ou intervention à la demande",
      ],
    },
    zonesText: "Notre service de support technique événementiel couvre l'ensemble de la France. Nous intervenons sur Paris, Lyon, Marseille, Bordeaux, Lille, Nantes, Strasbourg, Toulouse et toutes les grandes métropoles. Pour les événements d'envergure, nous déployons des équipes dédiées avec astreinte 24h/24.",
    faq: [
      { question: "Quelle est la différence entre maintenance préventive et curative ?", answer: "La maintenance préventive consiste à vérifier régulièrement vos installations pour anticiper les problèmes avant qu'ils ne surviennent : contrôle de l'éclairage, vérification des branchements, nettoyage des équipements. La maintenance curative intervient après un incident pour réparer ou remplacer les éléments défaillants. Nous recommandons de combiner les deux approches pour une tranquillité optimale." },
      { question: "Vos techniciens sont-ils certifiés ?", answer: "Oui, tous nos techniciens disposent des certifications et habilitations requises : habilitation électrique (BR, B2V), travail en hauteur, port d'EPI. Ils sont régulièrement formés aux normes de sécurité des ERP et aux spécificités des sites d'exposition." },
      { question: "Intervenez-vous sur les équipements audiovisuels ?", answer: "Oui, nos techniciens sont formés à la maintenance des équipements audiovisuels courants : écrans, vidéoprojecteurs, systèmes de sonorisation. Pour les installations complexes (régies vidéo, mapping), nous travaillons en coordination avec des partenaires spécialisés." },
      { question: "Proposez-vous un service d'astreinte le week-end ?", answer: "Oui, nous proposons un service d'astreinte 24h/24 et 7j/7 pour les événements qui se déroulent le week-end ou en dehors des horaires ouvrés. Ce service est facturé en supplément et fait l'objet d'un devis spécifique." },
      { question: "Comment fonctionne la hotline technique ?", answer: "La hotline technique est un numéro dédié que vous pouvez appeler à tout moment pendant votre événement. Un technicien prend en charge votre demande, évalue la situation et déclenche l'intervention appropriée. Le délai d'intervention moyen est de 30 minutes en Île-de-France." },
    ],
    stats: [
      { value: "30min", label: "Délai d'intervention IDF" },
      { value: "24/7", label: "Astreinte disponible" },
      { value: "98%", label: "Incidents résolus sur place" },
      { value: "100%", label: "Techniciens certifiés" },
    ],
  },
  "montage-demontage": {
    title: "Montage & Démontage de Stands",
    subtitle: "Installation professionnelle de vos espaces d'exposition",
    metaTitle: "Montage Démontage Stand Exposition | Équipes Pro | BA Attitude",
    metaDescription: "Montage et démontage professionnel de stands d'exposition pour salons et foires. Équipes qualifiées, respect des délais. Intervention France entière.",
    description: "Nos équipes spécialisées assurent le montage et démontage de tous types de stands : modulaires, sur mesure, parapluie. Intervention rapide et soignée.",
    heroImage: serviceLocation,
    images: [
      { src: serviceLocation, alt: "Montage stand modulaire exposition" },
      { src: heroImage, alt: "Équipe montage stand professionnel" },
      { src: serviceDecoration, alt: "Démontage stand salon" },
    ],
    intro: `Le montage et le démontage d'un stand d'exposition sont des phases critiques qui conditionnent la réussite de votre participation à un salon. Un montage bâclé se voit immédiatement et nuit à votre image. Un démontage précipité peut endommager du matériel coûteux et générer des pénalités de la part de l'organisateur.

BA Attitude est spécialisé dans le montage et démontage de stands d'exposition depuis plus de 15 ans. Nos équipes de monteurs professionnels maîtrisent tous les systèmes de stands du marché : Octanorm, Maxima, Aluvision, stands sur mesure en bois ou métal, stands parapluie et roll-up.

Nous intervenons dans le strict respect des plannings imposés par les organisateurs de salons. Nos monteurs connaissent les règles spécifiques de chaque site d'exposition : Paris Expo Porte de Versailles, Villepinte, Eurexpo Lyon, Parc Chanot, etc. Ils savent anticiper les contraintes d'accès, de manutention et de sécurité.

Notre approche se distingue par la qualité des finitions. Chaque détail compte : alignement des cloisons, propreté de la moquette, réglage de l'éclairage, positionnement du mobilier. Votre stand doit être impeccable dès l'ouverture du salon.`,
    whoFor: {
      title: "Ce service est fait pour vous si...",
      items: [
        "Vous avez un stand à monter pour un salon professionnel",
        "Vous recherchez des monteurs expérimentés et autonomes",
        "Vous avez des contraintes de délais serrées",
        "Vous souhaitez un montage soigné avec des finitions impeccables",
        "Vous avez besoin de stocker votre stand entre deux salons",
      ],
    },
    problemsSolved: [
      "Montage approximatif qui nuit à l'image de votre entreprise",
      "Retards qui vous empêchent d'être prêt à l'ouverture",
      "Matériel endommagé par un démontage précipité",
      "Pénalités de l'organisateur pour non-respect des horaires",
      "Équipes non formées aux systèmes de stands spécifiques",
    ],
    features: [
      { title: "Stands modulaires", description: "Montage de tous les systèmes modulaires : Octanorm, Maxima, Aluvision, Syma. Assemblage précis et rapide." },
      { title: "Stands sur mesure", description: "Installation de stands sur mesure en bois, métal ou matériaux composites. Respect des plans de l'architecte." },
      { title: "Structures et volumes", description: "Montage de structures aluminium, portiques, arches, podiums. Ancrages et stabilisation conformes aux normes." },
      { title: "Habillages et finitions", description: "Pose de cloisons, panneaux graphiques, toiles tendues, films adhésifs. Finitions soignées." },
      { title: "Sols et moquettes", description: "Installation de moquettes, planchers techniques, sols vinyle. Découpes précises et raccords invisibles." },
      { title: "Démontage soigné", description: "Repli méthodique du stand, conditionnement du matériel pour réutilisation, évacuation des déchets." },
    ],
    methodology: [
      { step: "01", title: "Réception plans", description: "Analyse des plans de montage fournis par le standiste ou l'architecte. Identification des points techniques." },
      { step: "02", title: "Logistique", description: "Coordination de la livraison du matériel sur site selon le planning organisateur. Déchargement et mise en zone de montage." },
      { step: "03", title: "Montage structure", description: "Assemblage de la structure principale selon les plans. Vérification des niveaux et de la stabilité." },
      { step: "04", title: "Aménagement", description: "Installation du mobilier, de l'éclairage, de la signalétique. Branchements électriques." },
      { step: "05", title: "Finitions", description: "Pose de la moquette, nettoyage final, vérification de chaque détail. Recette avec le client." },
      { step: "06", title: "Démontage", description: "Repli selon planning organisateur, conditionnement pour stockage ou transport, nettoyage de l'emplacement." },
    ],
    expertise: {
      title: "L'expertise BA Attitude",
      items: [
        "Maîtrise de tous les systèmes de stands du marché",
        "Monteurs formés et expérimentés (moyenne 8 ans d'expérience)",
        "Outillage professionnel complet (visserie, découpe, levage)",
        "Connaissance des règles de chaque site d'exposition",
        "Flexibilité horaire : nuit, week-end, jours fériés",
        "Stockage inter-salons dans notre entrepôt sécurisé",
      ],
    },
    zonesText: "Nos équipes de monteurs interviennent sur tous les sites d'exposition français : Paris Expo Porte de Versailles, Paris Nord Villepinte, Le Bourget, Eurexpo Lyon, Parc Chanot Marseille, Palais des Festivals Cannes, Bordeaux Lac, Lille Grand Palais, Strasbourg, Nantes, Toulouse, et bien d'autres.",
    faq: [
      { question: "Quels systèmes de stands montez-vous ?", answer: "Nous montons tous les systèmes de stands du marché : modulaires (Octanorm, Maxima, Aluvision, Syma, Beursstand), sur mesure en bois ou métal, stands parapluie et roll-up, structures aluminium (Prolyte, Layher). Nos monteurs sont formés à chaque système et disposent de l'outillage adapté." },
      { question: "Intervenez-vous sur les montages de nuit ?", answer: "Oui, nous intervenons régulièrement en montage de nuit, notamment sur les grands salons où les créneaux de montage sont limités. Nos tarifs de nuit font l'objet d'un devis spécifique. Nous pouvons également intervenir les week-ends et jours fériés." },
      { question: "Gérez-vous les formalités auprès de l'organisateur ?", answer: "Oui, nous pouvons prendre en charge les démarches administratives auprès de l'organisateur : commande de badges, déclaration de travaux, demandes de raccordement électrique. Cette prestation est incluse dans nos forfaits ou peut être commandée séparément." },
      { question: "Proposez-vous le stockage des stands ?", answer: "Oui, nous disposons d'un entrepôt sécurisé de 2000m² en région parisienne. Nous pouvons stocker votre matériel de stand entre deux salons, réaliser un inventaire et vérifier l'état du matériel. Ce service est particulièrement apprécié des entreprises multi-salons." },
      { question: "Comment sont calculés vos tarifs de montage ?", answer: "Nos tarifs sont calculés sur la base du nombre de monteurs nécessaires, de la durée d'intervention et de la complexité du stand. Nous proposons des forfaits tout compris ou des tarifs à la journée. Chaque devis est établi après analyse de vos plans et du cahier des charges." },
    ],
    stats: [
      { value: "2000+", label: "Stands montés par an" },
      { value: "8 ans", label: "Expérience moyenne équipes" },
      { value: "2000m²", label: "Entrepôt stockage" },
      { value: "100%", label: "Délais respectés" },
    ],
  },
  "logistique-coordination": {
    title: "Logistique & Coordination Terrain",
    subtitle: "Gestion logistique complète de vos événements B2B",
    metaTitle: "Logistique Événementielle | Coordination Terrain | BA Attitude",
    metaDescription: "Logistique événementielle complète : transport, stockage, manutention, coordination terrain. Expert salons et événements B2B. Devis gratuit.",
    description: "Nous prenons en charge l'ensemble de la chaîne logistique de vos événements : transport, stockage, manutention, coordination des prestataires et pilotage terrain.",
    heroImage: serviceLogistique,
    images: [
      { src: serviceLogistique, alt: "Logistique transport événementiel" },
      { src: serviceCorporate, alt: "Coordination terrain salon" },
      { src: heroImage, alt: "Manutention matériel événement" },
    ],
    intro: `La logistique est le socle invisible mais indispensable de tout événement réussi. Un matériel qui n'arrive pas à l'heure, une livraison refusée faute de bon document, une coordination défaillante entre prestataires : ces incidents logistiques peuvent compromettre des mois de préparation.

BA Attitude assure la gestion logistique complète de vos événements professionnels : salons, congrès, conventions, lancements de produits. De la sortie de votre entrepôt à l'installation sur site, nous prenons en charge chaque étape de la chaîne logistique.

Notre approche repose sur trois piliers : anticipation, traçabilité et réactivité. Nous établissons un rétroplanning logistique détaillé, suivons chaque colis en temps réel et disposons de solutions de repli en cas d'imprévu. Notre réseau de transporteurs et d'entrepositaires couvre la France et l'Europe.

Au-delà du transport, nous assurons la coordination terrain de vos événements. Notre régisseur devient votre bras droit sur place : il est l'interface entre tous les prestataires, gère les plannings, résout les problèmes et vous tient informé en temps réel.`,
    whoFor: {
      title: "Ce service est fait pour vous si...",
      items: [
        "Vous avez du matériel à transporter pour un salon ou événement",
        "Vous recherchez un coordinateur terrain pour piloter vos prestataires",
        "Vous souhaitez externaliser toute la logistique de vos participations salon",
        "Vous avez besoin de stocker du matériel événementiel entre deux dates",
        "Vous organisez un événement complexe avec de nombreux intervenants",
      ],
    },
    problemsSolved: [
      "Matériel arrivé en retard ou endommagé pendant le transport",
      "Livraisons refusées par le site faute de documents conformes",
      "Coordination chaotique entre les différents prestataires",
      "Absence de visibilité sur l'avancement des opérations",
      "Surcoûts liés aux imprévus logistiques",
    ],
    features: [
      { title: "Transport événementiel", description: "Acheminement de votre matériel par véhicule utilitaire ou semi-remorque. Emballage adapté, manutention soignée, livraison sur site." },
      { title: "Suivi en temps réel", description: "Géolocalisation de vos livraisons, alertes en cas de retard, interface de suivi accessible 24h/24." },
      { title: "Stockage sécurisé", description: "Entrepôt de 2000m² en Île-de-France, gardiennage, assurance marchandises. Gestion des stocks et inventaires." },
      { title: "Manutention événementielle", description: "Équipes de manutentionnaires pour chargement, déchargement, mise en place. Matériel de levage disponible." },
      { title: "Coordination prestataires", description: "Interface unique entre tous vos intervenants : standiste, traiteur, audiovisuel, photographe, etc." },
      { title: "Régie terrain", description: "Régisseur dédié sur site pour piloter l'ensemble des opérations et assurer le reporting en temps réel." },
    ],
    methodology: [
      { step: "01", title: "Inventaire", description: "Liste exhaustive du matériel à transporter, dimensions, poids, fragilité. Plan de chargement optimisé." },
      { step: "02", title: "Planning", description: "Rétroplanning logistique intégrant les contraintes du site, les délais de montage et les disponibilités des prestataires." },
      { step: "03", title: "Préparation", description: "Emballage du matériel, étiquetage, constitution des documents de transport. Chargement véhicule." },
      { step: "04", title: "Transport", description: "Acheminement selon planning, suivi GPS en temps réel, communication proactive sur l'avancement." },
      { step: "05", title: "Coordination", description: "Réception sur site, dispatch vers les zones de montage, interface avec les équipes d'installation." },
      { step: "06", title: "Repli", description: "Récupération du matériel après l'événement, reconditionnement, retour entrepôt ou destination finale." },
    ],
    expertise: {
      title: "Nos atouts logistiques",
      items: [
        "Flotte de véhicules propres : utilitaires, fourgons, semi-remorques",
        "Entrepôt de 2000m² en région parisienne avec gardiennage",
        "Réseau de transporteurs partenaires en France et Europe",
        "Assurance marchandises transportées tous risques",
        "Régisseurs expérimentés pour la coordination terrain",
        "Outils digitaux de suivi et reporting en temps réel",
      ],
    },
    zonesText: "Notre logistique événementielle couvre l'ensemble du territoire français ainsi que l'Europe. Nous livrons sur tous les sites d'exposition, centres de congrès et lieux de réception. Pour les destinations internationales hors Europe, nous travaillons avec des partenaires transitaires de confiance.",
    faq: [
      { question: "Quelle est votre zone de couverture pour le transport ?", answer: "Nous couvrons l'ensemble de la France avec notre flotte propre et notre réseau de transporteurs partenaires. Pour l'international, nous assurons les livraisons en Europe et travaillons avec des transitaires pour les destinations plus lointaines. Les tarifs internationaux font l'objet d'un devis spécifique." },
      { question: "Proposez-vous un service de régisseur sur site ?", answer: "Oui, nous mettons à disposition des régisseurs expérimentés pour coordonner l'ensemble des prestataires sur votre événement. Le régisseur est votre interlocuteur unique sur le terrain : il gère les plannings, résout les problèmes et vous tient informé en temps réel." },
      { question: "Comment fonctionne le stockage inter-événements ?", answer: "Notre entrepôt de 2000m² en région parisienne peut accueillir votre matériel entre deux événements. Nous réalisons un inventaire à la réception, stockons dans des conditions adaptées (sec, tempéré) et préparons les expéditions selon vos instructions. La facturation est mensuelle au m² ou au volume." },
      { question: "Comment gérez-vous les imprévus logistiques ?", answer: "Notre organisation repose sur l'anticipation et la réactivité. Nous identifions les points de risque en amont et prévoyons des solutions de repli : véhicule de remplacement, stock de sécurité, équipes supplémentaires mobilisables. En cas d'incident, nous vous alertons immédiatement et mettons en œuvre le plan B." },
      { question: "Assurez-vous le matériel transporté ?", answer: "Oui, l'ensemble du matériel transporté est couvert par notre assurance marchandises tous risques. Les conditions de garantie dépendent de la valeur déclarée du matériel. Nous vous recommandons de déclarer la valeur réelle pour bénéficier d'une indemnisation complète en cas de sinistre." },
    ],
    stats: [
      { value: "2000m²", label: "Entrepôt stockage" },
      { value: "GPS", label: "Suivi temps réel" },
      { value: "48h", label: "Délai livraison France" },
      { value: "100%", label: "Colis tracés" },
    ],
  },
  "scenographie-stands": {
    title: "Scénographie de Stands",
    subtitle: "Conception et réalisation de décors événementiels sur mesure",
    metaTitle: "Scénographie Stand Exposition | Design Événementiel | BA Attitude",
    metaDescription: "Scénographie et design de stands d'exposition sur mesure. Création de décors événementiels impactants. De la conception à l'installation.",
    description: "Nous concevons et réalisons des scénographies de stands sur mesure pour valoriser votre marque et maximiser l'impact de votre présence sur les salons.",
    heroImage: serviceCorporate,
    images: [
      { src: serviceCorporate, alt: "Scénographie stand sur mesure" },
      { src: serviceScenography, alt: "Design événementiel exposition" },
      { src: serviceDecoration, alt: "Décor stand professionnel" },
    ],
    intro: `Sur un salon professionnel, votre stand est le reflet de votre entreprise. C'est souvent le premier contact visuel avec vos prospects. Une scénographie réussie attire l'attention, véhicule vos valeurs de marque et favorise les interactions commerciales.

BA Attitude propose un service complet de scénographie de stands : de la conception créative à la réalisation et l'installation sur site. Nous travaillons en étroite collaboration avec votre équipe marketing pour traduire votre identité de marque en un espace tridimensionnel impactant.

Notre approche allie créativité et pragmatisme. Nous concevons des stands qui marquent les esprits tout en respectant vos contraintes : budget, logistique, réutilisabilité. Nos designers maîtrisent les codes des différents secteurs d'activité et s'adaptent à vos objectifs spécifiques.

Au-delà de la conception, nous assurons la fabrication des éléments de décor dans nos ateliers partenaires et l'installation sur site par nos équipes de monteurs. Vous bénéficiez ainsi d'une prestation clé en main, de la première esquisse jusqu'au démontage final.`,
    whoFor: {
      title: "Ce service est fait pour vous si...",
      items: [
        "Vous souhaitez vous démarquer avec un stand original et impactant",
        "Vous recherchez une agence capable de traduire votre marque en 3D",
        "Vous avez besoin d'une scénographie cohérente sur plusieurs salons",
        "Vous voulez un stand réutilisable et évolutif",
        "Vous manquez de ressources internes pour concevoir votre stand",
      ],
    },
    problemsSolved: [
      "Stand banal qui ne se démarque pas de la concurrence",
      "Incohérence entre l'image de marque et l'espace d'exposition",
      "Budget gaspillé sur des éléments non réutilisables",
      "Manque de fonctionnalité dans l'agencement du stand",
      "Délais trop longs des standistes traditionnels",
    ],
    features: [
      { title: "Direction artistique", description: "Définition du concept créatif en cohérence avec votre identité de marque. Moodboards, esquisses, validation des orientations." },
      { title: "Design 3D", description: "Modélisation 3D réaliste de votre stand pour visualiser le rendu final. Vues multiples, éclairage, matériaux." },
      { title: "Plans techniques", description: "Élaboration des plans de fabrication et de montage. Spécifications matériaux, côtes, raccordements." },
      { title: "Fabrication", description: "Production des éléments de décor dans nos ateliers partenaires. Menuiserie, structures métalliques, impressions grand format." },
      { title: "Installation", description: "Montage sur site par nos équipes. Mise en lumière, finitions, recette avec le client." },
      { title: "Réutilisabilité", description: "Conception modulaire permettant d'adapter le stand à différents formats. Stockage entre les salons." },
    ],
    methodology: [
      { step: "01", title: "Brief créatif", description: "Immersion dans votre univers de marque, définition des objectifs, analyse de la concurrence sur salon." },
      { step: "02", title: "Conception", description: "Recherches créatives, esquisses, proposition de concepts. Échanges itératifs jusqu'à validation." },
      { step: "03", title: "Modélisation", description: "Design 3D détaillé, choix des matériaux et finitions, optimisation budget." },
      { step: "04", title: "Fabrication", description: "Production des éléments en atelier, contrôle qualité, préparation à l'expédition." },
      { step: "05", title: "Installation", description: "Montage sur salon, mise en place du mobilier et de l'éclairage, derniers ajustements." },
      { step: "06", title: "Capitalisation", description: "Démontage soigné, stockage des éléments réutilisables, retour d'expérience." },
    ],
    expertise: {
      title: "Notre différence créative",
      items: [
        "Équipe de designers spécialisés en événementiel",
        "Maîtrise des contraintes techniques des salons professionnels",
        "Ateliers partenaires certifiés pour la fabrication",
        "Conception orientée réutilisabilité et modularité",
        "Intégration des nouvelles technologies (LED, écrans, interactif)",
        "Accompagnement de A à Z, de l'idée à l'installation",
      ],
    },
    zonesText: "Nous concevons et installons des scénographies de stands sur tous les salons professionnels en France et à l'international. Nos équipes se déplacent à Paris, Lyon, Marseille, Bordeaux, et dans toutes les grandes villes européennes pour assurer un montage conforme à notre vision créative.",
    faq: [
      { question: "Quel est le délai moyen pour concevoir et fabriquer un stand ?", answer: "Le délai moyen est de 6 à 8 semaines entre le brief initial et l'installation sur salon. Ce délai peut être réduit à 4 semaines pour des projets simples ou allongé pour des scénographies complexes. Nous recommandons de nous consulter au minimum 2 mois avant la date du salon." },
      { question: "Proposez-vous des stands réutilisables ?", answer: "Oui, nous privilégions les conceptions modulaires qui permettent de réutiliser les éléments sur plusieurs salons. Les structures, panneaux et mobiliers peuvent être reconfigurés pour s'adapter à différentes surfaces. Cette approche optimise votre investissement sur le long terme." },
      { question: "Intégrez-vous des technologies interactives ?", answer: "Oui, nous intégrons régulièrement des écrans tactiles, murs LED, bornes interactives, réalité augmentée ou virtuelle dans nos scénographies. Notre équipe technique assure l'installation et la maintenance de ces équipements pendant le salon." },
      { question: "Travaillez-vous avec des standistes tiers ?", answer: "Oui, nous pouvons intervenir en complément d'un standiste existant pour apporter une dimension créative et scénographique. Nous sommes également en mesure de gérer l'ensemble du projet si vous préférez un interlocuteur unique." },
      { question: "Comment est établi le budget d'une scénographie ?", answer: "Le budget dépend de la surface du stand, de la complexité du design, des matériaux choisis et des technologies intégrées. Nous établissons un devis détaillé après le brief créatif, avec des options pour ajuster le périmètre selon votre enveloppe. Nous sommes transparents sur les coûts et les arbitrages possibles." },
    ],
    stats: [
      { value: "200+", label: "Projets scénographiques" },
      { value: "6-8 sem", label: "Délai conception-installation" },
      { value: "3D", label: "Modélisation réaliste" },
      { value: "Multi-salon", label: "Conception réutilisable" },
    ],
  },
  "international": {
    title: "Prestations Internationales",
    subtitle: "Accompagnement de vos projets événementiels dans le monde entier",
    metaTitle: "Prestations Événementielles International | Salons Monde | BA Attitude",
    metaDescription: "Accompagnement international pour vos salons et événements. Logistique export, coordination locale, intervention Europe, USA, Moyen-Orient, Asie.",
    description: "BA Attitude vous accompagne sur vos projets événementiels à l'international : salons, congrès, lancements de produits dans le monde entier.",
    heroImage: serviceInternational,
    images: [
      { src: serviceInternational, alt: "Salon international export" },
      { src: heroImage, alt: "Événement professionnel monde" },
      { src: serviceCorporate, alt: "Coordination internationale" },
    ],
    intro: `L'expansion internationale de votre entreprise passe souvent par une présence sur les grands salons mondiaux. CES Las Vegas, Foire de Hanovre, Gulfood Dubaï, Canton Fair : ces rendez-vous incontournables de votre secteur nécessitent une logistique et une coordination sans faille.

BA Attitude accompagne les entreprises françaises sur leurs projets événementiels à l'international depuis plus de 10 ans. Nous maîtrisons les spécificités de chaque marché : réglementations locales, formalités douanières, prestataires de confiance, culture business.

Notre valeur ajoutée repose sur notre réseau de partenaires locaux dans plus de 30 pays. Ces partenaires, sélectionnés avec exigence, assurent sur place le relais de notre qualité de service française. Ils connaissent parfaitement leurs marchés et garantissent une exécution conforme à nos standards.

De la préparation de votre matériel en France jusqu'à l'installation sur le salon étranger, nous gérons l'ensemble de la chaîne : emballage export, documents douaniers, transport international, coordination avec les organisateurs locaux, montage du stand et support pendant l'événement.`,
    whoFor: {
      title: "Ce service est fait pour vous si...",
      items: [
        "Vous participez à un salon professionnel à l'étranger",
        "Vous avez besoin d'un partenaire qui connaît les contraintes internationales",
        "Vous souhaitez un interlocuteur français pour piloter un projet à l'étranger",
        "Vous recherchez des prestataires locaux fiables dans un pays que vous ne connaissez pas",
        "Vous voulez éviter les mauvaises surprises liées aux formalités export",
      ],
    },
    problemsSolved: [
      "Matériel bloqué en douane faute de documents conformes",
      "Prestataires locaux non fiables ou aux standards insuffisants",
      "Barrière de la langue et différences culturelles",
      "Surcoûts imprévus liés à la méconnaissance des pratiques locales",
      "Absence de recours en cas de problème sur place",
    ],
    features: [
      { title: "Logistique export", description: "Emballage maritime ou aérien, documents douaniers, transport international, dédouanement. Formalités Carnet ATA." },
      { title: "Partenaires locaux", description: "Réseau de prestataires qualifiés dans plus de 30 pays. Sélection rigoureuse, standards BA Attitude." },
      { title: "Coordination centralisée", description: "Un chef de projet français unique pour piloter l'ensemble des intervenants. Reporting régulier." },
      { title: "Connaissance marchés", description: "Expertise des réglementations locales, pratiques business, contraintes des sites d'exposition étrangers." },
      { title: "Support sur place", description: "Possibilité de déplacer un chef de projet BA Attitude sur site pour superviser l'installation." },
      { title: "Gestion des risques", description: "Assurances adaptées au transport international, plans B en cas d'imprévu, contacts d'urgence locaux." },
    ],
    methodology: [
      { step: "01", title: "Cadrage", description: "Analyse du projet, identification des contraintes pays, définition du périmètre de prestation." },
      { step: "02", title: "Réseau", description: "Sélection et briefing des partenaires locaux adaptés au projet. Négociation des conditions." },
      { step: "03", title: "Logistique", description: "Préparation du matériel en France, emballage export, constitution des documents douaniers, expédition." },
      { step: "04", title: "Coordination", description: "Interface avec les partenaires locaux et l'organisateur du salon. Suivi du transport et de l'installation." },
      { step: "05", title: "Exploitation", description: "Support pendant l'événement via nos partenaires locaux. Reporting quotidien au client français." },
      { step: "06", title: "Repli", description: "Démontage, reconditionnement, retour France ou stockage local selon vos instructions." },
    ],
    expertise: {
      title: "Notre expertise internationale",
      items: [
        "10+ ans d'accompagnement sur les salons internationaux",
        "Réseau de partenaires dans 30+ pays",
        "Maîtrise des formalités Carnet ATA et douanières",
        "Équipe multilingue (français, anglais, espagnol, allemand)",
        "Connaissance des sites d'exposition majeurs dans le monde",
        "Assurances transport international tous risques",
      ],
    },
    zonesText: "Nous accompagnons nos clients sur les principaux salons mondiaux : Europe (Allemagne, Italie, Espagne, Royaume-Uni, Benelux), Amérique du Nord (États-Unis, Canada), Moyen-Orient (Émirats, Arabie Saoudite, Qatar), Asie (Chine, Japon, Singapour, Hong Kong). Notre réseau couvre également l'Amérique Latine, l'Afrique et l'Océanie.",
    faq: [
      { question: "Quelles destinations couvrez-vous à l'international ?", answer: "Nous intervenons sur tous les continents grâce à notre réseau de partenaires locaux. Les destinations les plus fréquentes sont l'Allemagne, l'Italie, l'Espagne, le Royaume-Uni, les États-Unis, les Émirats Arabes Unis et la Chine. Nous pouvons également organiser des missions sur des destinations moins courantes." },
      { question: "Comment gérez-vous les formalités douanières ?", answer: "Nous prenons en charge l'ensemble des formalités douanières : documents d'exportation, Carnet ATA pour l'admission temporaire, factures pro forma, listes de colisage. Nous travaillons avec des transitaires spécialisés qui connaissent les procédures de chaque pays." },
      { question: "Comment sélectionnez-vous vos partenaires locaux ?", answer: "Nos partenaires locaux sont sélectionnés selon des critères stricts : expérience sur les salons professionnels, références vérifiables, capacité à communiquer en anglais ou français, respect des normes de sécurité. Nous les auditons régulièrement et maintenons des relations de long terme." },
      { question: "Pouvez-vous envoyer un chef de projet sur place ?", answer: "Oui, nous pouvons déplacer un chef de projet BA Attitude sur le salon pour superviser l'installation et assurer la coordination. Cette option est recommandée pour les projets d'envergure ou les destinations où la barrière linguistique est importante." },
      { question: "Quels sont les délais pour un projet international ?", answer: "Les délais varient selon la destination et la complexité du projet. Comptez minimum 3 mois pour un projet en Europe, 4 mois pour les États-Unis ou le Moyen-Orient, 6 mois pour l'Asie. Ces délais intègrent la logistique export, les formalités douanières et la coordination avec les partenaires locaux." },
    ],
    stats: [
      { value: "30+", label: "Pays couverts" },
      { value: "10 ans", label: "Expérience export" },
      { value: "Multilingue", label: "Équipe projet" },
      { value: "ATA", label: "Carnet maîtrisé" },
    ],
  },
};

// Fallback for old URL patterns
const serviceAliases: Record<string, string> = {
  "logistique-terrain": "logistique-coordination",
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const resolvedId = serviceAliases[serviceId || ""] || serviceId || "";
  const service = servicesData[resolvedId];

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-card-foreground mb-4">Service non trouvé</h1>
            <Button variant="gold" asChild>
              <Link to="/services">Voir tous les services</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Prepare HowTo steps from methodology
  const howToSteps = service.methodology.map(step => ({
    name: step.title,
    text: step.description
  }));

  return (
    <Layout>
      <SEOHead 
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`https://baattitude.fr/services/${resolvedId}`}
        ogUrl={`https://baattitude.fr/services/${resolvedId}`}
        ogType="website"
        ogImage={typeof service.heroImage === 'string' ? service.heroImage : "https://baattitude.fr/og-image.jpg"}
      />
      <LocalBusinessSchema serviceType={[service.title]} />
      <FAQSchema faqs={service.faq} />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://baattitude.fr" },
        { name: "Services", url: "https://baattitude.fr/services" },
        { name: service.title, url: `https://baattitude.fr/services/${resolvedId}` },
      ]} />
      <ServiceSchema
        name={service.title}
        description={service.metaDescription}
        url={`https://baattitude.fr/services/${resolvedId}`}
        areaServed={["France", "Europe", "International"]}
      />
      <HowToSchema
        name={`${service.title} - Méthodologie BA ATTITUDE`}
        description={service.description}
        steps={howToSteps}
        totalTime="P2W"
      />
      <SpeakableSchema 
        cssSelector={[
          "h1",
          "h2",
          ".text-muted-foreground",
          ".AccordionContent"
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-15"
          />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          {/* Breadcrumb UI */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/services">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{service.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              {service.subtitle}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              {service.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Demander un Devis Gratuit
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
            {service.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction / Présentation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <FadeInSection className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold text-card-foreground mb-6">
                Présentation du <span className="text-gradient-gold">Service</span>
              </h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                {service.intro.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="space-y-4">
                {service.images.slice(0, 2).map((image, index) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg border border-border">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pour qui ? */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-card-foreground mb-8 text-center">
              {service.whoFor.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.whoFor.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-card-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Problèmes résolus */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-card-foreground mb-4 text-center">
              Les Problèmes que Nous <span className="text-gradient-gold">Résolvons</span>
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Des situations que vous avez peut-être déjà vécues et que nous vous évitons.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.problemsSolved.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg"
                >
                  <span className="text-sm text-card-foreground">{problem}</span>
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Ce que nous proposons */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Nos Prestations
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground">
              Ce que nous <span className="text-gradient-gold">proposons</span>
            </h2>
          </FadeInSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Notre Méthode
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground">
              Déroulement de <span className="text-gradient-gold">l'Intervention</span>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {service.methodology.map((step, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="relative bg-card border border-border rounded-xl p-6 h-full">
                  <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-card-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Différenciation */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeInSection>
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
                Nos Atouts
              </span>
              <h2 className="text-3xl font-display font-bold text-card-foreground mb-6">
                {service.expertise.title}
              </h2>
              <ul className="space-y-4">
                {service.expertise.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-card-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-card-foreground">Expérience</h4>
                  <p className="text-sm text-muted-foreground">+15 ans sur le terrain</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-card-foreground">Assurance</h4>
                  <p className="text-sm text-muted-foreground">RC Pro complète</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-card-foreground">Réactivité</h4>
                  <p className="text-sm text-muted-foreground">24h/24 en période salon</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-card-foreground">Équipes</h4>
                  <p className="text-sm text-muted-foreground">Formées et qualifiées</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Zone d'intervention
              </span>
            </div>
            <h2 className="text-3xl font-display font-bold text-card-foreground mb-6">
              Où Intervenons-<span className="text-gradient-gold">Nous ?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {service.zonesText}
            </p>
            <Button variant="outline" asChild>
              <Link to="/zones-intervention">
                Voir toutes nos zones d'intervention
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ - Accordion dépliable */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Questions Fréquentes
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground">
              Tout ce que vous devez <span className="text-gradient-gold">savoir</span>
            </h2>
          </FadeInSection>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {service.faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left text-card-foreground hover:text-primary font-medium py-6 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-6">
              Intéressé par ce service ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé sous 48h.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+33601591920">
                  <Phone className="w-4 h-4 mr-2" />
                  06 01 59 19 20
                </a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
}
