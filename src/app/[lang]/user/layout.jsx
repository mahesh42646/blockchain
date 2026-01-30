
'use client';

import UserSidebar from '@/app/[lang]/user/components/UserSidebar';
import UserHeader from '@/app/[lang]/user/components/UserHeader';

export default function UserLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader />
      <div className="flex pt-16">
        <UserSidebar />
        <main className="flex-1 ml-64 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
