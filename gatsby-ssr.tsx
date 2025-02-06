/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
import React from "react";
import { ThemeProvider } from "./src/contexts/ThemeContext";

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
