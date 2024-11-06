import * as React from "react";

import SectionsLayout from "@/components/layout/section";
import Seo from "@/components/seo";
import { useTranslation } from "gatsby-plugin-react-i18next"

const About: React.FC = () => {
  const {t } = useTranslation();

  return (
    <SectionsLayout className="justify-between items-center">
      <h1 className="text-9xl font-lighter font-josefinSans">{t('hello')}</h1>
      <p>Image</p>
    </SectionsLayout>
  )
  }

export const Head = () => <Seo title="about" />

export default About;
