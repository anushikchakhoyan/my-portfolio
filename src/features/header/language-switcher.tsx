import React from "react";

import withLanguage from "@hocs/withLanguage";
import { Button } from "@ui/button";
import { Language } from "@lib/types";
import { LANGUAGE } from "@lib/constants";

type Props = {
    language?: Language | string,
    toggleLanguage?: () => void;
};

const LanguageSwitcher = ({ language, toggleLanguage }: Props) => {
    return (
        <Button
            className={`h-5 w-5 p-0 rounded-full border-1 border-gray-300 bg-cover bg-center transition-all 
                duration-300 hover:border-gray-500 hover:scale-110 
                   ${language === LANGUAGE.hy
                    ? "bg-[url('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg')]"
                    : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg')]"
                }
                    `}
            onClick={toggleLanguage}
            aria-label="Switch Language"
        />
    )
}

export default withLanguage(LanguageSwitcher);
