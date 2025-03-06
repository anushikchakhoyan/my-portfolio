import * as React from "react";
import { cn } from "@lib/utils";
import { motion } from "framer-motion";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { useSkillsData } from "@hooks/custom/use-skills-data";
import { SectionsLayout, Title } from "@base/";

const Skills: React.FC = () => {
    const { t } = useTranslation();
    const skillsData = useSkillsData();

    return (
        <SectionsLayout id="skills" className="p-0">
            <div className="flex flex-col items-center justify-start gap-10">
                <Title title={t("essentialSkills")} />
                <p className="text-xl text-center font-medium text-zinc-800 dark:text-white">
                    {t("checkOutCoreSkills")}
                </p>
                {skillsData.map(({ id, items }) => (
                    <div key={id} className="w-full p-4 md:p-8 space-y-5 
                        transition-colors duration-300">
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
            </div>
        </SectionsLayout>
    );
};

export default Skills;
