import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import ExperienceSlider from "@features/experience";

const Content = () => {
  const { t } = useTranslation();

  const arr = [
    "Current text", "Current text", "Current text", "Current text", "Current text", "Current text",
    "Current text", "Current text", "Current text", "Current text", "Current text", "Current text",
    "Current text", "Current text", "Current text", "Current text",
  ]
  return (
    // <SectionsLayout id="content">
    //   <div className="flex flex-col md:flex-row items-center justify-start gap-20">
    //     <div className="w-full md:w-1/2 flex items-start flex-col gap-5">
    //       <h1 className="text-5xl font-bold">{t('experiance')}</h1>
    //       <UnderlineText text="Check out some of my latest product design case studies." className="max-w-sm" />
    //       <p>
    //         I’ve worked for startups, agencies, corporations,
    //         and government and have led projects to design products used by millions of people
    //       </p>
    //       <ul className="mx-auto w-full bg-gray-100 dark:bg-gray-800 rounded py-5 md:p-10">
    //         {arr.map((text, index) => (
    //           <li key={index} className="flex items-center gap-6">
    //             {text}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </SectionsLayout>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-italiana font-bold text-center mb-8">
          {t('experiance')}
        </h1>
        <ExperienceSlider />
      </div>
    </section>
  )
}

export default Content
