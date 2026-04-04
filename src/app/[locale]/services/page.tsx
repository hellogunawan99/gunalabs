"use client";

import { services } from "@/data/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Layers, Brain, Cpu, Package, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Layers,
  Brain,
  Cpu,
  Package,
};

const processSteps = [
  { step: 1, key: "discovery" },
  { step: 2, key: "strategy" },
  { step: 3, key: "development" },
  { step: 4, key: "deployment" },
];

export default function ServicesPage() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary mb-4 block">{t("servicesPage.title")}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t("servicesPage.subtitle")}
            </h1>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Code;
              const isExpanded = expandedId === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'border-primary/30' : ''}`}>
                    <CardHeader
                      className="cursor-pointer"
                      onClick={() => setExpandedId(isExpanded ? null : service.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{t(`services.items.${service.id}.title`)}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                              {t(`services.items.${service.id}.description`)}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-6 w-6 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </CardHeader>

                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <CardContent className="pt-0">
                        <div className="border-t border-border/10 pt-6">
                          <h4 className="font-semibold mb-4">{t("servicesPage.whatWeOffer")}</h4>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-3.5 h-3.5 text-primary" />
                                </div>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6">
                            <Link href="/contact">
                              <Button className="group">
                                {t("servicesPage.cta.cta")}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-secondary mb-4 block">{t("servicesPage.process.badge")}</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {t("servicesPage.process.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("servicesPage.process.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t(`servicesPage.process.steps.${step.key}`)}</h3>
                  <p className="text-muted-foreground">{t(`servicesPage.process.steps.${step.key}Desc`)}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t("servicesPage.cta.title")}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              {t("servicesPage.cta.subtitle")}
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="group">
                {t("servicesPage.cta.cta")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
