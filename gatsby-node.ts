import * as path from "path";
import type { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }: any) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: { fs: false },
      alias: {
        "@ui": path.resolve(__dirname, "src/components/ui"),
        "@base": path.resolve(__dirname, "src/components/base"),
        "@features": path.resolve(__dirname, "src/features"),
        "@images": path.resolve(__dirname, "src/images"),
        "@lib": path.resolve(__dirname, "src/lib"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@contexts": path.resolve(__dirname, "src/contexts"),
        "@hocs": path.resolve(__dirname, "src/hocs"),
      },
    },
  });
};

// exports.createPages = ({ actions }) => {
//   const { createPage } = actions;

//   const languages = ['en', 'hy'];

//   languages.forEach((lang) => {
//     createPage({
//       path: `/${lang}/404/`,
//       component: path.resolve('./src/templates/404-template.tsx'),
//       context: {
//         language: lang,
//       },
//     });
//   });
// };