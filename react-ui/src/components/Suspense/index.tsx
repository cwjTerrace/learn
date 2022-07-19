import { Suspense, memo, ReactNode, useState } from "react";

interface IProps {
  children?: ReactNode;
}

const useTestState = () => {
  const [state, setState] = useState("哈哈哈");

  setTimeout(() => {
    setState("哦哦哦");
  }, 3 * 1000);

  return state;
};

function MemoTest(props: IProps) {
  const memoState = useTestState();

  return (
    <Suspense fallback={"loading...."}>
      <div>{memoState}</div>
    </Suspense>
  );
}

export default memo(MemoTest);
