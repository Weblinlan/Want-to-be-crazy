import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes'


// createRouter：创建路由实例
const router = createRouter({
    routes,
    history:createWebHistory(),
})

export default router;