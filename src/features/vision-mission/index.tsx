import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { RocketIcon, TargetIcon } from "@radix-ui/react-icons";

import { SectionsLayout } from "@base/";
import { cn } from "@lib/utils";

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
                {data.map(({ title, desc, Icon }, index) => (
                    <div key={title} className="px-8 py-12 space-y-6 rounded-xl
                     bg-white dark:bg-zinc-800/30 shadow-sm border border-primary/20 group hover:bg-primary-200/10">
                        <div className="flex flex-col items-start gap-1 text-primary dark:text-primary">
                            <Icon className={cn("w-8 h-8",
                                index === 0 && "group-hover:translate-x-5 group-hover:-translate-y-4 transition-all duration-300",
                                index === 1 && "group-hover:scale-125 transition-all duration-300"
                            )} />
                            <h2 className="text-2xl font-medium tracking-wider">
                                {title}
                            </h2>
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-50">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </SectionsLayout>
    );
};

export default VisionMission;