import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import useInfoData from "@hooks/custom/use-info-data";
import { SERVICES_CATEGORY } from "@lib/constants";
import { GeneralTextBlock } from "@base/";

import ServicesSection from "@features/services";
import InfoBlock from "@features/benefits/info";
import Subscribe from "@features/subscribe";
import MainLayout from "@features/layout";
import Workflow from "@features/workflow";
import Benefits from "@features/benefits";
import Seo from "@features/seo";

const MentorshipPage: React.FC = () => {
  const { t } = useTranslation();
  const type = SERVICES_CATEGORY.mentorship;

  return (
    <MainLayout>
      <GeneralTextBlock
        title={t("mentorshipWorkflow")}
        subtitle={t("guidedGrowth")}
        description={t("personalizedMentorshipJourney")}
        descrptionClasses="px-4"
      />
      <ServicesSection type={type} />
      <Workflow type={type} />
      <InfoBlock type={type} />
      <Benefits type={type} />
      {/* Տիգրանը, ավելի քան վեց տարվա փորձառությամբ full-stack ծրագրավորող լինելով, 
      հարուստ գործնական գիտելիքներ է բերում լսարան: Արմենը նվիրված է Front End-ի զարգացման 
      առաջխաղացմանը և հզորացնելու գործընկեր ծրագրավորողներին ամբողջ աշխարհում:  */}
      <Subscribe text={t('callToAction')} />
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
