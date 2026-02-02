"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function WalletPage() {
  const { t } = useTranslation();

  return (
    <>
      <nav className="w-full bg-[#0f1535] border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* LEFT: Logo */}
            <div className="flex items-center gap-2 text-white font-semibold">
              <img
                src="/images/wallet/wallet-svgrepo-com.svg"
                alt="Wallet"
                className="h-6 w-6 object-contain"
              />
              <span className="text-lg">Wallet</span>
            </div>

            {/* RIGHT: Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
              <a href="#" className="hover:text-white transition">
                Buy
              </a>
              <a href="#" className="hover:text-white transition">
                Earn
              </a>
              <a href="#" className="hover:text-white transition">
                Keys
              </a>
              <a href="#" className="hover:text-white transition">
                DeFi
              </a>
              <a href="#" className="hover:text-white transition">
                Assets
              </a>
              <a href="#" className="hover:text-white transition">
                Security
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
        <div className="container mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="min-h-[85vh] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              {/* LEFT CONTENT */}
              <div className="text-white text-center lg:text-left max-w-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-6">
                  The only crypto wallet you’ll ever need
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10">
                  Buy, store, and do more with your crypto.
                </p>

                {/* CTA BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center justify-items-center  ">
                  <button className="rounded-lg bg-white px-6 py-3  text-indigo-700 font-semibold hover:bg-gray-100 transition">
                    Get started
                  </button>

                  <img
                    src="/images/wallet/app-store-badge.svg"
                    alt="Download on App Store"
                    className="h-40 cursor-pointer"
                  />

                  <img
                    src="/images/wallet/google-play-badge.svg"
                    alt="Get it on Google Play"
                    className="h-40 cursor-pointer"
                  />
                </div>
              </div>

              {/* RIGHT PHONE MOCKUP */}
              <div className="relative hidden lg:block">
                <img
                  src="/images/home/app-wallet-phone@2x.png"
                  alt="Wallet App"
                  className="
      absolute
      left-1
      top-1/2
      -translate-y-1/2

      w-[300px]
      xl:w-[340px]
      2xl:w-[380px]

      max-h-[520px]
      xl:max-h-[580px]

      object-contain
      max-w-none
      drop-shadow-2xl
    "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 bg-white">
        {/* LEFT BACKGROUND SHAPES */}
        <div
          className="
      absolute
      left-0
      top-0
      h-full
      w-1/2
      bg-no-repeat
      bg-left
      bg-contain
      pointer-events-none
    "
          style={{
            backgroundImage: "url('/images/wallet/wallet-buy-shapes@2x.png')",
          }}
        />

        <div className="container mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="min-h-[85vh] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative">
              {/* PHONE MOCKUP (foreground) */}
              <div className="relative hidden lg:flex justify-center">
                <img
                  src="/images/wallet/app-buy-sell-swap-new@2x.png"
                  alt="Wallet App"
                  className="
              relative
              z-10
              right-30
              bottom-[35px]
              w-[300px]
              xl:w-[340px]
              2xl:w-[380px]
              max-h-[520px]
              xl:max-h-[580px]
              object-contain
              drop-shadow-2xl
            "
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="text-black text-center lg:text-left max-w-xl align-right mx-auto lg:mx-0">
                <h1 className="text-[40px] sm:text-4xl md:text-5xl lg:text-[40px] font-medium leading-tight mb-6">
                  Buy, sell, and swap crypto in minutes
                </h1>

                <p className="text-base sm:text-lg md:text-[18px] text-black  /0 mb-10">
                  Verify your identity and add a payment method to start buying
                  crypto.
                </p>
                <button className=" hover:text-blue-500 transition text-lg font-medium">
                  Get started →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white pt-20 ">
        <div className="relative container mx-auto max-w-6xl px-16 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            {/* LEFT CONTENT */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-gray-900 leading-tight mb-6">
                Earn up to 15% on your <br /> crypto
              </h2>

              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Get rewards by putting your Bitcoin, Ethereum, and other crypto
                assets to work.
              </p>

              <a
                href="#"
                className="inline-flex  hover:text-blue-500  text-lg font-medium items-center gap-2  text-gray-900 hover:gap-3 transition-all"
              >
                Learn more
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex justify-center lg:justify-end">
              {/* PHONE */}
              <img
                src="/images/wallet/app-earn-up-new@2x.png"
                alt="Crypto rewards app"
                className="relative z-10 w-[280px] sm:w-[320px] md:w-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f4ff]  sm:py-20">
        {/* BACKGROUND GEOMETRIC PATTERN */}
        <div
          className="
      pointer-events-none
      absolute
      inset-0
      bg-center
      bg-cover
      bg-no-repeat
      opacity-[0.06]
    "
          style={{
            backgroundImage: "url('/images/wallet/banner-bg.svg')",
          }}
        />

        <div className="relative container mx-auto max-w-6xl px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* LEFT – PHONE MOCKUP */}
            <div className="relative flex justify-center lg:justify-center">
              <img
                src="/images/wallet/app-self-custody-crypto-new@2x.png"
                alt="Wallet preview"
                className="
            relative
            z-10
            
            w-[190px]
            sm:w-[260px]
            md:w-[300px]
            lg:w-[full]
            object-contain
            drop-shadow-2xl
            p-1 
          "
              />
            </div>

            {/* RIGHT – CONTENT */}
            <div className="max-w-xl text-center lg:text-left">
              {/* ICON BADGE */}
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-purple-600 text-white mb-5">
                🔑
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-gray-900 leading-tight mb-5">
                Your keys, your crypto
              </h2>

              <p className="text-base sm:text-lg text-gray-600 mb-7">
                Self-custody your crypto across Bitcoin, Ethereum, Polygon, and
                other leading blockchains.
              </p>

              <a
                href="#"
                className="
            inline-flex
            items-center
            gap-2
            text-lg
            font-semibold
            text-gray-900
            hover:gap-3
            transition-all
          "
              >
                Get started
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="relative w-full bg-gradient-to-r from-[#141733] to-[#232642] overflow-hidden">
        <div class="max-w-6xl mx-auto px-6 py-24">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* <!-- LEFT CONTENT --> */}
            <div>
              <h1 class="text-white text-4xl md:text-[40px] font-semibold leading-tight">
                The ultimate home for <br />
                memecoin fans
              </h1>

              <p class="text-gray-300 mt-4 text-lg">
                Memecoin trading starts here
              </p>

              {/* <!-- Listed Coins --> */}
              <div class="flex items-center gap-3 mt-8">
                <span class="text-gray-300 italic text-2xl">Listed Coins</span>

                <div class="flex -space-x-3">
                  <img
                    src="/coins/coin1.png"
                    class="w-10 h-10 rounded-full border border-[#0B0F2B]"
                  />
                  <img
                    src="/coins/coin2.png"
                    class="w-10 h-10 rounded-full border border-[#0B0F2B]"
                  />
                  <img
                    src="/coins/coin3.png"
                    class="w-10 h-10 rounded-full border border-[#0B0F2B]"
                  />
                  <img
                    src="/coins/coin4.png"
                    class="w-10 h-10 rounded-full border border-[#0B0F2B]"
                  />
                </div>

                <span class="text-gray-400 text-lg">+</span>
              </div>

              {/* <!-- CTA --> */}
              <button class="mt-10 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                Learn More
              </button>
            </div>

            {/* <!-- RIGHT VISUAL --> */}
            <div class="relative flex justify-center lg:justify-end">
              <img
                src="/images/wallet/home-glass.png"
                alt="Meme Card"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-fluide">
          <div
            className="
        relative
        bg-primary
        px-6
        sm:px-10
        md:px-14
        py-8
        sm:py-10
        overflow-hidden
         min-h-[140px]
        sm:min-h-[180px]
        md:min-h-[220px]
        justify-center
        flex
      "
            style={{
              backgroundImage: "url('/images/home/banner-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "start",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
              {/* Text */}
              <h2 className="text-white  text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left">
                Let us take you from zero to crypto
              </h2>

              {/* CTA Button */}
              <button
                className="
          shrink-0
          rounded-lg
          bg-white
          px-6
          sm:px-8
          py-3
          text-violet-900
          font-semibold
          hover:bg-gray-100
          transition
        "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
