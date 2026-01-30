/**
 * User Dashboard Header Component
 * This component is specifically for the user dashboard header
 * Includes Trading/Wallet tabs, balance controls, and profile menu
 * Matches Blockchain.com design exactly with white background and blue accents
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { Eye, EyeOff, RefreshCw, User, ChevronDown } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function UserHeader() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const locale = params?.lang || 'en';
  const { t } = useTranslation();

  const getLocalizedPath = (path) => {
    return `/${locale}${path}`;
  };

  const isTrading = pathname?.includes('/user') && !pathname?.includes('/user/wallet');
  const isWallet = pathname?.includes('/user/wallet');

  return (
    <header className="mx-auto fixed top-0 left-0 right-0 h-16 bg-primary border-b border-gray-200 z-40 shadow-sm">
      <div className="flex items-center  justify-between h-full px-6">
        {/* User Dashboard Logo */}
        <div className="flex items-center">
        <Link
            href={getLocalizedPath('/')}
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-white transition-transform duration-300 hover:scale-105"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-sm flex items-center justify-center">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 border-2 border-white"></div>
            </div>
            <span>
              Blockchain<span className="text-gray-300">.com</span>
            </span>
          </Link>
        </div>

        {/* User Dashboard Trading/Wallet Tabs */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          <Link
            href={getLocalizedPath('/user')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isTrading
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t('userDashboard.header.trading')}
          </Link>
          <Link
            href={getLocalizedPath('/user/wallet')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isWallet
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t('userDashboard.header.wallet')}
          </Link>
        </div>

        {/* User Dashboard Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Balance Visibility Toggle - User Dashboard Feature */}
          <button
            onClick={() => setBalanceVisible(!balanceVisible)}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={balanceVisible ? 'Hide balance' : 'Show balance'}
          >
            {balanceVisible ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>

          {/* Refresh Balance - User Dashboard Feature */}
          <button
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Refresh balance"
          >
            <RefreshCw className="w-5 h-5" />
          </button>

          {/* Profile Menu - User Dashboard Feature */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <User className="w-5 h-5" />
              <ChevronDown className="w-4 h-4" />
            </button>

            {showProfileMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowProfileMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                  <Link
                    href={getLocalizedPath('/user/profile')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    {t('userDashboard.header.profile')}
                  </Link>
                  <Link
                    href={getLocalizedPath('/user/settings')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    {t('userDashboard.header.settings')}
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    {t('userDashboard.header.logout')}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
