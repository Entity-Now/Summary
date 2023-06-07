# 使用canvas画饼图

您可以使用 js 的 requestAnimationFrame() 方法来添加动画效果。这个方法会在浏览器的下一次重绘之前调用指定的函数，从而实现平滑的动画¹³。要使用这个方法，您需要以下步骤：

- 定义一个变量来存储动画的进度，初始值为 0。
- 定义一个函数来更新饼状图的数据，根据进度变量来计算每个扇形的结束角度。
- 在函数中，使用 requestAnimationFrame() 方法来递归地调用自身，直到进度变量达到 1。
- 在函数中，使用 clearRect() 方法来清除画布上的内容，然后重新绘制饼状图。

例如，以下代码会给上面的饼状图添加一个简单的动画效果：

```js
// 获取 canvas 元素和绘图上下文对象
var canvas = document.getElementById("pie-chart");
var ctx = canvas.getContext("2d");

// 定义饼状图的数据
var data = [
  { value: 40, color: "red", label: "A" },
  { value: 30, color: "green", label: "B" },
  { value: 20, color: "blue", label: "C" },
  { value: 10, color: "yellow", label: "D" }
];

// 计算总和和比例
var total = data.reduce((sum, item) => sum + item.value, 0);
var ratio = data.map(item => item.value / total);

// 定义圆心和半径
var cx = canvas.width / 2;
var cy = canvas.height / 2;
var radius = Math.min(cx, cy) - 10;

// 定义起始角度
var startAngle = -Math.PI / 2;

// 定义动画进度变量
var progress = 0;

// 定义更新饼状图的函数
function updateChart() {
  
   // 清除画布内容 
   ctx.clearRect(0 ,0 ,canvas.width ,canvas.height);

   // 遍历数据，绘制每个扇形 
   for (let i=0; i <data.length; i++) {
     // 计算结束角度（乘以进度变量）
     var endAngle= startAngle +ratio[i] *Math.PI *2 *progress;

     // 设置填充颜色 
     ctx.fillStyle= data[i].color;

     // 开始路径 
     ctx.beginPath();

     // 移动到圆心 
     ctx.moveTo(cx ,cy);

     // 绘制弧线 
     ctx.arc(cx ,cy ,radius ,startAngle ,endAngle);

      // 填充路径 
      ctx.fill();

      // 绘制标签（乘以进度变量）
      var midAngle= (startAngle +endAngle) /2;
      var tx= cx +Math.cos(midAngle) *(radius +10);
      var ty= cy +Math.sin(midAngle) *(radius +10);
      ctx.fillStyle ="black";
      ctx.fillText(data[i].label *progress ,tx ,ty);

       // 更新起始角度为下一个扇形的起始角度 
       startAngle= endAngle;
    }

    // 更新进度变量（增加一点点）
    progress +=0.01;

    // 如果进度变量小于等于1，则继续调用自身 
    if (progress <=1) {
       requestAnimationFrame(updateChart);
    }
}

// 调用更新饼状图的函数
updateChart();
```