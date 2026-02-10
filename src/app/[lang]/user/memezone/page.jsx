'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useUserBalance } from '@/app/[lang]/user/context/UserBalanceContext';
import VerifyIdentityDrawer from '@/app/[lang]/user/components/VerifyIdentityDrawer';

const MEME_ROWS = [
  { symbol: 'DOGE', name: 'DOGE', price: '$0.11', priceNum: 0.11, change: '-5.13%', changeNum: -5.13, positive: false, marketCap: '$19.327B', marketCapNum: 19327, rank: 24 },
  { symbol: 'SHIB', name: 'SHIB', price: '$0.00000728', priceNum: 0.00000728, change: '+3.08%', changeNum: 3.08, positive: true, marketCap: '$4.291B', marketCapNum: 4291, rank: 65 },
  { symbol: 'PEPE', name: 'PEPE', price: '$0.00000459', priceNum: 0.00000459, change: '-4.42%', changeNum: -4.42, positive: false, marketCap: '$1.930B', marketCapNum: 1930, rank: 93 },
  { symbol: 'PUMP', name: 'PUMP', price: '$0.00279', priceNum: 0.00279, change: '+6.03%', changeNum: 6.03, positive: true, marketCap: '$1.647B', marketCapNum: 1647, rank: 103 },
  { symbol: 'TRUMP', name: 'TRUMP', price: '$4.52', priceNum: 4.52, change: '-2.65%', changeNum: -2.65, positive: false, marketCap: '$904.269M', marketCapNum: 904.269, rank: 143 },
  { symbol: 'BONK', name: 'Bonk', price: '$0.00000804', priceNum: 0.00000804, change: '+4.35%', changeNum: 4.35, positive: true, marketCap: '$707.604M', marketCapNum: 707.604, rank: 154 },
  { symbol: 'PENGU', name: 'PENGU', price: '$0.00883', priceNum: 0.00883, change: '-7.79%', changeNum: -7.79, positive: false, marketCap: '$555.791M', marketCapNum: 555.791, rank: 187 },
  { symbol: 'FLOKI', name: 'FLOKI', price: '$0.0000383', priceNum: 0.0000383, change: '-4.70%', changeNum: -4.70, positive: false, marketCap: '$369.823M', marketCapNum: 369.823, rank: 254 },
  { symbol: 'SPX', name: 'SPX', price: '$0.33', priceNum: 0.33, change: '-7.85%', changeNum: -7.85, positive: false, marketCap: '$310.307M', marketCapNum: 310.307, rank: 277 },
  { symbol: 'WIF', name: 'WIF', price: '$0.29', priceNum: 0.29, change: '-3.89%', changeNum: -3.89, positive: false, marketCap: '$291.019M', marketCapNum: 291.019, rank: 296 },
];

const TABS = [
  { key: 'all', labelKey: 'userDashboard.discover.category.all' },
  { key: 'gainers', labelKey: 'userDashboard.discover.tabs.gainers' },
  { key: 'losers', labelKey: 'userDashboard.discover.tabs.losers' },
];

export default function MemezonePage() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('all');
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [sortKey, setSortKey] = useState('rank');
  const [sortDir, setSortDir] = useState('asc');
  const { setBalance } = useUserBalance();

  useEffect(() => {
    setBalance('$******');
  }, [setBalance]);

  const bySearch = MEME_ROWS.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.symbol.toLowerCase().includes(search.toLowerCase())
  );
  const byTab =
    tab === 'gainers' ? bySearch.filter((r) => r.positive) : tab === 'losers' ? bySearch.filter((r) => !r.positive) : bySearch;

  const handleSort = (key) => {
    if (key === 'action') return;
    const newDir = sortKey === key ? (sortDir === 'asc' ? 'desc' : 'asc') : 'asc';
    setSortKey(key);
    setSortDir(newDir);
  };

  const SortIcon = ({ columnKey }) => {
    if (sortKey !== columnKey) return <ChevronDown className="w-4 h-4 inline opacity-40" />;
    return sortDir === 'asc' ? <ChevronUp className="w-4 h-4 inline" /> : <ChevronDown className="w-4 h-4 inline" />;
  };

  const getSortValue = (row, key) => {
    if (key === 'asset') return (row.name || row.symbol || '').toLowerCase();
    if (key === 'price') return row.priceNum;
    if (key === 'change') return row.changeNum;
    if (key === 'marketCap') return row.marketCapNum;
    if (key === 'rank') return row.rank;
    return 0;
  };

  const filtered = [...byTab].sort((a, b) => {
    const va = getSortValue(a, sortKey);
    const vb = getSortValue(b, sortKey);
    const cmp = typeof va === 'string' ? va.localeCompare(vb) : va - vb;
    return sortDir === 'asc' ? cmp : -cmp;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">{t('userDashboard.memezone.title')}</h1>

      

      {/* Table: Asset, Price, 24h, Market cap, Rank, Action (Convert + Buy) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th
                  role="columnheader"
                  className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 select-none"
                  onClick={() => handleSort('asset')}
                >
                  {t('userDashboard.earn.table.assets')} <SortIcon columnKey="asset" />
                </th>
                <th
                  role="columnheader"
                  className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 select-none"
                  onClick={() => handleSort('price')}
                >
                  {t('userDashboard.discover.price')} <SortIcon columnKey="price" />
                </th>
                <th
                  role="columnheader"
                  className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 select-none"
                  onClick={() => handleSort('change')}
                >
                  24h <SortIcon columnKey="change" />
                </th>
                <th
                  role="columnheader"
                  className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 select-none"
                  onClick={() => handleSort('marketCap')}
                >
                  {t('userDashboard.memezone.marketCap')} <SortIcon columnKey="marketCap" />
                </th>
                <th
                  role="columnheader"
                  className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700 select-none"
                  onClick={() => handleSort('rank')}
                >
                  {t('userDashboard.memezone.rank')} <SortIcon columnKey="rank" />
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
                    <span className={`text-sm font-medium ${row.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {row.positive ? '↑' : '↓'} {row.change}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-sm text-gray-600">{row.marketCap}</td>
                  <td className="py-4 px-4 text-right text-sm font-medium text-gray-700">{row.rank}</td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button type="button" onClick={() => setVerifyOpen(true)} className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium rounded-lg transition-colors">
                        {t('userDashboard.home.convert')}
                      </button>
                      <button type="button" onClick={() => setVerifyOpen(true)} className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium rounded-lg transition-colors">
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
      <VerifyIdentityDrawer open={verifyOpen} onClose={() => setVerifyOpen(false)} />
    </div>
  );
}
