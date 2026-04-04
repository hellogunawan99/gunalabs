"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

const stats = [
  { key: "projects", value: 150 },
  { key: "clients", value: 85 },
  { key: "team", value: 45 },
  { key: "years", value: 8 },
];

const values = [
  { key: "precision", icon: Target },
  { key: "innovation", icon: Eye },
  { key: "partnership", icon: Heart },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

export function About() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-primary mb-4 block">{t("about.badge")}</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("about.subtitle")}
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{t(`about.values.${value.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`about.values.${value.key}.description`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="grid grid-cols-2 gap-4 p-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/10"
                  >
                    <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                      <Counter value={stat.value} suffix="+" />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{t(`about.stats.${stat.key}`)}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
