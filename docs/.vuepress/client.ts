/*
 * @作者: 14770137
 * @Date: 2022-10-23 21:48:49
 */
import {defineClientConfig} from '@vuepress/client'
import Home from './layouts/Home.vue'
import Start from './layouts/Start.vue'

export default defineClientConfig({
    layouts:{
        Home,
        Start
    }
});