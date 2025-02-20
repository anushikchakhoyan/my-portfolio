import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import { UnderlineText, SectionsLayout } from "@base/";
import SocialMedia from "@features/social-media";
import ContactForm from "./form";

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
    <SectionsLayout id="contact" title={""} className="space-y-10">
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
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <ContactTitle />
        <div className="w-full flex flex-col-reverse md:flex-row items-start justify-center gap-10">
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
    <div className="w-full md:w-1/3 flex flex-col gap-6 lg:px-20">
      <div>
        <p className="text-base uppercase text-gray-900 dark:text-white font-medium">{t("email")}</p>
        <p className="text-base text-gray-600 dark:text-gray-300 font-light">
          anush.chakhoyan.work@gmail.com
        </p>
      </div>
      <div>
        <p className="text-base uppercase text-gray-900 dark:text-white font-medium">{t("phone")}</p>
        <p className="text-base text-gray-600 dark:text-gray-300 font-light">094 00 00 00</p>
      </div>
      <div>
        <p className="text-base uppercase text-gray-900 dark:text-white font-medium">
          {t("social")}
        </p>
        <SocialMedia iconSize="text-base" className="gap-4" />
      </div>
    </div>
  )
});
ContactInfo.displayName = "ContactInfo";

const ContactTitle: React.FC<{}> = (() => {
  const { t } = useTranslation();

  return (
    <>
      <h5 className="max-w-sm text-sm font-medium text-center space-x-1">
        <span>{t("haveQuestions")}</span>
        <Link to="/faq">
          <UnderlineText
            text={`${t("here")}!`}
            className="inline-block text-sm text-pink-700"
          />
        </Link>
      </h5>
      <h3 className="text-3xl font-italiana max-w-xl text-center">
        {t("haveSomethingShare")} {t("contactDescription")}
        <span className="block text-base py-5 font-medium">
          {t("getBackToYouSoon")}
        </span>
      </h3>
    </>
  )
});
ContactTitle.displayName = "ContactTitle";
