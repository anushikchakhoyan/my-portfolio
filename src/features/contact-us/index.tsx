import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

import SectionsLayout from "@/features/layout/section"

const ContactUs: React.FC = () => {
  const { t } = useTranslation()

  return (
    <SectionsLayout id="contact" className="items-center justify-start w-screen relative px-0">
      <h1 className="text-9xl font-lighter font-josefinSans">
        {t("contact")}
      </h1>
    </SectionsLayout>
  )
}
export default ContactUs
