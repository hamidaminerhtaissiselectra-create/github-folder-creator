import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Cookie, Settings, Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie-consent");
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // localStorage not available (iframe restrictions)
      console.warn("localStorage not available for cookie consent");
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    try {
      localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    } catch (e) {
      // Ignore storage errors
    }
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false };
    try {
      localStorage.setItem("cookie-consent", JSON.stringify(necessaryOnly));
    } catch (e) {
      // Ignore storage errors
    }
    setIsVisible(false);
  };

  const savePreferences = () => {
    try {
      localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    } catch (e) {
      // Ignore storage errors
    }
    setIsVisible(false);
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="p-6 pb-4 border-b border-border">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-card-foreground">
                        Gestion des cookies
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Nous respectons votre vie privée
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={acceptNecessary}
                    className="text-muted-foreground hover:text-card-foreground transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {!showSettings ? (
                  <>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      BA ATTITUDE utilise des cookies pour améliorer votre expérience de navigation, 
                      analyser le trafic du site et personnaliser le contenu. Vous pouvez accepter 
                      tous les cookies ou personnaliser vos préférences.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button variant="hero" onClick={acceptAll}>
                        <Shield className="w-4 h-4 mr-2" />
                        Accepter tout
                      </Button>
                      <Button variant="outline" onClick={() => setShowSettings(true)}>
                        <Settings className="w-4 h-4 mr-2" />
                        Personnaliser
                      </Button>
                      <Button variant="ghost" onClick={acceptNecessary}>
                        Refuser les optionnels
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {/* Cookies nécessaires */}
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-card-foreground">Cookies essentiels</h4>
                          <p className="text-sm text-muted-foreground">
                            Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.
                          </p>
                        </div>
                        <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                          <div className="w-4 h-4 bg-background rounded-full" />
                        </div>
                      </div>

                      {/* Cookies analytiques */}
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-card-foreground">Cookies analytiques</h4>
                          <p className="text-sm text-muted-foreground">
                            Nous aident à comprendre comment vous utilisez le site.
                          </p>
                        </div>
                        <button
                          onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.analytics ? 'bg-primary justify-end' : 'bg-border justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-background rounded-full" />
                        </button>
                      </div>

                      {/* Cookies marketing */}
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-card-foreground">Cookies marketing</h4>
                          <p className="text-sm text-muted-foreground">
                            Permettent de vous proposer des contenus personnalisés.
                          </p>
                        </div>
                        <button
                          onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.marketing ? 'bg-primary justify-end' : 'bg-border justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-background rounded-full" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button variant="hero" onClick={savePreferences}>
                        Enregistrer mes choix
                      </Button>
                      <Button variant="ghost" onClick={() => setShowSettings(false)}>
                        Retour
                      </Button>
                    </div>
                  </>
                )}

                {/* Link to privacy policy */}
                <p className="text-xs text-muted-foreground mt-4">
                  En savoir plus dans notre{" "}
                  <Link to="/mentions-legales" className="text-primary hover:underline">
                    politique de confidentialité
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
