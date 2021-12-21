export type Value = string | number | boolean | undefined | null;
export type Mapping = Record<string, unknown>;
export interface ArgumentArray extends Array<Argument> {}
export type Argument = Value | Mapping | ArgumentArray;

export default function (...args: ArgumentArray) {
  console.log(args);
}
