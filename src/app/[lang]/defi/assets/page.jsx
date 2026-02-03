'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowDown, ChevronDown } from 'lucide-react';
import DefiRightSection from '@/app/[lang]/defi/components/DefiRightSection';
import DefiNetworkDrawer from '@/app/[lang]/defi/components/DefiNetworkDrawer';

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
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors">
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
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors">
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
    </div>
  );
}
