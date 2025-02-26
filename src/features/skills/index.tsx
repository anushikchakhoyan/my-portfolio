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
                        transition-colors duration-300 hover:dark:bg-zinc-800/60">
                        <p className="text-2xl text-center text-gray-500 dark:text-pink-400/90">
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
                                            className="h-1 bg-gradient-to-r from-pink-600 to-pink-400 
                                                dark:from-pink-400 dark:to-pink-600 rounded-full"
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
        <div id="essentialSkills" className="relative flex flex-col items-center justify-center overflow-hidden
         bg-zinc-50 dark:bg-zinc-900 gap-10 py-10">
            <Title title={t("essentialSkills")} className="md:text-4xl" />
            {[0, 1].map((index) => (
                <div key={`scroll-container-${index}`} className="w-screen overflow-hidden">
                    <div className={cn(
                        'flex whitespace-nowrap space-x-6',
                        index % 2 === 0
                            ? 'animate-scroll-linear-right'
                            : 'animate-scroll-linear-left'
                    )}>
                        {[...essentialSkills, ...essentialSkills].map((item) => (
                            <div
                                key={`skill-${item}`}
                                className="text-sm md:text-base px-6 py-4 
                                 rounded-xl bg-gray-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100  
                                 backdrop-blur-lg bg-opacity-80 dark:bg-opacity-90  
                                 transition-all duration-300
                                 hover:scale-105 hover:bg-zinc-100 hover:dark:bg-zinc-700  
                                 hover:text-pink-500 dark:hover:text-pink-300 
                                 text-center"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
EssentialSkills.displayName = "EssentialSkills";