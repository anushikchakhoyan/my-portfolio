import React from "react";

import withLanguage from "@hocs/withLanguage";
import { Button } from "@ui/button";
import { Language } from "@lib/types";
import { LANGUAGE } from "@lib/constants";
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";
import { cn } from "@lib/utils";
import { useTranslation } from "gatsby-plugin-react-i18next";

type Props = {
    language?: Language | string,
    toggleLanguage?: () => void;
};

const LanguageSwitcher = ({ language, toggleLanguage }: Props) => {
    const { t } = useTranslation();

    return (
        <Popover>
            <PopoverTrigger className="flex items-center">
                <Button
                    className={`h-6 w-6 p-0 rounded-full border-1 border-gray-300 bg-cover bg-center transition-all 
                                duration-300 hover:border-gray-500 hover:scale-110 
                   ${language === LANGUAGE.hy
                            ? "bg-[url('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg')]"
                            : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg')]"
                        }
                    `}
                />
            </PopoverTrigger>
            <PopoverContent className="max-w-xs !w-full p-0">
                <div
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 hover:bg-zinc-100 p-2 cursor-pointer">
                    <Button
                        className={`h-5 w-5 p-0 rounded-full bg-cover bg-center
                                    bg-[url('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg')]
                    `} />
                    <span>{t("english")}</span>
                </div>
                <div
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 hover:bg-zinc-100 p-2 cursor-pointer">
                    <Button
                        className={`h-5 w-5 p-0 rounded-full bg-cover bg-center
                                    bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg')]
                    `} />
                    <span>{t("armenian")}</span>
                </div>
            </PopoverContent>
        </Popover >
    )
}

export default withLanguage(LanguageSwitcher);
