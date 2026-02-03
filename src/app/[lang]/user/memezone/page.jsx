'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const MEME_ROWS = [
  { symbol: 'DOGE', name: 'DOGE', price: '$0.11', change: '-5.13%', positive: false, marketCap: '$19.327B', rank: 24 },
  { symbol: 'SHIB', name: 'SHIB', price: '$0.00000728', change: '-3.08%', positive: false, marketCap: '$4.291B', rank: 65 },
  { symbol: 'PEPE', name: 'PEPE', price: '$0.00000459', change: '-4.42%', positive: false, marketCap: '$1.930B', rank: 93 },
  { symbol: 'PUMP', name: 'PUMP', price: '$0.00279', change: '-6.03%', positive: false, marketCap: '$1.647B', rank: 103 },
  { symbol: 'TRUMP', name: 'TRUMP', price: '$4.52', change: '-2.65%', positive: false, marketCap: '$904.269M', rank: 143 },
  { symbol: 'BONK', name: 'Bonk', price: '$0.00000804', change: '-4.35%', positive: false, marketCap: '$707.604M', rank: 154 },
  { symbol: 'PENGU', name: 'PENGU', price: '$0.00883', change: '-7.79%', positive: false, marketCap: '$555.791M', rank: 187 },
  { symbol: 'FLOKI', name: 'FLOKI', price: '$0.0000383', change: '-4.70%', positive: false, marketCap: '$369.823M', rank: 254 },
  { symbol: 'SPX', name: 'SPX', price: '$0.33', change: '-7.85%', positive: false, marketCap: '$310.307M', rank: 277 },
  { symbol: 'WIF', name: 'WIF', price: '$0.29', change: '-3.89%', positive: false, marketCap: '$291.019M', rank: 296 },
];

export default function MemezonePage() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

  const filtered = MEME_ROWS.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">{t('userDashboard.memezone.title')}</h1>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder={t('userDashboard.memezone.searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 bg-white"
        />
      </div>

      {/* Table: Asset, Price, 24h, Market cap, Rank, Action (Convert + Buy) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t('userDashboard.earn.table.assets')} <ChevronDown className="w-4 h-4 inline opacity-60" />
                </th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t('userDashboard.discover.price')} <ChevronDown className="w-4 h-4 inline opacity-60" />
                </th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  24h <ChevronDown className="w-4 h-4 inline opacity-60" />
                </th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t('userDashboard.memezone.marketCap')} <ChevronDown className="w-4 h-4 inline opacity-60" />
                </th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t('userDashboard.memezone.rank')} <ChevronUp className="w-4 h-4 inline opacity-60" />
                </th>
                <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t('userDashboard.earn.table.action')}
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.symbol} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-gray-700">{row.symbol.charAt(0)}</span>
                      </div>
                      <p className="font-semibold text-gray-900">{row.name}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right font-semibold text-gray-900">{row.price}</td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-sm font-medium text-red-600">↓ {row.change}</span>
                  </td>
                  <td className="py-4 px-4 text-right text-sm text-gray-600">{row.marketCap}</td>
                  <td className="py-4 px-4 text-right text-sm font-medium text-gray-700">{row.rank}</td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium rounded-lg transition-colors">
                        {t('userDashboard.home.convert')}
                      </button>
                      <button className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium rounded-lg transition-colors">
                        {t('userDashboard.home.buy')}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-gray-500">{t('userDashboard.memezone.noResults')}</div>
        )}
      </div>
    </div>
  );
}
