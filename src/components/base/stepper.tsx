import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ui/tooltip";

import { cn } from "@lib/utils";
import { Step } from "@lib/types";

interface StepCircleProps {
    step: Step;
    isActive: boolean;
    handleStepClick: () => void;
}

interface StepTitleProps {
    title: string;
    even: boolean;
    description: string;
}

interface VerticalConnectorProps {
    even: boolean;
    isActive: boolean;
    handleStepClick: () => void;
}

interface StepperProps {
    steps: Step[];
    className?: string,
}

const Stepper: React.FC<StepperProps> = ({ steps, className }) => {
    const [activeStep, setActiveStep] = useState(1);

    const onStepClick = (stepId: number) => {
        setActiveStep(stepId);
    };

    return (
        <TooltipProvider>
            <div className={cn(`w-full flex items-center md:h-96`, className)}>
                <div className="flex-col md:flex-row relative flex items-center justify-between w-full">
                    <StepperLine />
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex items-start md:flex-col md:items-center w-full">
                            <StepTitle
                                title={step.title}
                                even={index % 2 === 0}
                                description={step.description}
                            />
                            <VerticalConnectorLine
                                even={index % 2 === 0}
                                isActive={step.id <= activeStep}
                                handleStepClick={() => onStepClick(step.id)}
                            />
                            <StepCircle
                                step={step}
                                isActive={step.id <= activeStep}
                                handleStepClick={() => onStepClick(step.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </TooltipProvider>
    );
}
export default Stepper;

const StepCircle: React.FC<StepCircleProps> = (({ step, isActive, handleStepClick }) => {
    return (
        <Tooltip>
            <TooltipTrigger>
                <div
                    className={cn(
                        `w-8 h-8 flex items-center justify-center rounded-full border-2 ml-[1.1rem] md:ml-0
                        shadow-md text-sm font-bold cursor-pointer transition-all duration-300 relative z-10
                        hover:ring-2 hover:ring-pink-200 dark:hover:ring-pink-400/30`,
                        isActive
                            ? `bg-pink-500 text-zinc-50 border-pink-500 dark:border-pink-400 
                               shadow-lg scale-110 dark:bg-pink-500`
                            : `border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 
                               text-zinc-600 dark:text-zinc-300 hover:scale-105 hover:shadow-md
                               hover:bg-zinc-100 dark:hover:bg-zinc-700`
                    )}
                    onClick={handleStepClick}
                >
                    {step.id}
                </div>
            </TooltipTrigger>
            <TooltipContent
                side="top"
                className="text-xs w-56 text-center p-2 bg-zinc-50 dark:bg-zinc-900 
                          text-zinc-800 dark:text-zinc-100 rounded-md shadow-lg
                          border border-zinc-200 dark:border-zinc-700"
            >
                {step.description}
            </TooltipContent>
        </Tooltip>
    )
});
StepCircle.displayName = "StepCircle";

const StepTitle: React.FC<StepTitleProps> = (({ title, description, even }) => {
    return (
        <div className={cn(
            "md:absolute w-full text-start md:text-center transition-all order-3 ml-8 md:ml-0 mt-8 md:mt-0",
            even ? "md:-top-36 lg:-top-32 text-zinc-700 dark:text-zinc-300" : "top-24 text-zinc-600 dark:text-zinc-400"
        )}>
            <h2 className="text-sm lg:text-base font-medium">{title}</h2>
            <p className="text-xs lg:text-sm text-zinc-500 dark:text-zinc-500">{description}</p>
        </div>
    )
});
StepTitle.displayName = "StepTitle";


const VerticalConnectorLine: React.FC<VerticalConnectorProps> = (({ even, isActive, handleStepClick }) => {
    return (
        <div
            onClick={handleStepClick}
            className={cn(
                `md:absolute rounded-full w-0.5 transition-all order-2 -ml-4 mt-8 md:ml-0 md:mt-0
                 hover:opacity-80 cursor-pointer`,
                even ? "-top-14 h-12" : "top-9 h-12",
                isActive
                    ? 'bg-pink-400 dark:bg-pink-500'
                    : 'bg-zinc-200 dark:bg-zinc-700'
            )}
        />
    )
});
VerticalConnectorLine.displayName = "VerticalConnectorLine";

const StepperLine: React.FC<{}> = (() => {
    return (
        <div className="hidden md:block absolute rounded-full w-full h-2 bg-zinc-200 dark:bg-zinc-800 
                        top-1/2 left-0 -translate-y-1/2 z-0" />
    )
});
StepperLine.displayName = "StepperLine";
