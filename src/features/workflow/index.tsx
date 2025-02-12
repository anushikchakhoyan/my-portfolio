import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import GeneralTextBlock from "@features/general-text-block";
import { SectionsLayout, Stepper } from "@base/";
import Subscribe from "@features/subscribe";
import { Step } from "@lib/types";

interface StepperProps {
    title: string;
    subtitle: string;
    steps: Step[];
}

const Workflow = () => {
    const { t } = useTranslation();

    const generateSteps = (stepKeys: string[]) => {
        return stepKeys.map((key, index) => ({
            id: index + 1,
            title: t(`${key}`),
            description: t(`${key}Desc`),
        }));
    };

    const buildingWebsiteSteps = generateSteps([
        "discoveryConsultation",
        "planningStrategy",
        "designDevelopment",
        "testingFeedback",
        "launchSupport",
    ]);

    const mentorshipProcessSteps = generateSteps([
        "initialMeeting",
        "personalizedLearningPlan",
        "guidedPractice",
        "progressReview",
        "careerGuidanceFinalEvaluation",
    ]);

    return (
        <SectionsLayout id="workflow">
            <GeneralTextBlock
                title={t("ourExpertise")}
                subtitle={t("transformYourVisionIntoReality")}
                description={t("fromStrategyToExecution")} />

            <WorkflowSection
                title={t('workingWithClient')}
                subtitle={t('buildingWebsite')}
                steps={buildingWebsiteSteps}
            />
            <WorkflowSection
                title={t('mentorshipProcess')}
                subtitle={t('---')}
                steps={mentorshipProcessSteps}
            />
            <Subscribe />
        </SectionsLayout>
    )
}

export default Workflow;

const WorkflowSection: React.FC<StepperProps> = ({ title, subtitle, steps }) => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-medium font-italiana">{title}</h1>
            <span className="text-base">{subtitle}</span>
            <Stepper steps={steps} />
        </div>
    )
};
WorkflowSection.displayName = "WorkflowSection";
