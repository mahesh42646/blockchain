'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';

const SETTINGS_ITEMS = [
  { path: '/settings/general', labelKey: 'settings.sidebar.general' },
  { path: '/settings/limits', labelKey: 'settings.sidebar.limits' },
  { path: '/settings/airdrops', labelKey: 'settings.sidebar.airdrops' },
  { path: '/settings/tax', labelKey: 'settings.sidebar.taxCenter' },
];

export default function SettingsSidebar() {
  const pathname = usePathname();
  const params = useParams();
  const locale = params?.lang || 'en';
  const { t } = useTranslation();

  const getLocalizedPath = (path) => `/${locale}${path}`;

  return (
    <aside className="hidden md:block w-64 flex-shrink-0">
      <div className="rounded-2xl bg-white shadow-sm border border-gray-100 min-h-[400px] flex flex-col">
        <div className="px-4 pt-6 pb-2">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {t('settings.sidebar.breadcrumb')}
          </p>
        </div>
        <nav className="flex-1 py-2 px-3">
          {SETTINGS_ITEMS.map((item) => {
            const localizedPath = getLocalizedPath(item.path);
            const isActive =
              pathname === localizedPath || pathname?.startsWith(localizedPath + '/');

            return (
              <Link
                key={item.path}
                href={localizedPath}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 mt-auto border-t border-gray-100">
          <button
            type="button"
            className="w-full py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            {t('userDashboard.header.logout')}
          </button>
        </div>
      </div>
    </aside>
  );
}
