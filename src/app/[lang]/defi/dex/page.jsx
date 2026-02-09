'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowDown, ChevronDown, Settings, X } from 'lucide-react';
import DefiDepositDrawer from '@/app/[lang]/defi/components/DefiDepositDrawer';

const SLIPPAGE_OPTIONS = [0.5, 1, 2.5, 5];

export default function DefiDexPage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [depositDrawerOpen, setDepositDrawerOpen] = useState(false);
  const [slippage, setSlippage] = useState(2.5);
  const [arrivalGas, setArrivalGas] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="max-w-3xl animate-pulse">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="h-7 w-24 bg-gray-200 rounded-lg" />
            <div className="h-10 w-10 bg-gray-200 rounded-lg" />
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-xl h-24" />
            <div className="flex justify-center">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            </div>
            <div className="p-4 bg-gray-100 rounded-xl h-24" />
          </div>
          <div className="mt-6 h-12 bg-gray-200 rounded-xl w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
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
          onClick={() => setDepositDrawerOpen(true)}
          className="w-full mt-6 flex items-center justify-center gap-2 py-3.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition-colors"
        >
          <ArrowDown className="w-4 h-4" />
          {t('defi.dex.deposit')}
        </button>
      </div>

      <DefiDepositDrawer open={depositDrawerOpen} onClose={() => setDepositDrawerOpen(false)} />

      {/* Swap Settings */}
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
    </div>
  );
}
