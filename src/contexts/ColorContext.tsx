import { ColorShades, DEFAULT_COLOR, Hsl } from '@lib/types';
import { generateHSLShades } from '@lib/utils';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

type ColorState = {
    primary: Hsl;
    shades: ColorShades
};

type ColorAction = {
    type: 'SET_PRIMARY_COLOR';
    payload: Hsl
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
            shades: generateHSLShades(DEFAULT_COLOR)
        };
    }

    try {
        const savedColor = localStorage.getItem('primary');
        const primary = savedColor ? JSON.parse(savedColor) : DEFAULT_COLOR;

        return {
            primary,
            shades: generateHSLShades(primary)
        };
    } catch (error) {
        console.error('Error loading color preferences:', error);
        return {
            primary: DEFAULT_COLOR,
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
                primary: action.payload,
                shades: generateHSLShades(action.payload),
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

        Object.entries(state.shades).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--primary-${key}`, value);
        });

        document.documentElement.style.setProperty(`--primary`, state.shades[400]);
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