import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { RocketIcon, TargetIcon } from "@radix-ui/react-icons";

import { SectionsLayout } from "@base/";

const VisionMission = () => {
    const { t } = useTranslation();

    const data = [
        {
            Icon: RocketIcon,
            title: t('visionTitle'),
            desc: t('visionDesc')
        },
        {
            Icon: TargetIcon,
            title: t('missionTitle'),
            desc: t('missionDesc')
        },
    ]

    return (
        <SectionsLayout id="mission">
            <div className="gap-6 flex flex-col md:flex-row justify-center mx-auto lg:w-5/6">
                {data.map(({ title, desc, Icon }) => (
                    <div key={title} className="px-8 py-16 space-y-6 rounded-lg bg-secondary/30">
                        <div className="flex flex-col items-start gap-1 text-zinc-800 dark:text-white">
                            <Icon className="w-8 h-8" />
                            <h2 className="text-2xl font-bold">
                                {title}
                            </h2>
                        </div>
                        <p className="text-gray-600 dark:text-zinc-50">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </SectionsLayout>
    );
};

export default VisionMission;