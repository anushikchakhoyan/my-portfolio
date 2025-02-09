import * as React from "react";
import { cn } from "@/lib/utils"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";

type LinkTypes = Omit<GatsbyLinkProps<{}>, "to"> & {
  to: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkTypes> = ({ text, to, children, className }) => {

  return (
    <GatsbyLink to={to} className={cn(
      `text-base font-medium transition-colors duration-200 ease-in-out no-underline ${className}`
    )}>
      {text}
      {children}
    </GatsbyLink>
  )
}
export default Link;
