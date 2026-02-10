'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { supportedLocales } from '@/lib/i18n';
import { Globe, ChevronDown } from 'lucide-react';
import Image from 'next/image';
const languageNames = {
  en: 'English',
  hi: 'हिंदी',
  es: 'Español'
};

const languageFlags = {
  en: '🇬🇧',
  hi: '🇮🇳',
  es: '🇪🇸'
};
const PROJECT_NAME = process.env.PROJECT_NAME;


export default function LoginPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const locale = params?.lang || 'en';

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageDropdownRef = useRef(null);

  const switchLanguage = (newLang) => {
    const pathWithoutLang = pathname.replace(`/${locale}`, '') || '/';
    return `/${newLang}${pathWithoutLang}`;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    if (isLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageOpen]);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      await signInWithPopup(auth, googleProvider);
      router.push(`/${locale}/user`);
    } catch (err) {
      setError(t('auth.error'));
      console.error('Google login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      router.push(`/${locale}/user`);
    }
  };

  return (
    <div className="bg-[linear-gradient(135deg,_#121D33,_#164694)] ">

      <div className="h-[56px] ">
        <h2 className=" font-semibold text-white text-[16px]   text-end py-[16px] px-10">
          <a href="/" className="text-white hover:text-gray-300 ">
            Log in to Exchange
          </a>
        </h2>
      </div>


      <div className="   flex items-center justify-center">



        <div className="w-full max-w-[472px]    ">
          <div className="py-[40px]">
            <div className="text-center flex items-center justify-center ">
              <Image
                className="h-[24px] w-auto"
                src="/branding_white.svg"
                alt="Blockchain.com"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="bg-white rounded-[14px] shadow-xl p-[24px]  relative">


            <div className="">
              <div className="pt-[24px] flex items-center justify-between ">

                <h3 className="font-bold font-bold text-gray-900 mb-2 text-[20px] ">
                  {t('auth.loginOrSignup')}
                </h3>

                <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-full bg-gray-300 rounded-sm"></div>
                ))}
              </div>
              </div>
              <p className="text-[16px] pb-[32px] font-bold text-[#677184]">{t('auth.beYourOwnBank')}</p>

             
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-[16px]">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('auth.emailOrWalletId')}
                </label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('auth.emailOrWalletIdPlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('auth.continue')}
              </button>
            </form>

            <div className="relative pt-[56px] pb-[16px] ">
              
              <div className=" flex justify-center text-[14px]">
                <span className="px-2 bg-white text-gray-500">{t('auth.orContinueWith')}</span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-3 font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span>{t('auth.loading')}</span>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>{t('auth.google')}</span>
                </>
              )}
            </button>

            <div className="mt-6 text-center  ">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-bold "
              >
                {t('auth.importWallet')}
              </a>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
                {error}
              </div>
            )}


          </div>
          <div className=" py-8 text-[13px] text-bold  text-center text-white border-gray-200">
            <p className=" text-center text-bold  ">
              {t('auth.termsAndPrivacy')}{' '}
              <a href="#" className="text-blue-600 font-bold hover:underline">
                {t('auth.termsOfService')}
              </a>{' '}
              &{' '}
              <a href="#" className="text-blue-600 font-bold hover:underline">
                {t('auth.privacyPolicy')}
              </a>
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
              <p className=" text-center">
                {t('auth.copyright')} {t('auth.version')} {process.env.PROJECT_VERSION} |
              </p>
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-1  text-gray-500 hover:text-gray-700 transition"
                >
                  <span>{languageFlags[locale]}</span>
                  <span>{languageNames[locale]}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </button>
                {isLanguageOpen && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white border border-gray-600 rounded-lg shadow-lg min-w-[120px] z-50">
                    {supportedLocales.map((lang) => (
                      <Link
                        key={lang}
                        href={switchLanguage(lang)}
                        className={`flex items-center gap-2 px-4 py-2 text-bold  hover:bg-gray-100 transition ${locale === lang ? 'bg-gray-500 ' : 'text-gray-600'
                          }`}
                        onClick={() => setIsLanguageOpen(false)}
                      >
                        <span>{languageFlags[lang]}</span>
                        <span>{languageNames[lang]}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
