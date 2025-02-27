import React, { createContext, useContext, useEffect, useReducer } from 'react';

type ColorStateType = {
    primaryColor: string;
};

type ColorActionType = {
    type: 'SET_PRIMARY_COLOR';
    payload: string;
}

type ColorContextType = {
    state: ColorStateType,
    dispatch: React.Dispatch<ColorActionType>
}

const initialState = {
    primaryColor: localStorage.getItem("primaryColor") || "334.65 27.84% 50%",
}

export const ColorContext = createContext<ColorContextType>({
    state: initialState,
    dispatch: () => null,
});

const colorReducer = (state: ColorStateType, action: ColorActionType) => {
    switch (action.type) {
        case "SET_PRIMARY_COLOR":
            return {
                ...state,
                primaryColor: action.payload
            }
        default:
            return state
    }
}

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(colorReducer, initialState);

    useEffect(() => {
        localStorage.setItem("primaryColor", state.primaryColor);
        document.documentElement.style.setProperty("--primary", state.primaryColor)
    }, [state.primaryColor]);

    return (
        <ColorContext.Provider value={{ state, dispatch }}>
            {children}
        </ColorContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error("useTheme must be used within a ColorProvider");
    }
    return context;
};