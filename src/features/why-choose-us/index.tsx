import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SectionsLayout, GeneralTextBlock } from "@base/";

const WhyChooseUs: React.FC = () => {
    const { t } = useTranslation();

    return (
        <SectionsLayout id="whyChooseUs">
            <GeneralTextBlock
                title={t("ourProcess")}
                subtitle={t("whyChooseUs")}
                description={t("whyChooseUsDesc")}
            />
        </SectionsLayout>
    )
}

export default WhyChooseUs;
