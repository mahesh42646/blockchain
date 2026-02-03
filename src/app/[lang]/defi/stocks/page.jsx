'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Search, Info, Star, ChevronUp, X, Clock, Lock, RefreshCw } from 'lucide-react';
import DefiRightSection from '@/app/[lang]/defi/components/DefiRightSection';

const STOCKS = [
  { name: 'Abbott', ticker: 'ABTon', price: '$110.36', change: '0.53%', positive: true, marketCap: '$1.508M', logo: 'A', color: 'bg-blue-100 text-blue-700' },
  { name: 'AbbVie', ticker: 'ABBVON', price: '$225.67', change: '0.86%', positive: true, marketCap: '$50,207.00', logo: 'O', color: 'bg-indigo-100 text-indigo-700' },
  { name: 'abrdn Physical Palladi...', ticker: 'PALLON', price: '$150.90', change: '-2.96%', positive: false, marketCap: '$5,40,734.00', logo: 'P', color: 'bg-amber-100 text-amber-700' },
];

const COMPANY_LOGO_COLORS = ['bg-blue-500', 'bg-green-600', 'bg-gray-800', 'bg-orange-500', 'bg-blue-600'];

const TOKENIZED_STORAGE_KEY = 'defi-stocks-tokenized-seen';

export default function DefiStocksPage() {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState('explore');
  const [searchQuery, setSearchQuery] = useState('');
  const [tokenizedPopupOpen, setTokenizedPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  const closeTokenizedPopup = () => {
    setTokenizedPopupOpen(false);
    try {
      if (typeof window !== 'undefined') window.localStorage.setItem(TOKENIZED_STORAGE_KEY, '1');
    } catch {}
  };

  const filteredStocks = searchQuery.trim()
    ? STOCKS.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.ticker.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : STOCKS;

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

        {(activeView === 'explore' || activeView === 'myStocks') && (
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
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
            >
              {t('defi.stocks.explore')}
            </button>
          </div>
        )}

        {activeView === 'explore' && filteredStocks.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <span className="inline-flex items-center gap-1">
                        {t('defi.stocks.name')}
                        <ChevronUp className="w-4 h-4" />
                      </span>
                    </th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('defi.stocks.price')}</th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('defi.stocks.change24h')}</th>
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('defi.stocks.marketCap')}</th>
                    <th className="w-10 py-4 px-4" />
                  </tr>
                </thead>
                <tbody>
                  {filteredStocks.map((stock) => (
                    <tr key={stock.ticker} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${stock.color}`}>
                            <span className="text-sm font-bold">{stock.logo}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{stock.name}</p>
                            <p className="text-sm text-gray-500">{stock.ticker}</p>
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
                        <button className="p-1 text-gray-400 hover:text-amber-500 transition-colors" aria-label="Add to favorites">
                          <Star className="w-5 h-5" />
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
