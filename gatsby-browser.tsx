/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
import React from "react";

import "./src/styles/global.css";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import { ColorProvider } from "./src/contexts/ColorContext";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <ColorProvider>
                {element}
            </ColorProvider>
        </ThemeProvider>
    );
};

/**
 * This is a workaround solution I've used while the issue is addressed in Gatsby:
 *
 * See: https://github.com/gatsbyjs/gatsby/issues/38201
 */
export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
    window.history.scrollRestoration = 'manual';
    const currentPosition = getSavedScrollPosition(location, location.key);
    if (!currentPosition) {
        window.scrollTo(0, 0);
    } else {
        window.setTimeout(() => {
            window.requestAnimationFrame(() => {
                window.scrollTo(...currentPosition);
            });
        }, 0);
    }

    return false;
};