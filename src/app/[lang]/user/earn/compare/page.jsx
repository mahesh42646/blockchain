'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Percent, Lock, BarChart3 } from 'lucide-react';

const PASSIVE_LINK = 'https://support.blockchain.com/hc/en-us/sections/4416668318740-Passive-Rewards';
const STAKING_LINK = 'https://support.blockchain.com/hc/en-us/sections/5954708914460-Staking-Rewards';
const COMPARE_ITEMS = [
  {
    id: 'passive',
    icon: Percent,
    descKey: 'passiveDesc',
    for: 'All eligible users',
    assets: 'All',
    useCase: 'You want to hold an asset for a longer period of time',
    rate: 'Up to 10% annually, updated monthly',
    earned: 'Daily',
    paid: 'Monthly',
    withdraw: 'After 7 days',
    href: PASSIVE_LINK,
    external: true,
  },
  {
    id: 'staking',
    icon: Lock,
    descKey: 'stakingDesc',
    for: 'Intermediate users',
    assets: 'Ethereum',
    useCase: 'You want to hold an asset and secure the network',
    rate: 'Up to 4% annually, variable by network',
    earned: 'Daily',
    paid: 'Daily',
    withdraw: 'Network dependent',
    href: STAKING_LINK,
    external: true,
  },
  {
    id: 'active',
    icon: BarChart3,
    descKey: 'activeDesc',
    for: 'Advanced users',
    assets: 'Bitcoin',
    useCase: "You want to hold an asset and don't think it will appreciate significantly in the next week",
    rate: 'Up to 8% annually, variable weekly',
    earned: 'Weekly',
    paid: 'Weekly',
    withdraw: 'Weekly',
    href: null,
    external: false,
  },
];

export default function ComparePage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <Link
        href={`/${locale}/user/earn`}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">{t('userDashboard.earn.compare.title')}</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COMPARE_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 mb-4">{t(`userDashboard.earn.compare.${item.descKey}`)}</p>
              <dl className="space-y-2 text-sm flex-1">
                <div>
                  <dt className="text-gray-500">{t('userDashboard.earn.compare.for')}</dt>
                  <dd className="font-medium text-gray-900">{item.for}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">{t('userDashboard.earn.compare.assets')}</dt>
                  <dd className="font-medium text-gray-900">{item.assets}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">{t('userDashboard.earn.compare.useCase')}</dt>
                  <dd className="text-gray-700">{item.useCase}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">{t('userDashboard.earn.compare.rate')}</dt>
                  <dd className="text-gray-700">{item.rate}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">{t('userDashboard.earn.compare.earned')}</dt>
                  <dd className="text-gray-700">{item.earned}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">{t('userDashboard.earn.compare.paid')}</dt>
                  <dd className="text-gray-700">{item.paid}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">{t('userDashboard.earn.compare.withdraw')}</dt>
                  <dd className="text-gray-700">{item.withdraw}</dd>
                </div>
              </dl>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg text-center transition-colors block"
                >
                  {t('userDashboard.earn.compare.learnMore')}
                </a>
              ) : (
                <Link
                  href={`/${locale}/user/earn/active-rewards-learn`}
                  className="mt-6 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg text-center transition-colors block"
                >
                  {t('userDashboard.earn.compare.learnMore')}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
