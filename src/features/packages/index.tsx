import * as React from "react";
import { GoDotFill } from "react-icons/go";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { GeneralTextBlock, Title } from "@base/";
import { Button } from "@ui/button";
import { cn } from "@lib/utils";

type PlanType = {
    title: string;
    feaures: string[];
    cta: string;
    popular: boolean;
}

type PackageType = {
    title: string;
    desc: string;
    plan: PlanType[]
}

const Packages: React.FC = () => {
    const { t } = useTranslation();

    const packages: PackageType[] = [
        {
            title: "Mentorship Plan",
            desc: "lorem    jytgyugkyu gu",
            plan: [
                {
                    title: "Classic",
                    feaures: [
                        t("feature1"),
                        t("feature2"),
                        t("feature3"),
                    ],
                    cta: t("choose"),
                    popular: false,
                },
                {
                    title: "Pro",
                    feaures: [
                        t("feature1"),
                        t("feature2"),
                        t("feature3"),
                    ],
                    cta: t("choose"),
                    popular: true,
                }
            ],

        },
        {
            title: "Collaboration Plan",
            desc: "lorem    jytgyugkyu gu",
            plan: [
                {
                    title: "Classic",
                    feaures: [
                        t("feature1"),
                        t("feature2"),
                        t("feature3"),
                    ],
                    cta: t("choose"),
                    popular: false,
                },
                {
                    title: "Pro",
                    feaures: [
                        t("feature1"),
                        t("feature2"),
                        t("feature3"),
                    ],
                    cta: t("choose"),
                    popular: true,
                }
            ],
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
                {packages.map(({ plan, title, desc }) => (
                    <div key={title} className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
                        <div>
                            <Title title={title} className="text-xl md:text-3xl text-start" />
                            <p>{desc}</p>
                        </div>
                        {plan.map((item: PlanType) => (
                            <div
                                key={item.title}
                                className={cn(
                                    `min-h-96 relative space-y-6 bg-white rounded-lg shadow-sm p-8 
                                     border border-pink-500/40`,
                                )}
                            >
                                <Title title={item.title} className="text-xl md:text-3xl font-normal" />
                                <ul className="space-y-3 mb-8">
                                    {item.feaures.map((feature: string) => (
                                        <li key={feature} className="flex items-center">
                                            <GoDotFill className="w-2 h-2 text-zinc-800 mr-2" />
                                            <span className="text-gray-600 dark:text-gray-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center">
                                    <Button variant="outline" className="py-5 max-w-32 w-full rounded-3xl">
                                        {item.cta}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Packages;