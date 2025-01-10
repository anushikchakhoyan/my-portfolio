import React, { useEffect, useState } from "react";

import ExternalLink from "@/features/hero/components/externalLink";
import SectionsLayout from "@/features/layout/section";
import { STARTED_CAREER_AT } from "@/lib/constants";

interface ExternalLink {
  link: string;
  text: string;
}

const externalLinks: ExternalLink[] = [
  { link: "https://www.linkedin.com/in/anush-chakhoyan/", text: "Linkedin" },
  { link: "https://anushchakhoyan.medium.com/", text: "Medium" },
  { link: "https://github.com/anushikchakhoyan", text: "GitHub" }
]

const Hero = () => {
  const duration = 2;
  const startYear = STARTED_CAREER_AT;
  const endYear = new Date().getFullYear();
  const [yearsExperience, setYearsExperience] = useState(startYear);

  useEffect(() => {
    const yearRange = endYear - startYear
    const steps = yearRange + 1
    const stepDuration = (duration * 1000) / steps

    let currentYear = startYear

    const interval = setInterval(() => {
      if (currentYear <= endYear) {
        setYearsExperience(currentYear)
        currentYear++
      } else {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [startYear, endYear, duration])

  return (
    <SectionsLayout id="main" className="flex-col z-10">
      <div className="flex flex-col gap-4 mx-auto">
        <h1 className="flex items-center mb-2">
          <span className="text-9xl font-josefinSans m-0">Port
            <span className="font-dancingScript">f</span>olio.
          </span>
          <sup className="text-2xl font-bold font-josefinSans inline-block">{yearsExperience}</sup>
        </h1>
        <ul className="flex gap-4 m-0">
          {externalLinks.map(({ link, text }) => (
            <li key={link}><ExternalLink link={link} text={text} /></li>
          ))}
        </ul>
      </div>
    </SectionsLayout>
  )
}

export default Hero;
