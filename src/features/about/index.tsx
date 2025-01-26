import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import UnderlineText from "@/components/base/underline-text"
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
    <SectionsLayout id="about" className="px-10">
      <div className="flex items-center justify-start gap-20">
        <div className="w-1/2 px-5 flex items-start flex-col gap-5">
          <h1 className="text-5xl font-bold font-montserrat">{t("hello")}</h1>
          <span className="px-3 text-lg font-medium font-josefinSans">⎯ {t("itsMe")}</span>
          <UnderlineText text={t('innovativeIdeas')} className=" max-w-sm" />
          <p className="py-2 font-montserrat">
            {t("description")}
          </p>
        </div>
        <div className="w-1/4 flex items-center justify-center font-montserrat">
          <ul className="mx-auto w-full bg-gray-100 rounded p-10">
            {/*<GatsbyImage image={image} className="hero-img h-full" alt={t("itsMe")} />*/}
          </ul>
        </div>
      </div>
    </SectionsLayout>
  )
}

export default About
