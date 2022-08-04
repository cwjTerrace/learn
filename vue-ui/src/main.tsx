import { createApp } from "vue";
// import Layout from "./layout/index.vue";
import Layout from "./pages/outing-random.vue";

const app = createApp(Layout);
// app.use(router);
app.mount("#app");

const list = ["TB_TASK_message", "TB_TASK_date", "TB_TASK_Generator", "TB_TASK_Link"];

list.forEach((item) => {
  console.log(item.toUpperCase());
  console.log(item.toLowerCase().replaceAll("_", "-"));
});
