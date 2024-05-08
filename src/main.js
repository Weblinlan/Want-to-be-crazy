// vue3 api模块化 （需要什么功能，就导入什么模块）
// vue2中对vue库是全量引用 不能做到按需引用
// vue3几乎兼容所有的vue2语法 平滑的过渡
// vue3推荐组合式API
// vue3干掉了一些
import { createApp } from 'vue'
import * as Vue from 'vue'
// console.log('Vue：',Vue);
import App from './App.vue'
import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
// import { Icon } from "@iconify/vue2";
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import './style.css'
// * 轮播导入
import { Swipe, SwipeItem, Image } from "vant";
// * 引入组件样式
import "vant/lib/index.css";

// Vue.use(Antd);
// Vue.component("Icon", Icon);        

createApp(App).use(router).use(Swipe).use(SwipeItem).use(Image).mount('#app')
