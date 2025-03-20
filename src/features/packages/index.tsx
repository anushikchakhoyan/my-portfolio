import React, { useState } from "react";
import { cn } from "@lib/utils";
import { GoDotFill } from "react-icons/go";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

import usePackagesData from "@hooks/custom/use-packages-data";
import { GeneralTextBlock, Title } from "@base/";
import { PlanType, Service } from "@lib/types";
import SelectedPlan from "./selected-plan";
import { LANGUAGE } from "@lib/constants";
import { Button } from "@ui/button";

type SelectedPlanType = {
    title: string,
    service: Service
}

const Packages: React.FC = () => {
    const { t } = useTranslation();
    const { language } = useI18next();
    const packages = usePackagesData();
    const [selectedPlan, setSelectedPlan] = useState<SelectedPlanType | null>(null);

    const handleChoosePlan = ({ title, service }: SelectedPlanType) => {
        setSelectedPlan({ title, service });
    };

    const handleSubmit = async (
        values: { email: string }
    ): Promise<void> => {
        window.location.href =
            `/contact-us?plan=${encodeURIComponent(selectedPlan!.title)}&email=${encodeURIComponent(values.email)}&service=${selectedPlan!.service}`;
    };

    return (
        <section id="packages" className="py-20 bg-gray-50 dark:bg-gray-900">
            <GeneralTextBlock
                title={t("ourPackages")}
                subtitle={t("chooseTheRightPlanForYou")}
                description={t("packagesDesc")}
                descrptionClasses="max-w-2xl"
            />
            <div className="max-w-7xl mx-auto px-4 py-20">
                {packages.map(({ plan, title, desc, service }) => (
                    <div key={title}>
                        <Title title={title} className="text-3xl text-start" />
                        <p className="whitespace-break-spaces">{desc}</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10 justify-items-center">
                            {plan.map(({ title, features, popular }: PlanType) => (
                                <div
                                    key={title}
                                    className={cn(
                                        `min-h-96 max-w-96 lg:max-w-full w-full relative overflow-hidden bg-[length:1200px_100%] cursor-pointer
                                       rounded-lg shadow-sm py-8 px-4 xl:px-6 border border-primary/40 flex flex-col justify-between items-center 
                                       hover:scale-105 hover:shadow-lg hover:border-primary/60 hover:animate-shimmer hover:bg-shimmer
                                       `,
                                        popular && 'scale-105 border-primary/60 shadow-lg',
                                    )}
                                >
                                    {popular && (
                                        <div className="absolute top-[35px] -right-[80px] transform rotate-45
                                         bg-yellow-500 px-20 py-2 z-10">
                                            <span className="text-white text-xs xl:text-sm font-medium whitespace-nowrap">{t("mostPopular")}</span>
                                        </div>
                                    )}
                                    <div className="py-5">
                                        <Title title={title} className="text-xl md:text-3xl font-normal" />
                                        <ul className="py-5">
                                            {features.map((feature: string) => (
                                                <li key={feature} className="flex items-center py-1">
                                                    <GoDotFill className="w-2 h-2 text-zinc-800 mr-2" />
                                                    <span className={cn(`text-gray-600 dark:text-gray-300`,
                                                        language === LANGUAGE.en ? "text-base" : "text-sm"
                                                    )}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button
                                        size="lg"
                                        onClick={() => handleChoosePlan({ title, service })}
                                    >
                                        {t("choose")}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {selectedPlan && (
                <SelectedPlan handleSubmit={handleSubmit} />
            )}
        </section>
    );
};

export default Packages;