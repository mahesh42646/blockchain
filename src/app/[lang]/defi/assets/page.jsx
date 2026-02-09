'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowDown, ChevronDown, X, Check, Calendar } from 'lucide-react';
import DefiRightSection from '@/app/[lang]/defi/components/DefiRightSection';
import DefiNetworkDrawer from '@/app/[lang]/defi/components/DefiNetworkDrawer';
import DefiDepositDrawer from '@/app/[lang]/defi/components/DefiDepositDrawer';

const COLLECTIBLE_PLACEHOLDERS = [
  { color: 'bg-green-400', label: 'Frog' },
  { color: 'bg-amber-500', label: 'Ape' },
  { color: 'bg-amber-700', label: 'Dog' },
  { color: 'bg-gray-200', label: 'Pixel' },
];

export default function DefiAssetsPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('tokens');
  const [networkDrawerOpen, setNetworkDrawerOpen] = useState(false);
  const [selectedNetworks, setSelectedNetworks] = useState(['all']);
  const [depositDrawerOpen, setDepositDrawerOpen] = useState(false);
  const [verificationDrawerOpen, setVerificationDrawerOpen] = useState(false);
  const [verificationStep, setVerificationStep] = useState('intro');
  const [verifyFirstName, setVerifyFirstName] = useState('');
  const [verifyLastName, setVerifyLastName] = useState('');
  const [verifyDob, setVerifyDob] = useState('');

  const openVerificationDrawer = () => {
    setVerificationStep('intro');
    setVerifyFirstName('');
    setVerifyLastName('');
    setVerifyDob('');
    setVerificationDrawerOpen(true);
  };

  const closeVerificationDrawer = () => {
    setVerificationDrawerOpen(false);
    setVerificationStep('intro');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-0.5">
            <button
              onClick={() => setActiveTab('tokens')}
              className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'tokens' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('defi.assets.tokens')}
            </button>
            <button
              onClick={() => setActiveTab('collectibles')}
              className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'collectibles' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('defi.assets.collectibles')}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setNetworkDrawerOpen(true)}
            className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-xl bg-white text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <span>{t('defi.assets.allNetworks')}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {activeTab === 'tokens' && (
          <div className="bg-white rounded-xl shadow-sm p-12 border border-gray-100 flex flex-col items-center justify-center text-center min-h-[320px]">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{t('defi.assets.fundTitle')}</h2>
            <p className="text-gray-500 text-sm mb-8 max-w-sm">{t('defi.assets.fundDesc')}</p>
            <button
              type="button"
              onClick={() => setDepositDrawerOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
            >
              <ArrowDown className="w-4 h-4" />
              {t('defi.assets.receive')}
            </button>
          </div>
        )}

        {activeTab === 'collectibles' && (
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 flex flex-col items-center justify-center text-center min-h-[320px]">
           
            <div className="flex items-center justify-center -space-x-6 mb-8">
              {COLLECTIBLE_PLACEHOLDERS.map((c, i) => (
                <div
                  key={i}
                  className={`w-24 h-24 rounded-xl border-2 border-white shadow-md ${c.color} flex items-center justify-center text-white text-xs font-medium`}
                  style={{ zIndex: COLLECTIBLE_PLACEHOLDERS.length - i }}
                />
              ))}
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{t('defi.assets.transferOrBuy')}</h2>
            <button
              type="button"
              onClick={openVerificationDrawer}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
            >
              <ArrowDown className="w-4 h-4" />
              {t('defi.assets.receive')}
            </button>
          </div>
        )}
      </div>
      <div className="lg:col-span-4 hidden lg:block">
        <DefiRightSection />
      </div>
      <DefiNetworkDrawer
        open={networkDrawerOpen}
        onClose={() => setNetworkDrawerOpen(false)}
        selectedIds={selectedNetworks}
        onSelect={setSelectedNetworks}
      />
      <DefiDepositDrawer open={depositDrawerOpen} onClose={() => setDepositDrawerOpen(false)} />
      {verificationDrawerOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40" aria-hidden onClick={closeVerificationDrawer} />
          <aside
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-xl z-50 flex flex-col rounded-l-2xl shadow-[-4px_0_24px_rgba(0,0,0,0.12)] animate-in slide-in-from-right duration-300 overflow-y-auto"
            role="dialog"
            aria-label={verificationStep === 'intro' ? t('defi.assets.verifyTitle') : t('defi.assets.nameAndDob')}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div />
              <button
                type="button"
                onClick={closeVerificationDrawer}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6 flex-1">
              {verificationStep === 'intro' ? (
                <>
                  <div className="flex justify-center">
                    <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                      <Check className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 text-center">{t('defi.assets.verifyTitle')}</h2>
                  <p className="text-sm text-gray-500 text-center">{t('defi.assets.verifyDesc')}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium w-full justify-center">
                    <span>{t('defi.assets.about2Minutes')}</span>
                  </div>
                  <div className="space-y-3">
                    {[t('defi.assets.dateOfBirth'), t('defi.assets.firstLastName'), t('defi.assets.homeAddress')].map((label) => (
                      <div key={label} className="p-3 border border-gray-200 rounded-xl bg-gray-50/50">
                        <span className="text-sm font-medium text-gray-700">{label}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setVerificationStep('form')}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
                  >
                    {t('defi.assets.getStarted')}
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-900">{t('defi.assets.nameAndDob')}</h2>
                  <p className="text-sm text-gray-500">{t('defi.assets.nameAndDobDesc')}</p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('defi.assets.firstName')}</label>
                      <input
                        type="text"
                        value={verifyFirstName}
                        onChange={(e) => setVerifyFirstName(e.target.value)}
                        placeholder="John"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('defi.assets.lastName')}</label>
                      <input
                        type="text"
                        value={verifyLastName}
                        onChange={(e) => setVerifyLastName(e.target.value)}
                        placeholder="Doe"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('defi.assets.dateOfBirth')}</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={verifyDob}
                          onChange={(e) => setVerifyDob(e.target.value)}
                          placeholder="dd/mm/yyyy"
                          className="w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={closeVerificationDrawer}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors mt-4"
                  >
                    {t('defi.assets.continue')}
                  </button>
                </>
              )}
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
