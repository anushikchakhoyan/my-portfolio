import * as React from "react";
import { cn } from "@/lib/utils"

type LayoutProps = {
  children: React.ReactNode;
}

const SectionsLayout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <section className={cn('h-dvh px-5 bg-[#f8f8f8] flex justify-center', className)}
    style={{scrollSnapAlign: 'start'}}>
      {children}
    </section>
  )
}

export default SectionsLayout;
