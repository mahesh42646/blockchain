'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function ExchangePage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('exchange.title')}</h1>
    </div>
  );
}
