import * as path from "path";
import type { GatsbyNode } from "gatsby";

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
