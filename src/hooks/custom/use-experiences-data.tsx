import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

interface ExperiencesTypes {
    id: number;
    company: string;
    role: string;
    duration: string;
    logo: React.ReactNode;
}

export default function useExperiencesData() {
    const { t } = useTranslation();

    const experiences: ExperiencesTypes[] = [
        {
            id: 1,
            company: "Local Express",
            role: "Middle Frontend Developer",
            duration: t("duration1", { start: 2023, end: 2025 }),
            logo: (
                <StaticImage
                    className="object-contain"
                    src="../images/localexpress.png"
                    alt="Local Express"
                    placeholder="blurred"
                    onError={(e) => {
                        e.currentTarget.src = "/fallback-logo.png";
                    }}
                />
            ),
        },
        {
            id: 2,
            company: "InSpace",
            role: "Frontend / UI Developer",
            duration: t("duration2", { start: 2021, end: 2023 }),
            logo: (
                <StaticImage
                    className="object-contain"
                    src="../images/inspace.jpeg"
                    alt="Inspace"
                    onError={(e) => {
                        e.currentTarget.src = "/fallback-logo.png";
                    }}
                />
            ),
        },
        {
            id: 3,
            company: "Develandoo",
            role: "Frontend Developer",
            duration: t("duration3", { start: 2018, end: 2021 }),
            logo: (
                <StaticImage
                    className="object-contain"
                    src="../images/dvld.png"
                    alt="Dvld"
                    onError={(e) => {
                        e.currentTarget.src = "/fallback-logo.png";
                    }}
                />
            )
        },
    ];

    return experiences;
}