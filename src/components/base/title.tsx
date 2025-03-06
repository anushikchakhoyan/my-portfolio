import * as React from "react";
import { cn } from "@lib/utils";

type TitleProps = {
    title: string;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => (
    <h1 className={cn(
        `text-center tracking-wide whitespace-break-spaces text-3xl md:text-4xl font-italiana font-bold dark:text-zinc-100
         ${className}`
    )}>
        {title}
    </h1>
)

export default Title;