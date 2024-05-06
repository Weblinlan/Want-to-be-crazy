import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

// vue3:  createApp setup ref reactive toRef toRefs
// vue-router4: createRouter createWebHistory

