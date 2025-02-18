import { THEME_TYPES } from "./constants";

export type Theme = keyof typeof THEME_TYPES;

export type Step = {
    id: number,
    title: string,
    description: string,
}

export type IntroType = {
    content: string;
    abbr: string;
};

export type NavigationTypes = {
    title: string,
    intro?: IntroType,
    items: {
        title: string;
        url: string;
        description: string;
    }[]
}