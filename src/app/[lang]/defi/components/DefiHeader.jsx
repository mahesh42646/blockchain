
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

  const isTrading = pathname?.includes('/user');
  const isWallet = pathname?.includes('/defi');

  return (
    <header className="mx-auto fixed top-0 left-0 right-0 h-16 bg-primary border-b border-gray-200 z-40 shadow-sm">
      <div className="flex items-center space-x-30 h-full px-6">
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
        <div className="flex items-center gap-1 rounded-lg p-1">
          <Link
            href={getLocalizedPath('/user')}
            className={`relative px-6 py-1 rounded-md text-lg font-bold transition-colors ${
              isTrading
                ? 'bg-gradient-to-r from-purple-200/70 via-white/60 to-white/70 text-white'
                : ''
            }`}
            style={
              isTrading
                ? {
                    background:
                      "linear-gradient(90deg, rgba(255,180,249,0.35) 0%, rgba(255,255,255,0.35) 100%)",
                    color: "#fff"
                  }
                : undefined
            }
          >
            <span
              className={`relative z-10 ${
                isTrading ? "text-white" : "text-slate-300"
              }`}
            >
              {t("userDashboard.header.trading")}
            </span>
            {isTrading && (
              <span
                className="absolute left-1/2 -bottom-2 -translate-x-1/2 h-2 w-8"
                style={{
                  borderRadius: "10px",
                  height: "4px",
                  width: "26px",
                  background: "#fff",
                  zIndex: 20,
                }}
              />
            )}
          </Link>
          <Link
            href={getLocalizedPath('/defi')}
            className={`relative px-6 py-1 rounded-md text-lg font-bold transition-colors ${
              isWallet
                ? 'bg-gradient-to-r from-purple-200/70 via-white/60 to-white/70 text-white'
                : ''
            }`}
            style={
              isWallet
                ? {
                    background:
                      "linear-gradient(90deg, rgba(255,180,249,0.35) 0%, rgba(255,255,255,0.35) 100%)",
                    color: "#fff"
                  }
                : undefined
            }
          >
            <span
              className={`relative z-10 ${
                isWallet ? "text-white" : "text-slate-300"
              }`}
            >
              {t("userDashboard.header.wallet")}
            </span>
            {isWallet && (
              <span
                className="absolute left-1/2 -bottom-2 -translate-x-1/2 h-2 w-8"
                style={{
                  borderRadius: "10px",
                  height: "4px",
                  width: "26px",
                  background: "#fff",
                  zIndex: 20,
                }}
              />
            )}
          </Link>
        </div>

        {/* User Dashboard Right Side Actions */}
        <div className="flex items-center gap-4 ml-auto">
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