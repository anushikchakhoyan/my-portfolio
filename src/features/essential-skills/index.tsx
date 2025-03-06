import React from "react";
import { cn } from "@lib/utils";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { useEssentialSkillsData } from "@hooks/custom/use-skills-data";
import { SectionsLayout } from "@base/";

const EssentialSkills = () => {
    const { t } = useTranslation();
    const essentialSkills = useEssentialSkillsData();

    return (
        <SectionsLayout id="essentialSkills" className="lg:py-12 px-0">
            <div className="py-8 relative overflow-hidden bg-zinc-50 dark:bg-gray-900">
                <div className="w-screen overflow-hidden py-5 space-y-5">
                    {[0, 1].map((index) => (
                        <div key={`scroll-container-${index}`} className={cn(
                            'flex gap-3 whitespace-nowrap',
                            index % 2 === 0
                                ? 'animate-scroll-linear-left'
                                : 'animate-scroll-linear-right'
                        )}>
                            {[...essentialSkills, ...essentialSkills].map((item, innerIndex) => (
                                <div
                                    key={`skill-${item}-${index}-${innerIndex}`}
                                    className="text-sm md:text-base px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 text-center
                                bg-white hover:bg-primary dark:bg-secondary/30 text-zinc-900 hover:text-white dark:text-white"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </SectionsLayout>
    )
}

export default EssentialSkills;
