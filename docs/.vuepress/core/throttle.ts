/*
 * @作者: 14770137
 * @Date: 2022-10-24 17:45:10
 */
/** 节流 */

class throttle{
    timer:number;
    status:boolean;
    /** 间隔时长 */
    constructor(_timer:number){
        this.timer = _timer;
        this.status = true;
    }
    run(func:()=>void){
        if(this.status){
            this.status = false;
            func();
            setTimeout(()=>{
                this.status = true;
            },this.timer);
        }
    }
}

export default throttle;