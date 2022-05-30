export default function templateEngine(tpl: string, data: any) {
  const reg = /\{\{([^\}\}]+)?\}\}/g;

  const names = Object.keys(data);
  const vals = Object.values(data);

  tpl = tpl.replace(reg, (_, item) => {
    const res = new Function(...names, `return ${item}`)(...vals);
    return res;
  });

  return tpl;
}
