import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SectionsLayout, GeneralTextBlock } from "@base/";

const WhyChooseUs: React.FC = () => {
    const { t } = useTranslation();

    return (
        <SectionsLayout id="title">
            <GeneralTextBlock
                title={t("ourProcess")}
                subtitle={t("streamlinedWorkflows")}
                description={t("efficientAndTransparentProcesses")}
            />
            <div className="flex justify-center">
                <p className="w-full md:w-3/4 p-4 md:p-5"
                    dangerouslySetInnerHTML={{ __html: t('visionDescription') as string }} />
            </div>
            <div className="flex justify-end">
                <p className="w-full md:w-1/2 p-4 md:p-5">
                    {t('myFocusDescription')}
                </p>
            </div>
        </SectionsLayout>
    )
}

export default WhyChooseUs;
