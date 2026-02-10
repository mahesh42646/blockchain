'use client';

import UserHeader from '@/app/[lang]/user/components/UserHeader';
import SettingsSidebar from '@/app/[lang]/settings/components/SettingsSidebar';
import { UserBalanceProvider } from '@/app/[lang]/user/context/UserBalanceContext';
import { DiscoverFavoritesProvider } from '@/app/[lang]/user/context/DiscoverFavoritesContext';

export default function SettingsLayout({ children }) {
  return (
    <UserBalanceProvider>
      <DiscoverFavoritesProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <UserHeader />
          <div className="flex flex-1 pt-16">
            <aside className="hidden md:block md:w-64 mx-4 px-4 py-8">
              <SettingsSidebar />
            </aside>
            <main className="flex-1 px-4 py-8 mx-2 max-w-full overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </DiscoverFavoritesProvider>
    </UserBalanceProvider>
  );
}
