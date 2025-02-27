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