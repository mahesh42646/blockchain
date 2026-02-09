'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Check } from 'lucide-react';

export default function SettingsLimitsPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        {t('settings.limits.title')}
      </h1>
      <p className="text-gray-600 mb-8">{t('settings.limits.subtitle')}</p>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          {t('settings.limits.upgradeTitle')}
        </h2>
        <p className="text-base text-gray-700 mb-2">{t('settings.limits.upgradeSubtitle')}</p>
        <p className="text-sm text-gray-500">{t('settings.limits.upgradeDesc')}</p>
      </div>

      <div className="space-y-4 mb-4">
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-base font-semibold text-gray-900">
              {t('settings.limits.basicAccess')}
            </h3>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-200 text-gray-600">
              {t('settings.limits.basicAccessBadge')}
            </span>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="w-4 h-4 text-gray-500 flex-shrink-0" />
              {t('settings.limits.basicFeature1')}
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="w-4 h-4 text-gray-500 flex-shrink-0" />
              {t('settings.limits.basicFeature2')}
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">
              {t('settings.limits.fullAccess')}
            </h3>
            <button
              type="button"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              {t('settings.limits.applyNow')}
            </button>
          </div>
          <button
            type="button"
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors mb-4"
          >
            {t('settings.limits.getVerified')}
          </button>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
              {t('settings.limits.fullFeature1')}
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
              {t('settings.limits.fullFeature2')}
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
              {t('settings.limits.fullFeature3')}
            </li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-500">{t('settings.limits.fullIncludesBasic')}</p>
    </div>
  );
}
