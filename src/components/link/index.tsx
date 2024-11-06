import * as React from "react";
import { cn } from "@/lib/utils"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";

type LinkProps =  Omit<GatsbyLinkProps<{}>, "to"> & {
  to: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ text, to }) => {

  return (
    <GatsbyLink to={to}  className={cn(
      "text-gray-600 hover:text-gray-100",
      "transition-colors duration-200 ease-in-out",
      "no-underline"
    )}>
      {text}
    </GatsbyLink>
  )
}
export default Link;
