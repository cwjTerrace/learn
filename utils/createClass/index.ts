export type Mod = string | number | null | undefined | boolean | { [key: string]: any };
export type Mods = Mod | Mod[];

export function classNames(mods: Mods, name?: string): string[] {
  if (typeof mods === "boolean" || !mods) {
    return [];
  }
  if (typeof mods === "string" || typeof mods === "number") {
    return [`${name ? `${name}-` : ""}${mods}`];
  }

  if (Array.isArray(mods)) {
    return mods.reduce<string[]>((ret, item) => ret.concat(classNames(item, name)), []);
  }

  return Object.keys(mods).reduce<string[]>((ret, key) => (mods[key] ? ret.concat(classNames(key, name)) : ret), []);
}

function genClass(prefixedName?: string): (...args: Mods[]) => string {
  return function () {
    const r: string[] = [];
    let i = 0;

    while (i < arguments.length) {
      // eslint-disable-next-line prefer-spread, prefer-rest-params
      r.push.apply(r, classNames(arguments[i++], prefixedName));
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
function createClass(prefixCls?: string) {
  return function (name: string) {
    const prefixedName = `${prefixCls}${name}`;
    return [prefixedName, genClass(prefixedName), genClass()] as const;
  };
}

export default createClass;
