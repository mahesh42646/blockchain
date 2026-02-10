'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Search, Flame, Star } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import UserRightSection from '@/app/[lang]/user/components/UserRightsection';
import VerifyIdentityDrawer from '@/app/[lang]/user/components/VerifyIdentityDrawer';
import { useDiscoverFavorites } from '@/app/[lang]/user/context/DiscoverFavoritesContext';

const TOP_MOVERS = [
  { symbol: 'EFI', price: '$0.0134', change: '-33.99%', positive: false },
  { symbol: 'SPACE', price: '$0.00892', change: '-17.14%', positive: false },
  { symbol: 'ADI', price: '$0.79', change: '+13.75%', positive: true },
  { symbol: 'FARTCOIN', price: '$0.25', change: '-14.55%', positive: false },
];

const SECTIONS = [
  {
    key: 'meme',
    title: 'Meme',
    description: 'Meme coins are community-driven cryptocurrencies often inspired by internet culture.',
    rows: [
      { name: 'Dogecoin', symbol: 'DOGE', price: '$0.11', change: '+4.81%', positive: true, marketCap: '$19.327B' },
      { name: 'SHIBA INU', symbol: 'SHIB', price: '$0.00000728', change: '-2.85%', positive: false, marketCap: '$4.291B' },
      { name: 'Pepe', symbol: 'PEPE', price: '$0.00000459', change: '+3.90%', positive: true, marketCap: '$1.931B' },
    ],
  },
  {
    key: 'other',
    title: 'Other',
    description: 'Other notable cryptocurrencies and wrapped assets.',
    rows: [
      { name: 'Wrapped Bitcoin', symbol: 'WBTC', price: '$82,267.71', change: '-6.15%', positive: false, marketCap: '$10.280B' },
      { name: 'Chainlink', symbol: 'LINK', price: '$10.70', change: '+7.20%', positive: true, marketCap: '$7.579B' },
      { name: 'Chiliz', symbol: 'CHZ', price: '$0.0476', change: '-2.22%', positive: false, marketCap: '$487.440M' },
    ],
  },
  {
    key: 'popular',
    title: 'Popular',
    description: 'Most popular cryptocurrencies by market cap.',
    rows: [
      { name: 'Bitcoin', symbol: 'BTC', price: '$82,514.41', change: '-6.19%', positive: false, marketCap: '$1.651T' },
      { name: 'Ethereum', symbol: 'ETH', price: '$2,729.32', change: '+2.90%', positive: true, marketCap: '$330.260B' },
      { name: 'Binance Smart Chain', symbol: 'BNB', price: '$841.27', change: '-5.42%', positive: false, marketCap: '$114.746B' },
    ],
  },
];

function MiniChart({ positive }) {
  const strokeColor = positive ? '#22c55e' : '#ef4444';
  const fillColor = positive ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)';
  const points = positive ? '0,12 4,8 8,10 12,4 16,6 20,2 20,14 0,14' : '0,4 4,8 8,6 12,10 16,8 20,12 20,14 0,14';
  return (
    <svg viewBox="0 0 20 14" className="w-full h-9 min-h-[36px]" preserveAspectRatio="none">
      <polygon fill={fillColor} points={points} />
      <polyline fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points={positive ? '0,12 4,8 8,10 12,4 16,6 20,2' : '0,4 4,8 8,6 12,10 16,8 20,12'} />
    </svg>
  );
}

function CoinRow({ name, symbol, price, change, positive, marketCap, onBuy, onFavorite, isFavorited }) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between py-4 px-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-bold text-gray-700">{symbol.charAt(0)}</span>
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 truncate">{name}</p>
          <p className="text-sm text-gray-500">{symbol}</p>
        </div>
      </div>
      <p className="font-semibold text-gray-900 shrink-0 ml-2">{price}</p>
      <p className={`text-sm font-medium shrink-0 w-16 text-right ${positive ? 'text-green-600' : 'text-red-600'}`}>
        {positive ? '↑' : '↓'} {change}
      </p>
      <p className="text-sm text-gray-500 shrink-0 w-24 text-right hidden sm:block">{marketCap}</p>
      <div className="flex items-center gap-2 shrink-0">
        <button type="button" onClick={onBuy} className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
          {t('userDashboard.home.buy')}
        </button>
        <button type="button" onClick={() => onFavorite(symbol)} className="p-1.5 rounded transition-colors" aria-label="Favorite">
          <Star className={`w-5 h-5 stroke-[1.5] transition-colors ${isFavorited ? 'fill-amber-500 text-amber-500' : 'text-gray-400 hover:text-amber-500'}`} />
        </button>
      </div>
    </div>
  );
}

const ALL_ROWS = SECTIONS.flatMap((s) => s.rows.map((r) => ({ ...r, sectionKey: s.key })));
const GAINERS_ROWS = ALL_ROWS.filter((r) => r.positive);
const LOSERS_ROWS = ALL_ROWS.filter((r) => !r.positive);

export default function DiscoverPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';
  const { toggleFavorite, isFavorite } = useDiscoverFavorites();
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('tradable');
  const [verifyOpen, setVerifyOpen] = useState(false);

  const getRowsForTab = () => {
    if (tab === 'favorites') return ALL_ROWS.filter((r) => isFavorite(r.symbol));
    if (tab === 'gainers') return GAINERS_ROWS;
    if (tab === 'losers') return LOSERS_ROWS;
    return ALL_ROWS;
  };

  const filteredBySearch = (rows) =>
    !search.trim()
      ? rows
      : rows.filter(
          (r) =>
            r.name.toLowerCase().includes(search.toLowerCase()) ||
            r.symbol.toLowerCase().includes(search.toLowerCase())
        );

  const displayRows = filteredBySearch(getRowsForTab());

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Section (col-span-9) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Search - magnifying glass on right */}
          <div className="relative ">
            <input
              type="text"
              placeholder={t('userDashboard.discover.searchCoins')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 bg-white"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Top Movers */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-bold text-gray-900">{t('userDashboard.home.topMovers')}</h2>
              <Flame className="w-5 h-5 text-amber-500" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TOP_MOVERS.map((coin) => (
                <div key={coin.symbol} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-gray-700">{coin.symbol.charAt(0)}</span>
                    </div>
                    <span className="font-semibold text-gray-900">{coin.symbol}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{coin.price}</p>
                  <p className={`text-xs font-medium mb-2 ${coin.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {coin.positive ? '↑' : '↓'} {coin.change}
                  </p>
                  <div className="w-full h-10">
                    <MiniChart positive={coin.positive} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs: Tradable, Gainers, Losers, Favorites */}
          <div className="flex bg-gray-200 rounded-full p-1 gap-1">
            {['tradable', 'gainers', 'losers', 'favorites'].map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  tab === key ? 'bg-white shadow-sm text-blue-600' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {t(`userDashboard.discover.tabs.${key}`)}
              </button>
            ))}
          </div>

          {/* Content by tab */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {tab !== 'tradable' ? (
              <div className="divide-y divide-gray-100">
                {displayRows.length === 0 ? (
                  <div className="py-12 text-center text-gray-500">
                    {tab === 'favorites' ? t('userDashboard.discover.noResults') : t('userDashboard.discover.noResults')}
                  </div>
                ) : (
                  displayRows.map((row) => (
                    <CoinRow
                      key={row.symbol}
                      {...row}
                      onBuy={() => setVerifyOpen(true)}
                      onFavorite={toggleFavorite}
                      isFavorited={isFavorite(row.symbol)}
                    />
                  ))
                )}
              </div>
            ) : (
              <>
                {SECTIONS.map((section) => (
                  <div key={section.key} className="border-b border-gray-100 last:border-0">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/30">
                      <h3 className="text-base font-bold text-gray-900">{t(`userDashboard.discover.sections.${section.key}`)}</h3>
                      <Link href={`/${locale}/user/discover/${section.key}`} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        {t('userDashboard.discover.explore')}
                      </Link>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {section.rows.map((row) => (
                        <CoinRow
                          key={`${section.key}-${row.symbol}`}
                          {...row}
                          onBuy={() => setVerifyOpen(true)}
                          onFavorite={toggleFavorite}
                          isFavorited={isFavorite(row.symbol)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        {/* Right Section (col-span-3) */}
        <div className="hidden lg:block lg:col-span-4">
          <UserRightSection />
        </div>
      </div>
      <VerifyIdentityDrawer open={verifyOpen} onClose={() => setVerifyOpen(false)} />
    </div>
  );
}
