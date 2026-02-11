'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-sm text-gray-500">{t('legalCenter.document.lastUpdated')}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {t('legalCenter.document.privacyPolicyTitle')}
      </h2>
      <a
        href="#"
        className="mt-6 inline-block rounded-md border-2 border-blue-600 bg-white px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
      >
        {t('legalCenter.document.downloadPdf')}
      </a>
      <div className="mt-10 space-y-4 border-t border-gray-100 pt-10">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.document.section1Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section1_1')}</p>
        <p className="text-base leading-relaxed text-gray-800">
          {t('legalCenter.document.section1_2').split('https://www.blockchain.com/')[0]}
          <a href="https://www.blockchain.com/" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">https://www.blockchain.com/</a>
          {t('legalCenter.document.section1_2').split('https://www.blockchain.com/')[1] || ''}
        </p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section1_3')}</p>
        <p className="text-base leading-relaxed text-gray-800">
          {t('legalCenter.document.section1_4').split('https://www.blockchain.com/')[0]}
          <a href="https://www.blockchain.com/" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">https://www.blockchain.com/</a>
          {t('legalCenter.document.section1_4').split('https://www.blockchain.com/')[1] || ''}
        </p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section1_5')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section1_6')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section1_7')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section1_8')}</p>
      </div>
      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.document.section2Title')}</h3>
        <p className="text-base font-bold text-gray-800">{t('legalCenter.document.section2_1Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section2_1_1')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section2_1_2')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section2_1_3')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section2_1_4')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section2_1_5')}</p>
        <p className="text-base font-bold text-gray-800 mt-4">{t('legalCenter.document.section2_2Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section2_2Text')}</p>
        <p className="text-base font-bold text-gray-800 mt-4">{t('legalCenter.document.section2_3Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section2_3Text')}</p>
        <p className="text-base font-bold text-gray-800 mt-4">{t('legalCenter.document.section2_4Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section2_4Text')}</p>
        <p className="text-base font-bold text-gray-800 mt-4">{t('legalCenter.document.section2_5Title')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section2_5Text')}</p>
        <p className="mt-4 text-base leading-relaxed text-gray-700 italic">
          {t('legalCenter.document.section2Footnote1').split('www.blockchain.com')[0]}
          <a href="https://www.blockchain.com" className="text-blue-600 underline hover:text-blue-700 not-italic" target="_blank" rel="noopener noreferrer">www.blockchain.com</a>
          {t('legalCenter.document.section2Footnote1').split('www.blockchain.com')[1] || ''}
        </p>
        <p className="text-base leading-relaxed text-gray-700 italic">{t('legalCenter.document.section2Footnote2')}</p>
      </div>
      <div className="mt-12 space-y-6">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.document.section3Title')}</h3>
        <p className="text-base font-medium text-gray-800">{t('legalCenter.document.section3_1')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section3_1_1')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section3_1_2')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section3_1_3')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section3_2')}</p>
      </div>
      <div className="mt-12 space-y-6">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.document.section4Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.document.section4_1')}</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse border border-gray-300 text-base text-gray-800">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-900">{t('legalCenter.document.tableHeader1')}</th>
                <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-900">{t('legalCenter.document.tableHeader2')}</th>
                <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-900">{t('legalCenter.document.tableHeader3')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 align-top leading-relaxed">{t('legalCenter.document.tableRow1Purpose')}</td>
                <td className="border border-gray-300 px-4 py-3 align-top leading-relaxed">{t('legalCenter.document.tableRow1Data')}</td>
                <td className="border border-gray-300 px-4 py-3 align-top leading-relaxed">{t('legalCenter.document.tableRow1Legal')}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 align-top leading-relaxed">{t('legalCenter.document.tableRow2Purpose')}</td>
                <td className="border border-gray-300 px-4 py-3 align-top leading-relaxed">{t('legalCenter.document.tableRow2Data')}</td>
                <td className="border border-gray-300 px-4 py-3 align-top leading-relaxed">{t('legalCenter.document.tableRow2Legal')}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 align-top leading-relaxed">{t('legalCenter.document.tableRow3Purpose')}</td>
                <td className="border border-gray-300 px-4 py-3 align-top leading-relaxed">{t('legalCenter.document.tableRow3Data')}</td>
                <td className="border border-gray-300 px-4 py-3 align-top leading-relaxed">{t('legalCenter.document.tableRow3Legal')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
