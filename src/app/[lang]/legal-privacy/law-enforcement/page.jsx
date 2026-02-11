'use client';

import { useTranslation } from '@/hooks/useTranslation';

const LAW_EMAIL = 'LawEnforcement@blockchain.com';

export default function LawEnforcementPage() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-sm text-gray-500">{t('legalCenter.lawEnforcement.lastUpdated')}</p>
      <h2 className="mt-2 text-2xl font-bold uppercase tracking-tight text-gray-900 sm:text-3xl">
        {t('legalCenter.lawEnforcement.title')}
      </h2>
      <a
        href="#"
        className="mt-6 inline-block rounded-md border-2 border-blue-600 bg-white px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
      >
        {t('legalCenter.lawEnforcement.downloadPdf')}
      </a>

      <div className="mt-10 space-y-4 border-t border-gray-100 pt-10">
        <h3 className="text-base font-bold uppercase tracking-wide text-gray-900 sm:text-lg">
          {t('legalCenter.lawEnforcement.section1Title')}
        </h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.lawEnforcement.section1_1')}</p>
        <ul className="list-disc space-y-1 pl-6 text-base leading-relaxed text-gray-800">
          <li>{t('legalCenter.lawEnforcement.section1_list1')}</li>
          <li>{t('legalCenter.lawEnforcement.section1_list2')}</li>
          <li>{t('legalCenter.lawEnforcement.section1_list3')}</li>
        </ul>
        <p className="text-base leading-relaxed text-gray-800">
          <strong>{t('legalCenter.lawEnforcement.section1_note').split(':')[0]}:</strong>
          {t('legalCenter.lawEnforcement.section1_note').split(':').slice(1).join(':').trim()}
        </p>
        <p className="text-base leading-relaxed text-gray-800">
          {t('legalCenter.lawEnforcement.section1_contact')}{' '}
          <a href={`mailto:${LAW_EMAIL}`} className="text-blue-600 underline hover:text-blue-700">{LAW_EMAIL}</a>.
        </p>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-base font-bold uppercase tracking-wide text-gray-900 sm:text-lg">
          {t('legalCenter.lawEnforcement.section2Title')}
        </h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.lawEnforcement.section2_1')}</p>
        <p className="text-base leading-relaxed text-gray-800">
          {t('legalCenter.lawEnforcement.section2_2').split('LawEnforcement@blockchain.com')[0]}
          <a href={`mailto:${LAW_EMAIL}`} className="text-blue-600 underline hover:text-blue-700">{LAW_EMAIL}</a>
          {t('legalCenter.lawEnforcement.section2_2').split('LawEnforcement@blockchain.com')[1]}
        </p>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-base font-bold uppercase tracking-wide text-gray-900 sm:text-lg">
          {t('legalCenter.lawEnforcement.section3Title')}
        </h3>
        <p className="text-base leading-relaxed text-gray-800">
          {t('legalCenter.lawEnforcement.section3_1').split('LawEnforcement@blockchain.com')[0]}
          <a href={`mailto:${LAW_EMAIL}`} className="text-blue-600 underline hover:text-blue-700">{LAW_EMAIL}</a>
          {t('legalCenter.lawEnforcement.section3_1').split('LawEnforcement@blockchain.com')[1]}
        </p>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-base font-bold uppercase tracking-wide text-gray-900 sm:text-lg">
          {t('legalCenter.lawEnforcement.faqTitle')}
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-base font-bold text-gray-900">{t('legalCenter.lawEnforcement.faq1Q')}</p>
            <p className="mt-1 text-base leading-relaxed text-gray-800">{t('legalCenter.lawEnforcement.faq1A')}</p>
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{t('legalCenter.lawEnforcement.faq2Q')}</p>
            <p className="mt-1 text-base leading-relaxed text-gray-800">{t('legalCenter.lawEnforcement.faq2A')}</p>
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{t('legalCenter.lawEnforcement.faq3Q')}</p>
            <p className="mt-1 text-base leading-relaxed text-gray-800">{t('legalCenter.lawEnforcement.faq3A')}</p>
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{t('legalCenter.lawEnforcement.faq4Q')}</p>
            <p className="mt-1 text-base leading-relaxed text-gray-800">{t('legalCenter.lawEnforcement.faq4A')}</p>
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{t('legalCenter.lawEnforcement.faq5Q')}</p>
            <p className="mt-1 text-base leading-relaxed text-gray-800">{t('legalCenter.lawEnforcement.faq5A')}</p>
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{t('legalCenter.lawEnforcement.faq6Q')}</p>
            <p className="mt-1 text-base leading-relaxed text-gray-800">{t('legalCenter.lawEnforcement.faq6A')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
