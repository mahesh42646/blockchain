'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQ_ITEMS = ['faq1', 'faq2', 'faq3'];

export default function SettingsTaxPage() {
  const { t } = useTranslation();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-4xl">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {t('settings.tax.title')}
        </h1>
        <p className="text-gray-600 mb-8">{t('settings.tax.subtitle')}</p>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex gap-4 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                1
              </span>
              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-1">
                  {t('settings.tax.exportTitle')}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {t('settings.tax.exportDesc')}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="appearance-none bg-gray-50 border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">{t('settings.tax.allTime')}</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <button
                    type="button"
                    className="py-2.5 px-4 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    {t('settings.tax.generateReport')}
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  {t('settings.tax.generatedExports')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                2
              </span>
              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-1">
                  {t('settings.tax.uploadTitle')}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {t('settings.tax.uploadDesc')}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  {t('settings.tax.visitCoinTracker')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="lg:w-80 flex-shrink-0">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            {t('settings.tax.faqTitle')}
          </h3>
          <ul className="space-y-1">
            {FAQ_ITEMS.map((key, i) => (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => setExpandedFaq(expandedFaq === key ? null : key)}
                  className="w-full flex items-center justify-between gap-2 py-2 text-left text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {t(`settings.tax.${key}`)}
                  <ChevronRight
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${
                      expandedFaq === key ? 'rotate-90' : ''
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
