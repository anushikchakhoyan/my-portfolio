import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import SectionsLayout from "@/features/layout/section";

const About: React.FC = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      file(relativePath: { eq: "image.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 2000)
        }
      }
    }
  `)

  const image = getImage(data.file.childImageSharp.gatsbyImageData) as IGatsbyImageData;

  return (
    <SectionsLayout id="about" className="items-center justify-start w-screen relative px-0">
      <div className="w-2/5 h-full">
        <GatsbyImage image={image} className="hero-img h-full" alt={t("itsMe")} />
      </div>
      <div className="pl-8 flex-1">
        <h1 className="text-9xl font-lighter font-josefinSans">
          {t("hello")}
        </h1>
        <span className="px-3 text-lg font-medium font-josefinSans">⎯ {t('itsMe')}</span>
        <p className="px-3 py-6 w-5/6 font-josefinSans">{t("description")}</p>
      </div>
    </SectionsLayout>
  )
}

export default About
