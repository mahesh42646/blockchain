'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function UserAgreementPage() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-sm text-gray-500">{t('legalCenter.document.lastUpdated')}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {t('legalCenter.userAgreement.title')}
      </h2>
      <a
        href="#"
        className="mt-6 inline-block rounded-md border-2 border-blue-600 bg-white px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
      >
        {t('legalCenter.userAgreement.downloadPdf')}
      </a>
      <p className="mt-8 text-base leading-relaxed text-gray-800 uppercase">
        {t('legalCenter.userAgreement.arbitration')}
      </p>
      <p className="mt-6 text-base leading-relaxed text-gray-800">
        {t('legalCenter.userAgreement.intro')}
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse border border-gray-300 text-base text-gray-800">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-900">{t('legalCenter.userAgreement.entityTableUK')}</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-900">{t('legalCenter.userAgreement.entityTableUS')}</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-900">{t('legalCenter.userAgreement.entityTableNigeria')}</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-900">{t('legalCenter.userAgreement.entityTableIM')}</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-900">{t('legalCenter.userAgreement.entityTableRest')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3">{t('legalCenter.userAgreement.entityUK')}</td>
              <td className="border border-gray-300 px-4 py-3">{t('legalCenter.userAgreement.entityUS')}</td>
              <td className="border border-gray-300 px-4 py-3">{t('legalCenter.userAgreement.entityNigeria')}</td>
              <td className="border border-gray-300 px-4 py-3">{t('legalCenter.userAgreement.entityIM')}</td>
              <td className="border border-gray-300 px-4 py-3">{t('legalCenter.userAgreement.entityRest')}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-base leading-relaxed text-gray-800">
        {t('legalCenter.userAgreement.footnoteStar').replace(' here.', ' ')}
        <a href="https://www.blockchain.com/legal" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer"> {t('legalCenter.userAgreement.termsLinkText')}</a>.
      </p>
      <p className="mt-2 text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.footnoteHash')}</p>
      <p className="mt-6 text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.rewardsEntity')}</p>
      <p className="mt-4 text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.stakingEntity')}</p>
      <p className="mt-4 text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.defiEntity')}</p>
      <div className="mt-10 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.userAgreement.section1Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.section1_1')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.section1_2')}</p>
        <p className="text-base leading-relaxed text-gray-800">
          {(() => {
            const text = t('legalCenter.userAgreement.section1_3');
            const url = 'www.blockchain.com/legal/terms';
            const [before, after] = text.split(url);
            return (
              <>
                {before}
                <a href="https://www.blockchain.com/legal/terms" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">{url}</a>
                {after || ''}
              </>
            );
          })()}
        </p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.section1_4')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.section1_5')}</p>
      </div>
      <div className="mt-10 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.userAgreement.section2Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.section2_1')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.section2_2')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.section2_3')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.section2_4')}</p>
        <p className="text-base leading-relaxed text-gray-800 font-medium">{t('legalCenter.userAgreement.section2_4a')}</p>
        <p className="text-base leading-relaxed text-gray-800 font-medium">{t('legalCenter.userAgreement.section2_4b')}</p>
        <p className="text-base leading-relaxed text-gray-800 font-medium">{t('legalCenter.userAgreement.section2_4c')}</p>
        <p className="text-base leading-relaxed text-gray-800 font-medium">{t('legalCenter.userAgreement.section2_4d')}</p>
        <p className="text-base leading-relaxed text-gray-800 font-medium">{t('legalCenter.userAgreement.section2_4e')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.userAgreement.section2_5')}</p>
        <p className="text-base leading-relaxed text-gray-800"><span className="font-bold">{t('legalCenter.userAgreement.section2_6')}</span></p>
      </div>
    </div>
  );
}
