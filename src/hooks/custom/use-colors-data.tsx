import { Color } from "@lib/types";
import { useTranslation } from "gatsby-plugin-react-i18next";

export default function useColorsData() {
    const { t } = useTranslation();

    const colorSets: Color[] = [
        {
            name: 'pink',
            desc: t("pink"),
            primary: { hue: 324, saturation: 23, lightness: 50 },
            secondary: { hue: 324, saturation: 34, lightness: 74 },
        },
        {
            name: 'midnight',
            desc: t("midnight"),
            primary: { hue: 220, saturation: 40, lightness: 30 },
            secondary: { hue: 220, saturation: 25, lightness: 60 },
        },

        {
            name: 'forest',
            desc: t("forest"),
            primary: { hue: 150, saturation: 40, lightness: 35 },
            secondary: { hue: 150, saturation: 30, lightness: 65 },
        },
        {
            name: 'lavender',
            desc: t("lavender"),
            primary: { hue: 270, saturation: 40, lightness: 50 },
            secondary: { hue: 270, saturation: 30, lightness: 75 },
        },
        {
            name: 'red',
            desc: t("red"),
            primary: { hue: 0, saturation: 60, lightness: 50 },
            secondary: { hue: 0, saturation: 40, lightness: 75 },
        },
        {
            name: 'ocean',
            desc: t("ocean"),
            primary: { hue: 200, saturation: 50, lightness: 40 },
            secondary: { hue: 200, saturation: 30, lightness: 70 },
        },
        {
            name: 'golden',
            desc: t("golden"),
            primary: { hue: 45, saturation: 70, lightness: 55 },
            secondary: { hue: 45, saturation: 50, lightness: 80 },
        },
        {
            name: 'mauve',
            desc: t("mauve"),
            primary: { hue: 300, saturation: 30, lightness: 50 },
            secondary: { hue: 300, saturation: 20, lightness: 75 },
        },
        {
            name: 'slate',
            desc: t("slate"),
            primary: { hue: 337.13, saturation: 100, lightness: 31.37 },
            secondary: { hue: 210, saturation: 15, lightness: 65 },
        },
        {
            name: 'gray',
            desc: t("gray"),
            primary: { hue: 0, saturation: 0.56, lightness: 22.11 },
            secondary: { hue: 210, saturation: 15, lightness: 65 },
        }
    ];

    return colorSets;
};
