import React from "react"
import { FaInstagram } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { MdOutlineFacebook } from "react-icons/md"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { BiLogoLinkedin, BiLogoMedium } from "react-icons/bi"

import CircleThumb from "@/components/base/circle-thumb"
import { Button } from "@/components/ui/button"
import Link from "@/components/base/link"
import { FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, MEDIUM_SUBSCRIBE, MEDIUM_URL } from "@/lib/constants"
import UnderlineText from "@/components/base/underline-text"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SectionsLayout from "@/features/layout/section"

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
    <SectionsLayout id="contact" className="px-10">
      <div className="flex items-center justify-start w-full gap-20">
        <div className="w-1/2 px-5 flex items-start flex-col gap-5">
          <h1 className="text-5xl font-bold font-montserrat">{t("subscribeToGet")}</h1>
          <span className="px-3 text-lg font-medium font-josefinSans">
            ⎯ {t("latestNews")}
          </span>
          <p className="py-2 font-montserrat">
            {t("stayInTouch")}
            <UnderlineText text={"anush.chakhoyan.work@gmail.com"} className="inline-block text-sm font-montserrat" />
          </p>
          <Button size="lg" onClick={handleSubscribeClick} className="bg-black h-14 max-w-sm">
            {t("subscribe")}
          </Button>
        </div>
        <div className="w-1/4 flex items-center justify-center font-montserrat">
          <div className="bg-pink-50 w-full max-w-lg blur-3xl h-12 absolute -z-10" />
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
export default Subscribe
