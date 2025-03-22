import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { CoverSection } from "@base/";

import AboutWebSite from "./about-web-site";
import WhatWeDo from "./whatWeDo";
import Heading from "./heading";

import aboutCover from "@images/about/cover-1.jpg";
import Rates from "@features/rates";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading />
      <WhatWeDo />
      <CoverSection title={t("about")} coverImage={aboutCover}>
        <p className="text-sm md:text-base text-zinc-50 whitespace-break-spaces">{t('aboutDescription1')}</p>
        <p className="text-sm md:text-base text-zinc-50 whitespace-break-spaces">{t('aboutDescription2')}</p>
        <p
          dangerouslySetInnerHTML={{ __html: t('myFocusDescription') as string }}
          className="text-sm md:text-base text-zinc-50 whitespace-break-spaces" />
        <p
          dangerouslySetInnerHTML={{ __html: t('visionDescription') as string }}
          className="text-sm md:text-base text-zinc-50 whitespace-break-spaces" />
      </CoverSection>
      <Rates limit={[0, 3]} />
      <AboutWebSite />
      <Rates limit={[3, 5]} />
    </>
  )
}

export default About
