let VERSION = "1.0.0";
let WORK_ENV = ""; // 运行的环境

if (location.port > 80) {
  WORK_ENV = "dev";
} else if (location.host.indexOf("test.") > -1) {
  WORK_ENV = "test";
} else {
  WORK_ENV = "pro";
}
console.info("运行环境：", WORK_ENV);

const api = {
  dev: "/api", // 开发环境使用api 接口标识 代理跨域问题
  test: "", //http://test.essaybot.com
  pro: "" //https://www.essaybot.com
};
const APP_CONFIG = {};
// 版本号
APP_CONFIG.version = VERSION;
// 应用名称
APP_CONFIG.appName = "weiyan.cn";
// 路由的根路径
APP_CONFIG.ROUTER_BASE_PATH = "/";
// 接口地址
APP_CONFIG.api = api[WORK_ENV] || "";

// 接口公共码
APP_CONFIG.apiCode = {
  SUCCESS: 0, // 成功
  USER_NOT_LOGIN: 555 // 需要登录
};

export default APP_CONFIG;
