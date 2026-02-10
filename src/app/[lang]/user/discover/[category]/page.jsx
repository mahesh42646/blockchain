'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Search, Star } from 'lucide-react';
import UserRightSection from '@/app/[lang]/user/components/UserRightsection';
import VerifyIdentityDrawer from '@/app/[lang]/user/components/VerifyIdentityDrawer';
import { useDiscoverFavorites } from '@/app/[lang]/user/context/DiscoverFavoritesContext';

const CATEGORY_DATA = {
  meme: {
    title: 'Meme',
    description: 'Meme coins are community-driven cryptocurrencies often inspired by internet culture.',
    rows: [
      { name: 'Dogecoin', symbol: 'DOGE', price: '$0.11', change: '+4.81%', positive: true, marketCap: '$19.327B', learnMore: false },
      { name: 'SHIBA INU', symbol: 'SHIB', price: '$0.00000728', change: '-2.85%', positive: false, marketCap: '$4.291B', learnMore: false },
      { name: 'Pepe', symbol: 'PEPE', price: '$0.00000459', change: '+3.90%', positive: true, marketCap: '$1.931B', learnMore: false },
    ],
  },
  other: {
    title: 'Other',
    description: 'Other notable cryptocurrencies and wrapped assets.',
    rows: [
      { name: 'Wrapped Bitcoin', symbol: 'WBTC', price: '$82,267.71', change: '-6.15%', positive: false, marketCap: '$10.280B', learnMore: false },
      { name: 'Chainlink', symbol: 'LINK', price: '$10.70', change: '+7.20%', positive: true, marketCap: '$7.579B', learnMore: false },
      { name: 'Chiliz', symbol: 'CHZ', price: '$0.0476', change: '-2.22%', positive: false, marketCap: '$487.440M', learnMore: false },
    ],
  },
  popular: {
    title: 'Popular',
    description: 'Most popular cryptocurrencies by market cap.',
    rows: [
      { name: 'Bitcoin', symbol: 'BTC', price: '$82,514.41', change: '-6.19%', positive: false, marketCap: '$1.651T', learnMore: false },
      { name: 'Ethereum', symbol: 'ETH', price: '$2,729.32', change: '+2.90%', positive: true, marketCap: '$330.260B', learnMore: false },
      { name: 'Binance Smart Chain', symbol: 'BNB', price: '$841.27', change: '-5.42%', positive: false, marketCap: '$114.746B', learnMore: false },
    ],
  },
  ai: {
    title: 'AI',
    description: 'AI tokens are cryptocurrencies that fund AI projects, enable transactions, reward data sharing, or support machine learning, bridging blockchain and AI.',
    rows: [
      { name: 'Virtual Protocol', symbol: 'VIRTUAL', price: '$0.62', change: '-4.98%', positive: false, marketCap: '$406.077M', learnMore: false },
      { name: 'Theta Network', symbol: 'THETA', price: '$0.21', change: '-4.86%', positive: false, marketCap: '$209.513M', learnMore: false },
      { name: 'Numeraire', symbol: 'NMR', price: '$9.63', change: '-1.53%', positive: false, marketCap: '$77.100M', learnMore: false },
      { name: 'ElizaOS', symbol: 'ELIZAOS', price: '$0.00168', change: '-7.38%', positive: false, marketCap: '$12.571M', learnMore: false },
      { name: 'ai16z', symbol: 'AI16Z', price: '$0.000513', change: '-17.70%', positive: false, marketCap: '$5.64M', learnMore: true },
    ],
  },
};

const NEWS_ITEMS = [
  { title: 'Why Bitcoin Price is in Danger, Explained With Rainbows', author: 'Isaiah Mccall', date: 'Feb 05, 2026', publisher: '99 Bitcoins' },
  { title: "Ethereum Whales And HODLers Follow Vitalik's Cue As $1,800 Risk Grows", author: 'Ananda Banerjee', date: 'Feb 05, 2026', publisher: 'be[in]crypto' },
  { title: 'Bitcoin climbs back above $71,000 as tech selloff pauses', author: 'Shaurya Malwa', date: 'Feb 05, 2026', publisher: 'CoinDesk' },
];

export default function DiscoverCategoryPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';
  const category = params?.category || 'ai';
  const { toggleFavorite, isFavorite } = useDiscoverFavorites();
  const [search, setSearch] = useState('');
  const [verifyOpen, setVerifyOpen] = useState(false);

  const data = CATEGORY_DATA[category] || CATEGORY_DATA.ai;
  const filtered = !search.trim()
    ? data.rows
    : data.rows.filter(
        (r) =>
          r.name.toLowerCase().includes(search.toLowerCase()) ||
          r.symbol.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center gap-3">
            <Link href={`/${locale}/user/discover`} className="p-2 -ml-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors" aria-label="Back">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">{data.title}</h1>
          </div>
          <p className="text-sm text-gray-600">{data.description}</p>
          <div className="relative">
            <input
              type="text"
              placeholder={t('userDashboard.discover.searchCoins')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 bg-white"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('userDashboard.discover.asset')}</th>
                    <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('userDashboard.discover.price')}</th>
                    <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">24h</th>
                    <th className="text-right py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('userDashboard.memezone.marketCap')}</th>
                    <th className="text-right py-4 px-4 w-32" />
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
                          <div>
                            <p className="font-semibold text-gray-900">{row.name}</p>
                            <p className="text-sm text-gray-500">{row.symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right font-semibold text-gray-900">{row.price}</td>
                      <td className="py-4 px-4 text-right">
                        <span className={`text-sm font-medium ${row.positive ? 'text-green-600' : 'text-red-600'}`}>
                          {row.positive ? '↑' : '↓'} {row.change}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right text-sm text-gray-500">{row.marketCap}</td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setVerifyOpen(true)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${row.learnMore ? 'bg-transparent text-blue-600 hover:bg-blue-50' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                          >
                            {row.learnMore ? t('userDashboard.earn.products.learnMore') : t('userDashboard.home.buy')}
                          </button>
                          <button type="button" onClick={() => toggleFavorite(row.symbol)} className="p-1.5 rounded transition-colors" aria-label="Favorite">
                            <Star className={`w-5 h-5 stroke-[1.5] ${isFavorite(row.symbol) ? 'fill-amber-500 text-amber-500' : 'text-gray-400 hover:text-amber-500'}`} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">{t('userDashboard.home.news')}</h2>
              <Link href={`/${locale}/user/news`} className="text-sm font-medium text-blue-600 hover:text-blue-700">{t('userDashboard.home.seeAll')}</Link>
            </div>
            <div className="space-y-4">
              {NEWS_ITEMS.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100 flex gap-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-24 h-24 bg-gray-200 rounded-xl flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.author} • {item.date}</p>
                    <p className="text-sm text-gray-500 mt-0.5">Published By {item.publisher}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-4">
          <UserRightSection />
        </div>
      </div>
      <VerifyIdentityDrawer open={verifyOpen} onClose={() => setVerifyOpen(false)} />
    </div>
  );
}
