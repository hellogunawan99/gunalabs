import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'id', 'zh', 'ja', 'th', 'vi', 'es', 'de', 'fr', 'ar', 'pt'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
  zh: '中文',
  ja: '日本語',
  th: 'ไทย',
  vi: 'Tiếng Việt',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  ar: 'العربية',
  pt: 'Português',
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
