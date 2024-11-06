// gatsby-node.ts
import * as path from "path";

export const createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/using-dsg",
    component: path.resolve(__dirname, "src/templates/using-dsg.tsx"),
    context: {},
    defer: true,
  });
};

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  });
};
