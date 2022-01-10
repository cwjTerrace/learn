/* global describe, it */
import * as assert from "assert";
import flat from "..";

describe("flat", function () {
  it("empty array width empty array", function () {
    assert.deepEqual(flat([]), []);
  });
  it("one depth", function () {
    assert.deepEqual(flat([1, 2, 3]), [1, 2, 3]);
  });
  it("two depth", function () {
    assert.deepEqual(flat([1, 2, 3, , , [6666, 7777], [2], 3]), [1, 2, 3, 6666, 7777, 2, 3]);
  });
  it("n depth", function () {
    assert.deepEqual(flat([[1, 2, 3, [6666, 7777]], [2], 3]), [1, 2, 3, [6666, 7777], 2, 3]);
  });

  it("n depth width max depth", function () {
    assert.deepEqual(flat([[1, 2, 3, [6666, 7777]], [2], 3], Infinity), [1, 2, 3, 6666, 7777, 2, 3]);
  });
});
