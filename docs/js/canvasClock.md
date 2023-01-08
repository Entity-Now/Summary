# canvas绘制时钟

![clock](/image/img/Clock.png)
```js
    /** @type {HTMLCanvasElement}*/
    var canvas = document.getElementById("dom");
    var ctx = canvas.getContext("2d");
    // clock
    function clock(){
        canvas.height = canvas.height;
        // clip 裁剪（rect，arc等等）
        // clip,裁剪之后的绘制就只能限定在这个范围内
        // 不能使用fillRect StrokeReCT
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'pink';
        ctx.arc(100,100,75,0,10,false);
        ctx.stroke();
        ctx.clip();
        // 裁剪掉的位置无法再绘制
        ctx.fillStyle = 'blue';
        ctx.rect(0,0,300,300);
        ctx.fill();
        // width
        ctx.lineWidth = 5;
        // 绘制时针刻度
        ctx.translate(100,100);
        ctx.save();
        for(let i = 0; i < 12; i++){
            ctx.beginPath();
            ctx.rotate(Math.PI / 6);
            ctx.moveTo(57,0);
            ctx.lineTo(66,0);
            ctx.stroke();
        }
        ctx.restore();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        for(let i = 0; i < 60; i++){
            if(i % 5 != 0){
                ctx.beginPath();
                ctx.moveTo(60,0);
                ctx.lineTo(66,0);
                ctx.stroke();
            }
            ctx.rotate(Math.PI / 30);
        }
        // 运动
        ctx.rotate(new Date().getSeconds() * (Math.PI / 30));
        // 画秒针
        ctx.strokeStyle = 'orange';
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(59,0);
        ctx.stroke();

        //animation
        window.requestAnimationFrame(clock);
    }

    window.requestAnimationFrame(clock);
```