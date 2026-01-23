import { motion } from "framer-motion";
import { Phone, Calendar, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Appelez-nous",
    description: "Pour une réponse immédiate",
    action: "01 77 00 09 52",
    href: "tel:+33177000952",
  },
  {
    icon: Calendar,
    title: "Planifiez un RDV",
    description: "Visitez notre showroom",
    action: "Prendre rendez-vous",
    href: "#form",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Échangez en direct",
    action: "06 01 59 19 20",
    href: "https://wa.me/33601591920",
  },
];

export function ContactCTA() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center gap-4 p-6 bg-muted rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <method.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {method.description}
                </p>
                <span className="text-primary text-sm font-medium">
                  {method.action}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
