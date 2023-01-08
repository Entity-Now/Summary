# uniApp - 微信端

::: tip
微信端的配置
:::

## manifest 配置
```json
"mp-weixin" : {
    /* 小程序特有相关 */
    "appid" : "小程序id",
    "setting" : {
        "urlCheck" : false,
        "postcss" : true,
        "minified" : true,
        "es6" : true
    },
    "usingComponents" : true,
    // 懒加载插件
    "lazyCodeLoading" : "requiredComponents",
        "plugins": {
        },
        "requiredBackgroundModes": [
            "audio"
        ],
        "sitemapLocation": "sitemap.json",
        "resizable": true
},
```

## package.json 扩张配置
```json
{
    /**
     * package.json其它原有配置 
     * 拷贝代码后请去掉注释！
     */
    "uni-app": {// 扩展配置
        "scripts": {
            "custom-platform": { //自定义编译平台配置，可通过cli方式调用
                "title":"自定义扩展名称", // 在HBuilderX中会显示在 运行/发行 菜单中
                "browser":"",  //运行到的目标浏览器，仅当UNI_PLATFORM为h5时有效
                "env": {//环境变量
                    "UNI_PLATFORM": "",  //基准平台
                    "MY_TEST": "", // ... 其他自定义环境变量
                 },
                "define": { //自定义条件编译
                    "CUSTOM-CONST": true //自定义条件编译常量，建议为大写
                }
            }
        }    
    }
}
```
## 条件编译
```js
// #ifdef H5
H5平台通用代码（含微信服务号）
// #endif
// #ifdef H5-WEIXIN
微信服务号特有代码
// #endif
```

## 运行及发布项目
```sh
npm run dev:custom mp-weixin
npm run build:custom mp-weixin
```

## pages.json 页面配置
```json
{
    // 这里注册所有页面
	"pages": [
		{
			"path": "pages/xxx/xxx",
			"style": {
				"navigationBarTitleText": "xxxx..title"
			}
		},
    ],
	"condition": { //模式配置，仅开发期间生效
		"current": 0, //当前激活的模式（list 的索引项）
		"list": [{
				"name": "大表哥商店", //模式名称
				"path": "pages/RdrView/index" //启动页面，必选
			}
		]
	},
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "R星游戏管家",
		"navigationBarBackgroundColor": "#F05454",
		"backgroundColor": "#F5F5F5",
		"app-plus": {
			"background": "#F05454"
		}
	},
    // tab配置
	"tabBar": {
		"color": "#30475E",
		"selectedColor": "#F05454",
		"borderStyle":"white",
		"backgroundColor": "#F5F5F5",
		"height": "60px",
		"fontSize": "10px",
		"iconWidth": "24px",
		"spacing": "3px",
		"list": [
			{
				"text": "Home",
				"pagePath": "pages/index/index",
				"iconPath": "./static/Home.png",
				"selectedIconPath": "./static/Select/Home.png"
			},
			{
				"text": "rdr商店预览",
				"pagePath": "pages/RdrView/index",
				"iconPath": "./static/Shop.png",
				"selectedIconPath": "./static/Select/Shop.png"
			},
			{
				"text": "订单",
				"pagePath": "pages/Transaction/index",
				"iconPath": "./static/Transaction.png",
				"selectedIconPath": "./static/Select/Transaction.png"
			},
			{
				"text": "我的",
				"pagePath": "pages/User/User",
				"iconPath": "./static/User.png",
				"selectedIconPath": "./static/Select/User.png"
			}
		]
	}
}

```
