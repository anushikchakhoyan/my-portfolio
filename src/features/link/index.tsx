import * as React from "react";
import { cn } from "@/lib/utils"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";

type LinkProps =  Omit<GatsbyLinkProps<{}>, "to"> & {
  to: string;
  text: string;
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ text, to, children, className }) => {

  return (
    <GatsbyLink to={to}  className={cn(
      `text-gray-50 text-base font-medium font-josefinSans 
      transition-colors duration-200 ease-in-out no-underline ${className}`
    )} activeClassName="text-red-600">
      {text}
      {children}
    </GatsbyLink>
  )
}
export default Link;
