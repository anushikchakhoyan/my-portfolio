import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SectionsLayout, CustomSlider, UnderlineText } from "@base/";
import useExperiencesData from "@hooks/use-experiences-data";

const Experiences = () => {
  const { t } = useTranslation();
  const items = useExperiencesData();

  return (
    <SectionsLayout id="experience" className="py-16 bg-white dark:bg-gray-900">
      <h1 className="text-4xl md:text-5xl font-italiana font-bold text-center text-zinc-900 dark:text-zinc-100">
        {t('experiance')}
      </h1>
      <UnderlineText
        text={t('experienceDesc')}
        className="max-w-md text-center mx-auto py-4 text-zinc-600 dark:text-zinc-300"
      />
      <CustomSlider
        items={items}
        className="text-zinc-700 dark:text-zinc-200"
      />
    </SectionsLayout>
  )
}

export default Experiences;
