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
                link:'/Vue/'
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
                text:'Kotlin',
                link:'/kotlin/README.md'
            },
            // {
            //     text:'node.js',
            //     link:''
            // },
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
]

export default navbar;