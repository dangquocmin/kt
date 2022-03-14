import { createApp } from "vue";
import App from "./App.vue";
import router from "./index.js";
import { ValidatorInstaller } from "@progress/kendo-validator-vue-wrapper";

createApp(App).use(router).use(ValidatorInstaller).mount("#app");
