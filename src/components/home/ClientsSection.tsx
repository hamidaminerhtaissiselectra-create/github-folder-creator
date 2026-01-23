import { motion } from "framer-motion";

const clients = [
  "DIOR",
  "BVLGARI",
  "CHAUMET",
  "FENDI",
  "GIVENCHY",
  "GOOGLE",
  "ARAMCO",
  "LANCEL",
  "MERCIER",
  "KÉRASTASE",
];

export function ClientsSection() {
  return (
    <section className="py-20 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Ils nous font confiance
          </span>
        </motion.div>

        {/* Clients Marquee */}
        <div className="relative overflow-hidden" role="marquee" aria-label="Nos clients de référence">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted to-transparent z-10" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted to-transparent z-10" aria-hidden="true" />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-16 animate-marquee whitespace-nowrap"
          >
            {[...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-display font-light text-muted-foreground/50 hover:text-primary transition-colors duration-300"
              >
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
