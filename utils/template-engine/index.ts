export default function TemplateEngine(tpl: string) {
  const reg = /{{.*}}/g;
  reg.exec(tpl)
  return "";
}

TemplateEngine("helle {{msg}}!");
