'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function ExplorerPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          {t('explorer.title')}
        </h1>
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-10 border border-gray-100">
          <p className="text-sm sm:text-base text-gray-600">{t('explorer.description')}</p>
        </div>
      </div>
    </div>
  );
}
