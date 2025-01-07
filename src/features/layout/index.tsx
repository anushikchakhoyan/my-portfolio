import * as React from "react"
import Header from "@/features/layout/header"

type LayoutProps = {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      {/*<Footer />*/}
    </main>
  )
}

export default MainLayout
