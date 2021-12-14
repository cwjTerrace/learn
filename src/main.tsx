import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";

import flat from "./utils/flat";
import deepClone from "./utils/deep_clone";

const flatArr = flat([[1, 2, 3, , , [6666, 7777]], 2, 3]);
console.log("结果:", flatArr);
const symbol = Symbol("symbol");
const obj = {
  [symbol]: "symbol",
  undefined: undefined,
  number: 1,
  string: "string",
  function: () => console.log(1),
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
console.log(obj[symbol]);
const deepCloneObj = deepClone(obj);
console.log("结果:", deepCloneObj, obj.function == deepCloneObj.function);
const deepCloneObj2: any = {};
Object.assign(deepCloneObj2, obj);
console.log("结果:", deepCloneObj2, obj.obj.b == deepCloneObj2.obj.b);

ReactDOM.render(
  <React.StrictMode>
    <Layout>new flatArr : {JSON.stringify(flatArr)}</Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
