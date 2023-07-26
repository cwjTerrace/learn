import { Button, Tooltip } from "antd";
import { TaskQueue } from "@/utils";
import { useEffect, useState, useRef, PropsWithChildren, Children } from "react";

import { css } from "@linaria/core";

const resultStyle = css`
  margin: 10px 0;
`;

const delayTask = (delay = 1) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 100);
  });
};

const taskQueues = new TaskQueue();
let randomValues: number[] = [];

function HomePage() {
  const [result, setResult] = useState<number[]>([]);

  const onMessage = (delay: number) => {
    taskQueues.push(async () => {
      await delayTask(delay);
      setResult((r) => [...r, delay]);
    });
  };

  useEffect(() => {
    const getRandom = () => Math.floor(Math.random() * (5 - 1)) + 1;
    const message = (delay: number) => {
      randomValues.push(delay);
      setTimeout(() => {
        onMessage(delay);
        if (randomValues.length >= 5) return;
        message(getRandom());
      });
    };
    message(getRandom());
  }, []);
  return (
    <div className="home-page">
      <div className={resultStyle}>结果： {JSON.stringify(result)}</div>
      <div>{JSON.stringify(randomValues)}</div>
      <Tooltip title="12312312">
        <Button disabled className="1231">按钮</Button>
      </Tooltip>
    </div>
  );
}

export default HomePage;
