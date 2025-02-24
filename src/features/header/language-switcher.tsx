import React, { SyntheticEvent } from "react"
import { useI18next } from 'gatsby-plugin-react-i18next';

import { Button } from "@ui/button";

const LanguageSwitcher: React.FC = () => {
    const { language, changeLanguage } = useI18next();

    const changeLanguageHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        changeLanguage(language === "hy" ? "en" : "hy");
    };

    return (
        <Button
            className={`h-5 w-5 p-0 rounded-full border-1 border-gray-300 bg-cover bg-center transition-all 
                duration-300 hover:border-gray-500 hover:scale-110 
                ${language === "hy"
                    ? "bg-[url('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg')]"
                    : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg')]"
                }`}
            onClick={changeLanguageHandler}
            aria-label="Switch Language"
        />
    )
}

export default LanguageSwitcher;
