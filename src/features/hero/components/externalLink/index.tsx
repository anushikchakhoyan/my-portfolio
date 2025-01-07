import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type ExternalLinkProps = {
  link: string;
  text: string;
  Icon?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ text, link, Icon = ArrowUpRight }) => (
    <Button variant="link" className="border rounded-3xl hover:bg-gray-100">
      <a href={link} target="_blank" rel="noreferrer" className="flex items-center text-gray-600">
        {text} <Icon height={20} />
      </a>
    </Button>
);

export default ExternalLink;
