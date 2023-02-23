import getType from "../get-type";
import flat from "../flat";

/**
 * 深拷贝 参考 https://juejin.cn/post/6844903929705136141
 */
export default function deepClone(source: any, hash = new WeakMap()) {
  // 克隆原始类型
  if (!isObject(source)) return source;
  // 防止循环引用
  if (hash.has(source)) return hash.get(source);

  let cloneTarget = ["Object", "Arguments", "Set", "Map", "Array"].includes(getType(source))
    ? new source.constructor()
    : source;
  hash.set(source, cloneTarget);

  if (["Object", "Arguments"].includes(getType(source))) {
    // 解决 symbols无法被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回的问题
    flat([Object.keys(source), Object.getOwnPropertySymbols(source)], Infinity).forEach((key) => {
      cloneTarget[key] = deepClone(source[key], hash);
    });
  }
  if (getType(source) === "Set") {
    source.forEach((e: any) => {
      cloneTarget.add(deepClone(e, hash));
    });
  }
  if (getType(source) === "Map") {
    source.forEach((value: any, key: any) => {
      cloneTarget.set(key, deepClone(value, hash));
    });
  }
  if (getType(source) === "Array") {
    source.forEach((e: any) => {
      cloneTarget.push(deepClone(e, hash));
    });
  }

  if (getType(source) === "Symbol") {
    console.log(22222222, source);
  }

  return cloneTarget;
}

function isObject(target: any) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}
