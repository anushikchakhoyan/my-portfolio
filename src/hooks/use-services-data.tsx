import { getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

interface ServiceTypes {
    title: string;
    hint: string;
    description: string;
    contactMe: string;
    image: ReturnType<typeof getImage>;
}

const useServicesData = (): ServiceTypes[] => {
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

    const servicesData: ServiceTypes[] = [
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

    return servicesData;
};

export default useServicesData;