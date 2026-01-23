import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Palette, Wrench, Sparkles } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Brief & Écoute",
    description: "Nous prenons le temps de comprendre votre vision, vos objectifs et vos contraintes pour créer un projet sur mesure.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Conception Créative",
    description: "Nos designers élaborent des concepts uniques avec visualisations 3D et plans détaillés pour validation.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Production & Installation",
    description: "Nos artisans fabriquent chaque élément dans nos ateliers. L'installation est assurée par nos équipes expertes.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "L'Événement & Démontage",
    description: "Nous restons présents pendant votre événement et assurons un démontage soigné avec remise en état des lieux.",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "100%"]);

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Animated vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-border">
        <motion.div 
          style={{ height: lineHeight }}
          className="w-full bg-gradient-to-b from-primary via-primary to-transparent"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
          >
            Notre Méthodologie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-card-foreground"
          >
            Un processus <span className="text-gradient-gold">éprouvé</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const stepRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    index % 2 === 0 ? [-50, 0] : [50, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={stepRef}
      style={{ opacity }}
      className={`flex items-center gap-8 mb-16 last:mb-0 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <motion.div 
        style={{ x, scale }}
        className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}
      >
        <motion.span 
          className="text-7xl font-display font-bold text-primary/10 block"
          whileInView={{ 
            opacity: [0, 0.1],
            y: [20, 0]
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {step.number}
        </motion.span>
        <h3 className="text-2xl font-display font-semibold text-card-foreground mb-3 -mt-4">
          {step.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </motion.div>

      <motion.div 
        className="relative z-10"
        whileInView={{ scale: [0.5, 1], rotate: [180, 0] }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: index * 0.1 
        }}
      >
        <motion.div 
          className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center"
          whileHover={{ 
            scale: 1.15,
            boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <step.icon className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>

      <div className="flex-1" />
    </motion.div>
  );
}
