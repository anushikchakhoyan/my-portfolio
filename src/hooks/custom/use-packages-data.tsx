import { useTranslation } from "gatsby-plugin-react-i18next";
import { SERVICES_CATEGORY } from "@lib/constants";
import { PackageType } from "@lib/types";

export default function usePackagesData() {
    const { t } = useTranslation();

    const packages: PackageType[] = [
        {
            title: t('mentorship'),
            desc: t('packagesDesc2'),
            service: SERVICES_CATEGORY.mentorship,
            plan: [
                {
                    title: t("classic"),
                    features: t('classicItems', { returnObjects: true }) as string[],
                    popular: false,
                },
                {
                    title: t("pro"),
                    features: t('proItems', { returnObjects: true }) as string[],
                    popular: true,
                },
                {
                    title: t("enterprise"),
                    features: t('enterpriseItems', { returnObjects: true }) as string[],
                    popular: false,
                }
            ],
        },
    ];

    return packages;
};
