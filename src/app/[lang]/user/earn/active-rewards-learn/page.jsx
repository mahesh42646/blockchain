'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const FAQ_ITEMS = [
  'Who is eligible for Active Rewards?',
  'How do transfers work?',
  'What is the minimum amount required for Active Rewards?',
  'What do trigger price, subscription amount, and expiration date mean?',
  'How do payouts work?',
  'How do withdrawals work?',
];

const SUPPORT_ACTIVE_REWARDS = 'https://support.blockchain.com/hc/en-us/sections/6868455075996-Active-Rewards';

export default function ActiveRewardsLearnPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.lang || 'en';

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between gap-4">
        <Link
          href={`/${locale}/user/earn`}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">{t('userDashboard.earn.cards.activeRewards')}</span>
        </Link>
        <button type="button" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
          {t('userDashboard.earn.products.getStarted')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h3 className="font-bold text-gray-900 mb-2">{t('userDashboard.earn.activeRewardsLearn.whatIs')}</h3>
          <p className="text-sm text-gray-600">{t('userDashboard.earn.activeRewardsLearn.whatIsDesc')}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h3 className="font-bold text-gray-900 mb-2">{t('userDashboard.earn.activeRewardsLearn.benefits')}</h3>
          <p className="text-sm text-gray-600">{t('userDashboard.earn.activeRewardsLearn.benefitsDesc')}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h3 className="font-bold text-gray-900 mb-2">{t('userDashboard.earn.activeRewardsLearn.risks')}</h3>
          <p className="text-sm text-gray-600">{t('userDashboard.earn.activeRewardsLearn.risksDesc')}</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-2">{t('userDashboard.earn.activeRewardsLearn.howItWorks')}</h2>
        <p className="text-sm text-gray-600 mb-4">{t('userDashboard.earn.activeRewardsLearn.howItWorksDesc')}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {['Currency: BTC', 'Duration: 1 week', 'Annual rate: 8.0%', 'Current price: $20,383', 'Trigger price: $22,000'].map((label) => (
            <span key={label} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">
              {label}
            </span>
          ))}
        </div>
        <h3 className="font-bold text-gray-900 mb-2">{t('userDashboard.earn.activeRewardsLearn.scenario1')}</h3>
        <p className="text-sm text-gray-600 mb-4">{t('userDashboard.earn.activeRewardsLearn.scenario1Desc')}</p>
        <div className="h-48 bg-gray-50 rounded-xl border border-gray-200 mb-6 flex items-center justify-center">
          <div className="w-full h-full max-w-md mx-auto flex items-end justify-center gap-0.5 px-4 pb-2">
            {[40, 35, 45, 30, 38, 25].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-500 rounded-t min-h-[2px]" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h4 className="font-semibold text-gray-900 mb-2">{t('userDashboard.earn.activeRewardsLearn.strategyDetails')}</h4>
            <p className="text-sm text-gray-600">Subscribed Amount: 1 BTC ($20,383)</p>
            <p className="text-sm text-gray-600">Annual Rate: 8.0%</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h4 className="font-semibold text-gray-900 mb-2">{t('userDashboard.earn.activeRewardsLearn.whatYouReceive')}</h4>
            <p className="text-sm text-gray-600">Amount: 1 BTC ($18,000)</p>
            <p className="text-sm text-gray-600">Weekly reward: 0.00147 BTC</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">{t('userDashboard.earn.activeRewardsLearn.faq')}</h2>
        <div className="space-y-2">
          {FAQ_ITEMS.map((q) => (
            <div key={q} className="flex items-center justify-between py-3 px-4 bg-white rounded-xl border border-gray-100 hover:bg-gray-50/50 transition-colors">
              <span className="text-sm font-medium text-gray-900">{q}</span>
              <span className="text-gray-400">▼</span>
            </div>
          ))}
        </div>
        <a
          href={SUPPORT_ACTIVE_REWARDS}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          {t('userDashboard.earn.activeRewardsLearn.goToSupportCenter')}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
