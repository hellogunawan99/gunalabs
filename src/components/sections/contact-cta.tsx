"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const particleData = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: (i * 5.3 + 2) % 100,
  y: (i * 7.7 + 3) % 100,
  duration: 3 + (i % 5) * 0.4,
  delay: (i % 4) * 0.5,
}));

export function ContactCTA() {
  const t = useTranslations();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" />
      </div>

      {particleData.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
          }}
          animate={{
            y: [`${particle.y}%`, `${particle.y - 10}%`, `${particle.y}%`],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white">
          {t("contactCta.title")}
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          {t("contactCta.subtitle")}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <div className="flex-1 relative">
            <Input
              type="email"
              placeholder={t("contactCta.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
              required
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="h-14 bg-white text-primary hover:bg-white/90 shadow-xl group"
          >
            {submitted ? (
              <>
                <CheckCircle className="mr-2 h-5 w-5" />
                {t("contactCta.subscribed")}
              </>
            ) : (
              <>
                {t("contactCta.cta")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>

        <p className="text-sm text-white/60 mt-4">
          {t("contactCta.privacy")}
        </p>
      </motion.div>
    </section>
  );
}
