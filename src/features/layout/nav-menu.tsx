import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import useIsMobile from "@hooks/use-mobile";
import { cn } from "@lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@ui/navigation-menu";

type IntroType = {
    content: string;
    abbr: string;
};

type NavigationTypes = {
    title: string,
    intro?: IntroType,
    items: {
        title: string;
        url: string;
        description: string;
    }[]
}

export function NavMenu({ toggle }: { toggle: boolean }) {
    const { t } = useTranslation();
    const isMobile = useIsMobile();

    const navigations: NavigationTypes[] = [
        {
            title: t("general"),
            intro: {
                abbr: 'frontend/dev',
                content: t('pixelPerfectInterfaces')
            },
            items: [
                {
                    title: t("about"),
                    url: "/about",
                    description: t("discoverMyJourney")
                },
                {
                    title: t("faq"),
                    url: "/faq",
                    description: t("getInsightsMyWork")
                },
            ],
        },
        {
            title: t("explore"),
            intro: {
                abbr: "process/steps",
                content: t("understandMyProcess"),
            },
            items: [
                {
                    title: t("workflows"),
                    url: "/workflows",
                    description: t("websiteAndMentorship"),
                },
                {
                    title: t("whatIOffer"),
                    url: "/services",
                    description: t("discoverTheServices")
                },
                {
                    title: t("pricing"),
                    url: "/pricing",
                    description: t("exploreMyPricing")
                },
            ],
        },
        {
            title: t("connect"),
            intro: {
                content: t('makeLearningInteractive'),
                abbr: 'web/guide'
            },
            items: [
                {
                    title: t("contact"),
                    url: "/contact-us",
                    description: t("getInTouchForCollaborations")
                },
                {
                    title: t("blog"),
                    url: "/blog",
                    description: t("readInsightsAndArticles")
                },
            ],
        },
    ];

    return (
        <NavigationMenu
            className={cn(`max-w-full py-0`,
                isMobile && toggle && "p-4 absolute left-0 top-[60px] items-start w-full justify-start bg-white dark:bg-gray-800",
                isMobile && !toggle && 'hidden lg:flex')}>
            <NavigationMenuList className={cn(`flex-row`, isMobile && toggle && "flex-col items-start")}>
                {navigations.map(({ title, items, intro }: NavigationTypes) => (
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
                                <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-1 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        {intro && (
                                            <li className="row-span-3">
                                                <NavigationMenuLink>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md 
                                                        bg-gray-100 dark:bg-pink-400/20 p-6 no-underline outline-none focus:shadow-md"
                                                        href="/"
                                                    >
                                                        <span className="font-italiana">A N U S H</span>

                                                        <div className="mb-1 mt-4 text-base font-medium">
                                                            {intro.abbr}
                                                        </div>
                                                        <p className="text-xs leading-tight text-muted-foreground">
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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
