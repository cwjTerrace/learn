/* global describe, it */
import * as assert from "assert";
import templateEngine from "..";

describe("template-engine", function () {
  it("basic", function () {
    const msg = "world";
    const result = templateEngine("hello {{msg}}!", { msg });
    assert.equal(result, "hello world!");
  });

  it("has space", function () {
    const msg = "world";
    const result = templateEngine("hello {{msg    }}!", { msg });
    assert.equal(result, "hello world!");
  });

  it("should supports a + b", function () {
    const hello = "hello";
    const world = " world";
    const result = templateEngine("{{hello + world}}!", { hello, world });
    assert.equal(result, "hello world!");
  });

  it("should supports a.b", function () {
    const msg = "world";
    const result = templateEngine("hello {{obj.msg}}!", { obj: { msg } });
    assert.equal(result, "hello world!");
  });

  it("should supports multiple", function () {
    const hello = "hello";
    const world = "world";
    const result = templateEngine("{{hello}} {{world}}!", { hello, world });
    assert.equal(result, "hello world!");
  });
});
