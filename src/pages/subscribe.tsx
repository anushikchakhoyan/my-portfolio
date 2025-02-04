import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Subscribe from "@/features/subscribe";
import MainLayout from "@/features/layout";
import Seo from "@/features/seo";

const SubscribePage: React.FC = () => (
  <MainLayout>
    <Subscribe />
  </MainLayout>
)

export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("subscribe")} />
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

export default SubscribePage
