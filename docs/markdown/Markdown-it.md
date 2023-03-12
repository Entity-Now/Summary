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
export function CreateHighlight(){
    let md = new MarkdownIt({
        html:true, // 支持html
        xhtmlOut: false, // 支持‘/’闭合标签 <br/>
        breaks: true, // 段落中的'\n'转换为换行符
        linkify: false, // 自动将url地址转换为链接
        typographer:true, // 请用引号美化'‘’'
        quotes:'“”',
        highlight:function(str, lang){
            if (lang && hljs.getLanguage(lang)) {
                try {
                    
                    return '<pre class="hljs"><code>' +
                            hljs.highlight(lang, str, true).value +
                            '</code></pre>';
                } catch (__) {}
            }
          
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    });
    return md
}
```

## 安装github-markdown-css
```sh
$ npm install github-markdown-css
```
### 引用
```js
import 'github-markdown-css/github-markdown.css'
```
### 添加样式
```html
<div class="markdown-body">

</div>
```
```css
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}
 
@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
```

## 安装emoji
```sh
npm install markdown-it-emoji --save
```
### 有三个版本分别是full light bare
```js
import emoji from 'markdown-it-emoji/light'
import emoji from 'markdown-it-emoji/full'
import emoji from 'markdown-it-emoji/bare'
```