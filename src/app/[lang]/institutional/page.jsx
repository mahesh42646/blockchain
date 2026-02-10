'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InstitutionalPage() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1); // Always start with 1 for consistent SSR
  
  const totalSlides = 7;

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setCardsPerView(1);
        } else if (window.innerWidth < 1024) {
          setCardsPerView(2);
        } else {
          setCardsPerView(3);
        }
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxSlide = Math.max(0, totalSlides - cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 639px) {
            .about-bg-responsive {
              background-size: 40% auto !important;
            }
          }
          @media (min-width: 640px) and (max-width: 1023px) {
            .about-bg-responsive {
              background-size: 50% auto !important;
            }
          }
          @media (min-width: 1024px) {
            .about-bg-responsive {
              background-size: auto !important;
            }
          }
        `
      }} />
      {/* Hero Section */}
      <section
        className="relative w-full bg-primary overflow-hidden min-h-[70vh] flex items-center"
        style={{
          backgroundImage: "url('/images/Institutional/fold-blue-bg@2x.png')",
          backgroundSize: "contain",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-12 md:py-20 lg:py-18 relative z-10">
          <div className="max-w-4xl">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-8 sm:mb-8 leading-tight">
              {t("institutional.hero.title")}
            </h1>

            {/* Statistics Box */}
            <div className="bg-gray-500/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-6 mb-8 sm:mb-8 lg:mb-10 border border-gray-700/50 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {/* $1T+ Transacted */}
                <div>
                  <div className="text-4xl sm:text-3xl md:text-5xl font-bold text-white mb-5">
                    {t("institutional.hero.stats.transacted.value")}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    {t("institutional.hero.stats.transacted.label")}
                  </div>
                </div>

                {/* 600+ Tokens Available */}
                <div>
                  <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2">
                    {t("institutional.hero.stats.tokens.value")}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    {t("institutional.hero.stats.tokens.label")}
                  </div>
                </div>

                {/* $537M Equity Capital Raised */}
    <div>
                  <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2">
                    {t("institutional.hero.stats.equity.value")}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    {t("institutional.hero.stats.equity.label")}
                  </div>
                </div>
              </div>
            </div>

            {/* Principal Trading Partner Section */}
            <div className="mb-10 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-5">
                {t("institutional.hero.principalTrading.title")}
              </h2>
              <p className="text-lg sm:text-lg text-white/90 leading-relaxed max-w-3xl">
                {t("institutional.hero.principalTrading.description")}
              </p>
            </div>

            {/* Contact Us Button */}
            <button className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl">
              {t("institutional.hero.contactUs")}
            </button>
          </div>
        </div>
      </section>

      {/* 2024 in Review Section */}
      <section className="relative w-full overflow-hidden bg-primary py-4 sm:py-6 md:py-8 lg:py-10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Main Content Card */}
          <div className="bg-gray-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
              {/* LEFT - Document Image (col-3) */}
              <div className="flex justify-center lg:justify-start order-2 lg:order-1 lg:col-span-3">
                <img
                  src="/images/Institutional/q1-2024.png"
                  alt="2024 Review Document"
                  className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[240px] lg:max-w-[250px] object-contain "
                />
              </div>

              {/* RIGHT - Text Content (col-9) */}
              <div className="text-center lg:text-left order-1 lg:order-2 lg:col-span-9">
                {/* Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                  {t("institutional.reviewSection.title")}
                </h2>

                {/* Description */}
                <p className="text-1xl md:text-lg sm:text-md font-semibold text-white/90 mb-3 sm:mb-4 leading-relaxed">
                  {t("institutional.reviewSection.description")}
                </p>

                {/* Read More Button */}
                <button className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 transition-colors text-xs sm:text-sm shadow-lg hover:shadow-xl">
                  {t("institutional.reviewSection.readMore")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bespoke Capital Solutions Carousel */}
      <section className="relative w-full overflow-hidden bg-primary py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8">
            {t("institutional.bespokeCapital.title")}
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 sm:left-2 bottom-[-25px] -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 rounded-full p-1 transition-colors shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0  sm:right-2 bottom-[-25px] -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 rounded-full p-1 transition-colors shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden px-2 sm:px-8 md:px-12 lg:px-16">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 flex-shrink-0"
                  >
                    <div className="bg-gray-200 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 h-full min-h-[300px] sm:min-h-[360px] md:min-h-[400px] border-r border-blue-900/10 last:border-r-0 flex flex-col">
                      {/* Icon */}
                      <div className="mb-4 flex justify-start">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-transparent border-2 border-yellow-500 flex items-center justify-center">
                          {index === 0 && (
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          )}
                          {index === 3 && (
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                          )}
                          {index === 4 && (
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {index >= 5 && (
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 text-left">
                        {t(`institutional.bespokeCapital.cards.${index}.title`)}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-base sm:text-lg text-black mb-4 text-left">
                        {t(`institutional.bespokeCapital.cards.${index}.subtitle`)}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left flex-grow">
                        {t(`institutional.bespokeCapital.cards.${index}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: Math.max(1, maxSlide + 1) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-500' : 'bg-white'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

          {/* Institutional Investors Section */}
          <section className="relative w-full overflow-hidden bg-primary py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            {t("institutional.investors.title")}
          </h2>

          {/* Investors Grid - 4 items top row, 3 items bottom row centered */}
          <div className="max-w-5xl mx-auto">
            {/* First Row - 4 items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
              <div className="bg-gray-600/30 backdrop-blur-sm  p-4 sm:p-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px] rounded-sm hover:bg-gray-600/70 transition-colors">
                <img
                  src="/images/Institutional/GV.png"
                  alt="GV"
                  className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] object-contain filter brightness-0 invert"
                />
              </div>

              <div className="bg-gray-600/30 backdrop-blur-sm  p-4 sm:p-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px] rounded-sm hover:bg-gray-600/70 transition-colors">
                <img
                  src="/images/Institutional/dst_logo.png"
                  alt="DST Global Partners"
                  className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] object-contain filter brightness-0 invert"
                />
              </div>

              <div className="bg-gray-600/30 backdrop-blur-sm  p-4 sm:p-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px] rounded-sm hover:bg-gray-600/70 transition-colors">
                <img
                  src="/images/Institutional/lightspeed.png"
                  alt="Lightspeed"
                  className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] object-contain filter brightness-0 invert"
                />
              </div>

              <div className="bg-gray-600/30 backdrop-blur-sm  p-4 sm:p-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px] rounded-sm hover:bg-gray-600/70 transition-colors">
                <img
                  src="/images/Institutional/baillie_gifford.png"
                  alt="Baillie Gifford"
                  className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] object-contain filter brightness-0 invert"
                />
              </div>
            </div>

            {/* Second Row - 3 items centered */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              <div className="bg-gray-600/30 backdrop-blur-sm  p-4 sm:p-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px]  rounded-sm w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-24px)]  hover:bg-gray-600/70 transition-colors">
                <img
                  src="/images/Institutional/vy_capital.png"
                  alt="Vy capital"
                  className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] object-contain filter brightness-0 invert"
                />
              </div>

              <div className="bg-gray-600/30 backdrop-blur-sm  p-4 sm:p-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px]  rounded-sm w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-24px)]  hover:bg-gray-600/70 transition-colors">
                <img
                  src="/images/Institutional/lake_star.png"
                  alt="LAKE STAR"
                  className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] object-contain filter brightness-0 invert"
                />
              </div>

              <div className="bg-gray-600/30 backdrop-blur-sm  p-4 sm:p-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px]  rounded-sm w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-24px)]  hover:bg-gray-600/70 transition-colors">
                <img
                  src="/images/Institutional/kyle_bass.png"
                  alt="Kyle Bass"
                  className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] object-contain filter brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Blockchain.com Section */}
      <section 
        className="about-bg-responsive relative w-full overflow-hidden bg-primary py-12 sm:py-16 md:py-20 lg:py-20"
        style={{
          backgroundImage: "url('/images/Institutional/about-blockchain-bg.png')",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "40% auto"
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="relative z-10 max-w-2xl">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.54-3.07 8.92-8 10.1-4.93-1.18-8-5.56-8-10.1V6.18l8-4z"/>
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
              {t("institutional.about.title")}
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-lg text-white/90  font-semibold leading-relaxed">
              {t("institutional.about.description")}
            </p>
          </div>
    </div>
      </section>
      
    </>
  );
}
