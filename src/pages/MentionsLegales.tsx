import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEOHead, BreadcrumbSchema } from "@/components/seo/StructuredData";

const mentionsBreadcrumbs = [
  { name: "Accueil", url: "https://baattitude.fr/" },
  { name: "Mentions légales", url: "https://baattitude.fr/mentions-legales" },
];

export default function MentionsLegales() {
  return (
    <Layout>
      <SEOHead
        title="Mentions Légales | BA ATTITUDE - Prestataire Événementiel"
        description="Mentions légales du site BA ATTITUDE. Informations sur l'éditeur, l'hébergement, la propriété intellectuelle et la protection des données personnelles."
        canonical="https://baattitude.fr/mentions-legales"
        noindex={true}
      />
      <BreadcrumbSchema items={mentionsBreadcrumbs} />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-card-foreground mb-12"
            >
              Mentions <span className="text-gradient-gold">Légales</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-invert max-w-none"
            >
              <div className="space-y-8 text-muted-foreground">
                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    1. Éditeur du site
                  </h2>
                  <p>
                    <strong className="text-card-foreground">BA Attitude</strong><br />
                    16 Rue des Pendants de La Queue-en-Brie<br />
                    77340 Pontault-Combault<br />
                    France
                  </p>
                  <p className="mt-4">
                    <strong className="text-card-foreground">Téléphone :</strong> 01 77 00 09 52 / 06 01 59 19 20<br />
                    <strong className="text-card-foreground">Email :</strong> contact@baattitude.fr
                  </p>
                </section>

                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    2. Hébergement
                  </h2>
                  <p>
                    Le site baattitude.fr est hébergé par :<br />
                    <strong className="text-card-foreground">Lovable</strong><br />
                    Service d'hébergement web
                  </p>
                </section>

                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    3. Propriété intellectuelle
                  </h2>
                  <p>
                    L'ensemble des contenus présents sur le site baattitude.fr (textes, images, 
                    graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive 
                    de BA Attitude ou de ses partenaires.
                  </p>
                  <p className="mt-4">
                    Toute reproduction, représentation, modification, publication, adaptation 
                    de tout ou partie des éléments du site, quel que soit le moyen ou le procédé 
                    utilisé, est interdite, sauf autorisation écrite préalable de BA Attitude.
                  </p>
                </section>

                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    4. Protection des données personnelles (RGPD)
                  </h2>
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD) 
                    et à la loi Informatique et Libertés, vous disposez des droits suivants 
                    concernant vos données personnelles :
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong className="text-card-foreground">Droit d'accès :</strong> obtenir la confirmation que des données vous concernant sont traitées</li>
                    <li><strong className="text-card-foreground">Droit de rectification :</strong> demander la correction de données inexactes</li>
                    <li><strong className="text-card-foreground">Droit à l'effacement :</strong> demander la suppression de vos données</li>
                    <li><strong className="text-card-foreground">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                    <li><strong className="text-card-foreground">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                    <li><strong className="text-card-foreground">Droit de limitation :</strong> demander la limitation du traitement</li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-card-foreground">Responsable du traitement :</strong> BA Attitude<br />
                    <strong className="text-card-foreground">Finalité du traitement :</strong> Gestion des demandes de devis, suivi commercial, envoi d'informations<br />
                    <strong className="text-card-foreground">Base légale :</strong> Consentement et intérêt légitime<br />
                    <strong className="text-card-foreground">Durée de conservation :</strong> 3 ans à compter du dernier contact
                  </p>
                  <p className="mt-4">
                    Pour exercer vos droits, contactez-nous à : <strong className="text-primary">contact@baattitude.fr</strong>
                  </p>
                  <p className="mt-4">
                    Vous pouvez également introduire une réclamation auprès de la CNIL 
                    (Commission Nationale de l'Informatique et des Libertés) : 
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">www.cnil.fr</a>
                  </p>
                </section>

                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    5. Cookies
                  </h2>
                  <p>
                    Le site baattitude.fr peut être amené à utiliser des cookies pour améliorer 
                    l'expérience utilisateur et réaliser des statistiques de visite.
                  </p>
                  <p className="mt-4">
                    Vous pouvez à tout moment désactiver les cookies en configurant votre navigateur.
                  </p>
                </section>

                <section className="bg-card border border-border rounded-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    6. Limitation de responsabilité
                  </h2>
                  <p>
                    BA Attitude ne pourra être tenue responsable des dommages directs et indirects 
                    causés au matériel de l'utilisateur, lors de l'accès au site baattitude.fr, 
                    et résultant soit de l'utilisation d'un matériel ne répondant pas aux 
                    spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
