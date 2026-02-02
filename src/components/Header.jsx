"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import MegaNavContact from "./MegaNavContact";
import MobileMenu from "./MobileMenu";
import { Search, Menu } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="relative font-medium text-slate-300 transition-colors duration-300 group hover:text-white hover:bg-slate-600 rounded-md cursor-pointer px-2 py-1"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

export default function Header() {
  const params = useParams();
  const locale = params?.lang || "en";
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLocalizedPath = (path) => {
    return `/${locale}${path}`;
  };

  return (
    <>
      <nav
        role="navigation"
        className="sticky top-0 z-50 border-b border-white/10 bg-primary shadow-lg"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-5 py-3">
          {/* Logo */}
          <Link
            href={getLocalizedPath("/")}
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-white transition-transform duration-300 hover:scale-105"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-sm flex items-center justify-center">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 border-2 border-white"></div>
            </div>
            <span>
              Blockchain<span className="text-gray-300">.com</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 font-sans">
            <NavLink
              href={getLocalizedPath("/wallet")}
              label={t("nav.wallet")}
            />
            <NavLink
              href={getLocalizedPath("/exchange")}
              label={t("nav.exchange")}
            />
            <NavLink
              href={getLocalizedPath("/explorer")}
              label={t("nav.explorer")}
            />
            <NavLink href={getLocalizedPath("/pay")} label={t("nav.pay")} />
            <NavLink
              href={getLocalizedPath("/institutional")}
              label={t("nav.institutional")}
            />
            <MegaNavContact />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Button - Desktop */}
            <button className="hidden md:flex rounded-full bg-slate-700 p-2 hover:bg-slate-600 cursor-pointer transition">
              <Search className="h-5 w-5 text-white" />
            </button>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={getLocalizedPath("/auth")}
                className="rounded-md bg-primary px-4 py-2 border-2 border-white text-white hover:bg-slate-800 transition-colors duration-300 cursor-pointer text-sm font-medium"
              >
                {t("common.login")}
              </Link>
              <Link
                href={getLocalizedPath("/auth")}
                className="rounded-md bg-white px-4 py-2 text-primary hover:bg-gray-100 transition-colors duration-300 cursor-pointer text-sm font-semibold"
              >
                {t("common.signup")}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-slate-700 rounded-md transition"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
