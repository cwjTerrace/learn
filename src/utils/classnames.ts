import getType from "./get_type";

export type Value = string | number | boolean | undefined | null;
export type Mapping = Record<string, any>;
export interface ArgumentArray extends Array<Argument> {}
export type Argument = Value | Mapping | ArgumentArray;

const classnames = (...args: ArgumentArray): any => {
  let r: Array<string | number> = [];

  function toArr(...args: ArgumentArray): any {
    args.forEach((e) => {
      if (getType(e) === "Array") {
        const arr = e as ArgumentArray;
        arr.forEach((element) => {
          toArr(element);
        });
      }
      if (getType(e) === "Object") {
        const obj: Mapping = e as Mapping;
        Object.keys(obj).forEach((element) => {
          if (obj[element]) {
            toArr(element);
          }
        });
      }
      if (["String", "Number"].includes(getType(e)!)) {
        r.push(e as string | number);
      }
    });
  }

  toArr(args);

  return r.filter((i) => !!i).join(" ");
};

export default classnames;
