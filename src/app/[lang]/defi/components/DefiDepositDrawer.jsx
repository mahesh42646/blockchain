'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { X, Search, ChevronRight, ArrowLeft, Copy } from 'lucide-react';

const DEPOSIT_COINS = [
  { id: 'arg', name: 'Argentina ($ARG) - Chiliz', symbol: 'ARG', balance: '$0.00', balanceRaw: '0 ARG', iconBg: 'bg-rose-500' },
  { id: 'axs', name: 'Axie Infinity Shard', symbol: 'AXS', balance: '$0.00', balanceRaw: '0 AXS', iconBg: 'bg-cyan-500' },
  { id: 'badger', name: 'Badger', symbol: 'BADGER', balance: '$0.00', balanceRaw: '0 BADGER', iconBg: 'bg-amber-600' },
  { id: 'bal', name: 'Balancer', symbol: 'BAL', balance: '$0.00', balanceRaw: '0 BAL', iconBg: 'bg-sky-500' },
  { id: 'band', name: 'Band Protocol', symbol: 'BAND', balance: '$0.00', balanceRaw: '0 BAND', iconBg: 'bg-indigo-500' },
  { id: 'bat', name: 'Basic Attention Token', symbol: 'BAT', balance: '$0.00', balanceRaw: '0 BAT', iconBg: 'bg-orange-500' },
  { id: 'billy', name: 'BILLY', symbol: 'BILLY', balance: '$0.00', balanceRaw: '0 BILLY', iconBg: 'bg-emerald-500' },
  { id: 'xlm', name: 'Stellar Lumens', symbol: 'XLM', balance: '$0.00', balanceRaw: '0 XLM', iconBg: 'bg-gray-800' },
];

const SAMPLE_XLM_ADDRESS = 'GD6QFXSNLU6K4EULOXWWW7HHPIKDGTINATMXZYPSTQ4MKPCYJMPNT3JB';

export default function DefiDepositDrawer({ open, onClose }) {
  const { t } = useTranslation();
  const [step, setStep] = useState('list');
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (open) {
      setStep('list');
      setSelectedCoin(null);
      setSearch('');
    }
  }, [open]);

  const filteredCoins = search.trim()
    ? DEPOSIT_COINS.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) || c.symbol.toLowerCase().includes(search.toLowerCase())
      )
    : DEPOSIT_COINS;

  const selectCoin = (coin) => {
    setSelectedCoin(coin);
    setStep('qr');
  };

  const handleBack = () => {
    setStep('list');
    setSelectedCoin(null);
  };

  const copyAddress = () => {
    try {
      navigator.clipboard.writeText(SAMPLE_XLM_ADDRESS);
    } catch {}
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" aria-hidden onClick={onClose} />
      <aside
        className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-white z-50 flex flex-col overflow-hidden rounded-l-2xl shadow-[-4px_0_24px_rgba(0,0,0,0.12)] animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-label="Deposit"
      >
        {step === 'list' ? (
          <>
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">{t('defi.dex.deposit')}</h2>
              <button
                type="button"
                onClick={onClose}
                className="p-2 -mr-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-4 pb-4 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t('defi.dex.searchCoins')}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <ul className="divide-y divide-gray-100">
                {filteredCoins.map((coin) => (
                  <li key={coin.id}>
                    <button
                      type="button"
                      onClick={() => selectCoin(coin)}
                      className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50/80 transition-colors text-left"
                    >
                      <div className={`w-10 h-10 rounded-full ${coin.iconBg || 'bg-gray-200'} flex-shrink-0 flex items-center justify-center text-sm font-bold text-white`}>
                        {coin.symbol.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate text-sm">
                          {coin.name} ({t('defi.dex.deFiWallet')})
                        </p>
                        <p className="text-sm text-gray-500 mt-0.5">{coin.balance} ({coin.balanceRaw})</p>
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
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <button
                type="button"
                onClick={handleBack}
                className="p-2 -ml-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-bold text-gray-900">
                {t('defi.dex.deposit')} {selectedCoin?.symbol || 'XLM'}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="p-2 -mr-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-white border border-gray-200 rounded-xl flex items-center justify-center p-2 shadow-sm">
                  <div className="grid gap-0.5 w-full h-full" style={{ gridTemplateColumns: 'repeat(20, 1fr)', gridTemplateRows: 'repeat(20, 1fr)' }}>
                    {Array.from({ length: 400 }, (_, i) => (
                      <div key={i} className={`min-w-0 min-h-0 ${(i + Math.floor(i / 20)) % 2 === 0 ? 'bg-gray-900' : 'bg-white'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{t('defi.dex.yourXlmAddress')}</h3>
                <p className="text-sm text-gray-500">{t('defi.dex.useAddressOnly')}</p>
                <p className="text-sm text-gray-500 mt-1">{t('defi.dex.lostFundsWarning')}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
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
  );
}

export { DefiDepositDrawer };
