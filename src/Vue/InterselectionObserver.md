# IntersectionObserver

## 封装vue3指令
```js
const directiveName = "intersection";
const IntersectionDirective = {
    mounted(el, binding){
        const { threshold = 0, enter = null, leave = null } = binding.value;
        const Ob = new IntersectionObserver((entries, observer)=>{
            if(entries[0].isIntersecting){
                enter && enter();
            }else{
                leave && leave();
            }
        },{
            threshold: threshold
        });
        Ob.observe(el);
        el.dataset.observer = Ob;
    },
    unmounted(el){
        const Ob = el.dataset.observer;
        if (Ob) {
            Ob.disconnect();
            delete el.dataset.observer;
        }
    }
}

export default {
    name : directiveName,
    directive : IntersectionDirective
}
```