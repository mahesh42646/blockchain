
'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Plus, Minus, ArrowUpDown, ArrowDown, ArrowUp, Building2, DollarSign, Check, ArrowRight } from 'lucide-react';

export default function UserDashboardPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* User Dashboard - Trading Account Balance Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h2 className="text-sm font-medium text-gray-500 mb-2">
          {t('userDashboard.home.tradingAccountBalance')}
        </h2>
        <p className="text-3xl font-bold text-gray-900">$0.00</p>
      </div>

      {/* User Dashboard - Trading Actions Grid */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Plus className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.buy')}</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <Minus className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.sell')}</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <ArrowUpDown className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.limitOrder')}</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <ArrowUpDown className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.convert')}</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <ArrowDown className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.deposit')}</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <ArrowUp className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.send')}</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <Building2 className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.addCash')}</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-pink-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{t('userDashboard.home.cashOut')}</span>
          </button>
        </div>
      </div>

      {/* User Dashboard - Profile Completion Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t('userDashboard.home.completeProfile')}
          </h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
            </div>
            <span className="text-sm font-medium text-gray-600">1/3</span>
          </div>
          <p className="text-sm text-gray-600">
            {t('userDashboard.home.completeProfileDesc')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t('userDashboard.home.verificationSteps')}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {t('userDashboard.home.verifyEmail')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-transparent hover:border-gray-200 transition-colors">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gray-600 text-xs font-medium">ID</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {t('userDashboard.home.verifyIdentity')}
                </p>
                <p className="text-xs text-gray-500">{t('userDashboard.home.around2Minutes')}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-transparent hover:border-gray-200 transition-colors">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gray-600 text-xs">↻</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {t('userDashboard.home.buyCrypto')}
                </p>
                <p className="text-xs text-gray-500">{t('userDashboard.home.around2Minutes')}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            {t('userDashboard.home.verifyIdentity')}
          </button>
        </div>
      </div>

      {/* User Dashboard - Assets Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{t('userDashboard.home.assets')}</h3>
          <Link href={`/${locale}/user/assets`} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            {t('userDashboard.home.seeAll')}
          </Link>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {t('userDashboard.home.cashAndStablecoins')}
              </p>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-900">$0.00</p>
        </div>
      </div>

      {/* User Dashboard - Top Movers Section */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { symbol: 'EFI', price: '$0.0116', change: '-67.37%' },
            { symbol: 'SPACE', price: '$0.00892', change: '-17.14%' },
            { symbol: 'FARTCOIN', price: '$0.25', change: '-14.55%' },
            { symbol: 'MNT', price: '$0.79', change: '-12.78%' },
          ].map((coin) => (
            <div key={coin.symbol} className="p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">{coin.symbol}</span>
                <div className="w-12 h-8 bg-red-100 rounded flex items-center justify-center">
                  <span className="text-xs text-red-600 font-medium">↓</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{coin.price}</span>
                <span className="text-sm font-medium text-red-600">{coin.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
