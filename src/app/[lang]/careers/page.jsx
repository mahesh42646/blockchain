'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';

export default function CareersPage() {
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState([]);
  
  const toggleCategory = (index) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="overflow-x-hidden w-full">
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: "url('/images/careers/careers-hero-gradient.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="min-h-[70vh] sm:min-h-[80vh] lg:min-h-[75vh] flex items-center py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-2xl">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {t("careers.hero.title")}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                {t("careers.hero.description")}
              </p>

              {/* CTA Button */}
              <button className="rounded-lg bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 md:px-8 py-3 sm:py-3.5 md:py-4 text-white font-semibold transition-colors text-lg sm:text-lg">
                {t("careers.hero.cta")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blockstar Core Values Section */}
      <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              {t("careers.values.title")}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl">
              {t("careers.values.description")}
            </p>
          </div>

          {/* Core Values Cards - Horizontal Row */}
          <div className="mb-10 sm:mb-12 md:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-gray-300 rounded-lg overflow-hidden">
              {Array.from({ length: 5 }).map((_, index) => {
                const isSelected = selectedValue === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedValue(index)}
                    className={`flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 bg-gray-50 transition-all min-h-[110px] sm:min-h-[130px] md:min-h-[150px] border-gray-300 ${
                      // Right border: show on all except last in row
                      // Mobile: no right border (single column)
                      // Tablet: show except for indices 1, 3 (last in 2-col row)
                      // Desktop: show except for index 4 (last in 5-col row)
                      index !== 1 && index !== 3 && index !== 4 ? 'sm:border-r' : ''
                      } ${
                      index !== 4 ? 'lg:border-r' : ''
                      } ${
                      // Bottom border: show on all except last row
                      // Mobile: show except index 4
                      index !== 4 ? 'border-b' : ''
                      } ${
                      // Tablet: show except indices 2, 3, 4 (last row)
                      index < 2 ? 'sm:border-b' : ''
                      } ${
                      // Desktop: no bottom border (single row)
                      'lg:border-b-0'
                      } ${
                      isSelected
                        ? ' bg-white shadow-md'
                        : ' hover:bg-gray-100'
                    }`}
                  >
                    {/* Icon */}
                    <div className="mb-3 sm:mb-4">
                      {index === 0 && (
                        <svg className={`w-7 h-7 sm:w-8 sm:h-8 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
                          {/* Dynamic shape - stylized comet/person with circle and diagonal line */}
                          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" fill="currentColor" opacity="0.15"/>
                          <circle cx="12" cy="12" r="3" fill="currentColor"/>
                          <path d="M18 6l3-3M21 6l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className={`w-7 h-7 sm:w-8 sm:h-8 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className={`w-7 h-7 sm:w-8 sm:h-8 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className={`w-7 h-7 sm:w-8 sm:h-8 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      )}
                      {index === 4 && (
                        <svg className={`w-7 h-7 sm:w-8 sm:h-8 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0L21 21M5.636 5.636a9 9 0 000 12.728m0 0L3 21" />
                        </svg>
                      )}
                    </div>
                    {/* Text */}
                    <p className={`text-xs sm:text-sm font-medium text-center ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                      {t(`careers.values.items.${index}.title`)}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Value View */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Large Icon */}
            <div className="mb-4 sm:mb-6">
              {selectedValue === 0 && (
                <svg className="w-10 h-10 sm:w-16 sm:h-16 md:w-10 md:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  {/* Dynamic shape - stylized comet/person with circle and diagonal line */}
                  <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" fill="currentColor" opacity="0.15"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  <path d="M18 6l3-3M21 6l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
              {selectedValue === 1 && (
                <svg className="w-10 h-10 sm:w-16 sm:h-16 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              )}
              {selectedValue === 2 && (
                <svg className="w-10 h-10 sm:w-16 sm:h-16 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )}
              {selectedValue === 3 && (
                <svg className="w-10 h-10 sm:w-16 sm:h-16 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              )}
              {selectedValue === 4 && (
                <svg className="w-10 h-10 sm:w-16 sm:h-16 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0L21 21M5.636 5.636a9 9 0 000 12.728m0 0L3 21" />
                </svg>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t(`careers.values.items.${selectedValue}.title`)}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {t(`careers.values.items.${selectedValue}.description`)}
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section 
        className="relative w-full py-8 sm:py-10 md:py-12 lg:py-14 bg-gray-200 overflow-x-hidden" 
        style={{
          backgroundImage: "url('/images/careers/careers-jobs-bg.svg')",
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ">
          {/* White Card Container */}
          <div className="bg-white relative rounded-xl sm:rounded-4xl shadow-lg overflow-hidden z-9">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-5 md:p-6 border-b border-gray-200 ">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-0">
                {t("careers.positions.title")}
              </h2>
              {/* Office Filter */}
              <div className="relative">
                <select className="appearance-none bg-gray-100 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer">
                  <option value="all">{t("careers.positions.filter.allOffices")}</option>
                  <option value="buenos-aires">{t("careers.positions.filter.buenosAires")}</option>
                  <option value="ghana">{t("careers.positions.filter.ghana")}</option>
                  <option value="london">{t("careers.positions.filter.london")}</option>
                  <option value="dallas">{t("careers.positions.filter.dallas")}</option>
                  <option value="paris">{t("careers.positions.filter.paris")}</option>
                  <option value="malta">{t("careers.positions.filter.malta")}</option>
                  <option value="singapore">{t("careers.positions.filter.singapore")}</option>
                  <option value="nigeria">{t("careers.positions.filter.nigeria")}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Job Categories List */}
            <div className="divide-y p-5 divide-gray-200">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((categoryIndex) => {
                const categoryName = t(`careers.positions.categories.${categoryIndex}.name`);
                const categoryOpenings = t(`careers.positions.categories.${categoryIndex}.openings`);
                const categoryIcon = t(`careers.positions.categories.${categoryIndex}.icon`);
                
                if (!categoryName || categoryName.includes('categories')) return null;
                
                const isExpanded = expandedCategories.includes(categoryIndex);
                const iconType = categoryIcon || 'cube';
                
                return (
                  <div key={categoryIndex}>
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(categoryIndex)}
                      className="w-full flex items-center rounded-lg shadow-sm  justify-between p-4 sm:p-5 md:p-6 mb-4 hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="flex items-center  gap-4 sm:gap-6 flex-1">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          {iconType === 'cube' && (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                          )}
                          {iconType === 'circuit' && (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                          )}
                          {iconType === 'document' && (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                          )}
                          {iconType === 'ribbon' && (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                          )}
                          {iconType === 'graph' && (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l4-4 4 4 5-5M3 21V8a2 2 0 012-2h14a2 2 0 012 2v13" />
                            </svg>
                          )}
                          {iconType === 'briefcase' && (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-4.25m0 0h-4.5m4.5 0v-3.75m0 3.75h-4.5m-4.5 0H3.375c-.621 0-1.125-.504-1.125-1.125v-4.25c0-.621.504-1.125 1.125-1.125h3.75m9-3.75v-3.75c0-.621-.504-1.125-1.125-1.125h-4.5c-.621 0-1.125.504-1.125 1.125v3.75m9 0h-9" />
                            </svg>
                          )}
                          {iconType === 'communication' && (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>
                          )}
                        </div>
                        {/* Category Name */}
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                            {categoryName}
                          </h3>
                        </div>
                      </div>
                      {/* Openings Count and Arrow */}
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
                          {categoryOpenings} {parseInt(categoryOpenings) === 1 ? t("careers.positions.opening") : t("careers.positions.openings")}
                        </span>
                        <svg 
                          className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>

                    {/* Expanded Job Listings */}
                    {isExpanded && (() => {
                      const jobs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        .map((jobIndex) => {
                          const jobTitle = t(`careers.positions.categories.${categoryIndex}.jobs.${jobIndex}.title`);
                          const jobLocation = t(`careers.positions.categories.${categoryIndex}.jobs.${jobIndex}.location`);
                          const jobLink = t(`careers.positions.categories.${categoryIndex}.jobs.${jobIndex}.link`);
                          
                          if (!jobTitle || jobTitle.includes('jobs')) return null;
                          
                          return { jobIndex, jobTitle, jobLocation, jobLink };
                        })
                        .filter(job => job !== null);
                      
                      return (
                        <div className="bg-white border-t border-gray-200">
                          <div className="divide-y divide-gray-200">
                            {jobs.map((job, idx) => (
                              <div key={job.jobIndex} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 items-center">
                                {/* Job Title - Left */}
                                <div className="sm:col-span-1">
                                  <h4 className="text-base sm:text-lg font-medium text-gray-900">
                                    {job.jobTitle}
                                  </h4>
                                </div>
                                {/* Location - Center */}
                                <div className="sm:col-span-1 flex justify-center">
                                  <p className="text-sm sm:text-base text-gray-600">
                                    {job.jobLocation}
                                  </p>
                                </div>
                                {/* Apply Position - Right */}
                                <div className="sm:col-span-1 flex justify-end">
                                  <a 
                                    href={job.jobLink || '#'} 
                                    className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base whitespace-nowrap"
                                  >
                                    {t("careers.positions.apply")}
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative  w-full bg-primary py-10 sm:py-14 md:py-18 lg:py-20 xl:py-24 z-8 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 text-center">
            {t("careers.benefits.title")}
          </h2>

          {/* Benefits Grid - 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {/* Benefit 1: Competitive Salary - Two monitors with sparkle */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25v1.5m0 0h1.5m-1.5 0H7.5m4.5 0v-1.5m0 1.5h-1.5m1.5 0h1.5m-1.5 0v-1.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25v1.5m0 0h1.5m-1.5 0H13.5m4.5 0v-1.5m0 1.5h-1.5m1.5 0h1.5" />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
                {t("careers.benefits.competitiveSalary")}
              </p>
            </div>

            {/* Benefit 2: HealthCare */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
                {t("careers.benefits.healthcare")}
              </p>
            </div>

            {/* Benefit 3: Unlimited Vacation - Palm tree on island */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.944 11.944 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 0v4m0-4h4m-4 0H8" />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
                {t("careers.benefits.unlimitedVacation")}
              </p>
            </div>

            {/* Benefit 4: Meaningful Equity */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
                {t("careers.benefits.meaningfulEquity")}
              </p>
            </div>

            {/* Benefit 5: Paid Family Leave - Heart with baby bottle */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v3m0 0v3m0-3h3m-3 0H9m1.5-4.5h3m-3 0h-3m3 0v-1.5m0 1.5v1.5" />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
                {t("careers.benefits.paidFamilyLeave")}
              </p>
            </div>

            {/* Benefit 6: Hybrid Working */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.678 48.678 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7 48.661 48.661 0 010-7.324 4.006 4.006 0 013.7-3.7c1.232 0 2.453.046 3.662.138a4.006 4.006 0 013.7 3.7c0 1.232.046 2.453.138 3.662z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
                {t("careers.benefits.hybridWorking")}
              </p>
            </div>

            {/* Benefit 7: Crypto Bonus - Three interconnected circles/blockchain */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="6" cy="6" r="2" />
                  <circle cx="18" cy="6" r="2" />
                  <circle cx="6" cy="18" r="2" />
                  <circle cx="18" cy="18" r="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9l-6 3m6-3l6 3m-6 0v6m0-6l-6-3m6 3l6-3" />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
                {t("careers.benefits.cryptoBonus")}
              </p>
            </div>

            {/* Benefit 8: Get the equipment you need - Computer chip/circuit board */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
                {t("careers.benefits.equipment")}
              </p>
            </div>

            {/* Benefit 9: Offsites - Globe with heart */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.944 11.944 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25c0 1.242-.656 2.33-1.64 2.93a3.75 3.75 0 000-5.86C11.344 5.92 12 7.008 12 8.25z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
                {t("careers.benefits.offsites")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
