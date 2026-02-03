'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function LocaleSetter() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Extract locale from pathname
    const locale = pathname?.split('/')[1] || 'en';
    const supportedLocales = ['en', 'hi', 'es'];
    
    if (supportedLocales.includes(locale)) {
      document.documentElement.lang = locale;
    } else {
      document.documentElement.lang = 'en';
    }
  }, [pathname]);
  
  return null;
}
