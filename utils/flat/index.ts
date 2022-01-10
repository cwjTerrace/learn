import getType from "../get-type";

/**
 * 数组拍平
 */
export default function flat(arr: Array<any>, depth: number = 1): Array<any> {
  const newArr: any[] = [];
  // 递归
  const innerFlat = (tempArr: Array<any>, newDept: number) => {
    if (getType(tempArr) !== "Array") return;
    tempArr.forEach((element) => {
      if (getType(element) === "Array" && newDept > 0) {
        innerFlat(element, newDept - 1);
      } else {
        newArr.push(element);
      }
    });
  };

  innerFlat(arr, depth);

  return newArr;
}
