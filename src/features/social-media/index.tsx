import React from "react";
import { cn } from "@lib/utils";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoMedium } from "react-icons/bi";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ui/tooltip";

import { FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, MEDIUM_URL } from "@lib/constants";
import { Link } from "@base/";

const socialLinks = [
    { url: FACEBOOK_URL, Icon: FaFacebook, name: "Facebook" },
    { url: LINKEDIN_URL, Icon: FaLinkedin, name: "LinkedIn" },
    { url: GITHUB_URL, Icon: IoLogoGithub, name: "GitHub" },
    { url: INSTAGRAM_URL, Icon: FaInstagram, name: "Instagram" },
    { url: MEDIUM_URL, Icon: BiLogoMedium, name: "Medium" }
];

type SocialMediaType = {
    iconSize?: string,
    className?: string,
}

const SocialMedia: React.FC<SocialMediaType> = ({ iconSize, className }) => {
    const { t } = useTranslation();

    return (
        <TooltipProvider>
            <div className={cn("flex align-baseline gap-5 py-1", className)}>
                {socialLinks.map(({ url, Icon, name }) => (
                    <Tooltip key={url}>
                        <TooltipTrigger asChild>
                            <Link to={url}>
                                <Icon
                                    className={cn("text-2xl text-zinc-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400", iconSize)} />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default SocialMedia;
