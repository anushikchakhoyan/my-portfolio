import React, { useCallback, useMemo } from 'react';
import { FaPaintRoller } from "react-icons/fa";
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';
import { Button } from '@ui/button';
import { BiCheck } from 'react-icons/bi';

import useColorsData from '@hooks/custom/use-colors-data';
import { useColor } from '@contexts/ColorContext';
import { Color } from '@lib/types';
import { cn } from '@lib/utils';

const ColorPicker = () => {
    const { t } = useTranslation();
    const { state, dispatch } = useColor();
    const colorsSet = useColorsData();

    const handleColorChange = useCallback((colorSet: Color) => {
        dispatch({
            type: "SET_PRIMARY_COLOR",
            payload: { primary: colorSet.primary, secondary: colorSet.secondary }
        });
    }, [dispatch]);

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
            <PopoverContent className="p-4 max-w-2xl !w-full">
                <h4 className='py-2 text-xl text-zinc-800 dark:text-zinc-50'>{t('chooseColorPallete')}</h4>
                <div className="grid grid-cols-2 gap-2">
                    {colorsSet.map((color) => {
                        const currentTheme = color.primary.hue === state.primary.hue &&
                            color.primary.saturation === state.primary.saturation &&
                            color.primary.lightness === state.primary.lightness;
                        return (
                            <div
                                key={color.name}
                                className={cn(`p-2 group rounded flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-700`,
                                    {
                                        "bg-zinc-50 dark:bg-zinc-700 border border-zinc-300 animate-shimmer bg-shimmer bg-[length:1200px_100%]": currentTheme,
                                    })}
                                aria-label={`Select ${color.name} color`}
                                onClick={() => handleColorChange(color)}>
                                {currentTheme ? (
                                    <div className="flex flex-col items-start">
                                        <p className="text-base text-zinc-600 dark:text-zinc-300">
                                            {t('currentTheme')}
                                        </p>
                                        <span className="text-xs text-zinc-600 dark:text-zinc-300">
                                            {t('currentThemeDescription')}
                                        </span>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="flex items-center text-base text-zinc-600 dark:text-zinc-300 capitalize">
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
                                        "ring-1 ring-zinc-300 scale-200": currentTheme,
                                    }
                                )}
                                    style={{
                                        backgroundColor:
                                            `hsl(${color.primary.hue}, ${color.primary.saturation}%, ${color.primary.lightness}%)`,
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
