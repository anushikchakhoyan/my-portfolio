import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { MEDIUM_SUBSCRIBE } from "@lib/constants";
import SocialMedia from "@features/social-media";
import { SectionsLayout } from "@base/";
import { Button } from "@ui/button";

const Subscribe = () => {
  const { t } = useTranslation()

  const handleSubscribeClick = () => {
    window.open(MEDIUM_SUBSCRIBE, "_blank")
  }

  return (
    <SectionsLayout id="contact" className="h-50 my-5 pt-0 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="flex items-center justify-center py-20 md:py-8">
        <div className="w-full md:w-2/3 flex flex-col items-center gap-4">
          <h2 className="text-sm font-medium text-pink-500 dark:text-pink-400"> ⎯ {t("latestNews")}</h2>
          <p className="text-center text-2xl lg:text-4xl font-italiana text-gray-900 dark:text-gray-100">
            {t('stayInTouch')} {t('joinMyMailingList')}
          </p>
          <SocialMedia />
          <Button variant="outline" className="px-8 py-2" onClick={handleSubscribeClick}>
            {t("subscribe")}
          </Button>
        </div>
      </div>
    </SectionsLayout>
  )
}
export default Subscribe;
