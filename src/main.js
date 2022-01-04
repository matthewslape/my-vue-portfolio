import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";

//createApp(App).use(router).mount("#app");

const app = createApp(App).use(router);
const head = createHead();

app.use(head);

app.mount("#app");
