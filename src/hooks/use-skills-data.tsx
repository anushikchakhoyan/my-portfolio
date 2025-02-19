import { useTranslation } from "gatsby-plugin-react-i18next";

interface SkillsTypes {
    id: number;
    title: string;
    items: {
        skill: string;
        percentage?: number;
    }[];
};

export default function useRatesData() {
    const { t } = useTranslation();

    const skills: SkillsTypes[] = [
        {
            id: 1,
            title: t("checkOutCoreSkills"),
            items: [
                { skill: "HTML5 & CSS3 (Semantics, Accessibility, Animations)", percentage: 99 },
                { skill: "CSS Frameworks (Tailwind CSS, Chakra UI, Material UI)", percentage: 98 },
                { skill: "CSS Architecture (BEM, CSS Modules, Styled-components)", percentage: 98 },
                { skill: "JavaScript (ES6+, DOM Manipulation, Async Programming)", percentage: 95 },
                { skill: "React.js (Hooks, Context API, Server Components)", percentage: 90 },
                { skill: "Next.js (Static & SSR, ISR, API Routes)", percentage: 85 },
                { skill: "TypeScript", percentage: 85 },
                { skill: "REST APIs (Fetching, Pagination, Authentication)", percentage: 80 },
                { skill: "State Management (Redux)", percentage: 75 },
                { skill: "Web Performance Optimization (Lighthouse, Lazy Loading)", percentage: 85 },
                { skill: "SEO Best Practices", percentage: 80 },
                { skill: "Version Control (Git, GitHub)", percentage: 90 },
                { skill: "Agile Methodologies & Team Collaboration", percentage: 85 },
            ],
        },
        {
            id: 2,
            title: t("softSkills"),
            items: [
                { skill: "Problem-Solving & Debugging Skills" },
                { skill: "Communication & Documentation Skills" },
                { skill: "Keeping Up with Industry Trends" },
                { skill: "Code Splitting & Lazy Loading" },
            ],
        },
    ];

    return skills;
};
