import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";
import BalmUI from "balm-ui"; // Official Google Material Components
import "balm-ui/dist/balm-ui.css";

//mounting
const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);
app.use(BalmUI);

app.mount("#app");
