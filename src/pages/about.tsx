import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Subscribe from "@features/subscribe";
import MainLayout from "@features/layout";
import Content from "@features/content";
import Skills from "@features/skills";
import About from "@features/about";
import Rates from "@features/rates";
import Seo from "@features/seo";

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <About />
      <Rates limit={[0, 3]} />
      <Skills />
      <Rates limit={[3, 5]} />
      <Content />
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
