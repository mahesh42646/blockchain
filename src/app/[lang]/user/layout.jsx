
'use client';

import UserSidebar from '@/app/[lang]/user/components/UserSidebar';
import UserHeader from '@/app/[lang]/user/components/UserHeader';

export default function UserLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <UserHeader />
      <div className="flex flex-1 pt-16">
        {/* Sidebar: col-3 (1/4 on md+, full on mobile) */}
        <aside className="hidden md:block md:w-1/4 lg:w-1/4 xl:w-1/5 mx-4  px-4 py-8">
          <UserSidebar />
        </aside>

        {/* Main content: col-9 (3/4 on md+, full width below md) */}
        <main className="flex-1 px-4 py-8 mx-2 max-w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
