import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SERVICES_CATEGORY } from "@lib/constants";

import { GeneralTextBlock } from "@base/";
import ServicesSection from "@features/services";
import Subscribe from "@features/subscribe";
import Workflow from "@features/workflow";
import MainLayout from "@features/layout";
import Benefits from "@features/benefits";
import Seo from "@features/seo";

const WebsiteCreationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <React.Suspense fallback={<div>Loading...</div>}>
        <GeneralTextBlock
          title={t("websiteWorkflow")}
          subtitle={t("buildYourDreamWebsite")}
          description={t("fromConceptToLaunch")}
          descrptionClasses="px-4"
        />
        <ServicesSection type={SERVICES_CATEGORY.website} />
        <Workflow type={SERVICES_CATEGORY.website} />
        <Benefits type={SERVICES_CATEGORY.website} />
        {/* <WhyChooseUs /> */}
        <Subscribe />
      </React.Suspense>
    </MainLayout>
  )
}

export const Head = () => <Seo title="website creation" />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default WebsiteCreationPage
