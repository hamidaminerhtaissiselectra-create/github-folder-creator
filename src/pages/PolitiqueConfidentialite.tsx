import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEOHead, BreadcrumbSchema } from "@/components/seo/StructuredData";

const breadcrumbs = [
  { name: "Accueil", url: "https://baattitude.fr/" },
  { name: "Politique de confidentialité", url: "https://baattitude.fr/politique-confidentialite" },
];

export default function PolitiqueConfidentialite() {
  return (
    <Layout>
      <SEOHead
        title="Politique de Confidentialité | BA ATTITUDE"
        description="Politique de confidentialité et protection des données personnelles de BA Attitude. Découvrez comment nous collectons, utilisons et protégeons vos informations."
        canonical="https://baattitude.fr/politique-confidentialite"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-card-foreground mb-8">
              Politique de <span className="text-gradient-gold">Confidentialité</span>
            </h1>

            <div className="prose prose-lg prose-invert max-w-none space-y-8">
              
              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  1. Responsable du traitement
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le responsable du traitement des données personnelles est :<br />
                  <strong>BA ATTITUDE</strong><br />
                  Adresse : Paris, France<br />
                  Email : contact@baattitude.fr<br />
                  Téléphone : +33 6 01 59 19 20
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  2. Données collectées
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dans le cadre de notre activité, nous collectons les données suivantes :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Données d'identification</strong> : nom, prénom, fonction, entreprise</li>
                  <li><strong>Données de contact</strong> : adresse email, numéro de téléphone</li>
                  <li><strong>Données relatives aux projets</strong> : type d'événement, budget estimé, dates</li>
                  <li><strong>Données de navigation</strong> : adresse IP, pages visitées, durée de visite (via cookies analytiques avec consentement)</li>
                </ul>
              </section>

              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  3. Finalités du traitement
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vos données personnelles sont traitées pour les finalités suivantes :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Répondre à vos demandes de devis et de contact</li>
                  <li>Établir des propositions commerciales personnalisées</li>
                  <li>Gérer notre relation client (suivi, facturation, support)</li>
                  <li>Vous informer de nos actualités et services (si consentement)</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </section>

              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  4. Base légale du traitement
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le traitement de vos données repose sur les bases légales suivantes :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li><strong>Exécution d'un contrat</strong> : traitement nécessaire à l'exécution de nos prestations</li>
                  <li><strong>Intérêt légitime</strong> : amélioration de nos services, prospection commerciale B2B</li>
                  <li><strong>Consentement</strong> : newsletters, cookies analytiques et marketing</li>
                  <li><strong>Obligation légale</strong> : conservation des données de facturation</li>
                </ul>
              </section>

              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  5. Durée de conservation
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vos données sont conservées pendant les durées suivantes :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li><strong>Données prospects</strong> : 3 ans à compter du dernier contact</li>
                  <li><strong>Données clients</strong> : durée de la relation commerciale + 5 ans</li>
                  <li><strong>Données de facturation</strong> : 10 ans (obligation légale)</li>
                  <li><strong>Cookies</strong> : 13 mois maximum</li>
                </ul>
              </section>

              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  6. Destinataires des données
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vos données peuvent être communiquées aux destinataires suivants :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Personnel habilité de BA Attitude</li>
                  <li>Sous-traitants techniques (hébergement, emailing) dans le cadre de contrats respectant le RGPD</li>
                  <li>Autorités compétentes en cas d'obligation légale</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Nous ne vendons ni ne louons vos données personnelles à des tiers.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  7. Transferts hors UE
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Certains de nos sous-traitants peuvent être situés hors de l'Union Européenne. 
                  Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place 
                  (clauses contractuelles types de la Commission Européenne, décision d'adéquation).
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  8. Vos droits
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conformément au RGPD, vous disposez des droits suivants sur vos données :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
                  <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
                  <li><strong>Droit à l'effacement</strong> : supprimer vos données (sous conditions)</li>
                  <li><strong>Droit à la limitation</strong> : restreindre le traitement</li>
                  <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition</strong> : vous opposer au traitement (prospection notamment)</li>
                  <li><strong>Droit de retrait du consentement</strong> : retirer votre consentement à tout moment</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Pour exercer ces droits, contactez-nous à : <strong>contact@baattitude.fr</strong>
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  9. Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Notre site utilise des cookies pour améliorer votre expérience. 
                  Vous pouvez gérer vos préférences via notre bandeau de cookies. 
                  Pour plus d'informations, consultez notre politique de cookies accessible depuis le bandeau.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  10. Sécurité des données
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                  pour protéger vos données contre tout accès non autorisé, modification, 
                  divulgation ou destruction : chiffrement SSL, accès restreint, sauvegardes régulières.
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  11. Réclamation
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si vous estimez que le traitement de vos données ne respecte pas la réglementation, 
                  vous pouvez adresser une réclamation à la CNIL :<br /><br />
                  <strong>Commission Nationale de l'Informatique et des Libertés</strong><br />
                  3 Place de Fontenoy, TSA 80715<br />
                  75334 Paris Cedex 07<br />
                  www.cnil.fr
                </p>
              </section>

              <section className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold text-card-foreground mb-4">
                  12. Modification de la politique
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                  La date de dernière mise à jour est indiquée ci-dessous. Nous vous invitons à consulter 
                  régulièrement cette page.
                </p>
                <p className="text-muted-foreground mt-4">
                  <em>Dernière mise à jour : 8 janvier 2025</em>
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
