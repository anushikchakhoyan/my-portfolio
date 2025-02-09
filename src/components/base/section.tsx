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
    <section id={id} className={cn("w-full max-w-8xl mx-auto px-4 pt-16", className)} {...props}>
      {title && <h1 className="pt-12 pb-8 text-xl md:text-2xl xl:text-3xl font-medium">{title}</h1>}

      {children}
    </section>
  )
}

export default SectionsLayout
