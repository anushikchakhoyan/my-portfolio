import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { AiFillMessage } from "react-icons/ai";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { Button } from "@ui/button";

import useServicesData from "@hooks/custom/use-services-data";
import { Service, ServiceType } from "@lib/types";

import { Link, UnderlineText } from "@base/";

const ServicesSection: React.FC<{ type: Service }> = ({ type }) => {
  const data = useServicesData(type);

  return <ServicesContent {...data} />
};

export default ServicesSection;

const ServicesContent: React.FC<ServiceType> = (
  { id, title, hint, description, contactMe, image }
) => {
  return (
    <div
      key={id}
      className="gap-4 py-8 md:py-20 flex flex-col md:flex-row h-3/5"
    >
      <div className="w-full md:w-1/2 px-4 md:px-5 flex items-start flex-col gap-8">
        <h2 className="text-4xl font-medium">{title}</h2>
        <UnderlineText text={hint} className="max-w-md" />
        <p>{description}</p>
        <Button variant="outline" asChild>
          <Link to="/contact-us" className="flex items-center gap-2">
            <AiFillMessage className="text-pink-400" /> {contactMe}
          </Link>
        </Button>
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-5">
        {image && (
          <GatsbyImage
            image={image}
            alt={title}
            className="w-full h-full rounded-lg shadow-lg"
          />
        )}
      </div>
    </div>
  )
};
ServicesContent.displayName = "ServicesContent";