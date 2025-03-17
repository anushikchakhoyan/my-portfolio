import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SectionsLayout } from "@base/";

const WhatWeDo: React.FC = () => {
    const { t } = useTranslation();

    return (
        <SectionsLayout id="about-what-we-do" className="flex items-center justify-center md:!pt-40 px-4">
            <div className="w-full lg:w-1/2 xl:w-2/4 flex flex-col items-center gap-6">
                <p className="text-md text-center font-semibold text-primary dark:text-primary-300 uppercase tracking-widest">
                    {t("welcome")}
                </p>
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary-100/30 dark:bg-primary-600/20 
                    transform -skew-y-2 scale-105 group-hover:scale-110 transition-all duration-300" />
                    <p className="relative text-center text-xl lg:text-3xl font-italiana 
                     text-gray-800 dark:text-gray-100 leading-snug px-6 py-4">{t('whereSimplicityIsKey')}</p>
                </div>
                <p className="text-center text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                    {t("aboutPurposeOfWork")}
                </p>
            </div>
        </SectionsLayout>
    )
}

export default WhatWeDo
