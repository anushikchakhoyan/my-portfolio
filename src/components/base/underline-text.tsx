import * as React from "react";
import { cn } from "@/lib/utils";

type UnderlineTextTypes = {
  text: string;
  className?: string;
}

const UnderlineText: React.FC<UnderlineTextTypes> = ({ text, className }) => {

  return (
    <p className={cn(
      `text-gray-700 text-base font-medium
      transition-colors duration-200 ease-in-out underline ${className}`
    )}>
      {text}
    </p>
  )
}

export default UnderlineText
