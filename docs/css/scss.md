<!--
 * @作者: 14770137
 * @Date: 2022-10-22 04:38:16
-->
# scss

## 安装
```sh
npm install node-sass

npm install sass --save-dev
```

```css
// 变量声明
$border-color:#aaa;
// $border-color === $border_color 

// 嵌套选择器
.container ul{
    border: 1px solid #aaa;
    
    li{
        float:left;
    }
    li>a{
        display: inline-block;
    }
    // li>a 可以这样写
    >a{
        display: flex;
    }
    // 嵌套中的父级选择器
    &:after{
        content: '';
    }
}

// 不使用嵌套的父级选择器
.container ul:after{
    content: '';
}


// 子代选择器
li > {
    a{
        display: flex;
    }
}

// 嵌套属性
li{
    border: 1px solid #aaa {
        left: 0;
        right: 0;
    }
}

```