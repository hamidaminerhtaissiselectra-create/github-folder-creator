import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link, useSearchParams } from "react-router-dom";
import { SEOHead, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { ItemListSchema, SpeakableSchema } from "@/components/seo/WebsiteSchema";
import { ArrowRight, Calendar, User, Clock, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import blogHeaderEditorial from "@/assets/blog-header-editorial.jpg";
import blogEntrepotLogistique from "@/assets/blog-entrepot-logistique.jpg";
import blogStandDesign from "@/assets/blog-stand-design.jpg";
import blogEvenementCorporate from "@/assets/blog-evenement-corporate.jpg";
import blogConferenceInternationale from "@/assets/blog-conference-internationale.jpg";
import blogSupportTechnique from "@/assets/blog-support-technique.jpg";

const ARTICLES_PER_PAGE = 6;

const categories = ["Tous", "Salons", "Logistique", "Conseils", "International"];

const articles = [
  {
    id: "organisation-technique-salon-professionnel",
    title: "Organisation technique d'un salon professionnel : le guide complet",
    excerpt: "De la planification au démontage, découvrez les étapes clés pour réussir votre participation à un salon professionnel et optimiser votre retour sur investissement.",
    image: blogHeaderEditorial,
    category: "Salons",
    author: "Équipe BA ATTITUDE",
    date: "15 Décembre 2024",
    readTime: "8 min",
    featured: true,
  },
  {
    id: "logistique-evenementielle-internationale",
    title: "Logistique événementielle internationale : défis et solutions",
    excerpt: "Comment organiser la logistique d'un événement à l'étranger ? Transport, douanes, coordination locale : nos conseils d'experts.",
    image: blogConferenceInternationale,
    category: "International",
    author: "Équipe BA ATTITUDE",
    date: "10 Décembre 2024",
    readTime: "6 min",
    featured: false,
  },
  {
    id: "montage-demontage-stands-bonnes-pratiques",
    title: "Montage et démontage de stands : les bonnes pratiques",
    excerpt: "Optimisez vos temps de montage et démontage grâce à nos conseils issus de 15 ans d'expérience sur les plus grands salons.",
    image: blogEntrepotLogistique,
    category: "Conseils",
    author: "Équipe BA ATTITUDE",
    date: "5 Décembre 2024",
    readTime: "5 min",
    featured: false,
  },
  {
    id: "tendances-stands-2024",
    title: "Tendances des stands d'exposition en 2024",
    excerpt: "Éco-conception, technologie immersive, espaces modulables : les grandes tendances qui transforment les stands sur les salons professionnels.",
    image: blogStandDesign,
    category: "Salons",
    author: "Équipe BA ATTITUDE",
    date: "28 Novembre 2024",
    readTime: "7 min",
    featured: false,
  },
  {
    id: "choisir-prestataire-evenementiel",
    title: "Comment choisir son prestataire événementiel B2B ?",
    excerpt: "Les critères essentiels pour sélectionner un partenaire fiable pour vos salons et événements professionnels.",
    image: blogEvenementCorporate,
    category: "Conseils",
    author: "Équipe BA ATTITUDE",
    date: "20 Novembre 2024",
    readTime: "4 min",
    featured: false,
  },
  {
    id: "securite-salons-professionnels",
    title: "Sécurité sur les salons professionnels : normes et obligations",
    excerpt: "Réglementation, normes ERP, équipements obligatoires : tout ce que vous devez savoir sur la sécurité lors de vos événements.",
    image: blogSupportTechnique,
    category: "Logistique",
    author: "Équipe BA ATTITUDE",
    date: "15 Novembre 2024",
    readTime: "6 min",
    featured: false,
  },
];

const blogBreadcrumbs = [
  { name: "Accueil", url: "https://baattitude.fr/" },
  { name: "Blog", url: "https://baattitude.fr/blog" },
];

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("Tous");
  
  // Pagination state from URL
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  
  const filteredArticles = activeCategory === "Tous" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);
  
  const featuredArticle = filteredArticles.find(a => a.featured);
  const allRegularArticles = filteredArticles.filter(a => !a.featured);
  
  // Pagination calculations
  const totalPages = Math.ceil(allRegularArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const regularArticles = allRegularArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
  
  // Navigation functions
  const goToPage = (page: number) => {
    if (page === 1) {
      searchParams.delete('page');
    } else {
      searchParams.set('page', page.toString());
    }
    setSearchParams(searchParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Articles for ItemList schema
  const articlesSchemaData = articles.map(article => ({
    name: article.title,
    url: `https://baattitude.fr/blog/${article.id}`,
    description: article.excerpt
  }));
  
  // Canonical URL for pagination
  const canonicalUrl = currentPage === 1 
    ? "https://baattitude.fr/blog" 
    : `https://baattitude.fr/blog?page=${currentPage}`;

  return (
    <Layout>
      <SEOHead
        title={currentPage === 1 
          ? "Blog Événementiel B2B | Conseils Salons Professionnels - BA ATTITUDE"
          : `Blog Événementiel B2B - Page ${currentPage} | BA ATTITUDE`}
        description="Conseils d'experts, bonnes pratiques et actualités du secteur événementiel B2B. Guides pour réussir vos salons professionnels et événements corporate."
        canonical={canonicalUrl}
        ogUrl={canonicalUrl}
        ogImage="https://baattitude.fr/og-blog.jpg"
        ogType="website"
      />
      {/* SEO Pagination Links */}
      <Helmet>
        {currentPage > 1 && (
          <link rel="prev" href={currentPage === 2 ? "https://baattitude.fr/blog" : `https://baattitude.fr/blog?page=${currentPage - 1}`} />
        )}
        {currentPage < totalPages && (
          <link rel="next" href={`https://baattitude.fr/blog?page=${currentPage + 1}`} />
        )}
      </Helmet>
      <BreadcrumbSchema items={blogBreadcrumbs} />
      <ItemListSchema
        name="Blog BA ATTITUDE - Ressources événementielles"
        description="Articles et guides pour réussir vos salons professionnels et événements B2B"
        items={articlesSchemaData}
      />
      <SpeakableSchema 
        cssSelector={[
          "h1",
          "h2",
          "article h3",
          ".text-muted-foreground"
        ]}
      />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              Blog & Actualités
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-card-foreground mb-6"
            >
              Ressources <span className="text-gradient-gold">événementielles</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Conseils d'experts, bonnes pratiques et actualités du secteur événementiel B2B.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-card border-y border-border sticky top-20 z-30" role="navigation" aria-label="Filtres par catégorie">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border border-primary"
                    : "bg-muted border border-border text-muted-foreground hover:border-primary/50 hover:text-card-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/blog/${featuredArticle.id}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Article à la une
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${article.id}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      width={640}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-card-foreground text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          
          {/* Pagination UI */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mt-12"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Précédent
              </Button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                      page === currentPage
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary/10"
                    }`}
                    aria-label={`Page ${page}`}
                    aria-current={page === currentPage ? "page" : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2"
              >
                Suivant
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-card-foreground mb-4"
            >
              Restez informé
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-8"
            >
              Recevez nos derniers articles et conseils directement dans votre boîte mail.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                placeholder="Votre email"
                aria-label="Adresse email pour inscription à la newsletter"
                required
                className="px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none flex-1 max-w-md"
              />
              <Button variant="gold">
                S'inscrire
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-card-foreground mb-4"
          >
            Un projet événementiel ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Contactez nos experts pour discuter de vos besoins et obtenir un devis personnalisé.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Demander un devis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
