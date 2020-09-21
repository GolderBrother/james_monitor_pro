import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import Vue from "vue";
import App from "./App.vue";

Sentry.init({
  dsn: "http://f41675a189f544fda802a8b3f62dca31@localhost:9000/2",
  // integrations: [
  //   new VueIntegration({ Vue, tracing: true }),
  //   new Integrations.BrowserTracing(),
  // ],
  tracesSampleRate: 1,
  integrations: [
    new VueIntegration({ Vue, attachProps: true, logErrors: true }),
  ],
  release: "pro@1.0.0",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
