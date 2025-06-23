import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Entity的个人博客-分享编程经验",
  description: "这是一个分享技术的博客文档，现有C++、c#、kotlin、js、vue3等编程语言。",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
