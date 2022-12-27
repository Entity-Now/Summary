# pinia 全局状态共享

## 安装pinia
```sh
npm install pinia
```

## vue
```js
import { createPinia } from 'pinia'

vue.use(createPinia());
```

## 使用store
```js
import { defineStore } from 'pinia'

// 按照规定应该以use开头 use...
// 第一个参数是store的唯一id
export const useStore = defineStore('main',{
    state : ()={
        return{
            // 所有这些属性都将自动推断其类型
            count:0
        }
    }
});

```
> 访问刚才定义的store
```js
import { useStore } from 'useStore';
export default defineComponent({
    setup(){
        // 不能这样会失去响应式属性
        const data = useStore();
        // 应该这样
        const { count } = useStore();
    }
})
```

### 访问store
```js
const store = useStore();
store.$reset();
```

### 改变状态
```js
const store = useStore();
store.count++;
// 除了直接使用count++ ，您还可以使用$patch方法
store.$patch({
    count : 1
});
```
> 但是，使用这种语法应用某些突变非常困难或代价高昂：任何集合修改（例如，从数组中推送、删除、拼接元素）都需要您创建一个新集合。 正因为如此，$patch 方法也接受一个函数来批量修改集合内部分对象的情况：

```js
store.$patch((state)=>{
    state.count = 1;
    state.hasChanged = true;
});
```

### 替换state
```js
store.$state = {count : 999};
```
> 还可以通过更改pinia实例的state来替换应用程序的整个状态

```js
pinia.state.value = {count : 999};
```

### 订阅状态
> 可以通过store的$subscribe() 方法查看状态及变化

```js
store.$subscribe((mutation, state)=>{
    mutation.type // 'direct' | 'patch object' | 'patch function'
    // 与Store.$id相同
    mutation.storeId // 'main'

    // 当他发生变化时，将整个状态持久化到本地存储
    localStorage.setItem('main',JSON.stringify(state));
});
```
> 默认情况下，state subscriptions 绑定到添加它们的组件（如果 store 位于组件的 setup() 中）。 意思是，当组件被卸载时，它们将被自动删除。 如果要在卸载组件后保留它们，请将 { detached: true } 作为第二个参数传递给 detach 当前组件的 state subscription：

```js
export default {
  setup() {
    const someStore = useSomeStore()

    // 此订阅将在组件卸载后保留
    someStore.$subscribe(callback, { detached: true })

    // ...
  },
}
```

:::tip
您可以在 pinia 实例上查看整个状态：
```js
watch(
  pinia.state,
  (state) => {
    // 每当它发生变化时，将整个状态持久化到本地存储
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
```
:::

## storeToRefs
```js
import { useStore } from 'useStore'
import { storeToRefs } from 'pinia'
const { count } = storeToRefs(useStore());
```

## Getters 
```js
export const useStore = defineStore('main',{
    state:()=>({
        counter: 0
    }),
    getters:{
        GetCounter : (state)=>state.counter * 2
    }
});
```

## action 相当于组件中的methods。
```js
import { defineStore } from 'pinia';

const useStore = defineStore('main',{
    state:()=>({
        counter: 0
    }),
    actions: {
        increment(){
            this.counter++;
        }
    }
});
```

### 使用 setup()
```js
import { useStore } from 'useStore';

export default {
    setup(){
        const data = useStore();
        data.increment();
    }
}
```

### 使用 setup()
```js
import { useStore } from 'useStore';

export default {
    setup(){
        const data = useStore();
        
        return {
            data
        }
    },
    methods: {
        incrementAndPoint(){
            data.increment();
            console.log(`New Counter: ${data.counter}`);
        }
    }
}
```

### 不使用setup
#### mapActions
> 通过生成一个传递到组件的 methods 字段的对象， 允许直接使用 store 的 action，而不需要使用组合式 API(setup())。 该对象的值是 action， 而键是产生的方法名称。

```js
import { mapActions } from 'pinia'
import { useStore } from 'useStore';

export default{
    methods:{
        ...mapActions(useStore,['increment']),
        ...mapActions(useStore,{NewIncrement: 'increment'}),
    },
    create(){
        this.increment();
        this.NewIncrement();
    }
}
```

### 订阅Actions
> 可以使用 store.$onAction() 订阅 action 及其结果。 传递给它的回调在 action 之前执行。 after 处理 Promise 并允许您在 action 完成后执行函数。 以类似的方式，onError 允许您在处理中抛出错误。 这些对于在运行时跟踪错误很有用，类似于 Vue 文档中的这个提示。

>这是一个在运行 action 之前和它们 resolve/reject 之后记录的示例。

```js
const unsubscribe = someStore.$onAction(
  ({
    name, // action 的名字
    store, // store 实例
    args, // 调用这个 action 的参数
    after, // 在这个 action 执行完毕之后，执行这个函数
    onError, // 在这个 action 抛出异常的时候，执行这个函数
  }) => {
    // 记录开始的时间变量
    const startTime = Date.now()
    // 这将在 `store` 上的操作执行之前触发
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // 如果 action 成功并且完全运行后，after 将触发。
    // 它将等待任何返回的 promise
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // 如果 action 抛出或返回 Promise.reject ，onError 将触发
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// 手动移除订阅
unsubscribe()
```

## 持久化存储
### 安装pinia-plugin-persistedstate
```sh
npm install pinia-plugin-persistedstate
```

### vue.use()
```js
import {
	createSSRApp
} from "vue";
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	const pinia = createPinia();
    // 设置全局配置
	pinia.use(createPersistedState({
		storage:{
			setItem:(key, value)=>uni.setStorageSync(key, value),
			getItem: (key)=>uni.getStorageSync(key),
			clear:()=>uni.clearStorageSync()
		}
	}));
	app.use(pinia);
	return {
		app,
	};
}

```

### persistedstate config
```js
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    save: {
      me: 'saved',
      notMe: 'not-saved',
      list:[
        {a:'12134'},
        {a:'12134'},
        {a:'12134'},
      ]
    },
    saveMeToo: 'saved',
  }),
  persist: {
    // 键值
    key:'pinia_main',
    // 表示需要保存的节点，表示不保留任何状态，或表示保留整个状态
    // 若要存储数组的所有元素，请使用表示法‘【】’
    paths: ['save.me', 'saveMeToo','list.[].a'],
  },
})
```