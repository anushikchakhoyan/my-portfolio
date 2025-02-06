import React, { SyntheticEvent } from "react"
import { useI18next } from 'gatsby-plugin-react-i18next';

export function LanguageSwitcher() {
    const { languages, changeLanguage } = useI18next();

    const changeLanguageHandler = ({ e, lng }: { e: SyntheticEvent, lng: string }) => {
        e.preventDefault();
        changeLanguage(lng);
    }

    return (
        <>
            {languages.map((lng) => (
                <button key={lng} onClick={(e) => changeLanguageHandler({ e, lng })}>
                    {lng}
                </button>
            ))}
        </>
    )
}
