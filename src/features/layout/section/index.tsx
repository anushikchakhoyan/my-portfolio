import * as React from "react"
import { cn } from "@/lib/utils"

type LayoutProps = {
  id: string,
  className?: string,
  children: React.ReactNode,
  style?: object,
}

const SectionsLayout: React.FC<LayoutProps> = ({ children, className, id, ...props }) => {
  return (
    <section id={id} className={cn("h-dvh px-5 flex justify-center", className)} {...props}>
      {children}
    </section>
  )
}

export default SectionsLayout
