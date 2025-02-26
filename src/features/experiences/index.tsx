import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SectionsLayout, CustomSlider, UnderlineText, Title } from "@base/";
import useExperiencesData from "@hooks/custom/use-experiences-data";

const Experiences: React.FC = () => {
  const { t } = useTranslation();
  const items = useExperiencesData();

  return (
    <SectionsLayout id="experience" className="bg-white dark:bg-gray-900">
      <Title title={t("experiance")} />
      <UnderlineText
        text={t('experienceDesc')}
        className="max-w-md text-center mx-auto py-4 text-zinc-600 dark:text-zinc-300"
      />
      <CustomSlider
        items={items}
        className="text-zinc-700 dark:text-zinc-200 lg:my-8"
      />
    </SectionsLayout>
  )
}

export default Experiences;
