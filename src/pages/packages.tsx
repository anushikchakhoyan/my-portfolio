import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import MainLayout from "@features/layout";
import Packages from "@features/packages";
import Seo from "@features/seo";

const PackagesPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Packages />
    </MainLayout>
  )
}

export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("packages")} />
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

export default PackagesPage;
