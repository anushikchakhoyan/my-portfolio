import React, { useState, useLayoutEffect, useEffect } from "react";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { LanguageSwitcher } from "./language-switcher";
import { useTheme } from "@/contexts/ThemeContext";
import useIsMobile from "@/hooks/use-mobile";
import { Button } from "@/ui/button";
import { NavMenu } from "./nav-menu";
import { Link } from "@/base/";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [toggle, setToggle] = useState(false);

    const isMobile = useIsMobile();
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => {
        setToggle((prev: boolean) => !prev);
    }

    useLayoutEffect(() => {
        if (!isMobile) {
            setToggle(false);
        }
    }, [isMobile]);

    return (
        <header className="fixed flex w-full top-0 font-josefinSans z-10 px-5 py-3 justify-between lg:justify-start">
            <Link to="/" className="flex items-center text-base md:text-lg font-josefinSans">
                {t('im')}
            </Link>
            <NavMenu toggle={toggle} />
            <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                <Button variant="ghost" className="hidden lg:block">
                    {t('chooseColorPallete')}
                </Button>
                <LanguageSwitcher />
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                >
                    {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                </Button>
                <Link to="/contact-us">
                    <Button>
                        {t('getInTouch')}
                    </Button>
                </Link>
                <Button variant="ghost" className="block lg:hidden" onClick={toggleMenu}>
                    <HamburgerMenuIcon />
                </Button>
            </div>
        </header>
    )
}
export default Header;
