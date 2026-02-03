'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Minus, ArrowLeftRight, ArrowDown, ArrowUp, MessageCircle, HelpCircle, ChevronRight } from 'lucide-react';
import DefiRightSection from '@/app/[lang]/defi/components/DefiRightSection';

const TOP_MOVERS = [
  { symbol: 'BMX', price: '$0.39', change: '12.14%', positive: true },
  { symbol: 'TWT', price: '$0.66', change: '-11.64%', positive: false },
  { symbol: 'ATH', price: '$0.00672', change: '-10.22%', positive: false },
  { symbol: 'NEXO', price: '$0.74', change: '-9.65%', positive: false },
];

const NEWS_ITEMS = [
  { title: 'Bitcoin Pullback Exposes MicroStrategy to Around $1 Billion in Paper Losses', author: 'Kamina Bashir', date: 'Feb 02, 2026', publisher: 'be[in]crypto', image: '/images/home/app-buy-with-ease@2x.png' },
  { title: 'Jupiter brings Polymarket to Solana and lands $35 million investment deal', author: 'Shaurya Malwa', date: 'Feb 02, 2026', publisher: 'CoinDesk', image: '/images/home/homepage-app-shapes-bg@2x.png' },
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

export default function DefiHomePage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-sm font-medium text-gray-600 mb-2">{t('defi.home.balanceTitle')}</h2>
            <p className="text-3xl font-bold text-gray-900">$******</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Minus className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t('defi.home.sell')}</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowLeftRight className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t('defi.home.swap')}</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowDown className="w-5 h-5 text-gray-600" />
                </div>
                
                <span   className="text-sm font-medium text-gray-700">{t('defi.home.deposit')}</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowUp className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t('defi.home.send')}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-900">{t('defi.home.topMovers')}</span>
              <span className="text-xl" aria-hidden>🔥</span>
            </div>
            <Link href={`/${locale}/defi/discover`} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              {t('defi.home.seeAll')}
            </Link>
          </div>
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

        <div>
          <div className="space-y-4">
            {NEWS_ITEMS.map((item, i) => (
              <article key={i} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 flex gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 relative">
                  {item.image ? (
                    <Image src={item.image} alt="" fill className="object-cover" sizes="80px" />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-900 line-clamp-2">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.author} • {item.date}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{t('defi.home.publishedBy')} {item.publisher}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-4">{t('defi.home.needHelp')}</h3>
          <div className="space-y-0">
            <a href="#" className="flex items-center justify-between py-3 px-0 text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-100 last:border-0">
              <span className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-gray-500" />
                <span className="font-medium">{t('defi.home.contactSupport')}</span>
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-between py-3 px-0 text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-100 last:border-0">
              <span className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-500" />
                <span className="font-medium">{t('defi.home.viewSupportCenter')}</span>
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 hidden lg:block">
        <DefiRightSection />
      </div>
    </div>
  );
}
