import * as React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "gatsby-plugin-react-i18next";

import useSkillsData from "@hooks/use-skills-data";
import { SectionsLayout } from "@base/";

const Skills = () => {
    const { t } = useTranslation();
    const skillsData = useSkillsData();

    return (
        <SectionsLayout id="skills" className="py-16">
            <div className="flex flex-col items-center justify-start gap-10">
                <h1 className="w-full text-center text-4xl md:text-5xl font-italiana font-bold lg:mb-4">{t("topSkills")}</h1>
                {skillsData.map(({ id, title, items }) => (
                    <div key={id} className="w-full max-w-4xl">
                        <p className="text-xl text-pink-600 dark:text-pink-300">
                            {title}
                        </p>
                        <ul className="w-full bg-gray-50 dark:bg-gray-800 rounded-lg lg:shadow-sm py-6 px-4 md:px-8 space-y-6">
                            {items.map(({ skill, percentage }, index) => (
                                <li key={index} className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
                                            {skill}
                                        </span>
                                        {percentage && (
                                            <span className="text-base lg:text-lg font-medium text-gray-700 dark:text-gray-300">
                                                {percentage}%
                                            </span>
                                        )}
                                    </div>
                                    {percentage && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
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
