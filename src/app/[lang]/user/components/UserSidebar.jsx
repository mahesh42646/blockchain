'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { Home, Layers, Compass, Zap, TrendingUp, Activity } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const menuItems = [
  { path: '/user', icon: Home, labelKey: 'home' },
  { path: '/user/assets', icon: Layers, labelKey: 'assets' },
  { path: '/user/discover', icon: Compass, labelKey: 'discover' },
  { path: '/user/memezone', icon: TrendingUp, labelKey: 'memezone' },
  { path: '/user/earn', icon: Zap, labelKey: 'earn' },
  { path: '/user/activity', icon: Activity, labelKey: 'activity' },
];

export default function UserSidebar() {
  const pathname = usePathname();
  const params = useParams();
  const locale = params?.lang || 'en';
  const { t } = useTranslation();

  const getLocalizedPath = (path) => `/${locale}${path}`;

  return (
    <aside className="w-74 bg-transparent border-none fixed left-5 top-0 pt-16 flex flex-col items-center">
      <div className="mt-8 rounded-2xl bg-white shadow-sm w-full px-5 py-0 min-h-[400px] border border-gray-100">
        <nav className="py-2 px-0 flex flex-col">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const localizedPath = getLocalizedPath(item.path);
            const isActive =
              pathname === localizedPath ||
              (item.path !== '/user' && pathname?.startsWith(localizedPath));

            return (
              <Link
                key={item.path}
                href={localizedPath}
                className={`flex items-center gap-3 px-4 py-3 my-2 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{t(`userDashboard.sidebar.${item.labelKey}`)}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
