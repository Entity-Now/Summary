/*
 * @作者: 14770137
 * @Date: 2022-10-18 22:26:21
 */
import { defineUserConfig, defaultTheme } from 'vuepress'
import { containerPlugin } from '@vuepress/plugin-container'
import sidebar from './Config/sidebar'
import navbar from './Config/navbar'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Entity的个人博客',
    description: '关于编程语言的总结知识，本站使用vuepress搭建',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/image/Logo.ico' }]
    ],
    theme: defaultTheme({
        logo: '/image/MenuLogo.png',
        repo: 'https://github.com/2966388213/Summary',
        editLink:false,
        lastUpdatedText:'上次编辑时间',
        contributorsText:'作者',
        notFound:[
            '404 未找到此页面',
            '404 我怎么不知道有这么一个页面？'
        ],
        backToHome:'去首页',
        toggleColorMode:'切换主题颜色',
        navbar: navbar,
        sidebar:sidebar
    }),
    plugins: [
        containerPlugin({
            type:'tip'
        })
    ],
    // dest:'dist'
});