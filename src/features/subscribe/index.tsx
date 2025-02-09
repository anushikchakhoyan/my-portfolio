import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { BiLogoLinkedin, BiLogoMedium } from "react-icons/bi";

import { FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, MEDIUM_SUBSCRIBE, MEDIUM_URL } from "@/lib/constants";
import { UnderlineText, SectionsLayout, Link } from "@/base/";
import { Button } from "@/ui/button";

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
    <SectionsLayout id="contact" title={t('subscribe')}>
      <div className="flex flex-col md:flex-row items-center justify-start w-full gap-6 lg:gap-20">
        <div className="w-full md:w-1/2 px-4 md:px-5 flex items-start flex-col gap-5">
          <h2 className="text-4xl font-bold">{t("subscribeToGet")}</h2>
          <span className="px-3 text-lg font-medium font-josefinSans">
            ⎯ {t("latestNews")}
          </span>
          <p className="py-2">
            {t("stayInTouch")}
            <UnderlineText text={"anush.chakhoyan.work@gmail.com"} className="inline-block text-sm" />
          </p>
          <Button size="lg" onClick={handleSubscribeClick} className="h-14 max-w-sm">
            {t("subscribe")}
          </Button>
        </div>
        <div className="w-full lg:w-2/5 xl:w-1/4 px-4 md:px-5 flex lg:items-center lg:justify-center">
          <div className="max-w-sm pt-8">
            <p className="text-2xl font-bold font-josefinSans">{t("latestNews")}</p>
            <p className="text-xl py-2 font-josefinSans">{t("stayInTouch")}</p>
            <div className="flex align-baseline gap-5 pt-5">
              {socialLinks.map(({ url, Icon }) => (
                <Link to={url} key={url}>
                  <Icon className="text-xl hover:text-pink-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionsLayout>
  )
}
export default Subscribe;
