'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import UserRightSection from '@/app/[lang]/user/components/UserRightsection';
import Link from 'next/link';
import {
  Plus,
  Minus,
  ArrowUpDown,
  ArrowDown,
  ArrowUp,
  Building2,
  DollarSign,
  Check,
  ArrowRight,
  Mail,
  CreditCard,
  RefreshCw,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';

const TOP_MOVERS = [
  { symbol: 'EFI', price: '$0.0128', change: '-32.10%', positive: false },
  { symbol: 'SPACE', price: '$0.00892', change: '-17.14%', positive: false },
  { symbol: 'FARTCOIN', price: '$0.25', change: '-14.55%', positive: false },
  { symbol: 'ADI', price: '$0.79', change: '+8.24%', positive: true },
];

const NEWS_ITEMS = [
  { title: 'Bitcoin ETFs Shed $817M as BTC Hits Nine-Month Low', author: 'Akash Girimath', date: 'Jan 30, 2026', publisher: 'Decrypt' },
  { title: 'Ethereum Layer 2 Activity Surges Amid Fee Cuts', author: 'Sarah Chen', date: 'Jan 29, 2026', publisher: 'CoinDesk' },
  { title: 'Stablecoin Market Cap Crosses $180B Milestone', author: 'Marcus Lee', date: 'Jan 29, 2026', publisher: 'The Block' },
  { title: 'SEC Delays Decision on Spot Ethereum ETF Applications', author: 'Jordan Kim', date: 'Jan 28, 2026', publisher: 'Decrypt' },
  { title: 'DeFi Protocol TVL Reaches New All-Time High', author: 'Alex Rivera', date: 'Jan 28, 2026', publisher: 'CoinTelegraph' },
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


export default function UserDashboardPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Section (col-span-9) */}
        <div className="lg:col-span-8 space-y-6">
          {/* 1. Trading Account Balance - full width card on top */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-sm font-medium text-gray-600 mb-2">
              {t('userDashboard.home.tradingAccountBalance')}
            </h2>
            <p className="text-3xl font-bold text-gray-900">$0.00</p>
          </div>
  
          {/* 2. Trading Actions Grid - separate card, colored circles with white icons */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Plus className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.buy')}</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Minus className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.sell')}</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center gap-0.5 flex-shrink-0">
                  <Plus className="w-[14px] h-[14px] text-gray-600" />
                  <span className="text-gray-600 text-xs">/</span>
                  <Minus className="w-[14px] h-[14px] text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.limitOrder')}</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowUpDown className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.convert')}</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowDown className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.deposit')}</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowUp className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.send')}</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.addCash')}</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.cashOut')}</span>
              </button>
            </div>
          </div>
  
          {/* 3. Profile Completion + Verification - two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 flex-shrink-0 mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.5" fill="#eff6ff" />
                    <path
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="2.5"
                      d="M18 2.5 a 15.5 15.5 0 0 1 0 31 a 15.5 15.5 0 0 1 0 -31"
                    />
                    <path
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2.5"
                      strokeDasharray="32.2 97"
                      strokeLinecap="round"
                      d="M18 2.5 a 15.5 15.5 0 0 1 0 31 a 15.5 15.5 0 0 1 0 -31"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-base font-medium text-gray-700 pointer-events-none">1/3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {t('userDashboard.home.completeProfile')}{' '}{t('userDashboard.home.buyCryptoToday')}
                </h3>
                <p className="text-sm text-gray-500 leading-snug">
                  {t('userDashboard.home.completeProfileDesc')}
                </p>
              </div>
            </div>
  
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('userDashboard.home.verificationSteps')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="w-6 h-6 bg-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{t('userDashboard.home.verifyEmail')}</p>
                  </div>
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-transparent hover:border-gray-200 transition-colors">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{t('userDashboard.home.verifyIdentity')}</p>
                    <p className="text-xs text-gray-500">{t('userDashboard.home.around2Minutes')}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-transparent hover:border-gray-200 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{t('userDashboard.home.buyCrypto')}</p>
                    <p className="text-xs text-gray-500">{t('userDashboard.home.around2Minutes')}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                {t('userDashboard.home.verifyIdentity')}
              </button>
            </div>
          </div>
  
          {/* Assets */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{t('userDashboard.home.assets')}</h3>
              <Link href={`/${locale}/user/assets`} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                {t('userDashboard.home.seeAll')}
              </Link>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-green-700" />
                </div>
                <p className="text-sm font-medium text-gray-900">{t('userDashboard.home.cashAndStablecoins')}</p>
              </div>
              <p className="text-lg font-semibold text-gray-900">$0.00</p>
            </div>
          </div>
  
          {/* Top Movers - cards with border-gray-100, shadow-sm, shaded area under chart */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-900">{t('userDashboard.home.topMovers')}</span>
                <span className="text-xl">🔥</span>
              </div>
              <Link href={`/${locale}/user/discover`} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                {t('userDashboard.home.seeAll')}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {TOP_MOVERS.map((coin) => (
                <div key={coin.symbol} className="p-4 border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-gray-700">{coin.symbol.charAt(0)}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{coin.symbol}</span>
                    </div>
                    <span className={`text-sm font-bold text-gray-900`}>{coin.price}</span>
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
  
          {/* Recurring Buys - light blue icon, rectangular Go button */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('userDashboard.home.recurringBuys')}</h3>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{t('userDashboard.home.automateYourBuys')}</p>
                <p className="text-sm text-gray-600 mt-0.5">{t('userDashboard.home.recurringBuysDesc')}</p>
              </div>
              <button className="px-5 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-900 transition-colors flex-shrink-0">
                {t('userDashboard.home.go')}
              </button>
            </div>
          </div>
  
          {/* News - each article as separate card with image, title, author/date, publisher */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{t('userDashboard.home.news')}</h3>
              <Link href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                {t('userDashboard.home.seeAll')}
              </Link>
            </div>
            <div className="space-y-4">
              {NEWS_ITEMS.map((item, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex gap-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.author} • {item.date}
                    </p>
                    <p className="text-sm text-gray-600 mt-0.5">Published By {item.publisher}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Need help - each option as white card */}
          <div className="pt-4 pb-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('userDashboard.home.needHelp')}</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors text-left group">
                <MessageCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-base font-medium text-gray-900 flex-1">{t('userDashboard.home.contactSupport')}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="w-full flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors text-left group">
                <HelpCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-base font-medium text-gray-900 flex-1">{t('userDashboard.home.viewSupportCenter')}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        {/* Right Section (col-span-3) */}
        <div className="lg:col-span-4  hidden lg:block">
          <UserRightSection />
        </div>
      </div>
    </div>
  );
}
