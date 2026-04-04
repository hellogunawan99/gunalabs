"use client";

import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, HardDrive } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";
import { type Locale } from "@/i18n";

const categories = ["All", "Hardware", "Digital"] as const;
type Category = (typeof categories)[number];

export function Products() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProducts = products.filter(
    (product) => activeCategory === "All" || product.category === activeCategory
  );

  return (
    <section ref={ref} className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-secondary mb-4 block">{t("products.badge")}</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {t("products.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("products.subtitle")}
          </p>

          <div className="flex justify-center gap-2">
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
                {category === "All" && <Sparkles className="w-4 h-4" />}
                {category === "Hardware" && <HardDrive className="w-4 h-4" />}
                {t(`products.categories.${category.toLowerCase()}`)}
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
              <Card className="group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
                      href={`/${locale}/products`}
                      className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors flex items-center gap-1"
                    >
                      {t("products.learnMore")}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href={`/${locale}/products`}>
            <Button size="lg" className="group">
              {t("products.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
