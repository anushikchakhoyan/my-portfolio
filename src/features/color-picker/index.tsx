import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';

import { useTheme } from '@contexts/ColorContext';
import { DEFAULT_COLOR, Hsl } from '@lib/types';

export interface Color extends Hsl {
    name: string;
}

export const COLORS: Color[] = [
    { name: 'pink', ...DEFAULT_COLOR },
    { name: 'gold', hue: 26.57, saturation: 27.56, lightness: 49.8 },
    { name: 'green', hue: 146, saturation: 34, lightness: 55 }, //146, 34, 45
    { name: 'blue', hue: 206, saturation: 81, lightness: 29 },
    { name: 'purple', hue: 251, saturation: 21, lightness: 52 }, // 251, 21, 48
];

const ColorPicker = () => {
    const { t } = useTranslation();
    const { dispatch } = useTheme();

    const handleColorChange = ({ hue, saturation, lightness }: Hsl) => {
        dispatch({ type: "SET_PRIMARY_COLOR", payload: { hue, saturation, lightness } })
    }

    return (
        <Popover>
            <PopoverTrigger>{t('chooseColorPallete')}</PopoverTrigger>
            <PopoverContent>
                <div className="flex gap-4">
                    {COLORS.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => handleColorChange(color)}
                            className={`p-4 rounded-full`}
                            style={{
                                backgroundColor: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`,
                            }}
                        >
                        </button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ColorPicker;

// https://www.realtimecolors.com/?colors=f8fcfa-020303-4c9a6e-315863-3e647e&fonts=Inter-Inter