import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TrailingSlashRedirect } from "./components/utils/TrailingSlashRedirect";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Realisations from "./pages/Realisations";
import RealisationDetail from "./pages/RealisationDetail";
import International from "./pages/International";
import ZonesIntervention from "./pages/ZonesIntervention";
import ZoneIntervention from "./pages/ZoneIntervention";
import VilleIntervention from "./pages/VilleIntervention";
import ParisArrondissement from "./pages/ParisArrondissement";
import ParisBanlieue from "./pages/ParisBanlieue";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TrailingSlashRedirect />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/realisations/:projectId" element={<RealisationDetail />} />
          <Route path="/international" element={<International />} />
          <Route path="/zones-intervention" element={<ZonesIntervention />} />
          <Route path="/zones/:zoneId" element={<ZoneIntervention />} />
          <Route path="/ville/:villeId" element={<VilleIntervention />} />
          <Route path="/paris/:arrondissementId" element={<ParisArrondissement />} />
          <Route path="/banlieue/:villeId" element={<ParisBanlieue />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleId" element={<BlogArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;