import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layout";

import CodeEditor from "./components/CodeEditor";

import { myPromise } from "@/utils";

import { promiseRecursive } from "@/topic";

promiseRecursive().then((res) => {
  console.log("promiseRecursive", res);
});

new myPromise((resolve, rejects) => {
  console.log(Date.now());
  setTimeout(() => {
    console.log(Date.now());
    resolve("willem");
  }, 2000);
}).then((value) => {
  console.log(value);
});

const root = createRoot(document.getElementById("root")!);
root.render(
  <Layout>
    <CodeEditor color="#333" />
  </Layout>
);
