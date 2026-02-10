'use client';

import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Search, ChevronDown, Star, ChevronUp, ChevronsUpDown } from 'lucide-react';
import DefiRightSection from '@/app/[lang]/defi/components/DefiRightSection';
import DefiNetworkDrawer from '@/app/[lang]/defi/components/DefiNetworkDrawer';

const TOP_MOVERS = [
  { symbol: 'WFI', price: '$2.05', change: '-16.61%', positive: false },
  { symbol: 'BMX', price: '$0.39', change: '14.46%', positive: true },
  { symbol: 'ATH', price: '$0.00691', change: '-9.27%', positive: false },
  { symbol: 'PUMP', price: '$0.00248', change: '-8.09%', positive: false },
];

const COINS = [
  { name: '3X Short Bitcoin Token BEAR', symbol: 'BEAR', price: '$0.0000031', change: '0.00%', positive: null, marketCap: '-', isStock: false },
  { name: 'DOGAMI DOGA', symbol: 'DOGA', price: '$0.0000428', change: '0.00%', positive: null, marketCap: '$33,209.00', isStock: false },
  { name: 'jeo boden', symbol: 'boden', price: '$0.00101', change: '-9.52%', positive: false, marketCap: '$6,94,929.00', isStock: false },
  { name: 'Pocket Network (Wormh... POKT)', symbol: 'POKT', price: '$0.0133', change: '-13.93%', positive: false, marketCap: '$26.659M', isStock: false },
  { name: 'SwissCheese SWCH', symbol: 'SWCH', price: '$0.0925', change: '1.33%', positive: true, marketCap: '$3.969M', isStock: false },
  { name: '"BANKEX" project ut... BKX', symbol: 'BKX', price: '$0.00798', change: '0.00%', positive: null, marketCap: '-', isStock: false },
  { name: '1INCH Token', symbol: '1INCH', price: '$0.11', change: '2.70%', positive: true, marketCap: '$160.519M', isStock: false },
  { name: 'A Hunters Dream', symbol: 'CAW', price: '$0.0000000287', change: '-11.22%', positive: false, marketCap: '$18.278M', isStock: false },
  { name: 'Aave', symbol: 'AAVE', price: '$126.65', change: '-0.68%', positive: false, marketCap: '$1.923B', isStock: false },
];

function MiniChart({ positive }) {
  const strokeColor = positive === true ? '#22c55e' : positive === false ? '#ef4444' : '#9ca3af';
  const fillColor = positive === true ? 'rgba(34, 197, 94, 0.2)' : positive === false ? 'rgba(239, 68, 68, 0.2)' : 'rgba(156, 163, 175, 0.2)';
  const points = positive === true ? '0,12 4,8 8,10 12,4 16,6 20,2 20,14 0,14' : positive === false ? '0,4 4,8 8,6 12,10 16,8 20,12 20,14 0,14' : '0,7 4,7 8,7 12,7 16,7 20,7 20,14 0,14';
  const linePoints = positive === true ? '0,12 4,8 8,10 12,4 16,6 20,2' : positive === false ? '0,4 4,8 8,6 12,10 16,8 20,12' : '0,7 4,7 8,7 12,7 16,7 20,7';
  return (
    <svg viewBox="0 0 20 14" className="w-full h-9 min-h-[36px]" preserveAspectRatio="none">
      <polygon fill={fillColor} points={points} />
      <polyline fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points={linePoints} />
    </svg>
  );
}

const DEFI_FAVORITES_KEY = 'defi-favorites';

function loadFavorites() {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = window.localStorage.getItem(DEFI_FAVORITES_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveFavorites(set) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(DEFI_FAVORITES_KEY, JSON.stringify([...set]));
  } catch {}
}

export default function DefiDiscoverPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');
  const [networkDrawerOpen, setNetworkDrawerOpen] = useState(false);
  const [selectedNetworks, setSelectedNetworks] = useState(['all']);
  const [favorites, setFavorites] = useState(() => loadFavorites());
  const [sortKey, setSortKey] = useState('name');
  const [sortDir, setSortDir] = useState('asc');

  useEffect(() => {
    const handler = () => setFavorites(loadFavorites());
    window.addEventListener('defi-favorites-updated', handler);
    return () => window.removeEventListener('defi-favorites-updated', handler);
  }, []);

  const tabs = [
    { key: 'all', labelKey: 'all' },
    { key: 'trending', labelKey: 'trending' },
    { key: 'stocks', labelKey: 'stocks' },
    { key: 'favorites', labelKey: 'favorites' },
  ];

  const filteredCoins = useMemo(() => {
    let list = [...COINS];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q));
    }
    if (activeTab === 'trending') {
      list = list.filter((c) => c.positive === true || (c.change !== '0.00%' && c.positive !== null));
    } else if (activeTab === 'stocks') {
      list = list.filter((c) => c.positive === true || (c.change !== '0.00%' && c.positive !== null));
    } else if (activeTab === 'favorites') {
      list = list.filter((c) => favorites.has(c.symbol));
    }
    if (sortKey === 'name') {
      list.sort((a, b) => (sortDir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
    } else if (sortKey === 'price') {
      list.sort((a, b) => {
        const pa = parseFloat(a.price.replace(/[$,]/g, '')) || 0;
        const pb = parseFloat(b.price.replace(/[$,]/g, '')) || 0;
        return sortDir === 'asc' ? pa - pb : pb - pa;
      });
    } else if (sortKey === 'change') {
      list.sort((a, b) => {
        const pa = parseFloat(a.change) || 0;
        const pb = parseFloat(b.change) || 0;
        return sortDir === 'asc' ? pa - pb : pb - pa;
      });
    } else if (sortKey === 'marketCap') {
      list.sort((a, b) => {
        const pa = parseFloat(a.marketCap.replace(/[$,MK]/g, '')) * (a.marketCap.includes('M') ? 1e6 : a.marketCap.includes('B') ? 1e9 : 1) || 0;
        const pb = parseFloat(b.marketCap.replace(/[$,MK]/g, '')) * (b.marketCap.includes('M') ? 1e6 : b.marketCap.includes('B') ? 1e9 : 1) || 0;
        return sortDir === 'asc' ? pa - pb : pb - pa;
      });
    }
    return list;
  }, [searchQuery, activeTab, favorites, sortKey, sortDir]);

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else setSortKey(key);
  };

  const toggleFavorite = (symbol) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(symbol)) next.delete(symbol);
      else next.add(symbol);
      saveFavorites(next);
      if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('defi-favorites-updated'));
      return next;
    });
  };

  const SortIcon = ({ column }) => {
    if (sortKey !== column) return <ChevronsUpDown className="w-4 h-4 inline text-gray-400" />;
    return sortDir === 'asc' ? <ChevronUp className="w-4 h-4 inline" /> : <ChevronDown className="w-4 h-4 inline" />;
  };

  const showTopMovers = activeTab === '' || activeTab === 'trending';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex gap-3 overflow-hidden  p-0.5">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2.5 border border-gray-200 text-sm font-medium rounded-3xl transition-colors ${
                  activeTab === tab.key ? 'bg-gray-700 text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t(`defi.discover.${tab.labelKey}`)}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setNetworkDrawerOpen(true)}
            className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-xl bg-white text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <span>{t('defi.discover.allNetworks')}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('defi.discover.searchCoins')}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {showTopMovers && (
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t('defi.discover.topMovers')} <span aria-hidden>🔥</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {TOP_MOVERS.map((coin) => (
                <div key={coin.symbol} className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-gray-700">{coin.symbol.charAt(0)}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{coin.symbol}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{coin.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className={`text-xs font-medium ${coin.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {coin.positive ? '↑' : '↓'} {coin.change}
                    </span>
                  </div>
                  <div className="w-full h-9">
                    <MiniChart positive={coin.positive} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {activeTab === 'favorites' && filteredCoins.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-500">⭐ {t('defi.discover.noFavorites')}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <button type="button" onClick={() => toggleSort('name')} className="inline-flex items-center gap-1 hover:text-gray-700">
                        {t('defi.discover.name')} <SortIcon column="name" />
                      </button>
                    </th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <button type="button" onClick={() => toggleSort('price')} className="inline-flex items-center gap-1 hover:text-gray-700">
                        {t('defi.discover.price')} <SortIcon column="price" />
                      </button>
                    </th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <button type="button" onClick={() => toggleSort('change')} className="inline-flex items-center gap-1 hover:text-gray-700">
                        {t('defi.discover.change24h')} <SortIcon column="change" />
                      </button>
                    </th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <button type="button" onClick={() => toggleSort('marketCap')} className="inline-flex items-center gap-1 hover:text-gray-700">
                        {t('defi.discover.marketCap')} <SortIcon column="marketCap" />
                      </button>
                    </th>
                    <th className="w-10 py-4 px-4" />
                  </tr>
                </thead>
                <tbody>
                  {filteredCoins.map((coin) => (
                    <tr key={coin.symbol} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-gray-700">{coin.symbol.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{coin.name}</p>
                            <p className="text-sm text-gray-500">{coin.symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-semibold text-gray-900">{coin.price}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`text-sm font-medium ${
                            coin.positive === true ? 'text-green-600' : coin.positive === false ? 'text-red-600' : 'text-gray-500'
                          }`}
                        >
                          {coin.positive === true ? '↑' : coin.positive === false ? '↓' : '→'} {coin.change}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{coin.marketCap}</td>
                      <td className="py-4 px-4">
                        <button
                          type="button"
                          onClick={() => toggleFavorite(coin.symbol)}
                          className="p-1 text-gray-400 hover:text-amber-500 transition-colors"
                          aria-label="Add to favorites"
                        >
                          <Star className={`w-5 h-5 ${favorites.has(coin.symbol) ? 'fill-amber-500 text-amber-500' : ''}`} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="lg:col-span-4 hidden lg:block">
        <DefiRightSection />
      </div>
      <DefiNetworkDrawer
        open={networkDrawerOpen}
        onClose={() => setNetworkDrawerOpen(false)}
        selectedIds={selectedNetworks}
        onSelect={setSelectedNetworks}
        multiSelect
      />
    </div>
  );
}
