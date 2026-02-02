
'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function EarnPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {t('userDashboard.earn.title')}
      </h1>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <p className="text-gray-600">{t('userDashboard.earn.description')}</p>
      </div>
    </div>
  );
}
