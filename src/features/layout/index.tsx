import * as React from "react";

import Header from "@features/layout/header";
import Footer from "./footer";

type LayoutTypes = {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<LayoutTypes> = ({ className, children }) => {
  return (
    <main className={className}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
