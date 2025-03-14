import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import { UnderlineText, SectionsLayout } from "@base/";
import SocialMedia from "@features/social-media";
import ContactForm from "./form";
import { EMAIL, PHONE } from "@lib/constants";

const ContactUs: React.FC = () => {
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "contact-cover.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF, JPG]
            aspectRatio: 1.77
            width: 1200
          )
        }
      }
    }
  `);

  const coverImage = getImage(data.coverImage) as IGatsbyImageData;

  return (
    <SectionsLayout id="contact" className="space-y-10 !py-0">
      <div className="relative h-96 w-full flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/45 z-10 flex items-end justify-center">
          <h2 className="text-4xl text-white font-bold py-20 uppercase font-italiana">
            {t("getInTouch")}
          </h2>
        </div>
        <GatsbyImage
          image={coverImage}
          alt={t("itsMe")}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-10 w-full flex flex-col items-center justify-center gap-10 max-w-6xl mx-auto">
        <ContactTitle />
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </SectionsLayout>
  );
};

export default ContactUs;

const ContactInfo: React.FC<{}> = (() => {
  const { t } = useTranslation();

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-6 lg:px-4">
      <p className="text-base font-medium">
        {t("getBackToYouSoon")}
      </p>
      <div>
        <p className="text-base uppercase text-gray-900 dark:text-white font-medium">{t("email")}</p>
        <p className="text-base font-medium text-gray-600 dark:text-gray-300">
          {EMAIL}
        </p>
      </div>
      <div>
        <p className="text-base uppercase text-gray-900 dark:text-white font-medium">{t("phone")}</p>
        <p className="text-base font-medium text-gray-600 dark:text-gray-300">{PHONE}</p>
      </div>
      <div>
        <p className="text-base uppercase text-gray-900 dark:text-white font-medium">
          {t("social")}
        </p>
        <SocialMedia iconSize="text-lg" className="gap-4" />
      </div>
    </div>
  )
});
ContactInfo.displayName = "ContactInfo";

const ContactTitle: React.FC<{}> = (() => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="text-xl lg:text-3xl font-italiana max-w-4xl text-center">
        {t("contactDescription")}
      </h3>
      <h5 className="max-w-sm text-sm font-medium text-center space-x-1">
        <span>{t("haveQuestions")}</span>
        <Link to="/faq">
          <UnderlineText
            text={`${t("here")}!`}
            className="inline-block text-sm text-primary"
          />
        </Link>
      </h5>
    </>
  )
});
ContactTitle.displayName = "ContactTitle";
