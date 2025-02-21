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
    <SectionsLayout
      id="contact"
      className="my-5 py-16 bg-zinc-50 dark:bg-zinc-800 transition-colors duration-300"
    >
      <div className="flex items-center justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center gap-6 px-4">
          <h2 className="text-sm font-medium text-pink-600 dark:text-pink-400/90 tracking-wider">
            ⎯ {t("latestNews")}
          </h2>
          <p className="text-center text-3xl lg:text-4xl font-italiana text-zinc-800 dark:text-zinc-100">
            {t('stayInTouch')}{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              {t('joinMyMailingList')}
            </span>
          </p>
          <SocialMedia className="dark:text-zinc-300 hover:dark:text-pink-400" />
          <Button
            variant="outline"
            className="px-8 py-2 text-zinc-800 dark:text-zinc-100 
                      border-zinc-300 dark:border-zinc-600
                      hover:bg-pink-50 hover:border-pink-300 hover:text-pink-600
                      dark:hover:bg-zinc-800 dark:hover:border-pink-400 dark:hover:text-pink-400
                      transition-all duration-300"
            onClick={handleSubscribeClick}
          >
            {t("subscribe")}
          </Button>
        </div>
      </div>
    </SectionsLayout>
  )
}

export default Subscribe;