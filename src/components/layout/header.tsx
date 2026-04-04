"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "./language-switcher";

const navLinks = [
  { href: "", label: "home" },
  { href: "/services", label: "services" },
  { href: "/products", label: "products" },
  { href: "/contact", label: "contact" },
];

const navLabels: Record<string, string> = {
  home: "Home",
  services: "Services",
  products: "Products",
  contact: "Contact",
};

export function Header({
  locale,
  translations,
}: {
  locale: string;
  translations?: {
    nav?: {
      home?: string;
      services?: string;
      products?: string;
      contact?: string;
    };
  };
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const nav = translations?.nav || {};
  const homeUrl = "/" + locale;

  const isActive = (href: string) => {
    return pathname === homeUrl + href;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-lg shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            <Link href={homeUrl} className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <span className="text-xl font-bold text-white">G</span>
              </div>
              <span className="text-xl font-bold tracking-tight">gunalabs</span>
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const href = homeUrl + link.href;
                const label = nav[link.label as keyof typeof nav] || navLabels[link.label];
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                    {active && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher currentLocale={locale} />
              <ThemeToggle />
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-background p-6 shadow-xl"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const href = homeUrl + link.href;
                  const label = nav[link.label as keyof typeof nav] || navLabels[link.label];
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={href}
                      className={`text-lg font-medium py-2 border-b border-border/10 flex items-center gap-2 ${
                        active ? "text-primary" : "text-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                      {active && (
                        <span className="w-2 h-2 bg-primary rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
