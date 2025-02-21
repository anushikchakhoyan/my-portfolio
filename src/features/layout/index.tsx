import * as React from "react";
import { Toaster } from "@ui/toaster";

import Header from "../header";
import Footer from "../footer";

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
