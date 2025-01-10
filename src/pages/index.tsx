import React from "react";
import { graphql } from "gatsby";

import MainLayout from "@/features/layout";
import Hero from "@/features/hero";
import Seo from "@/features/seo";

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
       <Hero />
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
