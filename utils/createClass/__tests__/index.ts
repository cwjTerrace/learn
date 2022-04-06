/* global describe, it */
import * as assert from "assert";
import cls from "..";

const createClass = cls("kc-");

const [prefix, genClass, classNames] = createClass("test", "-");

describe("genClass", function () {
  it("should aaa ", function () {
    assert.equal(prefix, "kc-test");
  });

  it("keeps object keys with truthy values", function () {
    assert.equal(
      genClass({
        a: true,
        b: false,
        c: 0,
        d: null,
        e: undefined,
        f: 1
      }),
      "kc-test-a kc-test-f"
    );
  });

  it("joins arrays of class names and ignore falsy values", function () {
    assert.equal(genClass("a", 0, null, undefined, true, 1, "b"), "kc-test-a kc-test-1 kc-test-b");
  });

  it("supports heterogenous arguments", function () {
    assert.equal(genClass({ a: true }, "b", 0), "kc-test-a kc-test-b");
  });

  it("should be trimmed", function () {
    assert.equal(genClass("", "b", {}, ""), "kc-test-b");
  });

  it("returns an empty string for an empty configuration", function () {
    assert.equal(genClass({}), "");
  });

  it("supports an array of class names", function () {
    assert.equal(genClass(["a", "b"]), "kc-test-a kc-test-b");
  });

  it("joins array arguments with string arguments", function () {
    assert.equal(genClass(["a", "b"], "c"), "kc-test-a kc-test-b kc-test-c");
    assert.equal(genClass("c", ["a", "b"]), "kc-test-c kc-test-a kc-test-b");
  });

  it("handles multiple array arguments", function () {
    assert.equal(genClass(["a", "b"], ["c", "d"]), "kc-test-a kc-test-b kc-test-c kc-test-d");
  });

  it("handles arrays that include falsy and true values", function () {
    assert.equal(genClass(["a", 0, null, undefined, false, true, "b"]), "kc-test-a kc-test-b");
  });

  it("handles arrays that include arrays", function () {
    assert.equal(genClass(["a", ["b", "c"]]), "kc-test-a kc-test-b kc-test-c");
  });

  it("handles arrays that include objects", function () {
    assert.equal(genClass(["a", { b: true, c: false }]), "kc-test-a kc-test-b");
  });

  it("handles deep array recursion", function () {
    assert.equal(genClass(["a", ["b", ["c", { d: true }]]]), "kc-test-a kc-test-b kc-test-c kc-test-d");
  });

  it("handles arrays that are empty", function () {
    assert.equal(genClass("a", []), "kc-test-a");
  });

  it("handles nested arrays that have empty nested arrays", function () {
    assert.equal(genClass("a", [[]]), "kc-test-a");
  });

  // it("handles all types of truthy and falsy property values as expected", function () {
  //   assert.equal(
  //     genClass({
  //       // falsy:
  //       null: null,
  //       emptyString: "",
  //       noNumber: NaN,
  //       zero: 0,
  //       negativeZero: -0,
  //       false: false,
  //       undefined: undefined,

  //       // truthy (literally anything else):
  //       nonEmptyString: "foobar",
  //       whitespace: " ",
  //       function: Object.prototype.toString,
  //       emptyObject: {},
  //       nonEmptyObject: { a: 1, b: 2 },
  //       emptyList: [],
  //       nonEmptyList: [1, 2, 3],
  //       greaterZero: 1
  //     }),
  //     "nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero"
  //   );
  // });

  // it("handles toString() method defined on object", function () {
  //   assert.equal(
  //     genClass({
  //       toString: function () {
  //         return "classFromMethod";
  //       }
  //     }),
  //     "classFromMethod"
  //   );
  // });

  // it("handles toString() method defined inherited in object", function () {
  //   var Class1 = function () {};
  //   var Class2: any = function () {}; // TODO 先给个any顶一下
  //   Class1.prototype.toString = function () {
  //     return "classFromMethod";
  //   };
  //   Class2.prototype = Object.create(Class1.prototype);

  //   assert.equal(genClass(new Class2()), "classFromMethod");
  // });
});

describe("classNames", function () {
  it("keeps object keys with truthy values", function () {
    assert.equal(
      classNames({
        a: true,
        b: false,
        c: 0,
        d: null,
        e: undefined,
        f: 1
      }),
      "a f"
    );
  });

  it("joins arrays of class names and ignore falsy values", function () {
    assert.equal(classNames("a", 0, null, undefined, true, 1, "b"), "a 1 b");
  });

  it("supports heterogenous arguments", function () {
    assert.equal(classNames({ a: true }, "b", 0), "a b");
  });

  it("should be trimmed", function () {
    assert.equal(classNames("", "b", {}, ""), "b");
  });

  it("returns an empty string for an empty configuration", function () {
    assert.equal(classNames({}), "");
  });

  it("supports an array of class names", function () {
    assert.equal(classNames(["a", "b"]), "a b");
  });

  it("joins array arguments with string arguments", function () {
    assert.equal(classNames(["a", "b"], "c"), "a b c");
    assert.equal(classNames("c", ["a", "b"]), "c a b");
  });

  it("handles multiple array arguments", function () {
    assert.equal(classNames(["a", "b"], ["c", "d"]), "a b c d");
  });

  it("handles arrays that include falsy and true values", function () {
    assert.equal(classNames(["a", 0, null, undefined, false, true, "b"]), "a b");
  });

  it("handles arrays that include arrays", function () {
    assert.equal(classNames(["a", ["b", "c"]]), "a b c");
  });

  it("handles arrays that include objects", function () {
    assert.equal(classNames(["a", { b: true, c: false }]), "a b");
  });

  it("handles deep array recursion", function () {
    assert.equal(classNames(["a", ["b", ["c", { d: true }]]]), "a b c d");
  });

  it("handles arrays that are empty", function () {
    assert.equal(classNames("a", []), "a");
  });

  it("handles nested arrays that have empty nested arrays", function () {
    assert.equal(classNames("a", [[]]), "a");
  });

  it("handles all types of truthy and falsy property values as expected", function () {
    assert.equal(
      classNames({
        // falsy:
        null: null,
        emptyString: "",
        noNumber: NaN,
        zero: 0,
        negativeZero: -0,
        false: false,
        undefined: undefined,

        // truthy (literally anything else):
        nonEmptyString: "foobar",
        whitespace: " ",
        function: Object.prototype.toString,
        emptyObject: {},
        nonEmptyObject: { a: 1, b: 2 },
        emptyList: [],
        nonEmptyList: [1, 2, 3],
        greaterZero: 1
      }),
      "nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero"
    );
  });

  // it("handles toString() method defined on object", function () {
  //   assert.equal(
  //     classNames({
  //       toString: function () {
  //         return "classFromMethod";
  //       }
  //     }),
  //     "classFromMethod"
  //   );
  // });

  // it("handles toString() method defined inherited in object", function () {
  //   var Class1 = function () {};
  //   var Class2: any = function () {}; // TODO 先给个any顶一下
  //   Class1.prototype.toString = function () {
  //     return "classFromMethod";
  //   };
  //   Class2.prototype = Object.create(Class1.prototype);

  //   assert.equal(classNames(new Class2()), "classFromMethod");
  // });
});
