import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Link from "@/components/base/link"

const Header = () => {
  const { t } = useTranslation();

  const samplePageLinks = [
    { text: t("portfolio"), url: "/" },
    { text: t("about"), url: "/about" },
    { text: t("contact"), url: "/contact-us" },
    { text: t("services"), url: "/services" }]

  return (
    <header className="absolute w-full top-0 z-10 flex items-center justify-between bg-gray-600/20 px-10 py-6">
      <h1 className="text-lg text-gray-600 font-lighter font-dancingScript m-0">
        {t("Im")}
      </h1>
      <nav className="flex gap-8">
        {samplePageLinks.map(link => (
          <Link to={link.url} key={link.url} text={link.text} />
        ))}
      </nav>
    </header>
  )
}

export default Header;
