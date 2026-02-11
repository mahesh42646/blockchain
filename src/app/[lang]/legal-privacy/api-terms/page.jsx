'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function ApiTermsPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl">
      <p className="text-sm text-gray-500">{t('legalCenter.apiTerms.lastUpdated')}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {t('legalCenter.apiTerms.title')}
      </h2>
      <a
        href="https://www.blockchain.com/static/pdf/APITermsOfService.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-md border-2 border-blue-600 bg-white px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
      >
        {t('legalCenter.apiTerms.downloadPdf')}
      </a>

      <p className="mt-8 text-base font-semibold text-gray-900">
        {t('legalCenter.apiTerms.importantNotice').split(':')[0]}:
      </p>
      <p className="mt-2 text-base leading-relaxed text-gray-800">
        {t('legalCenter.apiTerms.importantNotice').split(':').slice(1).join(':').trim()}
      </p>

      <div className="mt-10 space-y-4 border-t border-gray-100 pt-10">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.apiTerms.section1Title')}</h3>
        <p className="text-base font-semibold text-gray-900">{t('legalCenter.apiTerms.section1_1Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section1_1')}</p>
        <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-gray-800">
          <li>{t('legalCenter.apiTerms.section1_list1')}</li>
          <li>{t('legalCenter.apiTerms.section1_list2')}</li>
          <li>{t('legalCenter.apiTerms.section1_list3')}</li>
          <li>{t('legalCenter.apiTerms.section1_list4')}</li>
          <li>{t('legalCenter.apiTerms.section1_list5')}</li>
          <li>{t('legalCenter.apiTerms.section1_list6')}</li>
          <li>{t('legalCenter.apiTerms.section1_list7')}</li>
          <li>{t('legalCenter.apiTerms.section1_list8')}</li>
          <li>{t('legalCenter.apiTerms.section1_list9')}</li>
        </ul>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.apiTerms.section2Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section2_1')}</p>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.apiTerms.section3Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section3_1')}</p>
        <p className="text-base font-medium text-gray-800">{t('legalCenter.apiTerms.section3_2')}</p>
        <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-gray-800">
          <li>{t('legalCenter.apiTerms.section3_list1')}</li>
          <li>{t('legalCenter.apiTerms.section3_list2')}</li>
          <li>{t('legalCenter.apiTerms.section3_list3')}</li>
          <li>{t('legalCenter.apiTerms.section3_list4')}</li>
          <li>{t('legalCenter.apiTerms.section3_list5')}</li>
          <li>{t('legalCenter.apiTerms.section3_list6')}</li>
          <li>{t('legalCenter.apiTerms.section3_list7')}</li>
          <li>{t('legalCenter.apiTerms.section3_list8')}</li>
          <li>{t('legalCenter.apiTerms.section3_list9')}</li>
          <li>{t('legalCenter.apiTerms.section3_list10')}</li>
        </ul>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.apiTerms.section4Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section4_1')}</p>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.apiTerms.section5Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section5_1')}</p>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.apiTerms.section6Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section6_1')}</p>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.apiTerms.section7Title')}</h3>
        <p className="text-base font-semibold text-gray-900">{t('legalCenter.apiTerms.section7_1Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section7_1')}</p>
        <p className="text-base font-semibold text-gray-900">{t('legalCenter.apiTerms.section7_2Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section7_2')}</p>
        <p className="text-base font-semibold text-gray-900">{t('legalCenter.apiTerms.section7_3Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section7_3')}</p>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.apiTerms.section8Title')}</h3>
        <p className="text-base font-semibold text-gray-900">{t('legalCenter.apiTerms.section8_1Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section8_1')}</p>
        <p className="text-base font-semibold text-gray-900">{t('legalCenter.apiTerms.section8_2Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section8_2')}</p>
        <p className="text-base font-semibold text-gray-900">{t('legalCenter.apiTerms.section8_3Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section8_3')}</p>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.apiTerms.section9Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section9_1')}</p>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.apiTerms.section10Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.apiTerms.section10_1')}</p>
      </div>
    </div>
  );
}
