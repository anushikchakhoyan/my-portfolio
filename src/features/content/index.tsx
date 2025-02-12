import * as React from "react";
import { GoDotFill } from "react-icons/go";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { UnderlineText, SectionsLayout } from "@base/";
import { getFormattedIndex } from "@lib/utils";

const Content = () => {
  const { t } = useTranslation();

  const arr = [
    "Current text", "Current text", "Current text", "Current text", "Current text", "Current text",
    "Current text", "Current text", "Current text", "Current text", "Current text", "Current text",
    "Current text", "Current text", "Current text", "Current text",
  ]
  return (
    <SectionsLayout id="content">
      <div className="flex flex-col md:flex-row items-center justify-start gap-20">
        <div className="w-full md:w-1/2 flex items-start flex-col gap-5">
          <h1 className="text-5xl font-bold">Table of Contents</h1>
          <UnderlineText text="Check out some of my latest product design case studies." className="max-w-sm" />
          <p className="py-2">
            portfolio.
          </p>
          <p>
            I’ve worked for startups, agencies, corporations,
            and government and have led projects to design products used by millions of people
          </p>
        </div>
        <div className="w-full md:w-1/4 flex items-center justify-center">
          <ul className="mx-auto w-full bg-gray-100 dark:bg-gray-800 rounded py-5 md:p-10">
            {arr.map((text, index) => (
              <li key={index} className="flex items-center gap-6">
                <span className="w-10 inline-block text-end text-xl font-medium">
                  {getFormattedIndex(index + 1)}</span>
                <p className="gap-2 flex items-center">
                  <GoDotFill className="text-sm" />
                  <span className="text-xl">{text}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionsLayout>
  )
}

export default Content
