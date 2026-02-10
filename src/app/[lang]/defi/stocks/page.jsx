'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Search, Info, Star, ChevronUp, ChevronDown, ChevronsUpDown, X, Clock, Lock, RefreshCw } from 'lucide-react';
import DefiRightSection from '@/app/[lang]/defi/components/DefiRightSection';

const STOCKS = [
  { name: 'Abbott', symbol: 'ABTon', price: '$110.36', change: '0.53%', positive: true, marketCap: '$1.508M', logo: 'A', color: 'bg-blue-100 text-blue-700', isStock: true },
  { name: 'AbbVie', symbol: 'ABBVON', price: '$225.67', change: '0.86%', positive: true, marketCap: '$50,207.00', logo: 'O', color: 'bg-indigo-100 text-indigo-700', isStock: true },
  { name: 'abrdn Physical Palladi...', symbol: 'PALLON', price: '$150.90', change: '-2.96%', positive: false, marketCap: '$5,40,734.00', logo: 'P', color: 'bg-amber-100 text-amber-700', isStock: true },
  { name: 'Aave', symbol: 'AAVE', price: '$126.65', change: '-0.68%', positive: false, marketCap: '$1.923B', logo: 'A', color: 'bg-sky-100 text-sky-700', isStock: false },
  { name: '1INCH Token', symbol: '1INCH', price: '$0.11', change: '2.70%', positive: true, marketCap: '$160.519M', logo: '1', color: 'bg-gray-100 text-gray-700', isStock: false },
];

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

const COMPANY_LOGO_COLORS = ['bg-blue-500', 'bg-green-600', 'bg-gray-800', 'bg-orange-500', 'bg-blue-600'];

const TOKENIZED_STORAGE_KEY = 'defi-stocks-tokenized-seen';

export default function DefiStocksPage() {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState('explore');
  const [searchQuery, setSearchQuery] = useState('');
  const [tokenizedPopupOpen, setTokenizedPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [favorites, setFavorites] = useState(() => loadFavorites());
  const [sortKey, setSortKey] = useState('name');
  const [sortDir, setSortDir] = useState('asc');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;
    try {
      const seen = window.localStorage.getItem(TOKENIZED_STORAGE_KEY);
      if (!seen) setTokenizedPopupOpen(true);
    } catch {
      setTokenizedPopupOpen(true);
    }
  }, [mounted]);

  useEffect(() => {
    const handler = () => setFavorites(loadFavorites());
    window.addEventListener('defi-favorites-updated', handler);
    return () => window.removeEventListener('defi-favorites-updated', handler);
  }, []);

  const closeTokenizedPopup = () => {
    setTokenizedPopupOpen(false);
    try {
      if (typeof window !== 'undefined') window.localStorage.setItem(TOKENIZED_STORAGE_KEY, '1');
    } catch {}
  };

  const filteredStocks = useMemo(() => {
    let list = activeView === 'myStocks' ? STOCKS.filter((s) => favorites.has(s.symbol)) : [...STOCKS];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((s) => s.name.toLowerCase().includes(q) || s.symbol.toLowerCase().includes(q));
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
  }, [activeView, searchQuery, favorites, sortKey, sortDir]);

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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-0.5">
              <button
                onClick={() => setActiveView('explore')}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeView === 'explore' ? 'bg-white text-blue-600 border border-blue-200 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('defi.stocks.explore')}
              </button>
              <button
                onClick={() => setActiveView('myStocks')}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeView === 'myStocks' ? 'bg-white text-blue-600 border border-blue-200 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('defi.stocks.myStocks')}
              </button>
            </div>
            <button
              type="button"
              onClick={() => setTokenizedPopupOpen(true)}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900"
            >
              <Info className="w-4 h-4" />
              {t('defi.stocks.whatAreTokenizedStocks')}
              <span className="text-gray-400">→</span>
            </button>
          </div>
          <div className="relative min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('defi.stocks.searchCoins')}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {activeView === 'myStocks' && filteredStocks.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              {COMPANY_LOGO_COLORS.map((color, i) => (
                <div
                  key={i}
                  className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center text-white text-lg font-bold`}
                >
                  {['M', 'N', 'A', 'a', 'O'][i]}
                </div>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{t('defi.stocks.addStocksToWallet')}</h2>
            <button
              type="button"
              onClick={() => setActiveView('explore')}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
            >
              {t('defi.stocks.explore')}
            </button>
          </div>
        )}

        {((activeView === 'explore' && filteredStocks.length > 0) || (activeView === 'myStocks' && filteredStocks.length > 0)) && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <button type="button" onClick={() => toggleSort('name')} className="inline-flex items-center gap-1 hover:text-gray-700">
                        {t('defi.stocks.name')} <SortIcon column="name" />
                      </button>
                    </th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <button type="button" onClick={() => toggleSort('price')} className="inline-flex items-center gap-1 hover:text-gray-700">
                        {t('defi.stocks.price')} <SortIcon column="price" />
                      </button>
                    </th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <button type="button" onClick={() => toggleSort('change')} className="inline-flex items-center gap-1 hover:text-gray-700">
                        {t('defi.stocks.change24h')} <SortIcon column="change" />
                      </button>
                    </th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <button type="button" onClick={() => toggleSort('marketCap')} className="inline-flex items-center gap-1 hover:text-gray-700">
                        {t('defi.stocks.marketCap')} <SortIcon column="marketCap" />
                      </button>
                    </th>
                    <th className="w-10 py-4 px-4" />
                  </tr>
                </thead>
                <tbody>
                  {filteredStocks.map((stock) => (
                    <tr key={stock.symbol} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${stock.color}`}>
                            <span className="text-sm font-bold">{stock.logo}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{stock.name}</p>
                            <p className="text-sm text-gray-500">{stock.symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-semibold text-gray-900">{stock.price}</td>
                      <td className="py-4 px-4">
                        <span className={`text-sm font-medium ${stock.positive ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.positive ? '↑' : '↓'} {stock.change}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{stock.marketCap}</td>
                      <td className="py-4 px-4">
                        <button
                          type="button"
                          onClick={() => toggleFavorite(stock.symbol)}
                          className="p-1 text-gray-400 hover:text-amber-500 transition-colors"
                          aria-label="Add to favorites"
                        >
                          <Star className={`w-5 h-5 ${favorites.has(stock.symbol) ? 'fill-amber-500 text-amber-500' : ''}`} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <div className="lg:col-span-4 hidden lg:block">
        <DefiRightSection />
      </div>

      {tokenizedPopupOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40" aria-hidden onClick={closeTokenizedPopup} />
          <aside
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-xl z-50 flex flex-col animate-in slide-in-from-right duration-200 overflow-y-auto"
            role="dialog"
            aria-label="Tokenized Stocks"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div />
              <button
                type="button"
                onClick={closeTokenizedPopup}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <p className="text-sm text-gray-600">{t('defi.stocks.newToBlockchain')}</p>
                <h2 className="text-xl font-bold text-gray-900 mt-1">{t('defi.stocks.tokenizedStocks')}</h2>
              </div>
              <p className="text-sm text-gray-600">{t('defi.stocks.tokenizedStocksDesc')}</p>
              <div className="h-24 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="flex -space-x-2">
                  {['A', 'a', 'N', 'T', 'O'].map((l, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white/90 border-2 border-white shadow flex items-center justify-center text-purple-700 font-bold text-sm">
                      {l}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">{t('defi.stocks.keyAdvantages')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <Clock className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span>{t('defi.stocks.marketsNeverClose')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <Lock className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span>{t('defi.stocks.recordedOnBlockchain')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-600">
                    <RefreshCw className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span>{t('defi.stocks.ownFraction')}</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={closeTokenizedPopup}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
              >
                {t('defi.stocks.gotIt')}
              </button>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
