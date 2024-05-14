// vue3 api模块化 （需要什么功能，就导入什么模块）
// vue2中对vue库是全量引用 不能做到按需引用
// vue3几乎兼容所有的vue2语法 平滑的过渡
// vue3推荐组合式API
// vue3干掉了一些
import { createApp } from 'vue'
import * as Vue from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue";
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import './style.css'
// * 轮播导入
import { Swipe, SwipeItem, Image,Icon  } from "vant";
// * 引入组件样式
import "vant/lib/index.css";
import 'ant-design-vue/dist/reset.css';
const app = createApp(App);
// Vue.use(Antd);
// Vue.component("Icon", Icon);
createApp(App).use(router).use(Antd).use(Swipe).use(SwipeItem).use(Image).use(Icon).mount('#app')



/**
 * 自定义组合函数
 * 介绍一下 vue3和vue2 生命周期的对应关系
 !!! 注意！！！ 如果使用async setup 生命周期函数的注册 必须在第一个await语法之前
 * beforeCreate  setup
 * created       setup
 * beforeMount   onBeforeMount
 * mounted       onMounted
 * beforeUpdate  onBeforeUpdate
 * updated       onUpdated
 * beforeDestroy onBeforeUnmount
 * destroyed     onUnmounted
 * Vue3 语法糖 （更加简洁的Vue3语法）
 */





