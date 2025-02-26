import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import useNavigationData from "@hooks/custom/use-nav-data";
import SocialMedia from "@features/social-media";
import { NavigationType } from "@lib/types";
import { Link } from "@base/";

const Footer: React.FC = () => {
  const { t } = useTranslation()
  const navigations = useNavigationData();

  return (
    <footer className="pt-0 md:pt-12 w-full max-w-8xl mx-auto px-4">
      <div className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-2">
        <div className="py-6 md:py-0 w-full lg:w-1/2">
          <Link to="/" className="flex items-center font-semibold tracking-wide text-2xl font-italiana">
            {t('im')}
          </Link>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {t('footerQuote')}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {navigations.map(({ title, items }: NavigationType) => (
            <div key={title}>
              <h4 className="text-base md:text-lg font-medium mb-2 text-zinc-700 dark:text-zinc-200">{title}</h4>
              <ul>
                {items.map(({ title, url }) => (
                  <li key={title}>
                    <a href={url}
                      className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-white">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-3 py-8">
        <h4 className="text-base md:text-lg font-normal text-zinc-700 dark:text-zinc-200">{t('followUs')}</h4>
        <SocialMedia />
      </div>
      <div className="py-8 text-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {t('im')}. {t('allRightsReserved')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
