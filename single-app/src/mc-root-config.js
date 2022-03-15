import { registerApplication, start } from "single-spa";

fetch("https://run.mocky.io/v3/65b7ebe1-a792-43fa-8b35-cca01ea498f5")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    data.applications.forEach((app) => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen],
      });
    });
  })
  .catch((error) => {
    console.log("##=> Error:", error);
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  });
