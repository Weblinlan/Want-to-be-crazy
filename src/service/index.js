import request from "./request";

export const getHomePageData = () => request.get("/homepage/block/page");
export const getDragonball = () => request.post("/homepage/dragon/ball");

