import { THEME_TYPES } from "./constants";

export type Theme = keyof typeof THEME_TYPES;

export type Step = {
    id: number,
    title: string,
    description: string,
}