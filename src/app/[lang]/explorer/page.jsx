'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function ExplorerPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('explorer.title')}</h1>
    </div>
  );
}
