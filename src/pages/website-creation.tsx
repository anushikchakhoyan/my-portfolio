import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SERVICES_CATEGORY } from "@lib/constants";

import { SectionsLayout, GeneralTextBlock } from "@base/";
import WhyChooseUs from "@features/why-choose-us";
import ServicesSection from "@features/services";
import Subscribe from "@features/subscribe";
import Workflow from "@features/workflow";
import MainLayout from "@features/layout";
import Seo from "@features/seo";

const WebsiteCreationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <SectionsLayout id={SERVICES_CATEGORY.website}>
        <GeneralTextBlock
          title={t("websiteWorkflow")}
          subtitle={t("buildYourDreamWebsite")}
          description={t("fromConceptToLaunch")}
        />
        <ServicesSection type={SERVICES_CATEGORY.website} />
        <Workflow type={SERVICES_CATEGORY.website} />
        <WhyChooseUs />
        <Subscribe />
      </SectionsLayout>
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
