import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import useExperiencesData from "@hooks/use-experiences-data";
import { SectionsLayout, CustomSlider, UnderlineText } from "@base/";

const Experiences = () => {
  const { t } = useTranslation();
  const items = useExperiencesData();

  return (
    <SectionsLayout id="experience" className="py-16">
      <h1 className="text-4xl md:text-5xl font-italiana font-bold text-center">
        {t('experiance')}
      </h1>
      <UnderlineText text={t('experienceDesc')} className="max-w-sm mx-auto py-4" />
      <CustomSlider items={items} />
    </SectionsLayout>
  )
}

export default Experiences;
