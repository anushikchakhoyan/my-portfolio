import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import ContactUs from "@features/contact-us";
import MainLayout from "@features/layout";
import Seo from "@features/seo";

const ContactUsPage: React.FC = () => (
  <MainLayout>
    <ContactUs />
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

export default ContactUsPage
