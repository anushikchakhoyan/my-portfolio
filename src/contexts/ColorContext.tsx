import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ColorShades, DEFAULT_COLOR, DEFAULT_SECONDARY_COLOR, Hsl } from '@lib/types';
import { generateHSLShades } from '@lib/utils';

type ColorState = {
    primary: Hsl;
    secondary: Hsl,
    shades: ColorShades
};

type ColorAction = {
    type: 'SET_PRIMARY_COLOR';
    payload: {
        primary: Hsl,
        secondary: Hsl,
    }
}

type ColorContextType = {
    state: ColorState,
    dispatch: React.Dispatch<ColorAction>
}

const getInitialState = (): ColorState => {
    if (typeof window === 'undefined') {
        // SSR fallback values
        return {
            primary: DEFAULT_COLOR,
            secondary: DEFAULT_SECONDARY_COLOR,
            shades: generateHSLShades(DEFAULT_COLOR)
        };
    }

    try {
        const savedColor = localStorage.getItem('primary');
        const savedSecondary = localStorage.getItem('secondary');
        const primary = savedColor ? JSON.parse(savedColor) : DEFAULT_COLOR;
        const secondary = savedSecondary ? JSON.parse(savedSecondary) : DEFAULT_SECONDARY_COLOR;

        return {
            primary,
            secondary,
            shades: generateHSLShades(primary)
        };
    } catch (error) {
        console.error('Error loading color preferences:', error);
        return {
            primary: DEFAULT_COLOR,
            secondary: DEFAULT_SECONDARY_COLOR,
            shades: generateHSLShades(DEFAULT_COLOR)
        };
    }
};

const initialState: ColorState = getInitialState();

export const ColorContext = createContext<ColorContextType>({
    state: initialState,
    dispatch: () => null,
});

const colorReducer = (state: ColorState, action: ColorAction) => {
    switch (action.type) {
        case "SET_PRIMARY_COLOR":
            return {
                ...state,
                primary: action.payload.primary,
                secondary: action.payload.secondary,
                shades: generateHSLShades(action.payload.primary),
            }
        default:
            return state
    }
}

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(colorReducer, initialState);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        localStorage.setItem('primary', JSON.stringify(state.primary));
        localStorage.setItem('secondary', JSON.stringify(state.secondary));

        Object.entries(state.shades).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--primary-${key}`, value);
        });

        document.documentElement.style.setProperty(`--primary`, state.shades[400]);
        document.documentElement.style.setProperty(
            `--secondary`,
            `${state.secondary.hue} ${state.secondary.saturation}% ${state.secondary.lightness}%`
        );
    }, [state.primary, state.shades]);

    return (
        <ColorContext.Provider value={{ state, dispatch }}>
            {children}
        </ColorContext.Provider>
    )
}

export const useColor = () => {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error("useColor must be used within a ColorProvider");
    }
    return context;
};