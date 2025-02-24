import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

import { THEME_MODE } from '@lib/constants';
import { Theme } from '@lib/types';

type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void,
}

const ThemeContext = createContext<ThemeContextType>({
    theme: THEME_MODE.light,
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(THEME_MODE.light);

    useEffect(() => {
        // Check localStorage for saved theme preference
        const storedTheme = localStorage.getItem("theme") as Theme | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.add(storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === THEME_MODE.dark ? THEME_MODE.light : THEME_MODE.dark;
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        // Update the <html> class to apply Tailwind dark mode
        document.documentElement.classList.remove(THEME_MODE.light, THEME_MODE.dark);
        document.documentElement.classList.add(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
