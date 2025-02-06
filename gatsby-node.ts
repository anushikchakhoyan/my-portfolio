import * as path from "path";
import type { GatsbyNode } from "gatsby";

interface LocaleNode {
  language: string;
}

interface LocaleQueryResult {
  allLocale: {
    nodes: LocaleNode[];
  };
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<LocaleQueryResult>(`
    query {
      allLocale {
        nodes {
          language
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const languages = result.data?.allLocale.nodes.map((node) => node.language);

  // Create pages for each language
  languages?.forEach((language: string) => {
    createPage({
      path: `/${language}`,
      component: path.resolve(`src/templates/index.tsx`),
      context: {
        language,
      },
    });
  });
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }: any) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: { fs: false },
      alias: {
        "@/ui": path.resolve(__dirname, "src/components/ui"),
        "@/base": path.resolve(__dirname, "src/components/base"),
        "@/features": path.resolve(__dirname, "src/features"),
        "@/images": path.resolve(__dirname, "src/images"),
        "@/lib": path.resolve(__dirname, "src/lib"),
        "@/hooks": path.resolve(__dirname, "src/hooks"),
        "@/contexts": path.resolve(__dirname, "src/contexts"),
      },
    },
  });
};
