import { getImage } from "gatsby-plugin-image";

import { SERVICES_CATEGORY, THEME_MODE } from "./constants";

export type Theme = keyof typeof THEME_MODE; // "light" | "dark"
export type Service = (typeof SERVICES_CATEGORY)[keyof typeof SERVICES_CATEGORY];

export type Step = {
    id: number,
    title: string,
    description: string,
}

export type IntroType = {
    content: string;
    abbr: string;
};

export type NavigationType = {
    title: string,
    intro?: IntroType,
    items: {
        title: string;
        url: string;
        description: string;
    }[]
}

export type ServiceType = {
    id: number;
    title: string;
    hint: string;
    description: string;
    contactMe: string;
    image: ReturnType<typeof getImage>;
}
