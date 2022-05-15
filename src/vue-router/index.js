import install from "./src/install";
export default class VueRouter {
  static install = install;
  constructor(routes) {
    this.routes = routes;
  }
}
