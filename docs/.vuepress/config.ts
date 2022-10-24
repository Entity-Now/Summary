/*
 * @作者: 14770137
 * @Date: 2022-10-18 22:26:21
 */
import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Summary_知识总结',
    description: '关于编程语言的总结知识，本站使用vuepress搭建',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/image/Logo.ico' }]
    ],
    theme: defaultTheme({
        logo: '/image/MenuLogo.png',
        repo: 'https://github.com/2966388213/Summary',
        navbar: [
            {
                text: 'JavaScript',
                children: [
                    '/js/canvas.md', '/js/canvasClock.md', '/js/Math.md',
                    '/js/readme.md'
                ]
            },
            {
                text: 'git',
                children: ['/git/readme.md']
            },
            {
                text: 'css',
                children: ['/css/flex.md','/css/scss.md']
            },
            {
                text: 'c++',
                children: ['/C++/cmake.md', '/C++/readme.md',
                    '/C++/vcpkg.md'
                ]
            },
            {
                text: 'markDown',
                children: [
                    '/markdown/markdown.md'
                ]
            },
            {
                text: 'TypeScript',
                children: [
                    '/typescript/class.md',
                    '/typescript/constructSign.md',
                    '/typescript/crossType.md',
                    '/typescript/enum.md',
                    '/typescript/function.md',
                    '/typescript/Generic.md',
                    '/typescript/indentifier.md',
                    '/typescript/interface.md',
                    '/typescript/mapping.md',
                    '/typescript/predicate.md',
                    '/typescript/readme.md',
                    '/typescript/stringType.md',
                    '/typescript/type.md',
                    '/typescript/union.md',
                ]
            },
            {
                text: 'Vue',
                children: [
                    '/Vue/readme.md',
                    '/Vue/router.md',
                    '/Vue/V-model.md',
                    '/Vue/vuepress.md'
                ]
            }
        ]
    }),
    plugins: [
    ],
    // dest:'dist'
});