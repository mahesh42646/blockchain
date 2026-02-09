'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Download, Zap } from 'lucide-react';

const TABS = ['all', 'passive', 'staking', 'active'];

function downloadCsv() {
  const headers = ['Type', 'Date', 'From', 'To', 'Amount'];
  const rows = [];
  const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.csv';
  a.click();
  URL.revokeObjectURL(url);
}

export default function EarnActivityPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';
  const [tab, setTab] = useState('all');

  const emptyMessages = {
    all: { titleKey: 'userDashboard.earn.noActivity', descKey: null, viewKey: 'userDashboard.earn.viewProducts' },
    passive: { titleKey: 'userDashboard.earn.noPassiveActivity', descKey: 'userDashboard.earn.viewPassiveDesc', viewKey: 'userDashboard.earn.viewPassive' },
    staking: { titleKey: 'userDashboard.earn.noStakingActivity', descKey: 'userDashboard.earn.viewStakingDesc', viewKey: 'userDashboard.earn.viewStaking' },
    active: { titleKey: 'userDashboard.earn.noActiveActivity', descKey: 'userDashboard.earn.viewActiveDesc', viewKey: 'userDashboard.earn.viewActive' },
  };
  const msg = emptyMessages[tab] || emptyMessages.all;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between gap-4">
        <Link href={`/${locale}/user/earn`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900" aria-label="Back">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">{t('userDashboard.activity.title')}</span>
        </Link>
        <button
          type="button"
          onClick={downloadCsv}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <Download className="w-4 h-4" />
          {t('userDashboard.earn.downloadStatements')}
        </button>
      </div>

      <div className="flex bg-gray-200 rounded-full p-1 gap-1">
        {TABS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              tab === key ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            {key === 'all' ? t('userDashboard.earn.allProducts') : t(`userDashboard.earn.cards.${key === 'passive' ? 'passiveRewards' : key === 'staking' ? 'stakingRewards' : 'activeRewards'}`)}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('userDashboard.earn.activityType')}</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('userDashboard.earn.activityDate')}</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('userDashboard.earn.activityFrom')}</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('userDashboard.earn.activityTo')}</th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('userDashboard.earn.activityAmount')}</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty state - no rows */}
            </tbody>
          </table>
        </div>
        <div className="py-16 flex flex-col items-center justify-center text-center px-4">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <Zap className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{t(msg.titleKey)}</h3>
          {msg.descKey && <p className="text-sm text-gray-500 mb-6">{t(msg.descKey)}</p>}
          <Link
            href={`/${locale}/user/earn`}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {t(msg.viewKey)}
          </Link>
        </div>
      </div>
    </div>
  );
}
