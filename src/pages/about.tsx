import * as React from "react";
import { graphql } from "gatsby";

import MainLayout from "@/features/layout";
import Workflow from "@/features/workflow";
import Content from "@/features/content";
import About from "@/features/about";
import Seo from "@/features/seo";

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <About />
      <Workflow />
      {/* <Content /> */}
    </MainLayout>
  )
}

export const Head = () => <Seo title="about" />

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
