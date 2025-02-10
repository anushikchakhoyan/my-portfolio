import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SectionsLayout } from "@base/";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionsLayout id="about" className="h-screen flex flex-col transition-colors duration-300">
      <div className="flex-1 w-full flex flex-col items-center justify-center py-10 
      bg-gray-800 dark:bg-gray-700 relative overflow-hidden text-center space-y-4">
        <h2 className="text-2xl sm:text-5xl md:text-6xl font-italiana text-gray-100 dark:text-pink-50 
        tracking-wide transition-all duration-300 hover:translate-x-4 whitespace-break-spaces">
          {t("itsMe")}
        </h2>
        <span className="text-sm max-w-xs block text-gray-400 dark:text-gray-300">{t('description1')}</span>
      </div>
      <div className="flex-1 flex items-center justify-center py-16 md:py-12 px-4">
        <div className="w-full md:w-1/2 lg:w-2/4 flex flex-col items-center gap-6">
          <span className="text-xs font-semibold text-pink-500 dark:text-pink-400 uppercase tracking-widest">
            {t("welcome")}
          </span>

          <div className="relative group">
            <div className="absolute inset-0 bg-pink-100/30 dark:bg-pink-900/20 transform 
            -skew-y-2 scale-105 group-hover:scale-110 transition-all duration-300" />
            <p
              className="relative text-center text-2xl lg:text-3xl xl:text-4xl font-italiana t
              ext-gray-800 dark:text-gray-100 leading-snug px-6 py-4">{t('whereSimplicityIsKey')}</p>
          </div>

          <p className="text-center text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            {t("aboutPurposeOfWork")}
          </p>
        </div>
      </div>
    </SectionsLayout>
  )
}

export default About
