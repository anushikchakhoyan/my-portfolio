import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { SectionsLayout } from "@/base/";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionsLayout id="about" className="h-screen flex flex-col">
      <div className="bg-gray-200 flex-1 w-full flex items-center justify-start py-10 overflow-hidden">
        <h2 className="text-4xl">{t("itsMe")}</h2>
      </div>
      <div className="flex-1 flex items-center justify-center py-20 md:py-8">
        <div className="w-full md:w-2/3 flex flex-col items-center gap-4 md:px-5">
          <h2 className="text-sm font-medium">{t("welcome")}</h2>
          <p className="text-center text-2xl lg:text-4xl font-italiana"
            dangerouslySetInnerHTML={{ __html: t('whereSimplicityIsKey') as string }}>
          </p>
          <p className="text-center text-sm max-w-lg">
            {t("aboutPurposeOfWork")}
          </p>
        </div>
      </div>
    </SectionsLayout>
  )
}

export default About
