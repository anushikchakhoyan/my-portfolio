import * as React from "react";

import Footer from "@/features/layout/main/footer";
import Header from "@/features/layout/main/header";

type LayoutProps = {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="bg-neutral-400">
      <Header />
        {children}
      <Footer />
    </main>
  )
}

export default MainLayout;
