'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Search, ArrowDown, Calendar, ChevronDown } from 'lucide-react';
import DefiRightSection from '@/app/[lang]/defi/components/DefiRightSection';
import DefiDepositDrawer from '@/app/[lang]/defi/components/DefiDepositDrawer';

const DATE_OPTIONS = [
  { value: 'all', labelKey: 'all' },
  { value: '7', labelKey: 'last7Days' },
  { value: '30', labelKey: 'last30Days' },
  { value: '90', labelKey: 'last90Days' },
  { value: 'year', labelKey: 'lastYear' },
];

export default function DefiActivityPage() {
  const { t } = useTranslation();
  const [typeFilter, setTypeFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [depositDrawerOpen, setDepositDrawerOpen] = useState(false);

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
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">{t('defi.activity.all')}</option>
              <option value="deposit">{t('defi.activity.deposit')}</option>
              <option value="withdrawal">{t('defi.activity.withdrawal')}</option>
              <option value="convert">{t('defi.activity.convert')}</option>
            </select>
            <div className="relative">
              <button
                type="button"
                onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-sm text-gray-700 hover:bg-gray-50 transition-colors min-w-[140px] justify-between"
              >
                <Calendar className="w-5 h-5 text-gray-500" />
                <span>{t(`defi.activity.${DATE_OPTIONS.find((o) => o.value === dateFilter)?.labelKey || 'all'}`)}</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${dateDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dateDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-10" aria-hidden onClick={() => setDateDropdownOpen(false)} />
                  <div className="absolute right-0 mt-1 w-full min-w-[160px] bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-20">
                    {DATE_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setDateFilter(opt.value);
                          setDateDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2 ${
                          dateFilter === opt.value ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {t(`defi.activity.${opt.labelKey}`)}
                        {dateFilter === opt.value && <span className="ml-auto text-blue-600">✓</span>}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
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
          <button
            type="button"
            onClick={() => setDepositDrawerOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
          >
            <ArrowDown className="w-4 h-4" />
            {t('defi.activity.deposit')}
          </button>
        </div>
      </div>
      <div className="lg:col-span-4 hidden lg:block">
        <DefiRightSection />
      </div>
      <DefiDepositDrawer open={depositDrawerOpen} onClose={() => setDepositDrawerOpen(false)} />
    </div>
  );
}
