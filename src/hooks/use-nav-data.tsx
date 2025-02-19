import { NavigationTypes } from "@lib/types";
import { useTranslation } from "gatsby-plugin-react-i18next";

export default function useNavigationData() {
    const { t } = useTranslation();
    const navigations: NavigationTypes[] = [
        {
            title: t("general"),
            intro: {
                abbr: 'frontend/dev',
                content: t('pixelPerfectInterfaces')
            },
            items: [
                {
                    title: t("about"),
                    url: "/about",
                    description: t("discoverMyJourney")
                },
                {
                    title: t("faq"),
                    url: "/faq",
                    description: t("getInsightsMyWork")
                },
            ],
        },
        {
            title: t("explore"),
            intro: {
                abbr: "process/steps",
                content: t("understandMyProcess"),
            },
            items: [
                {
                    title: t("workflows"),
                    url: "/workflows",
                    description: t("websiteAndMentorship"),
                },
                {
                    title: t("whatIOffer"),
                    url: "/services",
                    description: t("discoverTheServices")
                },
                {
                    title: t("pricing"),
                    url: "/pricing",
                    description: t("exploreMyPricing")
                },
            ],
        },
        {
            title: t("connect"),
            intro: {
                content: t('makeLearningInteractive'),
                abbr: 'web/guide'
            },
            items: [
                {
                    title: t("contact"),
                    url: "/contact-us",
                    description: t("getInTouchForCollaborations")
                },
                {
                    title: t("blog"),
                    url: "/blog",
                    description: t("readInsightsAndArticles")
                },
            ],
        },
    ];

    return navigations;
}
