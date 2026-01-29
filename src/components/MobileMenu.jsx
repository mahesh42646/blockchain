'use client';

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { Search, X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu({ isOpen, onClose }) {
  const params = useParams();
  const pathname = usePathname();
  const { t } = useTranslation();
  const locale = params?.lang || 'en';
  const [searchQuery, setSearchQuery] = useState('');

  const getLocalizedPath = (path) => {
    return `/${locale}${path}`;
  };

  const products = [
    { name: t('nav.exchange'), href: getLocalizedPath('/exchange'), icon: '📊', desc: 'Professional trading' },
    { name: t('nav.wallet'), href: getLocalizedPath('/wallet'), icon: '💼', desc: 'Buy & Sell Crypto' },
    { name: t('nav.explorer'), href: getLocalizedPath('/explorer'), icon: '🔍', desc: 'Real-time data, Charts & Transactions' },
    { name: t('nav.pay'), href: getLocalizedPath('/pay'), icon: '💳', desc: 'On-ramp for your users in your application' },
    { name: t('nav.institutional'), href: getLocalizedPath('/institutional'), icon: '🏢', desc: 'Complete crypto services platform' },
  ];

  const resources = [
    { name: 'APIs', href: getLocalizedPath('/apis') },
    { name: 'Status', href: getLocalizedPath('/status') },
    { name: 'Open Source', href: getLocalizedPath('/open-source') },
    { name: 'Research', href: getLocalizedPath('/research') },
    { name: 'Legal & Privacy', href: getLocalizedPath('/legal-privacy') },
    { name: 'Support', href: getLocalizedPath('/support') },
    { name: 'Blog', href: getLocalizedPath('/blog') },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white lg:hidden">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white"></div>
            </div>
            <span className="text-lg font-semibold text-gray-900">Blockchain.com</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search blocks, transactions, hash..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg border-none outline-none text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Products Section */}
          <div className="px-4 py-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              {t('footer.products').toUpperCase()}
            </h3>
            <div className="space-y-1">
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  onClick={onClose}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{product.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{product.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="px-4 py-4 border-t border-gray-200">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              {t('footer.resources').toUpperCase()}
            </h3>
            <div className="space-y-1">
              {resources.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  onClick={onClose}
                  className="block px-3 py-3 text-gray-900 hover:bg-gray-50 rounded-lg transition border-b border-gray-100 last:border-b-0"
                >
                  {resource.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="px-4 py-4 border-t border-gray-200 space-y-3">
          <Link
            href={getLocalizedPath('/auth')}
            onClick={onClose}
            className="block w-full text-center rounded-lg border-2 border-blue-600 bg-white text-blue-600 px-4 py-3 font-semibold hover:bg-blue-50 transition"
          >
            {t('common.login')}
          </Link>
          <Link
            href={getLocalizedPath('/auth')}
            onClick={onClose}
            className="block w-full text-center rounded-lg bg-blue-600 text-white px-4 py-3 font-semibold hover:bg-blue-700 transition"
          >
            {t('common.signup')}
          </Link>
        </div>
      </div>
    </div>
  );
}
