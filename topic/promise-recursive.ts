/**
 * 异步查询接口数据，直到状态非checking，查询完成
 * 要求：
 * 初始化立即查询一次，请求完成后每1s查询一次，5s没有结果抛出超时。
 */
const poll: () => Promise<"completed" | "error" | "timeout"> = async () => {
  // TODO
  return "error";
};

type Status = "checking" | "completed" | "error";

/**
 * 服务端接口 最长1.6返回结果 无需关心内部实现
 */
function requestStatus(): Promise<Status> {
  const random = Math.floor(Math.random() * 8);
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = weightRandom({ checking: 6, completed: 2, error: 1 });
      resolve(res);
    }, random * 200);
  });
}

/** --------------  其他工具函数 无需关心 -------------- */

/**
 * 加权随机数
 * @param weightObj
 * @returns
 */
function weightRandom<T extends string>(weightObj: Record<T, number>): T {
  // 获取权重值
  let weightNumbers: number[] = Object.values(weightObj);
  // 权重值总和
  const sum = weightNumbers.reduce((total, current) => total + current);
  // 获取一个随机数
  let random = getRandomInt(1, sum + 1);
  const keys = Object.keys(weightObj);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index] as T;
    const value = weightObj[key];
    if (random <= value) {
      return key;
    }
    random = random - value;
  }
  return "" as T;
}
/**
 *
 * @param min 最小值
 * @param max 最大值
 * @returns 随机数
 */
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

/**
 * 测试是否通过
 */
Promise.all(
  new Array(100).fill(1).map(async () => {
    const time = performance.now();
    const res = await poll();
    return {
      result: res,
      time: (performance.now() - time) / 1000
    };
  })
).then((pollRestus) => {
  pollRestus.forEach((item) => {
    if (!["completed", "error", "timeout"].includes(item.result)) {
      throw new Error(`tests failed! shoud get "completed" | "error" | "timeout", but got ${JSON.stringify(item)}`);
    }
  });
  console.info("Congratulations! tests passed");
});

export default poll;

/**
const poll: () => Promise<"completed" | "error" | "timeout"> = async () => {
  const maxTime = 5000;
  const time = performance.now();

  const getStatus: () => Promise<"completed" | "error" | "timeout"> = async () => {
    // 超时
    if (performance.now() - time > maxTime) {
      return "timeout";
    }
    const res = await requestStatus();
    // 非checking状态停止轮训
    if (res !== "checking") {
      return res;
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getStatus());
      }, 1000);
    });
  };
  return getStatus();
};
 */
