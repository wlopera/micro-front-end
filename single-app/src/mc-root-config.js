import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import("@single-spa/welcome"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@mc/react-single",
  app: () => System.import("@mc/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@mc/react-multiples",
  app: () => System.import("@mc/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@mc/react-lazy",
  app: () => System.import("@mc/react-lazy"),
  activeWhen: ["/react-lazy"],
});

registerApplication({
  name: "@mc/react-parcel",
  app: () => System.import("@mc/react-parcel"),
  activeWhen: (location) => location.pathname === "/react-parcel",
});

registerApplication({
  name: "@mc/react-route",
  app: () => System.import("@mc/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
});

registerApplication({
  name: "@mc/react-header",
  app: () => System.import("@mc/react-header"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@mc/navbar",
//   app: () => System.import("@mc/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
