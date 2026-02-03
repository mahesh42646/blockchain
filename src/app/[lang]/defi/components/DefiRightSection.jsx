'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Lock } from 'lucide-react';

export default function DefiRightSection() {
  const { t } = useTranslation();

  return (
    <aside className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
            <Lock className="w-5 h-5 text-pink-600 " />
          </div>
          <div>
            <h4 className="text-sm text-gray-900">{t('defi.right.secureTitle')}</h4>
            <p className="text-md font-bold text-gray-900 mt-0.5">{t('defi.right.secureDesc')}</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <span className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white">a</span>
            <span className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            </span>
            <span className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white">Ξ</span>
          </div>
          <span className="text-lg font-bold text-black ">{t('defi.right.stocksLive')}</span>
        </div>
      </div>
    </aside>
  );
}
