import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import { SectionsLayout, UnderlineText } from "@/base/";

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
    <SectionsLayout id="about" title={t('about')}>
      <div className="flex flex-col md:flex-row items-center justify-start gap-20">
        <div className="w-full md:w-1/2 px-4 md:px-5 flex items-start flex-col gap-5">
          <h2 className="text-4xl font-bold">{t("hello")}</h2>
          <span className="px-3 text-lg font-medium font-josefinSans">⎯ {t("itsMe")}</span>
          <UnderlineText text={t('innovativeIdeas')} className=" max-w-sm" />
          <p className="py-2">
            {t("description")}
          </p>
        </div>
        <div className="w-full md:w-1/4 px-4 md:px-5 flex items-center justify-center">
          <ul className="mx-auto w-full bg-gray-100 rounded p-10">
            {/*<GatsbyImage image={image} className="hero-img h-full" alt={t("itsMe")} />*/}
          </ul>
        </div>
      </div>
    </SectionsLayout>
  )
}

export default About
