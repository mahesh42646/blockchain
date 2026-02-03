"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Settings, ChevronDown, ChevronUp, Clock, ArrowLeft, Search, Info } from "lucide-react";
import { useState, useEffect } from "react";

export default function PayPage() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState("300");
  const [assetAmount, setAssetAmount] = useState("0.00368369");
  const [currency, setCurrency] = useState("USD");
  const [selectedAsset, setSelectedAsset] = useState("BTC");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showAssetDropdown, setShowAssetDropdown] = useState(false);
  const [assetSearch, setAssetSearch] = useState("");
  const [quoteTimer, setQuoteTimer] = useState(6);

  // Calculate fees and values
  const tokenPrice = parseFloat(amount) / parseFloat(assetAmount) || 0.12;
  const tokenValue = parseFloat(assetAmount) * tokenPrice;
  const networkFee = 0.01;
  const processingFee = parseFloat(amount) - tokenValue - networkFee;

  // Quote timer countdown
  useEffect(() => {
    if (quoteTimer > 0) {
      const timer = setInterval(() => {
        setQuoteTimer((prev) => (prev > 0 ? prev - 1 : 6));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [quoteTimer]);

  const assets = [
    { code: "BTC", name: "Bitcoin", symbol: "B", color: "bg-orange-500", network: null },
    { code: "ETH", name: "Ethereum", symbol: "⟠", color: "bg-purple-600", network: "Ethereum" },
    { code: "LTC", name: "Litecoin", symbol: "L", color: "bg-gray-400", network: null },
    { code: "1INCH", name: "1INCH Token", symbol: "1", color: "bg-purple-500", network: "Ethereum" },
    { code: "AAVE", name: "Aave", symbol: "A", color: "bg-purple-500", network: "Ethereum" },
    { code: "ADA", name: "Cardano", symbol: "★", color: "bg-blue-400", network: null },
    { code: "AERO", name: "Aerodrome", symbol: "A", color: "bg-gray-300", network: "Base" },
    { code: "ALGO", name: "Algorand", symbol: "A", color: "bg-black", network: null },
  ];

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(assetSearch.toLowerCase()) ||
    asset.code.toLowerCase().includes(assetSearch.toLowerCase())
  );

  const getCurrencySymbol = (code) => {
    const symbols = { USD: "$", EUR: "€", GBP: "£" };
    return symbols[code] || "$";
  };

  const selectedAssetData = assets.find(a => a.code === selectedAsset);

  return (
    <>
      <section
        className="relative w-full overflow-hidden md:overflow-visible lg:overflow-visible md:max-h-[80vh] lg:max-h-[80vh]"
        style={{
          backgroundImage: "url('/images/pay/wallet-hero-gradient.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center min-h-[70vh]">
            {/* LEFT CONTENT */}
            <div className="text-white max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight mb-3 sm:mb-4">
                {t("pay.heroTitle")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 leading-relaxed max-w-lg">
                {t("pay.heroDescription")}
              </p>
              <button className="rounded-lg text-black bg-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 font-semibold transition-all hover:bg-gray-50 text-sm sm:text-base shadow-lg hover:shadow-xl">
                {t("pay.getInTouch")}
              </button>
            </div>

            {/* RIGHT - BUY WIDGET */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-md p-5 sm:p-6 relative z-10 transform hover:scale-[1.02] transition-transform duration-300">
                {/* Widget Header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-lg  font-bold text-gray-900">
                    {t("pay.buyWidget.title")}
                  </h2>
                  {/* <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Settings className="w-5 h-5 text-gray-600" />
                  </button> */}
                </div>

                {/* Amount Section */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("pay.buyWidget.amount")}
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                        className="flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 hover:bg-gray-100 transition-colors min-w-[100px]"
                      >
                        <span className="text-green-600 font-semibold text-lg mr-2">{getCurrencySymbol(currency)}</span>
                        <span className="text-sm font-medium text-gray-900 flex-1 text-left">{currency}</span>
                        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${showCurrencyDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Full Screen Currency Modal */}
                      {showCurrencyDropdown && (
                        <div className="fixed inset-0 bg-white z-50 flex flex-col rounded-2xl">
                          {/* Header */}
                          <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200">
                            <button
                              onClick={() => setShowCurrencyDropdown(false)}
                              className="p-2 hover:bg-gray-100 rounded transition-colors"
                            >
                              <ArrowLeft className="w-6 h-6 text-gray-900" />
                            </button>
                            <h3 className="text-lg font-semibold text-gray-900">Select a currency</h3>
                          </div>
                          
                          {/* Currency List */}
                          <div className="flex-1 overflow-y-auto">
                            {[
                              { code: "USD", name: "US Dollar", symbol: "$", color: "bg-green-500" },
                              { code: "EUR", name: "Euro", symbol: "€", color: "bg-green-500" },
                              { code: "GBP", name: "British Pound", symbol: "£", color: "bg-green-500" },
                            ].map((curr) => (
                              <button
                                key={curr.code}
                                onClick={() => {
                                  setCurrency(curr.code);
                                  setShowCurrencyDropdown(false);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors text-left border-b border-gray-100"
                              >
                                <div className={`${curr.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                                  <span className="text-white font-semibold text-xl">{curr.symbol}</span>
                                </div>
                                <div className="flex-1">
                                  <div className="text-base font-semibold text-gray-900">{curr.name}</div>
                                  <div className="text-sm text-gray-500">{curr.code}</div>
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                  currency === curr.code 
                                    ? 'border-blue-500 bg-blue-500' 
                                    : 'border-gray-300'
                                }`}>
                                  {currency === curr.code && (
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                    />
                  </div>
                </div>

                {/* Asset Section */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("pay.buyWidget.asset")}
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowAssetDropdown(!showAssetDropdown)}
                        className="flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 hover:bg-gray-100 transition-colors min-w-[100px]"
                      >
                        {selectedAssetData && (
                          <div className={`${selectedAssetData.color} w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0`}>
                            <span className="text-white font-bold text-xs">{selectedAssetData.symbol}</span>
                          </div>
                        )}
                        <span className="text-sm font-medium text-gray-900 flex-1 text-left">{selectedAsset}</span>
                        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${showAssetDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Full Screen Asset Modal */}
                      {showAssetDropdown && (
                        <div className="fixed inset-0 bg-white z-50 flex flex-col rounded-2xl">
                          {/* Header */}
                          <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200">
                            <button
                              onClick={() => {
                                setShowAssetDropdown(false);
                                setAssetSearch("");
                              }}
                              className="p-2 hover:bg-gray-100 rounded transition-colors"
                            >
                              <ArrowLeft className="w-6 h-6 text-gray-900" />
                            </button>
                            <h3 className="text-lg font-semibold text-gray-900">Select an asset</h3>
                          </div>
                          
                          {/* Search Bar */}
                          <div className="px-4 py-3 border-b border-gray-200">
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input
                                type="text"
                                placeholder="Search coin"
                                value={assetSearch}
                                onChange={(e) => setAssetSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                              />
                            </div>
                          </div>
                          
                          {/* Asset List */}
                          <div className="flex-1 overflow-y-auto">
                            {filteredAssets.map((asset) => (
                              <button
                                key={asset.code}
                                onClick={() => {
                                  setSelectedAsset(asset.code);
                                  setShowAssetDropdown(false);
                                  setAssetSearch("");
                                }}
                                className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors text-left border-b border-gray-100"
                              >
                                <div className={`${asset.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative`}>
                                  <span className="text-white font-semibold text-lg">{asset.symbol}</span>
                                  {asset.network && (
                                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-base font-semibold text-gray-900">{asset.name}</div>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-sm text-gray-500">{asset.code}</span>
                                    {asset.network && (
                                      <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                                        {asset.network}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                  selectedAsset === asset.code 
                                    ? 'border-purple-500 bg-purple-500' 
                                    : 'border-gray-300'
                                }`}>
                                  {selectedAsset === asset.code && (
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <input
                      type="text"
                      value={assetAmount}
                      onChange={(e) => setAssetAmount(e.target.value)}
                      className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                    />
                  </div>
                </div>

                {/* Summary Section */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <h3 className="text-base font-semibold text-gray-900">
                      {t("pay.buyWidget.summary")}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Quote updates in {quoteTimer}s</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                    {/* Scrollable Content - Reduced Height with Smooth Scrolling */}
                    <div className="max-h-[140px] overflow-y-auto custom-scrollbar px-4 py-2 scroll-smooth">
                      {/* Main Item */}
                      <div className="mb-2.5 pb-2.5 border-b border-gray-200">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-2.5 flex-1 min-w-0">
                            {selectedAssetData && (
                              <div className={`${selectedAssetData.color} w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 relative`}>
                                <span className="text-white font-bold text-xs">{selectedAssetData.symbol}</span>
                                {selectedAssetData.network && (
                                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-purple-500 rounded-full border-2 border-white"></div>
                                )}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-gray-900 mb-0.5">
                                {selectedAssetData?.name || "Bitcoin"}
                              </div>
                              <div className="text-xs text-gray-600 mb-0.5">
                                {selectedAsset}{selectedAssetData?.network ? ` on ${selectedAssetData.network}` : ''}
                              </div>
                              <div className="text-xs text-gray-500">
                                {parseFloat(assetAmount).toLocaleString('en-US', { maximumFractionDigits: 8 })} {selectedAsset}
                              </div>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-sm font-semibold text-gray-900">
                              {getCurrencySymbol(currency)}{amount}.00
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-1 justify-end">
                              {parseFloat(assetAmount).toLocaleString('en-US', { maximumFractionDigits: 8 })} {selectedAsset}
                              <ChevronUp className="w-3 h-3 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Breakdown */}
                      <div className="space-y-2">
                        {/* Token Value */}
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-600">
                            {parseFloat(assetAmount).toLocaleString('en-US', { maximumFractionDigits: 8 })} @ {getCurrencySymbol(currency)}{tokenPrice.toFixed(2)}
                          </div>
                          <div className="text-xs font-medium text-gray-900">
                            {getCurrencySymbol(currency)}{tokenValue.toFixed(2)}
                          </div>
                        </div>

                        {/* Network Fee */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs text-gray-600">Network fee</span>
                            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                          </div>
                          <div className="text-xs font-medium text-gray-900">
                            ~{getCurrencySymbol(currency)}{networkFee.toFixed(2)}
                          </div>
                        </div>

                        {/* Processing Fee */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs text-gray-600">Processing fee</span>
                            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                          </div>
                          <div className="text-xs font-medium text-gray-900">
                            {getCurrencySymbol(currency)}{processingFee.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview Buy Button */}
                <button className="w-full bg-blue-600 hover:bg-purple-700 text-white font-semibold py-2 sm:py-3 rounded-4xl transition-colors text-base sm:text-lg mb-2.5">
                  {t("pay.buyWidget.previewBuy")}
                </button>

                {/* Copyright */}
                <p className="text-xs text-gray-400 text-center">
                  {t("pay.buyWidget.copyright")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Integrations Section */}
      <section className="relative w-full bg-white py-10 sm:py-16 md:py-10 lg:py-10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-nowrap items-start justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 overflow-x-auto">
            {/* MetaMask */}
            <div className="flex items-center justify-center group hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <img
                  src="/images/pay/metamask-vertical.webp"
                  alt="MetaMask"
                  className="w-full h-full object-contain max-w-[80px]"
                />
              </div>
            </div>

            {/* Exodus */}
            <div className="flex items-center justify-center group hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <img
                  src="/images/pay/exodus-logo.webp"
                  alt="Exodus"
                  className="w-full h-full object-contain max-w-[80px]"
                />
              </div>
            </div>

            {/* Phantom */}
            <div className="flex items-center justify-center group hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <img
                  src="/images/pay/phantom-logo.svg"
                  alt="Phantom"
                  className="w-full h-full object-contain max-w-[80px]"
                />
              </div>
            </div>

            {/* TRON */}
            <div className="flex items-center justify-center group hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <img
                  src="/images/pay/tron-logo-vertical.png"
                  alt="TRON"
                  className="w-full h-full object-contain max-w-[80px]"
                />
              </div>
            </div>

            {/* SWAP SPACE */}
            <div className="flex items-center justify-center group hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <img
                  src="/images/pay/swap-space-logo.webp"
                  alt="SWAP SPACE"
                  className="w-full h-full object-contain max-w-[80px]"
                />
              </div>
            </div>

            {/* OPENC CRYPTO */}
            <div className="flex items-center justify-center group hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <img
                  src="/images/pay/openc-crypto-logo.webp"
                  alt="OPENC CRYPTO"
                  className="w-full h-full object-contain max-w-[80px]"
                />
              </div>
            </div>

            {/* ixfi */}
            <div className="flex items-center justify-center group hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <img
                  src="/images/pay/ixfi-logo.webp"
                  alt="ixfi"
                  className="w-full h-full object-contain max-w-[80px]"
                />
              </div>
            </div>
          </div>
    </div>
      </section>
        {/* Conversion Section */}
        <section className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f7f4ff]">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "url('/images/pay/banner-bg.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        />
        
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* LEFT - Bar Chart Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="/images/pay/bars@2x.png"
                alt="Global presence chart"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
              />
            </div>

            {/* RIGHT - Text Content */}
            <div className="text-center lg:text-left order-1 lg:order-2 max-w-xl mx-auto lg:mx-0">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-purple-200 mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-primary leading-tight mb-4 sm:mb-6">
                {t("pay.conversionSection.title")}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-primary mb-6 sm:mb-8 leading-relaxed">
                {(() => {
                  const desc = t("pay.conversionSection.description");
                  const highlight = t("pay.conversionSection.highlightText");
                  const parts = desc.split(highlight);
                  return (
                    <>
                      {parts[0]}
                      <span className="text-blue-700 font-semibold">{highlight}</span>
                      {parts[1]}
                    </>
                  );
                })()}
              </p>

              {/* CTA Button */}
              <button className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl">
                {t("pay.conversionSection.getInTouch")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* KYC Users Section */}
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              {t("pay.kycSection.title")}
            </h2>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("pay.kycSection.description")}
            </p>

            {/* CTA Button */}
            <button className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl">
              {t("pay.kycSection.contactUs")}
            </button>
          </div>
        </div>

        {/* World Map - Full Width */}
        <div className="w-full mt-8 sm:mt-10 lg:mt-12">
          <img
            src="/images/pay/map-world.svg"
            alt="World map with cryptocurrency presence"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
      {/* Integration Section */}
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* LEFT - Code Editor & Payment Methods */}
            <div className="order-2 lg:order-1">
              {/* Code Editor Image */}
              <div className="mb-6 sm:mb-8">
                <img
                  src="/images/pay/code@2x.png"
                  alt="Code integration example"
                  className="w-full max-w-lg mx-auto lg:mx-0 object-contain"
                />
              </div>
             
            </div>

            {/* RIGHT - Text Content */}
            <div className="text-center lg:text-left order-1 lg:order-2 max-w-xl mx-auto lg:mx-0">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-blue-200 mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                {t("pay.integrationSection.title")}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                {t("pay.integrationSection.description")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl">
                  {t("pay.integrationSection.getInTouch")}
                </button>
                <button className="rounded-lg bg-white hover:bg-gray-50 text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-colors text-base sm:text-lg border border-blue-100 shadow-sm hover:shadow-md">
                  {t("pay.integrationSection.readDocumentation")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
