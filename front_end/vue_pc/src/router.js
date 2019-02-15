import Vue from "vue";
import VueRouter from "vue-router";
import config from "../config/index"; // 配置文件

Vue.use(VueRouter);

const myRouter = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  config: config.ROUTER_BASE_PATH,
  routes: []
});

myRouter.addRoutes([
  {
    path: "/",
    redirect: "/index"
  }
]);

myRouter.addRoutes(require("@views/home/router").default); // 首页
export default myRouter;
