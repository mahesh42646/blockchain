'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isUserRoute = pathname?.includes('/user');

  return (
    <>
      {!isUserRoute && <Header />}
      {children}
      {!isUserRoute && <Footer />}
    </>
  );
}
