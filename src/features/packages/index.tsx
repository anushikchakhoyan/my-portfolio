import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { useTranslation } from "gatsby-plugin-react-i18next";

import GeneralTextBlock from "@features/general-text-block";
import { Button } from "@ui/button";
import { cn } from "@lib/utils";

const Packages = () => {
    const { t } = useTranslation();

    const packages = [
        {
            title: t("basicPackage"),
            price: t(""),
            features: [
                t("feature1"),
                t("feature2"),
                t("feature3"),
            ],
            cta: t("choose"),
            popular: false,
        },
        {
            title: t("proPackage"),
            price: t(""),
            features: [
                t("feature1"),
                t("feature2"),
                t("feature3"),
                t("feature4"),
                t("feature5"),
            ],
            cta: t("choose"),
            popular: true,
        },
        {
            title: t("enterprisePackage"),
            price: t(""),
            features: [
                t("feature1"),
                t("feature2"),
                t("feature3"),
                t("feature4"),
                t("feature5"),
                t("feature6"),
                t("feature7"),
                t(""),
                t(""),
            ],
            cta: t("choose"),
            popular: false,
        },
    ];

    return (
        <section id="packages" className="py-20 bg-gray-50 dark:bg-gray-900">
            <GeneralTextBlock
                title={t("ourPackages")}
                subtitle={t("chooseTheRightPlanForYou")}
                description={t("packagesDesc")}
                descrptionClasses="max-w-2xl"
            />
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={cn(
                                "relative space-y-6 bg-white dark:bg-zinc-700 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105",
                                pkg.popular && "border-1 border-pink-500"
                            )}
                        >
                            {pkg.popular && (
                                <p className="absolute top-1 right-1 bg-pink-500 text-white text-sm 
                                font-semibold px-4 py-1 rounded-lg">
                                    {t("mostPopular")}
                                </p>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                                {pkg.title}
                            </h3>
                            <p className="text-4xl font-bold text-gray-900 dark:text-white text-center">
                                {pkg.price}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                                        <span className="text-gray-600 dark:text-gray-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-center absolute bottom-4 left-0 right-0">
                                <Button className="max-w-xs w-full">
                                    {pkg.cta}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;