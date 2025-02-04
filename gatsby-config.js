/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Anush Chakhoyan`,
    position: `Frontend Engineer`,
    description: `I’m Anush Chakhoyan, a dedicated developer with a strong background in building modern, efficient, and user-friendly web applications. Alongside my work in React, TypeScript, and cutting-edge UI frameworks, I share insights and expertise through articles on Medium, helping others navigate the world of web development. Let’s bring innovative ideas to life!`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/src/locales`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Sans\:400,700`,
          `Dancing Script\:400,700`,
          `Montserrat\:400,500,700,800`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `ru`, `arm`],
        defaultLanguage: `en`,
        siteUrl: `/`,
        trailingSlash: 'always',
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          ns: ["translation"],
          defaultNS: "translation",
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: "/",
            getLanguageFromPath: true,
          },
          // {
          //   matchPath: "/:lang?/contact",
          //   getLanguageFromPath: true,
          // },
        ],
      }
    }
  ],
}
