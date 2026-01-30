'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function WalletPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('wallet.title')}</h1>
      <p>{t('wallet.description')}</p>
    </div>
  );
}
