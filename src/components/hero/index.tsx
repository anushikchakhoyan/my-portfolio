import * as React from "react";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

import SectionsLayout from "@/components/layout/section";
import { Button } from "@/components/ui/button";

import * as containerStyles from "./hero.module.css";
import { useTranslation } from "gatsby-plugin-react-i18next"

const Hero = () => {
  const duration = 2;
  const startYear = 2017;
  const endYear = new Date().getFullYear();
  const {t} = useTranslation();
  const [yearsExperience, setYearsExperience] = useState(startYear);

  useEffect(() => {
    const yearRange = endYear - startYear;
    const steps = yearRange + 1;
    const stepDuration = (duration * 1000) / steps;

    let currentYear = startYear;

    const interval = setInterval(() => {
      if (currentYear <= endYear) {
        setYearsExperience(currentYear);
        currentYear++;
      } else {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [startYear, endYear, duration]);

  return (
    <SectionsLayout className="flex-col justify-between">
      <div/>
      <div className="flex flex-col gap-4 mx-auto">
        <h1 className={`flex items-center mb-2 ${containerStyles.portfolioTitle}`}>
          <span className="text-9xl font-josefinSans m-0">Port
            <span className="font-dancingScript">f</span>olio.
          </span>
          <sup className="text-2xl font-bold font-josefinSans inline-block">{yearsExperience}</sup>
        </h1>
        <ul className="flex gap-4 m-0">
          <li>
            <Button variant="link" className="border rounded-3xl">
              Linkedin <ArrowUpRight />
            </Button>
          </li>
          <li>
            <Button variant="link" className="border rounded-3xl">
              Medium <ArrowUpRight/>
            </Button>
          </li>
          <li>
            <Button variant="link" className="border rounded-3xl">
              GitHub <ArrowUpRight/>
            </Button>
          </li>
          <li>
            <Button variant="link" className="border rounded-3xl">
              Page 4 <ArrowUpRight/>
            </Button>
          </li>
        </ul>
      </div>

      <p className="mr-auto ml-auto">
        <a href="" className="flex no-underline text-[#222] text-base font-medium font-josefinSans">
          {t('scrollDown')}
          <ArrowDown className="mx-4 w-5 animate-bounce"/></a>
      </p>
    </SectionsLayout>
  )
}

export default Hero;
