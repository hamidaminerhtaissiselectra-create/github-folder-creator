import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  Calendar, 
  User,
  Send,
  Loader2,
  Phone,
  Mail,
  Briefcase,
  FileText,
  Shield,
  Clock
} from "lucide-react";
import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  projectType: z.string().min(1, "Veuillez sélectionner un type de projet"),
  location: z.string().min(2, "La ville est requise").max(100),
  venue: z.string().max(200).optional(),
  country: z.string().min(1),
  eventDate: z.string().min(1, "La date de l'événement est requise"),
  montageDate: z.string().optional(),
  demontageDate: z.string().optional(),
  name: z.string().min(2, "Le nom est requis").max(100),
  email: z.string().email("Email invalide").max(255),
  phone: z.string().regex(/^[\d\s\+\-\.]+$/, "Numéro invalide").optional().or(z.literal("")),
  company: z.string().max(150).optional(),
  message: z.string().max(2000).optional(),
  standSize: z.string().optional(),
  budget: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const projectTypes = [
  { id: "salon", label: "Salon professionnel", description: "Foire, exposition, trade show", icon: Building2 },
  { id: "congres", label: "Congrès / Convention", description: "Événement corporate, séminaire", icon: Briefcase },
  { id: "montage", label: "Montage / Démontage", description: "Installation de stand ou décor", icon: FileText },
  { id: "logistique", label: "Logistique", description: "Transport, stockage, manutention", icon: MapPin },
  { id: "international", label: "Événement international", description: "Projet hors France", icon: Shield },
  { id: "autre", label: "Autre projet", description: "Demande spécifique", icon: Calendar },
];

const standSizes = [
  { value: "", label: "Sélectionner..." },
  { value: "9-20", label: "9 à 20 m²" },
  { value: "20-50", label: "20 à 50 m²" },
  { value: "50-100", label: "50 à 100 m²" },
  { value: "100-200", label: "100 à 200 m²" },
  { value: "200+", label: "Plus de 200 m²" },
];

const budgetRanges = [
  { value: "", label: "Sélectionner..." },
  { value: "5000", label: "Moins de 5 000 €" },
  { value: "5000-15000", label: "5 000 € à 15 000 €" },
  { value: "15000-30000", label: "15 000 € à 30 000 €" },
  { value: "30000-50000", label: "30 000 € à 50 000 €" },
  { value: "50000+", label: "Plus de 50 000 €" },
];

const steps = [
  { id: 1, label: "Type de projet", icon: Building2 },
  { id: 2, label: "Lieu & Détails", icon: MapPin },
  { id: 3, label: "Calendrier", icon: Calendar },
  { id: 4, label: "Vos coordonnées", icon: User },
];

export function MultiStepQuoteForm() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    location: "",
    venue: "",
    country: "France",
    eventDate: "",
    montageDate: "",
    demontageDate: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    standSize: "",
    budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleProjectTypeSelect = (type: string) => {
    setFormData(prev => ({ ...prev, projectType: type }));
    if (errors.projectType) {
      setErrors(prev => ({ ...prev, projectType: "" }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.projectType) {
          newErrors.projectType = "Veuillez sélectionner un type de projet";
        }
        break;
      case 2:
        if (!formData.location || formData.location.length < 2) {
          newErrors.location = "La ville est requise";
        }
        break;
      case 3:
        if (!formData.eventDate) {
          newErrors.eventDate = "La date de l'événement est requise";
        }
        break;
      case 4:
        if (!formData.name || formData.name.length < 2) {
          newErrors.name = "Le nom est requis";
        }
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Email invalide";
        }
        if (formData.phone && !/^[\d\s\+\-\.]+$/.test(formData.phone)) {
          newErrors.phone = "Numéro invalide";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType !== "";
      case 2:
        return formData.location !== "";
      case 3:
        return formData.eventDate !== "";
      case 4:
        return formData.name !== "" && formData.email !== "";
      default:
        return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(4)) return;
    
    setIsSubmitting(true);

    // Simulate form submission (will be replaced with Cloud when activated)
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Demande envoyée avec succès !",
      description: "Nous vous répondrons sous 24h avec un devis personnalisé.",
    });

    // Reset form
    setFormData({
      projectType: "",
      location: "",
      venue: "",
      country: "France",
      eventDate: "",
      montageDate: "",
      demontageDate: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      standSize: "",
      budget: "",
    });
    setCurrentStep(1);
    setIsSubmitting(false);
  };

  const getProjectTypeLabel = () => {
    const type = projectTypes.find(t => t.id === formData.projectType);
    return type?.label || "";
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
      {/* Progress Header */}
      <div className="bg-muted/50 border-b border-border p-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: currentStep >= step.id ? "hsl(var(--primary))" : "hsl(var(--muted))",
                    borderColor: currentStep >= step.id ? "hsl(var(--primary))" : "hsl(var(--border))",
                    scale: currentStep === step.id ? 1.1 : 1,
                  }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    currentStep >= step.id ? "text-primary-foreground shadow-lg shadow-primary/30" : "text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </motion.div>
                <span className={`text-xs mt-2 hidden md:block font-medium ${
                  currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                }`}>
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-16 lg:w-24 h-1 bg-border mx-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={false}
                    animate={{ width: currentStep > step.id ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="h-full bg-primary"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6 lg:p-10">
        <AnimatePresence mode="wait">
          {/* Step 1: Type de projet */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                  Quel est votre projet ?
                </h3>
                <p className="text-muted-foreground">
                  Sélectionnez le type d'événement pour lequel vous avez besoin de nos services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <motion.button
                      key={type.id}
                      type="button"
                      onClick={() => handleProjectTypeSelect(type.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-5 rounded-xl border-2 text-left transition-all duration-300 ${
                        formData.projectType === type.id
                          ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          formData.projectType === type.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-semibold text-card-foreground block">{type.label}</span>
                          <span className="text-sm text-muted-foreground">{type.description}</span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {errors.projectType && (
                <p className="text-sm text-destructive">{errors.projectType}</p>
              )}
            </motion.div>
          )}

          {/* Step 2: Lieu & Détails */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                  Où se déroule l'événement ?
                </h3>
                <p className="text-muted-foreground">
                  Indiquez-nous le lieu et les détails de votre projet.
                </p>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Pays <span className="text-destructive">*</span>
                    </Label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      aria-label="Sélectionner le pays de l'événement"
                      className="flex h-11 w-full rounded-lg border border-border bg-muted px-4 py-2 text-card-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    >
                      <option value="France">France</option>
                      <option value="Belgique">Belgique</option>
                      <option value="Suisse">Suisse</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Allemagne">Allemagne</option>
                      <option value="Espagne">Espagne</option>
                      <option value="Italie">Italie</option>
                      <option value="Royaume-Uni">Royaume-Uni</option>
                      <option value="Pays-Bas">Pays-Bas</option>
                      <option value="UAE">Émirats Arabes Unis</option>
                      <option value="Autre">Autre pays</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      Ville <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Ex: Paris, Lyon, Marseille..."
                      className={`bg-muted border-border focus:border-primary h-11 ${errors.location ? "border-destructive" : ""}`}
                    />
                    {errors.location && (
                      <p className="text-sm text-destructive">{errors.location}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="venue">Lieu / Parc d'exposition</Label>
                  <Input
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    placeholder="Ex: Paris Expo Porte de Versailles, Villepinte, Eurexpo Lyon..."
                    className="bg-muted border-border focus:border-primary h-11"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="standSize">Surface du stand</Label>
                    <select
                      id="standSize"
                      name="standSize"
                      value={formData.standSize}
                      onChange={handleChange}
                      aria-label="Sélectionner la surface du stand"
                      className="flex h-11 w-full rounded-lg border border-border bg-muted px-4 py-2 text-card-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    >
                      {standSizes.map((size) => (
                        <option key={size.value} value={size.value}>{size.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget estimé</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      aria-label="Sélectionner le budget estimé"
                      className="flex h-11 w-full rounded-lg border border-border bg-muted px-4 py-2 text-card-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Calendrier */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                  Quand a lieu l'événement ?
                </h3>
                <p className="text-muted-foreground">
                  Précisez les dates pour que nous puissions planifier notre intervention.
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Date de l'événement <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className={`bg-muted border-border focus:border-primary h-11 ${errors.eventDate ? "border-destructive" : ""}`}
                  />
                  {errors.eventDate && (
                    <p className="text-sm text-destructive">{errors.eventDate}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="montageDate" className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      Date de montage souhaitée
                    </Label>
                    <Input
                      id="montageDate"
                      name="montageDate"
                      type="date"
                      value={formData.montageDate}
                      onChange={handleChange}
                      className="bg-muted border-border focus:border-primary h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="demontageDate" className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      Date de démontage souhaitée
                    </Label>
                    <Input
                      id="demontageDate"
                      name="demontageDate"
                      type="date"
                      value={formData.demontageDate}
                      onChange={handleChange}
                      className="bg-muted border-border focus:border-primary h-11"
                    />
                  </div>
                </div>

                {/* Quick info box */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
                  <h4 className="font-medium text-card-foreground mb-2">💡 Conseil</h4>
                  <p className="text-sm text-muted-foreground">
                    Pour une organisation optimale, nous recommandons de nous contacter au minimum 2 semaines avant l'événement. 
                    Pour les projets complexes ou internationaux, prévoyez 6 à 8 semaines.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Contact */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                  Vos coordonnées
                </h3>
                <p className="text-muted-foreground">
                  Comment pouvons-nous vous recontacter ?
                </p>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Nom complet <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Prénom Nom"
                      className={`bg-muted border-border focus:border-primary h-11 ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      Société / Agence
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nom de votre société"
                      className="bg-muted border-border focus:border-primary h-11"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className={`bg-muted border-border focus:border-primary h-11 ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 00 00 00 00"
                      className={`bg-muted border-border focus:border-primary h-11 ${errors.phone ? "border-destructive" : ""}`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    Détails complémentaires
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins spécifiques, contraintes particulières..."
                    rows={4}
                    className="bg-muted border-border focus:border-primary resize-none"
                  />
                </div>
              </div>

              {/* Enhanced Summary */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                <h4 className="font-display font-bold text-card-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Récapitulatif de votre demande
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-muted-foreground block text-xs uppercase tracking-wide mb-1">Type de projet</span>
                      <span className="text-card-foreground font-medium">{getProjectTypeLabel()}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-muted-foreground block text-xs uppercase tracking-wide mb-1">Lieu</span>
                      <span className="text-card-foreground font-medium">{formData.location}, {formData.country}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-muted-foreground block text-xs uppercase tracking-wide mb-1">Date de l'événement</span>
                      <span className="text-card-foreground font-medium">
                        {formData.eventDate ? new Date(formData.eventDate).toLocaleDateString('fr-FR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        }) : '-'}
                      </span>
                    </div>
                  </div>
                  {formData.venue && (
                    <div className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border">
                      <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-muted-foreground block text-xs uppercase tracking-wide mb-1">Site / Parc</span>
                        <span className="text-card-foreground font-medium">{formData.venue}</span>
                      </div>
                    </div>
                  )}
                  {formData.standSize && (
                    <div className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-muted-foreground block text-xs uppercase tracking-wide mb-1">Surface</span>
                        <span className="text-card-foreground font-medium">{standSizes.find(s => s.value === formData.standSize)?.label || formData.standSize}</span>
                      </div>
                    </div>
                  )}
                  {formData.budget && (
                    <div className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border">
                      <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-muted-foreground block text-xs uppercase tracking-wide mb-1">Budget</span>
                        <span className="text-card-foreground font-medium">{budgetRanges.find(b => b.value === formData.budget)?.label || formData.budget}</span>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  ✓ Vérifiez ces informations avant d'envoyer votre demande
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Précédent
          </Button>

          {currentStep < 4 ? (
            <Button
              type="button"
              variant="gold"
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex items-center gap-2 min-w-[140px]"
            >
              Suivant
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="gold"
              disabled={!canProceed() || isSubmitting}
              className="flex items-center gap-2 min-w-[180px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          )}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Données sécurisées
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Réponse sous 24h
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Devis gratuit
          </span>
        </div>
      </form>
    </div>
  );
}
