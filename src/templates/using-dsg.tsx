import * as React from "react";
import { Link } from "gatsby";

import MainLayout from "@/features/layout";
import Seo from "@/features/seo";

const UsingDSG: React.FC = () => (
  <MainLayout>
    <h1>
      Hello from a <b>DSG Page</b>
    </h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </MainLayout>
)

export const Head: React.FC = () => <Seo title="Using DSG" />

export default UsingDSG
