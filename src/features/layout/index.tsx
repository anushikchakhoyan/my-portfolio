import * as React from "react";
import Header from "@/features/layout/header";
import InteractiveCanvas from "@/features/interactive-canvas";

type LayoutProps = {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <InteractiveCanvas/>
      <Header />
      {children}
    </main>
  )
}

export default MainLayout
