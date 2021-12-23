import getType from "./get_type";

export type Value = string | number | boolean | undefined | null;
export type Mapping = Record<string, unknown>;
export interface ArgumentArray extends Array<Argument> {}
export type Argument = Value | Mapping | ArgumentArray;

export default function (...args: ArgumentArray): string {
  console.log(args);
  let r: Array<string> = [];
  args.forEach((e) => {
    if (getType(e) === "Array") {
      r.push(...(e as Array<any>).filter((i) => !!i));
    }
    if (getType(e) === "Object") {
      r.push(...Object.keys(e as Mapping).filter((i) => !!(e as Mapping)[i]));
    }
    if (["String", "Number"].includes(getType(e)!)) {
      r.push(String(e));
    }
  });

  return r.join(" ");
}
