import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { ScrollToTopButton } from "./ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip Link for accessibility */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Aller au contenu principal
      </a>
      
      <Header />
      <AnimatePresence mode="wait">
        <motion.main 
          id="main-content"
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-1"
          role="main"
          tabIndex={-1}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}
