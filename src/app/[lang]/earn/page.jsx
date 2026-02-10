"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useState, useEffect } from "react";
import { Search, ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

export default function Page() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("assets-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [faqTab, setFaqTab] = useState("passive");
  const [openFaqs, setOpenFaqs] = useState([]);

  const assets = [
    { name: "Bitcoin", symbol: "BTC", rate: "8%", type: "active", icon: "/images/earn/coin-logo-btc.svg", iconBg: "bg-orange-500" },
    { name: "Ethereum", symbol: "ETH", rate: "8%", type: "active", icon: "/images/earn/coin-logo-eth.svg", iconBg: "bg-purple-600" },
    { name: "Ethereum", symbol: "ETH", rate: "2%", type: "staking", icon: "/images/earn/coin-logo-eth.svg", iconBg: "bg-purple-600" },
    { name: "Solana", symbol: "SOL", rate: "4%", type: "staking", iconBg: "bg-black" },
    { name: "Bitcoin", symbol: "BTC", rate: "0.65%", type: "passive", icon: "/images/earn/coin-logo-btc.svg", iconBg: "bg-orange-500" },
    { name: "Ethereum", symbol: "ETH", rate: "3%", type: "passive", icon: "/images/earn/coin-logo-eth.svg", iconBg: "bg-purple-600" },
    { name: "Ethena", symbol: "ENA", rate: "10%", type: "passive", iconBg: "bg-black", iconText: "E" },
    { name: "USDC", symbol: "USDC", rate: "9.5%", type: "passive", iconBg: "bg-blue-500", iconText: "$" },
    { name: "USDT", symbol: "USDT", rate: "9.5%", type: "passive", iconBg: "bg-green-500", iconText: "T" },
    { name: "Pax Dollar", symbol: "USDP", rate: "9.5%", type: "passive", iconBg: "bg-green-500", iconText: "$" },
    { name: "Synthetix", symbol: "SNX", rate: "7%", type: "passive", iconBg: "bg-purple-600", iconText: "X" },
    { name: "TRON", symbol: "TRX", rate: "6%", type: "passive", iconBg: "bg-red-500", iconText: "T" },
    { name: "ZetaChain", symbol: "ZETA", rate: "5%", type: "passive", iconBg: "bg-green-600", iconText: "Z" },
    { name: "Polkadot", symbol: "DOT", rate: "5%", type: "passive", iconBg: "bg-pink-500", iconText: "D" },
    { name: "NEAR Protocol", symbol: "NEAR", rate: "5%", type: "passive", iconBg: "bg-black", iconText: "N" }
  ];

  const filteredAssets = assets
    .filter((asset) => {
      if (activeTab !== "all" && asset.type !== activeTab) return false;
      if (searchQuery && !asset.name.toLowerCase().includes(searchQuery.toLowerCase()) && !asset.symbol.toLowerCase().includes(searchQuery.toLowerCase()))
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "assets-asc") return a.name.localeCompare(b.name);
      if (sortBy === "assets-desc") return b.name.localeCompare(a.name);
      if (sortBy === "rate-low") return parseFloat(a.rate) - parseFloat(b.rate);
      if (sortBy === "rate-high") return parseFloat(b.rate) - parseFloat(a.rate);
      return 0;
    });

  const paginatedAssets = filteredAssets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery, sortBy]);

  return (
    <>
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/images/earn/earn-hero-gradient.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="min-h-[70vh] sm:min-h-[80vh] lg:min-h-[70vh] flex items-center py-12 sm:py-5 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-center w-full">
            {/* LEFT CONTENT */}
            <div className="text-white text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-[40px] font-semibold leading-tight mb-4 sm:mb-6">
                {t("earn.hero.title")}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
                {t("earn.hero.subtitle")}
              </p>

              <button className="rounded-lg bg-blue-600 px-7 sm:px-8 py-3 sm:py-3.5 text-white font-semibold hover:bg-indigo-700 transition-colors text-sm sm:text-base">
                {t("earn.hero.cta")}
              </button>

              <p className="mt-5 text-xs sm:text-sm text-white/85 font-semibold italic max-w-lg mx-auto lg:mx-0">
                {t("earn.hero.disclaimerPrefix")}{" "}
                <a
                  href="#"
                  className="underline underline-offset-4 hover:text-white transition-colors"
                >
                  {t("earn.hero.disclaimerLink")}
                </a>
              </p>
            </div>

            {/* RIGHT PHONE MOCKUP */}
            <div className="relative hidden lg:flex items-center justify-end">
              <div className="relative">
                <img
                  src="/images/earn/earn-mobile-app@2x.png"
                  alt={t("earn.hero.phoneAlt")}
                  className="w-[320px] xl:w-[380px] 2xl:w-[420px] max-h-[640px] object-contain max-w-none drop-shadow-2xl"
                />

                {/* Floating cards */}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Different Ways to Earn Comparison Table */}
    <section className="relative w-full bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          {t("earn.comparison.title")}
        </h2>

        <div className="bg-gray-100  rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="p-4 sm:p-6 text-left"></th>
                  <th className="p-4 sm:p-6 text-center">
                    <div className="flex flex-col items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                        <span className="text-white text-lg sm:text-xl font-bold">%</span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{t("earn.comparison.passive.title")}</h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-1">{t("earn.comparison.passive.description")}</p>
                      </div>
                    </div>
                  </th>
                  <th className="p-4 sm:p-6 text-center">
                    <div className="flex flex-col items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{t("earn.comparison.staking.title")}</h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-1">{t("earn.comparison.staking.description")}</p>
                      </div>
                    </div>
                  </th>
                  <th className="p-4 sm:p-6 text-center">
                    <div className="flex flex-col items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-600 flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{t("earn.comparison.active.title")}</h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-1">{t("earn.comparison.active.description")}</p>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-4 sm:p-6 font-semibold border border-gray-300 text-gray-900">{t("earn.comparison.for")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.passive.for")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.staking.for")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.active.for")}</td>
                </tr>
                <tr className="border-b border-gray-300 bg-gray-50">
                  <td className="p-4 sm:p-6 font-semibold border border-gray-300 text-gray-900">{t("earn.comparison.assets")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.passive.assets")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-600/80 flex items-center justify-center">
                        <img src="/images/earn/coin-logo-eth.svg" alt="Ethereum" className="w-4 h-4" />
                      </div>
                      <span>{t("earn.comparison.staking.assets")}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-center text-gray-700">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center">
                        <img src="/images/earn/coin-logo-btc.svg" alt="Bitcoin" className="w-4 h-4" />
                        
                      </div>
                      <span>{t("earn.comparison.active.assets")}</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4 sm:p-6 font-semibold border border-gray-300 text-gray-900">{t("earn.comparison.useCase")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700 text-sm sm:text-base">{t("earn.comparison.passive.useCase")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700 text-sm sm:text-base">{t("earn.comparison.staking.useCase")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700 text-sm sm:text-base">{t("earn.comparison.active.useCase")}</td>
                </tr>
                <tr className="border-b border-gray-300 bg-gray-50">
                  <td className="p-4 sm:p-6 font-semibold border border-gray-300 text-gray-900">{t("earn.comparison.rate")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700 text-sm sm:text-base">{t("earn.comparison.passive.rate")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700 text-sm sm:text-base">{t("earn.comparison.staking.rate")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700 text-sm sm:text-base">{t("earn.comparison.active.rate")}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4 sm:p-6 font-semibold border border-gray-300 text-gray-900">{t("earn.comparison.earned")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.passive.earned")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.staking.earned")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.active.earned")}</td>
                </tr>
                <tr className="border-b border-gray-300 bg-gray-50">
                  <td className="p-4 sm:p-6 font-semibold border border-gray-300 text-gray-900">{t("earn.comparison.paid")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.passive.paid")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.staking.paid")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.active.paid")}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4 sm:p-6 font-semibold border border-gray-300 text-gray-900">{t("earn.comparison.withdraw")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.passive.withdraw")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.staking.withdraw")}</td>
                  <td className="p-4 sm:p-6 text-center border border-gray-300 text-gray-700">{t("earn.comparison.active.withdraw")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-12">
          <button className="rounded-lg bg-blue-600 hover:bg-purple-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 transition-colors text-base sm:text-lg shadow-lg">
            {t("earn.comparison.cta")}
          </button>
        </div>
      </div>
    </section>

    {/* Earn on Every Asset Section */}
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-4xl text-center py-5 font-bold text-gray-900 mb-8 sm:mb-12">
          {t("earn.portfolio.title")}
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
          {["all", "passive", "staking", "active"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-2.5   font-medium text-sm sm:text-base transition-colors ${
                activeTab === tab
                  ? "bg-blue-100 text-blue-700 shadow-md rounded-3xl bg-gray-100 "
                  : " text-gray-700 hover:shadow-gray-300/50"
              }`}
            >
              {t(`earn.portfolio.tabs.${tab}`)}
            </button>
          ))}
        </div>

        {/* Search and Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t("earn.portfolio.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg  bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
              className="appearance-none w-full sm:w-auto min-w-[200px] pl-4 pr-10 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent bg-white cursor-pointer"
            >
              <option value="assets-asc">{t("earn.portfolio.sort.assetsAsc")}</option>
              <option value="assets-desc">{t("earn.portfolio.sort.assetsDesc")}</option>
              <option value="rate-low">{t("earn.portfolio.sort.rateLow")}</option>
              <option value="rate-high">{t("earn.portfolio.sort.rateHigh")}</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Assets Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold text-gray-900">
                    {t("earn.portfolio.table.assets")}
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold text-gray-900">
                    {t("earn.portfolio.table.rate")}
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-semibold text-gray-900">
                    {t("earn.portfolio.table.type")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedAssets.map((asset, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-4 sm:px-6 py-4 sm:py-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${asset.iconBg || "bg-gray-200"}`}>
                            {asset.icon ? (
                              <img src={asset.icon} alt={asset.name} className="w-6 h-6" />
                            ) : (
                              <span className="text-white font-bold text-sm">{asset.iconText || asset.symbol[0]}</span>
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{asset.name}</div>
                            <div className="text-sm text-gray-500">{asset.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 sm:py-5">
                        <span className="inline-block px-3 py-1 rounded-lg bg-green-100 text-green-700 font-semibold text-sm">
                          {asset.rate}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 sm:py-5">
                        <span className={`font-medium text-sm ${
                          asset.type === "active" ? "text-blue-600" :
                          asset.type === "staking" ? "text-blue-600" :
                          "text-blue-600"
                        }`}>
                          {t(`earn.comparison.${asset.type === "passive" ? "passive" : asset.type === "staking" ? "staking" : "active"}.title`)}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              {t("earn.portfolio.prev")}
            </button>
            <span className="text-gray-600">
              {t("earn.portfolio.page")} {currentPage} {t("earn.portfolio.of")} {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage >= totalPages}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {t("earn.portfolio.next")}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>

    {/* How to Get Started Section */}
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 text-center">
          {t("earn.getStarted.title")}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {/* Step 1: Buy */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-pink-100 flex items-center justify-center mb-4 sm:mb-6">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border-2 border-red-500 flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="absolute text-red-500 font-bold text-xs">B</span>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              {t("earn.getStarted.buy.title")}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t("earn.getStarted.buy.description")}
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block text-gray-300">
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          {/* Step 2: Transfer */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-orange-100 flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border-2 border-orange-500 flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              {t("earn.getStarted.transfer.title")}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t("earn.getStarted.transfer.description")}
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block text-gray-300">
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          {/* Step 3: Earn */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-green-100 flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border-2 border-green-500 flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              {t("earn.getStarted.earn.title")}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {t("earn.getStarted.earn.description")}
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Frequently Asked Questions Section */}
    <section className="relative w-full bg-gray-50 py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          {t("earn.faq.title")}
        </h2>

        {/* FAQ Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {["passive", "staking", "active"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setFaqTab(tab);
                setOpenFaqs([]);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-3xl font-medium text-sm sm:text-base transition-colors ${
                faqTab === tab
                  ? "bg-blue-100 text-blue-700 shadow-md cursor-pointer"
                  : "bg-white text-gray-700 cursor-pointer"
              }`}
            >
              {t(`earn.faq.tabs.${tab}`)}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          {Array.from({ length: 5 }).map((_, index) => {
            const isOpen = openFaqs.includes(index);
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => {
                    setOpenFaqs((prev) =>
                      isOpen ? prev.filter((i) => i !== index) : [...prev, index]
                    );
                  }}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4 flex-1">
                    {t(`earn.faq.${faqTab}.questions.${index}`)}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {(() => {
                        const answer = t(`earn.faq.${faqTab}.answers.${index}`);
                        const parts = answer.split(/(here|Support Center)/);
                        return parts.map((part, i) => {
                          if (part === "here" || part === "Support Center") {
                            return (
                              <a
                                key={i}
                                href="#"
                                className="text-blue-600 hover:text-blue-700 underline"
                              >
                                {part}
                              </a>
                            );
                          }
                          return <span key={i}>{part}</span>;
                        });
                      })()}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Center CTA */}
        <div className="bg-blue-100 rounded-3xl border border-blue-100 p-6 text-center">
          <p className="text-sm sm:text-base text-gray-700">
            {t("earn.faq.support.text")}{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              {t("earn.faq.support.link")}
            </a>{" "}
            {t("earn.faq.support.suffix")}
          </p>
        </div>
      </div>
    </section>

    {/* Want to Start Earning CTA Section */}
    <section className="relative w-full  bg-gradient-to-r from-primary to-purple-900 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              {t("earn.cta.title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              {t("earn.cta.subtitle")}
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="w-full md:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-base sm:text-lg shadow-lg">
              {t("earn.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Legal Disclaimer Section */}
    <section className="relative w-full bg-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-xs sm:text-sm text-gray-600 space-y-3 sm:space-y-4">
          <p className="font-semibold">
            {t("earn.legal.copyright")}
          </p>
          <p>
            {t("earn.legal.agreement")}
          </p>
          <p>
            {t("earn.legal.risk")}
          </p>
          <p>
            {t("earn.legal.disclaimer")}
          </p>
        </div>
      </div>
    </section>
    
    </>
  );
}