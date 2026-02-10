'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { Eye, EyeOff, RefreshCw, User, ChevronDown, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useUserBalance } from '@/app/[lang]/user/context/UserBalanceContext';

const HEADER_GRADIENT = 'linear-gradient(90deg, hsl(224, 44.00%, 4.90%) 0%, hsl(220, 80%, 45%) 35%, hsl(220, 67.50%, 24.10%) 65%, hsl(220, 36.00%, 4.90%) 100%)';

export default function UserHeader() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const locale = params?.lang || 'en';
  const { t } = useTranslation();
  const { balanceVisible, setBalanceVisible } = useUserBalance();

  const getLocalizedPath = (path) => `/${locale}${path}`;
  const localeNames = { en: 'English', es: 'Español', hi: 'हिंदी' };
  const currentLocaleName = localeNames[locale] || 'English';

  const isTrading = pathname?.includes('/user');
  const isWallet = pathname?.includes('/defi') || pathname?.includes('/settings');

  return (
    <header
      className="mx-auto fixed top-0 left-0 right-0 h-14 border-b border-transparent z-40"
      style={{ background: HEADER_GRADIENT }}
    >
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center flex-shrink-0">
          <Link
            href={getLocalizedPath('/')}
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-white transition-transform duration-300 hover:scale-105"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-sm flex items-center justify-center">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 border-2 border-white" />
            </div>
            <span>
              Blockchain<span className="text-gray-300">.com</span>
            </span>
          </Link>
        </div>

        <div className="absolute left-115 -translate-x-1/2 flex items-center gap-1">
          <Link
            href={getLocalizedPath('/user')}
            className={`relative px-6 py-2.5  rounded-md text-xl font-bold transition-colors ${
              isTrading ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            <span className="relative z-10">{t('userDashboard.header.trading')}</span>
            {isTrading && (
              <>
                <span
                  className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 h-0.5 w-7 rounded-full bg-white"
                  style={{ boxShadow: '0 0 12px rgba(255, 180, 249, 0.5)' }}
                />
                <span className="absolute inset-0 rounded-md bg-white/5" style={{ boxShadow: '0 0 20px rgba(255, 180, 249, 0.15)' }} />
              </>
            )}
          </Link>
          <Link
            href={getLocalizedPath('/defi')}
            className={`relative px-6 py-2.5 rounded-md text-xl font-bold transition-colors ${
              isWallet ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            <span className="relative z-10">{t('userDashboard.header.wallet')}</span>
            {isWallet && (
              <>
                <span
                  className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 h-0.5 w-7 rounded-full bg-white"
                  style={{ boxShadow: '0 0 12px rgba(255, 180, 249, 0.5)' }}
                />
                <span className="absolute inset-0 rounded-md bg-white/5" style={{ boxShadow: '0 0 20px rgba(255, 180, 249, 0.15)' }} />
              </>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setBalanceVisible(!balanceVisible)}
            className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label={balanceVisible ? 'Hide balance' : 'Show balance'}
          >
            {balanceVisible ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>
          <button
            className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Refresh balance"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center"
              aria-label="Profile menu"
            >
              <User className="w-5 h-5" />
              <ChevronDown className="w-4 h-4 ml-0.5" />
            </button>
            {showProfileMenu && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowProfileMenu(false)} />
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl py-3 z-20" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <div className="flex items-center gap-3 px-4 pb-3">
                    <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="text-sm text-gray-900 truncate">amrutanikam1235@gmail.com</span>
                  </div>
                  <Link
                    href={getLocalizedPath('/settings')}
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    {t('userDashboard.header.settings')}
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                  <Link
                    href={getLocalizedPath('/settings')}
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    {t('userDashboard.header.language')}
                    <span className="flex items-center gap-1 text-gray-500">
                      {currentLocaleName}
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </span>
                  </Link>
                  <div className="mt-2 mx-4 pt-2">
                    <button
                      className="w-full py-2.5 rounded-xl bg-white border border-gray-200 text-red-600 text-sm font-medium hover:bg-gray-50 transition-colors"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      {t('userDashboard.header.logout')}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
