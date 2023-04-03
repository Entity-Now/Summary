/*
 * @作者: 14770137
 * @Date: 2022-11-03 18:21:55
 */
import type { SidebarConfig } from '@vuepress/theme-default'

const sidebar:SidebarConfig =  {
    '/js/':[
        {
            text:'JavaScript',
            children:[
                '/js/README.md',
                '/js/Math.md',
                '/js/CircleCollision.md',
                '/js/canvasClock.md',
                '/js/canvas.md',
                'canvasPieChart.md',
                'dom.md',
                'IntersectionObserver.md',
                'event.md'
            ]
        }
    ],
    '/C++/':[
        {
            text:'C++',
            children:[
                '/C++/readme.md',
                'pointer.md',
                'lambda.md',
                'cast.md',
                'template.md',
                'explicit.md',
                'define.md',
                '/C++/cmake.md',
                'conan.md',
                '/C++/vcpkg.md',
            ]
        }
    ],
    '/css/':[
        {
            text:'css',
            children:[
                '/css/flex.md',
                '/css/scss.md',
                'scroll.md',
                'other.md',
                'grid.md'
            ]
        }
    ],
    '/git/':[
        {
            text:'git',
            children:[
                '/git/readme.md',
                '/git/action.md',
                "tag.md"
            ]
        }
    ],
    '/typescript/':[
        {
            text:'TS',
            children:[
                '/typescript/readme.md',
                '/typescript/class.md',
                '/typescript/constructSign.md',
                '/typescript/crossType.md',
                '/typescript/enum.md',
                '/typescript/function.md',
                '/typescript/Generic.md',
                '/typescript/identifier.md',
                '/typescript/interface.md',
                '/typescript/mapping.md',
                '/typescript/predicate.md',
                '/typescript/stringType.md',
                '/typescript/type.md',
                '/typescript/union.md',
            ]
        }
    ],
    '/Vue/':[
        {
            text:'Vue.js',
            children:[
                '/Vue/readme.md',
                '/Vue/router.md',
                '/Vue/ViewModel.md',
                '/Vue/vuepress.md',
                'server.md',
                'pinia.md',
                '/markdown/Markdown-it.md'
            ]
        }
    ],
    '/markdown/':[
        {
            text:'markDown',
            children:[
                '/markdown/README.md',
                'Markdown-it.md'
            ]
        }
    ],
    '/kotlin/':[
        {
            text:'kotlin入门',
            children:[
                '/kotlin/README.md'
            ]
        }
    ],
    '/CSharp/':[
        {
            text:'C#入门',
            children:[
                {
                    text:"基础入门",
                    children:['/CSharp/README.md']
                },
                {
                    text:"Reflection反射",
                    children:[
                        'Assembly.md'
                    ]

                },
                {
                    text:'其他知识',
                    children:["other.md",'MatchingPattern.md']
                },
                {
                    text:'Linq',
                    children:['/CSharp/Linq.md']
                },
                {
                    text:"xpath",
                    children:[
                        "xpath.md"
                    ]
                },
            ]
        },
        {
            text:"WinUI3管理员方式运行",
            children:[
                "WinUI3Admin.md"
            ]
        },
        {
            text:"dotnet",
            children:[
                "dotnet.md"
            ]
        },

        {
            text:"asp in linux",
            children:[
                "linux_Run.md"
            ]
        },
        {
            text:"XAML",
            children:[
                "win_ui_3.md",
                'CommunityToolKit.Mvvm.md',
                'Win3UI.md',
                'Xaml_Element.md',
                "visualTreeHelper.md"
            ]
        },
        {
            text:'Dependency依赖关系注入',
            link:'Dependency.md'
        }

    ],
    "/other/":[
        {
            text:'Seo推广',
            children:[
                "seo.md"
            ]
        },
        {
            text:"面试经验",
            children:[
                "SeoOffer.md"
            ]
        },
        {
            text:'HTML5资源预加载',
            children:[
                'html_preload_prefetch.md'
            ]
        },
        {
            text:"算法/设计模式",
            children:[
                'calculation.md',
                'Design.md'
            ]
        }
    ],
    "/uniApp/":[
        {
            text:'uniApp',
            children:[
                'uniApp.md'
            ]
        },
        {
            text:"uniApp微信配置",
            children:[
                "README.md"
            ]
        },
        {
            text:"vscode && uni-app",
            children:[
                "vscode.md"
            ]
        }
    ],
    "/Node.js":[
        {
            text:'node.js 与 express',
            children:[
                'README.md'
            ]
        }
    ]
}
export default sidebar;