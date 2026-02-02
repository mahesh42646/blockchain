
'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function EarnPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
        {t('userDashboard.earn.title')}
      </h1>
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 border border-gray-100">
        <p className="text-sm sm:text-base text-gray-600">{t('userDashboard.earn.description')}</p>
      </div>
    </div>
  );
}
