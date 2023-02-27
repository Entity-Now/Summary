# 设计模式

## 发布订阅模式
```js
class Publisher{
    constructor(){
        this.Subscriber = new Map();
    }
    // 监听
    on(event, callBack){
        this.Subscriber.set(event,callBack);
    }
    // 触发事件
    emit(event){
        this.Subscriber.get(event)();
    }
}
export default Publisher;
```
> run
```js
const publisher = new t();
publisher.on('one',()=>{
    console.log('function one');
});
publisher.on('two',()=>{
    console.log('function two');
});
publisher.emit('two');
```