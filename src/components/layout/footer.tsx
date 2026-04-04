import Link from "next/link";
import { Globe, GitFork, Network, Mail, MapPin, Phone } from "lucide-react";

export function Footer({
  locale,
  translations,
}: {
  locale: string;
  translations?: {
    footer?: {
      tagline?: string;
      services?: string;
      products?: string;
      contact?: string;
      privacy?: string;
      terms?: string;
      copyright?: string;
    };
  };
}) {
  const t = translations?.footer || {};

  return (
    <footer className="bg-card border-t border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href={"/" + locale} className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <span className="text-xl font-bold text-white">G</span>
              </div>
              <span className="text-xl font-bold tracking-tight">gunalabs</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t.tagline || "Building tomorrow's technology today."}
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
              >
                <GitFork className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
              >
                <Network className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.services || "Services"}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={"/" + locale + "/services"}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Application Development
                </Link>
              </li>
              <li>
                <Link
                  href={"/" + locale + "/services"}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Digitalization
                </Link>
              </li>
              <li>
                <Link
                  href={"/" + locale + "/services"}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.products || "Products"}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={"/" + locale + "/products"}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hardware Products
                </Link>
              </li>
              <li>
                <Link
                  href={"/" + locale + "/products"}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Digital Products
                </Link>
              </li>
              <li>
                <Link
                  href={"/" + locale + "/products"}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.contact || "Contact"}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                123 Innovation Drive, Tech City
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                hello@gunalabs.io
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t.copyright || "© 2024 Gunalabs. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <Link
              href={"/" + locale + "/privacy"}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.privacy || "Privacy Policy"}
            </Link>
            <Link
              href={"/" + locale + "/terms"}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.terms || "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
