'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';
import Link from 'next/link';

export default function VenturesPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative w-full overflow-hidden bg-primary min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] flex items-center py-12 sm:py-16 md:py-20 lg:py-24"
        style={{
          backgroundImage: "url('/images/ventures/blue-gradient_hero-bg@2x.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
              {t("ventures.hero.title")}
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-white/90 font-normal leading-relaxed max-w-xl">
              {t("ventures.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Desktop (>750px): full img, reduced height, bottom-right */}
          <div
            className="absolute bottom-0 right-0 hidden h-[280px] w-[60%] min-w-[350px] bg-contain bg-right-bottom bg-no-repeat min-[751px]:block md:h-[400px] lg:h-[400px] xl:h-[450px] xl:min-w-[400px]"
            style={{ backgroundImage: "url('/images/ventures/press_hero-background@2x.png')" }}
            role="img"
            aria-label={t("ventures.story.imageAlt")}
          />

          {/* Mobile (≤750px): full img, reduced height, bottom-right */}
          <div
            className="absolute bottom-0 right-0 block h-[180px] w-[55%] min-w-[160px] bg-contain bg-right-bottom bg-no-repeat min-[751px]:hidden sm:h-[220px] sm:w-[48%]"
            style={{ backgroundImage: "url('/images/ventures/press_hero-background--mobile.png')" }}
            role="img"
            aria-label={t("ventures.story.imageAltMobile")}
          />

          {/* Content */}
          <div className="relative z-10 flex max-w-2xl flex-col">
            {/* Icon */}
            <div className="mb-6 bg-blue-500 w-14 h-14 rounded-3xl p-3 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none" className="text-white">
                <path d="M2.73804 11.7517L1.27805 13.227C0.873946 13.6193 0.552446 14.09 0.332825 14.611C0.113204 15.1319 0 15.6923 0 16.2585C0 16.8248 0.113204 17.3852 0.332825 17.9061C0.552446 18.427 0.873946 18.8977 1.27805 19.29L13.04 31.2927C13.3188 31.5809 13.6432 31.82 14 32.0001V17.4509L2.73804 11.7517Z" fill="currentColor"></path>
                <path d="M29.262 11.7517L30.722 13.227C31.1261 13.6193 31.4476 14.09 31.6672 14.611C31.8868 15.1319 32 15.6923 32 16.2585C32 16.8248 31.8868 17.3852 31.6672 17.9061C31.4476 18.427 31.1261 18.8977 30.722 19.29L18.96 31.2927C18.6812 31.5809 18.3568 31.82 18 32.0001V17.4509L29.262 11.7517Z" fill="currentColor"></path>
                <path d="M26.4379 8.74005L19.0779 1.28259C18.6882 0.876789 18.2219 0.554151 17.7066 0.333836C17.1913 0.11352 16.6374 0 16.0779 0C15.5183 0 14.9645 0.11352 14.4491 0.333836C13.9338 0.554151 13.4675 0.876789 13.0779 1.28259L5.69788 8.74005L16.0379 13.9542L26.4379 8.74005Z" fill="currentColor"></path>
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
              {t("ventures.story.title")}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              {t("ventures.story.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Value Add Section */}
      <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
              {t("ventures.valueAdd.title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
              {t("ventures.valueAdd.description")}
            </p>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:border-blue-700 hover:text-blue-700 transition-colors font-medium text-sm sm:text-base">
              {t("ventures.valueAdd.button")}
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Companies Section */}
      <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-gray-200 rounded-lg overflow-hidden bg-white">
            {[
              { src: '/images/ventures/origin@2x.png', alt: t("ventures.portfolio.origin") },
              { src: '/images/ventures/securitize@2x.png', alt: t("ventures.portfolio.securitize") },
              { src: '/images/ventures/theta@2x.png', alt: t("ventures.portfolio.theta") },
              { src: '/images/ventures/deversifi-logo.png', alt: t("ventures.portfolio.deversifi") },
              { src: '/images/ventures/index-logo.png', alt: t("ventures.portfolio.index") },
              { src: '/images/ventures/messari-logo.png', alt: t("ventures.portfolio.messari") },
            ].map((item, index) => (
              <div
                key={item.alt}
                className={`flex min-h-[120px] sm:min-h-[140px] md:min-h-[160px] items-center justify-center border-gray-200 p-4 sm:p-6 bg-white hover:bg-gray-50 transition-all duration-300 ${
                  index % 3 !== 2 ? 'md:border-r' : ''
                } ${
                  index < 3 ? 'border-b md:border-b' : index < 6 ? 'md:border-b' : ''
                }`}
              >
                <Link href="/ventures/projects" className="flex items-center justify-center w-full h-full group">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={140}
                      height={56}
                      className="max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 w-auto object-contain object-center grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                      unoptimized
                      priority={index < 3}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Management Team Section */}
      <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-8 sm:mb-12">
            {t("ventures.team.title")}
          </h2>
          <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {[
              { name: t("ventures.team.members.0.name"), src: '/images/ventures/sam-harrison.png' },
              { name: t("ventures.team.members.1.name"), src: '/images/ventures/sam-harrison.png' },
            ].map((person) => (
              <div key={person.name} className="flex flex-col items-start">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden bg-gray-100 flex-shrink-0 mb-4 sm:mb-5">
                  <Image
                    src={person.src}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                    unoptimized
                  />
                </div>
                <p className="text-lg sm:text-xl md:text-xl font-medium text-gray-900">
                  {person.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
