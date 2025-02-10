import * as React from "react";

import Header from "@features/layout/header";
import { Toaster } from "@ui/toaster";
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
      <Toaster />
    </main>
  )
}

export default MainLayout
