import * as React from "react";
import { GoDotFill } from "react-icons/go";

import UnderlineText from "@/components/base/underline-text";
import SectionsLayout from "@/features/layout/section";
import { getFormattedIndex } from "@/lib/utils";

const Content = () => {
  const arr = [
    "Current text", "Current text", "Current text", "Current text", "Current text", "Current text",
    "Current text", "Current text", "Current text", "Current text", "Current text",  "Current text",
    "Current text", "Current text", "Current text", "Current text",
  ]
  return (
    <SectionsLayout id="content" className="px-10">
      <div className="flex items-center justify-start gap-20">
        <div className="w-1/2 px-5 flex items-start flex-col gap-5">
          <h1 className="text-5xl font-bold font-montserrat">Table of Contents</h1>
          <UnderlineText text="Check out some of my latest product design case studies." className="max-w-sm" />
          <p className="py-2 font-montserrat">
            portfolio.
          </p>
          <p className="font-montserrat">
            I’ve worked for startups, agencies, corporations,
            and government and have led projects to design products used by millions of people
          </p>
        </div>
        <div className="w-1/4 flex items-center justify-center font-montserrat">
          <ul className="mx-auto w-full bg-gray-100 rounded p-10">
            {arr.map((text, index) => (
              <li className="flex items-center gap-6">
                <span className="w-10 inline-block text-end text-xl font-medium">
                  {getFormattedIndex(index+1)}</span>
                <p className="gap-2 flex items-center">
                  <GoDotFill className="text-sm"/>
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
