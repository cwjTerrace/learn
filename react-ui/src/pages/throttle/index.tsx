import { useCallback, useEffect, useMemo, useState } from "react";
import throttle from "lodash/throttle";

function Demo() {
  const throttleFn = throttle(() => {
    console.log("没有重渲染demo 直接使用");
  }, 2000);

  return useMemo(
    () => (
      <div>
        没有重渲染 demo
        <br />
        <button onClick={throttleFn}>防抖生效</button>
      </div>
    ),
    []
  );
}

function ThrottlePage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => setCount((c) => c + 1), 100);
  }, []);

  const throttleFn = throttle(
    useCallback(() => {
      console.log("直接使用，哈哈哈");
    }, []),
    2000
  );

  const setCountCallback = useCallback(() => {
    console.log("存起来使用，哈哈哈");
  }, []);

  const throttleCallbackFn = useMemo(() => {
    return throttle(setCountCallback, 2000);
  }, [setCountCallback]);

  return (
    <div className="throttle-page">
      <div>{count}</div>
      <br />
      <button onClick={throttleFn}>防抖不生效</button>
      <br />
      <button onClick={throttleCallbackFn}>防抖生效</button>
      <br />
      <br />
      <Demo />
    </div>
  );
}

export default ThrottlePage;
