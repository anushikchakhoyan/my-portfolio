import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

import ServicesSection from "@/features/services";
import WhatIOffer from "@/features/what-i-offer";
import MainLayout from "@/features/layout";
import Seo from "@/features/seo";

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <ServicesSection />
      <WhatIOffer />
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
