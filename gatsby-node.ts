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

export const onCreateWebpackConfig = ({ actions }: any) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/ui": path.resolve(__dirname, "src/components/ui"),
        "@/base": path.resolve(__dirname, "src/components/base"),
        "@/features": path.resolve(__dirname, "src/features"),
        "@/images": path.resolve(__dirname, "src/images"),
        "@/lib": path.resolve(__dirname, "src/lib"),
        "@/hooks": path.resolve(__dirname, "src/hooks"),
        "@/locales": path.resolve(__dirname, "src/locales/en"),
        "@/contexts": path.resolve(__dirname, "src/contexts"),
      },
    },
  });
};
