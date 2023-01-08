/*
 * @作者: 14770137
 * @Date: 2022-10-25 22:27:53
 */

interface Coordinate{
    x:number;
    y:number;
}
export default class BaseCanvas{
    dom:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    count:number;
    /** 点之间的距离 */
    length:number;
    dots:Array<RenderDot>;
    Mouse:Coordinate | undefined;
    constructor(_dom:HTMLCanvasElement,{clientWidth,clientHeight},_count:number = 50){
        this.dom = _dom;
        this.ctx = _dom.getContext('2d') as CanvasRenderingContext2D;
        this.count = _count;
        this.length = 150;
        // 初始化
        this.resize({clientWidth,clientHeight});
        this.dots = Array.from(new Array(this.count),item=>{
            return new RenderDot(this.dom);
        });
        this.dom.addEventListener('mousemove',(e)=>this.Mouse = {x:e.offsetX,y:e.offsetY});
        this.dom.addEventListener('mouseleave',(e)=>this.Mouse = undefined);
        // 调用
        this.run();
    }
    /** 重置canvas的画布大小 */
    resize({clientWidth,clientHeight}){
        this.dom.width = clientWidth;
        this.dom.height = clientHeight;
    }
    run(){
        this.ctx.clearRect(0,0,this.dom.width,this.dom.height);

        this.dots.forEach(x=>{
            this.dots.forEach(j=>{

                // 渲染线条
                let tempY = x.y - j.y;
                let tempX = x.x - j.x;
                let s = Math.sqrt(Math.pow(tempX,2) + Math.pow(tempY,2));
                if(s < this.length){
                    this.ctx.beginPath();
                    this.ctx.moveTo(x.x,x.y);
                    this.ctx.lineTo(j.x,j.y);
                    this.ctx.strokeStyle = `rgba(255,255,255,${(this.length - s) / this.length})`;
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
                // 鼠标坐标
                if(this.Mouse !== undefined){
                    let distance = Math.sqrt(Math.pow((j.y - this.Mouse.y),2) + Math.pow(j.x - this.Mouse.x,2));

                    // if((distance) < (this.length)){
                    //     // 绘制点与鼠标连接的线条
                    //     this.ctx.beginPath();
                    //     this.ctx.moveTo(j.x,j.y);
                    //     this.ctx.lineTo(this.Mouse.x,this.Mouse.y);
                    //     this.ctx.strokeStyle = `rgba(255,255,255,1)`;
                    //     this.ctx.stroke();
                    //     this.ctx.closePath();
                    // }else if((distance) - (this.length) < this.length / 10){
                    //     // 吸引附近的线条
                    //     j.y += j.directionY + Math.random() * 1;
                    //     j.x += j.directionX + Math.random() * 1;
                    // }
                }
            })
            // 渲染点
            x.move();
        });
        requestAnimationFrame(()=>this.run());
    }
}
class RenderDot{
    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    x:number;
    y:number;
    directionX:number;
    directionY:number;
    /** 是否在鼠标附近 */
    mouseDot:boolean;
    constructor(_Canvas:HTMLCanvasElement){
        this.canvas = _Canvas;
        this.ctx = _Canvas.getContext('2d') as CanvasRenderingContext2D;
        this.mouseDot = false;
        this.init();
    }
    init(){
        this.x =Math.random() * this.canvas.width;
        this.y =Math.random() * this.canvas.height;
        this.directionX = this.mouseDot ? 0 : Math.random() * 4 - 2;
        this.directionY = this.mouseDot ? 0 : Math.random() * 4 - 2;
        this.render();
    }
    render(){
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,1,0,Math.PI * 2,false);
        this.ctx.fill();
        this.ctx.closePath();
    }
    move(){
        // if(this.mouseDot) return;
        if(this.x > this.canvas.width || this.x < 0){
            this.directionX = -this.directionX;
        }
        if(this.y > this.canvas.height || this.y < 0){
            this.directionY = -this.directionY;
        }
        this.x -= this.directionX;
        this.y -= this.directionY;
        this.render();
    }
}