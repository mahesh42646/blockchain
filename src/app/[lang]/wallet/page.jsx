"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useEffect } from "react";

export default function WalletPage() {
  const { t } = useTranslation();

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navHeight = 64; // Height of sticky nav
          const targetPosition = targetElement.offsetTop - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <>
      <nav className="w-full bg-[#0f1535] border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* LEFT: Logo */}
            <div className="flex items-center gap-2 text-white font-semibold">
              <img
                src="/images/wallet/wallet-svgrepo-com.svg"
                alt={t('wallet.title')}
                className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
              />
              <span className="text-base sm:text-lg">{t('wallet.title')}</span>
            </div>

            {/* RIGHT: Nav Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-white/90">
              <a href="#buy" className="hover:text-white transition-colors scroll-smooth">
                {t('wallet.nav.buy')}
              </a>
              <a href="#earn" className="hover:text-white transition-colors scroll-smooth">
                {t('wallet.nav.earn')}
              </a>
              <a href="#keys" className="hover:text-white transition-colors scroll-smooth">
                {t('wallet.nav.keys')}
              </a>
              <a href="#defi" className="hover:text-white transition-colors scroll-smooth">
                {t('wallet.nav.defi')}
              </a>
              <a href="#assets" className="hover:text-white transition-colors scroll-smooth">
                {t('wallet.nav.assets')}
              </a>
              <a href="#security" className="hover:text-white transition-colors scroll-smooth">
                {t('wallet.nav.security')}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: "url('/images/wallet/wallet-hero-gradient.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center w-full">
              {/* LEFT CONTENT */}
              <div className="text-white text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] font-bold leading-tight mb-4 sm:mb-6">
                  {t('wallet.hero.title')}
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10">
                  {t('wallet.hero.subtitle')}
                </p>

                {/* CTA BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
                  <button className="rounded-lg bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-indigo-700 font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base whitespace-nowrap">
                    {t('wallet.hero.getStarted')}
                  </button>

                  <img
                    src="/images/wallet/app-store-badge.svg"
                    alt={t('wallet.hero.downloadAppStore')}
                    className="h-14 sm:h-16 md:h-20 lg:h-24 cursor-pointer object-contain hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/wallet/google-play-badge.svg"
                    alt={t('wallet.hero.downloadGooglePlay')}
                    className="h-14 sm:h-16 md:h-20 lg:h-24 cursor-pointer object-contain hover:scale-105 transition-transform"
                  />
                </div>
              </div>

              {/* RIGHT PHONE MOCKUP */}
              <div className="relative hidden lg:block">
                <img
                  src="/images/home/app-wallet-phone@2x.png"
                  alt="Wallet App"
                  className="absolute left-1 top-1/2 -translate-y-1/2 w-[280px] xl:w-[340px] 2xl:w-[380px] max-h-[500px] xl:max-h-[580px] object-contain max-w-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="buy" className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-white scroll-mt-16">
        {/* LEFT BACKGROUND SHAPES */}
        <div
          className="absolute left-0 top-0 h-full w-1/2 bg-no-repeat bg-left bg-contain pointer-events-none hidden lg:block"
          style={{
            backgroundImage: "url('/images/wallet/wallet-buy-shapes@2x.png')",
          }}
        />

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center w-full relative">
              {/* PHONE MOCKUP (foreground) */}
              <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                <img
                  src="/images/wallet/app-buy-sell-swap-new@2x.png"
                  alt="Wallet App"
                  className="relative z-10 w-[240px] sm:w-[280px] md:w-[300px] xl:w-[340px] 2xl:w-[380px] max-h-[400px] sm:max-h-[480px] xl:max-h-[580px] object-contain drop-shadow-2xl"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="text-black text-center lg:text-left max-w-xl mx-auto lg:mx-0 order-1 lg:order-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold leading-tight mb-4 sm:mb-6">
                  {t('wallet.buySection.title')}
                </h1>

                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                  {t('wallet.buySection.description')}
                </p>
                <button className="text-blue-600 hover:text-blue-700 transition-colors text-base sm:text-lg font-medium inline-flex items-center gap-2">
                  {t('wallet.buySection.getStarted')}
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="earn" className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-16">
        <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* LEFT CONTENT */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                {t('wallet.earnSection.title')}
              </h2>

              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                {t('wallet.earnSection.description')}
              </p>

              <a
                href="#"
                className="inline-flex hover:text-blue-600 text-base sm:text-lg font-medium items-center gap-2 text-gray-900 hover:gap-3 transition-all"
              >
                {t('wallet.earnSection.learnMore')}
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/images/wallet/app-earn-up-new@2x.png"
                alt="Crypto rewards app"
                className="relative z-10 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="keys" className="relative overflow-hidden bg-[#f7f4ff] py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-16">
        {/* BACKGROUND GEOMETRIC PATTERN */}
        <div
          className="pointer-events-none absolute inset-0 bg-center bg-cover bg-no-repeat opacity-[0.06]"
          style={{
            backgroundImage: "url('/images/wallet/banner-bg.svg')",
          }}
        />

        <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* LEFT – PHONE MOCKUP */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="/images/wallet/app-self-custody-crypto-new@2x.png"
                alt="Wallet preview"
                className="relative z-10 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* RIGHT – CONTENT */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-2">
              {/* ICON BADGE */}
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600 text-white mb-4 sm:mb-5">
                <span className="text-lg sm:text-xl">🔑</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                {t('wallet.keysSection.title')}
              </h2>

              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                {t('wallet.keysSection.description')}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-base sm:text-lg font-medium text-gray-900 hover:text-purple-700 hover:gap-3 transition-all"
              >
                {t('wallet.keysSection.getStarted')}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="defi" className="relative w-full bg-gradient-to-r from-[#141733] to-[#232642] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold leading-tight">
                {t('wallet.memecoinSection.title')}
              </h1>

              <p className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg">
                {t('wallet.memecoinSection.subtitle')}
              </p>

              {/* Listed Coins */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
                <span className="text-gray-300 italic text-xl sm:text-2xl">{t('wallet.memecoinSection.listedCoins')}</span>

                <div className="flex -space-x-2 sm:-space-x-3">
                  <img
                    src="/coins/coin1.png"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0B0F2B]"
                    alt="Coin 1"
                  />
                  <img
                    src="/coins/coin2.png"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0B0F2B]"
                    alt="Coin 2"
                  />
                  <img
                    src="/coins/coin3.png"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0B0F2B]"
                    alt="Coin 3"
                  />
                  <img
                    src="/coins/coin4.png"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0B0F2B]"
                    alt="Coin 4"
                  />
                </div>

                <span className="text-gray-400 text-base sm:text-lg">+</span>
              </div>

              {/* CTA */}
              <button className="mt-6 sm:mt-8 lg:mt-10 bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base">
                {t('wallet.memecoinSection.learnMore')}
              </button>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/images/wallet/home-glass.png"
                alt="Meme Card"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="defi"
        className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 scroll-mt-16"
        style={{
          background: "linear-gradient(135deg, #6B21A8 0%, #9333EA 50%, #3B82F6 100%)",
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* LEFT CONTENT */}
            <div className="text-white text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold leading-tight mb-4 sm:mb-6">
                {t('wallet.defiSection.title')}
              </h2>

              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8">
                {t('wallet.defiSection.subtitle')}
              </p>

                {/* APP STORE BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-black hover:bg-gray-800 rounded-md sm:rounded-lg px-5 sm:px-6 py-3 sm:py-3.5 transition-all group shadow-lg hover:shadow-xl"
                    aria-label={t('wallet.defiSection.downloadAppStore')}
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 mr-3 flex-shrink-0" fill="white" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] sm:text-xs text-white/80 leading-tight font-normal">Download on the</div>
                      <div className="text-sm sm:text-base font-semibold text-white leading-tight">App Store</div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-black hover:bg-gray-800 rounded-md sm:rounded-lg px-5 sm:px-6 py-3 sm:py-3.5 transition-all group shadow-lg hover:shadow-xl"
                    aria-label={t('wallet.defiSection.downloadGooglePlay')}
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 mr-3 flex-shrink-0" fill="white" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] sm:text-xs text-white/80 leading-tight font-normal">GET IT ON</div>
                      <div className="text-sm sm:text-base font-semibold text-white leading-tight">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

            {/* RIGHT PHONE MOCKUP */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/images/home/app-wallet-phone@2x.png"
                alt="DeFi App Interface"
                className="relative z-10 w-[240px] sm:w-[280px] md:w-[300px] xl:w-[340px] 2xl:w-[380px] max-h-[400px] sm:max-h-[480px] xl:max-h-[580px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="assets" className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f7f4ff] scroll-mt-16">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "url('/images/wallet/banner-bg.svg')",
            backgroundRepeat: "contain no-repeat",
            backgroundSize: "auto",
          }}
        />

        <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-gray-900 text-center mb-8 sm:mb-10 lg:mb-12">
            {t('wallet.assetsSection.title')}
          </h2>

          {/* Crypto Cards Grid - 4 columns layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-8">
            {[
              {
                name: "Bitcoin",
                symbol: "BTC",
                price: "$78,389.48",
                change: "-10.93%",
                changeColor: "text-red-500",
                iconBg: "bg-orange-500",
                icon: "B",
                isPositive: false,
              },
              {
                name: "Bitcoin Cash",
                symbol: "BCH",
                price: "$565.75",
                change: "-2.52%",
                changeColor: "text-red-500",
                iconBg: "bg-green-400",
                icon: "B",
                isPositive: false,
              },
              {
                name: "Ethereum",
                symbol: "ETH",
                price: "$2,250.00",
                change: "-22.49%",
                changeColor: "text-red-500",
                iconBg: "bg-purple-600",
                icon: "⟠",
                isPositive: false,
              },
              {
                name: "Litecoin",
                symbol: "LTC",
                price: "$80.84",
                change: "+18.21%",
                changeColor: "text-green-500",
                iconBg: "bg-gray-400",
                icon: "L",
                isPositive: true,
              },
            ].map((coin) => (
              <div
                key={coin.symbol}
                className="bg-white rounded-lg p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {/* Header with Icon and Buttons */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <div className={`${coin.iconBg} w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-base sm:text-lg">{coin.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm leading-tight truncate">
                        {coin.name}
                      </h3>
                      <span className="text-gray-500 text-xs">{coin.symbol}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 flex-shrink-0 ml-2">
                    <button className="rounded bg-purple-100 hover:bg-purple-200 px-2 py-0.5 text-purple-600 text-[10px] font-medium transition-colors whitespace-nowrap">
                      {t('wallet.assetsSection.buy')}
                    </button>
                    <button className="rounded bg-green-100 hover:bg-green-200 px-2 py-0.5 text-green-600 text-[10px] font-medium transition-colors whitespace-nowrap">
                      {t('wallet.assetsSection.trade')}
                    </button>
                  </div>
                </div>

                {/* Price and Change */}
                <div className="mb-3">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 mb-0.5">
                    {coin.price}
                  </div>
                  <div className={`text-xs font-medium ${coin.changeColor}`}>
                    {coin.change}
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="h-12 bg-gray-50 rounded flex items-end justify-center p-1.5 overflow-hidden border border-gray-100">
                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    {coin.isPositive ? (
                      <polyline
                        points="0,38 15,35 25,30 35,25 45,22 55,20 65,18 75,15 85,12 100,10"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      />
                    ) : (
                      <polyline
                        points="0,5 15,8 25,12 30,15 35,18 40,20 45,22 50,25 60,28 70,30 85,32 100,35"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      />
                    )}
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* More Prices Link */}
          <div className="text-center sm:text-start mt-4 sm:mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
            >
              {t('wallet.assetsSection.morePrices')}
            </a>
          </div>
        </div>
      </section>

      <section id="security" className="relative w-full overflow-hidden bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-0 scroll-mt-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-end">
            {/* LEFT CONTENT */}
            <div className="max-w-xl mx-auto lg:mx-0 pb-8 sm:pb-12 lg:pb-16">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 mb-6 sm:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white"></div>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                {t('wallet.securitySection.title')}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                {t('wallet.securitySection.description')}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-base sm:text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors group"
              >
                {t('wallet.securitySection.learnMore')}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* RIGHT - MOBILE PHONE IMAGE */}
            <div className="relative flex justify-center lg:justify-end items-end">
              <img
                src="/images/wallet/app-security-new@1x.png"
                alt="Security backup interface"
                className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="relative bg-primary px-6 sm:px-8 md:px-10 lg:px-14  overflow-hidden min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] flex items-center justify-center rounded-lg sm:rounded-xl"
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
                {t('wallet.banner.title')}
              </h2>

              {/* CTA Button */}
              <button className="shrink-0 rounded-lg bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-violet-900 font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base whitespace-nowrap">
                {t('wallet.banner.getStarted')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
