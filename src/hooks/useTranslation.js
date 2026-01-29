'use client';

import { useParams } from 'next/navigation';
import { getTranslations, getNestedTranslation } from '@/lib/i18n';

export function useTranslation() {
  const params = useParams();
  const locale = params?.lang || 'en';
  const translations = getTranslations(locale);

  const t = (path) => {
    return getNestedTranslation(translations, path) || path;
  };

  return { t, locale };
}
