/*
 * @作者: 14770137
 * @Date: 2022-10-22 02:11:51
 */
interface IColors{
    y:number;
    x:number;
    step:number;
}
class snowflake{
    ctx:CanvasRenderingContext2D;
    img:HTMLImageElement;
    width:number;
    height:number;
    Colors:Array<IColors>;
    constructor(_canvas:HTMLCanvasElement, _background:string, _width:number, _height:number){
        this.ctx = _canvas.getContext('2d') as CanvasRenderingContext2D;
        this.width = _width;
        this.height = _height;
        // 生成200个雪花
        this.Colors = Array.from(new Array<IColors>(200),x=>{
            return {
                x : Math.random() * this.width,
                y : Math.random() * this.height,
                step : Math.random() * 2.5
            }
        });
        // 绘制初始背景
        this.img = new Image();
        this.img.src = _background;
        this.img.onload = ()=>{
            this.drawBack();
        
            this.render();
        }
        
    }
    render(){
        this.drawBack();
        this.ctx.fillStyle = 'white';
        this.Colors.forEach(item=>{
            item.y = item.y > this.height ? 0 : item.y + item.step;
            this.ctx.beginPath();
            this.ctx.arc(item.x,item.y,item.step,0,Math.PI * 2,true);
            this.ctx.fill();
        })
        requestAnimationFrame(()=>this.render());
    }
    drawBack(){
        this.ctx.drawImage(this.img,0,0,this.width,this.height);
    }
    resize({Width,Height}:{Width:number,Height:number}){
        // 改变尺寸之前先清空画布
        this.ctx.clearRect(0,0,this.width,this.height);
        this.height = Height;
        this.width = Width;
        this.drawBack();
    }
}
export default snowflake;