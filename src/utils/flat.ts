import getType from "./get_type";

/**
 * 实现一个数组拍平
 */
export default function flat(arr: Array<any>, depth: number = 1): Array<any> {
  const newArr: any[] = [];

  console.log("入口数组: ", arr);
  // 递归
  const innerFlat = (tempArr: Array<any>, newDept: number) => {
    if (getType(tempArr) !== "Array") return;
    tempArr.forEach((element) => {
      if (getType(element) === "Array" && newDept > 0) {
        innerFlat(element, --newDept);
      } else {
        newArr.push(element);
      }
    });
  };

  innerFlat(arr, depth);

  return newArr;
}
