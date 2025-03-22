import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import EssentialSkills from "@features/essential-skills";
import VisionMission from "@features/vision-mission";
import WhyChooseUs from "@features/why-choose-us";
import Subscribe from "@features/subscribe";
import MainLayout from "@features/layout";
import About from "@features/about";
import Rates from "@features/rates";
import Seo from "@features/seo";

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <About />
      <EssentialSkills />
      <WhyChooseUs />
      <VisionMission />
      {/* <Skills /> */}
      {/* <Experiences /> */}
      {/* <h1>{t('efficientAndTransparentProcesses')}</h1> */}
      <Subscribe />
    </MainLayout>
  )
}

export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("about")} />
}

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
`;

export default AboutPage
