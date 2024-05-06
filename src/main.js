import { createApp } from "vue";
import { Swipe, SwipeItem } from "vant";
import "vant/lib/index.css";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).use(Swipe).use(SwipeItem).mount("#app");
