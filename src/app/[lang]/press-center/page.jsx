'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function PressPage() {
  const { t } = useTranslation();

  return (
    <>
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Desktop (>750px): full img, reduced height, bottom-right */}
        <div
          className="absolute bottom-0 right-0 hidden h-[280px] w-[60%] min-w-[350px] bg-contain bg-right-bottom bg-no-repeat min-[751px]:block md:h-[400px] lg:h-[400px] xl:h-[450px] xl:min-w-[400px]"
          style={{ backgroundImage: "url('/images/press/press_hero-background@2x.png')" }}
          role="img"
          aria-label={t("press.hero.imageAlt")}
        />

        {/* Mobile (≤750px): full img, reduced height, bottom-right */}
        <div
          className="absolute bottom-0 right-0 block h-[180px] w-[55%] min-w-[160px] bg-contain bg-right-bottom bg-no-repeat min-[751px]:hidden sm:h-[220px] sm:w-[48%]"
          style={{ backgroundImage: "url('/images/press/press_hero-background--mobile.png')" }}
          role="img"
          aria-label={t("press.hero.imageAltMobile")}
        />

        {/* Inner div: text data as column; no background img on mobile — only second img at bottom-right */}
        <div className="w-full py-8 sm:py-12 md:py-16">
        <div className="relative ml-0 ml-lg-40 z-10 flex max-w-2xl flex-col rounded-xl max-[750px]:min-h-[480px] max-[750px]:pb-[70px] max-[750px]:pr-4 max-[750px]:pt-6 max-[750px]:sm:min-h-[520px] max-[750px]:sm:pb-[280px] min-[751px]:pr-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {t("press.hero.title")}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
            {t("press.hero.description")}
          </p>
          <div className="mt-6 rounded-lg bg-blue-50 px-4 py-5 sm:px-6 sm:py-6">
            <p className="text-sm text-gray-700 sm:text-base">
              {t("press.hero.socialText")}{' '}
              <a href="https://twitter.com/blockchain" className=" font-medium text-blue-600  hover:text-blue-700" target="_blank" rel="noopener noreferrer">@blockchain</a>
              {' '}{t("press.hero.andCeo")}{' '}
              <a href="https://twitter.com/OneMorePeter" className=" font-medium text-blue-600  hover:text-blue-700" target="_blank" rel="noopener noreferrer">@OneMorePeter</a>
              . {t("press.hero.supportText")}{' '}
              <a href="https://twitter.com/AskBlockchain" className=" font-medium text-blue-600  hover:text-blue-700" target="_blank" rel="noopener noreferrer">@AskBlockchain</a>
              {' '}{t("press.hero.forLinks")}. {t("press.hero.pressInquiries")}{' '}
              <a href="mailto:press@blockchain.com" className=" font-medium text-blue-600  hover:text-blue-700">press@blockchain.com</a>.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="mailto:press@blockchain.com"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-lg"
            >
              {t("press.hero.contactButton")}
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>

    
    {/* Assets List: desktop = table (first screenshot), mobile = stacked card (second screenshot) */}
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header: title left, dropdown right; mobile = stacked, dropdown with blue border */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {t("press.assets.title")}
          </h2>
          <div className="relative w-full sm:w-auto sm:min-w-[140px]">
            <select
              className="w-full appearance-none rounded-lg border-2 border-blue-500 bg-gray-100 px-4 py-3 pr-10 text-gray-700 outline-none sm:border sm:border-gray-200 sm:py-2.5 sm:focus:border-blue-500 sm:focus:ring-1 sm:focus:ring-blue-500 md:min-w-[160px]"
              defaultValue="Video"
              aria-label={t("press.assets.filterLabel")}
            >
              <option value="filetype">{t("press.assets.allFileTypes")}</option>
              <option value="Image">{t("press.assets.bioKit")}</option>
              <option value="Video">{t("press.assets.video")}</option>
              <option value="Image">{t("press.assets.imageKit")}</option>
              <option value="Image">{t("press.assets.brandKit")}</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>

        {/* Mobile: thin separator below header (second screenshot) */}
        <div className="border-b border-gray-200 sm:hidden" aria-hidden />

        {/* Desktop: table layout (first screenshot) */}
        <div className="mt-8 hidden overflow-hidden rounded-lg border border-gray-200 sm:block">
          <table className="w-full min-w-[500px] border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-white">
                <th className="py-4 pl-4 text-left text-sm font-semibold text-gray-900">{t("press.assets.table.fileType")}</th>
                <th className="py-4 pl-4 text-left text-sm font-semibold text-gray-900">{t("press.assets.table.fileName")}</th>
                <th className="py-4 pl-4 text-left text-sm font-semibold text-gray-900">{t("press.assets.table.size")}</th>
                <th className="py-4 pr-4 text-right text-sm font-semibold text-gray-900"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 last:border-b-0">
                <td className="py-4 pl-4">
                  <span className="flex items-center gap-2 text-sm text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-600">
                      <path d="M3.75 3a.75.75 0 00-.75.75v.75h14v-.75a.75.75 0 00-.75-.75H3.75zM3 6h14v8.75a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75V8.5h-4v6.25a.75.75 0 01-.75.75h-2.5A.75.75 0 013 14.75V6z" />
                    </svg>
                    {t("press.assets.brandKit")}
                  </span>
                </td>
                <td className="py-4 pl-4">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-700 hover:underline">
                    {t("press.assets.brandAssets")}
                  </a>
                </td>
                <td className="py-4 pl-4 text-sm text-gray-700">{t("press.assets.fileSize")}</td>
                <td className="py-4 pr-4 text-right">
                  <a href="#" className="inline-flex items-center gap-1.5 font-medium text-blue-600 hover:text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                      <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                    </svg>
                    {t("press.assets.download")}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked card layout (second screenshot) */}
        <div className="mt-6 sm:hidden">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-600">
                <path d="M3.75 3a.75.75 0 00-.75.75v.75h14v-.75a.75.75 0 00-.75-.75H3.75zM3 6h14v8.75a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75V8.5h-4v6.25a.75.75 0 01-.75.75h-2.5A.75.75 0 013 14.75V6z" />
              </svg>
              {t("press.assets.brandKit")}
            </div>
            <h3 className="mt-2 text-lg font-bold text-gray-900">
              <a href="#" className="hover:underline">{t("press.assets.brandAssets")}</a>
            </h3>
            <p className="mt-1 text-sm text-gray-700">{t("press.assets.fileSize")}</p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
              {t("press.assets.download")}
            </a>
          </div>
        </div>
      </div>
    </section>


    {/* Press: press release cards — desktop = text left / logo right; mobile = text up, img down */}
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          {t("press.releases.title")}
        </h2>

        <ul className="mt-8 flex flex-col gap-8" aria-label={t("press.releases.ariaLabel")}>
          {[
            {
              date: t("press.releases.items.0.date"),
              headline: t("press.releases.items.0.headline"),
              url: 'https://www.blockchain.com/press',
              summary: t("press.releases.items.0.summary"),
              publicationImage: '/images/press/the-block-logo.webp',
              publicationAlt: t("press.releases.items.0.publicationAlt"),
            },
            {
              date: t("press.releases.items.1.date"),
              headline: t("press.releases.items.1.headline"),
              url: 'https://www.blockchain.com/press',
              summary: t("press.releases.items.1.summary"),
              publicationImage: '/images/press/coin-telegraph.png',
              publicationAlt: t("press.releases.items.1.publicationAlt"),
            },
            {
              date: t("press.releases.items.2.date"),
              headline: t("press.releases.items.2.headline"),
              url: 'https://www.blockchain.com/press',
              summary: t("press.releases.items.2.summary"),
              publicationImage: '/images/press/business-day.png',
              publicationAlt: t("press.releases.items.2.publicationAlt"),
            },
            {
              date: t("press.releases.items.3.date"),
              headline: t("press.releases.items.3.headline"),
              url: 'https://www.blockchain.com/press',
              summary: t("press.releases.items.3.summary"),
              publicationImage: '/images/press/press-release-new-3.jpg',
              publicationAlt: t("press.releases.items.3.publicationAlt"),
            },
          ].map((item, i) => (
            <li key={i}>
              <article className="overflow-hidden  rounded-xl bg-white  ring-1 ring-gray-200/50">
                <div className="flex flex-col md:flex-row gap-2 py-0 px-6">
                  <div className="flex-1md:min-w-0 py-8 align-center justify-center">
                    <time className="text-sm text-gray-500" dateTime={item.date.replace(/ /g, '-')}>
                      {item.date}
                    </time>
                    <h3 className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline">
                        {item.headline}
                      </a>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                      {item.summary}
                    </p>
                  </div>
                  {/* Fixed img size with padding per screenshot */}
                  <div className="flex w-full m-0 p-0 shrink-0 items-center justify-center rounded-b-xl bg-white  md:w-[220px] md:min-h-[200px] md:min-w-[220px] md:rounded-b-none md:rounded-r-xl ">
                    <div className="relative p-2">
                      <img
                        src={item.publicationImage}
                        alt={item.publicationAlt}
                        className="h-full w-full object-cover object-center object-contain rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <section className="">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="relative bg-primary px-6 sm:px-8 md:px-10 lg:px-14  overflow-hidden min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] flex items-center justify-center rounded-lg sm:rounded-xl"
            style={{
              backgroundImage: "url('/images/home/banner-bg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
              {/* Text */}
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center sm:text-left">
                {t('wallet.banner.title')}
              </h2>

              {/* CTA Button */}
              <button className="shrink-0 rounded-lg bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-violet-900 font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base whitespace-nowrap">
                {t('wallet.banner.getStarted')}
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
