import * as React from "react";
import { cn } from "@lib/utils";
import { motion } from "framer-motion";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { useSkillsData, useEssentialSkillsData } from "@hooks/custom/use-skills-data";
import { SectionsLayout, Title } from "@base/";

const Skills: React.FC = () => {
    const { t } = useTranslation();
    const skillsData = useSkillsData();

    return (
        <SectionsLayout id="skills">
            <div className="flex flex-col items-center justify-start gap-10">
                <Title title={t("topSkills")} />
                {skillsData.map(({ id, title, items }) => (
                    <div key={id} className="w-full bg-zinc-50 dark:bg-zinc-800 rounded-lg lg:shadow-sm p-4 md:p-8 space-y-5 
                        transition-colors duration-300">
                        <p className="text-2xl text-center text-zinc-800 dark:text-white">
                            {title}
                        </p>
                        <ul className="max-w-5xl space-y-6 mx-auto">
                            {items.map(({ skill, percentage }, index) => (
                                <li key={index} className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm md:text-base font-medium text-gray-800 dark:text-zinc-200">
                                            {skill}
                                        </span>
                                        {percentage && (
                                            <span className="text-base lg:text-lg font-medium text-gray-700 dark:text-zinc-400">
                                                {percentage}%
                                            </span>
                                        )}
                                    </div>
                                    {percentage && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="h-1 bg-gradient-to-r from-gray-300 to-primary dark:from-gray-600 dark:to-primary rounded-full"
                                            style={{ maxWidth: "100%" }}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <EssentialSkills />
            </div>
        </SectionsLayout>
    );
};

export default Skills;

const EssentialSkills = () => {
    const { t } = useTranslation();
    const essentialSkills = useEssentialSkillsData();

    return (
        <div id="essentialSkills" className="relative flex flex-col items-center justify-center 
        overflow-hidden gap-10 py-10 bg-zinc-50 dark:bg-gray-900">
            <Title title={t("essentialSkills")} className="md:text-4xl" />
            <div className="w-screen overflow-hidden py-5 space-y-5">
                {[0, 1].map((index) => (
                    <div key={`scroll-container-${index}`} className={cn(
                        'flex gap-3 whitespace-nowrap',
                        index % 2 === 0
                            ? 'animate-scroll-linear-left'
                            : 'animate-scroll-linear-right'
                    )}>
                        {[...essentialSkills, ...essentialSkills].map((item) => (
                            <div
                                key={`skill-${item}`}
                                className="text-sm md:text-base px-6 py-4 rounded-2xl
                                bg-white hover:bg-primary text-zinc-900 hover:text-white 
                                transition-all duration-300 hover:scale-105 text-center"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
EssentialSkills.displayName = "EssentialSkills";