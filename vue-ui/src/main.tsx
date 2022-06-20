import { createApp } from "vue";
import Layout from "./layout/index.vue";

import 'element-plus/dist/index.css'

const app = createApp(Layout);
// app.use(router);
app.mount("#app");
