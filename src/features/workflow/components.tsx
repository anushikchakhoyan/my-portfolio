import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { generateSteps } from "@lib/utils";
import { Step } from "@lib/types";
import { Stepper } from "@base/";

interface WorkflowProps {
    title: string;
    subtitle: string;
    steps: Step[];
}

interface WorkflowComponentProps {
    titleKey: string;
    subtitleKey: string;
    stepKeys: string[];
}

// factory function
const createWorkflowComponent = ({ titleKey, subtitleKey, stepKeys }: WorkflowComponentProps): React.FC => {
    return () => {
        const { t } = useTranslation();
        const steps = React.useMemo(() => generateSteps(stepKeys), [stepKeys, t]);

        return (
            <WorkflowSection
                title={t(titleKey)}
                subtitle={t(subtitleKey)}
                steps={steps}
            />
        );
    };
};

const WorkflowSection: React.FC<WorkflowProps> = ({ title, subtitle, steps }) => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-medium font-italiana">{title}</h1>
            <span className="text-base">{subtitle}</span>
            <Stepper steps={steps} />
        </div>
    )
};
WorkflowSection.displayName = "WorkflowSection";


const BuildWebsite = createWorkflowComponent({
    titleKey: "workingWithClient",
    subtitleKey: "buildingWebsite",
    stepKeys: [
        "discoveryConsultation",
        "planningStrategy",
        "designDevelopment",
        "testingFeedback",
        "launchSupport",
    ],
});
BuildWebsite.displayName = "BuildWebsite";

const Mentorship = createWorkflowComponent({
    titleKey: "mentorshipSteps",
    subtitleKey: "guidingMentee",
    stepKeys: [
        "initialMeeting",
        "personalizedLearningPlan",
        "guidedPractice",
        "progressReview",
        "careerGuidanceFinalEvaluation",
    ],
});
Mentorship.displayName = "Mentorship";

const Collaboration = createWorkflowComponent({
    titleKey: "collaborationSteps",
    subtitleKey: "workingOnProject",
    stepKeys: [
        "projectDiscussion",
        "communicationSetup",
        "executionCoordination",
        "taskDistribution",
        "testing",
        "finalization",
    ],
});
Collaboration.displayName = "Collaboration";

export { BuildWebsite, Mentorship, Collaboration };