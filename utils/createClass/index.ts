export type Mod = string | number | null | undefined | boolean | { [key: string]: any };
export type Mods = Mod | Mod[];

function gen(name: string, mods: Mods): string[] {
  if (typeof mods === "boolean" || !mods) {
    return [];
  }
  if (typeof mods === "string" || typeof mods === "number") {
    return [`${name}-${mods}`];
  }

  if (Array.isArray(mods)) {
    return mods.reduce<string[]>((ret, item) => ret.concat(gen(name, item)), []);
  }
  return Object.keys(mods).reduce<string[]>((ret, key) => (mods[key] ? ret.concat(gen(name, key)) : ret), []);
}

function classNames(prefixedName: string): (...args: Mods[]) => string {
  return function () {
    const r: string[] = [];
    let i = 0;

    while (i < arguments.length) {
      r.push.apply(r, gen(prefixedName, arguments[i++]));
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
function createClass(name: string) {
  const prefixedName = `kc-${name}`;
  return [prefixedName, classNames(prefixedName)] as const;
}

export default createClass;
