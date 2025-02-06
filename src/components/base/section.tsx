import * as React from "react";
import { cn } from "@/lib/utils";

type LayoutTypes = {
  id: string,
  className?: string,
  children: React.ReactNode,
  style?: object,
  title?: string | any,
}

const SectionsLayout: React.FC<LayoutTypes> = ({ children, className, id, title, ...props }) => {
  return (
    <section id={id} className={cn("px-2 md:px-5 pt-16", className)} {...props}>
      {title && <h1 className="px-2 md:px-5 py-10 text-4xl lg:text-5xl font-bold">{title}</h1>}

      {children}
    </section>
  )
}

export default SectionsLayout
