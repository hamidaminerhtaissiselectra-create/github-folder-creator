import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowRight } from "lucide-react";
import { SEOHead } from "@/components/seo/StructuredData";

export default function NotFound() {
  return (
    <Layout>
      <SEOHead
        title="Page non trouvée | BA ATTITUDE"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil pour découvrir nos services événementiels."
        canonical="https://baattitude.fr/404"
      />
      <section className="min-h-[80vh] flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            aria-hidden="true"
          >
            <span className="text-9xl font-display font-bold text-primary/20">
              404
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-4"
          >
            Page non trouvée
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mb-8 max-w-md mx-auto"
          >
            La page que vous recherchez n'existe pas ou a été déplacée.
          </motion.p>
          
          {/* Suggested links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="gold" asChild>
              <Link to="/">
                <Home className="w-5 h-5 mr-2" aria-hidden="true" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">
                Nous contacter
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          {/* Helpful links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <Search className="w-4 h-4" aria-hidden="true" />
              Pages populaires
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link 
                to="/services"
                className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/realisations"
                className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Réalisations
              </Link>
              <Link 
                to="/blog"
                className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="/zones-intervention"
                className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Zones d'intervention
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
