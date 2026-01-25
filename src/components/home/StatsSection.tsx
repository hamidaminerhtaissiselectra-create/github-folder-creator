import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Années d'expérience", description: "Au service de l'événementiel" },
  { value: 500, suffix: "+", label: "Événements réalisés", description: "Pour des marques prestigieuses" },
  { value: 80, suffix: "%", label: "Clients agences", description: "Partenaires de confiance" },
  { value: 12, suffix: "", label: "Pays d'intervention", description: "Une expertise internationale" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={sectionRef} className="py-20 bg-card border-y border-border relative overflow-hidden">
      {/* Animated background gradient - Decorative */}
      <motion.div 
        style={{ x: backgroundX }}
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="sr-only">BA ATTITUDE en chiffres clés</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ y: -5 }}
              className="text-center group cursor-default"
            >
              <motion.div 
                className="text-4xl md:text-6xl font-display font-bold text-primary mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <h3 className="text-lg font-semibold text-card-foreground mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
