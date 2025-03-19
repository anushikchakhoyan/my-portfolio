import React from "react";

import Title from "./title";

type CoverSectionProps = {
    title: string,
    coverImage: string,
    children: React.ReactNode
}

const CoverSection: React.FC<CoverSectionProps> = ({ title, coverImage, children }) => {
    return (
        <div
            className="bg-cover bg-no-repeat bg-center bg-fixed h-screen flex flex-col items-center justify-center gap-10"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${coverImage})`,
            }}
        >
            <Title title={title} className="text-zinc-50 text-4xl md:text-5xl font-bold text-center font-italiana" />
            <div className="space-y-8 max-w-5xl w-full mx-auto p-6 bg-zinc-800/40 backdrop-blur-sm rounded-lg shadow-lg">
                {children}
            </div>
        </div>
    );
};

export default CoverSection;