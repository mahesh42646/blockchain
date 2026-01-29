import Link from "next/link";

export default function MegaNavContact() {
  return (
    <div className="group relative">
      {/* Trigger Button */}
      <button className="relative font-bold  text-[20px] justify-center text-slate-300 transition-colors duration-300 hover:text-white cursor-pointer">
        ...
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </button>

      {/* Hover buffer (prevents flicker) */}
      <div className="absolute left-0 top-full h-4 w-full" />

      {/* Mega menu */}
      <div className="absolute font-sans left-1/2 top-12 hidden w-[560] -translate-x-1/2 group-hover:block">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white px-12 py-14 shadow-2xl ring-1 ring-slate-200">
          <div className="grid grid-cols-3 gap-16">
            {/* Column 1 */}
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-900">
                Products
              </h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Exchange
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Explorer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Pay
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Earn
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Learn
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Prices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Charts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    NFT
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-900">
                Resources
              </h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    APIs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Open Source
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Legal & Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Podcast
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-900">
                Company
              </h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Press Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Ventures
                  </Link>
                </li>
                <li>
                  <Link href="/contact/enterprise">
                    <h1 className=" mb-6 text-sm font-semibold uppercase tracking-wide text-slate-900">
                      Investors
                    </h1>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/enterprise"
                    className="block rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Bitcoin Treasury
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
