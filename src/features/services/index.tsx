// import * as React from "react";
// import { GatsbyImage } from "gatsby-plugin-image";
// import { useTranslation } from "gatsby-plugin-react-i18next";

// import { Link, UnderlineText, SectionsLayout } from "@base/";
// import GeneralTextBlock from "@features/general-text-block";
// import useServicesData from "@hooks/use-services-data";
// import { Button } from "@ui/button";
// import { cn } from "@lib/utils";

// const ServicesSection = () => {
//   const { t } = useTranslation();
//   const servicesData = useServicesData();

//   return (
//     <SectionsLayout id="services">
//       <GeneralTextBlock
//         title={t("ourExpertise")}
//         subtitle={t("transformYourVisionIntoReality")}
//         description={t("fromStrategyToExecution")} />

//       {servicesData.map(({ title, hint, description, contactMe, image }, index: number) => (
//         <div
//           key={title}
//           className={cn("gap-4 py-8 md:py-20 flex flex-col md:flex-row h-3/5", index % 2 === 0 && "md:flex-row-reverse")}
//         >
//           <div className="w-full md:w-1/2 px-4 md:px-5 flex items-start flex-col gap-8">
//             <h2 className="text-4xl font-medium">{title}</h2>
//             <UnderlineText text={hint} className="max-w-md" />
//             <p>{description}</p>
//             <Button
//               asChild
//               variant="outline"
//               className="px-8 py-2"
//             >
//               <Link to="/contact-us" className="flex items-center gap-5">
//                 📩 {contactMe}
//               </Link>
//             </Button>
//           </div>
//           <div className="w-full md:w-1/2 px-4 md:px-5">
//             {image && (
//               <GatsbyImage
//                 image={image}
//                 alt={title}
//                 className="w-full h-full rounded-lg shadow-lg"
//               />
//             )}
//           </div>
//         </div>
//       ))}
//     </SectionsLayout>
//   );
// };

// export default ServicesSection;

import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { AiFillMessage } from "react-icons/ai";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { Link, UnderlineText, SectionsLayout } from "@base/";
import GeneralTextBlock from "@features/general-text-block";
import useServicesData from "@hooks/use-services-data";
import { Button } from "@ui/button";
import { cn } from "@lib/utils";

const ServicesSection = () => {
  const { t } = useTranslation();
  const servicesData = useServicesData();

  return (
    <SectionsLayout id="services">
      <GeneralTextBlock
        title={t("ourExpertise")}
        subtitle={t("transformYourVisionIntoReality")}
        description={t("fromStrategyToExecution")}
      />
      {servicesData.map(({ title, hint, description, contactMe, image }, index: number) => (
        <div
          key={title}
          className={cn("gap-4 py-8 md:py-20 flex flex-col md:flex-row h-3/5", index % 2 === 0 && "md:flex-row-reverse")}
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
      ))}
    </SectionsLayout>
  );
};

export default ServicesSection;