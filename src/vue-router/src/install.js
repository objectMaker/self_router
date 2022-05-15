import routerLink from "./router-link";
import routerView from "./router-view";
export default function install(Vue) {
  //注册全局组件
  routerLink(Vue);
  routerView(Vue);
}
