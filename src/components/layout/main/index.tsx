import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Footer from "@/components/layout/main/footer";
import Header from "@/components/layout/main/header";

import "../../index.module.css";

type LayoutProps = {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main className="bg-neutral-400">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        {children}
      <Footer />
    </main>
  )
}

export default MainLayout;
