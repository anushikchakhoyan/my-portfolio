import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import EssentialSkills from "@features/essential-skills";
import VisionMission from "@features/vision-mission";
import WhyChooseUs from "@features/why-choose-us";
import Subscribe from "@features/subscribe";
import MainLayout from "@features/layout";
import Skills from "@features/skills";
import About from "@features/about";
import Rates from "@features/rates";
import Seo from "@features/seo";

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <About />
      <Rates limit={[0, 3]} />
      <VisionMission />
      <Skills />
      <EssentialSkills />
      {/* <Experiences /> */}
      <WhyChooseUs />
      <Rates limit={[3, 5]} />

      {/* <h1>{t('efficientAndTransparentProcesses')}</h1>
      <div className="flex justify-center">
        <p className="w-full md:w-3/4 p-4 md:p-5"
          dangerouslySetInnerHTML={{ __html: t('visionDescription') as string }} />
      </div>
      <div className="flex justify-end">
        <p className="w-full md:w-1/2 p-4 md:p-5">
          {t('myFocusDescription')}
        </p>
      </div> */}
      <Subscribe />
    </MainLayout>
  )
}

export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("about")} />
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

export default AboutPage
