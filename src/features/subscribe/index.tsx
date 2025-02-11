import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { BiLogoLinkedin, BiLogoMedium } from "react-icons/bi";

import { FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, MEDIUM_SUBSCRIBE, MEDIUM_URL } from "@lib/constants";
import SocialMedia from "@features/social-media";
import { SectionsLayout, Link } from "@base/";
import { Button } from "@ui/button";

const socialLinks = [
  { url: FACEBOOK_URL, Icon: MdOutlineFacebook },
  { url: LINKEDIN_URL, Icon: BiLogoLinkedin },
  { url: GITHUB_URL, Icon: IoLogoGithub },
  { url: INSTAGRAM_URL, Icon: FaInstagram },
  { url: MEDIUM_URL, Icon: BiLogoMedium }
]

const Subscribe = () => {
  const { t } = useTranslation()

  const handleSubscribeClick = () => {
    window.open(MEDIUM_SUBSCRIBE, "_blank")
  }

  return (
    <SectionsLayout id="contact" className="h-50 my-5 pt-0 bg-gray-100 dark:bg-gray-800">
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
