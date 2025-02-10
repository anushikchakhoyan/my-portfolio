import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-800 font-josefinSans w-full py-4 mt-5">
      <div className="flex items-center justify-between max-w-8xl w-full mx-auto px-4">
        <p className="text-sm">
          {t('builtWith')}
          <a href="https://medium.com/@anushchakhoyan" target="_blank"
            className="text-base font-bold text-pink-500">{` `} {t('love')}</a>
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} &middot;  All rights reserved
        </p>
      </div>
    </footer>
  )
}
export default Footer
