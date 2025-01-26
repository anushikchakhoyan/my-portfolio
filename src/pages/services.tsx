import * as React from "react"
import { graphql } from "gatsby";

import MainLayout from "@/features/layout";
import Content from "@/features/content";
import Seo from "@/features/seo";

const ServicesPage: React.FC = () => {
  return (
    <MainLayout>
      <Content />
    </MainLayout>
  )
}

export const Head = () => <Seo title="services" />

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
`

export default ServicesPage
