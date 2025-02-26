import { Benefit, Service } from "@lib/types";
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { SERVICES_CATEGORY } from "@lib/constants";

export default function useBenefitsData(type: Service) {
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
        query {
          benefit1: file(relativePath: { eq: "benefit/benefit1.jpg" }) {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          benefit2: file(relativePath: { eq: "benefit/benefit2.jpg" }) {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          benefit3: file(relativePath: { eq: "benefit/benefit3.jpg" }) {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          benefit4: file(relativePath: { eq: "benefit/benefit4.jpg" }) {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          benefit5: file(relativePath: { eq: "benefit/benefit5.jpg" }) {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          benefit6: file(relativePath: { eq: "benefit/benefit6.jpg" }) {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
  `);

  const benefits: Record<Service, Benefit[]> = {
    [SERVICES_CATEGORY.website]: [
      {
        id: 1,
        title: t('onTimeDelivery'),
        desc: t('onTimeDeliveryDesc'),
        image: getImage(data.benefit1.childImageSharp.gatsbyImageData),
      },
      {
        id: 2,
        title: t('multifunctionalSolutions'),
        desc: t('multifunctionalSolutionsDesc'),
        image: getImage(data.benefit2.childImageSharp.gatsbyImageData),
      }
    ],
    [SERVICES_CATEGORY.mentorship]: [
      {
        id: 1,
        title: t('personalizedGuidance'),
        desc: t('personalizedGuidanceDesc'),
        image: getImage(data.benefit3.childImageSharp.gatsbyImageData),
      },
      {
        id: 2,
        title: t('availability'),
        desc: t('availabilityDesc'),
        image: getImage(data.benefit4.childImageSharp.gatsbyImageData),
      }
    ],
    [SERVICES_CATEGORY.collaboration]: [
      {
        id: 1,
        title: t('freelanceProjects'),
        desc: t('freelanceProjectsDesc'),
        image: getImage(data.benefit5.childImageSharp.gatsbyImageData),
      },
      {
        id: 2,
        title: t('openAnyIdea'),
        desc: t('openAnyIdeaDesc'),
        image: getImage(data.benefit6.childImageSharp.gatsbyImageData),
      }
    ]
  }

  return benefits[type];
};
