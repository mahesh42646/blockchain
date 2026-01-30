/**
 * User Dashboard Sidebar Component
 * This component is specifically for the user dashboard sidebar navigation
 * Matches Blockchain.com design exactly with white background and blue accents
 */
'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { Home, Repeat, Compass, Rocket, Percent, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

// User dashboard sidebar menu items
const menuItems = [
  { path: '/user', icon: Home, labelKey: 'home' },
  { path: '/user/assets', icon: Repeat, labelKey: 'assets' },
  { path: '/user/discover', icon: Compass, labelKey: 'discover' },
  { path: '/user/memezone', icon: Rocket, labelKey: 'memezone' },
  { path: '/user/earn', icon: Percent, labelKey: 'earn' },
  { path: '/user/activity', icon: Zap, labelKey: 'activity' },
];

export default function UserSidebar() {
  const pathname = usePathname();
  const params = useParams();
  const locale = params?.lang || 'en';
  const { t } = useTranslation();

  const getLocalizedPath = (path) => {
    return `/${locale}${path}`;
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-0 pt-16">
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const localizedPath = getLocalizedPath(item.path);
          const isActive = pathname === localizedPath || pathname?.startsWith(localizedPath + '/');
          
          return (
            <Link
              key={item.path}
              href={localizedPath}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{t(`userDashboard.sidebar.${item.labelKey}`)}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
