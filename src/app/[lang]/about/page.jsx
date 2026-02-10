'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';

export default function AboutPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('board');

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
        className="about-bg-responsive relative w-full overflow-hidden bg-primary py-12 sm:py-16 md:py-20 lg:py-24"
        style={{
          backgroundImage: "url('/images/about/about-blockchain-bg.png')",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "40% auto"
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="relative z-10">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                {t("about.hero.title")}
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-xl text-white/90 font-normal leading-relaxed">
                {t("about.hero.description")}
              </p>
            </div>

            {/* Right Column - Spacer for background image */}
            <div className="relative z-10 hidden lg:block">
              {/* This column is intentionally left empty to allow the background image to show */}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header with Title, Description, and Tabs */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Left Side - Title and Description */}
            <div className="flex-1 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
                {t("about.team.title")}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {t("about.team.description")}
              </p>
            </div>

            {/* Right Side - Tabs */}
            <div className="relative inline-flex bg-gray-100 border border-gray-300 rounded-2xl p-1 lg:mt-0 w-full sm:w-auto">
              {/* Sliding Background */}
              <div
                className={`absolute top-1 bottom-1 rounded-2xl bg-primary transition-all duration-300 ease-in-out ${
                  activeTab === 'board'
                    ? 'left-1 right-1/2 mr-0.5'
                    : 'left-1/2 right-1 ml-0.5'
                }`}
              />
              
              {/* Tab Buttons */}
              <button
                onClick={() => setActiveTab('board')}
                className={`relative z-10 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base transition-colors whitespace-nowrap flex-1 sm:flex-none ${
                  activeTab === 'board'
                    ? 'text-white'
                    : 'text-gray-700'
                }`}
              >
                {t("about.team.tabs.board")}
              </button>
              <button
                onClick={() => setActiveTab('management')}
                className={`relative z-10 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base transition-colors whitespace-nowrap flex-1 sm:flex-none ${
                  activeTab === 'management'
                    ? 'text-white'
                    : 'text-gray-700'
                }`}
              >
                {t("about.team.tabs.management")}
              </button>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {activeTab === 'board' && (
              <>
                {Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-full aspect-square max-w-[280px] mx-auto mb-4 sm:mb-6 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={t(`about.team.board.${index}.image`)}
                        alt={t(`about.team.board.${index}.name`)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">
                      {t(`about.team.board.${index}.role`)}
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-primary">
                      {t(`about.team.board.${index}.name`)}
                    </p>
                  </div>
                ))}
              </>
            )}

            {activeTab === 'management' && (
              <>
                {Array.from({ length: 7 }).map((_, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-full aspect-square max-w-[280px] mx-auto mb-4 sm:mb-6 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={t(`about.team.management.${index}.image`)}
                        alt={t(`about.team.management.${index}.name`)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">
                      {t(`about.team.management.${index}.role`)}
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-primary">
                      {t(`about.team.management.${index}.name`)}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* About Blockchain.com Section */}
      <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Logo and Title */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-purple-600 flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.54-3.07 8.92-8 10.1-4.93-1.18-8-5.56-8-10.1V6.18l8-4z"/>
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("about.company.title")}
            </h2>
            <p className="text-base text-gray-800 leading-relaxed max-w-2xl ">
              {t("about.company.description")}
            </p>
          </div>

          {/* Statistics Grid - 2 rows x 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: 100M Wallets Created - Light Blue */}
            <div 
              className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-blue-50 overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/about/about-bg-shapes-blue.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="relative z-10 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {t("about.company.stats.wallets.value")}
                </div>
                <div className="text-xs sm:text-sm text-blue-700">
                  {t("about.company.stats.wallets.label")}
                </div>
              </div>
            </div>

            {/* Card 2: $1T+ Transacted - Light Green */}
            <div 
              className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-green-50 overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/about/about-bg-shapes-green.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="relative z-10 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {t("about.company.stats.transacted.value")}
                </div>
                <div className="text-xs sm:text-sm text-green-700">
                  {t("about.company.stats.transacted.label")}
                </div>
              </div>
            </div>

            {/* Card 3: 1500+ Engaged Institutional Clients - Light Purple */}
            <div 
              className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-purple-50 overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/about/about-bg-shapes-purple.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="relative z-10 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                  {t("about.company.stats.clients.value")}
                </div>
                <div className="text-xs sm:text-sm text-purple-700">
                  {t("about.company.stats.clients.label")}
                </div>
              </div>
            </div>

            {/* Card 4: 39M Verified Retail Users - Light Orange */}
            <div 
              className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-orange-50 overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/about/about-bg-shapes-orange.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="relative z-10 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {t("about.company.stats.users.value")}
                </div>
                <div className="text-xs sm:text-sm text-orange-700">
                  {t("about.company.stats.users.label")}
                </div>
              </div>
            </div>

            {/* Card 5: 100+ Countries - Light Red/Pink */}
            <div 
              className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-pink-50 overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/about/about-bg-shapes-red.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="relative z-10 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                  {t("about.company.stats.countries.value")}
                </div>
                <div className="text-xs sm:text-sm text-pink-700">
                  {t("about.company.stats.countries.label")}
                </div>
              </div>
            </div>

            {/* Card 6: 2011 Date Founded - Light Gray */}
            <div 
              className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-gray-50 overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/about/about-bg-shapes-grey.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="relative z-10 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 mb-2">
                  {t("about.company.stats.founded.value")}
                </div>
                <div className="text-xs sm:text-sm text-gray-700">
                  {t("about.company.stats.founded.label")}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Description Text with Image */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  {t("about.company.paragraph1")}
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {t("about.company.paragraph2")}
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <img
                  src="/images/about/about-section-bg.png"
                  alt="Blockchain.com"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 border-t border-gray-300">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
              {t("about.investors.title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              {t("about.investors.subtitle")}
            </p>
          </div>

          {/* Investor Logos Grid - 2 rows x 3 columns with table-like borders */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {/* Row 1 - Logo 1: Baillie Gifford */}
              <div className="flex items-center justify-center p-4 sm:p-5 md:p-6 bg-gray-50 border-r-0 sm:border-r border-b border-gray-300 sm:last:border-b-0 lg:border-b">
                <img
                  src="/images/about/baillie_gifford.png"
                  alt="Baillie Gifford"
                  className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>

              {/* Row 1 - Logo 2: Moore Strategic Ventures */}
              <div className="flex items-center justify-center p-4 sm:p-5 md:p-6 bg-gray-50 border-r-0 sm:border-r border-b border-gray-300 sm:last:border-b-0 lg:border-b lg:border-r">
                <div className="text-gray-700 text-xs sm:text-sm md:text-base font-semibold text-center px-2">
                  Moore Strategic Ventures
                </div>
              </div>

              {/* Row 1 - Logo 3: GV (G/ logo) */}
              <div className="flex items-center justify-center p-4 sm:p-5 md:p-6 bg-gray-50 border-b border-gray-300 sm:border-b-0 lg:border-b lg:border-r-0">
                <img
                  src="/images/about/gv-black.png"
                  alt="GV"
                  className="w-full h-auto max-w-[70px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>

              {/* Row 2 - Logo 4: Vy Capital */}
              <div className="flex items-center justify-center p-4 sm:p-5 md:p-6 bg-gray-50 border-r-0 sm:border-r border-b-0 sm:border-b lg:border-b-0 border-gray-300">
                <img
                  src="/images/about/vy.png"
                  alt="Vy Capital"
                  className="w-full h-auto max-w-[90px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>

              {/* Row 2 - Logo 5: DST Global Partners */}
              <div className="flex items-center justify-center p-4 sm:p-5 md:p-6 bg-gray-50 border-r-0 sm:border-r border-b-0 sm:border-b lg:border-b-0 border-gray-300 lg:border-r">
                <img
                  src="/images/about/dst_logo.png"
                  alt="DST Global Partners"
                  className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>

              {/* Row 2 - Logo 6: Lightspeed */}
              <div className="flex items-center justify-center p-4 sm:p-5 md:p-6 bg-gray-50 border-b-0 border-gray-300">
                <img
                  src="/images/about/lightspeed.jpg"
                  alt="Lightspeed"
                  className="w-full h-auto max-w-[95px] sm:max-w-[110px] md:max-w-[130px] lg:max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition Section */}
      <section className="relative w-full bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Left Side - Title */}
            <div className="flex-shrink-0 lg:w-1/4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-primary leading-tight">
                {t("about.awards.title")}
              </h2>
            </div>

            {/* Right Side - Award Logos in Horizontal Row */}
            <div className="flex-1 lg:w-3/4">
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5">
                {/* CNBC DISRUPTOR 50 2022 */}
                <div className="flex items-center justify-center p-1 sm:p-2 flex-shrink-0">
                  <img
                    src="/images/about/about_CNBC-logo2x.png"
                    alt="CNBC Disruptor 50 2022"
                    className="h-auto max-h-[40px] sm:max-h-[45px] md:max-h-[50px] object-contain"
                  />
                </div>

                <div className="flex items-center justify-center p-1 sm:p-2 flex-shrink-0">
                  <img
                    src="/images/about/about_technology-logo2x.png"
                    alt="CNBC Disruptor 50 2022"
                    className="h-auto max-h-[40px] sm:max-h-[45px] md:max-h-[50px] object-contain"
                  />
                </div>

                {/* INATBA */}
                <div className="flex items-center justify-center p-1 sm:p-2 flex-shrink-0">
                  <img
                    src="/images/about/inatba-logo2x.png"
                    alt="INATBA"
                    className="h-auto max-h-[40px] sm:max-h-[45px] md:max-h-[50px] object-contain"
                  />
                </div>

                {/* FINTECH BREAKTHROUGH AWARD 2022 */}
                <div className="flex items-center justify-center p-1 sm:p-2 flex-shrink-0">
                  <img
                    src="/images/about/about_fintech-logo2x.png"
                    alt="Fintech Breakthrough Award 2022"
                    className="h-auto max-h-[40px] sm:max-h-[45px] md:max-h-[50px] object-contain"
                  />
                </div>

                {/* LAZARD T100 */}
                <div className="flex items-center justify-center p-1 sm:p-2 flex-shrink-0">
                  <img
                    src="/images/about/about_lazard-logo2x.png"
                    alt="Lazard T100"
                    className="h-auto max-h-[40px] sm:max-h-[45px] md:max-h-[50px] object-contain"
                  />
                </div>

                {/* CBINSIGHTS Blockchain 50 2022 */}
                <div className="flex items-center justify-center p-1 sm:p-2 flex-shrink-0">
                  <img
                    src="/images/about/about_CBInsights-logo2x.png"
                    alt="CB Insights Blockchain 50 2022"
                    className="h-auto max-h-[40px] sm:max-h-[45px] md:max-h-[50px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="relative bg-primary px-6 sm:px-8 md:px-10 lg:px-14 py-8 sm:py-10 md:py-12 overflow-hidden min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] flex items-center justify-center rounded-lg sm:rounded-xl"
            style={{
              backgroundImage: "url('/images/home/banner-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
              {/* Text */}
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center sm:text-left">
                {t('home.bannerTitle')}
              </h2>

              {/* CTA Button */}
              <button className="shrink-0 rounded-lg bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-violet-900 font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base whitespace-nowrap">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
