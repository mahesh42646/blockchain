'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function CookiesPage() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-sm text-gray-500">{t('legalCenter.cookies.lastUpdated')}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {t('legalCenter.cookies.title')}
      </h2>
      <a
        href="#"
        className="mt-6 inline-block rounded-md border-2 border-blue-600 bg-white px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
      >
        {t('legalCenter.cookies.downloadPdf')}
      </a>

      <div className="mt-10 space-y-4 border-t border-gray-100 pt-10">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.cookies.section1Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section1_1')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section1_2')}</p>
        <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-gray-800">
          <li>
            <span className="font-bold">Cookies</span> – {t('legalCenter.cookies.cookiesDef').split('www.allaboutcookies.org')[0]}
            <a href="https://www.allaboutcookies.org/" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>
            {t('legalCenter.cookies.cookiesDef').split('www.allaboutcookies.org')[1] || ''}
          </li>
          <li><span className="font-bold">Web beacons or pixel tags</span> – {t('legalCenter.cookies.webBeaconsDef').replace('Web beacons or pixel tags - ', '')}</li>
          <li><span className="font-bold">API</span> – {t('legalCenter.cookies.apiDef').replace('API - ', '')}</li>
          <li>{t('legalCenter.cookies.otherTracking')}</li>
        </ul>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section1_3')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section1_4')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section1_5')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section1_6')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section1_7')}</p>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.cookies.section2Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section2Intro')}</p>
        <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-gray-800">
          <li>{t('legalCenter.cookies.section2_1')}</li>
          <li>{t('legalCenter.cookies.section2_2')}</li>
          <li>{t('legalCenter.cookies.section2_3')}</li>
          <li>{t('legalCenter.cookies.section2_4')}</li>
          <li>{t('legalCenter.cookies.section2_5')}</li>
          <li>{t('legalCenter.cookies.section2_6')}</li>
        </ul>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.cookies.section3Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section3_1')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section3_2')}</p>
        <p className="text-base font-medium text-gray-800">{t('legalCenter.cookies.section3More')}</p>
        <p className="text-base font-medium text-gray-800">{t('legalCenter.cookies.section3Tools')}</p>
        <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-gray-800">
          <li>
            {t('legalCenter.cookies.googleAnalytics').split('https://tools.google.com')[0]}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=en" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=en</a>.
          </li>
          <li>
            {t('legalCenter.cookies.googleTagManager').split('https://support.google.com')[0]}
            <a href="https://support.google.com/tagmanager/answer/9323295?hl=en" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">https://support.google.com/tagmanager/answer/9323295?hl=en</a>.
          </li>
          <li>
            {t('legalCenter.cookies.datadog').split('https://www.datadoghq.com')[0]}
            <a href="https://www.datadoghq.com/legal/cookies/" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">https://www.datadoghq.com/legal/cookies/</a>.
          </li>
          <li>
            {t('legalCenter.cookies.firebase').split('https://firebase.google.com')[0]}
            <a href="https://firebase.google.com/support/privacy" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a>.
          </li>
          <li>{t('legalCenter.cookies.amplitude')}</li>
        </ul>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.cookies.section4Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section4_1')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section4Links')}</p>
        <p className="text-base leading-relaxed text-gray-800">
          <a href="https://www.facebook.com/policies/cookies/" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">Facebook</a>
          {' · '}
          <a href="https://help.x.com/en/rules-and-policies/x-cookies" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          {' · '}
          <a href="https://www.linkedin.com/legal/cookie-policy" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {' · '}
          <a href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">Medium</a>
          {' · '}
          <a href="https://policies.google.com/technologies/cookies" className="text-blue-600 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">Google</a>
        </p>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">{t('legalCenter.cookies.section5Title')}</h3>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section5Intro')}</p>
        <p className="text-base leading-relaxed text-gray-800"><strong>Cookie settings on our website:</strong></p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section5_1')}</p>
        <p className="text-base leading-relaxed text-gray-800">{t('legalCenter.cookies.section5_2')}</p>
        <p className="text-base leading-relaxed text-gray-800">
          {t('legalCenter.cookies.section5_3').replace(' here', '')}
          <a href="#" className="text-blue-600 underline hover:text-blue-700"> {t('legalCenter.cookies.clickHere')}</a>.
        </p>
      </div>
    </div>
  );
}
