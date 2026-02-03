'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { DollarSign, Plus, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import UserRightSection from '@/app/[lang]/user/components/UserRightsection'

const CASH_ASSETS = [
  { id: 'usdc', name: 'USDC', symbol: 'USDC', balance: '0', value: '$0.00', color: 'bg-blue-100', iconColor: 'text-blue-700' },
  { id: 'usdt', name: 'USDT', symbol: 'USDT', balance: '0', value: '$0.00', color: 'bg-emerald-100', iconColor: 'text-emerald-700' },
  { id: 'pax', name: 'Pax Dollar', symbol: 'PAX', balance: '0', value: '$0.00', color: 'bg-green-100', iconColor: 'text-green-700' },
];

export default function AssetsPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Section (col-span-9) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Cash section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">{t('userDashboard.assets.cash')}</h2>
              <Link
                href={`/${locale}/user`}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                {t('userDashboard.home.deposit')}
              </Link>
            </div>
            <div className="space-y-3">
              {CASH_ASSETS.map((asset) => (
                <div
                  key={asset.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${asset.color}`}>
                      <DollarSign className={`w-5 h-5 ${asset.iconColor}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{asset.name}</p>
                      <p className="text-sm text-gray-500">{asset.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{asset.balance} {asset.symbol}</p>
                    <p className="text-sm text-gray-500">{asset.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Empty state: To get started, buy or deposit crypto */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 mb-6 flex items-center justify-center relative">
              <svg viewBox="0 0 80 64" className="w-full h-full text-gray-400" fill="none">
                <circle cx="28" cy="32" r="18" stroke="currentColor" strokeWidth="2" className="text-gray-500" />
                <circle cx="52" cy="32" r="18" stroke="currentColor" strokeWidth="2" className="text-gray-500" />
                <circle cx="52" cy="32" r="10" fill="currentColor" className="text-green-500" />
                <text x="48" y="36" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">$</text>
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">{t('userDashboard.assets.getStartedTitle')}</p>
            <div className="flex gap-3 mt-6 w-full max-w-sm justify-center">
              <button className="flex items-center justify-center gap-2 py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                {t('userDashboard.home.buy')}
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-5 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium rounded-lg transition-colors">
                <ArrowDown className="w-4 h-4 text-blue-600" />
                {t('userDashboard.home.deposit')}
              </button>
            </div>
          </div>
        </div>
        {/* Right Section (col-span-3) */}
        <div className="lg:col-span-4 hidden lg:block">
          <UserRightSection />
        </div>
      </div>
    </div>
  );
}
