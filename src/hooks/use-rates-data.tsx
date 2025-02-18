import { useTranslation } from "gatsby-plugin-react-i18next";

interface RatesTypes {
    id: string;
    name: string;
    rate: string;
    description: string;
}

const useRatesData = (): RatesTypes[] => {
    const { t } = useTranslation();

    const rates: RatesTypes[] = [{
        id: "projects",
        name: t("projects"),
        rate: "25+",
        description: t("projectsDescription"),
    },
    {
        id: "years-of-experience",
        name: t("yearsOfExperience"),
        rate: "6+",
        description: t("yearsOfExperienceDescription"),
    },
    {
        id: "customer-satisfaction",
        name: t("customerSatisfaction"),
        rate: "98%",
        description: t("customerSatisfactionDescription"),
    },
    {
        id: "team-members",
        name: t("teamMembers"),
        rate: "5",
        description: t("teamMembersDescription"),
    },
    {
        id: "ongoing-projects",
        name: t("ongoingProjects"),
        rate: "3",
        description: t("ongoingProjectsDescription"),
    }];

    return rates;
};

export default useRatesData;