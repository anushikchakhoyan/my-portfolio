import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { Link, UnderlineText, SectionsLayout } from "@base/";
import GeneralTextBlock from "@features/general-text-block";
import { Button } from "@ui/button";
import { cn } from "@lib/utils";

type ServiceTypes = {
  title: string;
  hint: string;
  description: string;
  contactMe: string;
  image: string;
};

const ServicesSection = () => {
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    query {
      mentor: file(relativePath: { eq: "mentor.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      websiteCreation: file(relativePath: { eq: "website.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      collab: file(relativePath: { eq: "collab.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const servicesData = [
    {
      title: t("websiteCreationTitle"),
      hint: t("websiteCreationHint"),
      description: t("websiteCreationDescription"),
      contactMe: t("websiteCreationContact"),
      image: getImage(data.websiteCreation.childImageSharp.gatsbyImageData),
    },
    {
      title: t("mentorshipTitle"),
      hint: t("mentorshipHint"),
      description: t("mentorshipDescription"),
      contactMe: t("mentorshipContact"),
      image: getImage(data.mentor.childImageSharp.gatsbyImageData),
    },
    {
      title: t("collabTitle"),
      hint: t("collabHint"),
      description: t("collabDescription"),
      contactMe: t("collabContact"),
      image: getImage(data.collab.childImageSharp.gatsbyImageData),
    },
  ];

  return (
    <SectionsLayout id="title">
      <GeneralTextBlock
        title={t("ourExpertise")}
        subtitle={t("transformYourVisionIntoReality")}
        description={t("fromStrategyToExecution")} />

      {servicesData.map(({ title, hint, description, contactMe, image }, index: number) => (
        <div
          key={title}
          className={cn("py-20 flex flex-col md:flex-row h-3/5", index % 2 === 0 && "md:flex-row-reverse")}
        >
          <div className="w-full md:w-1/2 px-4 md:px-5 flex items-start flex-col gap-8">
            <h2 className="text-4xl font-medium">{title}</h2>
            <UnderlineText text={hint} className="max-w-md" />
            <p>{description}</p>
            <Button
              asChild
              variant="outline"
              className="px-8 py-2"
            >
              <Link to="/contact-us" className="flex items-center gap-5">
                📩 {contactMe}
              </Link>
            </Button>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-5">
            {image && (
              <GatsbyImage
                image={image}
                alt={title}
                className="w-full h-full rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      ))}
    </SectionsLayout>
  );
};

export default ServicesSection;