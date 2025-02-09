import * as React from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

import { UnderlineText, SectionsLayout } from "@/base/";

type ServiceTypes = {
  title: string,
  hint: string,
  description: string,
  contactMe: string,
  reverse: boolean,
}

const ServicesSection = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      title: t('needMentor'),
      hint: t('startingJourney'),
      description: t("mentorText"),
      contactMe: t('contactMeToGetStarted'),
      reverse: false,
    },
    {
      title: t('needAdvice'),
      hint: t('needExpert'),
      description: t("needExpertText"),
      contactMe: t('reachOutMe'),
      reverse: true,
    }
  ]

  return (
    <SectionsLayout id="title" title={t('services')}>
      {servicesData.map(({ title, hint, description, contactMe, reverse }: ServiceTypes) => (
        <div key={title} className={cn("flex flex-col md:flex-row h-3/5", reverse && 'md:flex-row-reverse')}>
          <div className="w-full md:w-1/2 px-4 md:px-5 flex items-start flex-col gap-8">
            <h2 className="text-4xl font-bold">{title}</h2>
            <UnderlineText text={hint} className="max-w-md" />
            <p>
              {description}
            </p>
            <p>📩 {contactMe}</p>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-5">
            hello
          </div>
        </div>
      ))}
    </SectionsLayout>
  )
}

export default ServicesSection;
