'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function PayPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('pay.title')}</h1>
    </div>
  );
}
