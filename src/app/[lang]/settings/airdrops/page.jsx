'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Umbrella } from 'lucide-react';
import VerifyIdentityDrawer from '@/app/[lang]/user/components/VerifyIdentityDrawer';
import { useState } from 'react';

const HISTORY_ROWS = [
  { type: 'Stacks', status: 'offerExpired', date: '1/1/21', to: '-', amount: '-' },
  { type: 'Stellar', status: 'offerExpired', date: '14/6/19', to: '-', amount: '-' },
];

export default function SettingsAirdropsPage() {
  const { t } = useTranslation();
  const [verifyOpen, setVerifyOpen] = useState(false);

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        {t('settings.airdrops.title')}
      </h1>
      <p className="text-gray-600 mb-8">{t('settings.airdrops.subtitle')}</p>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Umbrella className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-1">
              {t('settings.airdrops.programTitle')}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {t('settings.airdrops.programDesc')}
            </p>
            <button
              type="button"
              onClick={() => setVerifyOpen(true)}
              className="py-2.5 px-4 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {t('settings.airdrops.verifyIdentity')}
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold text-gray-900 mb-4">
          {t('settings.airdrops.history')}
        </h2>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  {t('settings.airdrops.tableType')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  {t('settings.airdrops.tableStatus')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  {t('settings.airdrops.tableDate')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  {t('settings.airdrops.tableTo')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  {t('settings.airdrops.tableAmount')}
                </th>
              </tr>
            </thead>
            <tbody>
              {HISTORY_ROWS.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="py-3 px-4 text-gray-900">{row.type}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {t(`settings.airdrops.${row.status}`)}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{row.date}</td>
                  <td className="py-3 px-4 text-gray-600">{row.to}</td>
                  <td className="py-3 px-4 text-gray-600">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <VerifyIdentityDrawer open={verifyOpen} onClose={() => setVerifyOpen(false)} />
    </div>
  );
}
