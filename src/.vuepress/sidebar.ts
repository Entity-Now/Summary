import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "list",
    {
      text: "c++",
      icon: "laptop-code",
      prefix: "C++/",
      link: "C++/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "C#",
      icon: "laptop-code",
      prefix: "CSharp/",
      children: "structure",
      collapsible: true,
    },
    {
      text:"git",
      icon: "laptop-code",
      prefix: "git/",
      children: "structure",
      collapsible: true,
    },
    {
      text:"kotlin",
      icon: "laptop-code",
      prefix: "kotlin/",
      children: "structure",
      collapsible: true,
    },
    {
      text:"Node.js",
      icon: "laptop-code",
      prefix: "Node.js/",
      children: "structure",
      collapsible: true,
    },
    {
      text:"Vue3",
      icon: "laptop-code",
      prefix: "Vue/",
      children: "structure",
      collapsible: true,
    },
    {
      text:"uni-app",
      icon: "laptop-code",
      prefix: "uniApp/",
      children: "structure",
      collapsible: true,
    },
    {
      text:"TypeScript",
      icon: "laptop-code",
      prefix: "typescript/",
      children: "structure",
      collapsible: true,
    }
  ],
  '/js/':"structure",
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
              "README.md",
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
              '/markdown/Markdown-it.md',
              "InterselectionObserver"
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
  '/kotlin/':"structure",
  '/CSharp/':"structure",
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
});
