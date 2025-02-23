import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import GeneralTextBlock from "@features/general-text-block";
import { SectionsLayout, Stepper } from "@base/";
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

    const collaborationProcessSteps = generateSteps([
        "projectDiscussion",
        "communicationSetup",
        "executionCoordination",
        "taskDistribution",
        "testing",
        "finalization"
    ])

    return (
        <SectionsLayout id="workflow">
            <GeneralTextBlock
                title={t("ourProcess")}
                subtitle={t("streamlinedWorkflows")}
                description={t("efficientAndTransparentProcesses")}
            />

            <GeneralTextBlock
                title={t("websiteWorkflow")}
                subtitle={t("buildYourDreamWebsite")}
                description={t("fromConceptToLaunch")}
            />
            <WorkflowSection
                title={t('workingWithClient')}
                subtitle={t('buildingWebsite')}
                steps={buildingWebsiteSteps}
            />

            <GeneralTextBlock
                title={t("mentorshipWorkflow")}
                subtitle={t("guidedGrowth")}
                description={t("personalizedMentorshipJourney")}
            />
            <WorkflowSection
                title={t('mentorshipSteps')}
                subtitle={t('guidingMentee')}
                steps={mentorshipProcessSteps}
            />

            <GeneralTextBlock
                title={t("collaborationAndCommunication")}
                subtitle={t("workingTogether")}
                description={t("transparentAndEffectiveCollaboration")}
            />
            <WorkflowSection
                title={t('collaborationSteps')}
                subtitle={t('workingOnProject')}
                steps={collaborationProcessSteps}
            />
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
