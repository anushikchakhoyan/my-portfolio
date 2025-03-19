import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { Link } from "@base/";
import MainLayout from "@features/layout";
import { Button } from "@ui/button";
import Seo from "@features/seo";

const NotFoundPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <MainLayout>
      <div id="main" className="h-[calc(100vh-455px)] flex flex-col items-center justify-center font-armenian">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-3xl font-medium text-zinc-800 dark:text-white leading-loose">{t('notFound')}</p>
        <Link to="/" className="pt-8">
          <Button size="lg" variant="outline">
            {t("backTo")}
          </Button>
        </Link>
      </div>
    </MainLayout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

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

export default NotFoundPage;
