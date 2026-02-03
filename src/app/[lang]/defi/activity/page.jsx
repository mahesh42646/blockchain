'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Search, ArrowDown, Calendar } from 'lucide-react';
import DefiRightSection from '@/app/[lang]/defi/components/DefiRightSection';

export default function DefiActivityPage() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-6">
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t('defi.activity.searchCoins')}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>{t('defi.activity.all')}</option>
            </select>
            <select className="px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>{t('defi.activity.all')}</option>
            </select>
            <button className="p-2.5 border border-gray-200 rounded-xl bg-white text-gray-600 hover:bg-gray-50 transition-colors" aria-label="Date filter">
              <Calendar className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-12 border border-gray-100 flex flex-col items-center justify-center text-center min-h-[360px]">
          <div className="w-20 h-20 mb-6 flex items-center justify-center">
            <svg viewBox="0 0 64 64" className="w-full h-full text-indigo-600" fill="none">
              <circle cx="24" cy="32" r="14" stroke="currentColor" strokeWidth="2" />
              <circle cx="40" cy="32" r="14" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t('defi.activity.noActivity')}</h2>
          <p className="text-gray-500 text-sm mb-8">{t('defi.activity.noActivityDesc')}</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors">
            <ArrowDown className="w-4 h-4" />
            {t('defi.activity.deposit')}
          </button>
        </div>
      </div>
      <div className="lg:col-span-4 hidden lg:block">
        <DefiRightSection />
      </div>
    </div>
  );
}
