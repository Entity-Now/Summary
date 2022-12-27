import type { NavbarConfig } from '@vuepress/theme-default'

const navbar: NavbarConfig = [
    {
        text:'前言',
        link:"/Home"
    },
    {
        text:'前端',
        children:[
            {
                text:'JavaScript',
                link:'/js/README.md'
            },
            {
                text:'TS',
                link:'/typescript/readme.md'
            },
            {
                text:'Vue',
                link:'/Vue/readme.md'
            },
            {
                text:'CSS',
                link:'/css/flex.md'
            }
            ,
            {
                text:"uniApp",
                link:"/uniApp/uniApp.md"
            },
            {
                text:'Node.js',
                link:"/Node.js/README.md"
            }
        ]
    },
    {
        text: '后端',
        children: [
            {
                text:"C#",
                link:'/CSharp/README.md'
            },
            {
                text:'linq',
                link:'/CSharp/linq.md'
            },
            {
                text:'C#小知识',
                link:'/CSharp/other.md'
            },
            {
                text:'Kotlin',
                link:'/kotlin/README.md'
            },
            {
                text:'c++',
                link:'/C++/readme.md'
            }
        ]
    },
    {
        text: '工具',
        children:[
            {
                text:'git',
                link:"/git/readme.md"
            },
            {
                text:'cmake',
                link:'/C++/cmake.md'
            },
            {
                text:'vcpkg',
                link:'/C++/vcpkg.md'
            },
            {
                text:'markDown',
                link:'/markdown/README.md'
            }
        ]
    },
    {
        text:"其他",
        children:[
            {
                text:'SEO推广',
                link:'/other/seo.md'
            },
            {
                text:"Seo面试总结",
                link:'/other/SeoOffer.md'
            },
            {
                text:"HTML资源加载方式",
                link:'/other/html_preload_prefetch.md'
            }
        ]
    }
]

export default navbar;