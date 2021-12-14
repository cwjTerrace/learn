/**
 * 实现一个数组拍平
 */
export default function flat(arr: Array<any>, depth: number = 1): Array<any> {
  // TODO
  const newArr: any[] = [];
  const isArray = (e: any) => Object.prototype.toString.call(e) === "[object Array]";
  console.log("入口数组: ", arr);
  // 递归
  const innerFlat = (tempArr: Array<any>, newDept: number) => {
    if (!isArray(tempArr)) return;
    tempArr.forEach((element) => {
      if (isArray(element) && newDept > 0) {
        innerFlat(element, --newDept);
      } else {
        newArr.push(element);
      }
    });
  };

  innerFlat(arr, depth);

  return newArr;
}
