# markdown-it

## 安装
```sh
npm install markdown-it --save
```

## 引入
```js
import MarkdownIt  from 'markdown-it'

const Mk = new MarkdownIt({
    html:true, // 支持html
    xhtmlOut: false, // 支持‘/’闭合标签 <br/>
    breaks: true, // 段落中的'\n'转换为换行符
    linkify: false, // 自动将url地址转换为链接
    typographer:true, // 请用引号美化'‘’'
    quotes:'“”‘’'
    
});
// 渲染这段markdown
var result = Mk.render('# markdown-it rulezz!');
```

## 如果要支持代码语法高亮需要引入highlight.js
```sh
npm install highlight.js
```
```js
const Mk = new MarkdownIt({
    highlight:function(str, lang){
        if(lang && hljs.getLanguage(lang)){
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
        }
        return '';
    }
});
```