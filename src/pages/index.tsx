import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Header from "@features/header";
import Home from "@features/home";
import Seo from "@features/seo";

const IndexPage: React.FC = () => {
  return (
    <main>
      <Header />
      <Home />
    </main>
  )
}

export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("Im")} />
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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

export default IndexPage
