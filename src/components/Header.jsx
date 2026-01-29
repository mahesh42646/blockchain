'use client';

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import MegaNavContact from "./MegaNavContact";
import { Search } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="relative font-medium text-slate-300 transition-colors duration-300 group hover:text-white hover:bg-slate-600 rounded-md cursor-pointer"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

export default function Header() {
  const params = useParams();
  const locale = params?.lang || 'en';
  const { t } = useTranslation();

  const getLocalizedPath = (path) => {
    return `/${locale}${path}`;
  };

  return (
    <nav
      role="navigation"
      className="sticky top-0 z-999 border-b border-slate-750 bg-primary shadow-lg py-2"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link
          href={getLocalizedPath('/')}
          className=" text-2xl font-bold text-white transition-transform duration-300 hover:scale-105"
        >
          {t('common.logo')}
        </Link>

        <div className="flex items-center space-x-10 justify-between font-sans py-">
          <NavLink href={getLocalizedPath('/wallet')} label={t('nav.wallet')} />
          <NavLink href={getLocalizedPath('/exchange')} label={t('nav.exchange')} />
          <NavLink href={getLocalizedPath('/explorer')} label={t('nav.explorer')} />
          <NavLink href={getLocalizedPath('/pay')} label={t('nav.pay')} />
          <NavLink href={getLocalizedPath('/institutional')} label={t('nav.institutional')} />

          <MegaNavContact />
        </div>
        <div className="flex items-center space-x-4">
          <button className="rounded-full bg-slate-700 p-2 hover:bg-slate-600 cursor-pointer">
            <Search className="h-5 w-5 text-white" />
          </button>

          <Link
            href={getLocalizedPath('/auth')}
            className=" rounded-md bg-primary px-4 py-2 border-2 text-white hover:bg-slate-800 transition-colors duration-300 cursor-pointer"
          >
            {t('common.login')}
          </Link>
          <Link
            href={getLocalizedPath('/auth')}
            className=" rounded-md bg-white px-4 py-2 text-primary hover:bg-white-700 hover:text-gray-800 transition-colors duration-300 cursor-pointer"
          >
            {t('common.signup')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
