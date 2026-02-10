'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { X, DollarSign, Plus, Minus, ArrowDown, ArrowUp, ArrowLeftRight, ChevronRight } from 'lucide-react';

const ACTIONS = [
  { key: 'buy', icon: Plus, iconBg: 'bg-blue-100', iconColor: 'text-blue-600', labelKey: 'userDashboard.home.buy', subKey: 'userDashboard.assets.buySubtitle' },
  { key: 'sell', icon: Minus, iconBg: 'bg-red-100', iconColor: 'text-red-600', labelKey: 'userDashboard.home.sell', subKey: 'userDashboard.assets.sellSubtitle' },
  { key: 'convert', icon: ArrowLeftRight, iconBg: 'bg-violet-100', iconColor: 'text-violet-600', labelKey: 'userDashboard.home.convert', subKey: 'userDashboard.assets.convertSubtitle' },
  { key: 'deposit', icon: ArrowDown, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', labelKey: 'userDashboard.home.deposit', subKey: 'userDashboard.assets.depositSubtitle' },
  { key: 'withdraw', icon: ArrowUp, iconBg: 'bg-amber-100', iconColor: 'text-amber-600', labelKey: 'userDashboard.home.withdraw', subKey: 'userDashboard.assets.withdrawSubtitle' },
];

export default function AssetActionDrawer({ open, onClose, asset, onSelectAction }) {
  const { t } = useTranslation();

  if (!open) return null;

  const symbol = asset?.symbol ?? '';
  const balance = asset?.balance ?? '0';
  const value = asset?.value ?? '$0.00';
  const sub = (key) => {
    const raw = t(key);
    return typeof raw === 'string' ? raw.replace('{symbol}', symbol || 'crypto') : raw;
  };

  const handleAction = () => {
    onSelectAction?.();
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40"
        aria-hidden
        onClick={onClose}
      />
      <aside
        className="fixed top-0 right-0 bottom-0 w-full max-w-[380px] bg-white z-50 flex flex-col overflow-hidden rounded-l-2xl shadow-[-4px_0_24px_rgba(0,0,0,0.12)] animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-label="Asset actions"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          {asset ? (
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${asset.color ?? 'bg-gray-100'}`}
              >
                <DollarSign className={`w-5 h-5 ${asset.iconColor ?? 'text-gray-600'}`} />
              </div>
              <h2 className="text-lg font-bold text-gray-900">{asset.name}</h2>
            </div>
          ) : (
            <h2 className="text-lg font-bold text-gray-900">{t('userDashboard.assets.asset')}</h2>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {asset && (
          <div className="px-4 py-4 border-b border-gray-100">
            <p className="text-sm text-gray-600">{t('userDashboard.assets.total')}</p>
            <p className="text-xl font-bold text-gray-900 mt-0.5">{value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{balance} {symbol}</p>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {ACTIONS.map(({ key, icon: Icon, iconBg, iconColor, labelKey, subKey }) => (
            <button
              key={key}
              type="button"
              onClick={handleAction}
              className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors text-left"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg}`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">{t(labelKey)}</p>
                <p className="text-sm text-gray-500">{sub(subKey)}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
