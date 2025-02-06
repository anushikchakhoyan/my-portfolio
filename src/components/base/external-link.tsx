import * as React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import { Button } from "@/ui/button";

type ExternalLinkProps = {
  to: string;
  text: string;
  Icon?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ text, to, Icon = FiArrowUpRight }) => (
  <Button variant="link" className="border rounded-3xl hover:bg-pink-300 group">
    <a href={to} target="_blank" rel="noreferrer"
      className="flex items-center text-gray-600 dark:text-white dark:group-hover:text-black group-hover:text-white">
      {text} <Icon height={20} />
    </a>
  </Button>
);

export default ExternalLink;
