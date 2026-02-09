'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { X, DollarSign, CreditCard, ChevronRight } from 'lucide-react';

const CASH_OPTIONS = [
  { id: 'usdc', name: 'USDC', symbol: 'USDC', color: 'bg-blue-100', iconColor: 'text-blue-700', Icon: DollarSign },
  { id: 'usdt', name: 'USDT', symbol: 'USDT', color: 'bg-emerald-100', iconColor: 'text-emerald-700', useT: true },
  { id: 'pax', name: 'Pax Dollar', symbol: 'PAX', color: 'bg-green-100', iconColor: 'text-green-700', Icon: DollarSign },
];

function UsdtIcon({ className }) {
  return <span className={`font-bold text-xl leading-none ${className}`}>T</span>;
}

export default function UserDepositDrawer({ open, onClose, onSelectOption }) {
  const { t } = useTranslation();

  const handleOptionClick = () => {
    onSelectOption?.();
    onClose();
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40"
        aria-hidden
        onClick={onClose}
      />
      <aside
        className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-white z-50 flex flex-col overflow-hidden rounded-l-2xl shadow-[-4px_0_24px_rgba(0,0,0,0.12)] animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-label="Deposit"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">{t('userDashboard.home.deposit')}</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
          <section>
            <p className="text-sm text-gray-600 mb-3">{t('userDashboard.home.buyUsdcCardBank')}</p>
            <button
              type="button"
              onClick={handleOptionClick}
              className="w-full flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50/80 hover:bg-gray-50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-gray-700" />
              </div>
              <span className="font-medium text-gray-900 flex-1">{t('userDashboard.home.buyUsdc')}</span>
              <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </button>
          </section>
          <section>
            <p className="text-sm text-gray-600 mb-3">{t('userDashboard.home.depositStablecoins')}</p>
            <ul className="space-y-2">
              {CASH_OPTIONS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={handleOptionClick}
                    className="w-full flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50/80 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.color}`}>
                      {item.useT ? (
                        <UsdtIcon className={item.iconColor} />
                      ) : (
                        <item.Icon className={`w-5 h-5 ${item.iconColor}`} />
                      )}
                    </div>
                    <span className="font-medium text-gray-900 flex-1">{item.name}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </aside>
    </>
  );
}
