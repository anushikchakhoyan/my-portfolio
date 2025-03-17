
import * as React from "react";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

import { LANGUAGE } from "@lib/constants";
import { SectionsLayout } from "@base/";
import { cn } from "@lib/utils";

const AboutWebSite: React.FC = () => {
    const { t } = useTranslation();
    const { language } = useI18next();

    const sectionsData = [
        {
            id: 1,
            heading: {
                we: t('we'),
                build: t('build'),
                emphasis: t('moreThenWebsite'),
                alignment: 'text-end',
            },
            paragraphs: [
                t('whatWeBuild1'),
                t('whatWeBuild2'),
            ],
            alignment: 'left',
        },
        {
            id: 2,
            heading: {
                we: t('we'),
                build: t('build'),
                emphasis: t('possibilities'),
                alignment: 'text-start',
            },
            paragraphs: [
                t('whatWeBuild3'),
                t('whatWeBuild4'),
            ],
            alignment: 'right',
        },
    ];

    return (
        <SectionsLayout id="about" className="!px-0 grid gap-20">
            {sectionsData.map((section) => (
                <div key={section.id} className="grid lg:grid-cols-2 items-end gap-3 xl:gap-5">
                    <h3
                        className={cn(
                            "px-3 capitalize",
                            section.heading.alignment,
                            language === LANGUAGE.en ? "text-4xl lg:text-6xl" : "text-2xl lg:text-[40px] lg:leading-10",
                            section.alignment === 'right' && 'lg:order-2'
                        )}
                    >
                        <p className="font-light text-zinc-800 dark:text-zinc-100">{section.heading.we}</p>
                        <p className="font-light text-zinc-800 dark:text-zinc-100">{section.heading.build}</p>
                        <p className="font-medium text-primary font-italiana">
                            {section.heading.emphasis}
                        </p>
                    </h3>
                    <div className={cn("px-3 space-y-5", section.alignment === 'right' ? 'text-end' : '')}>
                        {section.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-sm text-zinc-700 dark:text-gray-300">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </SectionsLayout>
    )
}

export default AboutWebSite;
