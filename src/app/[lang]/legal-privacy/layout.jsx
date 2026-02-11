'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';

const HERO_BG_IMAGE = '/images/legal%26privacy/blue-gradient_hero-bg@2x.png';
const SIDEBAR_LINK_CLASS = 'block py-2.5 text-left text-base transition hover:text-gray-900';
const SIDEBAR_LINK_INACTIVE = 'text-gray-500';
const SIDEBAR_LINK_ACTIVE = 'font-medium text-blue-600';
const SIDEBAR_HEADING_CLASS = 'mt-5 text-base font-bold text-gray-900 first:mt-0';

export default function LegalPrivacyLayout({ children }) {
  const { t } = useTranslation();
  const pathname = usePathname() || '';
  const params = useParams();
  const lang = params?.lang || 'en';
  const base = `/${lang}/legal-privacy`;
  const isUserAgreement = pathname === `${base}/user-agreement` || pathname.endsWith('/legal-privacy') || pathname.endsWith('/legal-privacy/');
  const isPrivacy = pathname === `${base}/privacy`;
  const isCookies = pathname.includes('/cookies');
  const isLawEnforcement = pathname.includes('/law-enforcement');
  const isApiTerms = pathname.includes('/api-terms');
  const isLicenses = pathname.includes('/licenses');

  return (
    <>
      <section
        className="relative w-full overflow-hidden bg-[#211E48]"
        style={{
          backgroundImage: `url('${HERO_BG_IMAGE}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t('legalCenter.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white sm:text-xl" style={{ lineHeight: 1.5 }}>
              {t('legalCenter.hero.description')}
            </p>
          </div>
        </div>
      </section>

      <section
        className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-11 lg:px-12 lg:py-12 xl:px-16"
        style={{
          background: 'linear-gradient(90deg, #7C3AED 0%, #5B21B6 40%, #3B0764 70%, #2C003D 100%)',
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <p className="text-base leading-relaxed text-white sm:text-lg" style={{ lineHeight: 1.65 }}>
            {t('legalCenter.noticeBar.text')}
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-10 sm:py-12 md:py-16">
        <div className="container mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:px-8 lg:flex-row lg:gap-0 lg:px-12 xl:px-16">
          <aside className="flex shrink-0 flex-col border-b border-gray-200 bg-white py-6 lg:sticky lg:top-0 lg:h-[calc(100vh-8rem)] lg:w-[240px] lg:border-b-0 lg:border-r lg:py-8 xl:w-[260px]">
            <nav className="custom-scrollbar flex-1 overflow-y-auto pr-3 lg:min-h-0 lg:pr-4" aria-label="Legal documents">
              <p className={SIDEBAR_HEADING_CLASS}>{t('legalCenter.sidebar.wallet')}</p>
              <div className="mt-1 space-y-0">
                <Link href={`${base}/user-agreement`} className={`${SIDEBAR_LINK_CLASS} ${isUserAgreement ? SIDEBAR_LINK_ACTIVE : SIDEBAR_LINK_INACTIVE}`}>{t('legalCenter.sidebar.userAgreement')}</Link>
                <Link href={`${base}/privacy`} className={`${SIDEBAR_LINK_CLASS} ${isPrivacy ? SIDEBAR_LINK_ACTIVE : SIDEBAR_LINK_INACTIVE}`}>{t('legalCenter.sidebar.privacy')}</Link>
                <Link href={`${base}/cookies`} className={`${SIDEBAR_LINK_CLASS} ${isCookies ? SIDEBAR_LINK_ACTIVE : SIDEBAR_LINK_INACTIVE}`}>{t('legalCenter.sidebar.cookies')}</Link>
                <Link href={`${base}/law-enforcement`} className={`${SIDEBAR_LINK_CLASS} ${isLawEnforcement ? SIDEBAR_LINK_ACTIVE : SIDEBAR_LINK_INACTIVE}`}>{t('legalCenter.sidebar.lawEnforcement')}</Link>
                <Link href={`${base}/api-terms`} className={`${SIDEBAR_LINK_CLASS} ${isApiTerms ? SIDEBAR_LINK_ACTIVE : SIDEBAR_LINK_INACTIVE}`}>{t('legalCenter.sidebar.apiTerms')}</Link>
                <Link href={`${base}/licenses`} className={`${SIDEBAR_LINK_CLASS} ${isLicenses ? SIDEBAR_LINK_ACTIVE : SIDEBAR_LINK_INACTIVE}`}>{t('legalCenter.sidebar.licenses')}</Link>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.promotionalRewards')}</span>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.biometricPrivacyPolicy')}</span>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.blockchainBrasil')}</span>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.blockchainEurope')}</span>
              </div>
              <p className={SIDEBAR_HEADING_CLASS}>{t('legalCenter.sidebar.blockchainEurope')}</p>
              <p className={SIDEBAR_HEADING_CLASS}>{t('legalCenter.sidebar.exchange')}</p>
              <div className="mt-1 space-y-0">
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.userAgreement')}</span>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.margin')}</span>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.tradingPrinciples')}</span>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.privacyPolicy')}</span>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.lawEnforcement')}</span>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.cookies')}</span>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.promotionalRewards')}</span>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.licenses')}</span>
              </div>
              <p className={SIDEBAR_HEADING_CLASS}>{t('legalCenter.sidebar.bakkt')}</p>
              <div className="mt-1 space-y-0">
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.userAgreement')}</span>
                <span className={SIDEBAR_LINK_CLASS + ' ' + SIDEBAR_LINK_INACTIVE}>{t('legalCenter.sidebar.authorization')}</span>
              </div>
            </nav>
          </aside>
          <main className="min-w-0 flex-1 overflow-x-auto">
            <div className="py-6 pl-0 lg:pl-10 xl:pl-12">
              {children}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
