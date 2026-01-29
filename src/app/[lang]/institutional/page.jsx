'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function InstitutionalPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('institutional.title')}</h1>
    </div>
  );
}
