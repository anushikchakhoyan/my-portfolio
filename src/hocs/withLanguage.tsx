import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

import { LANGUAGE } from "@lib/constants";
import { Language } from "@lib/types";

type LanguageProps = {
    language: Language | string;
    toggleLanguage: () => void;
};

const withLanguage = <P extends object>(
    Component: React.ComponentType<P & LanguageProps>
) => {
    return function WrappedComponent(props: P) {
        const { language, changeLanguage } = useI18next();

        const updateBodyFont = (newLanguage: Language | string) => {
            document.body.classList.remove("font-josefinSans", "font-armenian");

            if (newLanguage === LANGUAGE.en) {
                document.body.classList.add("font-josefinSans"); // English font
            } else {
                document.body.classList.add("font-armenian"); // Armenian font
            }
        };

        const toggleLanguage = () => {
            const newLanguage = language === LANGUAGE.en ? LANGUAGE.hy : LANGUAGE.en;
            changeLanguage(newLanguage);
            updateBodyFont(newLanguage);
        };

        updateBodyFont(language);

        return <Component {...props} language={language} toggleLanguage={toggleLanguage} />;
    };
};

export default withLanguage;
