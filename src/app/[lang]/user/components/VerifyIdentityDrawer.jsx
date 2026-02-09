'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { X, Check, Clock, Calendar, FileCheck } from 'lucide-react';

const STEPS = [
  { key: 'intro' },
  { key: 'nameDob' },
  { key: 'address' },
  { key: 'id' },
];

const INTRO_LIST_KEYS = [
  'userDashboard.home.dateOfBirth',
  'userDashboard.home.firstLastName',
  'userDashboard.home.homeAddress',
  'userDashboard.home.govId',
];

export default function VerifyIdentityDrawer({ open, onClose }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
  });

  if (!open) return null;

  const handleClose = () => {
    setStep(0);
    setForm({ firstName: '', lastName: '', dateOfBirth: '', address: '' });
    onClose();
  };

  const currentStepKey = STEPS[step]?.key ?? 'intro';
  const isIntro = currentStepKey === 'intro';
  const isLastStep = step === STEPS.length - 1;

  const stepTitle = {
    nameDob: t('userDashboard.home.nameAndDob'),
    address: t('userDashboard.home.homeAddress'),
    id: t('userDashboard.home.govId'),
  }[currentStepKey];

  const stepDescription = {
    nameDob: t('userDashboard.home.nameAndDobDesc'),
    address: t('userDashboard.home.homeAddress'),
    id: t('userDashboard.home.govId'),
  }[currentStepKey];

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40"
        aria-hidden
        onClick={handleClose}
      />
      <aside
        className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-white z-50 flex flex-col overflow-hidden rounded-l-2xl shadow-[-4px_0_24px_rgba(0,0,0,0.12)] animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-label="Verify identity"
      >
        {/* Top bar: close only for intro; title + close for other steps */}
        <div
          className={`flex items-center justify-between px-4 py-4 ${
            isIntro ? '' : 'border-b border-gray-100'
          }`}
        >
          {!isIntro && stepTitle && (
            <h2 className="text-lg font-bold text-gray-900">{stepTitle}</h2>
          )}
          {isIntro && <span />}
          <button
            type="button"
            onClick={handleClose}
            className="p-2 -mr-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors ml-auto"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step description (nameDob, address, id) - below header, above content */}
        {!isIntro && stepDescription && (
          <div className="px-4 pb-4 border-b border-gray-100">
            <p className="text-sm text-gray-600">{stepDescription}</p>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {currentStepKey === 'intro' && (
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Check className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {t('userDashboard.home.verifyToTrade')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('userDashboard.home.verifyToTradeDesc')}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                <Clock className="w-4 h-4" />
                {t('userDashboard.home.about2Minutes')}
              </div>
              <div className="w-full mt-4 p-4 rounded-xl bg-gray-50/80 border border-gray-100 text-left">
                <ul className="space-y-3 text-sm text-gray-700">
                  {INTRO_LIST_KEYS.map((key) => (
                    <li key={key} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {currentStepKey === 'nameDob' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('userDashboard.home.firstName')}
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, firstName: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('userDashboard.home.lastName')}
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, lastName: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('userDashboard.home.dateOfBirth')}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    value={form.dateOfBirth}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, dateOfBirth: e.target.value }))
                    }
                    className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          )}

          {currentStepKey === 'address' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('userDashboard.home.homeAddress')}
                </label>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, address: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Street, city, state, ZIP"
                />
              </div>
            </div>
          )}

          {currentStepKey === 'id' && (
            <div className="space-y-4">
              <div className="p-6 border-2 border-dashed border-gray-200 rounded-xl text-center">
                <FileCheck className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Upload a government-issued ID (driver&apos;s license or passport)
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-100">
          <button
            type="button"
            onClick={() =>
              isLastStep ? handleClose() : setStep((s) => Math.min(s + 1, STEPS.length - 1))
            }
            className="w-full flex items-center justify-center py-3 px-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
          >
            {isLastStep
              ? t('userDashboard.home.getStarted')
              : t('userDashboard.home.continue')}
          </button>
        </div>
      </aside>
    </>
  );
}
