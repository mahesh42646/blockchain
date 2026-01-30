"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function Page() {
  const { t } = useTranslation();

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/images/home/home-hero-gradient.svg')",
        }}
        className=" w-full bg-cover    overflow-hidden"
      >
        <div className="py-24 px-16 sm:px-24 md:px-36    ">
          <div className="text-white container   py-12  ">
            <div className="max-w-3xl text- text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {t("home.heroTitle")}
              </h1>

              <p className="  text-lg sm:text-xl md:text-2xl font-sans text-white/90">
                {t("home.heroSubtitle")}
              </p>

              <div className="  flex flex-col sm:flex-row max-w-xl gap-3 sm:gap-4">
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

      <section className="-mt-20 sm:-mt-32 md:-mt-45 w-full">
        <div className="relative z-50 container max-w-5xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 md:mt-32 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <div className="flex justify-between items-center">
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
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto bg-purple-50 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="px-6 sm:pl-8 md:pl-12 lg:pl-20 py-8 sm:py-12 md:py-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#efe7ff] px-3 sm:px-4 py-1.5 sm:py-2 text-purple-600 font-medium mb-6 sm:mb-8 w-fit text-sm sm:text-base">
                  <span className="text-base sm:text-lg">📱</span>
                  {t("nav.wallet")}
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-bold text-purple-700 mb-6 sm:mb-8 md:mb-10">
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
                className="
    relative
    flex
    items-end
    justify-center
    bg-cover
    bg-center
    bg-no-repeat
    min-h-[320px]
    sm:min-h-[420px]
    md:min-h-[480px]
    lg:min-h-[520px]
    rounded-2xl
    overflow-hidden
  "
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
                  className="
      absolute
      bottom-30
      right-10
      w-[170px]
      sm:w-[210px]
      md:w-[250px]
      lg:w-[280px]
      object-contain
      drop-shadow-2xl
    "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
