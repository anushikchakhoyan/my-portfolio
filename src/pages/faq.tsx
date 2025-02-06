import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import MainLayout from "@/features/layout";
import FaqList from "@/features/faq-list";
import Seo from "@/features/seo";

const FaqPage: React.FC = () => (
  <MainLayout>
    <FaqList />
  </MainLayout>
)

export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("contact")} />
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

export default FaqPage;
