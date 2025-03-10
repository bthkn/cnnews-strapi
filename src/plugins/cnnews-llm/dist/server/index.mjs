const s = ({ strapi: e }) => {
}, o = ({ strapi: e }) => {
}, c = ({ strapi: e }) => {
}, n = {
  default: {},
  validator() {
  }
}, r = {}, i = ({ strapi: e }) => ({
  index(t) {
    t.body = e.plugin("cnnews-llm").service("service").getWelcomeMessage();
  }
}), l = {
  controller: i
}, a = {}, d = {}, p = [
  {
    method: "GET",
    path: "/",
    // name of the controller file & the method.
    handler: "controller.index",
    config: {
      policies: []
    }
  }
], g = ({ strapi: e }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  }
}), m = {
  service: g
}, u = {
  register: c,
  bootstrap: s,
  destroy: o,
  config: n,
  controllers: l,
  routes: p,
  services: m,
  contentTypes: r,
  policies: d,
  middlewares: a
};
export {
  u as default
};
//# sourceMappingURL=index.mjs.map
