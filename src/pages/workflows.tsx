import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import WhatIOffer from "@features/what-i-offer";
import Subscribe from "@features/subscribe";
import Workflow from "@features/workflow";
import MainLayout from "@features/layout";
import Seo from "@features/seo";

const WorkflowsPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Workflow />
      <WhatIOffer />
      <Subscribe />
    </MainLayout>
  )
}

export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("workflow")} />
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

export default WorkflowsPage;
