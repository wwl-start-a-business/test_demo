const moduleId = "index";
let modules = {};
modules["index"] = resolve => {
  require.ensure(
    [],
    () => {
      resolve(require("./index"));
    },
    "index"
  );
};
let routerArr = {
  index: {}
};

let routes = [];
for (let k in routerArr) {
  let meta = routerArr[k] || {};
  let cRouter = {
    path: `/${k}`,
    name: `/${k}`,
    component: modules[k],
    meta: meta
  };
  routes.push(cRouter);
}
export default routes;
