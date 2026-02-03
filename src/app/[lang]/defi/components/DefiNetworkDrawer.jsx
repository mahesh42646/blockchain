'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { X, Radio } from 'lucide-react';

const NETWORKS = [
  { id: 'all', name: 'All', icon: Radio },
  { id: 'avalanche', name: 'Avalanche C-Chain' },
  { id: 'bnb', name: 'BNB Smart Chain' },
  { id: 'bitcoin', name: 'Bitcoin' },
  { id: 'bitcoin-cash', name: 'Bitcoin Cash' },
  { id: 'cardano', name: 'Cardano' },
  { id: 'arbitrum', name: 'Arbitrum' },
  { id: 'base', name: 'Base' },
  { id: 'ethereum', name: 'Ethereum' },
  { id: 'optimism', name: 'Optimism' },
  { id: 'polygon', name: 'Polygon' },
  { id: 'solana', name: 'Solana' },
  { id: 'stacks', name: 'Stacks' },
  { id: 'stellar', name: 'Stellar' },
  { id: 'tron', name: 'Tron' },
];

export default function DefiNetworkDrawer({ open, onClose, selectedIds = ['all'], onSelect, multiSelect = false }) {
  const { t } = useTranslation();

  const toggle = (id) => {
    if (multiSelect) {
      if (id === 'all') {
        onSelect?.(['all']);
      } else {
        const next = selectedIds.includes('all')
          ? [id]
          : selectedIds.includes(id)
            ? selectedIds.filter((x) => x !== id)
            : [...selectedIds, id];
        onSelect?.(next.length ? next : ['all']);
      }
    } else {
      onSelect?.(id === 'all' ? ['all'] : [id]);
      onClose?.();
    }
  };

  const isSelected = (id) => selectedIds.includes(id);

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" aria-hidden onClick={onClose} />
      <aside
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50 flex flex-col animate-in slide-in-from-right duration-200"
        role="dialog"
        aria-label={t('defi.dex.network')}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">{t('defi.dex.network')}</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-0">
            {NETWORKS.map((n) => {
              const Icon = n.icon;
              return (
                <li key={n.id}>
                  <button
                    type="button"
                    onClick={() => toggle(n.id)}
                    className="w-full flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    {Icon ? (
                      <Icon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
                    )}
                    <span className="flex-1 font-medium text-gray-900">{n.name}</span>
                    {isSelected(n.id) && (
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}
