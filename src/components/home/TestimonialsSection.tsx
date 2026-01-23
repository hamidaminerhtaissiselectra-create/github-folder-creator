import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star, Building2, MapPin } from "lucide-react";
import { useRef } from "react";

// Import testimonial photos
import marieDuboisPhoto from "@/assets/testimonial-marie-dubois.jpg";
import philippeMartinPhoto from "@/assets/testimonial-philippe-martin.jpg";
import sophieLaurentPhoto from "@/assets/testimonial-sophie-laurent.jpg";
import antoineBernardPhoto from "@/assets/testimonial-antoine-bernard.jpg";
import carolinePetitPhoto from "@/assets/testimonial-caroline-petit.jpg";
import julienMoreauPhoto from "@/assets/testimonial-julien-moreau.jpg";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  companyType: string;
  location: string;
  rating: number;
  projectType: string;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "BA ATTITUDE nous accompagne depuis 8 ans sur nos salons professionnels. Leur réactivité est exceptionnelle : lors du SIAL 2024, ils ont résolu un problème de montage en 2 heures un dimanche soir. C'est ce niveau d'engagement qui fait la différence.",
    author: "Marie Dubois",
    role: "Directrice de Production",
    company: "Agence EVENTS+",
    companyType: "Agence événementielle",
    location: "Paris",
    rating: 5,
    projectType: "Salons professionnels",
    photo: marieDuboisPhoto,
  },
  {
    quote: "Pour le G20, les exigences de sécurité et de protocole étaient maximales. L'équipe BA ATTITUDE a géré la coordination de 15 prestataires sans aucun accroc. Leur professionnalisme nous a permis d'accueillir les délégations dans des conditions parfaites.",
    author: "Philippe Martin",
    role: "Chef du Protocole",
    company: "Gouvernement Français",
    companyType: "Institution publique",
    location: "Paris",
    rating: 5,
    projectType: "Événement officiel",
    photo: philippeMartinPhoto,
  },
  {
    quote: "En tant que standiste, j'ai besoin d'un partenaire technique fiable. BA ATTITUDE assure nos montages en marque blanche avec une qualité constante. Sur Maison & Objet, ils ont monté 12 stands en parallèle sans retard. Collaboration idéale.",
    author: "Sophie Laurent",
    role: "Responsable Projets",
    company: "Studio Design Expo",
    companyType: "Standiste",
    location: "Lyon",
    rating: 5,
    projectType: "Montage stands",
    photo: sophieLaurentPhoto,
  },
  {
    quote: "Notre participation à Première Vision nécessitait un stand de 150m² avec scénographie complexe. BA ATTITUDE a assuré le montage, la coordination technique et la maintenance pendant 4 jours. Budget respecté, délais tenus, client satisfait.",
    author: "Antoine Bernard",
    role: "Directeur Marketing",
    company: "Maison de Mode Française",
    companyType: "Marque luxe textile",
    location: "Paris",
    rating: 5,
    projectType: "Salon mode",
    photo: antoineBernardPhoto,
  },
  {
    quote: "Pour nos salons internationaux (Dubaï, Singapour, Berlin), BA ATTITUDE gère toute la logistique : transport, douanes, coordination locale. Un seul interlocuteur pour tout gérer, c'est un gain de temps et de sérénité considérable.",
    author: "Caroline Petit",
    role: "Directrice International",
    company: "Groupe LVMH",
    companyType: "Luxe",
    location: "Paris",
    rating: 5,
    projectType: "International",
    photo: carolinePetitPhoto,
  },
  {
    quote: "VivaTech 2024 : 3 000m² à gérer, 48h de montage, 200 exposants. BA ATTITUDE a coordonné l'ensemble des flux techniques avec une précision militaire. Leur chef de projet était sur site 20h par jour. Impressionnant.",
    author: "Julien Moreau",
    role: "Directeur Opérations",
    company: "VivaTech Events",
    companyType: "Organisateur salon",
    location: "Paris",
    rating: 5,
    projectType: "Salon tech",
    photo: julienMoreauPhoto,
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const decorOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Animated Decorative Elements */}
      <motion.div 
        style={{ y: decorY, opacity: decorOpacity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" 
      />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            Témoignages Clients
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-card-foreground mb-4"
          >
            Ils nous font{" "}
            <span className="text-gradient-gold">confiance</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground text-lg"
          >
            Agences événementielles, entreprises B2B, institutions : découvrez les retours de nos clients sur nos prestations techniques.
          </motion.p>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 py-6 px-8 bg-card/50 border border-border rounded-2xl backdrop-blur-sm"
        >
          {[
            { value: "500+", label: "Projets réalisés" },
            { value: "100%", label: "Clients satisfaits" },
            { value: "80%", label: "Clients agences" },
            { value: "15 ans", label: "D'expérience" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, rotateX, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px -20px rgba(212, 175, 55, 0.3)"
      }}
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 flex flex-col"
    >
      {/* Header with Photo */}
      <div className="p-6 pb-4 border-b border-border">
        <div className="flex items-start gap-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
            className="relative flex-shrink-0"
          >
            <img
              src={testimonial.photo}
              alt={`Portrait de ${testimonial.author}, ${testimonial.role} chez ${testimonial.company}`}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Quote className="w-3 h-3 text-primary-foreground" />
            </div>
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-card-foreground truncate">
              {testimonial.author}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {testimonial.role}
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <Building2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-sm text-primary font-medium truncate">
                {testimonial.company}
              </span>
            </div>
          </div>
        </div>
        
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mt-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="p-6 flex-1">
        <blockquote className="text-card-foreground text-sm leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
      </div>

      {/* Footer with Tags */}
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {testimonial.projectType}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-full">
            <MapPin className="w-3 h-3" />
            {testimonial.location}
          </span>
          <span className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-full">
            {testimonial.companyType}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
