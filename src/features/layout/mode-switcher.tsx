import React from "react";
import { MdSunny } from "react-icons/md";
import { FaStar, FaMoon } from "react-icons/fa";

import { useTheme } from "@/contexts/ThemeContext";
import { THEME_TYPES } from '@/lib/constants';

export function ModeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative flex h-8 w-16 items-center rounded-full transition-all
                border-1 border-gray-300 dark:border-white bg-gray-100 dark:bg-gray-900"
        >
            <div
                className={`flex h-5 w-5 items-center justify-center rounded-full bg-white
                         shadow-md transition-all ${theme === THEME_TYPES.dark ? "translate-x-10" : "translate-x-0 ml-1"
                    }`}
            />
            {theme === THEME_TYPES.dark ? (
                <div className="flex items-center space-x-1 text-yellow-300">
                    <FaMoon className="h-4 w-4 absolute left-2" />
                    <FaStar className="h-1.5 w-1.5 absolute left-6 top-4" />
                    <FaStar className="h-1 w-1 absolute left-7 top-1" />
                    <FaStar className="h-1 w-1 absolute left-5 top-2" />
                </div>
            ) : (
                <div className="absolute right-3 flex items-center space-x-1">
                    <MdSunny className={`h-4 w-4 text-yellow-500`} />
                </div>
            )}
        </button>
    );
}
