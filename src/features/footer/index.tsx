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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="px-4 py-6 md:p-0 text-left">
          <Link to="/" className="flex items-center font-semibold text-2xl font-italiana">
            {t('im')}
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('footerQuote')}
          </p>
        </div>
        {navigations.map(({ title, items, intro }: NavigationType) => (
          <div key={title} className="text-left px-4 md:px-0">
            <h4 className="text-base md:text-lg font-bold mb-3 text-zinc-700 dark:text-zinc-200">{title}</h4>
            <ul className="space-y-2">
              {items.map(({ title, url }) => (
                <li key={title}>
                  <a href={url}
                    className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-white">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center text-center gap-3 py-8">
        <h4 className="text-base md:text-lg font-bold text-zinc-700 dark:text-zinc-200">{t('followUs')}</h4>
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
