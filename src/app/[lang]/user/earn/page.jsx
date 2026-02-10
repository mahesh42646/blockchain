'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Percent, Lock, BarChart3, GitCompare, Search, ChevronDown, Info } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const PASSIVE_LINK = 'https://support.blockchain.com/hc/en-us/sections/4416668318740-Passive-Rewards';
const STAKING_LINK = 'https://support.blockchain.com/hc/en-us/sections/5954708914460-Staking-Rewards';

const EARN_CARDS = [
  { id: 'passive', periodKey: 'monthly', titleKey: 'passiveRewards', icon: Percent, href: PASSIVE_LINK, external: true },
  { id: 'staking', periodKey: 'daily', titleKey: 'stakingRewards', icon: Lock, href: STAKING_LINK, external: true },
  { id: 'active', periodKey: 'weekly', titleKey: 'activeRewards', icon: BarChart3, href: 'active-rewards-learn', external: false },
  { id: 'compare', periodKey: 'compare', titleKey: 'compareProducts', subKey: 'compareSub', icon: GitCompare, href: 'compare', external: false },
];

const EARN_ASSETS = [
  { symbol: 'BTC', name: 'Bitcoin', balance: '-', typeKey: 'active', rate: 'Up To 8%' },
  { symbol: 'ETH', name: 'Ethereum', balance: '-', typeKey: 'active', rate: 'Up To 8%' },
  { symbol: 'ETH', name: 'Ethereum', balance: '-', typeKey: 'staking', rate: '2%' },
  { symbol: 'SOL', name: 'Solana', balance: '-', typeKey: 'staking', rate: '4%' },
  { symbol: 'BTC', name: 'Bitcoin', balance: '-', typeKey: 'passive', rate: '0.65%' },
];

const FILTER_OPTIONS = [
  { key: 'all', labelKey: 'userDashboard.earn.allProducts' },
  { key: 'passive', labelKey: 'userDashboard.earn.cards.passiveRewards' },
  { key: 'staking', labelKey: 'userDashboard.earn.cards.stakingRewards' },
  { key: 'active', labelKey: 'userDashboard.earn.cards.activeRewards' },
];

export default function EarnPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [myAssetsOnly, setMyAssetsOnly] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredAssets = filter === 'all'
    ? EARN_ASSETS
    : EARN_ASSETS.filter((r) => r.typeKey === filter);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('userDashboard.earn.title')}.</h1>
          <p className="text-gray-500 text-sm mt-1">{t('userDashboard.earn.subtitle')}</p>
        </div>
        <button type="button" onClick={() => setDisclaimerOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium shrink-0">
          <Info className="w-4 h-4" />
          {t('userDashboard.earn.legalDisclaimer')}
        </button>
      </div>

      {/* Four reward cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {EARN_CARDS.map((card) => {
          const Icon = card.icon;
          const content = (
            <>
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
            </>
          );
          return card.external ? (
            <a
              key={card.id}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow block"
            >
              {content}
            </a>
          ) : (
            <Link
              key={card.id}
              href={`/${locale}/user/earn/${card.href}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow block"
            >
              {content}
            </Link>
          );
        })}
      </div>

      {/* Filters + Search + Activity */}
      <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
        <div className="relative flex items-center gap-2" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50"
          >
            {t(FILTER_OPTIONS.find((o) => o.key === filter)?.labelKey || 'userDashboard.earn.allProducts')}
            <ChevronDown className="w-4 h-4" />
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 py-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[160px]">
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => { setFilter(opt.key); setDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${filter === opt.key ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                >
                  {t(opt.labelKey)}
                </button>
              ))}
            </div>
          )}
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
          href={`/${locale}/user/earn/activity`}
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
              <tr className=" border-b border-gray-100 bg-gray-50/50">
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
              {filteredAssets.map((row, i) => (
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

      {/* Legal Disclaimer modal - center popup */}
      {disclaimerOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" aria-hidden onClick={() => setDisclaimerOpen(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-label="Legal Disclaimer">
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Info className="w-5 h-5 text-gray-600" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">{t('userDashboard.earn.legalDisclaimer')}</h2>
                </div>
                <button type="button" onClick={() => setDisclaimerOpen(false)} className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full" aria-label="Close">
                  <span className="text-xl leading-none">×</span>
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4">{t('userDashboard.earn.legalDisclaimerText1')}</p>
              <p className="text-sm text-gray-600 mb-6">{t('userDashboard.earn.legalDisclaimerText2')}</p>
              <button type="button" onClick={() => setDisclaimerOpen(false)} className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors">
                {t('userDashboard.earn.close')}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
