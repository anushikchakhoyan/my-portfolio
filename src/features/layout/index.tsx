import * as React from "react";
import SidebarNavigation from "@/features/layout/sidebar-navigation";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <main className={className}>
      <SidebarNavigation />
      {children}
    </main>
  )
}

export default MainLayout
