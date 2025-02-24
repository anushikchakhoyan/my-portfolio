import * as React from "react";
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { CircleThumb, SectionsLayout } from "@base/";
import useIsMobile from "@hooks/custom/use-mobile";

const About: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "about/me1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <SectionsLayout id="about" className="flex flex-col transition-colors duration-300">
      <div className="flex-1 w-full gap-6 flex flex-col md:flex-row items-center justify-center
       bg-zinc-700 dark:bg-zinc-800 py-6 md:p-10">
        <CircleThumb
          className="static"
          size={isMobile ? "sm" : "md"}
          bgImage={getImage(data.me.childImageSharp.gatsbyImageData)} />

        <div className="space-y-4 text-center">
          <h2 className="text-center text-3xl md:text-5xl xl:text-6xl font-italiana 
           text-gray-100 dark:text-pink-50 tracking-wide whitespace-break-spaces">
            {t("itsMe")}
          </h2>
          <p className="text-sm md:text-base text-gray-400 dark:text-gray-300 whitespace-break-spaces">{t('description1')}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full md:w-1/2 lg:w-2/4 flex flex-col items-center gap-6">
          <span className="text-xs font-semibold text-pink-500 dark:text-pink-400 uppercase tracking-widest">
            {t("welcome")}
          </span>

          <div className="relative group">
            <div className="absolute inset-0 bg-pink-100/30 dark:bg-pink-600/20 transform 
            -skew-y-2 scale-105 group-hover:scale-110 transition-all duration-300" />
            <p
              className="relative text-center text-2xl lg:text-3xl xl:text-4xl font-italiana 
              text-gray-800 dark:text-gray-100 leading-snug px-6 py-4">{t('whereSimplicityIsKey')}</p>
          </div>

          <p className="text-center text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            {t("aboutPurposeOfWork")}
          </p>
        </div>
      </div>
    </SectionsLayout>
  )
}

export default About
