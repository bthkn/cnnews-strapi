import { useRef as o, useEffect as a } from "react";
import { jsx as u } from "react/jsx-runtime";
import { PuzzlePiece as l } from "@strapi/icons";
const c = (n, e, i) => {
  const r = n[e];
  return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((p, s) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      s.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + e + (e.split("/").length !== i ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
}, t = "cnnews", m = ({ setPlugin: n }) => {
  const e = o(n);
  return a(() => {
    e.current(t);
  }, []), null;
}, f = () => /* @__PURE__ */ u(l, {}), P = {
  register(n) {
    n.addMenuLink({
      to: `plugins/${t}`,
      icon: f,
      intlLabel: {
        id: `${t}.plugin.name`,
        defaultMessage: t
      },
      Component: async () => {
        const { App: e } = await import("./App-OWir1XRE.mjs");
        return e;
      }
    }), n.registerPlugin({
      id: t,
      initializer: m,
      isReady: !1,
      name: t
    });
  },
  async registerTrads({ locales: n }) {
    return Promise.all(
      n.map(async (e) => {
        try {
          const { default: i } = await c(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => import("./en-DYxpcVy9.mjs") }), `./translations/${e}.json`, 3);
          return { data: i, locale: e };
        } catch {
          return { data: {}, locale: e };
        }
      })
    );
  }
};
export {
  t as P,
  P as i
};
//# sourceMappingURL=index-B7g6xzp-.mjs.map
