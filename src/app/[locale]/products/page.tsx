"use client";

import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, HardDrive, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const categories = ["all", "hardware", "digital"] as const;
type Category = (typeof categories)[number];

export default function ProductsPage() {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filteredProducts = products.filter(
    (product) => activeCategory === "all" || product.category.toLowerCase() === activeCategory
  );

  const selected = products.find((p) => p.id === selectedProduct);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-secondary mb-4 block">{t("productsPage.badge")}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t("productsPage.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("productsPage.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">{t("productsPage.filter")}</span>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5",
                    activeCategory === category
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                  )}
                >
                  {category === "all" && <Sparkles className="w-4 h-4" />}
                  {category === "hardware" && <HardDrive className="w-4 h-4" />}
                  {t(`products.categories.${category}`)}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(product.id)}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t("products.learnMore")}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm",
                          product.category === "Hardware"
                            ? "bg-amber-500/90 text-white"
                            : "bg-blue-500/90 text-white"
                        )}
                      >
                        {t(`products.categories.${product.category.toLowerCase()}`)}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <Link
                        href="/contact"
                        className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t("products.requestDemo")}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-video">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold">{selected.name}</h2>
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    selected.category === "Hardware"
                      ? "bg-amber-500/10 text-amber-600"
                      : "bg-blue-500/10 text-blue-600"
                  )}
                >
                  {t(`products.categories.${selected.category.toLowerCase()}`)}
                </span>
              </div>
              <p className="text-muted-foreground mb-6">{selected.description}</p>
              
              <h3 className="font-semibold mb-3">{t("products.specs")}</h3>
              <ul className="space-y-2 mb-6">
                {selected.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{selected.price}</span>
                <Link href="/contact" onClick={() => setSelectedProduct(null)}>
                  <Button>{t("products.getStarted")}</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <section className="py-24 bg-gradient-to-r from-secondary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t("productsPage.getStarted")}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              {t("productsPage.subtitleCta")}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 shadow-xl group">
                {t("productsPage.cta")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
