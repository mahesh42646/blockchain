'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowDown, ChevronDown, Settings, X, Search, ChevronRight, ArrowLeft, Copy } from 'lucide-react';

const DEPOSIT_COINS = [
  { id: 'arg', name: 'Argentina ($ARG) - Chiliz', symbol: 'ARG', balance: '$******', balanceRaw: '****** ARG', type: 'DeFi Wallet' },
  { id: 'axs', name: 'Axie Infinity Shard', symbol: 'AXS', balance: '$******', balanceRaw: '****** AXS', type: 'DeFi Wallet' },
  { id: 'badger', name: 'Badger', symbol: 'BADGER', balance: '$******', balanceRaw: '****** BADGER', type: 'DeFi Wallet' },
  { id: 'bal', name: 'Balancer', symbol: 'BAL', balance: '$******', balanceRaw: '****** BAL', type: 'DeFi Wallet' },
  { id: 'band', name: 'Band Protocol', symbol: 'BAND', balance: '$******', balanceRaw: '****** BAND', type: 'DeFi Wallet' },
  { id: 'bat', name: 'Basic Attention Token', symbol: 'BAT', balance: '$******', balanceRaw: '****** BAT', type: 'DeFi Wallet' },
  { id: 'billy', name: 'BILLY', symbol: 'BILLY', balance: '$******', balanceRaw: '****** BILLY', type: 'DeFi Wallet' },
  { id: 'xlm', name: 'Stellar Lumens', symbol: 'XLM', balance: '$******', balanceRaw: '****** XLM', type: 'DeFi Wallet' },
];

const SLIPPAGE_OPTIONS = [0.5, 1, 2.5, 5];
const SAMPLE_XLM_ADDRESS = 'GD6QFXSNLU6K4EULOXWWW7HHPIKDGTINATMXZYPSTQ4MKPCYJMPNT3JB';

export default function DefiDexPage() {
  const { t } = useTranslation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [depositDrawerOpen, setDepositDrawerOpen] = useState(false);
  const [depositStep, setDepositStep] = useState('list');
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [slippage, setSlippage] = useState(2.5);
  const [arrivalGas, setArrivalGas] = useState(false);
  const [depositSearch, setDepositSearch] = useState('');

  const filteredDepositCoins = depositSearch.trim()
    ? DEPOSIT_COINS.filter(
        (c) =>
          c.name.toLowerCase().includes(depositSearch.toLowerCase()) || c.symbol.toLowerCase().includes(depositSearch.toLowerCase())
      )
    : DEPOSIT_COINS;

  const openDeposit = () => {
    setDepositDrawerOpen(true);
    setDepositStep('list');
    setSelectedCoin(null);
    setDepositSearch('');
  };

  const selectCoinForDeposit = (coin) => {
    setSelectedCoin(coin);
    setDepositStep('qr');
  };

  const copyAddress = () => {
    try {
      navigator.clipboard.writeText(SAMPLE_XLM_ADDRESS);
    } catch {}
  };

  return (
    <div className="max-w-3xl">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-900">{t('defi.dex.swap')}</h1>
          <button
            type="button"
            onClick={() => setSettingsOpen(true)}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-xs font-medium text-gray-500 mb-2">{t('defi.dex.youPay')}</p>
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-2xl font-semibold text-gray-900">0</p>
                <p className="text-sm text-gray-500">$0.00</p>
              </div>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                {t('defi.dex.select')}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex justify-center -my-1">
            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white shadow flex items-center justify-center text-gray-600">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-xs font-medium text-gray-500 mb-2">{t('defi.dex.youReceive')}</p>
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-2xl font-semibold text-gray-900">0</p>
                <p className="text-sm text-gray-500">~$0.00</p>
              </div>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                {t('defi.dex.select')}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={openDeposit}
          className="w-full mt-6 flex items-center justify-center gap-2 py-3.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition-colors"
        >
          <ArrowDown className="w-4 h-4" />
          {t('defi.dex.deposit')}
        </button>
      </div>

      {/* Swap Settings - center modal */}
      {settingsOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" aria-hidden onClick={() => setSettingsOpen(false)} />
          <div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-xl shadow-xl z-50 p-6 animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-label={t('defi.dex.swapSettings')}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">{t('defi.dex.swapSettings')}</h2>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{t('defi.dex.allowedSlippage')}</h3>
                <div className="flex gap-2 flex-wrap">
                  {SLIPPAGE_OPTIONS.map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setSlippage(pct)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        slippage === pct ? 'bg-blue-600 text-white' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">{t('defi.dex.slippageDesc')}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{t('defi.dex.crossChainOnly')}</h3>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-900">{t('defi.dex.arrivalGas')}</span>
                    <p className="text-xs text-gray-500">{t('defi.dex.arrivalGasDesc')}</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={arrivalGas}
                    onClick={() => setArrivalGas(!arrivalGas)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${arrivalGas ? 'bg-blue-600' : 'bg-gray-300'}`}
                  >
                    <span
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                        arrivalGas ? 'left-6' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
              >
                {t('defi.dex.save')}
              </button>
            </div>
          </div>
        </>
      )}

      {/* Deposit drawer - right side: list then QR */}
      {depositDrawerOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40" aria-hidden onClick={() => setDepositDrawerOpen(false)} />
          <aside
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-xl z-50 flex flex-col animate-in slide-in-from-right duration-200 overflow-hidden"
            role="dialog"
            aria-label="Deposit"
          >
            {depositStep === 'list' ? (
              <>
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-900">{t('defi.dex.deposit')}</h2>
                  <button
                    type="button"
                    onClick={() => setDepositDrawerOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4 border-b border-gray-100">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={depositSearch}
                      onChange={(e) => setDepositSearch(e.target.value)}
                      placeholder={t('defi.dex.searchCoins')}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <ul className="divide-y divide-gray-100">
                    {filteredDepositCoins.map((coin) => (
                      <li key={coin.id}>
                        <button
                          type="button"
                          onClick={() => selectCoinForDeposit(coin)}
                          className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left"
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-sm font-bold text-gray-700">
                            {coin.symbol.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">
                              {coin.name} ({t('defi.dex.deFiWallet')})
                            </p>
                            <p className="text-sm text-gray-500">{coin.balance} ({coin.balanceRaw})</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => setDepositStep('list')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Back"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {t('defi.dex.deposit')} {selectedCoin?.symbol || 'XLM'}
                  </h2>
                  <button
                    type="button"
                    onClick={() => setDepositDrawerOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  <div className="flex justify-center">
                    <div className="w-48 h-48 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center p-2">
                      <div className="grid gap-0.5 w-full h-full" style={{ gridTemplateColumns: 'repeat(20, 1fr)', gridTemplateRows: 'repeat(20, 1fr)' }}>
                        {Array.from({ length: 400 }, (_, i) => (
                          <div key={i} className={`min-w-0 min-h-0 ${(i + Math.floor(i / 20)) % 2 === 0 ? 'bg-gray-900' : 'bg-white'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{t('defi.dex.yourXlmAddress')}</h3>
                    <p className="text-sm text-gray-600">{t('defi.dex.useAddressOnly')}</p>
                    <p className="text-sm text-gray-600 mt-1">{t('defi.dex.lostFundsWarning')}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-xs font-medium text-gray-500 mb-2">{t('defi.dex.walletAddress')}</p>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 text-xs text-gray-800 break-all font-mono">{SAMPLE_XLM_ADDRESS}</code>
                      <button
                        type="button"
                        onClick={copyAddress}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0"
                        aria-label="Copy"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </aside>
        </>
      )}
    </div>
  );
}
