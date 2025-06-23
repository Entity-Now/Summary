# canvas基本操作

```js
// 添加语法提示

/** @type {HTMLCanvasElement} */

// 第一行必须是
var canvas = document.getByIdElement("dom");
var d2d = canvas.getContext("2d");
```

## canvas 操作
```js
// 填充颜色
d2d.fillStyle = "rgb";
// 矩形
d2d.fillRect(y,x,width,height);

```

## 绘制三角形
```js
    // 绘制线条
    // 填充三角形
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(100, 100);
    ctx.lineTo(201, 101);
    ctx.lineTo(302, 102);
    // fill 填充 stroke描边
    ctx.fill();
        // 清屏
    canvas.height = canvas.height;
```

## 绘制线条
```js
    var color = ['LightPink','Crimson','MediumBlue','MediumPink']
    for(let i = 0;i <= 3;i++){
        // 路径宽度
        ctx.lineWidth = 1+i;
        ctx.strokeStyle = color[i]
        ctx.beginPath();
        ctx.moveTo(5+i*14,5);
        ctx.lineTo(5+i*14,140);
        ctx.stroke();
    }
```
![lineWidth](/image/img/lineWidth.png)
## 绘制圆圈
```js 
    // 清屏
    canvas.height = canvas.height;
    ctx.beginPath();
    // x,y,size，star，end，是否反向
    ctx.arc(10,10,10,0,2*Math.PI,false);
    ctx.fill();
    ctx.beginPath();
    // x,y , radius 半径，startAngle endAngle ，bool 是否反向
    ctx.arc(40,40,10,0,2*Math.PI,true);
    ctx.stroke();
```
## 使用线条画正方形
```js            
    // 设置描边颜色
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(20,10);
    ctx.lineTo(20,100);
    ctx.lineTo(100,100);
    ctx.lineTo(100,10);
    ctx.lineTo(20,10);
    ctx.stroke();
```

## LineCap 线条端点的样式
```js
    // cap 线条端点的样式
    var lineCap = [
        'butt', // 正常类型的
        'round', // 圆边的
        'square' // 平方
    ];
    for(let i=0;i<3;i++){
        ctx.lineCap = lineCap[i];
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(25 + i * 20,10);
        ctx.lineTo(25 + i * 20,100);
        ctx.stroke();
    }
```
![LineCap](/image/img/lineCap.png)

## line join
```js
    // lineJoin 线条连接点的样式
    var lineJoin = [
        'round', // 圆
        'bevel', // 斜的
        'miter'  // 斜接
    ]
    ctx.lineWidth = 10;
    for(let i = 0; i < 3; i++){
        ctx.lineJoin = lineJoin[i]
        ctx.beginPath();
        ctx.moveTo(0,5 + i * 100);
        ctx.lineTo(100 ,40 + i * 100);
        ctx.lineTo(200,5 + i * 100);
        ctx.lineTo(300,40 + i * 100);
        ctx.stroke();
    }
```
![linejoin](/image/img/LineJoin.png)

## 蚂蚁线动画，SetLineDash([线条稀疏度，线条间隙]),LineDashOffset = 起始点偏移量
```js
<script>
    /** @type {HTMLCanvasElement}*/
    var canvas = document.getElementById("dom");
    var ctx = canvas.getContext("2d");

    var offset = -4;
    // 虚线 lineDash
    function draw(){
        // 清空画布(矩形)
        ctx.clearRect(0,0,canvas.width,canvas.height);
        // setLineDash（线段数值，间隙数值）
        ctx.setLineDash([10,10]);
        // lineDashOffset 起始偏移量
        ctx.lineDashOffset = -offset;
        ctx.strokeRect(10,10,100,100);
    }
    function march(){
    offset++;
    if(offset > 16){
        offset = 0;
    }
    draw();
    setInterval(march,500);
    }
    march();
</script>
```

## 渐变色 linearGradient（x1,y1,x2,y2）
```js
    // 渐变 createLinearGradient（x1,y1,x2,y2）
    // 径向渐变 createRadialGradient(x1,y1,r1,x2,y2,r2);
    var linear = ctx.createLinearGradient(0,0,300,300);
    linear.addColorStop(0.9,'blue');
    linear.addColorStop(0.1,'red');

    ctx.fillStyle = linear;
    ctx.rect(0,0,300,300);
    ctx.fill();
```
## redialGradient(x1,y1,r1,x2,y2,r2);
```js
    var linear = ctx.createRadialGradient(150,150,30,150,150,15);
    linear.addColorStop(.1,'blue');
    linear.addColorStop(1,'red');

    ctx.fillStyle = linear;
    // ctx.arc(150,150,150,0,2*Math.PI,true);
    ctx.rect(0,0,300,300);
    ctx.fill();
```
![radialGradient](/image/img/radialGradient.png)

## 绘制图案，CreatePattern 
```js
    // pattern 绘制图案
    var img = new Image();
    img.src = "./src/logo.jpg";
    img.onload = function(){
        // create pattern,创建图案
        var Pattern = ctx.createPattern(img,'repeat');
        ctx.fillStyle = Pattern;
        ctx.fillRect(0,0,300,300);
    }
```
![pattern](/image/img/CreatePattern.png)

## 阴影与字体 shadow fillText
```js
    // shadows
    // offset x,y偏移
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    // blur 模糊度
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'red';

    ctx.font = '25px Times New Roman';
    ctx.fillStyle = 'LightPink';
    // 绘制文字
    ctx.fillText('hello world',10,30);
```
![fillText](/image/img/FillText.png)

## 字体
```js
    // fillText
    ctx.font = '48px serif';
    ctx.fillText('hello world',10,50,300);
    // 文本对齐方式
    ctx.textAlign = 'start,end,left,right or center';
    // baseline 基线对齐
    ctx.textBaseline = 'top,hanging,middle,alphaBetic,等等等';
    // 文本朝向
    ctx.direction = 'default=inherit';
    // 文本边框
    ctx.strokeText('你好，世界~',10,120,300);
```
![fillText](/image/img/FillText2.png)

## 测量文本宽度，measureText
```js 
    var test = ctx.measureText('你好，世界~');
    ctx.strokeText(test.width,10,50);
```

## 图片渲染
```js
    // image
    var img = new Image();
    img.src = '/src/logo.jpg';
    img.onload = function(){
        // 绘制图片,drawImage(image,x,y,width,height);
        ctx.drawImage(img,0,0,300,300);

    }
```

## save 与 restore
```js
    // save 保存当前状态（style,alpha,width,cap,join,miterLimit,shadow,color,blur,cont,textAlign,baseLine,direction等等等）
    // store 恢复保存的状态
    ctx.strokeStyle = "red";
    // 保存的状态
    ctx.save();
    ctx.strokeRect(10,10,50,50);
    ctx.strokeStyle = 'pink';
    ctx.strokeRect(10,70,50,50);
    // 把保存的状态恢复
    ctx.restore();
    ctx.strokeRect(70,10,50,50);
```

## translate 移动
```js
ctx.fillStyle = 'red';
// translate 移动
ctx.translate(10,10);
// fillRect 的值可以不用设置
ctx.fillRect(0,0,50,50);
```

## rotate 旋转
```js
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'pink';
    ctx.font="20px Georgia";
    ctx.fillText(`弧度:${65 * Math.PI / 180}`,10,100);
    // rotate 先移动，旋转
    // ctx.translate(125,125);
    ctx.rotate(15 * Math.PI / 180);
    // translate 移动
    ctx.translate(10,10);
    // fillRect 的值可以不用设置
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = 'red';
    ctx.rect(0,0,50,50);
    ctx.fill();
```
![rotate](/image/img/rotate.png)

## 缩放 scale
```js
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'pink';
    // scale 缩放(x,y)
    ctx.scale(2.5,1.5);
    // 原始大小50x50
    ctx.rect(10,10,50,50);
    ctx.fill();
```
![scale](/image/img/scale.png)


## 签名工具
```js
    /** @type {HTMLCanvasElement}*/
    var canvas = document.getElementById("dom");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 10;

    var IsClick = false;
    var startLineY = 0,startLineX = 0;
    canvas.addEventListener('mousedown',function(event){
        // 启动
        IsClick = true;
        startLineY = event.offsetY;
        startLineX = event.offsetX;
    });
    canvas.addEventListener('mouseup',function(event){
        // 关闭
        IsClick = false;
        startLineY = 0;
        startLineX = 0;
    });
    canvas.addEventListener('mouseleave',function(){
        // 关闭
        IsClick = false;
        startLineY = 0;
        startLineX = 0;
    });
    canvas.addEventListener('mousemove',function(event){
        // 绘制
        if(IsClick){
            // 画线
            // ctx.beginPath();
            // ctx.moveTo(startLineX,startLineY);
            // ctx.lineTo(event.offsetX,event.offsetY);
            // ctx.stroke();
            /** 画圆圈 */
            // ctx.beginPath();
            // ctx.arc(event.offsetX,event.offsetY,5,0,Math.PI * 2,false);
            // ctx.fill();
            /** 画线 */
            ctx.beginPath();
            ctx.moveTo(event.offsetX,event.offsetY);
            ctx.lineTo(event.offsetX+1,event.offsetY+1);
            ctx.stroke();
        }
    });
```
![arc](/image/img/arc.png) ![line](/image/img/drawLine.png)

## 签名绘制2.0 
```js
    /** @type {HTMLCanvasElement}*/
    var canvas = document.getElementById("dom");
    var ctx = canvas.getContext("2d");

    ctx.lineWidth = 10;

    var IsClick = false;
    var startLineY = 0,startLineX = 0;
    canvas.addEventListener('mousedown',function(event){
        // 启动
        IsClick = true;
        startLineY = event.offsetY;
        startLineX = event.offsetX;
        // path
        ctx.beginPath();
        ctx.moveTo(event.offsetX,event.offsetY);
    });
    canvas.addEventListener('mouseup',function(event){
        // 关闭
        IsClick = false;
        startLineY = 0;
        startLineX = 0;
    });
    canvas.addEventListener('mouseleave',function(){
        // 关闭
        IsClick = false;
        startLineY = 0;
        startLineX = 0;
    });
    canvas.addEventListener('mousemove',function(event){
        // 绘制
        if(IsClick){
            /** 画线 */
            ctx.lineTo(event.offsetX+1,event.offsetY+1);
            // stroke
            ctx.stroke();
        }
    });
```
![drawLine](/image/img/drawLine_2.png)
