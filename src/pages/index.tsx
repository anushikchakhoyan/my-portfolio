import * as React from "react"
import { graphql } from "gatsby"
import {useTranslation} from 'gatsby-plugin-react-i18next';

import About from "@/components/about"
import Hero from "@/components/hero"
import Seo from "@/components/seo"

const IndexPage: React.FC = () => {
  const {t} = useTranslation();

  return (
    <div className="overflow-y-scroll h-screen" style={{ scrollSnapType: 'y mandatory' }}>
      <Hero />
      <About/>
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head: React.FC = () => <Seo title="Home" />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default IndexPage
