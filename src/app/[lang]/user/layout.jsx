'use client';

import UserSidebar from '@/app/[lang]/user/components/UserSidebar';
import UserHeader from '@/app/[lang]/user/components/UserHeader';
import { UserBalanceProvider } from '@/app/[lang]/user/context/UserBalanceContext';
import { DiscoverFavoritesProvider } from '@/app/[lang]/user/context/DiscoverFavoritesContext';

export default function UserLayout({ children }) {
  return (
    <UserBalanceProvider>
      <DiscoverFavoritesProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <UserHeader />
        <div className="flex flex-1 pt-16">
          <aside className="hidden md:block md:w-1/4 lg:w-1/4 xl:w-1/5 mx-4  px-4 py-8">
            <UserSidebar />
          </aside>
          <main className="flex-1 px-4 py-8 mx-2 max-w-full">
            {children}
          </main>
        </div>
      </div>
      </DiscoverFavoritesProvider>
    </UserBalanceProvider>
  );
}
