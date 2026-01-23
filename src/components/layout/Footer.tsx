import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight, Linkedin, Instagram, Facebook } from "lucide-react";

const services = [
  { name: "Salons Professionnels", href: "/services/salons-professionnels" },
  { name: "Support Technique", href: "/services/support-technique" },
  { name: "Montage & Démontage", href: "/services/montage-demontage" },
  { name: "Logistique Terrain", href: "/services/logistique-terrain" },
  { name: "International", href: "/international" },
];

const zones = [
  { name: "Paris & Île-de-France", href: "/zones/ile-de-france" },
  { name: "Lyon & Rhône-Alpes", href: "/zones/auvergne-rhone-alpes" },
  { name: "Marseille & PACA", href: "/zones/provence-alpes-cote-azur" },
  { name: "Bordeaux", href: "/zones/nouvelle-aquitaine" },
  { name: "Toutes les zones", href: "/zones-intervention" },
];

const links = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Mentions Légales", href: "/mentions-legales" },
  { name: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold text-primary">
                BA
              </span>
              <span className="text-2xl font-display font-light text-card-foreground ml-1">
                ATTITUDE
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Spécialiste des prestations techniques et logistiques pour salons professionnels, 
              foires et événements B2B en France et à l'international.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <a href="https://www.linkedin.com/company/baattitude" target="_blank" rel="noopener noreferrer" aria-label="Suivre BA ATTITUDE sur LinkedIn" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/baattitude.events" target="_blank" rel="noopener noreferrer" aria-label="Suivre BA ATTITUDE sur Instagram" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com/baattitude.events" target="_blank" rel="noopener noreferrer" aria-label="Suivre BA ATTITUDE sur Facebook" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">
                France · Europe · International
              </span>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {service.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Zones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Zones d'intervention
            </h3>
            <ul className="space-y-3">
              {zones.map((zone) => (
                <li key={zone.name}>
                  <Link
                    to={zone.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {zone.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  16 Rue des Pendants<br />
                  77340 Pontault-Combault<br />
                  France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+33601591920"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  06 01 59 19 20
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@baattitude.fr"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@baattitude.fr
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BA Attitude. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground">
            Expert en prestations techniques pour salons professionnels depuis plus de 15 ans
          </p>
        </motion.div>
      </div>
    </footer>
  );
}