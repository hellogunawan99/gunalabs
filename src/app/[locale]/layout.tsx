import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  
  const messages = await getMessages();
  const t = messages;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header 
              locale={locale} 
              translations={{
                nav: {
                  home: (t as any)?.nav?.home || 'Home',
                  services: (t as any)?.nav?.services || 'Services',
                  products: (t as any)?.nav?.products || 'Products',
                  contact: (t as any)?.nav?.contact || 'Contact',
                }
              }}
            />
            <main className="flex-1">{children}</main>
            <Footer 
              locale={locale}
              translations={{
                footer: {
                  tagline: (t as any)?.footer?.tagline || '',
                  services: (t as any)?.footer?.services || 'Services',
                  products: (t as any)?.footer?.products || 'Products',
                  contact: (t as any)?.footer?.contact || 'Contact',
                  privacy: (t as any)?.footer?.privacy || 'Privacy Policy',
                  terms: (t as any)?.footer?.terms || 'Terms of Service',
                  copyright: (t as any)?.footer?.copyright || '© 2024 Gunalabs. All rights reserved.',
                }
              }}
            />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
