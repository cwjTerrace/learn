import getType from "../get-type";
import flat from "../flat";

/**
 * 深拷贝
 */

export default function deepClone(source: any, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source); // 新增代码，查哈希表

  let cloneTarget = (["Object", "Arguments", "Set", "Map", "Array"] as Array<string | null>).includes(getType(source))
    ? new source.constructor()
    : source;
  hash.set(source, cloneTarget);

  if ((["Object", "Arguments"] as Array<string | null>).includes(getType(source))) {
    // 解决 symbols无法被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回的问题
    flat([Object.keys(source), Object.getOwnPropertySymbols(source)]).forEach((key) => {
      cloneTarget[key] = deepClone(source[key]);
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
