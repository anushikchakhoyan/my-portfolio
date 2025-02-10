import React, { Dispatch, SetStateAction, useState } from "react";
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
                        shadow-md text-sm font-bold cursor-pointer transition-all duration-300 relative z-10`,
                        isActive
                            ?
                            `bg-white dark:bg-pink-50 text-white shadow-lg scale-110
                              border-pink-300 dark:border-pink-500`
                            :
                            `border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 
                              text-gray-600 dark:text-gray-300 hover:scale-105 hover:shadow-md`
                    )}
                    onClick={handleStepClick}
                />
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs w-56 text-center p-2 bg-gray-800 text-white rounded-md shadow-lg">
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
            even ? "md:-top-36 lg:-top-32 text-gray-700 dark:text-gray-300" : "top-24 text-gray-700 dark:text-gray-300"
        )}>
            <h2 className="text-sm lg:text-base font-medium">{title}</h2>
            <p className="text-xs lg:text-sm">{description}</p>
        </div>
    )
});
StepTitle.displayName = "StepTitle";


const VerticalConnectorLine: React.FC<VerticalConnectorProps> = (({ even, isActive, handleStepClick }) => {
    return (
        <div
            onClick={handleStepClick}
            className={cn(
                "md:absolute rounded-full w-0.5 transition-all order-2 -ml-4 mt-8 md:ml-0 md:mt-0",
                even ? "-top-14 h-12" : "top-9 h-12",
                isActive ? 'bg-pink-300 dark:bg-pink-500' : 'bg-gray-300 dark:bg-gray-500'
            )} />
    )
});
VerticalConnectorLine.displayName = "VerticalConnectorLine";

const StepperLine: React.FC<{}> = (() => {
    return (
        <div
            className="hidden md:block absolute rounded-full w-full h-2 bg-gray-200 dark:bg-gray-500 top-1/2 left-0 -translate-y-1/2 z-0" />
    )
});
StepperLine.displayName = "StepperLine";
