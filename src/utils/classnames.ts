import getType from "./get-type";

export type Value = string | number | boolean | undefined | null;
export type Mapping = Record<string, unknown>;
export interface ArgumentArray extends Array<Argument> {}
export type Argument = Value | Mapping | ArgumentArray;

const classnames = (...args: ArgumentArray): string => {
  let r: Array<string | number> = [];

  function toArr(item: Mapping | Value) {
    if (getType(item) === "Object") {
      const obj: Mapping = item as Mapping;
      Object.keys(obj).forEach((element) => {
        if (obj[element]) {
          toArr(element);
        }
      });
    }
    if (item && ["String", "Number"].includes(getType(item))) {
      r.push(item as string | number);
    }
  }
  // 先拍平
  const newArr = args.flat(Infinity);

  newArr.forEach((e) => {
    toArr(e);
  });

  return r.join(" ");
};

export default classnames;
