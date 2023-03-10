import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { gsap } from "gsap";
createApp(App).use(router).use(gsap).mount("#app");
