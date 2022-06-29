import { defineConfig } from "vitepress";

export default defineConfig({
  title: "fairyland",
  description: "fairyland",
  base: "/",
  themeConfig: {
    footer: {
      message: "浙公网安备 33011002015297 号",
      copyright: `Copyright © 2014-${new Date().getFullYear()} fairyland`
    },
    sidebar: [
      {
        // text: "标题",
        items: [
          {
            text: "解决Github上clone项目太慢",
            link: "/github-clone-too-slow"
          }
        ]
      }
    ]
  }
});
