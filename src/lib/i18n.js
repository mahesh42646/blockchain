import en from '@/locales/en.json';
import hi from '@/locales/hi.json';
import es from '@/locales/es.json';

const translations = {
  en,
  hi,
  es,
};

const defaultLocale = 'en';
const supportedLocales = ['en', 'hi', 'es'];

export function getTranslations(locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale];
}

export function getNestedTranslation(translations, path) {
  return path.split('.').reduce((obj, key) => obj?.[key], translations);
}

export function t(locale, path) {
  const translations = getTranslations(locale);
  return getNestedTranslation(translations, path) || path;
}

export { defaultLocale, supportedLocales };
