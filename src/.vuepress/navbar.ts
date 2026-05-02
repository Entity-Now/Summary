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
      "/Node.js",
      "/python"
    ]
  },
  {
    text:"汇编",
    children:[
      "/Compilation/README.md"
    ]
  },
  "/other/",
  {
    text:"其他-",
    children:[
      "/other/seo.md",
      "/other/SeoOffer.md",
      "/reverse/"
    ]
  }
]);
