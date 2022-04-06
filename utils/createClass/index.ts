export type Mod = string | number | null | undefined | boolean | { [key: string]: any };
export type Mods = Mod | Mod[];

export function classNames(mods: Mods, name?: string, connect?: string): string[] {
  if (typeof mods === "boolean" || !mods) {
    return [];
  }
  if (typeof mods === "string" || typeof mods === "number") {
    return [`${`${name || ""}`}${`${connect || ""}`}${mods}`];
  }

  if (Array.isArray(mods)) {
    return mods.reduce<string[]>((ret, item) => ret.concat(classNames(item, name, connect)), []);
  }

  return Object.keys(mods).reduce<string[]>(
    (ret, key) => (mods[key] ? ret.concat(classNames(key, name, connect)) : ret),
    []
  );
}

function genClass(prefixedName?: string, connect?: string): (...args: Mods[]) => string {
  return function () {
    const r: string[] = [];
    let i = 0;

    while (i < arguments.length) {
      r.push.apply(r, classNames(arguments[i++], prefixedName, connect));
    }

    return r.join(" ");
  };
}

/**
 * classNames helper
 * c('text') // 'button-text'
 * c({ disabled }) // 'button-disabled'
 * c(['disabled', 'primary']) // 'button-disabled button-primary'
 */
function createClass(prefixCls?: string, baseConnect?: string) {
  return function (name?: string, connect?: string) {
    const prefixedName = `${prefixCls || ""}${name || ""}`;
    return [prefixedName, genClass(prefixedName, connect || baseConnect), genClass()] as const;
  };
}

export default createClass;
