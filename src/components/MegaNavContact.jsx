'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

export default function MegaNavContact() {
  const params = useParams();
  const locale = params?.lang || 'en';
  const { t } = useTranslation();

  const getLocalizedPath = (path) => {
    return `/${locale}${path}`;
  };

  return (
    <div className="group relative">
      <button className="relative font-bold text-[20px] justify-center text-slate-300 transition-colors duration-300 hover:text-white cursor-pointer px-2 py-1">
        ...
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </button>

      <div className="absolute left-0 top-full h-4 w-full" />

      <div className="absolute font-sans left-1/2 top-12 hidden w-[560px] -translate-x-1/2 group-hover:block z-50">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white px-8 sm:px-12 py-10 sm:py-14 shadow-2xl ring-1 ring-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {/* Column 1 - Products */}
            <div>
              <h3 className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-900">
                {t('footer.products')}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600">
                <li>
                  <Link
                    href={getLocalizedPath('/wallet')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    {t('nav.wallet')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/exchange')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    {t('nav.exchange')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/explorer')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    {t('nav.explorer')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/pay')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    {t('nav.pay')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/earn')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Earn
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/learn')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Learn
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/prices')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Prices
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/charts')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Charts
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/nft')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    NFT
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/institutional')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900 font-semibold"
                  >
                    {t('nav.institutional')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/bitcoin-treasury')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900 ml-4"
                  >
                    Bitcoin Treasury
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 - Resources */}
            <div>
              <h3 className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-900">
                {t('footer.resources')}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600">
                <li>
                  <Link
                    href={getLocalizedPath('/apis')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    APIs
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/status')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Status
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/open-source')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Open Source
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/research')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/legal-privacy')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Legal & Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/support')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/blog')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/security')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/podcast')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Podcast
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h3 className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-900">
                {t('footer.company')}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600">
                <li>
                  <Link
                    href={getLocalizedPath('/about')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/careers')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/press-center')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Press Center
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/ventures')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Ventures
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/investors')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900 font-semibold"
                  >
                    Investors
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath('/bitcoin-treasury')}
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Bitcoin Treasury
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
