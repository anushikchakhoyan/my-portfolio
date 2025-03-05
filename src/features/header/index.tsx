import React, { useState, useLayoutEffect, useEffect } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { Button } from "@ui/button";
import { Link } from "@base/";

import useIsMobile from "@hooks/custom/use-mobile";
import ColorPicker from "@features/color-picker";

import LanguageSwitcher from "./language-switcher";
import ModeSwitcher from "./mode-switcher";
import NavMenu from "./nav-menu";

const Header: React.FC = () => {
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);

    const isMobile = useIsMobile();

    const toggleMenu = () => {
        setToggle((prev: boolean) => !prev);
    }

    useLayoutEffect(() => {
        if (!isMobile) {
            setToggle(false);
        }
    }, [isMobile]);

    return (
        <header className="fixed z-20 top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow">
            <div className="w-full max-w-8xl mx-auto px-4 py-3 flex justify-between lg:justify-center">
                <Link to="/" className="flex items-center font-bold text-xl xl:text-2xl font-italiana">
                    {t('im')}
                </Link>
                <NavMenu toggle={toggle} />
                <div className="flex items-center gap-1 md:gap-2">
                    <LanguageSwitcher />
                    <ColorPicker />
                    <ModeSwitcher />

                    {!isMobile && (
                        <Link to="/contact-us">
                            <Button variant="outline">
                                {t('getInTouch')}
                            </Button>
                        </Link>
                    )}
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={toggleMenu}
                        className="flex lg:hidden bg-white dark:bg-zinc-700 dark:text-white text-gray-800"
                    >
                        <HamburgerMenuIcon />
                    </Button>
                </div>
            </div>
        </header>
    )
}
export default Header;
