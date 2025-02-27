import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import useNavigationData from "@hooks/custom/use-nav-data";
import { NavigationType } from "@lib/types";
import useIsMobile from "@hooks/custom/use-mobile";
import { cn } from "@lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@ui/navigation-menu";

const NavMenu: React.FC<{ toggle: boolean }> = ({ toggle }) => {
    const { t } = useTranslation();
    const isMobile = useIsMobile();
    const navigations = useNavigationData();

    return (
        <NavigationMenu
            className={cn(`max-w-full py-0`,
                isMobile && toggle && "p-4 absolute left-0 top-[60px] items-start w-full justify-start bg-white dark:bg-zinc-900",
                isMobile && !toggle && 'hidden lg:flex')}>
            <NavigationMenuList className={cn(`flex-row`, isMobile && toggle && "flex-col items-start")}>
                {navigations.map(({ title, items, intro }: NavigationType) => (
                    <NavigationMenuItem key={title}>
                        {toggle ? (
                            <ul>
                                {items.map((item) => (
                                    <ListItem
                                        key={item.title}
                                        title={item.title}
                                        href={item.url}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <>
                                <NavigationMenuTrigger className="dark:text-zinc-200">{title}</NavigationMenuTrigger>
                                <NavigationMenuContent className="dark:bg-zinc-800">
                                    <ul className="grid gap-1 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] dark:bg-zinc-800">
                                        {intro && (
                                            <li className="row-span-3">
                                                <NavigationMenuLink>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md 
                                                        bg-gray-100 dark:bg-zinc-700/30 p-6 no-underline outline-none 
                                                        focus:shadow-md dark:hover:bg-zinc-700/40 transition-colors"
                                                        href="/"
                                                    >
                                                        <span className="font-italiana dark:text-zinc-100">A N U S H</span>

                                                        <div className="mb-1 mt-4 text-base font-medium dark:text-zinc-300">
                                                            {intro.abbr}
                                                        </div>
                                                        <p className="text-xs leading-tight text-muted-foreground dark:text-zinc-400">
                                                            {intro.content}
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                        )}
                                        {items.map((item) => (
                                            <ListItem
                                                key={item.title}
                                                title={item.title}
                                                href={item.url}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
export default NavMenu;

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        `block select-none space-y-1 rounded-md p-3 leading-none no-underline 
                        outline-none transition-colors hover:bg-zinc-50 hover:text-zinc-900 
                        focus:bg-zinc-50 focus:text-zinc-900
                        dark:hover:bg-zinc-700/40 dark:hover:text-zinc-100 
                        dark:focus:bg-zinc-700/40 dark:focus:text-zinc-100`,
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none dark:text-zinc-200">{title}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground dark:text-zinc-400">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"