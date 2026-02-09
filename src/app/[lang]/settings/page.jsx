'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();
  const params = useParams();
  const locale = params?.lang || 'en';

  useEffect(() => {
    router.replace(`/${locale}/settings/general`);
  }, [locale, router]);

  return null;
}
