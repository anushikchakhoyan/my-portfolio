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
            <div className={cn(`w-full flex items-center lg:h-96`, className)}>
                <div className="gap-5 xl:gap-0 flex-col xl:flex-row relative flex items-center justify-between w-full">
                    <StepperLine />
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex items-center xl:flex-col w-full">
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
                        `w-8 h-8 flex items-center justify-center rounded-full border-2 mx-[1.1rem] xl:mx-0
                        shadow-md text-sm font-bold cursor-pointer transition-all duration-300 relative z-10
                        hover:ring-2 hover:ring-primary-200 dark:hover:ring-primary-400/30`,
                        isActive
                            ? `bg-primary text-zinc-50 border-primary dark:border-primary-400 
                               shadow-lg scale-110`
                            : `border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 
                               text-zinc-600 dark:text-zinc-300 hover:scale-105 hover:shadow-md
                               hover:bg-zinc-50 dark:hover:bg-zinc-700`
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
            "xl:absolute w-full text-start xl:text-center transition-all order-3",
            even
                ? "-top-32 text-zinc-700 dark:text-zinc-300"
                : "top-24 text-zinc-600 dark:text-zinc-400"
        )}>
            <h2 className="text-base font-medium">{title}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">{description}</p>
        </div>
    )
});
StepTitle.displayName = "StepTitle";


const VerticalConnectorLine: React.FC<VerticalConnectorProps> = (({ even, isActive, handleStepClick }) => {
    return (
        <div
            onClick={handleStepClick}
            className={cn(
                `hidden xl:block absolute rounded-full w-0.5 transition-all order-2
                 hover:opacity-80 cursor-pointer`,
                even ? "-top-14 h-12" : "top-9 h-12",
                isActive
                    ? 'bg-primary-400 dark:bg-primary'
                    : 'bg-zinc-200 dark:bg-zinc-700'
            )}
        />
    )
});
VerticalConnectorLine.displayName = "VerticalConnectorLine";

const StepperLine: React.FC<{}> = (() => {
    return (
        <div className="hidden xl:block absolute rounded-full w-full h-2 bg-zinc-200 dark:bg-zinc-800 
                        top-1/2 left-0 -translate-y-1/2 z-0" />
    )
});
StepperLine.displayName = "StepperLine";
