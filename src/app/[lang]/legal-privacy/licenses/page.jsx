'use client';

import { useTranslation } from '@/hooks/useTranslation';

const LICENSE_ROWS = 5;

function DisclosureText({ text }) {
  if (!text) return null;
  const linkClass = 'text-blue-600 underline hover:text-blue-700';
  const parts = [];
  let remaining = text;
  const patterns = [
    { type: 'email', regex: /support@blockchain\.com/, href: (m) => `mailto:${m}` },
    { type: 'phone', regex: /1-888-552-1019/, href: () => 'tel:1-888-552-1019' },
    { type: 'url', regex: /https?:\/\/[^\s]+/, href: (m) => m },
  ];
  while (remaining.length > 0) {
    let earliest = { index: Infinity, pattern: null, match: null };
    for (const p of patterns) {
      const m = remaining.match(p.regex);
      if (m && m.index < earliest.index) earliest = { index: m.index, pattern: p, match: m[0] };
    }
    if (earliest.pattern === null) {
      parts.push(<span key={parts.length}>{remaining}</span>);
      break;
    }
    if (earliest.index > 0) parts.push(<span key={parts.length}>{remaining.slice(0, earliest.index)}</span>);
    const href = earliest.pattern.href(earliest.match);
    parts.push(
      earliest.pattern.type === 'url' ? (
        <a key={parts.length} href={href} className={linkClass} target="_blank" rel="noopener noreferrer">{earliest.match}</a>
      ) : (
        <a key={parts.length} href={href} className={linkClass}>{earliest.match}</a>
      )
    );
    remaining = remaining.slice(earliest.index + earliest.match.length);
  }
  return <>{parts}</>;
}

export default function LicensesPage() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-sm text-gray-500">{t('legalCenter.licenses.lastUpdated')}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {t('legalCenter.licenses.title')}
      </h2>
      <a
        href="#"
        className="mt-6 inline-block rounded-md border-2 border-blue-600 bg-white px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
      >
        {t('legalCenter.licenses.downloadPdf')}
      </a>

      <p className="mt-8 text-base leading-relaxed text-gray-800">
        {t('legalCenter.licenses.intro1')}
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-800">
        {t('legalCenter.licenses.intro2')}
      </p>

      <div className="mt-10 overflow-x-auto border-t border-gray-100 pt-10">
        <table className="w-full min-w-[640px] border-collapse border border-gray-300 text-base text-gray-800">
          <thead>
            <tr className="bg-[#2C003D]">
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-white">{t('legalCenter.licenses.tableJurisdiction')}</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-white">{t('legalCenter.licenses.tableLicense')}</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-white">{t('legalCenter.licenses.tableStateAgency')}</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-white">{t('legalCenter.licenses.tableDisclosures')}</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: LICENSE_ROWS }, (_, i) => i + 1).map((row) => (
              <tr key={row} className="bg-white">
                <td className="border border-gray-300 px-4 py-3 align-top">{t(`legalCenter.licenses.row${row}Jurisdiction`)}</td>
                <td className="border border-gray-300 px-4 py-3 align-top">{t(`legalCenter.licenses.row${row}License`)}</td>
                <td className="border border-gray-300 px-4 py-3 align-top">{t(`legalCenter.licenses.row${row}StateAgency`)}</td>
                <td className="border border-gray-300 px-4 py-3 align-top text-sm">
                  <DisclosureText text={t(`legalCenter.licenses.row${row}Disclosures`)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
