"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function Page() {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="w-full bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/home/home-hero-gradient.svg')",
        }}
      >
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[70vh] flex items-center py-12 sm:py-16 md:py-20">
            <div className="max-w-3xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
                {t("home.heroTitle")}
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-sans text-white/90 mb-5 sm:mb-6">
                {t("home.heroSubtitle")}
              </p>

              <div className="flex flex-col sm:flex-row max-w-xl gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder={t("home.emailPlaceholder")}
                  className="flex-1 rounded-lg bg-white/10 px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-white/70 outline-none backdrop-blur-md text-sm sm:text-base"
                />
                <button className="rounded-lg bg-white px-5 sm:px-6 py-3 sm:py-4 font-semibold text-indigo-600 hover:bg-gray-100 text-sm sm:text-base whitespace-nowrap">
                  {t("home.signUpButton")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 w-full">
        <div className="relative z-1 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20 lg:mt-24 pb-8 sm:pb-12 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                name: "Bitcoin",
                symbol: "BTC",
                price: "$87,795.09",
                change: "-2.39%",
              },
              {
                name: "Ethereum",
                symbol: "ETH",
                price: "$2,939.68",
                change: "-3.15%",
              },
              {
                name: "Dogecoin",
                symbol: "DOGE",
                price: "$0.12",
                change: "-4.73%",
              },
              {
                name: "Solana",
                symbol: "SOL",
                price: "$123.01",
                change: "-3.75%",
              },
            ].map((coin) => (
              <div
                key={coin.symbol}
                className="rounded-xl bg-white p-5 shadow-lg"
              >
                <div className="flex justify-between pb-3 items-center">
                  <h3 className="font-semibold">
                    {coin.name}{" "}
                    <span className="text-gray-500">{coin.symbol}</span>
                  </h3>
                  <div className="flex gap-2 text-sm">
                    <span className="rounded bg-purple-100 px-2 py-1 text-purple-600">
                      Buy
                    </span>
                    <span className="rounded bg-green-100 px-2 py-1 text-green-600">
                      Trade
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className="font-semibold">{coin.price}</span>
                  <span className="text-red-500">{coin.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm font-medium">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700"
            >
              {t("common.morePrices")}
            </a>
          </div>
        </div>
      </section>

      {/* <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{t('home.whyChooseUs')}</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {t('home.whyChooseUsSubtitle')}
          </p>
        </div>
      </section> */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-purple-50 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#efe7ff] px-3 sm:px-4 py-1.5 sm:py-2 text-purple-600 font-medium mb-6 sm:mb-8 w-fit text-sm sm:text-base">
                  <span className="text-base sm:text-lg">📱</span>
                  {t("nav.wallet")}
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-tight font-bold text-purple-700 mb-4 sm:mb-6">
                  {t("home.walletTitle")}
                </h2>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 md:mb-14">
                  <div className="rounded-lg sm:rounded-xl border border-purple-200 bg-[#f3edff] p-4 sm:p-5 text-purple-700">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">
                      {t("home.walletFeature1")}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-purple-600">
                      {t("home.walletFeature1Desc")}
                    </p>
                  </div>

                  <div className="rounded-lg sm:rounded-xl border border-purple-200 bg-transparent p-4 sm:p-5 text-purple-700 font-medium text-sm sm:text-base">
                    {t("home.walletFeature2")}
                  </div>

                  <div className="rounded-lg sm:rounded-xl border border-purple-200 bg-transparent p-4 sm:p-5 text-purple-700 font-medium text-sm sm:text-base">
                    {t("home.walletFeature3")}
                  </div>

                  <div className="rounded-lg sm:rounded-xl border border-purple-200 bg-transparent p-4 sm:p-5 text-purple-700 font-medium text-sm sm:text-base">
                    {t("home.walletFeature4")}
                  </div>
                </div>

                <button className="rounded-lg bg-purple-700 px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold hover:bg-purple-800 transition-colors w-full sm:w-fit text-sm sm:text-base">
                  {t("home.getStarted")}
                </button>
              </div>
              <div
                className="relative flex items-end bottom-0 justify-center bg-contain bg-center bg-no-repeat min-h-[320px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px] rounded-2xl overflow-hidden"
                style={{
                  backgroundImage:
                    "url('/images/home/homepage-app-shapes-bg@2x.png')",
                }}
              >
                {/* Decorative overlay – keeps softness like screenshot */}
                <div className="absolute inset-0 bg-transparent" />

                {/* Phone mockup */}
                <img
                  src="/images/home/app-buy-with-ease@2x.png"
                  alt="Mobile app preview"
                  className="absolute bottom-65 right-auto w-[170px] sm:w-[210px] md:w-[240px] lg:w-[280px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 gap-6 sm:gap-8 lg:gap-10">
              {/* LEFT CONTENT */}
              <div className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#e6e9f0] px-4 py-2 text-gray-600 font-medium mb-8 w-fit">
                  🏛 {t('nav.institutional')}
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  {t('home.institutionalTitle')}
                </h2>

                <p className="text-base sm:text-lg text-gray-600 max-w-md mb-6 sm:mb-8">
                  {t('home.institutionalDesc')}
                </p>

                <button className="rounded-lg bg-gray-700 px-6 py-3 text-white font-semibold hover:bg-gray-800 transition">
                  {t('home.institutionalCta')}
                </button>
              </div>

              {/* RIGHT ILLUSTRATION */}
              <div className="relative flex justify-center items-center min-h-[320px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
                <img
                  src="/images/home/homepage-institutional-shapes-bg@2x.png"
                  alt="Institutional crypto illustration"
                  className="w-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-[#fff6ea] rounded-2xl sm:rounded-3xl overflow-hidden md:overflow-visible">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-10">
              {/* LEFT CONTENT */}
              <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#ffedd6] px-4 py-2 text-orange-400 font-medium mb-8">
                  <span className="text-lg">🔍</span>
                  {t('nav.explorer')}
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-orange-400 leading-tight mb-4 sm:mb-6">
                  {t('home.explorerTitle')}
                </h2>

                <div className="space-y-4 mb-10 max-w-md">
                  <div className="rounded-xl border border-orange-200 bg-[#fff1df] p-5 text-orange-400">
                    {t('home.explorerDesc')}
                  </div>

                  <div className="rounded-xl border border-orange-200 p-5 text-orange-400">
                    {t('home.explorerFeature1')}
                  </div>

                  <div className="rounded-xl border border-orange-200 p-5 text-orange-400">
                    {t('home.explorerFeature2')}
                  </div>

                  <div className="rounded-xl border border-orange-200 p-5 text-orange-400">
                    {t('home.explorerFeature3')}
                  </div>
                </div>

                <button className="rounded-lg bg-orange-400 px-6 py-3 text-white font-semibold hover:bg-orange-500 transition">
                  {t('home.explorerCta')}
                </button>
              </div>

              {/* RIGHT ILLUSTRATION */}
              <div
                className="relative bg-contain bg-center bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[600px] xl:min-h-[680px] overflow-hidden flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/images/home/homepage-explorer-shapes-bg@2x.png')",
                }}
              >
                <img
                  src="/images/home/prod-explore-blockchains-sm@2x.png"
                  alt="Blockchain Explorer"
                  className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[620px] object-contain z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        
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
