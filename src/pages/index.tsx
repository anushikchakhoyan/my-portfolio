import React from "react";
import { graphql } from "gatsby";

import InteractiveCanvas from "@/components/base/interactive-canvas";
import MainLayout from "@/features/layout";
import Home from "@/features/home";
import Seo from "@/features/seo";

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <InteractiveCanvas/>
      <Home />
    </MainLayout>
  )
}

export const Head: React.FC = () => <Seo title="Home" />

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

export default IndexPage
