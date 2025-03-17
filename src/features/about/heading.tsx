import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { getImage } from "gatsby-plugin-image";

import useIsMobile from "@hooks/custom/use-mobile";
import { CircleThumb } from "@base/";


const Heading: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const data = useStaticQuery(graphql`
     query {
       me: file(relativePath: { eq: "about/me4.jpg" }) {
         childImageSharp {
           gatsbyImageData(layout: FULL_WIDTH)
         }
       },
      }
    `);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:h-96 w-full bg-[#202020]">
      <HeadingTitle>{t("itsMe")}</HeadingTitle>
      <CircleThumb
        className="relative md:top-24"
        size={isMobile ? "md" : "lg"}
        bgImage={getImage(data.me.childImageSharp.gatsbyImageData)} />
      <HeadingTitle>
        <p><code className="text-secondary">{"<Engineer />"}</code></p>
        <p><code className="text-secondary">{"<Thinker />"}</code></p>
      </HeadingTitle>
    </div>
  )
}

export default Heading;

const HeadingTitle: React.FC<{ children?: React.ReactNode }> = (({ children }) => {
  return (
    <h2 className="text-center text-xl md:text-4xl font-italiana whitespace-break-spaces
                tracking-wide py-10 md:py-20 text-secondary">
      {children}
    </h2>
  )
});
HeadingTitle.displayName = "HeadingTitle";
