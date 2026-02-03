'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isUserRoute = pathname?.includes('/user');
  const isAuthRoute = pathname?.includes('/auth');
  const isDefiRoute = pathname?.includes('/defi');
  const hideMainLayout = isUserRoute || isAuthRoute || isDefiRoute;

  return (
    <>
      {!hideMainLayout && <Header />}
      {children}
      {!hideMainLayout && <Footer />}
    </>
  );
}
