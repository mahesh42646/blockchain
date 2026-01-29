'use client';

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { supportedLocales } from "@/lib/i18n";
import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

const languageNames = {
  en: 'English',
  hi: 'हिंदी',
  es: 'Español'
};

export default function Footer() {
  const params = useParams();
  const pathname = usePathname();
  const { t } = useTranslation();
  const currentLang = params?.lang || 'en';
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const getLocalizedPath = (path) => {
    return `/${currentLang}${path}`;
  };

  const switchLanguage = (newLang) => {
    const pathWithoutLang = pathname.replace(`/${currentLang}`, '') || '/';
    return `/${newLang}${pathWithoutLang}`;
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-8">
          {/* Logo and QR Code Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-white"></div>
              </div>
              <span className="text-xl font-semibold text-gray-900">Blockchain.com</span>
            </div>
            <div className="w-32 h-32 bg-white border-2 border-gray-300 rounded mb-3 flex items-center justify-center p-2">
              <div className="w-full h-full bg-black grid grid-cols-8 gap-0.5 p-1">
                {Array.from({ length: 64 }).map((_, i) => {
                  const row = Math.floor(i / 8);
                  const col = i % 8;
                  const isPattern = (row === 0 || row === 7 || col === 0 || col === 7) || 
                                   (row === 2 && col >= 2 && col <= 5) || 
                                   (row === 5 && col >= 2 && col <= 5) ||
                                   (col === 2 && row >= 2 && row <= 5) ||
                                   (col === 5 && row >= 2 && row <= 5) ||
                                   ((row === 1 || row === 6) && (col === 1 || col === 6)) ||
                                   (row === 3 && col === 3) || (row === 3 && col === 4) ||
                                   (row === 4 && col === 3) || (row === 4 && col === 4);
                  return (
                    <div
                      key={i}
                      className={`w-full h-full ${isPattern ? 'bg-white' : 'bg-black'}`}
                    />
                  );
                })}
              </div>
            </div>
            <p className="text-sm text-gray-600 text-center">{t('footer.scanToDownload')}</p>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-6">
              {t('footer.products')}
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <Link href={getLocalizedPath('/wallet')} className="hover:text-gray-900 transition">
                  {t('nav.wallet')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/explorer')} className="hover:text-gray-900 transition">
                  {t('nav.explorer')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/institutional')} className="hover:text-gray-900 transition">
                  {t('nav.institutional')}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/earn')} className="hover:text-gray-900 transition">
                  Earn
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/pay')} className="hover:text-gray-900 transition">
                  {t('nav.pay')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-6">
              {t('footer.resources')}
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <Link href={getLocalizedPath('/apis')} className="hover:text-gray-900 transition">
                  APIs
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/blog')} className="hover:text-gray-900 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/podcast')} className="hover:text-gray-900 transition">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/bitcoin-price')} className="hover:text-gray-900 transition">
                  Bitcoin Price
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/ethereum-price')} className="hover:text-gray-900 transition">
                  Ethereum Price
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/solana-price')} className="hover:text-gray-900 transition">
                  Solana Price
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-6">
              {t('footer.company')}
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <Link href={getLocalizedPath('/about')} className="hover:text-gray-900 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/careers')} className="hover:text-gray-900 transition inline-flex items-center gap-2">
                  Careers
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                    {t('footer.careersHiring')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/ventures')} className="hover:text-gray-900 transition">
                  Ventures
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/support')} className="hover:text-gray-900 transition">
                  Support
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/legal-privacy')} className="hover:text-gray-900 transition">
                  Legal & Privacy
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/eu-regulatory')} className="hover:text-gray-900 transition">
                  EU Regulatory Documents
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/mica-whitepaper')} className="hover:text-gray-900 transition">
                  MiCA White-Paper
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/complaints')} className="hover:text-gray-900 transition">
                  Complaints Handling
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-6">
              {t('footer.learn')}
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 mb-6">
              <li>
                <Link href={getLocalizedPath('/learn/what-is-bitcoin')} className="hover:text-gray-900 transition">
                  What is Bitcoin?
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/learn/what-is-crypto-wallet')} className="hover:text-gray-900 transition">
                  What is a crypto wallet?
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/learn/what-is-dex')} className="hover:text-gray-900 transition">
                  What is a DEX?
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/learn/supported-assets')} className="hover:text-gray-900 transition">
                  What assets do we support?
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/learn/portal')} className="hover:text-gray-900 transition">
                  Learning Portal
                </Link>
              </li>
            </ul>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-4">
              {t('footer.buyingGuides')}
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <Link href={getLocalizedPath('/buy/btc')} className="hover:text-gray-900 transition">
                  Buy BTC
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/buy/eth')} className="hover:text-gray-900 transition">
                  Buy ETH
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/buy/sol')} className="hover:text-gray-900 transition">
                  Buy SOL
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/buy/zeta')} className="hover:text-gray-900 transition">
                  Buy ZETA
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/buy/xrp')} className="hover:text-gray-900 transition">
                  Buy XRP
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col gap-2">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition"
                >
                  <Globe className="w-4 h-4" />
                  <span>{languageNames[currentLang]}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isLanguageOpen && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[120px] z-50">
                    {supportedLocales.map((lang) => (
                      <Link
                        key={lang}
                        href={switchLanguage(lang)}
                        className={`block px-4 py-2 text-sm hover:bg-gray-100 transition ${
                          currentLang === lang ? 'bg-gray-50 font-semibold' : 'text-gray-700'
                        }`}
                        onClick={() => setIsLanguageOpen(false)}
                      >
                        {languageNames[lang]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-600">{t('footer.copyright')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
