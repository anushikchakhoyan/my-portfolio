import React, { useLayoutEffect, useState } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import useIsMobile from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/ui/navigation-menu";

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
            title: t("General"),
            intro: {
                abbr: 'frontend/dev',
                content: t('pixelPerfectInterfaces')
            },
            items: [
                {
                    title: t("About"),
                    url: "/about",
                    description: t("Learn more about my background. \nDiscover my journey and experience.")
                },
                {
                    title: t("FAQ"),
                    url: "/faq",
                    description: t("Find answers to common questions. \nGet insights into my work process.")
                },
            ],
        },
        {
            title: t("Explore"),
            items: [
                {
                    title: t("Portfolio"),
                    url: "/portfolio",
                    description: t("Browse my latest works and projects. \nSee my creative approach in action.")
                },
                {
                    title: t("Projects"),
                    url: "/projects",
                    description: t("Detailed case studies of my work. \nUnderstand the process behind each project.")
                },
                {
                    title: t("Testimonials"),
                    url: "/testimonials",
                    description: t("See what clients say about my work. \nRead real feedback from happy clients.")
                },
            ],
        },
        {
            title: t("Services"),
            items: [
                {
                    title: t("What I Offer"),
                    url: "/services",
                    description: t("Discover the services I provide. \nFind out how I can help your project.")
                },
                {
                    title: t("Pricing"),
                    url: "/pricing",
                    description: t("Explore my pricing and packages. \nChoose what fits your needs best.")
                },
            ],
        },
        {
            title: t("Connect"),
            intro: {
                content: t('makeLearningInteractive'),
                abbr: 'web/guide'
            },
            items: [
                {
                    title: t("Contact"),
                    url: "/contact-us",
                    description: t("Get in touch for inquiries and collaborations. \nLet's create something great together.")
                },
                {
                    title: t("Subscribe"),
                    url: "/subscribe",
                    description: t("Stay updated with my latest news. \nJoin my mailing list for exclusive content.")
                },
                {
                    title: t("Blog"),
                    url: "/blog",
                    description: t("Read insights and articles. \nGet inspired by my thoughts and experiences.")
                },
            ],
        },
    ];

    return (
        <NavigationMenu
            className={cn(`max-w-full py-0 top-0`,
                isMobile && toggle && "p-4 absolute left-0 top-[60px] items-start w-full justify-start",
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
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        {intro && (
                                            <li className="row-span-3">
                                                <NavigationMenuLink>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/"
                                                    >
                                                        LOGO
                                                        <div className="mb-2 mt-4 text-base font-medium">
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
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
