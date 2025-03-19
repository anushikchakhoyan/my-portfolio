import * as React from "react";
import { cn } from "@lib/utils";

type LayoutTypes = {
  id: string,
  className?: string,
  children: React.ReactNode,
  style?: object,
}

const SectionsLayout: React.FC<LayoutTypes> = ({ children, className, id, ...props }) => {
  return (
    <article id={id} className={cn("w-full max-w-8xl rounded-lg mx-auto px-4 py-12 lg:py-16", className)} {...props}>
      {children}
    </article>
  )
}

export default SectionsLayout
