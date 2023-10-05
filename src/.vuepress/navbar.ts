import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端",
    children:[
      "/js",
      "/css",
      "/typescript",
      {
        text:"Vue3 系列",
        children:[
          "/Vue",
          "/uniApp"
        ]
      }
    ]
  },
  {
    text:"后端",
    children:[
      "/CSharp",
      "/kotlin",
      "/C++",
      "/Node.js"
    ]
  },
  {
    text:"汇编",
    children:[
      "/Compilation/README.md"
    ]
  },
  {
    text:"其他",
    children:[
      "/git",
      "/markdown/",
      "/markdown/Markdown-it.md",
      "/other/calculation.md",
      "/other/Design.md",
      "/other/html_preload_prefetch.md"
    ]
  },
  {
    text:"其他-",
    children:[
      "/other/seo.md",
      "/other/SeoOffer.md"
    ]
  }
]);
