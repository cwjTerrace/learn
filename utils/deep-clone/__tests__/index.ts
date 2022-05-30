/* global describe, it */
import * as assert from "assert";
import deepClone from "..";

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

describe("deepClone", function () {
  it("deep clone basic", function () {
    const deepCloneObj = deepClone(obj);
    assert.deepEqual(obj, deepCloneObj);
  });

  it("循环引用", function () {
    // @ts-ignore 循环引用
    obj.aaa = obj;
    const deepCloneObj = deepClone(obj);
    assert.deepEqual(obj, deepCloneObj);
  });
});
