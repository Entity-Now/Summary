/*
 * @作者: 14770137
 * @Date: 2022-10-18 22:47:26
 */
import {defineClientConfig} from '@vuepress/client'
import Index from './layouts/index.vue'

export default defineClientConfig({
    // 可以添加各种功能
    enhance({app,router,siteData}) {
        // 
    },
    layouts:{
        Index
    }
});