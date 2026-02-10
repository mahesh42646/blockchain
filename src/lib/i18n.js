import en from '@/locales/en.json';
import hi from '@/locales/hi.json';
import es from '@/locales/es.json';
import authEn from '@/locales/auth/en.json';
import authEs from '@/locales/auth/es.json';
import authHi from '@/locales/auth/hi.json';

const translations = {
  en: { ...en, auth: authEn },
  hi: { ...hi, auth: authHi },
  es: { ...es, auth: authEs },
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
