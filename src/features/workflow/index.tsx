import * as React from "react";
import { SectionsLayout } from "@base/";
import { SERVICES_CATEGORY } from "@lib/constants";
import { BuildWebsite, Mentorship, Collaboration } from "./components";

type WorkflowType = keyof typeof workflowComponents;

const workflowComponents = {
    [SERVICES_CATEGORY.website]: <BuildWebsite />,
    [SERVICES_CATEGORY.mentorship]: <Mentorship />,
    [SERVICES_CATEGORY.collaboration]: <Collaboration />,
} as const;

const Workflow: React.FC<{ type: WorkflowType }> = ({ type }) => (
    <SectionsLayout id="workflow">
        {workflowComponents[type]}
    </SectionsLayout>
);

export default Workflow;