'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function AdminDashboardPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold">{t('admin.dashboard')}</h1>
      <p className="mt-4 text-gray-600">Admin module - pages will be created as needed</p>
    </div>
  );
}
