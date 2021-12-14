/**
 * 实现一个神拷贝
 */
const isType = (o: any, type: string) => Object.prototype.toString.call(o) === `[object ${type}]`;
export default function deepClone(obj: any) {
  if (isType(obj, "Object")) {
    const newObj: any = {};
    Object.keys(obj).forEach((key) => {
      newObj[key] = deepClone(obj[key]);
      console.log(obj[key]);
    });
    return newObj;
  }

  if (isType(obj, "Array")) {
    const newArray: any[] = [];
    obj.forEach((e: any) => {
      newArray.push(e);
    });
    return newArray;
  }

  return obj;
}
