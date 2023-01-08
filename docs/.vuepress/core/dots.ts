/*
 * @作者: 14770137
 * @Date: 2022-10-25 19:02:38
 */
/** 点与线连接动画 */
interface DotsCoordinate{
    y:number;
    x:number;
    /** 圆的半径 */
    r:number;
    /** 点移动的坐标 */
    moveY:number;
    moveX:number;
}
export default class dots{
    dom:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    width:number;
    height:number;
    size:number;
    /** 点之间的距离 */
    length:number;
    /** 是否在鼠标附近 */
    mouseDot:boolean;
    dots:Array<DotsCoordinate>;
    constructor(_dom:HTMLCanvasElement,{clientWidth,clientHeight},_size:number = 100){
        this.dom = _dom;
        this.ctx = _dom.getContext('2d') as CanvasRenderingContext2D;
        this.width = clientWidth;
        this.height = clientHeight;
        this.size = _size;
        this.length = 100;
        this.mouseDot = false;
        // 初始化坐标
        this.dots = Array.from(new Array<DotsCoordinate>(_size),item=>this.getDot());

        this.resize({clientWidth,clientHeight});
        // 初始化背景
        this.init();
    }
    getDot():DotsCoordinate{
        return {
            x : Math.random() * this.width,
            y : Math.random() * this.height,
            r : 1,
            moveX: Math.random() * 1,
            moveY: Math.random() * 1
        }
    }
    /** 重置canvas的画布大小 */
    resize({clientWidth,clientHeight}){
        this.dom.width = clientWidth;
        this.dom.height = clientHeight;
    }
    init(){
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0,0,this.width,this.height);
        this.ctx.fillStyle = 'white';
        // 鼠标事件
        this.dom.addEventListener('mousemove',(e)=>{
            this.dots[0] ={
                x:e.clientX,
                y:e.clientY,
                r:1,
                moveX:0,
                moveY:0
            }
        });
        this.dom.addEventListener('mouseleave',()=>{
            this.dots[0] = this.getDot()
        });
        // 渲染
        this.move();
    }
    /** 绘制点 */
    renderDots(x:number,y:number,r:number){
        // render
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.arc(x,y,r,0,Math.PI * 2,false);
        this.ctx.fill();
    }
    move(){
        this.ctx.clearRect(0,0,this.width,this.height);
        this.dots.forEach(item=>{
            this.dots.forEach(J=>{
                // 渲染线
                let tempY = J.y - item.y;
                let tempX = J.x - item.x;
                let s = Math.sqrt(Math.pow(tempX,2) + Math.pow(tempY,2));
                if(s < this.length){
                    this.ctx.beginPath();
                    this.ctx.moveTo(item.x,item.y);
                    this.ctx.lineTo(J.x,J.y);
                    this.ctx.strokeStyle = `rgba(255,255,255,${(this.length - s) / this.length})`;
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
            })
            let x = item.x + item.moveX;
            let y = item.y + item.moveY;
            item.x = x >= this.width ? item.x + ~item.moveX : x;
            item.y = y >= this.height ? item.y + ~item.moveY : y;
            // 渲染点
            this.renderDots(item.x,item.y,item.r);
        });
        requestAnimationFrame(()=>this.move());
    }
}