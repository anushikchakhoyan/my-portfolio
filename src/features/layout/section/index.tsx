import * as React from "react";
import { cn } from "@/lib/utils"

type LayoutProps = {
  children: React.ReactNode;
  className: string;
  id: string;
}

const SectionsLayout: React.FC<LayoutProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={cn('h-dvh px-5 bg-gray-200 flex justify-center', className)}
    style={{scrollSnapAlign: 'start'}}>
      {children}
    </section>
  )
}

export default SectionsLayout;
