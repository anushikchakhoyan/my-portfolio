import * as React from "react"
import { graphql } from "gatsby"

import About from "@/features/about";
import Hero from "@/features/hero";
import Seo from "@/features/seo";

const IndexPage: React.FC = () => {
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
