import { getImage, IGatsbyImageData } from "gatsby-plugin-image";

import { LANGUAGE, SERVICES_CATEGORY, THEME_MODE } from "./constants";

export type Theme = keyof typeof THEME_MODE; // "light" | "dark"
export type Service = (typeof SERVICES_CATEGORY)[keyof typeof SERVICES_CATEGORY];
export type Language = keyof typeof LANGUAGE;

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

export type Benefit = {
    id: number;
    title: string;
    desc: string;
    image: IGatsbyImageData | any;
}

export type ColorShades = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};

export type Hsl = {
    hue: number;
    saturation: number;
    lightness: number;
}

export const DEFAULT_COLOR: Hsl = {
    hue: 334.65,
    saturation: 27.84,
    lightness: 50,
};

export const DEFAULT_SECONDARY_COLOR: Hsl = {
    hue: 246,
    saturation: 63,
    lightness: 71
};

export type Color = {
    name: string;
    desc: string;
    primary: Hsl;
    secondary: Hsl;
}