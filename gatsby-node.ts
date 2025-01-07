import * as path from "path";

export const createPages = async ({ actions }: any) => {
  const { createPage } = actions;

  createPage({
    path: "/using-dsg",
    component: path.resolve(__dirname, "src/templates/using-dsg.tsx"),
    context: {},
    defer: true,
  });
};

export const onCreateWebpackConfig = ({ actions } : any) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components/ui": path.resolve(__dirname, "src/components/ui"),
        "@/components/base": path.resolve(__dirname, "src/components/base"),
        "@/features": path.resolve(__dirname, "src/features"),
        "@/images": path.resolve(__dirname, "src/images"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
        "@/locales/en": path.resolve(__dirname, "src/locales/en"),
        "@/utils": path.resolve(__dirname, "src/utils"),
      },
    },
  });
};
