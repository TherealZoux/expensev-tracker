import { createApp } from "vue";
import Toast from "vue-toastification";
import "./assets/style.css";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
const app = createApp(App).use(Toast).mount("#app");
