import * as React from "react";
import { Toaster } from "@ui/toaster";

import Header from "@features/header";
import Footer from "@features/footer";

type LayoutTypes = {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<LayoutTypes> = ({ className, children }) => {
  return (
    <main className={className}>
      <Header />
      <section className="pt-20">
        {children}
      </section>
      <Footer />
      <Toaster />
    </main>
  )
}

export default MainLayout
