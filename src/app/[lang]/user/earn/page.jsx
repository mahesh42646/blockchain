'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Percent, Lock, BarChart3, GitCompare, Search, ChevronDown, Info } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const EARN_CARDS = [
  { id: 'passive', periodKey: 'monthly', titleKey: 'passiveRewards', icon: Percent },
  { id: 'staking', periodKey: 'daily', titleKey: 'stakingRewards', icon: Lock },
  { id: 'active', periodKey: 'weekly', titleKey: 'activeRewards', icon: BarChart3 },
  { id: 'compare', periodKey: 'compare', titleKey: 'compareProducts', subKey: 'compareSub', icon: GitCompare },
];

const EARN_ASSETS = [
  { symbol: 'BTC', name: 'Bitcoin', balance: '-', typeKey: 'active', rate: 'Up To 8%' },
  { symbol: 'ETH', name: 'Ethereum', balance: '-', typeKey: 'active', rate: 'Up To 8%' },
  { symbol: 'ETH', name: 'Ethereum', balance: '-', typeKey: 'staking', rate: '2%' },
  { symbol: 'SOL', name: 'Solana', balance: '-', typeKey: 'staking', rate: '4%' },
  { symbol: 'BTC', name: 'Bitcoin', balance: '-', typeKey: 'passive', rate: '0.65%' },
];

export default function EarnPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [myAssetsOnly, setMyAssetsOnly] = useState(false);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('userDashboard.earn.title')}.</h1>
          <p className="text-gray-500 text-sm mt-1">{t('userDashboard.earn.subtitle')}</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium shrink-0">
          <Info className="w-4 h-4" />
          {t('userDashboard.earn.legalDisclaimer')}
        </button>
      </div>

      {/* Four reward cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {EARN_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mb-4">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              {card.periodKey !== 'compare' ? (
                <>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{t(`userDashboard.earn.period.${card.periodKey}`)}</p>
                  <p className="text-base font-bold text-gray-900 mt-0.5">{t(`userDashboard.earn.cards.${card.titleKey}`)}</p>
                </>
              ) : (
                <>
                  <p className="text-base font-bold text-gray-900">{t(`userDashboard.earn.cards.${card.titleKey}`)}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{t(`userDashboard.earn.cards.${card.subKey}`)}</p>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Filters + Search + Activity */}
      <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50">
            {t('userDashboard.assets.filter.all')}
            <ChevronDown className="w-4 h-4" />
          </button>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={myAssetsOnly}
              onChange={(e) => setMyAssetsOnly(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{t('userDashboard.earn.myAssets')}</span>
          </label>
        </div>
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t('userDashboard.earn.searchCoins')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 bg-white text-sm"
          />
        </div>
        <Link
          href={`/${locale}/user/activity`}
          className="inline-flex items-center justify-center px-4 py-2.5 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium rounded-lg transition-colors"
        >
          {t('userDashboard.activity.title')}
        </Link>
      </div>

      {/* Assets table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t('userDashboard.earn.table.assets')} <ChevronDown className="w-4 h-4 inline opacity-60" />
                </th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t('userDashboard.assets.balance')} <ChevronDown className="w-4 h-4 inline opacity-60" />
                </th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t('userDashboard.earn.table.type')} <ChevronDown className="w-4 h-4 inline opacity-60" />
                </th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t('userDashboard.earn.table.maxRate')} <ChevronDown className="w-4 h-4 inline opacity-60" />
                </th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t('userDashboard.earn.table.action')} <ChevronDown className="w-4 h-4 inline opacity-60" />
                </th>
              </tr>
            </thead>
            <tbody>
              {EARN_ASSETS.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-gray-700">{row.symbol.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{row.name}</p>
                        <p className="text-sm text-gray-500">{row.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right text-gray-500">-</td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-sm font-medium text-gray-700">{t(`userDashboard.earn.type.${row.typeKey}`)}</span>
                  </td>
                  <td className="py-4 px-4 text-right font-medium text-gray-900">{row.rate}</td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">{t('userDashboard.earn.table.start')}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
