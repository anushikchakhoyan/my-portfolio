import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SERVICES_CATEGORY } from "@lib/constants";

import { SectionsLayout, GeneralTextBlock } from "@base/";
import WhyChooseUs from "@features/why-choose-us";
import ServicesSection from "@features/services";
import Subscribe from "@features/subscribe";
import MainLayout from "@features/layout";
import Workflow from "@features/workflow";
import Seo from "@features/seo";

const MentorshipPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <SectionsLayout id={SERVICES_CATEGORY.mentorship}>
        <GeneralTextBlock
          title={t("mentorshipWorkflow")}
          subtitle={t("guidedGrowth")}
          description={t("personalizedMentorshipJourney")}
        />
        <ServicesSection type={SERVICES_CATEGORY.mentorship} />
        <Workflow type={SERVICES_CATEGORY.mentorship} />
        <WhyChooseUs />
        <Subscribe />
      </SectionsLayout>
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
