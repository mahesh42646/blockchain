export default function Page() {
  return (
    <>
      <section className="relative h-130 w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('/images/home/home-hero-gradient.svg')",
          }}
        />

        {/* Hero Content */}
        <div className="relative container mx-auto flex justify-center pt-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold leading-tight">
              Be early to the future of finance
            </h1>

            <p className="mt-6 text-[24px] font-sans text-white/90">
              Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a
              platform trusted by millions.
            </p>

            {/* Email Input */}
            <div className="mt-8 flex max-w-xl gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-lg bg-white/10 px-5 py-4 text-white placeholder-white/70 outline-none backdrop-blur-md"
              />
              <button className="rounded-lg bg-white px-6 py-4 font-semibold text-indigo-600 hover:bg-gray-100">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Crypto Cards */}
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

          <div className="mt-6 text-sm text-blackfont-medium">
            <a href="#" className="inline-flex items-center gap-2 text-black">
              More Prices →
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide a secure, user-friendly platform for buying and trading
            cryptocurrencies.
          </p>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-6  mt-10">
          <div className="max-w-7xl mx-auto bg-purple-50 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className="pl-20 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#efe7ff] px-4 py-2 text-purple-600 font-medium mb-8">
                  <span className="text-lg">📱</span>
                  Wallet
                </div>

                {/* Heading */}
                <h2 className="text-[42px] leading-tight font-bold text-purple-700 mb-10">
                  The only crypto wallet
                  <br />
                  you'll ever need
                </h2>

                {/* Feature Cards */}
                <div className="space-y-4 mb-14">
                  {/* Card 1 (expanded) */}
                  <div className="rounded-xl border border-purple-200 bg-[#f3edff] p-5 text-purple-700">
                    <h4 className="font-semibold mb-2">
                      Buy, sell, and swap with ease
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Use a card or bank account to buy BTC, ETH, stablecoins,
                      and other assets.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-xl border border-purple-200 bg-transparent p-5 text-purple-700 font-medium">
                    Earn rewards on your crypto
                  </div>

                  {/* Card 3 */}
                  <div className="rounded-xl border border-purple-200 bg-transparent p-5 text-purple-700 font-medium">
                    Be Your Own Bank® with self-custody
                  </div>

                  {/* Card 4 */}
                  <div className="rounded-xl border border-purple-200 bg-transparent p-5 text-purple-700 font-medium">
                    Connect to DeFi
                  </div>
                </div>

                {/* CTA */}
                <button className="rounded-lg bg-purple-700 px-8 py-4 text-white font-semibold hover:bg-purple-800 transition">
                  Get started
                </button>
              </div>
              <div
                className=" bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/home/homepage-app-shapes-bg@2x.png')",
                  height: "500px",
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
