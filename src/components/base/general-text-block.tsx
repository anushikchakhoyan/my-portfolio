import * as React from "react";
import { cn } from "@lib/utils";

interface GeneralTextBlockProps {
    id?: string;
    title: string;
    subtitle: string;
    description: string;
    descrptionClasses?: string;
}

const GeneralTextBlock: React.FC<GeneralTextBlockProps> = ({
    title, subtitle, description, descrptionClasses
}) => {

    return (
        <div className="flex-1 flex items-center justify-center py-10 md:py-8">
            <div className="w-full md:w-2/3 flex flex-col items-center gap-4 md:px-5">
                <h2 className="text-sm font-medium">{title}</h2>
                <p className="text-center text-2xl lg:text-4xl font-italiana whitespace-break-spaces">
                    {subtitle}
                </p>
                <p className={cn(`text-center text-sm max-w-lg whitespace-break-spaces`, descrptionClasses)}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default GeneralTextBlock;
