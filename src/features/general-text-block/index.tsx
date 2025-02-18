import * as React from "react";

interface GeneralTextBlockProps {
    id?: string;
    title: string;
    subtitle: string;
    description: string;
}

const GeneralTextBlock: React.FC<GeneralTextBlockProps> = ({
    title, subtitle, description
}) => {

    return (
        <div className="flex-1 flex items-center justify-center py-20 md:py-8">
            <div className="w-full md:w-2/3 flex flex-col items-center gap-4 md:px-5">
                <h2 className="text-sm font-medium">{title}</h2>
                <p className="text-center text-2xl lg:text-4xl font-italiana whitespace-break-spaces">
                    {subtitle}
                </p>
                <p className="text-center text-sm max-w-lg whitespace-break-spaces">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default GeneralTextBlock;
