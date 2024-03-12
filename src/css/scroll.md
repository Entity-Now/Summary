# 重写web滚动条

## google浏览器
> webkit

| 属性 | 说明 |
| ----- | ----- |
| ::-webkit-scrollbar | 滚动条整体部分，设置宽度 |
| ::-webkit-scrollbar-button | 滚动条两边的按钮 |
| ::-webkit-scrollbar-track | 外层轨道 |
| ::-webkit-scrollbar-track-piece | 内层滚动槽 |
| ::-webkit-scrollbar-thumb | 边角 |
| ::-webkit-scrollbar-corner | 当同时有垂直滚动条和水平滚动条时交汇的部分。通常是浏览器窗口的右下角。 |
| ::-webkit-resizer | 出现在某些元素底角的可拖动调整大小的滑块 |
```css

/*chrome--------------------------------------------start*/
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: rgb(255, 255, 255);
    border-radius: 8px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(201, 201, 202);
    border-radius: 8px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(162, 162, 163);
  } 
  .el-menu::-webkit-scrollbar,
  .el-table__body-wrapper::-webkit-scrollbar {
    display: none;
  }
  .el-menu:hover::-webkit-scrollbar,
  .el-table__body-wrapper:hover::-webkit-scrollbar {
    display: block;
  }
  /*chrome--------------------------------------------end*/
```

## ie浏览器

| 属性 | 说明 |
| ---- | ---- |
| scrollbar-arrow-color | 三角箭头的颜色 |
| scrollbar-face-color | 滚动条滑块按钮的颜色 |
| scrollbar-highlight-color | 滚动条整体颜色 |
| scrollbar-shadow-color | 滚动条阴影颜色 |
| scrollbar-track-color | 滚动条轨道颜色 |
| scrollbar-3dlight-color | 滚动条3d亮色阴影外边框的外观颜色——左边和上边的阴影色  |
| scrollbar-darkshadow-color | 滚动条3d暗色阴影的外观颜色--右边和下边的阴影色 |
| scrollbar-base-color | 滚动条基准的颜色 |

```css
  /*IE--------------------------------------------start*/
  *{
    /*三角箭头的颜色*/
    scrollbar-arrow-color: #c0c4cc;
    /*滚动条滑块按钮的颜色*/
    scrollbar-face-color: #A2A2A3;
    /*滚动条整体颜色*/
    scrollbar-highlight-color: #A2A2A3;
    /*滚动条阴影*/
    scrollbar-shadow-color: #A2A2A3;
    /*滚动条轨道颜色*/
    scrollbar-track-color: #f4f4f5;
    /*滚动条3d亮色阴影边框的外观颜色——左边和上边的阴影色*/
    scrollbar-3dlight-color:#A2A2A3;
    /*滚动条3d暗色阴影边框的外观颜色——右边和下边的阴影色*/
    scrollbar-darkshadow-color: #A2A2A3;
    /*滚动条基准颜色*/
    scrollbar-base-color: #f4f4f5; 
  }
  .el-table__body-wrapper,.el-menu{
    /*IE下隐藏*/
    -ms-overflow-style:none; 
  }
  
  .el-table__body-wrapper:hover,.el-menu:hover{ 
    /*IE下显示*/
    -ms-overflow-style:auto; 
  } 
  /*IE--------------------------------------------end*/
```