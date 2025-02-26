import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SERVICES_CATEGORY } from "@lib/constants";
import { GeneralTextBlock } from "@base/";

import ServicesSection from "@features/services";
import Subscribe from "@features/subscribe";
import MainLayout from "@features/layout";
import Workflow from "@features/workflow";
import Benefits from "@features/benefits";
import Seo from "@features/seo";

const MentorshipPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <GeneralTextBlock
        title={t("mentorshipWorkflow")}
        subtitle={t("guidedGrowth")}
        description={t("personalizedMentorshipJourney")}
        descrptionClasses="px-4"
      />
      <ServicesSection type={SERVICES_CATEGORY.mentorship} />
      <Workflow type={SERVICES_CATEGORY.mentorship} />
      <Benefits type={SERVICES_CATEGORY.mentorship} />
      {/* <WhyChooseUs /> */}
      <Subscribe />
    </MainLayout>
  )
}

export const Head = () => <Seo title="mentorship" />

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

export default MentorshipPage
