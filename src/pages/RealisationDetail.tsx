import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Users, CheckCircle2, Quote, ChevronRight } from "lucide-react";
import { FadeInSection, ParallaxImage, StaggerContainer, staggerItem } from "@/components/animations/ParallaxSection";
import { SEOHead, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { EventSchema } from "@/components/seo/EventSchema";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import realisationGalaDior from "@/assets/realisation-gala-dior.jpg";
import realisationBvlgariLaunch from "@/assets/realisation-bvlgari-launch.jpg";
import realisationGoogleConvention from "@/assets/realisation-google-convention.jpg";
import realisationFendiDinner from "@/assets/realisation-fendi-dinner.jpg";
import realisationAramcoSeminar from "@/assets/realisation-aramco-seminar.jpg";
import realisationChaumetGala from "@/assets/realisation-chaumet-gala.jpg";
import realisationG20Event from "@/assets/realisation-g20-event.jpg";
import realisationDisneylandEvent from "@/assets/realisation-disneyland-event.jpg";

const projectsData = [
  {
    id: "1",
    title: "Gala Annuel DIOR",
    client: "DIOR",
    category: "Luxe",
    image: realisationGalaDior,
    gallery: [realisationGalaDior, realisationBvlgariLaunch, realisationFendiDinner],
    description: "Décoration complète pour le gala annuel de la maison DIOR",
    fullDescription: `Pour le gala annuel de la maison DIOR, nous avons conçu une expérience immersive exceptionnelle 
    mêlant élégance intemporelle et modernité. L'ensemble du décor a été pensé pour sublimer l'ADN de la marque 
    tout en créant un environnement propice aux échanges et à la célébration.
    
    Notre équipe a travaillé en étroite collaboration avec les équipes créatives de DIOR pour assurer 
    une parfaite cohérence avec leur vision artistique. Chaque détail, de l'éclairage aux arrangements 
    floraux, a été minutieusement orchestré.`,
    year: "2023",
    location: "Paris, France",
    venue: "Palais de Tokyo",
    guests: "500",
    duration: "3 jours",
    services: [
      "Conception scénographique complète",
      "Décoration florale haute couture",
      "Installation lumineuse sur mesure",
      "Coordination logistique internationale",
      "Montage et démontage"
    ],
    testimonial: {
      text: "BA ATTITUDE a su capturer l'essence de notre maison et la traduire en une expérience visuelle exceptionnelle. Le résultat a dépassé nos attentes.",
      author: "Directeur Événementiel",
      company: "DIOR"
    },
    results: [
      { value: "100%", label: "Satisfaction client" },
      { value: "500", label: "Invités accueillis" },
      { value: "72h", label: "Montage complet" }
    ]
  },
  {
    id: "2",
    title: "Lancement Produit BVLGARI",
    client: "BVLGARI",
    category: "Luxe",
    image: realisationBvlgariLaunch,
    gallery: [realisationBvlgariLaunch, realisationGalaDior, realisationChaumetGala],
    description: "Scénographie immersive pour le lancement d'une nouvelle collection",
    fullDescription: `Le lancement de la nouvelle collection BVLGARI nécessitait un écrin à la hauteur 
    de l'excellence de la marque. Nous avons créé un univers où chaque pièce de la collection 
    pouvait briller de mille feux.
    
    L'installation comprenait des jeux de lumières sophistiqués, des matériaux nobles et 
    une scénographie inspirée de l'héritage romain de la maison.`,
    year: "2023",
    location: "Rome, Italie",
    venue: "Villa Médicis",
    guests: "300",
    duration: "2 jours",
    services: [
      "Design scénographique",
      "Éclairage architectural",
      "Installation audiovisuelle",
      "Coordination internationale"
    ],
    testimonial: {
      text: "Une collaboration remarquable qui a permis de créer un moment magique pour nos invités VIP.",
      author: "Event Manager",
      company: "BVLGARI"
    },
    results: [
      { value: "98%", label: "Satisfaction" },
      { value: "300", label: "VIP présents" },
      { value: "48h", label: "Installation" }
    ]
  },
  {
    id: "3",
    title: "Convention Internationale GOOGLE",
    client: "GOOGLE",
    category: "Corporate",
    image: realisationGoogleConvention,
    gallery: [realisationGoogleConvention, realisationAramcoSeminar, realisationG20Event],
    description: "Aménagement et décoration de l'espace convention",
    fullDescription: `Pour la convention internationale GOOGLE, nous avons transformé un espace 
    de 5000m² en un environnement de travail innovant et inspirant. L'objectif était de 
    faciliter les échanges tout en reflétant l'esprit créatif de l'entreprise.`,
    year: "2023",
    location: "Dublin, Irlande",
    venue: "Convention Centre Dublin",
    guests: "2000",
    duration: "5 jours",
    services: [
      "Aménagement modulaire",
      "Signalétique interactive",
      "Mobilier design",
      "Coordination technique"
    ],
    testimonial: {
      text: "BA ATTITUDE a parfaitement compris notre culture d'entreprise et l'a traduite dans un espace fonctionnel et inspirant.",
      author: "Head of Events",
      company: "GOOGLE"
    },
    results: [
      { value: "2000", label: "Participants" },
      { value: "5000m²", label: "Aménagés" },
      { value: "5j", label: "Événement" }
    ]
  },
  {
    id: "4",
    title: "Dîner Fashion Week",
    client: "FENDI",
    category: "Luxe",
    image: realisationFendiDinner,
    gallery: [realisationFendiDinner, realisationGalaDior, realisationChaumetGala],
    description: "Décoration du dîner VIP pendant la Fashion Week Paris",
    fullDescription: `Au cœur de la Fashion Week parisienne, nous avons créé un cadre intimiste 
    et raffiné pour le dîner exclusif FENDI. L'atmosphère feutrée et luxueuse a permis 
    aux convives de vivre un moment privilégié.`,
    year: "2022",
    location: "Paris, France",
    venue: "Hôtel Particulier",
    guests: "150",
    duration: "1 soirée",
    services: [
      "Direction artistique",
      "Décoration florale",
      "Mise en lumière",
      "Service traiteur coordination"
    ],
    testimonial: {
      text: "Une soirée magique dans un décor à couper le souffle. Merci BA ATTITUDE pour cette création unique.",
      author: "PR Director",
      company: "FENDI"
    },
    results: [
      { value: "150", label: "VIP" },
      { value: "100%", label: "Satisfaction" },
      { value: "1", label: "Soirée mémorable" }
    ]
  },
  {
    id: "5",
    title: "Séminaire ARAMCO",
    client: "ARAMCO",
    category: "Corporate",
    image: realisationAramcoSeminar,
    gallery: [realisationAramcoSeminar, realisationGoogleConvention, realisationG20Event],
    description: "Organisation complète du séminaire international",
    fullDescription: `Pour le séminaire international ARAMCO, nous avons déployé notre expertise 
    en coordination logistique internationale. Du transport au montage, chaque détail 
    a été géré avec précision pour garantir un événement sans faille.`,
    year: "2022",
    location: "Riyad, Arabie Saoudite",
    venue: "King Abdullah Financial District",
    guests: "800",
    duration: "4 jours",
    services: [
      "Logistique internationale",
      "Aménagement scénique",
      "Équipements audiovisuels",
      "Coordination multiculturelle"
    ],
    testimonial: {
      text: "BA ATTITUDE a démontré une capacité exceptionnelle à gérer la complexité d'un événement international de cette envergure.",
      author: "Events Director",
      company: "ARAMCO"
    },
    results: [
      { value: "800", label: "Participants" },
      { value: "4j", label: "Événement" },
      { value: "12", label: "Pays représentés" }
    ]
  },
  {
    id: "6",
    title: "Soirée de Gala CHAUMET",
    client: "CHAUMET Paris",
    category: "Luxe",
    image: realisationChaumetGala,
    gallery: [realisationChaumetGala, realisationBvlgariLaunch, realisationGalaDior],
    description: "Mise en scène luxueuse pour la soirée anniversaire",
    fullDescription: `Pour célébrer l'anniversaire de la maison CHAUMET, nous avons créé un décor 
    féerique inspiré de l'héritage joaillier de la marque. Les éléments scénographiques 
    jouaient avec la lumière pour créer un effet de bijou grandeur nature.`,
    year: "2022",
    location: "Paris, France",
    venue: "Place Vendôme",
    guests: "250",
    duration: "1 soirée",
    services: [
      "Conception artistique",
      "Décoration thématique",
      "Éclairage scénique",
      "Installation éphémère"
    ],
    testimonial: {
      text: "Un décor digne des plus belles parures de notre maison. BA ATTITUDE a su magnifier notre héritage.",
      author: "Directrice Communication",
      company: "CHAUMET"
    },
    results: [
      { value: "250", label: "Convives" },
      { value: "200", label: "Ans célébrés" },
      { value: "100%", label: "Excellence" }
    ]
  },
  {
    id: "7",
    title: "Événement G20",
    client: "G20",
    category: "Événementiel",
    image: realisationG20Event,
    gallery: [realisationG20Event, realisationAramcoSeminar, realisationGoogleConvention],
    description: "Logistique et décoration pour l'événement officiel",
    fullDescription: `L'événement G20 exigeait un niveau de rigueur et de professionnalisme 
    exceptionnel. Notre équipe a assuré la coordination logistique complète, 
    dans le respect des protocoles de sécurité internationaux.`,
    year: "2021",
    location: "Paris, France",
    venue: "Palais de l'Élysée",
    guests: "1000",
    duration: "3 jours",
    services: [
      "Coordination protocolaire",
      "Logistique sécurisée",
      "Aménagement officiel",
      "Support technique 24/7"
    ],
    testimonial: {
      text: "Un professionnalisme exemplaire dans un contexte exigeant. BA ATTITUDE a relevé tous les défis.",
      author: "Chef du Protocole",
      company: "Gouvernement Français"
    },
    results: [
      { value: "20", label: "Nations" },
      { value: "1000", label: "Participants" },
      { value: "0", label: "Incident" }
    ]
  },
  {
    id: "8",
    title: "Expérience DisneyLand",
    client: "DisneyLand Paris",
    category: "Événementiel",
    image: realisationDisneylandEvent,
    gallery: [realisationDisneylandEvent, realisationGoogleConvention, realisationFendiDinner],
    description: "Décoration thématique pour un événement privé",
    fullDescription: `Pour DisneyLand Paris, nous avons créé une décoration thématique 
    immersive pour un événement corporate exclusif. L'objectif était de plonger 
    les invités dans un univers féérique tout en conservant un caractère professionnel.`,
    year: "2021",
    location: "Marne-la-Vallée, France",
    venue: "Parc DisneyLand Paris",
    guests: "400",
    duration: "2 jours",
    services: [
      "Décoration thématique",
      "Animation visuelle",
      "Coordination parc",
      "Expérience immersive"
    ],
    testimonial: {
      text: "BA ATTITUDE a su créer la magie Disney dans un contexte corporate. Une réussite totale !",
      author: "Event Manager",
      company: "DisneyLand Paris"
    },
    results: [
      { value: "400", label: "Invités" },
      { value: "100%", label: "Magie" },
      { value: "2j", label: "Événement" }
    ]
  }
];

export default function RealisationDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-card-foreground mb-4">
              Projet non trouvé
            </h1>
            <Button variant="gold" onClick={() => navigate("/realisations")}>
              Retour aux réalisations
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const currentIndex = projectsData.findIndex(p => p.id === projectId);
  const prevProject = projectsData[currentIndex - 1];
  const nextProject = projectsData[currentIndex + 1];
  
  const similarProjects = projectsData
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <Layout>
      <SEOHead 
        title={`${project.title} | Réalisations BA Attitude`}
        description={project.description}
        canonical={`https://baattitude.fr/realisations/${projectId}`}
        ogUrl={`https://baattitude.fr/realisations/${projectId}`}
        ogType="event"
        ogImage={typeof project.image === 'string' ? project.image : "https://baattitude.fr/og-image.jpg"}
      />
      <EventSchema
        name={project.title}
        description={project.fullDescription || project.description}
        image={project.image}
        startDate={project.year}
        location={{
          name: project.venue || project.location,
          address: project.location
        }}
        url={`https://baattitude.fr/realisations/${projectId}`}
      />
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://baattitude.fr" },
          { name: "Réalisations", url: "https://baattitude.fr/realisations" },
          { name: project.title, url: `https://baattitude.fr/realisations/${projectId}` }
        ]} 
      />

      {/* Breadcrumb UI */}
      <section className="absolute top-24 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-white/70 hover:text-white">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4 text-white/50" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/realisations" className="text-white/70 hover:text-white">Réalisations</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4 text-white/50" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{project.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero with Parallax */}
      <section ref={heroRef} className="relative h-[80vh] overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </motion.div>
        
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex items-end"
        >
          <div className="container mx-auto px-4 pb-16">
            <Link 
              to="/realisations"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux réalisations
            </Link>
            
            <FadeInSection>
              <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium mb-4">
                {project.category}
              </span>
            </FadeInSection>
            
            <FadeInSection delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-card-foreground mb-4">
                {project.title}
              </h1>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <p className="text-xl text-primary font-medium">{project.client}</p>
            </FadeInSection>
          </div>
        </motion.div>
      </section>

      {/* Project Info */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: MapPin, label: "Lieu", value: project.location },
              { icon: Calendar, label: "Année", value: project.year },
              { icon: Users, label: "Invités", value: project.guests },
              { icon: Calendar, label: "Durée", value: project.duration }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-semibold text-card-foreground">{item.value}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeInSection direction="left">
              <h2 className="text-3xl font-display font-bold text-card-foreground mb-6">
                À propos du <span className="text-gradient-gold">projet</span>
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                {project.fullDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-8 flex gap-4">
                <Button variant="gold" asChild>
                  <Link to="/contact">Projet similaire ?</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">Nos services</Link>
                </Button>
              </div>
            </FadeInSection>
            
            <FadeInSection direction="right" delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-display font-semibold text-card-foreground mb-6">
                  Services mobilisés
                </h3>
                <ul className="space-y-4">
                  {project.services.map((service, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Gallery with Parallax */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-card-foreground">
              Galerie <span className="text-gradient-gold">photos</span>
            </h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <FadeInSection key={index} delay={index * 0.15}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <ParallaxImage 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full"
                    speed={0.2}
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-card-foreground">
              Résultats <span className="text-gradient-gold">clés</span>
            </h2>
          </FadeInSection>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {project.results.map((result, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                className="text-center p-8 bg-card border border-border rounded-2xl"
              >
                <div className="text-4xl font-display font-bold text-primary mb-2">
                  {result.value}
                </div>
                <div className="text-muted-foreground">{result.label}</div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <FadeInSection className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-display text-card-foreground mb-8 leading-relaxed">
              "{project.testimonial.text}"
            </blockquote>
            <div>
              <p className="font-semibold text-card-foreground">{project.testimonial.author}</p>
              <p className="text-primary">{project.testimonial.company}</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Similar Projects */}
      {similarProjects.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <FadeInSection className="text-center mb-12">
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-2 block">
                Projets similaires
              </span>
              <h2 className="text-3xl font-display font-bold text-card-foreground">
                Découvrez d'autres <span className="text-gradient-gold">réalisations</span>
              </h2>
            </FadeInSection>
            
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {similarProjects.map((p) => (
                <motion.div key={p.id} variants={staggerItem}>
                  <Link
                    to={`/realisations/${p.id}`}
                    className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-primary mb-1">{p.client}</p>
                      <h3 className="text-lg font-display font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link 
                to={`/realisations/${prevProject.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-card-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-sm">Projet précédent</p>
                  <p className="font-semibold">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}
            
            {nextProject ? (
              <Link 
                to={`/realisations/${nextProject.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-card-foreground transition-colors text-right"
              >
                <div>
                  <p className="text-sm">Projet suivant</p>
                  <p className="font-semibold">{nextProject.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-4">
              Un projet <span className="text-gradient-gold">similaire</span> ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discutons de votre événement et créons ensemble une expérience inoubliable.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Demander un devis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
}
