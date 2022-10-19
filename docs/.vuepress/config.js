/*
 * @作者: 14770137
 * @Date: 2022-10-18 22:26:21
 */
import {defineUserConfig, defaultTheme} from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
    lang:'zh-CN',
    title:'Summary_知识总结',
    description:'关于编程语言的总结知识，本站使用vuepress搭建',
    base:'/Summary/',
    head:[
        ['link',{rel:'icon',href:'/image/Logo.ico'}]
    ],
    locales:{
        "/":{
            lang:'zh-CN'
        }
    },
    theme:defaultTheme({
        logo:'/image/MenuLogo.png',
        repo:'https://github.com/2966388213/Summary',
        locales:{
            "/":{
                selectLanguageName:'简体中文'
            }
        },
        
    }),
    plugins:[
        docsearchPlugin({

        })
    ],
    // dest:'dist'
});