import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";

import flat from "./utils/flat";
import deepClone from "./utils/deep_clone";

const flatArr = flat([[1, 2, 3, [6666, 7777]], 2, 3]);
console.log(flatArr);

deepClone({ [Symbol("a")]: "a" });

ReactDOM.render(
  <React.StrictMode>
    <Layout>new flatArr : {JSON.stringify(flatArr)}</Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
