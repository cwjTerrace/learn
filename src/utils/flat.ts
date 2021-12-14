/**
 * 实现一个数组拍平
 */

export default function flat(arr: any[], dept = 1) {
  // TODO
  const newArr: any[] = [];
  // 递归
  const innerFlat = (tempArr: any[], newDept: number) => {
    tempArr.forEach((element) => {
      if (Array.isArray(element) && newDept > 0) {
        innerFlat(element, --newDept);
      } else {
        newArr.push(element);
      }
    });
  };

  innerFlat(arr, dept);

  return newArr;
}
