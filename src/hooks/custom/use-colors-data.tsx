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
            // https://www.realtimecolors.com/?colors=0d0d0d-f7f4f6-9e6386-d3a6c1-c96fa4&fonts=Inter-Inter
        },
        {
            name: 'gold',
            desc: t("gold"),
            primary: { hue: 31, saturation: 35, lightness: 51 },
            secondary: { hue: 31, saturation: 37, lightness: 72 },
        },
        {
            name: 'green',
            desc: t("green"),
            primary: { hue: 169, saturation: 30, lightness: 52 },
            secondary: { hue: 196, saturation: 31, lightness: 72 },
            // https://www.realtimecolors.com/?colors=050a09-f3f8f7-60aa9d-a2c2ce-81a3bc&fonts=Inter-Inter#toolbar
        },
        {
            name: 'blue',
            desc: t("blue"),
            primary: { hue: 220, saturation: 40, lightness: 52 },
            secondary: { hue: 221, saturation: 45, lightness: 72 },
            // https://www.realtimecolors.com/?colors=f9f9fb-030407-496aab-273c68-2c4c8c&fonts=Inter-Inter
        },
        {
            name: 'purple',
            desc: t("purple"),
            primary: { hue: 262, saturation: 32, lightness: 53 },
            secondary: { hue: 261, saturation: 45, lightness: 75 },
            // https://www.realtimecolors.com/?colors=09080b-fcfbfc-7a679f-aea0c6-9a88bc&fonts=Inter-Inter
        },
    ];

    return colorSets;
};
