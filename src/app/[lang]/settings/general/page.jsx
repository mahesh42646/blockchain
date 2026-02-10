'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { ChevronDown, ExternalLink } from 'lucide-react';

export default function SettingsGeneralPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        {t('settings.general.title')}
      </h1>
      <p className="text-gray-600 mb-8">{t('settings.general.subtitle')}</p>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-1">
          {t('settings.general.tradingCurrency')}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          {t('settings.general.tradingCurrencyDesc')}
        </p>
        <div className="relative w-full max-w-[12rem]">
          <select
            className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            defaultValue="USD"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-4">
          {t('settings.general.otherInformation')}
        </h2>
        <ul className="space-y-4">
          <li>
            <Link
              href="#"
              className="flex items-start justify-between gap-3 group text-gray-700 hover:text-blue-600"
            >
              <div>
                <span className="font-medium block">{t('settings.general.privacyPolicy')}</span>
                <span className="text-sm text-gray-500">
                  {t('settings.general.privacyPolicyDesc')}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0 mt-0.5" />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-start justify-between gap-3 group text-gray-700 hover:text-blue-600"
            >
              <div>
                <span className="font-medium block">{t('settings.general.termsOfService')}</span>
                <span className="text-sm text-gray-500">
                  {t('settings.general.termsOfServiceDesc')}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0 mt-0.5" />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-start justify-between gap-3 group text-gray-700 hover:text-blue-600"
            >
              <div>
                <span className="font-medium block">{t('settings.general.aboutBlockchain')}</span>
                <span className="text-sm text-gray-500">
                  {t('settings.general.aboutBlockchainDesc')}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0 mt-0.5" />
            </Link>
          </li>
        </ul>
        <p className="text-sm text-gray-500 mt-6">
          {t('settings.general.appVersion')}: v5.0.195
        </p>
      </div>
    </div>
  );
}
