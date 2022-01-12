import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";

import { flat, deepClone, classnames, myPromise } from "@/utils";

import { promiseRecursive } from "@/topic";

promiseRecursive().then((res) => {
  console.log("promiseRecursive", res);
});

const flatArr = flat([[1, 2, 3, , , [6666, 7777]], [2], 3]);
console.log("结果:", flatArr);
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

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <div>new flatArr : {JSON.stringify(flatArr)}</div>
      <div>{classnames(obj)}</div>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);