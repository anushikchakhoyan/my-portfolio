import React from 'react';
import { FaPaintRoller } from "react-icons/fa";
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';
import { Button } from '@ui/button';
import { BiCheck } from 'react-icons/bi';

import { useColor } from '@contexts/ColorContext';
import { DEFAULT_COLOR, Hsl } from '@lib/types';
import { cn } from '@lib/utils';

export interface Color extends Hsl {
    name: string;
    desc: string;
}

const ColorPicker = () => {
    const { t } = useTranslation();
    const { state, dispatch } = useColor();
    const { hue, saturation, lightness } = state.primary;

    const COLORS: Color[] = [
        { name: 'pink', desc: t("pink"), ...DEFAULT_COLOR }, //286, 25, 54
        { name: 'gold', desc: t("gold"), hue: 26.57, saturation: 27.56, lightness: 49.8 },
        { name: 'green', desc: t("green"), hue: 146, saturation: 34, lightness: 55 },
        { name: 'blue', desc: t("blue"), hue: 215, saturation: 62, lightness: 54 },
        { name: 'purple', desc: t("purple"), hue: 251, saturation: 21, lightness: 52 },
    ];

    const handleColorChange = ({ hue, saturation, lightness }: Hsl) => {
        dispatch({ type: "SET_PRIMARY_COLOR", payload: { hue, saturation, lightness } });
    };

    return (
        <Popover>
            <PopoverTrigger className="flex items-center">
                <Button
                    className="h-8 w-8 p-0 shadow-none bg-gray-100 dark:bg-zinc-800
                     text-black hover:text-white dark:text-white
                     rounded-full transition-all duration-300
                     hover:border-1 border-gray-400 hover:scale-110"
                    aria-label="Switch Color">
                    <FaPaintRoller />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-2">
                <h4 className='py-3 text-xl text-zinc-800 dark:text-zinc-50'>{t('chooseColorPallete')}</h4>
                <div className="flex flex-col gap-2">
                    {COLORS.map((color) => {
                        const isSelected = hue === color.hue && saturation === color.saturation && lightness === color.lightness;
                        return (
                            <div
                                key={color.name}
                                className={cn(`group p-2 rounded flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-700`,
                                    {
                                        "bg-zinc-50 dark:bg-zinc-700 border border-zinc-200": isSelected,
                                    })}
                                aria-label={`Select ${color.name} color`}
                                onClick={() => handleColorChange(color)}>
                                {isSelected ? (
                                    <div>
                                        <p className="flex items-start text-lg text-zinc-600 dark:text-zinc-300">
                                            <BiCheck className="text-green-600 text-2xl" />
                                            {t('currentTheme')}
                                        </p>
                                        <p className="text-xs text-zinc-600 dark:text-zinc-300">
                                            {t('currentThemeDescription')}
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="flex items-center text-lg text-zinc-600 dark:text-zinc-300 capitalize">
                                            {color.name}
                                        </p>
                                        <p className="text-xs text-zinc-600 dark:text-zinc-300">
                                            {color.desc}
                                        </p>
                                    </div>
                                )}
                                <div className={cn(
                                    `p-4 w-8 h-8 rounded-lg hover:scale-110 transition-all
                                    group-hover:ring-1 group-hover:ring-zinc-200 group-hover:scale-200`,
                                    {
                                        "ring-1 ring-zinc-300 scale-200": isSelected,
                                    }
                                )}
                                    style={{
                                        backgroundColor: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`,
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ColorPicker;
