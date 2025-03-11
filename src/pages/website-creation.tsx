import * as React from "react";
import { graphql, Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SERVICES_CATEGORY } from "@lib/constants";

import { GeneralTextBlock, UnderlineText } from "@base/";

import WebsiteTypes from "@features/website-types";
import ServicesSection from "@features/services";
import Subscribe from "@features/subscribe";
import Workflow from "@features/workflow";
import MainLayout from "@features/layout";
import Benefits from "@features/benefits";
import Seo from "@features/seo";
import { Button } from "@ui/button";

const WebsiteCreationPage: React.FC = () => {
  const { t } = useTranslation();
  const type = SERVICES_CATEGORY.website;

  return (
    <MainLayout>
      <React.Suspense fallback={<div>Loading...</div>}>
        <GeneralTextBlock
          title={t("websiteWorkflow")}
          subtitle={t("buildYourDreamWebsite")}
          description={t("fromConceptToLaunch")}
          descrptionClasses="px-4"
        />
        <ServicesSection type={type} />
        <Workflow type={type} />
        <WebsiteTypes />

        <GeneralTextBlock
          title={t("priceProposal")}
          subtitle={t("websitePrice")}
          description={t("websitePriceDescription")}
        >
          <Link to="/contact-us">
            <Button size="lg">
              {t("contact")}
            </Button>
          </Link>
        </GeneralTextBlock>
        <Benefits type={type} />
        <Subscribe />
      </React.Suspense>
    </MainLayout>
  )
}

export const Head = () => <Seo title="website creation" />

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

export default WebsiteCreationPage
