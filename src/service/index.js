import request from "./request";
// 获取首页数据
export const getHomePageData = () => request.get('/homepage/block/page');
// 获取首页菜单图标
export const getDragonball = ()=>request.post("/homepage/dragon/ball")


