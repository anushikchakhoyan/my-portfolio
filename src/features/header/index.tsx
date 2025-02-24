import React, { useState, useLayoutEffect, useEffect } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useTranslation } from "gatsby-plugin-react-i18next";

import LanguageSwitcher from "./language-switcher";
import ColorPicker from "@features/color-picker";
import ModeSwitcher from "./mode-switcher";
import useIsMobile from "@hooks/custom/use-mobile";
import NavMenu from "./nav-menu";
import { Button } from "@ui/button";
import { Link } from "@base/";

const Header: React.FC = () => {
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);
    const [color, setColor] = useState(
        localStorage.getItem('selectedColor') || 'pink'
    );

    const isMobile = useIsMobile();

    const toggleMenu = () => {
        setToggle((prev: boolean) => !prev);
    }

    useEffect(() => {
        localStorage.setItem('selectedColor', color);
        document.documentElement.style.setProperty(
            '--color-primary',
            color === 'pink' ? '#EC4899' : color === 'gold' ? '#A27B5C' : '#3B82F6'
        );
    }, [color]);


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
                    <ColorPicker onColorChange={setColor} />
                    <LanguageSwitcher />
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
