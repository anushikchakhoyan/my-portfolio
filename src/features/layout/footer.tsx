import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="flex items-center justify-between font-josefinSans w-full px-3 md:px-5 py-3">
      <p className="m-0 text-sm">
        © {new Date().getFullYear()} &middot;  All rights reserved
      </p>

      <p className="m-0 text-sm ">
        {t('builtWith')}
        <a href="https://medium.com/@anushchakhoyan" target="_blank"
          className="text-base font-bold text-pink-400">{` `} {t('love')}</a>
      </p>
    </footer>
  )
}
export default Footer
