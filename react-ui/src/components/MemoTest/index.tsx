import { CSSProperties, memo, useState } from "react";

interface IProps {
  style?: CSSProperties;
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
    <div style={props.style} {...props}>
      {memoState}
    </div>
  );
}

export default memo(MemoTest);
