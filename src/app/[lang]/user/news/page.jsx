'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const NEWS_ITEMS = [
  { title: 'House probe targets WLFI after report of $500 Million UAE stake', author: 'Sam Reynolds', date: 'Feb 05, 2026', publisher: 'CoinDesk' },
  { title: 'UNICEF Calls on Governments to Criminalize AI-Generated Child Abuse Material', author: 'Vismaya V', date: 'Feb 05, 2026', publisher: 'Decrypt' },
  { title: "Silver's 17% plunge reignites market behaviour that once topped bitcoin liquidations", author: 'Marcus Lee', date: 'Feb 05, 2026', publisher: 'The Block' },
  { title: 'Bitcoin slips below $71,000 as AI-driven tech rout worsens', author: 'Jordan Kim', date: 'Feb 05, 2026', publisher: 'CoinDesk' },
  { title: 'Why Is The Crypto Market Down Today?', author: 'Alex Rivera', date: 'Feb 04, 2026', publisher: 'CoinTelegraph' },
  { title: 'Bitcoin ETFs Shed $817M as BTC Hits Nine-Month Low', author: 'Akash Girimath', date: 'Jan 30, 2026', publisher: 'Decrypt' },
  { title: 'Ethereum Layer 2 Activity Surges Amid Fee Cuts', author: 'Sarah Chen', date: 'Jan 29, 2026', publisher: 'CoinDesk' },
  { title: 'Stablecoin Market Cap Crosses $180B Milestone', author: 'Marcus Lee', date: 'Jan 29, 2026', publisher: 'The Block' },
];

export default function NewsPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href={`/${locale}/user`}
          className="p-2 -ml-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">{t('userDashboard.home.news')}</h1>
      </div>
      <div className="space-y-4">
        {NEWS_ITEMS.map((item, i) => (
          <article
            key={i}
            className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100 flex gap-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-xl flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900 line-clamp-2">{item.title}</p>
              <p className="text-sm text-gray-600 mt-1">
                {item.author} • {item.date}
              </p>
              <p className="text-sm text-gray-500 mt-0.5">Published By {item.publisher}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
