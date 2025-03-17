
import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SectionsLayout } from "@base/";

const AboutUs: React.FC = () => {
    const { t } = useTranslation();

    return (
        <SectionsLayout id="about" className="!px-0 grid gap-20">

            <div className="pt-24 space-y-8 max-w-5xl mx-auto">
                <p className="text-sm md:text-base text-zinc-600 dark:text-gray-300 whitespace-break-spaces">{t('aboutDescription1')}</p>
                <p className="text-sm md:text-base text-zinc-600 dark:text-gray-300 whitespace-break-spaces">{t('aboutDescription2')}</p>
                <p className="text-sm md:text-base text-zinc-600 dark:text-gray-300 whitespace-break-spaces">{t('aboutDescription3')}</p>
            </div>
        </SectionsLayout>
    )
}

export default AboutUs;
