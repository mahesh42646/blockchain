'use client';

import DefiHeader from '@/app/[lang]/defi/components/DefiHeader';
import DefiSidebar from '@/app/[lang]/defi/components/DefiSidebar';
import { DefiBalanceProvider } from '@/app/[lang]/defi/context/DefiBalanceContext';

export default function DefiLayout({ children }) {
  return (
    <DefiBalanceProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <DefiHeader />
        <div className="flex flex-1 pt-16">
          <aside className="hidden md:block md:w-1/4 lg:w-1/4 xl:w-1/5 mx-4  px-4 py-8">
            <DefiSidebar />
          </aside>
          <main className="flex-1 px-4 py-8 mx-2 max-w-full">
            {children}
          </main>
        </div>
      </div>
    </DefiBalanceProvider>
  );
}
