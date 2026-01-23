import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      {/* Animated Decorative Elements - Hidden from screen readers */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        role="presentation"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </motion.div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        aria-hidden="true"
        role="presentation"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        aria-hidden="true"
        role="presentation"
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          style={{ scale }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            Votre Projet
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-card-foreground mb-6"
          >
            Prêt à créer un{" "}
            <span className="text-gradient-gold">événement mémorable</span> ?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Contactez-nous pour discuter de votre projet. Notre équipe d'experts 
            est prête à transformer votre vision en réalité.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" asChild className="group">
              <Link to="/contact">
                Demander un Devis
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm"
          >
            <motion.a
              href="tel:+33601591920"
              whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
              className="flex items-center gap-2 text-muted-foreground transition-colors"
              aria-label="Appeler BA Attitude au 06 01 59 19 20"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>06 01 59 19 20</span>
            </motion.a>
            <motion.a
              href="mailto:contact@baattitude.fr"
              whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
              className="flex items-center gap-2 text-muted-foreground transition-colors"
              aria-label="Envoyer un email à BA Attitude"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>contact@baattitude.fr</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
