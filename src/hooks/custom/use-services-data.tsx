import { getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { Service, ServiceType } from "@lib/types";
import { SERVICES_CATEGORY } from "@lib/constants";

export default function useServicesData(type: Service) {
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    query {
      mentor: file(relativePath: { eq: "services/mentor.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      websiteCreation: file(relativePath: { eq: "services/website.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      collab: file(relativePath: { eq: "services/collab.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const servicesData: Record<Service, ServiceType> = {
    [SERVICES_CATEGORY.website]: {
      id: 1,
      title: t("websiteCreationTitle"),
      hint: t("websiteCreationHint"),
      description: t("websiteCreationDescription"),
      contactMe: t("websiteCreationContact"),
      image: getImage(data.websiteCreation.childImageSharp.gatsbyImageData),
    },
    [SERVICES_CATEGORY.mentorship]: {
      id: 2,
      title: t("mentorshipTitle"),
      hint: t("mentorshipHint"),
      description: t("mentorshipDescription"),
      contactMe: t("mentorshipContact"),
      image: getImage(data.collab.childImageSharp.gatsbyImageData),
    },
    [SERVICES_CATEGORY.collaboration]: {
      id: 3,
      title: t("collabTitle"),
      hint: t("collabHint"),
      description: t("collabDescription"),
      contactMe: t("collabContact"),
      image: getImage(data.mentor.childImageSharp.gatsbyImageData),
    },
  }

  return servicesData[type];
};
