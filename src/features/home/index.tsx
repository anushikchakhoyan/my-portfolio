import React, { useEffect, useState } from "react";

import { GITHUB_URL, LINKEDIN_URL, MEDIUM_URL, STARTED_CAREER_AT } from "@/lib/constants";
import { ExternalLink, SectionsLayout } from "@/base/";

type ExternalLink = {
  url: string;
  text: string;
}

const externalLinks: ExternalLink[] = [
  { url: LINKEDIN_URL, text: "Linkedin" },
  { url: MEDIUM_URL, text: "Medium" },
  { url: GITHUB_URL, text: "GitHub" }
]

const Home = () => {
  const duration = 2;
  const startYear = STARTED_CAREER_AT;
  const endYear = new Date().getFullYear();
  const [yearsExperience, setYearsExperience] = useState(startYear);

  useEffect(() => {
    const yearRange = endYear - startYear
    const steps = yearRange + 1
    const stepDuration = (duration * 2500) / steps

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
  }, [startYear, endYear, duration]);

  return (
    <SectionsLayout id="main" className="h-[calc(100svh-theme(spacing.12))] flex flex-col z-10 items-center justify-center">
      <div className="flex flex-col gap-4 mx-auto">
        <h1 className="flex items-center justify-center mb-2">
          <span className="text-5xl md:text-9xl font-josefinSans m-0">Port
            <span className="font-dancingScript text-pink-500 dark:text-pink-400">f</span>olio.
          </span>
          <sup className="text-xl md:text-2xl font-bold font-josefinSans inline-block dark:text-pink-400">{yearsExperience}</sup>
        </h1>
        <ul className="flex flex-row-wrap gap-4 m-0 px-3">
          {externalLinks.map(({ url, text }) => (
            <li key={url}><ExternalLink to={url} text={text} /></li>
          ))}
        </ul>
      </div>
    </SectionsLayout>
  )
}

export default Home;
