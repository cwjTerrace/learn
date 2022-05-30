import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layout";

import SvgDemo from "./pages/svg-demo";

import { deepClone, classnames, myPromise } from "@/utils";

import { promiseRecursive } from "@/topic";

promiseRecursive().then((res) => {
  console.log("promiseRecursive", res);
});

const symbol = Symbol("symbol");
const obj = {
  [symbol]: "symbol",
  symbol: Symbol("symbol"),
  undefined: undefined,
  number: 1,
  string: "string",
  function: () => console.log(1),
  map: new Map([["key", "value"]]),
  set: new Set("1"),
  obj: {
    a: "b",
    b: {
      [symbol]: "symbol",
      undefined: undefined,
      number: 1,
      string: "string",
      function: () => console.log(1)
    }
  },
  arr: ["1", "2", "3"]
};
// 循环引用
// obj.aaa = obj;
const deepCloneObj = deepClone(obj);
console.log("结果:", deepCloneObj, obj.symbol == deepCloneObj.symbol);
const deepCloneObj2: any = {};
Object.assign(deepCloneObj2, obj);
// console.log("结果:", deepCloneObj2, obj.obj.b == deepCloneObj2.obj.b);

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
    <div>{classnames(obj)}</div>
    <SvgDemo color="#333" />
  </Layout>
);
