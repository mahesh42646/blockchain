'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import UserRightSection from '@/app/[lang]/user/components/UserRightsection';
import VerifyIdentityDrawer from '@/app/[lang]/user/components/VerifyIdentityDrawer';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Search,
  Check,
  Clock,
  XCircle,
} from 'lucide-react';


// Empty by default to show Blockchain.com-style empty state; add items to show table
const ACTIVITY_ITEMS = [];

const STATUS_CONFIG = {
  completed: { icon: Check, color: 'text-green-600', bg: 'bg-green-50' },
  pending: { icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
  failed: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50' },
};

const TYPE_CONFIG = {
  deposit: { icon: ArrowDown, color: 'text-green-600' },
  buy: { icon: ArrowDown, color: 'text-green-600' },
  sell: { icon: ArrowUp, color: 'text-red-600' },
  convert: { icon: ArrowUpDown, color: 'text-blue-600' },
  withdrawal: { icon: ArrowUp, color: 'text-red-600' },
};

function NoActivityCard({ onOpenVerify }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center">
      <div className="h-20 mb-6 flex items-center justify-center">
        <svg viewBox="0 0 64 64" className="w-full h-full text-black bg-gray-100 rounded-full p-1" fill="none">
          <circle cx="24" cy="32" r="14" stroke="currentColor" strokeWidth="2" />
          <circle cx="40" cy="32" r="14" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{t('userDashboard.activity.noActivityTitle')}</h2>
      <p className="text-gray-500 text-sm mb-8">{t('userDashboard.activity.noActivitySubtitle')}</p>
      <div className="flex gap-3 w-full justify-center">
        <button type="button" onClick={onOpenVerify} className="w-48 flex items-center justify-center gap-2 py-3 px-3 bg-blue-600 hover:bg-blue-700 text-white text-md font-bold rounded-3xl transition-colors">
          <ArrowDown className="w-4 h-4 bg-white rounded-full p-1 text-blue-900 text-md font-bold" />
          {t('userDashboard.home.buy')}
        </button>
        <button type="button" onClick={onOpenVerify} className="w-48 flex items-center justify-center gap-2 py-3 px-3 bg-blue-600 hover:bg-blue-700 text-white text-md font-bold rounded-3xl transition-colors border border-blue-600">
          <ArrowDown className="w-4 h-4 bg-white rounded-full p-1 text-blue-900 text-md font-bold" />
          {t('userDashboard.home.deposit')}
        </button>
      </div>
    </div>
  );
}

export default function ActivityPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [verifyOpen, setVerifyOpen] = useState(false);
  const hasActivity = ACTIVITY_ITEMS.length > 0;

  const filteredActivity = ACTIVITY_ITEMS.filter((item) => {
    const matchFilter = filter === 'all' || item.type === filter;
    const matchSearch =
      !search ||
      item.asset.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  // Use a grid matching user/page.jsx: main content 9/12 (lg:col-span-9), right section 3/12 (lg:col-span-3)
  // On mobile, stack (col-span-1)
  return (
    <div className=" mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content: col-span-9, matching width of user/page.jsx left section */}
        <div className="lg:col-span-8 space-y-6">
          {!hasActivity ? (
            <NoActivityCard onOpenVerify={() => setVerifyOpen(true)} />
          ) : (
            <>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">{t('userDashboard.activity.title')}</h1>
                <p className="text-gray-500 text-sm">{t('userDashboard.activity.description')}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t('userDashboard.activity.searchPlaceholder')}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 bg-white"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['all', 'deposit', 'buy', 'sell', 'convert', 'withdrawal'].map((key) => (
                    <button
                      key={key}
                      onClick={() => setFilter(key)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        filter === key
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {t(`userDashboard.activity.filter.${key}`)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50/50">
                        <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {t('userDashboard.activity.type')}
                        </th>
                        <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {t('userDashboard.activity.amount')}
                        </th>
                        <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                          {t('userDashboard.activity.date')}
                        </th>
                        <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {t('userDashboard.activity.status')}
                        </th>
                        <th className="text-right py-4 px-4 w-24" />
                      </tr>
                    </thead>
                    <tbody>
                      {filteredActivity.map((item) => {
                        const TypeIcon = TYPE_CONFIG[item.type]?.icon || ArrowUpDown;
                        const StatusConf = STATUS_CONFIG[item.status] || STATUS_CONFIG.pending;
                        const StatusIcon = StatusConf.icon;
                        return (
                          <tr
                            key={item.id}
                            className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors"
                          >
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                  <TypeIcon
                                    className={`w-4 h-4 ${
                                      TYPE_CONFIG[item.type]?.color || 'text-gray-600'
                                    }`}
                                  />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900 capitalize">
                                    {t(`userDashboard.activity.types.${item.type}`)}
                                  </p>
                                  <p className="text-sm text-gray-500">{item.asset}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <p className="font-semibold text-gray-900">
                                {item.amount} {item.asset.split(' ')[0]}
                              </p>
                            </td>
                            <td className="py-4 px-4 hidden sm:table-cell text-sm text-gray-500">
                              {item.date} · {item.time}
                            </td>
                            <td className="py-4 px-4">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${StatusConf.bg} ${StatusConf.color}`}
                              >
                                <StatusIcon className="w-3.5 h-3.5" />
                                {t(`userDashboard.activity.statuses.${item.status}`)}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-right">
                              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                                {t('userDashboard.activity.details')}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {filteredActivity.length === 0 && (
                  <div className="py-12 text-center text-gray-500">
                    {t('userDashboard.activity.noActivity')}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        {/* Right Section: col-span-3, same width as /user page */}
        <div className="lg:col-span-4 hidden lg:block">
          <UserRightSection />
        </div>
      </div>
      <VerifyIdentityDrawer open={verifyOpen} onClose={() => setVerifyOpen(false)} />
    </div>
  );
}
