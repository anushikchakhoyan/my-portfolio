import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SERVICES_CATEGORY } from "@lib/constants";
import { GeneralTextBlock } from "@base/";

import ServicesSection from "@features/services";
import WhyChooseUs from "@features/why-choose-us";
import Subscribe from "@features/subscribe";
import MainLayout from "@features/layout";
import Workflow from "@features/workflow";
import Benefits from "@features/benefits";
import Seo from "@features/seo";

const CollaborationPage: React.FC = () => {
  const { t } = useTranslation();
  const type = SERVICES_CATEGORY.collaboration;

  return (
    <MainLayout>
      <GeneralTextBlock
        title={t("collaborationAndCommunication")}
        subtitle={t("workingTogether")}
        description={t("transparentAndEffectiveCollaboration")}
        descrptionClasses="px-4"
      />
      <ServicesSection type={type} />
      <Workflow type={type} />
      <Benefits type={type} />
      <WhyChooseUs />
      <Subscribe />
    </MainLayout>
  )
}

export const Head = () => <Seo title="Collaboration" />

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

export default CollaborationPage
