'use client';


import { useTranslation } from '@/hooks/useTranslation';

export default function Page() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative h-130 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('/images/home/home-hero-gradient.svg')",
          }}
        />

        <div className="relative container mx-auto flex justify-center pt-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold leading-tight">
              {t('home.heroTitle')}
            </h1>

            <p className="mt-6 text-[24px] font-sans text-white/90">
              {t('home.heroSubtitle')}
            </p>

            <div className="mt-8 flex max-w-xl gap-4">
              <input
                type="email"
                placeholder={t('home.emailPlaceholder')}
                className="flex-1 rounded-lg bg-white/10 px-5 py-4 text-white placeholder-white/70 outline-none backdrop-blur-md"
              />
              <button className="rounded-lg bg-white px-6 py-4 font-semibold text-indigo-600 hover:bg-gray-100">
                {t('home.signUpButton')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-45 w-full">
        <div className="relative z-50 container max-w-5xl mx-auto px-6 mt-32 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <a href="#" className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700">
              {t('common.morePrices')}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">{t('home.whyChooseUs')}</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t('home.whyChooseUsSubtitle')}
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto bg-purple-50 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pl-8 md:pl-20 py-12 md:py-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#efe7ff] px-4 py-2 text-purple-600 font-medium mb-8 w-fit">
                  <span className="text-lg">📱</span>
                  {t('nav.wallet')}
                </div>

                <h2 className="text-[42px] leading-tight font-bold text-purple-700 mb-10">
                  {t('home.walletTitle')}
                </h2>

                <div className="space-y-4 mb-14">
                  <div className="rounded-xl border border-purple-200 bg-[#f3edff] p-5 text-purple-700">
                    <h4 className="font-semibold mb-2">
                      {t('home.walletFeature1')}
                    </h4>
                    <p className="text-sm leading-relaxed text-purple-600">
                      {t('home.walletFeature1Desc')}
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-200 bg-transparent p-5 text-purple-700 font-medium">
                    {t('home.walletFeature2')}
                  </div>

                  <div className="rounded-xl border border-purple-200 bg-transparent p-5 text-purple-700 font-medium">
                    {t('home.walletFeature3')}
                  </div>

                  <div className="rounded-xl border border-purple-200 bg-transparent p-5 text-purple-700 font-medium">
                    {t('home.walletFeature4')}
                  </div>
                </div>

                <button className="rounded-lg bg-purple-700 px-8 py-4 text-white font-semibold hover:bg-purple-800 transition-colors w-fit">
                  {t('home.getStarted')}
                </button>
              </div>
              <div
                className="bg-cover bg-center min-h-[500px] md:min-h-[600px]"
                style={{
                  backgroundImage:
                    "url('/images/home/homepage-app-shapes-bg@2x.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
